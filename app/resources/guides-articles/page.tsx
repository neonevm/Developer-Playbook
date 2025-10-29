// app/resources/guides-articles/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import {
  ArrowLeft, BookOpen, ExternalLink, Code, Target, Globe, Clock, User,
} from 'lucide-react'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

// ---------- Types ----------
type Item = {
  key: string
  slug: string
  title: string
  description?: string
  author?: string
  date?: string // year as string
  dateAdded?: string // full ISO for sorting
  readTime?: string
  difficulty?: string
  url?: string
  type: string
  icon: 'Globe' | 'Code' | 'Target' | 'BookOpen'
  category: string
  tags: string[]
  href: string // computed internal/external href for the card
  external: boolean
}

type Section = { title: string; description: string; items: Item[] }

// ---------- Helpers ----------
const DIR = path.join(process.cwd(), 'app', 'resources', 'guides-articles')
const toStr = (v: unknown, d = ''): string => (typeof v === 'string' ? v : d)
const toArr = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : [])
const low = (s: string) => s.toLowerCase()

const inferType = (tags: string[] = []): string => {
  const t = tags.map(low)
  if (t.includes('security')) return 'Security Guide'
  if (t.includes('tutorial')) return 'Tutorial'
  if (t.includes('deep dive')) return 'Technical Deep Dive'
  if (t.includes('career guide')) return 'Career Guide'
  if (t.includes('full stack')) return 'Full Stack Tutorial'
  if (t.includes('language guide')) return 'Language Guide'
  if (t.includes('optimization')) return 'Optimization Guide'
  if (t.includes('zero knowledge')) return 'Cryptography Guide'
  if (t.includes('cross-chain')) return 'Cross-Chain Guide'
  if (t.includes('composability')) return 'Composability Guide'
  if (t.includes('defi')) return 'DeFi Guide'
  if (t.includes('elizaos')) return 'Plugin Tutorial'
  if (t.includes('blockchain explorer')) return 'Tool Guide'
  if (t.includes('scalability')) return 'Scalability Analysis'
  if (t.includes('smart contracts')) return 'Smart Contract Guide'
  if (t.includes('blockchain fundamentals')) return 'Educational'
  return 'Technical Guide'
}

const iconForCategory = (category: string): Item['icon'] => {
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
    case 'Community':
    default:
      return 'BookOpen'
  }
}

const yearFromDate = (d?: string | Date) => {
  if (!d) return undefined
  const dt = typeof d === 'string' ? new Date(d) : d
  if (isNaN(dt.getTime())) {
    if (typeof d === 'string') return d.split('-')[0]
    return undefined
  }
  return String(dt.getFullYear())
}

const calcReadTime = (text: string): string => {
  const words = text.trim().split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 240))
  return `${mins} min read`
}

// ---------- Loader ----------
async function loadArticles(): Promise<Item[]> {
  let files: string[] = []
  try {
    files = (await fs.promises.readdir(DIR)).filter((f) => f.toLowerCase().endsWith('.md'))
  } catch {
    console.warn('Guides & Articles folder not found:', DIR)
    return []
  }

  const items: Item[] = []
  for (const file of files) {
    try {
      const raw = await fs.promises.readFile(path.join(DIR, file), 'utf-8')
      const { data, content } = matter(raw)

      const title = toStr(data.title) || file.replace(/\.md$/i, '')
      const description = toStr(data.description)
      const authors = toArr(data.authors)
      const firstAuthor = authors[0]?.replace(/^@/, '')
      const category = toStr(data.category) || 'General'
      const tags = toArr(data.tags)
      const extUrl = toStr(data.url) || ''
      const difficulty = toStr(data.level) || 'Beginner'
      const type = inferType(tags)
      const icon = iconForCategory(category)
      const dateAdded = toStr((data as any).dateAdded) || ''
      const date = yearFromDate(dateAdded)
      const readTime = toStr((data as any).readTime) || (extUrl ? undefined : calcReadTime(content))
      const fmSlug = toStr((data as any).slug)
      const slug = fmSlug || file.replace(/\.md$/i, '').toLowerCase().replace(/[^a-z0-9\-]+/g, '-')

      const external = Boolean(extUrl)
      const href = external ? extUrl : `/resources/guides-articles/${slug}`

      if (!title) continue

      items.push({
        key: file,
        slug,
        title,
        description,
        author: firstAuthor || 'Unknown',
        date,
        dateAdded: dateAdded || undefined,
        readTime,
        difficulty,
        url: extUrl || undefined,
        type,
        icon,
        category,
        tags,
        href,
        external,
      })
    } catch (err) {
      console.warn('Failed to parse', file, err)
    }
  }

  // newest first by dateAdded
  items.sort((a, b) => {
    const da = a.dateAdded ? new Date(a.dateAdded).getTime() : 0
    const db = b.dateAdded ? new Date(b.dateAdded).getTime() : 0
    return db - da
  })

  return items
}

// Assign each article to exactly one section (first match wins)
function buildSections(items: Item[]): Section[] {
  const sections: Section[] = [
    {
      title: 'Builder-Powered Articles',
      description: 'Real builders. Real insights. Publish your learnings and help level up the ecosystem.',
      items: [],
    },
    {
      title: 'Neon EVM & Cross-Chain Development',
      description: 'Articles focused on Neon EVM development and cross-chain interoperability.',
      items: [],
    },
    {
      title: 'Blockchain Fundamentals & Deep Dives',
      description: 'In-depth articles explaining blockchain concepts and mechanisms.',
      items: [],
    },
    {
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials and practical development guides.',
      items: [],
    },
    {
      title: 'Best Practices & Security',
      description: 'Development best practices and security considerations.',
      items: [],
    },
  ]

  const pushTo = (idx: number, it: Item) => sections[idx].items.push(it)

  for (const it of items) {
    const c = low(it.category)
    const t = it.tags.map(low)
    const type = low(it.type)

    // Community = internal-only AND explicitly marked as community
    if (!it.external && (c === 'community' || t.includes('community'))) {
      pushTo(0, it); continue
    }

    // Existing buckets
    if (c === 'neon evm' || c === 'cross-chain' || t.includes('cross-chain') || t.includes('neon') || t.includes('evm')) {
      pushTo(1, it); continue
    }
    if (c === 'ethereum' || c === 'general' || t.includes('fundamentals') || type.includes('deep dive')) {
      pushTo(2, it); continue
    }
    if (type.includes('tutorial') || type.includes('guide')) {
      pushTo(3, it); continue
    }
    if (t.includes('security') || t.includes('optimization') || type.includes('security')) {
      pushTo(4, it); continue
    }

    // default bucket
    pushTo(2, it)
  }

  return sections.filter((s) => s.items.length > 0)
}

function Icon({ name, className }: { name: Item['icon']; className?: string }) {
  const map = { Globe, Code, Target, BookOpen }
  const Cmp = map[name] || BookOpen
  return <Cmp className={className} />
}

// ---------- Page ----------
export default async function GuidesArticlesPage() {
  const items = await loadArticles()
  const groups = buildSections(items)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
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
            Tutorials, deep dives, and developer journeys—pulled automatically from Markdown files in{' '}
            <code className="text-white/80">app/resources/guides-articles/</code>.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.title}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-semibold text-white">
                  {group.title}{' '}
                  <span className="text-white/50 text-sm">({group.items.length})</span>
                </h2>
                <p className="text-white/60 text-sm hidden md:block">{group.description}</p>
              </div>

              {/* Compact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((a) => {
                  const isCommunityTile = group.title === 'Builder-Powered Articles' && (low(a.category) === 'community' || a.tags.map(low).includes('community'))
                  const tileClasses = isCommunityTile 
                    ? "group rounded-lg border-2 border-[#FF00AA]/50 bg-gradient-to-br from-[#FF00AA]/10 to-[#8E1CF1]/10 hover:border-[#FF00AA] hover:from-[#FF00AA]/15 hover:to-[#8E1CF1]/15 transition-all p-4"
                    : "group rounded-lg border border-white/10 bg-[#1a1a1a] hover:border-white/30 hover:bg-[#202020] transition-colors p-4"
                  
                  return (
                  <a
                    key={a.key}
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    className={tileClasses}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] grid place-items-center">
                        <Icon name={a.icon} className="h-4 w-4 text-white" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="truncate text-base font-medium text-white group-hover:text-[#73FDEA]">
                            {a.title}
                          </h3>
                          {a.external && (
                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/60 group-hover:text-[#73FDEA]" />
                          )}
                        </div>

                        {a.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2">{a.description}</p>
                        )}

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-white/70">
                          {a.readTime && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {a.readTime}
                            </span>
                          )}
                          {a.difficulty && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5">
                              {a.difficulty}
                            </span>
                          )}
                          <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/60">
                            {a.type}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-[11px] text-white/60 truncate">
                          <User className="h-3 w-3" />
                          <span className="truncate">{a.author || 'Unknown'}</span>
                          {a.date && (
                            <>
                              <span>•</span>
                              <span>{a.date}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Write an Article</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Add a Markdown file in <code className="text-white/80">app/resources/guides-articles/</code> and it will
            appear here after a rebuild.
          </p>
          <a
            href="https://github.com/neonevm/Developer-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Submit Your Article
            <BookOpen className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}
