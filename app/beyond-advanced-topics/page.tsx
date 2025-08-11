import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Target, Shield, Globe, Github, ExternalLink, GraduationCap } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to get all markdown files and parse their frontmatter
function getTopicsData() {
  try {
    const directory = path.join(process.cwd(), 'app/beyond-advanced-topics')
    
    // Check if directory exists
    if (!fs.existsSync(directory)) {
      console.error('Directory does not exist:', directory)
      return []
    }
    
    const files = fs.readdirSync(directory)
    
    const topics = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        try {
          const filePath = path.join(directory, file)
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContents)
          
          return {
            title: data.title || 'Untitled',
            description: data.description || 'No description available',
            authors: data.authors || [],
            tags: data.tags || [],
            languages: data.languages || [],
            url: data.url || '#',
            dateAdded: data.dateAdded || '2024-01-01',
            level: data.level || 'Beginner',
            category: data.category || 'General',
            type: data.category || 'General',
            difficulty: data.level || 'Beginner',
            link: data.url || '#'
          }
        } catch (error) {
          console.error(`Error parsing ${file}:`, error)
          return {
            title: file.replace('.md', ''),
            description: 'Error parsing file',
            authors: [],
            tags: [],
            languages: [],
            url: '#',
            dateAdded: '2024-01-01',
            level: 'Beginner',
            category: 'General',
            type: 'General',
            difficulty: 'Beginner',
            link: '#'
          }
        }
      })
    
    return topics
  } catch (error) {
    console.error('Error reading topics data:', error)
    return []
  }
}

// Group topics by category based on tags
function groupTopicsByCategory(topics: any[]) {
  const categories = {
    'Security': {
      description: 'Resources for security development and learning',
      icon: Shield,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Security'))
      )
    },
    'General': {
      description: 'Resources for general development and learning',
      icon: Globe,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('General') || tag.includes('Cryptography') || tag.includes('DeFi') || tag.includes('Zero Knowledge'))
      )
    },
    'Cross-Chain': {
      description: 'Resources for cross-chain development and learning',
      icon: Globe,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Cross-Chain') || tag.includes('Composability'))
      )
    },
    'Solana': {
      description: 'Resources for solana development and learning',
      icon: Code,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Solana') || topic.category === 'Solana')
      )
    },
    'Ethereum': {
      description: 'Resources for ethereum development and learning',
      icon: Globe,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Ethereum') || tag.includes('Gas'))
      )
    },
    'Grants & Funding': {
      description: 'Resources for finding and applying to blockchain grants and funding opportunities',
      icon: GraduationCap,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Grants') || tag.includes('Funding'))
      )
    },
    'Accelerator Programs': {
      description: 'Comprehensive accelerator and incubator programs for blockchain startups and Web3 projects',
      icon: GraduationCap,
      resources: topics.filter(topic => 
        topic.tags.some((tag: string) => tag.includes('Accelerator'))
      )
    }
  }
  
  return categories
}



export default function BeyondAdvancedTopicsPage() {
  try {
    const allTopics = getTopicsData()
    const categorizedTopics = groupTopicsByCategory(allTopics)

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
              Beyond Advanced Topics
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
            Tackle advanced topics like zero-knowledge, infra tooling, or creating your own product with a go-to-market strategy. Learning how to build your own protocols, contribute to ecosystems, search and apply for grants and incubators.
            </p>
          </div>

          {/* Topics */}
          <div className="space-y-12">
            {Object.entries(categorizedTopics).map(([categoryName, categoryData]: [string, any]) => {
              // Only show categories that have resources
              if (categoryData.resources.length === 0) return null
              
              return (
                <div key={categoryName} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center mr-4">
                        <categoryData.icon className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-semibold text-white">
                        {categoryName}
                      </h2>
                    </div>
                    <p className="text-white/80">{categoryData.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryData.resources.map((resource: any) => (
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
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Share Your Knowledge
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Have a great beyond advanced-topics resource? Help the community by contributing to our collection.
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
  } catch (error) {
    console.error('Error rendering BeyondAdvancedTopicsPage:', error)
    return (
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-display font-bold text-white mb-4">Beyond Advanced Topics</h1>
            <p className="text-lg text-white/90">Error loading topics. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }
}