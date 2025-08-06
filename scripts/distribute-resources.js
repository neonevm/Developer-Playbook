const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Mapping of tag patterns to learning journey folders
const tagToFolderMap = {
  // Beginner Dev -> app/beginner/
  'Beginner Dev': 'beginner',
  
  // Early Stage Blockchain Dev -> app/early-stage/
  'Early Stage Blockchain Dev': 'early-stage',
  
  // Ethereum Dev -> app/ethereum/
  'Ethereum Dev': 'ethereum',
  
  // Solana Dev -> app/solana/
  'Solana Dev': 'solana',
  
  // Cross-Chain Dev -> app/cross-chain/
  'Cross-Chain Dev': 'cross-chain',
  
  // Beyond: Advanced Topics -> app/beyond-advanced-topics/
  'Beyond: Advanced Topics': 'beyond-advanced-topics',
  
  // Advanced Dev -> app/beyond-advanced-topics/ (fallback for advanced content)
  'Advanced Dev': 'beyond-advanced-topics',
  
  // Intermediate Dev -> app/ethereum/ (fallback for intermediate content)
  'Intermediate Dev': 'ethereum'
};

// Resource folders to process
const resourceFolders = [
  'app/resources/curated-links',
  'app/resources/guides-articles', 
  'app/resources/courses-grants',
  'app/resources/code-examples'
];

function extractJourneyStage(tags) {
  if (!Array.isArray(tags)) {
    return null;
  }
  
  // Look for exact matches first
  for (const tag of tags) {
    if (tagToFolderMap[tag]) {
      return tagToFolderMap[tag];
    }
  }
  
  // Look for partial matches
  for (const tag of tags) {
    if (tag.includes('Beginner')) {
      return 'beginner';
    }
    if (tag.includes('Early Stage') || tag.includes('Early')) {
      return 'early-stage';
    }
    if (tag.includes('Ethereum') || tag.includes('Solidity')) {
      return 'ethereum';
    }
    if (tag.includes('Solana') || tag.includes('Rust')) {
      return 'solana';
    }
    if (tag.includes('Cross-Chain') || tag.includes('Cross Chain')) {
      return 'cross-chain';
    }
    if (tag.includes('Advanced') || tag.includes('Beyond')) {
      return 'beyond-advanced-topics';
    }
  }
  
  return null;
}

function processMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    
    if (!data.tags) {
      console.log(`⚠️  No tags found in ${filePath}`);
      return null;
    }
    
    const journeyStage = extractJourneyStage(data.tags);
    
    if (!journeyStage) {
      console.log(`⚠️  No matching journey stage found for tags: ${data.tags.join(', ')} in ${filePath}`);
      return null;
    }
    
    return {
      sourcePath: filePath,
      targetFolder: `app/${journeyStage}`,
      fileName: path.basename(filePath),
      tags: data.tags,
      journeyStage
    };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

function moveFile(fileInfo) {
  const targetPath = path.join(fileInfo.targetFolder, fileInfo.fileName);
  
  // Check if target directory exists, create if not
  if (!fs.existsSync(fileInfo.targetFolder)) {
    fs.mkdirSync(fileInfo.targetFolder, { recursive: true });
  }
  
  // Check if file already exists in target
  if (fs.existsSync(targetPath)) {
    console.log(`⚠️  File already exists in target: ${targetPath}`);
    return false;
  }
  
  try {
    // Move file to target location (copy then delete)
    fs.copyFileSync(fileInfo.sourcePath, targetPath);
    fs.unlinkSync(fileInfo.sourcePath);
    console.log(`✅ Moved ${fileInfo.fileName} to ${fileInfo.targetFolder}/ (${fileInfo.journeyStage})`);
    return true;
  } catch (error) {
    console.error(`❌ Error moving ${fileInfo.fileName}:`, error.message);
    return false;
  }
}

function processResourceFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️  Folder does not exist: ${folderPath}`);
    return;
  }
  
  console.log(`\n📁 Processing folder: ${folderPath}`);
  
  const files = fs.readdirSync(folderPath);
  const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'page.tsx');
  
  if (markdownFiles.length === 0) {
    console.log(`   No markdown files found in ${folderPath}`);
    return;
  }
  
  let processedCount = 0;
  let movedCount = 0;
  
  for (const file of markdownFiles) {
    const filePath = path.join(folderPath, file);
    const fileInfo = processMarkdownFile(filePath);
    
    if (fileInfo) {
      processedCount++;
      if (moveFile(fileInfo)) {
        movedCount++;
      }
    }
  }
  
  console.log(`   Processed: ${processedCount}, Moved: ${movedCount}`);
}

function createGitHubAction() {
  const workflowContent = `name: Distribute Resources

on:
  push:
    paths:
      - 'app/resources/**/*.md'
    branches:
      - main

jobs:
  distribute-resources:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
        
    - name: Run distribution script
      run: node scripts/distribute-resources.js
      
    - name: Commit changes
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add .
        git diff --quiet && git diff --staged --quiet || git commit -m "Auto-distribute resources to learning journey folders"
        
    - name: Push changes
      run: git push
`;

  const workflowPath = '.github/workflows/distribute-resources.yml';
  
  // Create .github/workflows directory if it doesn't exist
  if (!fs.existsSync('.github/workflows')) {
    fs.mkdirSync('.github/workflows', { recursive: true });
  }
  
  fs.writeFileSync(workflowPath, workflowContent);
  console.log(`✅ Created GitHub Action: ${workflowPath}`);
}

function main() {
  console.log('🚀 Starting resource distribution...\n');
  
  // Process each resource folder
  for (const folder of resourceFolders) {
    processResourceFolder(folder);
  }
  
  console.log('\n📊 Summary:');
  console.log('✅ Resource distribution completed!');
  console.log('📁 Files have been moved to appropriate learning journey folders based on their tags.');
  
  // Create GitHub Action for automation
  console.log('\n🔧 Creating GitHub Action for future automation...');
  createGitHubAction();
  
  console.log('\n✨ Setup complete!');
  console.log('📝 The GitHub Action will automatically run when new markdown files are added to app/resources/');
  console.log('🎯 Files will be distributed to learning journey folders based on their tags.');
}

// Run the script
main(); 