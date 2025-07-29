import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, Zap, Database } from 'lucide-react'

const topics = [
  {
    title: 'Advanced Solidity',
    description: 'Master advanced Solidity concepts and patterns',
    icon: Code,
    resources: [
      {
        title: 'Solidity Language Docs',
        type: 'Documentation',
        description: 'Official Solidity documentation',
        link: 'https://docs.soliditylang.org/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Solidity by Example',
        type: 'Code Examples',
        description: 'Solidity code samples and examples',
        link: 'https://solidity-by-example.org/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'OpenZeppelin Contracts',
        type: 'Security Library',
        description: 'Library for secure smart contract development',
        link: 'https://openzeppelin.com/',
        difficulty: 'Advanced',
      },
      {
        title: 'Awesome Solidity',
        type: 'GitHub Repository',
        description: 'Github repository containing a collection of Solidity tools, libraries, and resources',
        link: 'https://github.com/bkrem/awesome-solidity',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Token Standards',
    description: 'ERC standards and token implementations',
    icon: Database,
    resources: [
      {
        title: 'OpenZeppelin Contracts',
        type: 'Security Library',
        description: 'Library for secure smart contract development with ERC20, ERC721 implementations',
        link: 'https://openzeppelin.com/',
        difficulty: 'Advanced',
      },
      {
        title: 'ERC20 Token Implementation',
        type: 'Code Example',
        description: 'Complete ERC-20 token contract with all standard functions',
        link: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        difficulty: 'Intermediate',
      },
      {
        title: 'ERC-721 NFT Contract',
        type: 'Code Example',
        description: 'Non-fungible token contract with metadata support',
        link: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    title: 'Tooling',
    description: 'Advanced development tools and frameworks',
    icon: Zap,
    resources: [
      {
        title: 'Hardhat',
        type: 'Development Framework',
        description: 'Professional Solidity development environment',
        link: 'https://hardhat.org/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Scaffold ETH 2',
        type: 'Full Stack Template',
        description: 'Forkable Ethereum development stack focused on fast product iterations',
        link: 'https://github.com/scaffold-eth/scaffold-eth-2',
        difficulty: 'Advanced',
      },
      {
        title: 'Foundry',
        type: 'Development Framework',
        description: 'Fast, portable and modular toolkit for Ethereum application development',
        link: 'https://github.com/foundry-rs/foundry',
        difficulty: 'Advanced',
      },
      {
        title: 'Mythril',
        type: 'Security Analysis',
        description: 'Security analysis tool for Ethereum smart contracts',
        link: 'https://github.com/ConsenSys/mythril',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'DeFi',
    description: 'Decentralized Finance protocols and applications',
    icon: Globe,
    resources: [
      {
        title: 'DeFi Developer Roadmap',
        type: 'Development Roadmap',
        description: 'Here we collect and discuss the best DeFi & Blockchain researches and tools',
        link: 'https://defiroadmap.com/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Uniswap V2 Core',
        type: 'Protocol Implementation',
        description: 'Core smart contracts for Uniswap V2 AMM',
        link: 'https://github.com/Uniswap/v2-core',
        difficulty: 'Advanced',
      },
      {
        title: 'Compound Protocol',
        type: 'Protocol Implementation',
        description: 'The Compound protocol implementation',
        link: 'https://github.com/compound-finance/compound-protocol',
        difficulty: 'Advanced',
      },
      {
        title: 'Curve.fi',
        type: 'DeFi Protocol',
        description: 'Decentralized exchange for stablecoins',
        link: 'https://curve.fi/',
        difficulty: 'Advanced',
      },
      {
        title: 'Sandclock',
        type: 'DeFi Protocol',
        description: 'Time-based DeFi protocol',
        link: 'https://www.sandclock.org/#start',
        difficulty: 'Advanced',
      },
      {
        title: 'PWN',
        type: 'Lending Protocol',
        description: 'Peer-to-peer lending protocol',
        link: 'https://pwn.xyz/',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Oracles',
    description: 'Data oracles and external data integration',
    icon: Target,
    resources: [
      {
        title: 'Chainlink',
        type: 'Oracle Network',
        description: 'Decentralized oracle network for smart contracts',
        link: 'https://chainlink.org/',
        difficulty: 'Intermediate to Advanced',
      },
    ],
  },
  {
    title: 'Data Indexing',
    description: 'Blockchain data indexing and analytics',
    icon: Database,
    resources: [
      {
        title: 'The Graph',
        type: 'Indexing Protocol',
        description: 'Decentralized protocol for indexing and querying blockchain data',
        link: 'https://thegraph.com/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Blockscout',
        type: 'Blockchain Explorer',
        description: 'Open-source blockchain explorer',
        link: 'https://blockscout.com/',
        difficulty: 'Intermediate',
      },
    ],
  },
]

const nextSteps = [
  {
    title: 'Solana Development',
    description: 'Build high-performance applications on Solana',
    link: '/solana',
  },
  {
    title: 'Cross-Chain Development',
    description: 'Master cross-chain development with Neon EVM',
    link: '/cross-chain',
  },
  {
    title: 'Beyond: Advanced Topics',
    description: 'Advanced blockchain development and ecosystem',
    link: '/beyond-advanced-topics',
  },
]

export default function EthereumPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Ethereum Development</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Master Ethereum development, advanced Solidity, DeFi protocols, and the Ethereum ecosystem. 
            Build sophisticated smart contracts and decentralized applications.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-8 mb-12">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4">
                  <topic.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-display font-semibold text-white">{topic.title}</h2>
              </div>
              <p className="text-white/80 mb-6">{topic.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center space-x-3">
                          <span className="inline-block bg-[#1a1a1a] text-white/70 text-xs px-2 py-1 rounded border border-white/20">
                            {resource.type}
                          </span>
                          <span className="inline-block bg-[#1a1a1a] text-white/70 text-xs px-2 py-1 rounded border border-white/20">
                            {resource.difficulty}
                          </span>
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

        {/* Next Steps */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-display font-semibold text-white mb-4">What's Next?</h2>
          <p className="text-white/80 mb-6">
            Ready to expand your blockchain expertise? Choose your next learning path.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nextSteps.map((step) => (
              <Link
                key={step.title}
                href={step.link}
                className="block p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
              >
                <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm">{step.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Community Call to Action */}
        <div className="bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Join Our Community</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with other Ethereum developers, ask questions, and share your progress. 
            Our community is here to support your blockchain development journey.
          </p>
          <div className="flex justify-center space-x-4">
                               <a
                     href="https://discord.gg/Y6E3FZAguZ"
                     className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Join Discord
                   </a>
                               <a
                     href="https://github.com/neon-playbook"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                   >
                     Contribute Resources
                   </a>
          </div>
        </div>
      </div>
    </div>
  )
} 