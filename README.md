# Developer's Playbook

Developer's Playbook is an open-source, community-driven knowledge hub tailored specifically for blockchain developers. 

It provides articles and curated resources, structured and organized by learning journeys for mastering blockchain topics, with a strong focus on Neon EVM, Ethereum, and Solana.

## Contributing

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository

2. **Submit Content**
   - Add new resources as individual markdown files in the appropriate folders inside 'app/resources' folder
   - Include a learning journey stage tag for automatic categorization
   - Follow our content submission format (see below)
   - ✅ To publish your own article directly in the Playbook (Builder-Powered Articles section), add your `.md` file to:
     `/app/resources/guides-articles`
     using the template here:
     `/app/resources/guides-articles/_TEMPLATE.md`
     and include:
     `category: "community"`

3. **Submit Pull Request**
   - Create a pull request from your fork
   - Our editors will review your submission & add to the website

### Submission Format

All content should be submitted as markdown files and should include a learning journey stage tag for automatic categorization:

```markdown
---
title: "How to Publish Your Article"
slug: "how-to-publish"
description: "Use this template when submitting your article on GitHub"
authors: ["@Jules_Gallen"]          # show the first author on the cards
category: "Community"                # use "Community" category to publish your own article
tags: ["community", "neon", "beginner"]   # use "Community" tag to publish your own article
level: "Beginner"                   # Beginner | Intermediate | Advanced
dateAdded: "2025-10-27"             # ISO date or YYYY-MM-DD
cover: "/articles/how-to-publish/cover.png"  # optional, put file in /public/articles/<slug>/
readTime: ""                        # optional; auto-calculated if empty
---
```

### Tags to categorize by journey stage

- **Beginner**: Basic programming concepts, blockchain foundations, wallets and security
- **Early**: Smart contracts, tooling, tokens, frontend integration
- **Ethereum**: Advanced Solidity, DeFi, oracles, data indexing
- **Solana**: Program logic, account management, performance optimization
- **Cross-Chain**: Neon EVM, cross-chain DEX, bridge development
- **Beyond**: Advanced protocol design, infrastructure, product development

# Powered by

Cloudflare Pages
