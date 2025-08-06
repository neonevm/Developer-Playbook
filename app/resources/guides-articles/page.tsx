import Link from 'next/link'
import { ArrowLeft, BookOpen, ExternalLink, Code, Target, Shield, Globe, Clock, User } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to get all markdown files and parse their frontmatter
function getGuidesArticles() {
  try {
    const directory = path.join(process.cwd(), 'app/resources/guides-articles')
    
    // Check if directory exists
    if (!fs.existsSync(directory)) {
      console.error('Directory does not exist:', directory)
      return []
    }
    
    const files = fs.readdirSync(directory)
    
    const articles = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        try {
          const filePath = path.join(directory, file)
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContents)
          
          // Safely extract date
          let date = '2024'
          if (data.dateAdded && typeof data.dateAdded === 'string') {
            const dateParts = data.dateAdded.split('-')
            if (dateParts.length > 0) {
              date = dateParts[0]
            }
          }
          
          return {
            title: data.title || 'Untitled',
            description: data.description || 'No description available',
            author: data.authors?.[0]?.replace('@', '') || 'Unknown',
            date: date,
            readTime: '8 min', // Default read time
            difficulty: data.level || 'Beginner',
            url: data.url || '#',
            type: getArticleType(data.tags || []),
            icon: getIconForCategory(data.category || 'General'),
            category: data.category || 'General',
            tags: data.tags || []
          }
        } catch (error) {
          console.error(`Error parsing ${file}:`, error)
          return {
            title: file.replace('.md', ''),
            description: 'Error parsing file',
            author: 'Unknown',
            date: '2024',
            readTime: '8 min',
            difficulty: 'Beginner',
            url: '#',
            type: 'Technical Guide',
            icon: 'BookOpen',
            category: 'General',
            tags: []
          }
        }
      })
    
    return articles
  } catch (error) {
    console.error('Error reading guides articles:', error)
    return []
  }
}

// Helper function to determine article type based on tags
function getArticleType(tags: string[] = []) {
  if (tags.includes('Security')) return 'Security Guide'
  if (tags.includes('Tutorial')) return 'Tutorial'
  if (tags.includes('Deep Dive')) return 'Technical Deep Dive'
  if (tags.includes('Career Guide')) return 'Career Guide'
  if (tags.includes('Full Stack')) return 'Full Stack Tutorial'
  if (tags.includes('Language Guide')) return 'Language Guide'
  if (tags.includes('Optimization')) return 'Optimization Guide'
  if (tags.includes('Zero Knowledge')) return 'Cryptography Guide'
  if (tags.includes('Cross-Chain')) return 'Cross-Chain Guide'
  if (tags.includes('Composability')) return 'Composability Guide'
  if (tags.includes('DeFi')) return 'DeFi Guide'
  if (tags.includes('ElizaOS')) return 'Plugin Tutorial'
  if (tags.includes('Blockchain Explorer')) return 'Tool Guide'
  if (tags.includes('Scalability')) return 'Scalability Analysis'
  if (tags.includes('Smart Contracts')) return 'Smart Contract Guide'
  if (tags.includes('Blockchain Fundamentals')) return 'Educational'
  return 'Technical Guide'
}

// Helper function to get icon based on category
function getIconForCategory(category: string) {
  switch (category) {
    case 'Neon EVM':
      return 'Globe'
    case 'Ethereum':
      return 'Code'
    case 'Solana':
      return 'Target'
    case 'Cross-Chain':
      return 'Globe'
    case 'General':
      return 'BookOpen'
    default:
      return 'BookOpen'
  }
}

// Group articles by category
function groupArticlesByCategory(articles: any[]) {
  const categories = {
    'Neon EVM & Cross-Chain Development': {
      description: 'Articles focused on Neon EVM development and cross-chain interoperability',
      articles: articles.filter(article => 
        article.category === 'Neon EVM' || article.category === 'Cross-Chain'
      )
    },
    'Blockchain Fundamentals & Deep Dives': {
      description: 'In-depth articles explaining blockchain concepts and mechanisms',
      articles: articles.filter(article => 
        article.category === 'Ethereum' || article.category === 'General'
      )
    },
    'Tutorials & Guides': {
      description: 'Step-by-step tutorials and practical development guides',
      articles: articles.filter(article => 
        article.type.includes('Tutorial') || article.type.includes('Guide')
      )
    },
    'Best Practices & Security': {
      description: 'Articles on development best practices and security considerations',
      articles: articles.filter(article => 
        article.type.includes('Security') || article.type.includes('Optimization')
      )
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
    case 'Target':
      return Target
    case 'BookOpen':
      return BookOpen
    default:
      return BookOpen
  }
}

export default function GuidesArticlesPage() {
  try {
    const allArticles = getGuidesArticles()
    const categorizedArticles = groupArticlesByCategory(allArticles)

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
            <h1 className="text-3xl font-display font-bold text-white mb-4">Guides & Articles</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Tutorials, deep dives, and personal dev journeys. 
              In-depth articles written by blockchain developers and experts sharing their knowledge and experiences.
            </p>
          </div>

          {/* Article Categories */}
          <div className="space-y-12">
            {Object.entries(categorizedArticles).map(([categoryName, categoryData]: [string, any]) => (
              <div key={categoryName} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-display font-semibold text-white mb-2">{categoryName}</h2>
                  <p className="text-white/80">{categoryData.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryData.articles.map((article: any) => {
                    const IconComponent = getIconComponent(article.icon)
                    return (
                      <a
                        key={article.title}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                              {article.title}
                            </h3>
                            <p className="text-white/80 text-sm mb-3">
                              {article.description}
                            </p>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-4 text-xs text-white/70">
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                                  {article.difficulty}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-[#FF00AA] font-semibold">{article.type}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-xs text-white/60">
                                <User className="h-3 w-3" />
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.date}</span>
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
            <h3 className="text-2xl font-display font-bold text-white mb-4">Write an Article</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Have knowledge to share? Write an original article and help the community grow. 
              Your insights could help thousands of developers on their blockchain journey.
            </p>
            <a
              href="https://github.com/Avvrik/Dev-Playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
            >
              Submit Your Article
              <BookOpen className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error rendering GuidesArticlesPage:', error)
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
            <h1 className="text-3xl font-display font-bold text-white mb-4">Guides & Articles</h1>
            <p className="text-lg text-white/90">Error loading articles. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }
} 