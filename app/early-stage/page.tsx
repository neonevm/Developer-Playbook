import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, Zap } from 'lucide-react'

const topics = [
  {
    title: 'Smart Contracts & Languages',
    description: 'Learn Solidity and smart contract development fundamentals',
    icon: Code,
    resources: [
      {
        title: 'Solidity Language Docs',
        type: 'Documentation',
        description: 'Official Solidity documentation',
        link: 'https://docs.soliditylang.org/',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'Solidity by Example',
        type: 'Code Examples',
        description: 'Solidity code samples and examples',
        link: 'https://solidity-by-example.org/',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'OpenZeppelin Contracts',
        type: 'Security Library',
        description: 'Library for secure smart contract development',
        link: 'https://openzeppelin.com/',
        difficulty: 'Intermediate',
      },
      {
        title: 'Awesome Solidity',
        type: 'GitHub Repository',
        description: 'Github repository containing a collection of Solidity tools, libraries, and resources',
        link: 'https://github.com/bkrem/awesome-solidity',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    title: 'Tooling & Architecture',
    description: 'Development frameworks and blockchain architecture',
    icon: Zap,
    resources: [
      {
        title: 'Hardhat',
        type: 'Development Framework',
        description: 'Professional Solidity development environment',
        link: 'https://hardhat.org/',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'Scaffold ETH 2',
        type: 'Full Stack Template',
        description: 'Forkable Ethereum development stack focused on fast product iterations',
        link: 'https://github.com/scaffold-eth/scaffold-eth-2',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Solidity Next.js Starter',
        type: 'Full Stack Template',
        description: 'Full-stack dApp template with Solidity and Next.js',
        link: 'https://github.com/tomhirst/solidity-nextjs-starter',
        difficulty: 'Intermediate',
      },
      {
        title: 'Web3 Starter Kit',
        type: 'Starter Kit',
        description: 'Comprehensive starter kit for web3 development',
        link: 'https://github.com/lakshh07/Web3-Starter-Kit',
        difficulty: 'Beginner to Intermediate',
      },
    ],
  },
  {
    title: 'Tokens & Transactions',
    description: 'Understanding token standards and blockchain transactions',
    icon: Globe,
    resources: [
      {
        title: 'ETH Gas Tracker',
        type: 'Gas Tracking',
        description: 'Monitor and track the Ethereum, and L2 gas prices to reduce transaction fees and save money',
        link: 'https://etherscan.io/gastracker',
        difficulty: 'Beginner',
      },
      {
        title: 'Ethereum Book',
        type: 'Book',
        description: 'Andreas M\'s book on Mastering Ethereum Development',
        link: 'https://github.com/ethereumbook/ethereumbook',
        difficulty: 'Intermediate',
      },
      {
        title: 'Ethereum.org',
        type: 'Official Documentation',
        description: 'Official Ethereum website with documentation and resources',
        link: 'https://ethereum.org/',
        difficulty: 'Beginner to Intermediate',
      },
    ],
  },
  {
    title: 'Connecting to Frontend',
    description: 'Web3 integration and frontend development',
    icon: Target,
    resources: [
      {
        title: 'WalletConnect',
        type: 'Wallet Protocol',
        description: 'Open protocol for connecting wallets to dapps',
        link: 'https://walletconnect.com/',
        difficulty: 'Intermediate',
      },
      {
        title: 'WalletConnect DApp',
        type: 'Template',
        description: 'Create a dApp with WalletConnect integration',
        link: 'https://github.com/walletconnect/create-wc-dapp',
        difficulty: 'Intermediate',
      },
      {
        title: 'Particle RainbowKit Boilerplate',
        type: 'Template',
        description: 'Next.js dApp with Particle Network and RainbowKit integration',
        link: 'https://github.com/TABASCOatw/particle-rainbowkit-boilerplate',
        difficulty: 'Intermediate',
      },
      {
        title: 'DApp Boilerplate',
        type: 'Template',
        description: 'Complete dApp template with modern web3 stack',
        link: 'https://github.com/JalelTounsi/DappBoilerplate',
        difficulty: 'Intermediate',
      },
    ],
  },
]

const nextSteps = [
  {
    title: 'Ethereum Development',
    description: 'Master advanced Solidity, DeFi protocols, and Ethereum ecosystem',
    link: '/ethereum',
  },
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
]

export default function EarlyStagePage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Early Stage Blockchain Development</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Learn the fundamentals of blockchain development, smart contracts, and essential tooling. 
            Build your first dApps and understand the core concepts of web3 development.
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
            Ready to specialize? Choose your next learning path based on your interests and goals.
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
            Connect with other developers, ask questions, and share your progress. 
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