import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Code, Zap, Shield, Globe, Star, FileCode } from 'lucide-react'

const codeExamples = [
  {
    category: 'Smart Contract Templates',
    description: 'Production-ready smart contract templates and libraries',
    examples: [
      {
        title: 'OpenZeppelin Contracts',
        description: 'Library for secure smart contract development with battle-tested implementations',
        language: 'Solidity',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        tags: ['Security', 'Standards', 'ERC20', 'ERC721'],
        icon: Shield,
      },
      {
        title: 'Neon EVM Contracts',
        description: 'Smart contracts and examples specifically for Neon EVM development',
        language: 'Solidity',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/neonevm/neon-contracts/tree/main',
        tags: ['Neon EVM', 'Cross-Chain', 'Solana'],
        icon: Code,
      },
      {
        title: 'Neon POCs',
        description: 'Proof of Concept implementations for Neon EVM features',
        language: 'Solidity',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/neonlabsorg/neon-pocs/tree/master',
        tags: ['POC', 'Neon EVM', 'Examples'],
        icon: Code,
      },
      {
        title: 'Neon Tutorials',
        description: 'Step-by-step tutorials and examples for Neon EVM development',
        language: 'Solidity',
        complexity: 'Beginner to Intermediate',
        githubUrl: 'https://github.com/neonlabsorg/neon-tutorials/tree/main',
        tags: ['Tutorials', 'Neon EVM', 'Learning'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Full-Stack Development Templates',
    description: 'Complete dApp templates and boilerplates',
    examples: [
      {
        title: 'Scaffold ETH 2',
        description: 'Forkable Ethereum development stack focused on fast product iterations',
        language: 'TypeScript/React',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/scaffold-eth/scaffold-eth-2',
        tags: ['Full Stack', 'Ethereum', 'React', 'Hardhat'],
        icon: Code,
      },
      {
        title: 'WalletConnect DApp',
        description: 'Create a dApp with WalletConnect integration',
        language: 'TypeScript/React',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/walletconnect/create-wc-dapp',
        tags: ['WalletConnect', 'React', 'Web3'],
        icon: Globe,
      },
      {
        title: 'Particle RainbowKit Boilerplate',
        description: 'Next.js dApp with Particle Network and RainbowKit integration',
        language: 'TypeScript/Next.js',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/TABASCOatw/particle-rainbowkit-boilerplate',
        tags: ['Next.js', 'RainbowKit', 'Particle Network'],
        icon: Code,
      },
      {
        title: 'Solidity Next.js Starter',
        description: 'Full-stack dApp template with Solidity and Next.js',
        language: 'Solidity/Next.js',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/tomhirst/solidity-nextjs-starter',
        tags: ['Next.js', 'Solidity', 'Full Stack'],
        icon: Code,
      },
      {
        title: 'DApp Boilerplate',
        description: 'Complete dApp template with modern web3 stack',
        language: 'TypeScript/React',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/JalelTounsi/DappBoilerplate',
        tags: ['React', 'Web3', 'TypeScript'],
        icon: Code,
      },
      {
        title: 'Web3 Starter Kit',
        description: 'Comprehensive starter kit for web3 development',
        language: 'TypeScript/React',
        complexity: 'Beginner to Intermediate',
        githubUrl: 'https://github.com/lakshh07/Web3-Starter-Kit',
        tags: ['Starter Kit', 'React', 'Web3'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Development Tools & Templates',
    description: 'Development frameworks and tooling templates',
    examples: [
      {
        title: 'Hardhat Template',
        description: 'Professional Hardhat development template with best practices',
        language: 'TypeScript',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/PaulRBerg/hardhat-template',
        tags: ['Hardhat', 'TypeScript', 'Testing'],
        icon: FileCode,
      },
    ],
  },
  {
    category: 'DeFi Protocols',
    description: 'DeFi protocol implementations and examples',
    examples: [
      {
        title: 'Uniswap V2 Core',
        description: 'Core smart contracts for Uniswap V2 AMM',
        language: 'Solidity',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/Uniswap/v2-core',
        tags: ['DeFi', 'AMM', 'DEX'],
        icon: Zap,
      },
      {
        title: 'Compound Protocol',
        description: 'The Compound protocol implementation',
        language: 'Solidity',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/compound-finance/compound-protocol',
        tags: ['DeFi', 'Lending', 'Protocol'],
        icon: Shield,
      },
    ],
  },
  {
    category: 'Frontend Integration',
    description: 'Frontend libraries and integration examples',
    examples: [
      {
        title: 'Web3.js',
        description: 'Ethereum JavaScript API for interacting with smart contracts',
        language: 'JavaScript',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/web3/web3.js',
        tags: ['JavaScript', 'Ethereum', 'API'],
        icon: Code,
      },
      {
        title: 'Ethers.js',
        description: 'Complete Ethereum wallet implementation and utilities',
        language: 'TypeScript',
        complexity: 'Intermediate',
        githubUrl: 'https://github.com/ethers-io/ethers.js',
        tags: ['TypeScript', 'Ethereum', 'Wallet'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Testing & Security',
    description: 'Testing frameworks and security tools',
    examples: [
      {
        title: 'Foundry',
        description: 'Fast, portable and modular toolkit for Ethereum application development',
        language: 'Rust',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/foundry-rs/foundry',
        tags: ['Testing', 'Rust', 'Fast'],
        icon: Shield,
      },
      {
        title: 'Mythril',
        description: 'Security analysis tool for Ethereum smart contracts',
        language: 'Python',
        complexity: 'Advanced',
        githubUrl: 'https://github.com/ConsenSys/mythril',
        tags: ['Security', 'Analysis', 'Python'],
        icon: Shield,
      },
    ],
  },
]

export default function CodeExamplesPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Code Samples & Templates</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Snippets or GitHub links showing practical implementation.
            Production-ready templates, boilerplates, and code examples for blockchain development.
          </p>
        </div>

        {/* Code Example Categories */}
        <div className="space-y-12">
          {codeExamples.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{category.category}</h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.examples.map((example) => (
                  <a
                    key={example.title}
                    href={example.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <example.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {example.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {example.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.language}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.complexity}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {example.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-[#1a1a1a] text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Github className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
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
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share Your Code</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great code example or template? Share it with the community and help other developers build better applications.
          </p>
                           <a
                   href="https://github.com/Avvrik/Dev-Playbook"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
                 >
                   Submit Code Example
                   <Code className="h-4 w-4 ml-2" />
                 </a>
        </div>
      </div>
    </div>
  )
} 