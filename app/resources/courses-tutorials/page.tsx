import Link from 'next/link'
import { ArrowLeft, GraduationCap, ExternalLink, BookOpen, Code, Zap, Shield, Globe, Clock } from 'lucide-react'

const coursesAndTutorials = [
  {
    category: 'Free Web3 Courses',
    description: 'High-quality free courses to get started with blockchain development',
    courses: [
      {
        title: 'Alchemy University',
        description: 'Learn Web3 skills at no cost with Alchemy\'s free online university',
        platform: 'Alchemy',
        duration: 'Self-paced',
        difficulty: 'Beginner to Advanced',
        price: 'Free',
        url: 'https://university.alchemy.com/',
        tags: ['Web3', 'Ethereum', 'Solidity'],
        icon: GraduationCap,
      },
      {
        title: 'LearnWeb3',
        description: 'Free Web3 developer training program with comprehensive curriculum',
        platform: 'LearnWeb3',
        duration: 'Self-paced',
        difficulty: 'Beginner to Intermediate',
        price: 'Free',
        url: 'https://learnweb3.io/',
        tags: ['Web3', 'Full Stack', 'dApps'],
        icon: GraduationCap,
      },
      {
        title: 'CryptoZombies',
        description: 'Gamified Solidity and blockchain development learning',
        platform: 'CryptoZombies',
        duration: '10-15 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://cryptozombies.io/',
        tags: ['Solidity', 'Gaming', 'Interactive'],
        icon: Code,
      },
      {
        title: 'Buildspace',
        description: 'Master Web 3.0, release awesome projects, accumulate NFTs',
        platform: 'Buildspace',
        duration: 'Self-paced',
        difficulty: 'Beginner to Advanced',
        price: 'Free',
        url: 'https://buildspace.so/',
        tags: ['Projects', 'NFTs', 'Hands-on'],
        icon: GraduationCap,
      },
      {
        title: 'Speedrun Ethereum',
        description: 'Gamified Ethereum development learning with practical projects',
        platform: 'Speedrun Ethereum',
        duration: '8-12 hours',
        difficulty: 'Beginner to Intermediate',
        price: 'Free',
        url: 'https://speedrunethereum.com/',
        tags: ['Ethereum', 'Gaming', 'Projects'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Blockchain Fundamentals',
    description: 'Core blockchain and cryptocurrency courses',
    courses: [
      {
        title: 'Blockchain Basics',
        description: 'Coursera course on blockchain fundamentals and applications',
        platform: 'Coursera',
        duration: '6 weeks',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.coursera.org/learn/blockchain-basics',
        tags: ['Blockchain', 'Fundamentals', 'Academic'],
        icon: BookOpen,
      },
      {
        title: 'Blockchain and Money',
        description: 'MIT course on blockchain technology and financial applications',
        platform: 'MIT',
        duration: '12 weeks',
        difficulty: 'Intermediate',
        price: 'Free',
        url: 'https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/',
        tags: ['MIT', 'Finance', 'Academic'],
        icon: GraduationCap,
      },
      {
        title: 'Blockchain Fundamentals',
        description: 'Berkeley University course on blockchain technology',
        platform: 'UC Berkeley',
        duration: '8 weeks',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://blockchain.berkeley.edu/courses/',
        tags: ['Berkeley', 'Academic', 'Fundamentals'],
        icon: GraduationCap,
      },
      {
        title: 'Introduction to Blockchain and Bitcoin',
        description: 'Harvard University course on blockchain and cryptocurrency',
        platform: 'Harvard',
        duration: '10 weeks',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://cs50.harvard.edu/blockchain/',
        tags: ['Harvard', 'Bitcoin', 'Academic'],
        icon: GraduationCap,
      },
    ],
  },
  {
    category: 'Smart Contract Development',
    description: 'Courses focused on smart contract programming and development',
    courses: [
      {
        title: 'Solidity Path: Beginner to Intermediate',
        description: 'Complete path from beginner to intermediate smart contract development',
        platform: 'CryptoDevHub',
        duration: '20+ hours',
        difficulty: 'Beginner to Intermediate',
        price: 'Free',
        url: 'https://cryptodevhub.io/learn/solidity-path-beginner-to-intermediate',
        tags: ['Solidity', 'Smart Contracts', 'Ethereum'],
        icon: Code,
      },
      {
        title: 'Complete Solidity Smart Contract Guide',
        description: 'Comprehensive guide to Solidity smart contract development',
        platform: 'BitDegree',
        duration: '15 hours',
        difficulty: 'Intermediate',
        price: '$9.99',
        url: 'https://www.bitdegree.org/courses/course/complete-solidity-smart-contract-guide',
        tags: ['Solidity', 'Smart Contracts', 'Complete Guide'],
        icon: Code,
      },
      {
        title: 'Intro to Blockchain Programming',
        description: 'Ethereum, Web3.js, Solidity, Smart Contracts introduction',
        platform: 'YouTube',
        duration: '4 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
        tags: ['Ethereum', 'Web3.js', 'Solidity'],
        icon: Code,
      },
      {
        title: 'Blockchain Developer Course',
        description: 'Consensys course on blockchain development fundamentals',
        platform: 'Consensys',
        duration: 'Self-paced',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://consensys.net/academy/',
        tags: ['Consensys', 'Blockchain', 'Development'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Programming Languages for Web3',
    description: 'Courses on programming languages essential for blockchain development',
    courses: [
      {
        title: 'Rust Programming Course for Beginners',
        description: 'Learn Rust programming language for Solana development',
        platform: 'YouTube',
        duration: '6 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=MsocPEZBd-M',
        tags: ['Rust', 'Solana', 'Programming'],
        icon: Code,
      },
      {
        title: 'Modern JavaScript Tutorial',
        description: 'Complete JavaScript course for Web3 development',
        platform: 'YouTube',
        duration: '8 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        tags: ['JavaScript', 'Web3', 'Frontend'],
        icon: Code,
      },
      {
        title: 'Learn Python with freeCodeCamp',
        description: 'Full Python course for beginners in blockchain development',
        platform: 'freeCodeCamp',
        duration: '12 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        tags: ['Python', 'freeCodeCamp', 'Programming'],
        icon: Code,
      },
      {
        title: '60 Days of Solana',
        description: 'Comprehensive Solana course by Rareskills',
        platform: 'Rareskills',
        duration: '60 days',
        difficulty: 'Intermediate',
        price: 'Free',
        url: 'https://www.rareskills.io/solana',
        tags: ['Solana', 'Rust', 'Advanced'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Advanced Web3 Topics',
    description: 'Specialized courses on advanced blockchain concepts',
    courses: [
      {
        title: 'Cryptography for Beginners',
        description: 'Securing your digital world with cryptography fundamentals',
        platform: 'YouTube',
        duration: '3 hours',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=jhXCTbFnK8o',
        tags: ['Cryptography', 'Security', 'Fundamentals'],
        icon: Shield,
      },
      {
        title: 'Cryptography for Developers',
        description: 'Advanced cryptography concepts for blockchain developers',
        platform: 'YouTube',
        duration: '4 hours',
        difficulty: 'Intermediate',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=NuyzuNBF6xQ',
        tags: ['Cryptography', 'Advanced', 'Development'],
        icon: Shield,
      },
      {
        title: 'Zero Knowledge Proofs',
        description: 'Simple examples and explanations of ZK proofs',
        platform: 'YouTube',
        duration: '2 hours',
        difficulty: 'Advanced',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=OcmvMs4AMbM',
        tags: ['Zero Knowledge', 'Advanced', 'Privacy'],
        icon: Shield,
      },
      {
        title: 'What is ERC-4337?',
        description: 'Account abstraction without Ethereum protocol changes',
        platform: 'YouTube',
        duration: '1 hour',
        difficulty: 'Intermediate',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=QuYZWJj65AY',
        tags: ['ERC-4337', 'Account Abstraction', 'Ethereum'],
        icon: Code,
      },
    ],
  },
  {
    category: 'Web3 Fundamentals & Concepts',
    description: 'Courses explaining core Web3 concepts and technologies',
    courses: [
      {
        title: 'Ultimate Guide to Web3: The Fundamentals',
        description: 'Industry-ready Web3 fundamentals by BitDegree',
        platform: 'BitDegree',
        duration: '3 hours',
        difficulty: 'Beginner',
        price: '$219.00',
        url: 'https://www.bitdegree.org/courses/course/ultimate-guide-to-web3-fundamentals',
        tags: ['Web3', 'Fundamentals', 'Industry-Ready'],
        icon: GraduationCap,
      },
      {
        title: 'What is Web 3.0?',
        description: 'Comprehensive introduction to Web3 technology',
        platform: 'YouTube',
        duration: '1 hour',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=n-PzI9KX7Eg',
        tags: ['Web3', 'Introduction', 'Technology'],
        icon: Globe,
      },
      {
        title: 'What is a DAO in Crypto?',
        description: 'Decentralized Autonomous Organization explained',
        platform: 'YouTube',
        duration: '30 minutes',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=KHm0uUPqmVE',
        tags: ['DAO', 'Crypto', 'Decentralized'],
        icon: Globe,
      },
      {
        title: 'A Beginner\'s Guide to Polygon',
        description: 'Ethereum\'s scaling solution explained',
        platform: 'YouTube',
        duration: '45 minutes',
        difficulty: 'Beginner',
        price: 'Free',
        url: 'https://www.youtube.com/watch?v=f6GpXyOoYGo',
        tags: ['Polygon', 'Ethereum', 'Scaling'],
        icon: Globe,
      },
    ],
  },
]

export default function CoursesTutorialsPage() {
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
            Courses
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Structured learning paths and comprehensive courses. 
            From free beginner courses to advanced paid programs, find the perfect learning path for your blockchain journey.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-12">
          {coursesAndTutorials.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">
                  {category.category}
                </h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.courses.map((course) => (
                  <a
                    key={course.title}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <course.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {course.duration}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {course.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#FF00AA] font-semibold">{course.price}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {course.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-[#1a1a1a] text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-white/50 text-xs">{course.platform}</span>
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
            Share Your Course
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Know of a great web3 course or tutorial? Help the community by suggesting it to our collection.
          </p>
          <a
            href="https://github.com/neon-playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Suggest a Course
            <GraduationCap className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 