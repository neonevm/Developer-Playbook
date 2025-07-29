# Developer's Playbook

An open-source, community-driven knowledge hub tailored specifically for blockchain developers. Built by developers, for developers.

## 🚀 Mission

The Developer's Playbook provides articles and curated resources, structured and organized by learning journeys for mastering blockchain topics, with a strong focus on **Neon EVM**, **Ethereum**, and **Solana**.

**From devs - by devs - to devs** 🛠️

## 📚 Learning Journeys

### 🟢 Neon EVM
- Getting started with Neon EVM
- Building dApps on Neon
- Smart contract development
- Gas optimization strategies
- Cross-chain interoperability

### 🔵 Ethereum
- Solidity fundamentals
- Smart contract security
- DeFi development
- NFT development
- Layer 2 solutions

### 🟣 Solana
- Rust programming for Solana
- Solana program development
- SPL token standards
- Performance optimization
- DeFi on Solana

## 🎯 Purpose

### For Existing Developers
- **Boost retention and maintain engagement** by giving developers a platform to publish their ideas
- **Showcase skills** through meaningful contributions to an open-source project
- **Build portfolio** with visible GitHub commits and public proof of work
- **Leverage contributions** in resumes and professional profiles

### For New Developers
- **Attract new talent** by offering opportunities to build reputation as subject matter experts
- **Learn from community** through curated, peer-reviewed content
- **Gain recognition** through social media mentions and VIP Discord access

## 🤝 How to Contribute

### Contributor Flow

1. **Discover** - Find us on X or LinkedIn as an opportunity to build your portfolio
2. **Choose** - Click "Contribute to Playbook" or "Edit this page"
3. **Navigate** - Go to GitHub (main repo or specific page)
4. **Read Rules** - Review "How to contribute" guidelines
5. **Make Changes** - Edit content and submit a pull request
6. **Provide Info** - Include your Twitter and Discord handles
7. **Get Reviewed** - Neon's devrel team reviews and approves
8. **Join Community** - Successful contributors get VIP Discord access
9. **Get Featured** - Neon shares contributions on social media

### What We're Looking For

- **Technical tutorials** and guides
- **Best practices** and development tips
- **Code examples** and snippets
- **Architecture patterns** and design decisions
- **Security considerations** and audit findings
- **Performance optimization** techniques
- **Integration guides** and tooling tutorials

### Contribution Guidelines

- Write clear, well-structured content
- Include code examples where relevant
- Follow our style guide and formatting standards
- Provide context and explanations for beginners
- Include links to additional resources
- Test all code examples before submitting

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Content**: Markdown with MDX support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dev-playbook
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
dev-playbook/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── neon-evm/          # Neon EVM learning journey
│   ├── ethereum/          # Ethereum learning journey
│   └── solana/            # Solana learning journey
├── components/            # Reusable components
├── lib/                  # Utility functions
├── public/               # Static assets
├── content/              # Markdown content
└── README.md            # Project documentation
```

## 🎨 Customization

### Adding New Learning Journeys

1. Create a new directory in `app/` for your blockchain platform
2. Add a `page.tsx` file with your content
3. Update the navigation in the main page
4. Add any necessary components or utilities

### Content Management

Content is managed through:
- **Markdown files** in the `content/` directory
- **MDX** for interactive components
- **GitHub-based** collaboration workflow
- **Community review** process

## 🤝 Contributing

We welcome contributions from the blockchain developer community! This project follows the [First Contributions](https://github.com/code-driven/contributions) workflow for open source collaboration.

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository
   - This creates a copy in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/neon-playbook.git
   cd neon-playbook
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b add-your-feature-name
   ```

4. **Make Your Changes**
   - Add new resources, fix typos, improve content
   - Follow our content guidelines below
   - Test your changes locally

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your contribution"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin add-your-feature-name
   ```

7. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill out the PR template
   - Submit for review

### Content Guidelines

#### What We Accept
- **New Resources**: Courses, articles, tools, code examples
- **Content Improvements**: Better descriptions, categorization
- **Bug Fixes**: Broken links, typos, formatting issues
- **Feature Requests**: New sections, improved navigation
- **Documentation**: Better README, contribution guides

#### Content Standards
- **Accuracy**: All resources must be current and accurate
- **Quality**: Only high-quality, well-reviewed content
- **Relevance**: Must be relevant to blockchain development
- **Diversity**: Include resources from various sources and perspectives
- **Accessibility**: Ensure content is accessible to all developers

#### Resource Categories
- **Courses & Tutorials**: Structured learning paths
- **Articles & Guides**: In-depth technical content
- **Code Examples**: Working code samples and templates
- **Tools & Platforms**: Development tools and services
- **Community Resources**: Discord servers, forums, events

### Review Process

1. **Community Review**: All PRs are reviewed by community members
2. **Quality Check**: Content is verified for accuracy and relevance
3. **Merge**: Approved contributions are merged into main branch
4. **Recognition**: Contributors are featured in our community

### Getting Help

- **Discord**: Join our [Discord community](https://discord.gg/Y6E3FZAguZ) for help
- **Issues**: Open an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions

## 🤝 Community

### Discord
Join our community Discord for:
- Technical discussions
- Contribution guidance
- Networking with other developers
- VIP access for contributors

### Social Media
- **X (Twitter)**: @Neon_EVM
- **LinkedIn**: Developer's Playbook
- **GitHub**: neon-playbook

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built by the Neon team and developer community
- Inspired by the open-source spirit of blockchain development
- Powered by Next.js and Tailwind CSS
- Icons from Lucide React

## 📞 Support

For questions or support:
- Open an issue in the repository
- Join our Discord community
- Contact the Neon devrel team

---

**Built with ❤️ by the blockchain developer community**