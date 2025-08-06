## PR Template

### Guidelines for Content

1. All resources should be submitted in markdown format in their respective subfolders in `/content`.
2. The filename should be a 'slugified' version of the title (lowercase, hyphens instead of spaces).
3. Date formats should be in YYYY-MM-DD.
4. Properties with a ? are optional.

### Properties

- **title**: string
- **description**: string (max. 240 chars)
- **content**: string
- **authors**: Array<string>
- **date**?: Date
- **level**: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
- **tags**: Array<string> (must include one learning journey stage)
- **languages**: Array<string>
- **url**: string
- **alternateUrl**?: string
- **dateAdded**: Date
- **category**: 'Neon EVM' | 'Ethereum' | 'Solana' | 'Cross-Chain' | 'General'

### Learning Journey Stages (Required Tag)

Your content must include ONE of these tags to specify which learning journey stage it belongs to:

- **Beginner Dev**: Basic programming concepts, blockchain foundations, wallets and security
- **Early Stage Blockchain Dev**: Smart contracts, tooling, tokens, frontend integration
- **Ethereum Dev**: Advanced Solidity, DeFi, oracles, data indexing
- **Solana Dev**: Program logic, account management, performance optimization
- **Cross-Chain Dev**: Neon EVM, cross-chain DEX, bridge development
- **Beyond: Advanced Topics**: Advanced protocol design, infrastructure, product development

### Content Categories

- **books**: Educational books and textbooks
- **courses**: Online courses and tutorials
- **guides**: Step-by-step guides and how-tos
- **tools**: Development tools and utilities
- **tutorials**: Code tutorials and examples
- **resources**: General learning resources
- **articles**: Blog posts and articles
- **videos**: Video content and presentations

### Additional Notes

- Please check and use existing tags from the site - Do not use any other tags. If you feel like something is missing, please create a separate issue/PR.
- Please check and use existing programming languages from the site - Feel free to add new languages, but only submit actual programming languages (not protocols or other tags).
- Ensure all links are working and accessible.
- Follow the existing content structure and formatting.

Thank you for your contribution! 