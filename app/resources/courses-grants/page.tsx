import Link from 'next/link'
import { ArrowLeft, GraduationCap, ExternalLink, Clock, Code, Shield, Globe, BookOpen } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to get all markdown files and parse their frontmatter
function getCoursesData() {
  try {
    const directory = path.join(process.cwd(), 'app/resources/courses-grants')
    
    // Check if directory exists
    if (!fs.existsSync(directory)) {
      console.error('Directory does not exist:', directory)
      return []
    }
    
    const files = fs.readdirSync(directory)
    
    const courses = files
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
            platform: data.authors?.[0]?.replace('@', '') || 'Unknown',
            duration: 'Varies',
            difficulty: data.level || 'Beginner',
            icon: getIconForCategory(data.category || 'General', data.tags || [])
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
            platform: 'Unknown',
            duration: 'Varies',
            difficulty: 'Beginner',
            icon: 'GraduationCap'
          }
        }
      })
    
    return courses
  } catch (error) {
    console.error('Error reading courses data:', error)
    return []
  }
}

// Helper function to get icon based on category and tags
function getIconForCategory(category: string, tags: string[]) {
  if (tags.some(tag => tag.includes('Solidity') || tag.includes('Smart Contracts'))) {
    return 'Code'
  }
  
  if (tags.some(tag => tag.includes('Cryptography') || tag.includes('Security'))) {
    return 'Shield'
  }
  
  if (tags.some(tag => tag.includes('Web3') || tag.includes('Fundamentals'))) {
    return 'Globe'
  }
  
  if (tags.some(tag => tag.includes('Rust') || tag.includes('Programming'))) {
    return 'Code'
  }
  
  if (category.includes('Fundamentals') || tags.some(tag => tag.includes('Academic'))) {
    return 'BookOpen'
  }
  
  return 'GraduationCap'
}

// Get icon component based on string
function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'Code':
      return Code
    case 'Shield':
      return Shield
    case 'Globe':
      return Globe
    case 'BookOpen':
      return BookOpen
    case 'GraduationCap':
      return GraduationCap
    default:
      return GraduationCap
  }
}

// Group courses by category
function groupCoursesByCategory(courses: any[]) {
  const categories = {
    'Programming Languages for Web3': {
      description: 'Courses on programming languages essential for blockchain development',
      courses: courses.filter(course => 
        course.tags.some((tag: string) => tag.includes('Rust') || tag.includes('Programming') || tag.includes('Solidity'))
      )
    },
    'Free Web3 Courses': {
      description: 'High-quality free courses to get started with blockchain development',
      courses: courses.filter(course => 
        course.tags.some((tag: string) => tag.includes('Free') || tag.includes('Beginner'))
      )
    },
    'Blockchain Fundamentals': {
      description: 'Core blockchain and cryptocurrency courses',
      courses: courses.filter(course => 
        course.tags.some((tag: string) => tag.includes('Fundamentals') || tag.includes('Blockchain'))
      )
    },
    'Smart Contract Development': {
      description: 'Courses focused on smart contract programming and development',
      courses: courses.filter(course => 
        course.tags.some((tag: string) => tag.includes('Smart Contracts') || tag.includes('Solidity'))
      )
    },
    'Advanced Web3 Topics': {
      description: 'Specialized courses on advanced blockchain concepts',
      courses: courses.filter(course => 
        course.tags.some((tag: string) => tag.includes('Advanced') || tag.includes('Cryptography'))
      )
    }
  }
  
  return categories
}

export default function CoursesPage() {
  try {
    const allCourses = getCoursesData()
    const categorizedCourses = groupCoursesByCategory(allCourses)

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
            {Object.entries(categorizedCourses).map(([categoryName, categoryData]: [string, any]) => {
              // Only show categories that have courses
              if (categoryData.courses.length === 0) return null
              
              return (
                <div key={categoryName} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-display font-semibold text-white mb-2">
                      {categoryName}
                    </h2>
                    <p className="text-white/80">{categoryData.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryData.courses.map((course: any) => {
                      const IconComponent = getIconComponent(course.icon)
                      return (
                        <div
                          key={course.title}
                          className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                        >
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start space-x-4"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-white" />
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
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {course.tags.slice(0, 3).map((tag: string) => (
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
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
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
              href="https://github.com/Avvrik/Dev-Playbook"
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
  } catch (error) {
    console.error('Error rendering CoursesPage:', error)
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
            <h1 className="text-3xl font-display font-bold text-white mb-4">Courses</h1>
            <p className="text-lg text-white/90">Error loading courses. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }
} 