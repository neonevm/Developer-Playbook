import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
  {
    title: 'Ethereum',
    description: 'Resources for ethereum development and learning',
    icon: Globe,
    resources: [      {
        title: 'Alchemy University',
        type: 'Ethereum',
        description: 'Learn Web3 skills at no cost with Alchemy\'s free online university',
        link: 'https://university.alchemy.com/',
        difficulty: 'Beginner',
      },      {
        title: 'Blockchain Developer Course',
        type: 'Ethereum',
        description: 'Consensys course on blockchain development fundamentals',
        link: 'https://consensys.net/academy/',
        difficulty: 'Beginner',
      },      {
        title: 'Intro to Blockchain Programming',
        type: 'Ethereum',
        description: 'Ethereum, Web3.js, Solidity, Smart Contracts introduction',
        link: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
        difficulty: 'Beginner',
      },      {
        title: 'LearnWeb3',
        type: 'Ethereum',
        description: 'Free Web3 developer training program with comprehensive curriculum',
        link: 'https://learnweb3.io/',
        difficulty: 'Beginner',
      },      {
        title: 'Speedrun Ethereum',
        type: 'Ethereum',
        description: 'Gamified Ethereum development learning with practical projects',
        link: 'https://speedrunethereum.com/',
        difficulty: 'Beginner',
      },
    ],
  },  {
    title: 'Development Tools',
    description: 'Resources for development tools development and learning',
    icon: Globe,
    resources: [      {
        title: 'Awesome Solidity',
        type: 'Development Tools',
        description: 'Github repository containing a collection of Solidity tools, libraries, and resources',
        link: 'https://github.com/bkrem/awesome-solidity',
        difficulty: 'Beginner',
      },      {
        title: 'GitHub Documentation',
        type: 'Development Tools',
        description: 'Comprehensive documentation for GitHub platform, including guides for repositories, pull requests, and collaborative coding',
        link: 'https://docs.github.com/en',
        difficulty: 'Beginner',
      },      {
        title: 'Git Basics',
        type: 'Development Tools',
        description: 'Essential Git fundamentals including setup, workflows, and version control concepts',
        link: 'https://docs.github.com/en/get-started/git-basics',
        difficulty: 'Beginner',
      },      {
        title: 'Hardhat',
        type: 'Development Tools',
        description: 'Professional Solidity development environment',
        link: 'https://hardhat.org/',
        difficulty: 'Beginner',
      },      {
        title: 'REST API Tutorial',
        type: 'Development Tools',
        description: 'Comprehensive guide to REST API design, development, and best practices for web services',
        link: 'https://www.restapitutorial.com/introduction',
        difficulty: 'Beginner',
      },      {
        title: 'Solidity by Example',
        type: 'Development Tools',
        description: 'Solidity code samples and examples',
        link: 'https://solidity-by-example.org/',
        difficulty: 'Beginner',
      },      {
        title: 'Solidity Language Docs',
        type: 'Development Tools',
        description: 'Official Solidity documentation',
        link: 'https://docs.soliditylang.org/',
        difficulty: 'Beginner',
      },      {
        title: 'VisuAlgo',
        type: 'Development Tools',
        description: 'Interactive visualization of algorithms and data structures for learning computer science concepts',
        link: 'https://visualgo.net/en',
        difficulty: 'Beginner',
      },      {
        title: 'Visual Studio Code Documentation',
        type: 'Development Tools',
        description: 'Complete documentation for VS Code editor including setup, extensions, and development features',
        link: 'https://code.visualstudio.com/docs',
        difficulty: 'Beginner',
      },      {
        title: 'Web3Collection',
        type: 'Development Tools',
        description: 'The biggest collection of tools and resources for web3 developers',
        link: 'https://www.web3collection.app/',
        difficulty: 'Beginner',
      },
    ],
  },  {
    title: 'General',
    description: 'Resources for general development and learning',
    icon: Globe,
    resources: [      {
        title: 'Blockchain Basics',
        type: 'General',
        description: 'Coursera course on blockchain fundamentals and applications',
        link: 'https://www.coursera.org/learn/blockchain-basics',
        difficulty: 'Beginner',
      },      {
        title: 'Cryptography for Beginners',
        type: 'General',
        description: 'Securing your digital world with cryptography fundamentals',
        link: 'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        difficulty: 'Beginner',
      },      {
        title: 'Introduction to Blockchain and Bitcoin',
        type: 'General',
        description: 'Harvard University course on blockchain and cryptocurrency',
        link: 'https://cs50.harvard.edu/blockchain/',
        difficulty: 'Beginner',
      },      {
        title: 'Learn Python with freeCodeCamp',
        type: 'General',
        description: 'Full Python course for beginners in blockchain development',
        link: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        difficulty: 'Beginner',
      },      {
        title: 'Modern JavaScript Tutorial',
        type: 'General',
        description: 'Complete JavaScript course for Web3 development',
        link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        difficulty: 'Beginner',
      },      {
        title: 'What is a DAO in Crypto?',
        type: 'General',
        description: 'Decentralized Autonomous Organization explained',
        link: 'https://www.youtube.com/watch?v=KHm0uUPqmVE',
        difficulty: 'Beginner',
      },      {
        title: 'What is Web 3.0?',
        type: 'General',
        description: 'Comprehensive introduction to Web3 technology',
        link: 'https://www.youtube.com/watch?v=n-PzI9KX7Eg',
        difficulty: 'Beginner',
      },
    ],
  },  {
    title: 'Blockchain Resources',
    description: 'Resources for blockchain resources development and learning',
    icon: Globe,
    resources: [      {
        title: 'Blockchain Glossary',
        type: 'Blockchain Resources',
        description: 'A Glossary of common web3 terms',
        link: 'https://www.blockchain.com/glossary',
        difficulty: 'Beginner',
      },      {
        title: 'ETH.Build',
        type: 'Blockchain Resources',
        description: 'Educational sandbox for building on web3. Visually understand how Ethereum works by doing',
        link: 'https://eth.build/',
        difficulty: 'Beginner',
      },      {
        title: 'Ethereum.org',
        type: 'Blockchain Resources',
        description: 'Official Ethereum website with documentation and resources',
        link: 'https://ethereum.org/',
        difficulty: 'Beginner',
      },      {
        title: 'MetaMask Documentation',
        type: 'Blockchain Resources',
        description: 'Official documentation for MetaMask wallet including setup, features, and developer integration',
        link: 'https://docs.metamask.io/',
        difficulty: 'Beginner',
      },      {
        title: 'Phantom Documentation',
        type: 'Blockchain Resources',
        description: 'Official documentation for Phantom wallet including setup, features, and Solana ecosystem integration',
        link: 'https://docs.phantom.com/introduction',
        difficulty: 'Beginner',
      },
    ],
  },
]

export default function BeginnerPage() {
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
            Beginner
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Comprehensive resources for beginner development. 
            From fundamentals to advanced topics, find everything you need to master beginner development.
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
            Have a great beginner resource? Help the community by contributing to our collection.
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