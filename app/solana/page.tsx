import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, Zap, Database } from 'lucide-react'

const topics = [
  {
    title: 'Program Logic',
    description: 'Learn Solana program development with Rust',
    icon: Code,
    resources: [
      {
        title: 'Solana Cookbook',
        type: 'Development Guide',
        description: 'Developing with Solana and Rust',
        link: 'https://solanacookbook.com/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Solana Program Examples',
        type: 'Code Examples',
        description: 'Example Solana programs and implementations',
        link: 'https://github.com/solana-labs/example-helloworld',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    title: 'Account Management',
    description: 'Understanding Solana account model and management',
    icon: Database,
    resources: [
      {
        title: 'Solana Account Model',
        type: 'Documentation',
        description: 'Understanding Solana\'s account-based model',
        link: 'https://docs.solana.com/developing/programming-model/accounts',
        difficulty: 'Intermediate',
      },
      {
        title: 'Account Management Best Practices',
        type: 'Guide',
        description: 'Best practices for managing Solana accounts',
        link: 'https://solanacookbook.com/#/references/accounts',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Token Program',
    description: 'SPL Token program and custom token development',
    icon: Shield,
    resources: [
      {
        title: 'SPL Token Program',
        type: 'Token Standard',
        description: 'Solana Program Library token implementation',
        link: 'https://github.com/solana-labs/solana-program-library',
        difficulty: 'Intermediate',
      },
      {
        title: 'Custom SPL Token',
        type: 'Tutorial',
        description: 'Creating custom tokens on Solana',
        link: 'https://solanacookbook.com/#/references/token',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing Solana programs for high performance',
    icon: Zap,
    resources: [
      {
        title: 'Solana Performance Tips',
        type: 'Guide',
        description: 'Performance optimization techniques for Solana programs',
        link: 'https://docs.solana.com/developing/best-practices',
        difficulty: 'Advanced',
      },
      {
        title: 'Rust Optimization',
        type: 'Documentation',
        description: 'Rust programming optimization for Solana',
        link: 'https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Frontend Integration',
    description: 'Building frontend applications for Solana',
    icon: Globe,
    resources: [
      {
        title: 'Solana Web3.js',
        type: 'JavaScript Library',
        description: 'JavaScript library for Solana blockchain',
        link: 'https://github.com/solana-labs/solana-web3.js',
        difficulty: 'Intermediate',
      },
      {
        title: 'React Solana Integration',
        type: 'Tutorial',
        description: 'Integrating Solana with React applications',
        link: 'https://solanacookbook.com/#/references/connecting-to-wallet',
        difficulty: 'Intermediate',
      },
    ],
  },
]

const nextSteps = [
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

export default function SolanaPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Solana Development</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Build high-performance blockchain applications on Solana. Learn Rust programming, 
            Solana program development, and create scalable decentralized applications.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Connect with other Solana developers, ask questions, and share your progress. 
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
                     href="https://github.com/Avvrik/Dev-Playbook"
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