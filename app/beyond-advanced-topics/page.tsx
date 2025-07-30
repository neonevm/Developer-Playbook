import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, Zap, Database, TrendingUp, Users } from 'lucide-react'

const topics = [
  {
    title: 'Advanced Protocol Design & Cryptography',
    description: 'Advanced cryptographic concepts and protocol design patterns',
    icon: Shield,
    resources: [
      {
        title: 'Zero Knowledge Proofs',
        type: 'Technical Deep Dive',
        description: 'Understanding zero-knowledge proofs and their applications',
        link: 'https://blog.borodutch.com/zero-knowledge-is-easy-or-the-ultimate-how-to-article/',
        difficulty: 'Advanced',
      },
      {
        title: 'zkSNARK Protocol Deep Dive',
        type: 'Technical Analysis',
        description: 'Under the hood of zkSNARK Groth16 protocol',
        link: 'https://medium.com/coinmonks/under-the-hood-of-zksnark-groth16-protocol-2843b0d1558b',
        difficulty: 'Expert',
      },
      {
        title: 'ERC20 Weirdness & Attacks',
        type: 'Security Analysis',
        description: 'Understanding ERC20 vulnerabilities and attack vectors',
        link: 'https://33audits.hashnode.dev/erc20-weirdness-attacks-part-1',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    description: 'Blockchain infrastructure and development operations',
    icon: Zap,
    resources: [
      {
        title: 'Blockchain Infrastructure Design',
        type: 'Architecture Guide',
        description: 'Designing scalable blockchain infrastructure',
        link: 'https://github.com/foundry-rs/foundry',
        difficulty: 'Advanced',
      },
      {
        title: 'DevOps for Blockchain',
        type: 'Best Practices',
        description: 'DevOps practices for blockchain development',
        link: 'https://docs.soliditylang.org/',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Product Development & GTM',
    description: 'Product development and go-to-market strategies',
    icon: Target,
    resources: [
      {
        title: 'Blockchain Product Strategy',
        type: 'Strategy Guide',
        description: 'Developing blockchain products and go-to-market strategies',
        link: 'https://www.preethikasireddy.com/post/how-does-ethereum-work-anyway',
        difficulty: 'Advanced',
      },
      {
        title: 'DeFi Product Design',
        type: 'Design Guide',
        description: 'Designing DeFi products and protocols',
        link: 'https://defiroadmap.com/',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Grants, Funding & Growth',
    description: 'Funding opportunities and ecosystem growth',
    icon: TrendingUp,
    resources: [
      {
        title: 'Blockchain Grants Guide',
        type: 'Resource Guide',
        description: 'Finding and applying for blockchain grants',
        link: 'https://ethereum.org/',
        difficulty: 'Intermediate to Advanced',
      },
      {
        title: 'Ecosystem Funding',
        type: 'Funding Guide',
        description: 'Funding opportunities in blockchain ecosystems',
        link: 'https://solanacookbook.com/',
        difficulty: 'Intermediate to Advanced',
      },
    ],
  },
  {
    title: 'Developer Relations',
    description: 'Building developer communities and relationships',
    icon: Users,
    resources: [
      {
        title: 'DevRel Best Practices',
        type: 'Community Guide',
        description: 'Best practices for developer relations',
        link: 'https://www.devrel.agency/developerjourney',
        difficulty: 'Advanced',
      },
      {
        title: 'Community Building',
        type: 'Strategy Guide',
        description: 'Building and managing developer communities',
        link: 'https://www.devrel.agency/post/mind-the-gap-dev-journey-tube-map',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    title: 'Ecosystem Contributions & Careers',
    description: 'Contributing to blockchain ecosystems and career development',
    icon: Globe,
    resources: [
      {
        title: 'Open Source Contributions',
        type: 'Contribution Guide',
        description: 'Contributing to blockchain open source projects',
        link: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        difficulty: 'Advanced',
      },
      {
        title: 'Blockchain Career Paths',
        type: 'Career Guide',
        description: 'Career opportunities in blockchain development',
        link: 'https://www.freecodecamp.org/news/how-to-become-a-blockchain-engineer/',
        difficulty: 'Intermediate to Advanced',
      },
    ],
  },
]

export default function BeyondAdvancedTopicsPage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Beyond: Advanced Topics</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Advanced blockchain development concepts, ecosystem contributions, and career development. 
            Master the cutting-edge technologies and strategies that drive the blockchain industry forward.
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

        {/* Community Call to Action */}
        <div className="bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Join Our Community</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with other advanced developers, share your expertise, and contribute to the ecosystem. 
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