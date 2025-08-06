import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface CourseData {
  title: string
  description: string
  authors: string[]
  tags: string[]
  languages: string[]
  url: string
  dateAdded: string
  level: string
  category: string
  platform?: string
  duration?: string
  difficulty?: string
}

export interface CategoryData {
  category: string
  description: string
  courses: CourseData[]
}

export interface MiniGuideData {
  title: string
  description: string
  authors: string[]
  tags: string[]
  languages: string[]
  url: string
  dateAdded: string
  level: string
  category: string
  difficulty?: string
  duration?: string
}

export interface MiniGuideCategoryData {
  category: string
  description: string
  guides: MiniGuideData[]
}

export interface CodeExampleData {
  title: string
  description: string
  authors: string[]
  tags: string[]
  languages: string[]
  url: string
  dateAdded: string
  level: string
  category: string
  complexity?: string
  githubUrl?: string
}

export interface CodeExampleCategoryData {
  category: string
  description: string
  examples: CodeExampleData[]
}

// Map learning journey stages to categories for grouping
const stageToCategory: { [key: string]: string } = {
  'Beginner Dev': 'Free Web3 Courses',
  'Early Stage Blockchain Dev': 'Blockchain Fundamentals',
  'Ethereum Dev': 'Smart Contract Development',
  'Solana Dev': 'Programming Languages for Web3',
  'Beyond: Advanced Topics': 'Advanced Web3 Topics',
}

const categoryDescriptions: { [key: string]: string } = {
  'Free Web3 Courses': 'High-quality free courses to get started with blockchain development',
  'Blockchain Fundamentals': 'Core blockchain and cryptocurrency courses',
  'Smart Contract Development': 'Courses focused on smart contract programming and development',
  'Programming Languages for Web3': 'Courses on programming languages essential for blockchain development',
  'Advanced Web3 Topics': 'Specialized courses on advanced blockchain concepts',
  'Web3 Fundamentals & Concepts': 'Courses explaining core Web3 concepts and technologies',
}

// Mini-guide category mappings
const miniGuideStageToCategory: { [key: string]: string } = {
  'Beginner Dev': 'Blockchain Fundamentals',
  'Ethereum Dev': 'Smart Contract Concepts',
  'Beyond: Advanced Topics': 'DeFi Concepts',
  'Cross-Chain Dev': 'Cross-Chain Development',
}

const miniGuideCategoryDescriptions: { [key: string]: string } = {
  'Smart Contract Concepts': 'Focused guides on specific smart contract concepts',
  'Development Tools': 'Guides for using development tools and frameworks',
  'Blockchain Fundamentals': 'Core blockchain concepts explained clearly',
  'DeFi Concepts': 'Decentralized Finance concepts and implementations',
  'Cross-Chain Development': 'Guides for cross-chain and multi-chain development',
}

// Code example category mappings
const codeExampleStageToCategory: { [key: string]: string } = {
  'Ethereum Dev': 'Smart Contract Templates',
  'Cross-Chain Dev': 'Cross-Chain Development',
  'Beyond: Advanced Topics': 'DeFi Protocols',
}

const codeExampleCategoryDescriptions: { [key: string]: string } = {
  'Smart Contract Templates': 'Production-ready smart contract templates and libraries',
  'Full-Stack Development Templates': 'Complete dApp templates and boilerplates',
  'Development Tools & Templates': 'Development frameworks and tooling templates',
  'DeFi Protocols': 'DeFi protocol implementations and examples',
  'Frontend Integration': 'Frontend libraries and integration examples',
  'Testing & Security': 'Testing frameworks and security tools',
}

export async function getCoursesData(): Promise<CategoryData[]> {
  const coursesDirectory = path.join(process.cwd(), 'app/resources/courses-grants')
  const filenames = await fs.promises.readdir(coursesDirectory)
  
  const markdownFiles = filenames.filter(filename => filename.endsWith('.md'))
  
  const courses: CourseData[] = []
  
  for (const filename of markdownFiles) {
    const filePath = path.join(coursesDirectory, filename)
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    // Extract platform from authors or use a default
    const platform = data.authors?.[0]?.replace('@', '') || 'Unknown'
    
    // Determine duration and difficulty from tags or use defaults
    const duration = data.tags?.includes('Self-paced') ? 'Self-paced' : 
                    data.tags?.includes('Free') ? 'Free' : 'Varies'
    const difficulty = data.level || 'Beginner'
    
    courses.push({
      title: data.title,
      description: data.description,
      authors: data.authors || [],
      tags: data.tags || [],
      languages: data.languages || [],
      url: data.url,
      dateAdded: data.dateAdded,
      level: data.level,
      category: data.category,
      platform,
      duration,
      difficulty,
    })
  }
  
  // Group courses by category
  const categories: { [key: string]: CourseData[] } = {}
  
  courses.forEach(course => {
    // Determine category based on learning journey stage
    const learningJourneyStage = course.tags.find(tag => 
      tag.includes('Dev') || tag.includes('Advanced Topics')
    )
    
    let category = 'Web3 Fundamentals & Concepts' // default
    if (learningJourneyStage) {
      category = stageToCategory[learningJourneyStage] || category
    }
    
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(course)
  })
  
  // Convert to array format
  const result: CategoryData[] = Object.entries(categories).map(([category, courses]) => ({
    category,
    description: categoryDescriptions[category] || 'Various courses and tutorials',
    courses,
  }))
  
  return result
}

export async function getMiniGuidesData(): Promise<MiniGuideCategoryData[]> {
  const guidesDirectory = path.join(process.cwd(), 'app/resources/mini-guides')
  const filenames = await fs.promises.readdir(guidesDirectory)
  
  const markdownFiles = filenames.filter(filename => filename.endsWith('.md'))
  
  const guides: MiniGuideData[] = []
  
  for (const filename of markdownFiles) {
    const filePath = path.join(guidesDirectory, filename)
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    guides.push({
      title: data.title,
      description: data.description,
      authors: data.authors || [],
      tags: data.tags || [],
      languages: data.languages || [],
      url: data.url,
      dateAdded: data.dateAdded,
      level: data.level,
      category: data.category,
      difficulty: data.level,
      duration: 'Varies',
    })
  }
  
  // Group guides by category
  const categories: { [key: string]: MiniGuideData[] } = {}
  
  guides.forEach(guide => {
    // Determine category based on learning journey stage
    const learningJourneyStage = guide.tags.find(tag => 
      tag.includes('Dev') || tag.includes('Advanced Topics')
    )
    
    let category = 'Development Tools' // default
    if (learningJourneyStage) {
      category = miniGuideStageToCategory[learningJourneyStage] || category
    }
    
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(guide)
  })
  
  // Convert to array format
  const result: MiniGuideCategoryData[] = Object.entries(categories).map(([category, guides]) => ({
    category,
    description: miniGuideCategoryDescriptions[category] || 'Various mini-guides and tutorials',
    guides,
  }))
  
  return result
}

export async function getCodeExamplesData(): Promise<CodeExampleCategoryData[]> {
  const examplesDirectory = path.join(process.cwd(), 'app/resources/code-examples')
  const filenames = await fs.promises.readdir(examplesDirectory)
  
  const markdownFiles = filenames.filter(filename => filename.endsWith('.md'))
  
  const examples: CodeExampleData[] = []
  
  for (const filename of markdownFiles) {
    const filePath = path.join(examplesDirectory, filename)
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    examples.push({
      title: data.title,
      description: data.description,
      authors: data.authors || [],
      tags: data.tags || [],
      languages: data.languages || [],
      url: data.url,
      dateAdded: data.dateAdded,
      level: data.level,
      category: data.category,
      complexity: data.level,
      githubUrl: data.url,
    })
  }
  
  // Group examples by category
  const categories: { [key: string]: CodeExampleData[] } = {}
  
  examples.forEach(example => {
    // Determine category based on learning journey stage
    const learningJourneyStage = example.tags.find(tag => 
      tag.includes('Dev') || tag.includes('Advanced Topics')
    )
    
    let category = 'Development Tools & Templates' // default
    if (learningJourneyStage) {
      category = codeExampleStageToCategory[learningJourneyStage] || category
    }
    
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(example)
  })
  
  // Convert to array format
  const result: CodeExampleCategoryData[] = Object.entries(categories).map(([category, examples]) => ({
    category,
    description: codeExampleCategoryDescriptions[category] || 'Various code examples and templates',
    examples,
  }))
  
  return result
} 