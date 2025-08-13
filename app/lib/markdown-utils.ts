// app/lib/markdown-utils.ts
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
  platform: string
  duration: string
  difficulty: string
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
  difficulty: string
  duration: string
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
  complexity: string
  githubUrl: string
}

export interface CodeExampleCategoryData {
  category: string
  description: string
  examples: CodeExampleData[]
}

/** Canonical stage names EXACTLY as expected in tags */
const STAGES = ['Beginner','Early','Ethereum','Solana','Cross-Chain','Beyond'] as const
type Stage = typeof STAGES[number]

/** Map canonical stage -> display category */
const stageToCategory: Record<Stage, string> = {
  Beginner: 'Free Web3 Courses',
  Early: 'Blockchain Fundamentals',
  Ethereum: 'Smart Contract Development',
  Solana: 'Programming Languages for Web3',
  'Cross-Chain': 'Advanced Web3 Topics',
  Beyond: 'Advanced Web3 Topics',
}

const categoryDescriptions: Record<string, string> = {
  'Free Web3 Courses': 'High-quality free courses to get started with blockchain development',
  'Blockchain Fundamentals': 'Core blockchain and cryptocurrency courses',
  'Smart Contract Development': 'Courses focused on smart contract programming and development',
  'Programming Languages for Web3': 'Courses on programming languages essential for blockchain development',
  'Advanced Web3 Topics': 'Specialized courses on advanced blockchain concepts',
  'Web3 Fundamentals & Concepts': 'Courses explaining core Web3 concepts and technologies',
}

/** Mini-guide mappings */
const miniGuideStageToCategory: Record<Stage, string> = {
  Beginner: 'Blockchain Fundamentals',
  Early: 'Blockchain Fundamentals',
  Ethereum: 'Smart Contract Concepts',
  Solana: 'Blockchain Fundamentals',
  'Cross-Chain': 'Cross-Chain Development',
  Beyond: 'DeFi Concepts',
}

const miniGuideCategoryDescriptions: Record<string, string> = {
  'Smart Contract Concepts': 'Focused guides on specific smart contract concepts',
  'Development Tools': 'Guides for using development tools and frameworks',
  'Blockchain Fundamentals': 'Core blockchain concepts explained clearly',
  'DeFi Concepts': 'Decentralized Finance concepts and implementations',
  'Cross-Chain Development': 'Guides for cross-chain and multi-chain development',
}

/** Code example mappings */
const codeExampleStageToCategory: Record<Stage, string> = {
  Beginner: 'Development Tools & Templates',
  Early: 'Development Tools & Templates',
  Ethereum: 'Smart Contract Templates',
  Solana: 'Development Tools & Templates',
  'Cross-Chain': 'Cross-Chain Development',
  Beyond: 'DeFi Protocols',
}

const codeExampleCategoryDescriptions: Record<string, string> = {
  'Smart Contract Templates': 'Production-ready smart contract templates and libraries',
  'Full-Stack Development Templates': 'Complete dApp templates and boilerplates',
  'Development Tools & Templates': 'Development frameworks and tooling templates',
  'DeFi Protocols': 'DeFi protocol implementations and examples',
  'Frontend Integration': 'Frontend libraries and integration examples',
  'Testing & Security': 'Testing frameworks and security tools',
}

/** Backward-compatible stage resolver (handles old tags too) */
function resolveStageTag(tags: string[] = []): Stage | null {
  const norm = (s: string) => s.toLowerCase().trim()
  const has = (alts: string[]) => tags.some(t => alts.map(norm).includes(norm(t)))

  if (has(['Beginner','Beginner Dev'])) return 'Beginner'
  if (has(['Early','Early Stage','Early Stage Blockchain Dev'])) return 'Early'
  if (has(['Ethereum','Ethereum Dev','Solidity'])) return 'Ethereum'
  if (has(['Solana','Solana Dev','Rust'])) return 'Solana'
  if (has(['Cross-Chain','Cross Chain','Cross-Chain Dev'])) return 'Cross-Chain'
  if (has(['Beyond','Advanced','Beyond: Advanced Topics'])) return 'Beyond'
  return null
}

export async function getCoursesData(): Promise<CategoryData[]> {
  const dir = path.join(process.cwd(), 'app/resources/courses-grants')
  const filenames = (await fs.promises.readdir(dir)).filter(f => f.endsWith('.md'))

  const courses: CourseData[] = []
  for (const filename of filenames) {
    const filePath = path.join(dir, filename)
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)

    const platform = data.authors?.[0]?.replace('@', '') || 'Unknown'
    const duration = data.tags?.includes('Self-paced') ? 'Self-paced'
                    : data.tags?.includes('Free') ? 'Free' : 'Varies'
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
      platform, duration, difficulty,
    })
  }

  const buckets: Record<string, CourseData[]> = {}
  courses.forEach(course => {
    const stage = resolveStageTag(course.tags)
    const category = stage ? (stageToCategory[stage] || 'Web3 Fundamentals & Concepts')
                           : 'Web3 Fundamentals & Concepts'
    if (!buckets[category]) buckets[category] = []
    buckets[category].push(course)
  })

  return Object.entries(buckets).map(([category, courses]) => ({
    category,
    description: categoryDescriptions[category] || 'Various courses and tutorials',
    courses,
  }))
}

export async function getMiniGuidesData(): Promise<MiniGuideCategoryData[]> {
  // FIX: match your folder structure
  const dir = path.join(process.cwd(), 'app/resources/guides-articles')
  const filenames = (await fs.promises.readdir(dir)).filter(f => f.endsWith('.md'))

  const guides: MiniGuideData[] = []
  for (const filename of filenames) {
    const filePath = path.join(dir, filename)
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

  const buckets: Record<string, MiniGuideData[]> = {}
  guides.forEach(guide => {
    const stage = resolveStageTag(guide.tags)
    const category = stage ? (miniGuideStageToCategory[stage] || 'Development Tools')
                           : 'Development Tools'
    if (!buckets[category]) buckets[category] = []
    buckets[category].push(guide)
  })

  return Object.entries(buckets).map(([category, guides]) => ({
    category,
    description: miniGuideCategoryDescriptions[category] || 'Various mini-guides and tutorials',
    guides,
  }))
}

export async function getCodeExamplesData(): Promise<CodeExampleCategoryData[]> {
  const dir = path.join(process.cwd(), 'app/resources/code-examples')
  const filenames = (await fs.promises.readdir(dir)).filter(f => f.endsWith('.md'))

  const examples: CodeExampleData[] = []
  for (const filename of filenames) {
    const filePath = path.join(dir, filename)
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

  const buckets: Record<string, CodeExampleData[]> = {}
  examples.forEach(example => {
    const stage = resolveStageTag(example.tags)
    const category = stage ? (codeExampleStageToCategory[stage] || 'Development Tools & Templates')
                           : 'Development Tools & Templates'
    if (!buckets[category]) buckets[category] = []
    buckets[category].push(example)
  })

  return Object.entries(buckets).map(([category, examples]) => ({
    category,
    description: codeExampleCategoryDescriptions[category] || 'Various code examples and templates',
    examples,
  }))
}
