import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Zap, Shield, Globe, Target, ArrowRight } from 'lucide-react'

// Template for new learning journey pages
// Replace the content below with your specific topic

const topics = [
  {
    title: 'Topic 1',
    description: 'Description of the first topic',
    icon: BookOpen,
    resources: [
      {
        title: 'Resource Name',
        type: 'Type (Course, Article, Tool, etc.)',
        description: 'Brief description of the resource',
        link: 'https://example.com',
        difficulty: 'Beginner/Intermediate/Advanced',
      },
      // Add more resources as needed
    ],
  },
  {
    title: 'Topic 2',
    description: 'Description of the second topic',
    icon: Code,
    resources: [
      {
        title: 'Resource Name',
        type: 'Type (Course, Article, Tool, etc.)',
        description: 'Brief description of the resource',
        link: 'https://example.com',
        difficulty: 'Beginner/Intermediate/Advanced',
      },
      // Add more resources as needed
    ],
  },
  // Add more topics as needed
]

const nextSteps = [
  {
    title: 'Next Learning Journey',
    description: 'Description of the next step in the learning path',
    link: '/next-journey',
  },
  // Add more next steps as needed
]

export default function TemplatePage() {
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Page Title</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Brief description of what this page covers and what developers will learn.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-8">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4">
                  <topic.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold text-white">{topic.title}</h2>
                  <p className="text-white/80">{topic.description}</p>
                </div>
              </div>
              
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
                        <p className="text-white/80 text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded text-xs border border-white/20">
                            {resource.type}
                          </span>
                          <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded text-xs border border-white/20">
                            {resource.difficulty}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-semibold text-white mb-6">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((step) => (
              <Link
                key={step.title}
                href={step.link}
                className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
              >
                <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80">{step.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 