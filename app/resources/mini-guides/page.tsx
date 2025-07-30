import Link from 'next/link'
import { ArrowLeft, Target, ExternalLink, BookOpen, Code, Zap, Shield, Database } from 'lucide-react'

const miniGuides = [
  {
    category: 'Smart Contract Concepts',
    description: 'Focused guides on specific smart contract concepts',
    guides: [
      {
        title: 'Understanding ERC-20 Token Standard',
        description: 'Complete guide to the ERC-20 token standard with implementation examples',
        difficulty: 'Beginner',
        duration: '15 min',
        tags: ['Ethereum', 'Tokens', 'ERC-20'],
        url: 'https://example.com/erc20-guide',
        icon: Database,
      },
      {
        title: 'Gas Optimization Basics',
        description: 'Essential techniques for reducing gas costs in smart contracts',
        difficulty: 'Intermediate',
        duration: '20 min',
        tags: ['Ethereum', 'Gas', 'Optimization'],
        url: 'https://example.com/gas-basics',
        icon: Zap,
      },
      {
        title: 'Reentrancy Attacks Prevention',
        description: 'How to prevent reentrancy attacks in smart contracts',
        difficulty: 'Intermediate',
        duration: '25 min',
        tags: ['Security', 'Vulnerabilities', 'Prevention'],
        url: 'https://example.com/reentrancy',
        icon: Shield,
      },
      {
        title: 'Events and Logging in Solidity',
        description: 'Using events for efficient data logging and frontend communication',
        difficulty: 'Beginner',
        duration: '18 min',
        tags: ['Solidity', 'Events', 'Logging'],
        url: 'https://example.com/events-logging',
        icon: Code,
      },
    ],
  },
  {
    category: 'Development Tools',
    description: 'Guides for using development tools and frameworks',
    guides: [
      {
        title: 'Hardhat Setup and Configuration',
        description: 'Complete setup guide for Hardhat development environment',
        difficulty: 'Beginner',
        duration: '30 min',
        tags: ['Hardhat', 'Setup', 'Configuration'],
        url: 'https://example.com/hardhat-setup',
        icon: Code,
      },
      {
        title: 'Remix IDE Deep Dive',
        description: 'Master the Remix IDE for smart contract development',
        difficulty: 'Beginner',
        duration: '25 min',
        tags: ['Remix', 'IDE', 'Development'],
        url: 'https://example.com/remix-guide',
        icon: Code,
      },
      {
        title: 'Foundry Testing Framework',
        description: 'Write efficient tests using Foundry for Solidity contracts',
        difficulty: 'Intermediate',
        duration: '35 min',
        tags: ['Foundry', 'Testing', 'Solidity'],
        url: 'https://example.com/foundry-testing',
        icon: Code,
      },
      {
        title: 'MetaMask Integration Guide',
        description: 'Integrate MetaMask wallet into your dApp frontend',
        difficulty: 'Beginner',
        duration: '20 min',
        tags: ['MetaMask', 'Frontend', 'Wallet'],
        url: 'https://example.com/metamask-integration',
        icon: Code,
      },
    ],
  },
  {
    category: 'Blockchain Fundamentals',
    description: 'Core blockchain concepts explained clearly',
    guides: [
      {
        title: 'Public Key Cryptography',
        description: 'Understanding public key cryptography in blockchain',
        difficulty: 'Beginner',
        duration: '22 min',
        tags: ['Cryptography', 'Security', 'Basics'],
        url: 'https://example.com/public-key-crypto',
        icon: Shield,
      },
      {
        title: 'Consensus Mechanisms Explained',
        description: 'Proof of Work, Proof of Stake, and other consensus mechanisms',
        difficulty: 'Beginner',
        duration: '28 min',
        tags: ['Consensus', 'PoW', 'PoS'],
        url: 'https://example.com/consensus-mechanisms',
        icon: Database,
      },
      {
        title: 'Merkle Trees and Data Integrity',
        description: 'How Merkle trees ensure data integrity in blockchains',
        difficulty: 'Intermediate',
        duration: '32 min',
        tags: ['Merkle Trees', 'Data Integrity', 'Cryptography'],
        url: 'https://example.com/merkle-trees',
        icon: Database,
      },
      {
        title: 'UTXO vs Account Model',
        description: 'Understanding different blockchain state models',
        difficulty: 'Intermediate',
        duration: '26 min',
        tags: ['UTXO', 'Account Model', 'State'],
        url: 'https://example.com/utxo-vs-account',
        icon: Database,
      },
    ],
  },
  {
    category: 'DeFi Concepts',
    description: 'Decentralized Finance concepts and implementations',
    guides: [
      {
        title: 'Automated Market Makers (AMMs)',
        description: 'How AMMs work and their mathematical foundations',
        difficulty: 'Intermediate',
        duration: '40 min',
        tags: ['DeFi', 'AMM', 'DEX'],
        url: 'https://example.com/amm-guide',
        icon: Zap,
      },
      {
        title: 'Liquidity Pools Explained',
        description: 'Understanding liquidity pools and impermanent loss',
        difficulty: 'Intermediate',
        duration: '35 min',
        tags: ['DeFi', 'Liquidity', 'Yield'],
        url: 'https://example.com/liquidity-pools',
        icon: Zap,
      },
      {
        title: 'Flash Loans Implementation',
        description: 'How to implement and use flash loans in DeFi',
        difficulty: 'Advanced',
        duration: '45 min',
        tags: ['DeFi', 'Flash Loans', 'Advanced'],
        url: 'https://example.com/flash-loans',
        icon: Zap,
      },
      {
        title: 'Yield Farming Strategies',
        description: 'Common yield farming strategies and their risks',
        difficulty: 'Intermediate',
        duration: '38 min',
        tags: ['DeFi', 'Yield Farming', 'Strategies'],
        url: 'https://example.com/yield-farming',
        icon: Zap,
      },
    ],
  },
  {
    category: 'Cross-Chain Development',
    description: 'Guides for cross-chain and multi-chain development',
    guides: [
      {
        title: 'Neon EVM Basics',
        description: 'Getting started with Neon EVM on Solana',
        difficulty: 'Beginner',
        duration: '30 min',
        tags: ['Neon EVM', 'Solana', 'Ethereum'],
        url: 'https://example.com/neon-evm-basics',
        icon: Code,
      },
      {
        title: 'Bridge Security Best Practices',
        description: 'Security considerations for cross-chain bridges',
        difficulty: 'Advanced',
        duration: '50 min',
        tags: ['Bridges', 'Security', 'Cross-Chain'],
        url: 'https://example.com/bridge-security',
        icon: Shield,
      },
      {
        title: 'Cross-Chain Messaging',
        description: 'Implementing cross-chain communication protocols',
        difficulty: 'Advanced',
        duration: '55 min',
        tags: ['Cross-Chain', 'Messaging', 'Protocols'],
        url: 'https://example.com/cross-chain-messaging',
        icon: Code,
      },
      {
        title: 'Multi-Chain dApp Architecture',
        description: 'Designing dApps that work across multiple chains',
        difficulty: 'Intermediate',
        duration: '42 min',
        tags: ['Architecture', 'Multi-Chain', 'dApps'],
        url: 'https://example.com/multi-chain-architecture',
        icon: Code,
      },
    ],
  },
]

export default function MiniGuidesPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Mini-Guides
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            One-topic focused pieces that explain concepts clearly. 
            Perfect for developers who want to understand specific blockchain concepts quickly.
          </p>
        </div>

        {/* Guide Categories */}
        <div className="space-y-12">
          {miniGuides.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">
                  {category.category}
                </h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.guides.map((guide) => (
                  <a
                    key={guide.title}
                    href={guide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <guide.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {guide.difficulty}
                            </span>
                            <span>{guide.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {guide.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block bg-[#1a1a1a] text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
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
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Create a Mini-Guide
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a specific concept you want to explain? Create a focused mini-guide to help other developers understand it quickly.
          </p>
          <a
                            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Write a Mini-Guide
            <Target className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 