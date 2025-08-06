# Automated Resource Distribution System

This directory contains scripts that automatically distribute resources from `app/resources/*` folders to the appropriate learning journey folders based on their tags.

## Scripts

### `distribute-resources.js`

**Purpose**: Moves markdown files from resource folders to learning journey folders based on their tags.

**How it works**:
1. Scans `app/resources/curated-links`, `app/resources/guides-articles`, `app/resources/courses-grants`, and `app/resources/code-examples`
2. Reads the `tags` field from each markdown file's frontmatter
3. Maps tags to learning journey folders:
   - `"Beginner Dev"` → `app/beginner/`
   - `"Early Stage Blockchain Dev"` → `app/early-stage/`
   - `"Ethereum Dev"` → `app/ethereum/`
   - `"Solana Dev"` → `app/solana/`
   - `"Cross-Chain Dev"` → `app/cross-chain/`
   - `"Beyond: Advanced Topics"` → `app/beyond-advanced-topics/`
   - `"Advanced Dev"` → `app/beyond-advanced-topics/` (fallback)
   - `"Intermediate Dev"` → `app/ethereum/` (fallback)
4. Moves files to the appropriate folders
5. Creates a GitHub Action for automated future distribution

**Usage**:
```bash
node scripts/distribute-resources.js
```

### `generate-journey-pages.js`

**Purpose**: Generates dynamic `page.tsx` files for each learning journey folder that display resources from markdown files.

**How it works**:
1. Scans each learning journey folder (`app/beginner/`, `app/early-stage/`, etc.)
2. Reads all markdown files and extracts metadata from frontmatter
3. Groups resources by category
4. Generates a dynamic React component that displays the resources
5. Includes proper styling and navigation

**Usage**:
```bash
node scripts/generate-journey-pages.js
```

## Tag Mapping

The system uses the following tag patterns to determine where to place resources:

| Tag Pattern | Target Folder | Description |
|-------------|---------------|-------------|
| `"Beginner Dev"` | `app/beginner/` | Basic programming concepts, blockchain foundations |
| `"Early Stage Blockchain Dev"` | `app/early-stage/` | Smart contracts, tooling, tokens |
| `"Ethereum Dev"` | `app/ethereum/` | Advanced Solidity, DeFi, oracles |
| `"Solana Dev"` | `app/solana/` | Program logic, account management |
| `"Cross-Chain Dev"` | `app/cross-chain/` | Neon EVM, cross-chain DEX, bridge development |
| `"Beyond: Advanced Topics"` | `app/beyond-advanced-topics/` | Advanced protocol design, infrastructure |
| `"Advanced Dev"` | `app/beyond-advanced-topics/` | Fallback for advanced content |
| `"Intermediate Dev"` | `app/ethereum/` | Fallback for intermediate content |

## GitHub Action

The `distribute-resources.js` script creates a GitHub Action (`.github/workflows/distribute-resources.yml`) that:

- Triggers when markdown files are added to `app/resources/**/*.md`
- Runs the distribution script automatically
- Commits and pushes the changes

## Workflow

1. **Add Resources**: Place new markdown files in `app/resources/*` folders
2. **Tag Appropriately**: Include the correct learning journey tag in the frontmatter
3. **Automatic Distribution**: The GitHub Action will automatically move files to the correct learning journey folders
4. **Dynamic Pages**: The learning journey pages will automatically display the new resources

## Example Markdown File Structure

```markdown
---
title: "Your Resource Title"
description: "Brief description of your resource"
authors: ["@your_github_username"]
tags: ["Beginner Dev", "Solidity", "Smart Contracts"] # Must include ONE learning journey stage
languages: ["Solidity", "JavaScript"]
url: "https://example.com/your-resource"
dateAdded: 2024-01-15
level: "Beginner"
category: "Smart Contracts"
---

Your content goes here...
```

## Manual Execution

To manually run the distribution:

```bash
# Distribute resources to learning journey folders
node scripts/distribute-resources.js

# Generate dynamic pages for learning journey folders
node scripts/generate-journey-pages.js
```

## Notes

- Files are **moved** (not copied) from resource folders to learning journey folders
- The `page.tsx` files in resource folders are preserved
- The system handles partial tag matches (e.g., "Beginner" matches "Beginner Dev")
- Resources are grouped by category in the generated pages
- The GitHub Action ensures the process is automated for future contributions 