import Link from 'next/link'
import { ArrowLeft, BookOpen, ExternalLink, Code, Target, Shield, Globe, Clock, User } from 'lucide-react'

const originalArticles = [
  {
    category: 'Neon EVM & Cross-Chain Development',
    description: 'Articles focused on Neon EVM development and cross-chain interoperability',
    articles: [
      {
        title: 'Neon\'s Composability Libraries: Babel Fish for Blockchains',
        description: 'Exploring Neon\'s composability libraries and their role in cross-chain communication',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '8 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/neons-composability-libraries-babel-fish-for-blockchains',
        type: 'Technical Deep Dive',
        icon: Globe,
      },
      {
        title: 'Hardhat Keystore: Secure Private Key Management for Developers',
        description: 'A comprehensive guide to secure private key management using Hardhat keystore',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '6 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/hardhat-keystore-secure-private-key-management-for-developers',
        type: 'Security Guide',
        icon: Shield,
      },
      {
        title: 'How to Use Blockscout for Neon EVM',
        description: 'Step-by-step guide to using Blockscout for Neon EVM blockchain exploration',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '5 min',
        difficulty: 'Beginner',
        url: 'https://www.neonevm.org/blog/how-to-use-blockscout-for-neon-evm',
        type: 'Tutorial',
        icon: Code,
      },
      {
        title: 'Solana\'s 64 Account Limit: Thinking Past the Constraint',
        description: 'Understanding and working around Solana\'s 64 account limit in smart contract development',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '10 min',
        difficulty: 'Advanced',
        url: 'https://www.neonevm.org/blog/solanas-64-account-limit-thinking-past-the-constraint',
        type: 'Technical Analysis',
        icon: Code,
      },
      {
        title: 'Unveiling Composability Whitepaper: A Unified Framework for Ethereum-Solana Interaction',
        description: 'Deep dive into the composability whitepaper and cross-chain interaction framework',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '15 min',
        difficulty: 'Advanced',
        url: 'https://www.neonevm.org/blog/unveiling-composability-whitepaper-a-unified-framework-for-ethereum-solana-interaction',
        type: 'Whitepaper Analysis',
        icon: BookOpen,
      },
      {
        title: 'ElizaOS Plugin Action for Deploying Contracts on Neon EVM - A Developer\'s Tutorial',
        description: 'Complete tutorial on creating ElizaOS plugins for Neon EVM contract deployment',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '12 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/elizaos-plugin-action-for-deploying-contracts-on-neon-evm--a-developers-tutorial',
        type: 'Tutorial',
        icon: Code,
      },
      {
        title: 'Developer Demo: Memecoin Launchpad with Raydium Integration via Neon EVM',
        description: 'Building a memecoin launchpad with Raydium integration on Neon EVM',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '8 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/developer-demo--memecoin-launchpad-with-raydium-integration-via-neon-evm',
        type: 'Project Demo',
        icon: Target,
      },
      {
        title: 'Building a Neon EVM Plugin for ElizaOS - A Developer\'s Tutorial',
        description: 'Step-by-step guide to building custom plugins for ElizaOS on Neon EVM',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '10 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/building-a-neon-evm-plugin-for-elizaos--a-developers-tutorial',
        type: 'Tutorial',
        icon: Code,
      },
      {
        title: 'Unveiling Solana Signature SDK: Enabling Solana Users to Access EVM dApps',
        description: 'Introduction to the Solana Signature SDK for cross-chain dApp access',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '7 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/unveiling-solana-signature-sdk-enabling-solana-users-to-access-evm-dapps',
        type: 'SDK Guide',
        icon: Code,
      },
      {
        title: 'Enabling Solana Users to Access EVM dApps Running on Solana',
        description: 'Technical implementation of cross-chain dApp access for Solana users',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '9 min',
        difficulty: 'Intermediate',
        url: 'https://www.neonevm.org/blog/enabling-solana-users-to-access-evm-dapps-running-on-solana',
        type: 'Technical Guide',
        icon: Globe,
      },
      {
        title: 'Deep Dive into Neon and Solana Composability',
        description: 'Comprehensive analysis of composability between Neon and Solana ecosystems',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '12 min',
        difficulty: 'Advanced',
        url: 'https://www.neonevm.org/blog/deep-dive-into-neon-and-solana-composability',
        type: 'Technical Deep Dive',
        icon: Globe,
      },
      {
        title: 'Effortless Cross-Chain Communication with NeonEVM, Hyperlane, and Solana\'s Speed - Part 2',
        description: 'Advanced cross-chain communication techniques using NeonEVM and Hyperlane',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '11 min',
        difficulty: 'Advanced',
        url: 'https://www.neonevm.org/blog/effortless-cross-chain-communication-with-neonevm-hyperlane-and-solana-s-speed-part-2',
        type: 'Technical Guide',
        icon: Globe,
      },
      {
        title: 'Exploring SVM Scalability Solutions with Demand-Driven Modularity',
        description: 'Analysis of Solana Virtual Machine scalability solutions and modular approaches',
        author: 'Neon EVM Team',
        date: '2024',
        readTime: '10 min',
        difficulty: 'Advanced',
        url: 'https://www.neonevm.org/blog/exploring-svm-scalability-solutions-with-demand-driven-modularity',
        type: 'Technical Analysis',
        icon: Code,
      },
    ],
  },
  {
    category: 'Blockchain Fundamentals & Deep Dives',
    description: 'In-depth articles explaining blockchain concepts and mechanisms',
    articles: [
      {
        title: 'How Does Ethereum Work, Anyway?',
        description: 'A comprehensive breakdown of Ethereum\'s inner workings and mechanisms',
        author: 'Preethi Kasireddy',
        date: '2017',
        readTime: '20 min',
        difficulty: 'Intermediate',
        url: 'https://www.preethikasireddy.com/post/how-does-ethereum-work-anyway',
        type: 'Educational',
        icon: BookOpen,
      },
      {
        title: 'What Happens When You Send One DAI',
        description: 'Detailed walkthrough of what happens when you send a DAI transaction',
        author: 'Not Only Owner',
        date: '2021',
        readTime: '15 min',
        difficulty: 'Intermediate',
        url: 'https://www.notonlyowner.com/learn/what-happens-when-you-send-one-dai',
        type: 'Transaction Analysis',
        icon: Globe,
      },
      {
        title: 'ERC20 Weirdness & Attacks - Part 1',
        description: 'Analysis of ERC20 token vulnerabilities and attack vectors',
        author: '33 Audits',
        date: '2023',
        readTime: '12 min',
        difficulty: 'Advanced',
        url: 'https://33audits.hashnode.dev/erc20-weirdness-attacks-part-1',
        type: 'Security Analysis',
        icon: Shield,
      },
      {
        title: 'Under the Hood of zkSNARK Groth16 Protocol',
        description: 'Deep technical dive into the Groth16 zkSNARK protocol implementation',
        author: 'Coinmonks',
        date: '2019',
        readTime: '18 min',
        difficulty: 'Advanced',
        url: 'https://medium.com/coinmonks/under-the-hood-of-zksnark-groth16-protocol-2843b0d1558b',
        type: 'Cryptography Deep Dive',
        icon: Shield,
      },
      {
        title: 'Zero Knowledge is Easy - The Ultimate How-To Article',
        description: 'Comprehensive guide to understanding and implementing zero-knowledge proofs',
        author: 'Borodutch',
        date: '2022',
        readTime: '25 min',
        difficulty: 'Intermediate',
        url: 'https://blog.borodutch.com/zero-knowledge-is-easy-or-the-ultimate-how-to-article/',
        type: 'Educational Guide',
        icon: Shield,
      },
    ],
  },
  {
    category: 'Tutorials & Guides',
    description: 'Step-by-step tutorials and practical development guides',
    articles: [
      {
        title: 'Become a Blockchain Engineer',
        description: 'Complete roadmap to becoming a blockchain, solidity, and smart contract engineer',
        author: 'Patrick Collins',
        date: '2022',
        readTime: '30 min',
        difficulty: 'Beginner to Intermediate',
        url: 'https://www.freecodecamp.org/news/how-to-become-a-blockchain-engineer/',
        type: 'Career Guide',
        icon: Target,
      },
      {
        title: 'The Complete Guide to Full Stack Ethereum Development',
        description: 'Building Full Stack dApps with React, Ethers.js, Solidity, and Hardhat',
        author: 'Patrick Collins',
        date: '2021',
        readTime: '45 min',
        difficulty: 'Intermediate',
        url: 'https://www.freecodecamp.org/news/full-stack-ethereum-development/',
        type: 'Full Stack Tutorial',
        icon: Code,
      },
      {
        title: 'Learn Solidity',
        description: 'A comprehensive handbook for smart contract development',
        author: 'CryptoDevHub',
        date: '2022',
        readTime: '60 min',
        difficulty: 'Beginner to Intermediate',
        url: 'https://cryptodevhub.io/learn/solidity',
        type: 'Language Guide',
        icon: Code,
      },
    ],
  },
  {
    category: 'Best Practices & Security',
    description: 'Articles on development best practices and security considerations',
    articles: [
      {
        title: 'Smart Contract Security Best Practices',
        description: 'Essential security practices for Ethereum smart contract development',
        author: 'Consensys',
        date: '2022',
        readTime: '20 min',
        difficulty: 'Intermediate',
        url: 'https://consensys.net/blog/developers/smart-contract-security-best-practices/',
        type: 'Security Guide',
        icon: Shield,
      },
      {
        title: 'DeFi Security: A Comprehensive Guide',
        description: 'Security considerations and best practices for DeFi protocol development',
        author: 'OpenZeppelin',
        date: '2021',
        readTime: '25 min',
        difficulty: 'Advanced',
        url: 'https://blog.openzeppelin.com/defi-security/',
        type: 'Security Analysis',
        icon: Shield,
      },
      {
        title: 'Gas Optimization Techniques',
        description: 'Advanced techniques for optimizing gas usage in Ethereum smart contracts',
        author: 'Solidity by Example',
        date: '2022',
        readTime: '15 min',
        difficulty: 'Advanced',
        url: 'https://solidity-by-example.org/gas/',
        type: 'Optimization Guide',
        icon: Code,
      },
    ],
  },
]

export default function OriginalArticlesPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Guides & Articles</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Tutorials, deep dives, and personal dev journeys. 
            In-depth articles written by blockchain developers and experts sharing their knowledge and experiences.
          </p>
        </div>

        {/* Article Categories */}
        <div className="space-y-12">
          {originalArticles.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{category.category}</h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.articles.map((article) => (
                  <a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <article.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {article.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#FF00AA] font-semibold">{article.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-white/60">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.date}</span>
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
          <h3 className="text-2xl font-display font-bold text-white mb-4">Write an Article</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have knowledge to share? Write an original article and help the community grow. 
            Your insights could help thousands of developers on their blockchain journey.
          </p>
                           <a
                   href="https://github.com/Avvrik/Dev-Playbook"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
                 >
                   Submit Your Article
                   <BookOpen className="h-4 w-4 ml-2" />
                 </a>
        </div>
      </div>
    </div>
  )
} 