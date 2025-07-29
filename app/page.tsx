import Link from 'next/link'
import { BookOpen, Code, Zap, Users, Target, TrendingUp, Shield, Globe, Github, Twitter, MessageCircle, ArrowRight, GraduationCap } from 'lucide-react'

// Function to map stage names to correct URLs
const getStageUrl = (stageName: string): string => {
  const urlMap: { [key: string]: string } = {
    'Beginner Dev': '/beginner',
    'Early Stage Blockchain Dev': '/early-stage',
    'Ethereum Dev': '/ethereum',
    'Solana Dev': '/solana',
    'Cross-Chain Dev': '/cross-chain',
    'Beyond: Advanced Topics': '/beyond-advanced-topics',
  }
  return urlMap[stageName] || '/'
}

const developerJourney = [
  {
    stage: 'Beginner Dev',
    description: 'Start your blockchain development journey',
    color: 'bg-gradient-to-r from-neon-blue to-neon-violet',
    icon: BookOpen,
    topics: [
      'Basic Programming Concepts',
      'Programming Languages',
      'Tools & Setup',
      'Blockchain Foundations',
      'Wallets and Security',
    ],
  },
  {
    stage: 'Early Stage Blockchain Dev',
    description: 'Learn the fundamentals of blockchain development',
    color: 'bg-gradient-to-r from-neon-green to-neon-light-green',
    icon: Code,
    topics: [
      'Smart Contracts & Languages',
      'Tooling & Architecture',
      'Tokens & Transactions',
      'Connecting to Frontend',
    ],
  },
  {
    stage: 'Ethereum Dev',
    description: 'Master Ethereum development and DeFi',
    color: 'bg-gradient-to-r from-neon-purple to-neon-fuchsia',
    icon: Shield,
    topics: [
      'Advanced Solidity',
      'Token Standards',
      'Tooling',
      'DeFi',
      'Oracles',
      'Data Indexing',
    ],
  },
  {
    stage: 'Solana Dev',
    description: 'Build high-performance blockchain applications',
    color: 'bg-gradient-to-r from-neon-dark-violet to-neon-violet',
    icon: Zap,
    topics: [
      'Program Logic',
      'Account Management',
      'Token Program',
      'Performance Optimization',
    ],
  },
  {
    stage: 'Cross-Chain Dev',
    description: 'Master cross-chain development with Neon EVM',
    color: 'bg-gradient-to-r from-neon-fuchsia to-neon-light-pink',
    icon: Globe,
    topics: [
      'Neon Composability',
      'SDKs & Interfaces',
      'Cross-Chain DEX Integration',
      'Bridge Development',
    ],
  },
  {
    stage: 'Beyond: Advanced Topics',
    description: 'Advanced blockchain development and ecosystem',
    color: 'bg-gradient-to-r from-gray-600 to-gray-800',
    icon: Target,
    topics: [
      'Advanced Protocol Design & Cryptography',
      'Infrastructure & DevOps',
      'Product Development & GTM',
      'Grants, Funding & Growth',
      'Developer Relations',
      'Ecosystem Contributions & Careers',
    ],
  },
]

const contentTypes = [
  {
    title: 'Curated Resources',
    description: 'External resources like blog posts, videos, documentation, or repos',
    icon: BookOpen,
    color: 'from-[#24e4b3] to-[#E200F1]',
    href: '/resources/curated-links',
  },
  {
    title: 'Guides & Articles',
    description: 'Tutorials, deep dives, and personal dev journeys',
    icon: Code,
    color: 'from-[#E200F1] to-[#8e1cf1]',
    href: '/resources/original-articles',
  },
  {
    title: 'Code Samples & Templates',
    description: 'Snippets or GitHub links showing practical implementation',
    icon: Github,
    color: 'from-[#8e1cf1] to-[#340ceb]',
    href: '/resources/code-examples',
  },
  {
    title: 'Courses',
    description: 'Structured learning paths and comprehensive courses',
    icon: GraduationCap,
    color: 'from-[#340ceb] to-[#24e4b3]',
    href: '/resources/courses-tutorials',
  },
]

const featuredContributors = [
  {
    name: 'Alex Chen',
    role: 'Smart Contract Developer',
    contribution: 'Neon EVM Gas Optimization Guide',
    twitter: '@alexchen',
    avatar: '👨‍💻',
  },
  {
    name: 'Sarah Kim',
    role: 'DeFi Researcher',
    contribution: 'Ethereum DeFi Security Patterns',
    twitter: '@sarahkim',
    avatar: '👩‍🔬',
  },
  {
    name: 'Mike Rodriguez',
    role: 'Solana Developer',
    contribution: 'SPL Token Development Tutorial',
    twitter: '@mikerod',
    avatar: '👨‍💻',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white sm:text-5xl md:text-6xl mb-6">
              Developer's Playbook
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              A comprehensive learning journey for blockchain developers. From beginner to advanced, 
              structured learning paths for Neon EVM, Ethereum, and Solana development.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link href="/beginner" className="bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Journey
              </Link>
              <a href="https://github.com/neon-playbook" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Contribute
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Developer's Playbook */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              What is Developer's Playbook?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              A collection of resources linked to stages of your development journey. 
              Curated by the community, for the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 text-center hover:bg-[#2a2a2a] transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-[#73FDEA] transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-white/80">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Journey */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Your Development Journey
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Structured learning paths that grow with your skills and experience
            </p>
          </div>
          
          <div className="space-y-6">
            {developerJourney.map((stage, index) => (
              <div key={stage.stage} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:bg-[#2a2a2a] transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-display font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 ${stage.color} rounded-lg flex items-center justify-center mr-3 shadow-md`}>
                        <stage.icon className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-white">
                        {stage.stage}
                      </h3>
                    </div>
                    <p className="text-white/80 mb-4">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-block bg-[#2a2a2a] text-white/90 text-sm px-3 py-1 rounded-full border border-white/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link
                        href={getStageUrl(stage.stage)}
                        className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] font-medium transition-colors duration-300"
                      >
                        Explore {stage.stage}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white">
              Featured Contributors
            </h3>
            <p className="mt-4 text-lg text-white/90">
              Meet developers who are building their reputation through contributions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContributors.map((contributor) => (
              <div key={contributor.name} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 text-center hover:bg-[#2a2a2a] transition-all duration-300">
                <div className="text-4xl mb-4">{contributor.avatar}</div>
                <h4 className="text-lg font-display font-semibold text-white mb-2">
                  {contributor.name}
                </h4>
                <p className="text-white/80 mb-2">{contributor.role}</p>
                <p className="text-sm text-white/70 mb-4">
                  "{contributor.contribution}"
                </p>
                <div className="flex justify-center space-x-2">
                  <a
                    href={`https://twitter.com/${contributor.twitter}`}
                    className="text-white/80 hover:text-[#73FDEA] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Build Your Portfolio?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contribute to our open-source knowledge hub and get featured on our social media. 
            Join our VIP Discord community and build your reputation as a blockchain expert.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/neon-playbook" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
              Contribute Now
            </a>
            <a
              href="https://discord.gg/Y6E3FZAguZ"
              className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Developer's Playbook</h4>
              <p className="text-white/80">
                From devs, by devs, to devs. Building the future of blockchain development.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Learning Journeys</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/beginner" className="hover:text-[#73FDEA] transition-colors duration-300">Beginner Dev</Link></li>
                <li><Link href="/early-stage" className="hover:text-[#73FDEA] transition-colors duration-300">Early Stage</Link></li>
                <li><Link href="/ethereum" className="hover:text-[#73FDEA] transition-colors duration-300">Ethereum Dev</Link></li>
                <li><Link href="/solana" className="hover:text-[#73FDEA] transition-colors duration-300">Solana Dev</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="https://github.com/neon-playbook" target="_blank" rel="noopener noreferrer" className="hover:text-[#73FDEA] transition-colors duration-300">Contribute</a></li>
                <li><Link href="/" className="hover:text-[#73FDEA] transition-colors duration-300">About</Link></li>
                <li><a href="https://discord.gg/Y6E3FZAguZ" className="hover:text-[#73FDEA] transition-colors duration-300">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/Neon_EVM" className="text-white/70 hover:text-[#73FDEA] transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://github.com/neon-playbook" className="text-white/70 hover:text-[#73FDEA] transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2025 Neon EVM Developer's Playbook. Built with ❤️ by Neon EVM and the blockchain developer community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 