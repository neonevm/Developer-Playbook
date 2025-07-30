import Link from 'next/link'
import { ArrowLeft, TrendingUp, ExternalLink, Image, BarChart3, PieChart, Activity, Layers } from 'lucide-react'

const visualExplainers = [
  {
    category: 'Blockchain Architecture',
    description: 'Visual explanations of blockchain concepts and architecture',
    explainers: [
      {
        title: 'How Blockchain Works',
        description: 'Step-by-step visualization of blockchain consensus and validation',
        type: 'Infographic',
        complexity: 'Beginner',
        imageUrl: '/images/blockchain-workflow.png',
        tags: ['Blockchain', 'Consensus', 'Validation'],
        icon: Layers,
      },
      {
        title: 'Public Key Cryptography',
        description: 'Visual guide to asymmetric cryptography in blockchain',
        type: 'Diagram',
        complexity: 'Beginner',
        imageUrl: '/images/public-key-crypto.png',
        tags: ['Cryptography', 'Security', 'Keys'],
        icon: Image,
      },
      {
        title: 'Merkle Tree Structure',
        description: 'Interactive visualization of Merkle tree data integrity',
        type: 'Interactive',
        complexity: 'Intermediate',
        imageUrl: '/images/merkle-tree.png',
        tags: ['Merkle Trees', 'Data Integrity', 'Cryptography'],
        icon: BarChart3,
      },
      {
        title: 'UTXO vs Account Model',
        description: 'Side-by-side comparison of different blockchain state models',
        type: 'Comparison',
        complexity: 'Intermediate',
        imageUrl: '/images/utxo-vs-account.png',
        tags: ['UTXO', 'Account Model', 'State'],
        icon: PieChart,
      },
    ],
  },
  {
    category: 'DeFi Mechanisms',
    description: 'Visual explanations of DeFi protocols and mechanisms',
    explainers: [
      {
        title: 'AMM Price Discovery',
        description: 'How automated market makers determine token prices',
        type: 'Animation',
        complexity: 'Intermediate',
        imageUrl: '/images/amm-price-discovery.png',
        tags: ['DeFi', 'AMM', 'Price Discovery'],
        icon: TrendingUp,
      },
      {
        title: 'Impermanent Loss',
        description: 'Visual explanation of impermanent loss in liquidity pools',
        type: 'Interactive Chart',
        complexity: 'Intermediate',
        imageUrl: '/images/impermanent-loss.png',
        tags: ['DeFi', 'Liquidity', 'Loss'],
        icon: Activity,
      },
      {
        title: 'Flash Loan Mechanics',
        description: 'Step-by-step visualization of flash loan execution',
        type: 'Flowchart',
        complexity: 'Advanced',
        imageUrl: '/images/flash-loan-mechanics.png',
        tags: ['DeFi', 'Flash Loans', 'Arbitrage'],
        icon: TrendingUp,
      },
      {
        title: 'Yield Farming Strategies',
        description: 'Visual guide to different yield farming approaches',
        type: 'Strategy Map',
        complexity: 'Intermediate',
        imageUrl: '/images/yield-farming.png',
        tags: ['DeFi', 'Yield', 'Strategies'],
        icon: BarChart3,
      },
    ],
  },
  {
    category: 'Smart Contract Security',
    description: 'Visual guides to smart contract security concepts',
    explainers: [
      {
        title: 'Reentrancy Attack Flow',
        description: 'Visual representation of reentrancy attack vectors',
        type: 'Attack Flow',
        complexity: 'Intermediate',
        imageUrl: '/images/reentrancy-attack.png',
        tags: ['Security', 'Reentrancy', 'Vulnerabilities'],
        icon: Image,
      },
      {
        title: 'Access Control Patterns',
        description: 'Visual guide to smart contract access control mechanisms',
        type: 'Pattern Diagram',
        complexity: 'Intermediate',
        imageUrl: '/images/access-control.png',
        tags: ['Security', 'Access Control', 'Patterns'],
        icon: Layers,
      },
      {
        title: 'Gas Optimization Techniques',
        description: 'Visual comparison of gas-efficient vs inefficient patterns',
        type: 'Comparison Chart',
        complexity: 'Advanced',
        imageUrl: '/images/gas-optimization.png',
        tags: ['Gas', 'Optimization', 'Efficiency'],
        icon: Activity,
      },
      {
        title: 'Security Audit Checklist',
        description: 'Visual checklist for smart contract security audits',
        type: 'Checklist',
        complexity: 'Intermediate',
        imageUrl: '/images/security-checklist.png',
        tags: ['Security', 'Audit', 'Checklist'],
        icon: Image,
      },
    ],
  },
  {
    category: 'Cross-Chain Interoperability',
    description: 'Visual explanations of cross-chain communication',
    explainers: [
      {
        title: 'Bridge Architecture',
        description: 'Visual guide to cross-chain bridge mechanisms',
        type: 'Architecture Diagram',
        complexity: 'Advanced',
        imageUrl: '/images/bridge-architecture.png',
        tags: ['Bridges', 'Cross-Chain', 'Architecture'],
        icon: Layers,
      },
      {
        title: 'Neon EVM Integration',
        description: 'How Neon EVM enables Ethereum compatibility on Solana',
        type: 'Integration Flow',
        complexity: 'Intermediate',
        imageUrl: '/images/neon-evm-integration.png',
        tags: ['Neon EVM', 'Solana', 'Ethereum'],
        icon: TrendingUp,
      },
      {
        title: 'Cross-Chain Messaging',
        description: 'Visual representation of cross-chain message passing',
        type: 'Message Flow',
        complexity: 'Advanced',
        imageUrl: '/images/cross-chain-messaging.png',
        tags: ['Cross-Chain', 'Messaging', 'Protocols'],
        icon: Activity,
      },
      {
        title: 'Multi-Chain dApp Architecture',
        description: 'Visual guide to building dApps across multiple chains',
        type: 'Architecture Map',
        complexity: 'Advanced',
        imageUrl: '/images/multi-chain-architecture.png',
        tags: ['Multi-Chain', 'dApp', 'Architecture'],
        icon: Layers,
      },
    ],
  },
  {
    category: 'Network Analysis',
    description: 'Data visualizations and network analysis',
    explainers: [
      {
        title: 'Ethereum Network Activity',
        description: 'Real-time visualization of Ethereum network transactions',
        type: 'Live Dashboard',
        complexity: 'Beginner',
        imageUrl: '/images/ethereum-activity.png',
        tags: ['Ethereum', 'Network', 'Activity'],
        icon: Activity,
      },
      {
        title: 'Gas Price Trends',
        description: 'Historical gas price trends and predictions',
        type: 'Time Series Chart',
        complexity: 'Intermediate',
        imageUrl: '/images/gas-price-trends.png',
        tags: ['Gas', 'Trends', 'Analysis'],
        icon: TrendingUp,
      },
      {
        title: 'DeFi TVL Distribution',
        description: 'Visual breakdown of DeFi total value locked across protocols',
        type: 'Pie Chart',
        complexity: 'Beginner',
        imageUrl: '/images/defi-tvl.png',
        tags: ['DeFi', 'TVL', 'Distribution'],
        icon: PieChart,
      },
      {
        title: 'MEV Extraction Analysis',
        description: 'Visual analysis of Maximal Extractable Value extraction',
        type: 'Analysis Chart',
        complexity: 'Advanced',
        imageUrl: '/images/mev-analysis.png',
        tags: ['MEV', 'Analysis', 'Advanced'],
        icon: BarChart3,
      },
    ],
  },
]

export default function VisualExplainersPage() {
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
            Visual Explainers
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Diagrams & illustrations with descriptions. 
            Complex blockchain concepts made simple through visual learning.
          </p>
        </div>

        {/* Visual Explainer Categories */}
        <div className="space-y-12">
          {visualExplainers.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">
                  {category.category}
                </h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.explainers.map((explainer) => (
                  <a
                    key={explainer.title}
                    href={explainer.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <explainer.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {explainer.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {explainer.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {explainer.type}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {explainer.complexity}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {explainer.tags.map((tag) => (
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
            Create Visual Content
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a complex concept that would benefit from visual explanation? Create diagrams, charts, or interactive visualizations to help others understand.
          </p>
          <a
                            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Submit Visual Explainer
            <Image className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 