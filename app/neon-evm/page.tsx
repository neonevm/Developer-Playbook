import Link from 'next/link'
import { ArrowRight, BookOpen, Code, Zap, Shield, TrendingUp, Github, ExternalLink } from 'lucide-react'

const neonTopics = [
  {
    title: 'Getting Started with Neon EVM',
    description: 'Learn the basics of Neon EVM and how to set up your development environment',
    difficulty: 'Beginner',
    duration: '2 hours',
    topics: ['Neon EVM Overview', 'Environment Setup', 'First Smart Contract', 'Gas Optimization'],
    href: '/neon-evm/getting-started',
  },
  {
    title: 'Smart Contract Development',
    description: 'Master Solidity development on Neon EVM with practical examples',
    difficulty: 'Intermediate',
    duration: '4 hours',
    topics: ['Solidity Basics', 'Contract Architecture', 'Testing', 'Deployment'],
    href: '/neon-evm/smart-contracts',
  },
  {
    title: 'dApp Development',
    description: 'Build decentralized applications that interact with Neon EVM',
    difficulty: 'Intermediate',
    duration: '6 hours',
    topics: ['Frontend Integration', 'Web3.js', 'User Experience', 'Security'],
    href: '/neon-evm/dapp-development',
  },
  {
    title: 'Gas Optimization',
    description: 'Learn techniques to minimize gas costs on Neon EVM',
    difficulty: 'Advanced',
    duration: '3 hours',
    topics: ['Gas Analysis', 'Optimization Techniques', 'Best Practices', 'Tools'],
    href: '/neon-evm/gas-optimization',
  },
  {
    title: 'Cross-chain Interoperability',
    description: 'Explore how Neon EVM enables cross-chain functionality',
    difficulty: 'Advanced',
    duration: '5 hours',
    topics: ['Bridge Development', 'Cross-chain Communication', 'Security Considerations'],
    href: '/neon-evm/cross-chain',
  },
]

const neonResources = [
  {
    title: 'Neon EVM Documentation',
    description: 'Official documentation and API references',
    link: 'https://docs.neon.xyz',
    icon: BookOpen,
  },
  {
    title: 'Neon EVM GitHub',
    description: 'Source code and development resources',
    link: 'https://github.com/neonlabsorg',
    icon: Github,
  },
  {
    title: 'Neon EVM Discord',
    description: 'Community support and discussions',
    link: 'https://discord.gg/Y6E3FZAguZ',
    icon: ExternalLink,
  },
  {
    title: 'Neon EVM Blog',
    description: 'Latest updates and technical articles',
    link: 'https://neon.xyz/blog',
    icon: BookOpen,
  },
]

const neonFeatures = [
  {
    title: 'Ethereum Compatibility',
    description: 'Run Ethereum dApps on Solana without code changes',
    icon: Code,
  },
  {
    title: 'Low Gas Costs',
    description: 'Significantly lower transaction costs compared to Ethereum',
    icon: TrendingUp,
  },
  {
    title: 'High Performance',
    description: 'Fast transaction processing with Solana\'s speed',
    icon: Zap,
  },
  {
    title: 'Developer Friendly',
    description: 'Familiar tools and languages for Ethereum developers',
    icon: Shield,
  },
]

export default function NeonEVMPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link href="/" className="flex items-center text-gray-500 hover:text-gray-900">
              <ArrowRight className="h-5 w-5 rotate-180 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Neon EVM Learning Journey
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Ethereum-compatible development on Solana. Learn to build scalable, 
            cost-effective dApps with familiar Ethereum tools and languages.
          </p>
        </div>

        {/* Neon EVM Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            What is Neon EVM?
          </h2>
          <div className="card">
            <p className="text-lg text-gray-700 mb-6">
              Neon EVM is a fully Ethereum-compatible environment on Solana that allows developers 
              to run Ethereum dApps on Solana without any code changes. It combines the best of both 
              worlds: Ethereum's developer ecosystem and Solana's performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {neonFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Learning Topics
          </h2>
          <div className="space-y-6">
            {neonTopics.map((topic) => (
              <div key={topic.title} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mr-4">
                        {topic.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {topic.difficulty}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        {topic.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.topics.map((item) => (
                        <span
                          key={item}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={topic.href}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Official Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neonResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="flex items-center mb-4">
                  <resource.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Community Call to Action */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Contribute?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Share your Neon EVM knowledge with the community. Write tutorials, 
              create code examples, or share best practices.
            </p>
            <div className="flex justify-center space-x-4">
                              <a href="https://github.com/Avvrik/Dev-Playbook" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contribute Content
              </a>
              <a
                href="https://discord.gg/Y6E3FZAguZ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/ethereum"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
          >
            <Code className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Ethereum</h3>
              <p className="text-gray-600">Learn Solidity and DeFi development</p>
            </div>
          </Link>
          
          <Link
            href="/solana"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors duration-200"
          >
            <Zap className="h-8 w-8 text-purple-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Solana</h3>
              <p className="text-gray-600">Build high-performance blockchain apps</p>
            </div>
          </Link>
          
                      <a
                              href="https://github.com/Avvrik/Dev-Playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
            >
              <Github className="h-8 w-8 text-primary-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Contribute</h3>
                <p className="text-gray-600">Share your knowledge with the community</p>
              </div>
            </a>
        </div>
      </div>
    </div>
  )
} 