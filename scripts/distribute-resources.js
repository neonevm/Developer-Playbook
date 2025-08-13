// scripts/distribute-resources.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/** Canonical journey folders */
const STAGE_TO_FOLDER = {
  beginner: 'beginner',
  early: 'early-stage',
  ethereum: 'ethereum',
  solana: 'solana',
  'cross-chain': 'cross-chain',
  beyond: 'beyond-advanced-topics',
};

/** Accept both new tags and legacy/synonyms */
const STAGE_SYNONYMS = {
  beginner: ['beginner', 'beginner dev'],
  early: ['early', 'early stage', 'early-stage', 'early stage blockchain dev'],
  ethereum: ['ethereum', 'ethereum dev', 'solidity'],
  solana: ['solana', 'solana dev', 'rust'],
  'cross-chain': ['cross-chain', 'cross chain', 'cross-chain dev'],
  beyond: ['beyond', 'advanced', 'beyond: advanced topics'],
};

const RESOURCE_FOLDERS = [
  'app/resources/curated-links',
  'app/resources/guides-articles',
  'app/resources/courses-grants',
  'app/resources/code-examples',
];

const normal = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]/g, '');

function resolveStageKeyFromTags(tags = []) {
  const normTags = tags.map(normal);
  for (const [key, aliases] of Object.entries(STAGE_SYNONYMS)) {
    const normAliases = aliases.map(normal);
    if (normTags.some((t) => normAliases.includes(t))) return key;
  }
  return null;
}

function processMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    if (!Array.isArray(data.tags) || data.tags.length === 0) {
      console.log(`⚠️  No tags found in ${filePath}`);
      return null;
    }

    const stageKey = resolveStageKeyFromTags(data.tags);
    if (!stageKey) {
      console.log(
        `⚠️  No matching journey stage for tags [${data.tags.join(', ')}] in ${filePath}`
      );
      return null;
    }

    return {
      sourcePath: filePath,
      targetFolder: `app/${STAGE_TO_FOLDER[stageKey]}`,
      fileName: path.basename(filePath),
      stageKey,
    };
  } catch (e) {
    console.error(`❌ Error processing ${filePath}: ${e.message}`);
    return null;
  }
}

function copyFileToTarget(info) {
  const targetPath = path.join(info.targetFolder, info.fileName);

  if (!fs.existsSync(info.targetFolder)) {
    fs.mkdirSync(info.targetFolder, { recursive: true });
  }
  if (fs.existsSync(targetPath)) {
    console.log(`ℹ️  Already exists in target: ${targetPath}`);
    return false;
  }

  fs.copyFileSync(info.sourcePath, targetPath);
  console.log(`✅ Copied ${info.fileName} → ${info.targetFolder}/ (${info.stageKey})`);
  return true;
}

function processResourceFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️  Folder does not exist: ${folderPath}`);
    return;
  }
  console.log(`\n📁 Processing ${folderPath}`);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md') && f !== 'page.tsx');

  let processed = 0, copied = 0;
  for (const f of files) {
    const info = processMarkdownFile(path.join(folderPath, f));
    if (!info) continue;
    processed++;
    if (copyFileToTarget(info)) copied++;
  }
  console.log(`   Processed: ${processed}, Copied: ${copied}`);
}

function main() {
  console.log('🚀 Distributing resources by journey tag...\n');
  RESOURCE_FOLDERS.forEach(processResourceFolder);
  console.log('\n✨ Done. Files stay in app/resources and are also copied to their journey folders.');
}
main();
