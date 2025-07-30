import Link from 'next/link'
import { ArrowLeft, BookOpen, ExternalLink, Github, Globe, Video, FileText, Shield, Zap, Target, Code } from 'lucide-react'

const curatedLinks = [
  {
    category: 'DeFi & Blockchain Development',
    description: 'Essential resources for DeFi and blockchain development',
    links: [
      {
        title: 'DeFi Developer Roadmap',
        description: 'Here we collect and discuss the best DeFi & Blockchain researches and tools',
        url: 'https://defiroadmap.com/',
        type: 'Development Roadmap',
        icon: Globe,
      },
      {
        title: 'Smart Contract Best Practices',
        description: 'A guide to Ethereum smart contract security best practices',
        url: 'https://consensys.net/blog/developers/smart-contract-security-best-practices/',
        type: 'Security Guide',
        icon: Shield,
      },
      {
        title: 'ETH Gas Tracker',
        description: 'Monitor and track the Ethereum, and L2 gas prices to reduce transaction fees and save money',
        url: 'https://etherscan.io/gastracker',
        type: 'Gas Tracking',
        icon: Zap,
      },
    ],
  },

  {
    category: 'Development Tools & Resources',
    description: 'Essential tools and resources for Web3 development',
    links: [
      {
        title: 'Web3Collection',
        description: 'The biggest collection of tools and resources for web3 developers',
        url: 'https://www.web3collection.app/',
        type: 'Resource Collection',
        icon: Globe,
      },
      {
        title: 'Awesome Solidity',
        description: 'Github repository containing a collection of Solidity tools, libraries, and resources',
        url: 'https://github.com/bkrem/awesome-solidity',
        type: 'GitHub Repository',
        icon: Github,
      },
      {
        title: 'Solidity Language Docs',
        description: 'Official Solidity documentation',
        url: 'https://docs.soliditylang.org/',
        type: 'Documentation',
        icon: FileText,
      },
      {
        title: 'Solidity by Example',
        description: 'Solidity code samples and examples',
        url: 'https://solidity-by-example.org/',
        type: 'Code Examples',
        icon: Code,
      },
      {
        title: 'Hardhat',
        description: 'Professional Solidity development environment',
        url: 'https://hardhat.org/',
        type: 'Development Framework',
        icon: Code,
      },
    ],
  },
  {
    category: 'Blockchain & Cryptocurrency Resources',
    description: 'Essential resources for understanding blockchain and cryptocurrency',
    links: [
      {
        title: 'Ethereum Book',
        description: 'Andreas M\'s book on Mastering Ethereum Development',
        url: 'https://github.com/ethereumbook/ethereumbook',
        type: 'Book',
        icon: BookOpen,
      },
      {
        title: 'Blockchain Glossary',
        description: 'A Glossary of common web3 terms',
        url: 'https://www.blockchain.com/glossary',
        type: 'Reference',
        icon: FileText,
      },
      {
        title: 'ETH.Build',
        description: 'Educational sandbox for building on web3. Visually understand how Ethereum works by doing',
        url: 'https://eth.build/',
        type: 'Interactive Learning',
        icon: Video,
      },
      {
        title: 'Ethereum.org',
        description: 'Official Ethereum website with documentation and resources',
        url: 'https://ethereum.org/',
        type: 'Official Documentation',
        icon: Globe,
      },
      {
        title: 'Solana Cookbook',
        description: 'Developing with Solana and Rust',
        url: 'https://solanacookbook.com/',
        type: 'Development Guide',
        icon: FileText,
      },
    ],
  },
  {
    category: 'Security & Auditing',
    description: 'Resources for smart contract security and auditing',
    links: [
      {
        title: 'Consensys Diligence',
        description: 'Smart contract security auditing and best practices',
        url: 'https://consensys.net/diligence/',
        type: 'Security Auditing',
        icon: Shield,
      },
      {
        title: 'OpenZeppelin',
        description: 'Library for secure smart contract development',
        url: 'https://openzeppelin.com/',
        type: 'Security Library',
        icon: Shield,
      },
      {
        title: 'Trail of Bits',
        description: 'Security research and consulting for blockchain',
        url: 'https://www.trailofbits.com/',
        type: 'Security Research',
        icon: Shield,
      },
      {
        title: 'Certik',
        description: 'Blockchain security platform and auditing services',
        url: 'https://www.certik.com/',
        type: 'Security Platform',
        icon: Shield,
      },
      {
        title: 'MythX',
        description: 'Security analysis platform for Ethereum smart contracts',
        url: 'https://mythx.io/',
        type: 'Security Analysis',
        icon: Shield,
      },
    ],
  },
]

export default function CuratedLinksPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Curated Links</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            External resources like blog posts, videos, documentation, or repos. 
            Carefully selected by the community to help you on your blockchain development journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {curatedLinks.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{category.category}</h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                          <link.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300">{link.title}</h3>
                          <p className="text-white/80 text-sm mt-1">{link.description}</p>
                          <div className="flex items-center mt-2">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 text-xs px-2 py-1 rounded border border-white/20">{link.type}</span>
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Found a Great Resource?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Help the community by suggesting new curated links. Your contributions help other developers find the best resources.
          </p>
          <a
                            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Suggest a Resource
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 