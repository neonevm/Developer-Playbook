# Developer's Playbook

Developer's Playbook is an open-source, community-driven knowledge hub tailored specifically for blockchain developers. 

It provides articles and curated resources, structured and organized by learning journeys for mastering blockchain topics, with a strong focus on Neon EVM, Ethereum, and Solana.

Explore the latest resources, tutorials, challenges, tools, courses and boilerplates and start learning. Once you're ready, contribute to help other developers build better applications.

Explore. Learn. Build. Contribute.

https://dev-playbook.vercel.app/

## Contributing

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository

2. **Submit Content**
   - Add new resources as individual markdown files in the appropriate folders
   - Use `app/resources/courses-grants/`, `app/resources/curated-links`, etc.
   - Include a learning journey stage tag for automatic categorization
   - Follow our content submission format (see below)

3. **Submit Pull Request**
   - Create a pull request from your fork
   - Our automated validation will check your submission
   - We'll review and approve

### Submission Format

All content should be submitted as markdown files with YAML frontmatter. **Important**: Include a learning journey stage tag for automatic categorization:

```markdown
---
title: "Your Resource Title"
description: "Brief description (max 240 characters)"
authors: ["@your_username"]
tags: ["Beginner Dev", "Neon EVM", "Smart Contracts"] # Must include ONE journey stage
languages: ["Solidity", "JavaScript"]
url: "https://example.com/your-resource"
dateAdded: 2024-01-15
level: "Beginner"
category: "Neon EVM"
---
```

### Learning Journey Stages

- **Beginner Dev**: Basic programming concepts, blockchain foundations, wallets and security
- **Early Stage Blockchain Dev**: Smart contracts, tooling, tokens, frontend integration
- **Ethereum Dev**: Advanced Solidity, DeFi, oracles, data indexing
- **Solana Dev**: Program logic, account management, performance optimization
- **Cross-Chain Dev**: Neon EVM, cross-chain DEX, bridge development
- **Beyond: Advanced Topics**: Advanced protocol design, infrastructure, product development

# Powered by

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg "Powered by Vercel")](https://vercel.com/?utm_source=dev-playbook&utm_campaign=oss)
