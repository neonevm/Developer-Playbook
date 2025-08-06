import Link from 'next/link'
import { ArrowLeft, BookOpen, ExternalLink, Github, Globe, Video, FileText, Shield, Zap, Target, Code } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to get all markdown files and parse their frontmatter
function getCuratedLinks() {
  const directory = path.join(process.cwd(), 'app/resources/curated-links')
  const files = fs.readdirSync(directory)
  
  const links = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(directory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      
      try {
        const { data } = matter(fileContents)
        
        return {
          title: data.title || 'Untitled',
          description: data.description || 'No description available',
          url: data.url || '#',
          type: getLinkType(data.tags || []),
          icon: getIconForCategory(data.category || 'General'),
          category: data.category || 'General',
          tags: data.tags || []
        }
      } catch (error) {
        console.error(`Error parsing ${file}:`, error)
        return {
          title: file.replace('.md', ''),
          description: 'Error parsing file',
          url: '#',
          type: 'Resource',
          icon: 'Globe',
          category: 'General',
          tags: []
        }
      }
    })
  
  return links
}

// Helper function to determine link type based on tags
function getLinkType(tags: string[] = []) {
  if (tags.includes('Resource Collection')) return 'Resource Collection'
  if (tags.includes('GitHub Repository')) return 'GitHub Repository'
  if (tags.includes('Documentation')) return 'Documentation'
  if (tags.includes('Code Examples')) return 'Code Examples'
  if (tags.includes('Development Framework')) return 'Development Framework'
  if (tags.includes('Book')) return 'Book'
  if (tags.includes('Reference')) return 'Reference'
  if (tags.includes('Interactive Learning')) return 'Interactive Learning'
  if (tags.includes('Official Documentation')) return 'Official Documentation'
  if (tags.includes('Development Guide')) return 'Development Guide'
  if (tags.includes('Security Auditing')) return 'Security Auditing'
  if (tags.includes('Security Library')) return 'Security Library'
  if (tags.includes('Security Research')) return 'Security Research'
  if (tags.includes('Security Platform')) return 'Security Platform'
  if (tags.includes('Security Analysis')) return 'Security Analysis'
  return 'Resource'
}

// Helper function to get icon based on category
function getIconForCategory(category: string) {
  switch (category) {
    case 'Development Tools':
      return 'Code'
    case 'Blockchain Resources':
      return 'Globe'
    case 'Security':
      return 'Shield'
    default:
      return 'Globe'
  }
}

// Group links by category
function groupLinksByCategory(links: any[]) {
  const categories = {
    'Development Tools & Resources': {
      description: 'Essential tools and resources for Web3 development',
      links: links.filter(link => link.category === 'Development Tools')
    },
    'Blockchain & Cryptocurrency Resources': {
      description: 'Essential resources for understanding blockchain and cryptocurrency',
      links: links.filter(link => link.category === 'Blockchain Resources')
    },
    'Security & Auditing': {
      description: 'Resources for smart contract security and auditing',
      links: links.filter(link => link.category === 'Security')
    }
  }
  
  return categories
}

// Get icon component based on string
function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'Globe':
      return Globe
    case 'Code':
      return Code
    case 'Shield':
      return Shield
    case 'BookOpen':
      return BookOpen
    case 'Github':
      return Github
    case 'Video':
      return Video
    case 'FileText':
      return FileText
    default:
      return Globe
  }
}

export default function CuratedLinksPage() {
  const allLinks = getCuratedLinks()
  const categorizedLinks = groupLinksByCategory(allLinks)

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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Curated Links</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            External resources like blog posts, videos, documentation, or repos. 
            Carefully selected by the community to help you on your blockchain development journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {Object.entries(categorizedLinks).map(([categoryName, categoryData]: [string, any]) => (
            <div key={categoryName} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{categoryName}</h2>
                <p className="text-white/80">{categoryData.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryData.links.map((link: any) => {
                  const IconComponent = getIconComponent(link.icon)
                  return (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300">{link.title}</h3>
                            <p className="text-white/80 text-sm mt-1">{link.description}</p>
                            <div className="flex items-center mt-2">
                              <span className="inline-block bg-[#1a1a1a] text-white/70 text-xs px-2 py-1 rounded border border-white/20">{link.type}</span>
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Found a Great Resource?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Help the community by suggesting new curated links. Your contributions help other developers find the best resources.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Suggest a Resource
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 