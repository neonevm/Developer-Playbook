import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Code } from 'lucide-react'
import { getCodeExamplesData, type CodeExampleCategoryData } from '@/app/lib/markdown-utils'
import CodeExampleIcon from '@/app/components/CodeExampleIcon'

export default async function CodeExamplesPage() {
  const codeExamples: CodeExampleCategoryData[] = await getCodeExamplesData()

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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Code Samples & Templates</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Snippets or GitHub links showing practical implementation.
            Production-ready templates, boilerplates, and code examples for blockchain development.
          </p>
        </div>

        {/* Code Example Categories */}
        <div className="space-y-12">
          {codeExamples.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{category.category}</h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.examples.map((example) => (
                  <a
                    key={example.title}
                    href={example.githubUrl || example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <CodeExampleIcon tags={example.tags} category={example.category} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {example.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {example.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.languages?.[0] || 'Various'}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.complexity || example.level}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {example.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-[#1a1a1a] text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Github className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
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
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share Your Code</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great code example or template? Share it with the community and help other developers build better applications.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Submit Code Example
            <Code className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 