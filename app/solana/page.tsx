import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'

const topics = [
  {
    title: 'Solana',
    description: 'Resources for solana development and learning',
    icon: Code,
    resources: [      {
        title: '60 Days of Solana',
        type: 'Solana',
        description: 'Comprehensive Solana course by Rareskills',
        link: 'https://www.rareskills.io/solana',
        difficulty: 'Intermediate',
      },
    ],
  },
]

export default function SolanaPage() {
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
            Solana
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Comprehensive resources for solana development. 
            From fundamentals to advanced topics, find everything you need to master solana development.
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
            Have a great solana resource? Help the community by contributing to our collection.
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