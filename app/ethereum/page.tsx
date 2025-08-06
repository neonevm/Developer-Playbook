import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
  {
    title: 'Neon EVM',
    description: 'Resources for neon evm development and learning',
    icon: Globe,
    resources: [      {
        title: 'Building a Neon EVM Plugin for ElizaOS - A Developer\'s Tutorial',
        type: 'Neon EVM',
        description: 'Step-by-step guide to building custom plugins for ElizaOS on Neon EVM',
        link: 'https://www.neonevm.org/blog/building-a-neon-evm-plugin-for-elizaos--a-developers-tutorial',
        difficulty: 'Intermediate',
      },      {
        title: 'Developer Demo: Memecoin Launchpad with Raydium Integration via Neon EVM',
        type: 'Neon EVM',
        description: 'Building a memecoin launchpad with Raydium integration on Neon EVM',
        link: 'https://www.neonevm.org/blog/developer-demo--memecoin-launchpad-with-raydium-integration-via-neon-evm',
        difficulty: 'Intermediate',
      },      {
        title: 'ElizaOS Plugin Action for Deploying Contracts on Neon EVM - A Developer\'s Tutorial',
        type: 'Neon EVM',
        description: 'Complete tutorial on creating ElizaOS plugins for Neon EVM contract deployment',
        link: 'https://www.neonevm.org/blog/elizaos-plugin-action-for-deploying-contracts-on-neon-evm--a-developers-tutorial',
        difficulty: 'Intermediate',
      },      {
        title: 'Hardhat Keystore: Secure Private Key Management for Developers',
        type: 'Neon EVM',
        description: 'A comprehensive guide to secure private key management using Hardhat keystore',
        link: 'https://www.neonevm.org/blog/hardhat-keystore-secure-private-key-management-for-developers',
        difficulty: 'Intermediate',
      },      {
        title: 'Neon\'s Composability Libraries: Babel Fish for Blockchains',
        type: 'Neon EVM',
        description: 'Exploring Neon\'s composability libraries and their role in cross-chain communication',
        link: 'https://www.neonevm.org/blog/neons-composability-libraries-babel-fish-for-blockchains',
        difficulty: 'Intermediate',
      },
    ],
  },  {
    title: 'Ethereum',
    description: 'Resources for ethereum development and learning',
    icon: Globe,
    resources: [      {
        title: 'The Complete Guide to Full Stack Ethereum Development',
        type: 'Ethereum',
        description: 'Building Full Stack dApps with React, Ethers.js, Solidity, and Hardhat',
        link: 'https://www.freecodecamp.org/news/full-stack-ethereum-development/',
        difficulty: 'Intermediate',
      },      {
        title: 'How Does Ethereum Work, Anyway?',
        type: 'Ethereum',
        description: 'A comprehensive breakdown of Ethereum\'s inner workings and mechanisms',
        link: 'https://www.preethikasireddy.com/post/how-does-ethereum-work-anyway',
        difficulty: 'Intermediate',
      },      {
        title: 'What Happens When You Send One DAI',
        type: 'Ethereum',
        description: 'Detailed walkthrough of what happens when you send a DAI transaction',
        link: 'https://www.notonlyowner.com/learn/what-happens-when-you-send-one-dai',
        difficulty: 'Intermediate',
      },      {
        title: 'What is ERC-4337?',
        type: 'Ethereum',
        description: 'Account abstraction without Ethereum protocol changes',
        link: 'https://www.youtube.com/watch?v=QuYZWJj65AY',
        difficulty: 'Intermediate',
      },
    ],
  },  {
    title: 'Cross-Chain',
    description: 'Resources for cross-chain development and learning',
    icon: Globe,
    resources: [      {
        title: 'Enabling Solana Users to Access EVM dApps Running on Solana',
        type: 'Cross-Chain',
        description: 'Technical implementation of cross-chain dApp access for Solana users',
        link: 'https://www.neonevm.org/blog/enabling-solana-users-to-access-evm-dapps-running-on-solana',
        difficulty: 'Intermediate',
      },      {
        title: 'Unveiling Solana Signature SDK: Enabling Solana Users to Access EVM dApps',
        type: 'Cross-Chain',
        description: 'Introduction to the Solana Signature SDK for cross-chain dApp access',
        link: 'https://www.neonevm.org/blog/unveiling-solana-signature-sdk-enabling-solana-users-to-access-evm-dapps',
        difficulty: 'Intermediate',
      },
    ],
  },  {
    title: 'Blockchain Resources',
    description: 'Resources for blockchain resources development and learning',
    icon: Globe,
    resources: [      {
        title: 'Ethereum Book',
        type: 'Blockchain Resources',
        description: 'Andreas M\'s book on Mastering Ethereum Development',
        link: 'https://github.com/ethereumbook/ethereumbook',
        difficulty: 'Intermediate',
      },      {
        title: 'Solana Cookbook',
        type: 'Blockchain Resources',
        description: 'Developing with Solana and Rust',
        link: 'https://solanacookbook.com/',
        difficulty: 'Intermediate',
      },
    ],
  },  {
    title: 'Smart Contract Templates',
    description: 'Resources for smart contract templates development and learning',
    icon: Globe,
    resources: [      {
        title: 'OpenZeppelin Contracts',
        type: 'Smart Contract Templates',
        description: 'Library for secure smart contract development with battle-tested implementations',
        link: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'Security',
    description: 'Resources for security development and learning',
    icon: Shield,
    resources: [      {
        title: 'OpenZeppelin',
        type: 'Security',
        description: 'Library for secure smart contract development',
        link: 'https://openzeppelin.com/',
        difficulty: 'Intermediate',
      },
    ],
  },  {
    title: 'Full-Stack Development Templates',
    description: 'Resources for full-stack development templates development and learning',
    icon: Globe,
    resources: [      {
        title: 'Scaffold ETH 2',
        type: 'Full-Stack Development Templates',
        description: 'Forkable Ethereum development stack focused on fast product iterations',
        link: 'https://github.com/scaffold-eth/scaffold-eth-2',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'General',
    description: 'Resources for general development and learning',
    icon: Globe,
    resources: [      {
        title: 'Zero Knowledge is Easy - The Ultimate How-To Article',
        type: 'General',
        description: 'Comprehensive guide to understanding and implementing zero-knowledge proofs',
        link: 'https://blog.borodutch.com/zero-knowledge-is-easy-or-the-ultimate-how-to-article/',
        difficulty: 'Intermediate',
      },
    ],
  },
]

export default function EthereumPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Ethereum
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Comprehensive resources for ethereum development. 
            From fundamentals to advanced topics, find everything you need to master ethereum development.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-12">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4">
                    <topic.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-white">
                    {topic.title}
                  </h2>
                </div>
                <p className="text-white/80">{topic.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topic.resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20 text-xs">
                            {resource.difficulty}
                          </span>
                          <span className="text-white/50 text-xs">{resource.type}</span>
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
            Share Your Knowledge
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great ethereum resource? Help the community by contributing to our collection.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Contribute Resource
            <Github className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}