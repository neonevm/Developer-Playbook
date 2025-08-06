import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
  {
    title: 'Security',
    description: 'Resources for security development and learning',
    icon: Shield,
    resources: [      {
        title: 'Certik',
        type: 'Security',
        description: 'Blockchain security platform and auditing services',
        link: 'https://www.certik.com/',
        difficulty: 'Advanced',
      },      {
        title: 'Consensys Diligence',
        type: 'Security',
        description: 'Smart contract security auditing and best practices',
        link: 'https://consensys.net/diligence/',
        difficulty: 'Advanced',
      },      {
        title: 'MythX',
        type: 'Security',
        description: 'Security analysis platform for Ethereum smart contracts',
        link: 'https://mythx.io/',
        difficulty: 'Advanced',
      },      {
        title: 'Trail of Bits',
        type: 'Security',
        description: 'Security research and consulting for blockchain',
        link: 'https://www.trailofbits.com/',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'General',
    description: 'Resources for general development and learning',
    icon: Globe,
    resources: [      {
        title: 'Cryptography for Developers',
        type: 'General',
        description: 'Advanced cryptography concepts for blockchain developers',
        link: 'https://www.youtube.com/watch?v=NuyzuNBF6xQ',
        difficulty: 'Advanced',
      },      {
        title: 'DeFi Security: A Comprehensive Guide',
        type: 'General',
        description: 'Security considerations and best practices for DeFi protocol development',
        link: 'https://blog.openzeppelin.com/defi-security/',
        difficulty: 'Advanced',
      },      {
        title: 'ERC20 Weirdness & Attacks - Part 1',
        type: 'General',
        description: 'Analysis of ERC20 token vulnerabilities and attack vectors',
        link: 'https://33audits.hashnode.dev/erc20-weirdness-attacks-part-1',
        difficulty: 'Advanced',
      },      {
        title: 'Under the Hood of zkSNARK Groth16 Protocol',
        type: 'General',
        description: 'Deep technical dive into the Groth16 zkSNARK protocol implementation',
        link: 'https://medium.com/coinmonks/under-the-hood-of-zksnark-groth16-protocol-2843b0d1558b',
        difficulty: 'Advanced',
      },      {
        title: 'Zero Knowledge Proofs',
        type: 'General',
        description: 'Simple examples and explanations of ZK proofs',
        link: 'https://www.youtube.com/watch?v=OcmvMs4AMbM',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'Cross-Chain',
    description: 'Resources for cross-chain development and learning',
    icon: Globe,
    resources: [      {
        title: 'Deep Dive into Neon and Solana Composability',
        type: 'Cross-Chain',
        description: 'Comprehensive analysis of composability between Neon and Solana ecosystems',
        link: 'https://www.neon-evm.org/blog/deep-dive-into-neon-and-solana-composability',
        difficulty: 'Advanced',
      },      {
        title: 'Effortless Cross-Chain Communication with NeonEVM, Hyperlane, and Solana\'s Speed - Part 2',
        type: 'Cross-Chain',
        description: 'Advanced cross-chain communication techniques using NeonEVM and Hyperlane',
        link: 'https://www.neonevm.org/blog/effortless-cross-chain-communication-with-neonevm-hyperlane-and-solana-s-speed-part-2',
        difficulty: 'Advanced',
      },      {
        title: 'Unveiling Composability Whitepaper: A Unified Framework for Ethereum-Solana Interaction',
        type: 'Cross-Chain',
        description: 'Deep dive into the composability whitepaper and cross-chain interaction framework',
        link: 'https://www.neonevm.org/blog/unveiling-composability-whitepaper-a-unified-framework-for-ethereum-solana-interaction',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'Solana',
    description: 'Resources for solana development and learning',
    icon: Code,
    resources: [      {
        title: 'Exploring SVM Scalability Solutions with Demand-Driven Modularity',
        type: 'Solana',
        description: 'Analysis of Solana Virtual Machine scalability solutions and modular approaches',
        link: 'https://www.neon-evm.org/blog/exploring-svm-scalability-solutions-with-demand-driven-modularity',
        difficulty: 'Advanced',
      },      {
        title: 'Solana\'s 64 Account Limit: Thinking Past the Constraint',
        type: 'Solana',
        description: 'Understanding and working around Solana\'s 64 account limit in smart contract development',
        link: 'https://www.neonevm.org/blog/solanas-64-account-limit-thinking-past-the-constraint',
        difficulty: 'Advanced',
      },
    ],
  },  {
    title: 'Ethereum',
    description: 'Resources for ethereum development and learning',
    icon: Globe,
    resources: [      {
        title: 'Gas Optimization Techniques',
        type: 'Ethereum',
        description: 'Advanced techniques for optimizing gas usage in Ethereum smart contracts',
        link: 'https://solidity-by-example.org/gas/',
        difficulty: 'Advanced',
      },
    ],
  },
]

export default function BeyondAdvancedTopicsPage() {
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
            Beyond Advanced Topics
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Comprehensive resources for beyond advanced-topics development. 
            From fundamentals to advanced topics, find everything you need to master beyond advanced-topics development.
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
            Have a great beyond advanced-topics resource? Help the community by contributing to our collection.
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