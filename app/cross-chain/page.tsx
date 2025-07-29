import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, Zap, Database } from 'lucide-react'

const topics = [
  {
    title: 'Neon Composability',
    description: 'Neon EVM composability libraries and cross-chain communication',
    icon: Globe,
    resources: [
      {
        title: 'Neon\'s Composability Libraries: Babel Fish for Blockchains',
        type: 'Technical Deep Dive',
        description: 'Exploring Neon\'s composability libraries and their role in cross-chain communication',
        link: 'https://www.neonevm.org/blog/neons-composability-libraries-babel-fish-for-blockchains',
        difficulty: 'Advanced',
      },
      {
        title: 'Unveiling Composability Whitepaper: A Unified Framework for Ethereum-Solana Interaction',
        type: 'Whitepaper Analysis',
        description: 'Deep dive into the composability whitepaper and cross-chain interaction framework',
        link: 'https://www.neonevm.org/blog/unveiling-composability-whitepaper-a-unified-framework-for-ethereum-solana-interaction',
        difficulty: 'Advanced',
      },
      {
        title: 'Deep Dive into Neon and Solana Composability',
        type: 'Technical Analysis',
        description: 'Understanding the composability between Neon EVM and Solana',
        link: 'https://www.neonevm.org/blog/deep-dive-into-neon-and-solana-composability',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'SDKs & Interfaces',
    description: 'Software development kits and interfaces for cross-chain development',
    icon: Code,
    resources: [
      {
        title: 'Unveiling Solana Signature SDK: Enabling Solana Users to Access EVM dApps',
        type: 'SDK Introduction',
        description: 'Introduction to the Solana Signature SDK for cross-chain dApp access',
        link: 'https://www.neonevm.org/blog/unveiling-solana-signature-sdk-enabling-solana-users-to-access-evm-dapps',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Enabling Solana Users to Access EVM dApps Running on Solana',
        type: 'Technical Guide',
        description: 'How Solana users can access EVM dApps through Neon EVM',
        link: 'https://www.neonevm.org/blog/enabling-solana-users-to-access-evm-dapps-running-on-solana',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Solana\'s 64 Account Limit: Thinking Past the Constraint',
        type: 'Technical Analysis',
        description: 'Understanding and working around Solana\'s 64 account limit in smart contract development',
        link: 'https://www.neonevm.org/blog/solanas-64-account-limit-thinking-past-the-constraint',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Cross-Chain DEX Integration',
    description: 'Decentralized exchange integration across multiple chains',
    icon: Zap,
    resources: [
      {
        title: 'Developer Demo: Memecoin Launchpad with Raydium Integration via Neon EVM',
        type: 'Project Demo',
        description: 'Building a memecoin launchpad with Raydium integration on Neon EVM',
        link: 'https://www.neonevm.org/blog/developer-demo--memecoin-launchpad-with-raydium-integration-via-neon-evm',
        difficulty: 'Intermediate',
      },
      {
        title: 'Effortless Cross-Chain Communication with NeonEVM, Hyperlane, and Solana\'s Speed',
        type: 'Technical Guide',
        description: 'Cross-chain communication using Neon EVM and Hyperlane',
        link: 'https://www.neonevm.org/blog/effortless-cross-chain-communication-with-neonevm-hyperlane-and-solanas-speed-part-2',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Bridge Development',
    description: 'Building cross-chain bridges and asset transfer protocols',
    icon: Target,
    resources: [
      {
        title: 'Cross-Chain Bridge Implementation',
        type: 'Code Example',
        description: 'Simple bridge implementation for asset transfer',
        link: 'https://github.com/neonlabsorg/neon-pocs/tree/master',
        difficulty: 'Advanced',
      },
      {
        title: 'Multi-Chain dApp Development',
        type: 'Tutorial',
        description: 'dApp that works across multiple blockchains',
        link: 'https://github.com/neonlabsorg/neon-tutorials/tree/main',
        difficulty: 'Intermediate to Advanced',
      },
    ],
  },
  {
    title: 'Neon EVM Development',
    description: 'Specific tools and resources for Neon EVM development',
    icon: Shield,
    resources: [
      {
        title: 'Neon EVM Contracts',
        type: 'Smart Contract Templates',
        description: 'Smart contracts and examples specifically for Neon EVM development',
        link: 'https://github.com/neonevm/neon-contracts/tree/main',
        difficulty: 'Intermediate',
      },
      {
        title: 'Neon POCs',
        type: 'Proof of Concept',
        description: 'Proof of Concept implementations for Neon EVM features',
        link: 'https://github.com/neonlabsorg/neon-pocs/tree/master',
        difficulty: 'Intermediate',
      },
      {
        title: 'Neon Tutorials',
        type: 'Tutorials',
        description: 'Step-by-step tutorials and examples for Neon EVM development',
        link: 'https://github.com/neonlabsorg/neon-tutorials/tree/main',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'How to Use Blockscout for Neon EVM',
        type: 'Tutorial',
        description: 'Step-by-step guide to using Blockscout for Neon EVM blockchain exploration',
        link: 'https://www.neonevm.org/blog/how-to-use-blockscout-for-neon-evm',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    title: 'Development Tools',
    description: 'Tools and frameworks for cross-chain development',
    icon: Database,
    resources: [
      {
        title: 'Hardhat Keystore: Secure Private Key Management for Developers',
        type: 'Security Guide',
        description: 'A comprehensive guide to secure private key management using Hardhat keystore',
        link: 'https://www.neonevm.org/blog/hardhat-keystore-secure-private-key-management-for-developers',
        difficulty: 'Intermediate',
      },
      {
        title: 'ElizaOS Plugin Action for Deploying Contracts on Neon EVM - A Developer\'s Tutorial',
        type: 'Tutorial',
        description: 'Complete tutorial on creating ElizaOS plugins for Neon EVM contract deployment',
        link: 'https://www.neonevm.org/blog/elizaos-plugin-action-for-deploying-contracts-on-neon-evm--a-developers-tutorial',
        difficulty: 'Intermediate',
      },
      {
        title: 'Building a Neon EVM Plugin for ElizaOS - A Developer\'s Tutorial',
        type: 'Tutorial',
        description: 'Step-by-step guide to building custom plugins for ElizaOS on Neon EVM',
        link: 'https://www.neonevm.org/blog/building-a-neon-evm-plugin-for-elizaos--a-developers-tutorial',
        difficulty: 'Intermediate',
      },
    ],
  },
]

const nextSteps = [
  {
    title: 'Beyond: Advanced Topics',
    description: 'Advanced blockchain development and ecosystem',
    link: '/beyond-advanced-topics',
  },
]

export default function CrossChainPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Cross-Chain Development</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Master cross-chain development with Neon EVM. Learn to build applications that work seamlessly 
            across Ethereum and Solana, leveraging the best of both ecosystems.
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
            Ready to explore advanced blockchain development concepts?
          </p>
          
          <div className="grid grid-cols-1 gap-4">
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
            Connect with other cross-chain developers, ask questions, and share your progress. 
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