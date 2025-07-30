import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
  {
    title: 'Blockchain Fundamentals',
    description: 'Understanding the basics of blockchain technology and cryptocurrency',
    icon: BookOpen,
    resources: [
      {
        title: 'Blockchain Basics',
        type: 'Course',
        description: 'Coursera course on blockchain fundamentals and applications',
        link: 'https://www.coursera.org/learn/blockchain-basics',
        difficulty: 'Beginner',
      },
      {
        title: 'Blockchain and Money',
        type: 'Course',
        description: 'MIT course on blockchain technology and financial applications',
        link: 'https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/',
        difficulty: 'Intermediate',
      },
      {
        title: 'Blockchain Glossary',
        type: 'Reference',
        description: 'A Glossary of common web3 terms',
        link: 'https://www.blockchain.com/glossary',
        difficulty: 'Beginner',
      },
      {
        title: 'ETH.Build',
        type: 'Interactive Learning',
        description: 'Educational sandbox for building on web3. Visually understand how Ethereum works by doing',
        link: 'https://eth.build/',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    title: 'Programming Languages & Tools',
    description: 'Essential programming concepts and development tools',
    icon: Code,
    resources: [

      {
        title: 'Solidity Language Docs',
        type: 'Documentation',
        description: 'Official Solidity documentation',
        link: 'https://docs.soliditylang.org/',
        difficulty: 'Beginner',
      },
      {
        title: 'Solidity by Example',
        type: 'Code Examples',
        description: 'Solidity code samples and examples',
        link: 'https://solidity-by-example.org/',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'Hardhat',
        type: 'Development Framework',
        description: 'Professional Solidity development environment',
        link: 'https://hardhat.org/',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    title: 'Wallets and Security',
    description: 'Understanding cryptocurrency wallets and basic security practices',
    icon: Shield,
    resources: [


      {
        title: 'OpenZeppelin',
        type: 'Security Library',
        description: 'Library for secure smart contract development',
        link: 'https://openzeppelin.com/',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    title: 'Learning Platforms',
    description: 'Structured learning paths for blockchain development',
    icon: GraduationCap,
    resources: [
      {
        title: 'Alchemy University',
        type: 'Course',
        description: 'Learn Web3 skills at no cost with Alchemy\'s free online university',
        link: 'https://university.alchemy.com/',
        difficulty: 'Beginner to Advanced',
      },
      {
        title: 'LearnWeb3',
        type: 'Course',
        description: 'Free Web3 developer training program with comprehensive curriculum',
        link: 'https://learnweb3.io/',
        difficulty: 'Beginner to Intermediate',
      },
      {
        title: 'Buildspace',
        type: 'Course',
        description: 'Master Web 3.0, release awesome projects, accumulate NFTs',
        link: 'https://buildspace.so/',
        difficulty: 'Beginner to Advanced',
      },
      {
        title: 'Speedrun Ethereum',
        type: 'Course',
        description: 'Gamified Ethereum development learning with practical projects',
        link: 'https://speedrunethereum.com/',
        difficulty: 'Beginner to Intermediate',
      },
    ],
  },
]

const nextSteps = [
  {
    title: 'Early Stage Blockchain Development',
    description: 'Learn smart contracts, tooling, and basic blockchain architecture',
    link: '/early-stage',
  },
  {
    title: 'Ethereum Development',
    description: 'Master Solidity, DeFi protocols, and Ethereum ecosystem',
    link: '/ethereum',
  },
  {
    title: 'Solana Development',
    description: 'Build high-performance applications on Solana',
    link: '/solana',
  },
]

export default function BeginnerPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Beginner Developer Journey</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Start your blockchain development journey with fundamental concepts, programming basics, 
            and essential tools. Build a strong foundation for advanced blockchain development.
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
            Ready to advance? Choose your next learning path based on your interests and goals.
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