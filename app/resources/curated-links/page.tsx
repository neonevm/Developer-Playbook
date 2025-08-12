// app/resources/curated-links/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Code,
  Shield,
  BookOpen,
  Github,
  Video,
  FileText,
} from 'lucide-react'

export const runtime = 'nodejs'
export const dynamic = 'force-static' // build-time scan

// ---------- Types ----------
type LinkItem = {
  key: string
  title: string
  description?: string
  url: string
  type: string
  icon: IconName
  category: string
  tags: string[]
  domain?: string
}

type Section = { title: string; description: string; items: LinkItem[] }
type IconName = 'Globe' | 'Code' | 'Shield' | 'BookOpen' | 'Github' | 'Video' | 'FileText'

// ---------- Helpers ----------
const DIR = path.join(process.cwd(), 'app', 'resources', 'curated-links')
const toStr = (v: unknown): string => (typeof v === 'string' ? v : '')
const toArr = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : [])
const low = (s: string) => s.toLowerCase()

const hostname = (url?: string) => {
  if (!url) return undefined
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./, '')
  } catch {
    return undefined
  }
}

const isGithub = (url?: string) => hostname(url) === 'github.com'
const isYouTube = (url?: string) => {
  const h = hostname(url)
  return h === 'youtube.com' || h === 'youtu.be'
}
const isDocs = (url?: string) => {
  const h = hostname(url)
  return !!h && /docs|readthedocs|doc|guide|developer|devportal/.test(h)
}

// Determine link "type" (label) from tags & url
const inferType = (tags: string[] = [], url?: string): string => {
  const t = tags.map(low)
  if (t.includes('resource collection')) return 'Resource Collection'
  if (t.includes('github repository') || isGithub(url)) return 'GitHub Repository'
  if (t.includes('documentation') || t.includes('official documentation') || isDocs(url)) return 'Documentation'
  if (t.includes('code examples')) return 'Code Examples'
  if (t.includes('development framework')) return 'Development Framework'
  if (t.includes('book')) return 'Book'
  if (t.includes('reference')) return 'Reference'
  if (t.includes('interactive learning')) return 'Interactive Learning'
  if (t.includes('development guide')) return 'Development Guide'
  if (
    t.includes('security auditing') ||
    t.includes('security library') ||
    t.includes('security research') ||
    t.includes('security platform') ||
    t.includes('security analysis')
  )
    return 'Security'
  if (isYouTube(url)) return 'Video'
  return 'Resource'
}

// Pick an icon for the *category* or from URL hints
const iconFor = (category: string, type: string, url?: string): IconName => {
  if (isGithub(url) || type === 'GitHub Repository') return 'Github'
  if (isYouTube(url) || type === 'Video') return 'Video'
  if (type === 'Documentation' || isDocs(url)) return 'FileText'
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

// ---------- Load all links ----------
async function loadLinks(): Promise<LinkItem[]> {
  let files: string[] = []
  try {
    files = (await fs.promises.readdir(DIR)).filter((f) => f.toLowerCase().endsWith('.md'))
  } catch {
    console.warn('Curated links folder not found:', DIR)
    return []
  }

  const items: LinkItem[] = []
  for (const file of files) {
    try {
      const raw = await fs.promises.readFile(path.join(DIR, file), 'utf-8')
      const { data } = matter(raw)

      const title = toStr(data.title) || file.replace(/\.md$/i, '')
      const description = toStr(data.description)
      const url = toStr(data.url)
      const tags = toArr(data.tags)
      const category = toStr(data.category) || 'General'

      if (!title || !url) continue

      const type = inferType(tags, url)
      items.push({
        key: file,
        title,
        description,
        url,
        type,
        icon: iconFor(category, type, url),
        category,
        tags,
        domain: hostname(url),
      })
    } catch (err) {
      console.warn('Failed to parse', file, err)
    }
  }

  // sort by title asc (stable)
  items.sort((a, b) => a.title.localeCompare(b.title))
  return items
}

// Build three sections (first match wins) with fallbacks
function buildSections(items: LinkItem[]): Section[] {
  const sections: Section[] = [
    {
      title: 'Development Tools & Resources',
      description: 'Essential tools and resources for Web3 development.',
      items: [],
    },
    {
      title: 'Blockchain & Cryptocurrency Resources',
      description: 'Key resources to understand blockchain and crypto.',
      items: [],
    },
    {
      title: 'Security & Auditing',
      description: 'Smart contract security, auditing, and best practices.',
      items: [],
    },
  ]

  const push = (i: number, it: LinkItem) => sections[i].items.push(it)

  for (const it of items) {
    const c = low(it.category)
    const t = it.tags.map(low)
    if (
      c === 'development tools' ||
      t.includes('development tools') ||
      t.includes('development framework') ||
      t.includes('code examples')
    ) {
      push(0, it)
      continue
    }

    if (c === 'security' || t.some((x) => x.startsWith('security'))) {
      push(2, it)
      continue
    }

    // default → blockchain resources
    push(1, it)
  }

  return sections.filter((s) => s.items.length > 0)
}

function Icon({ name, className }: { name: IconName; className?: string }) {
  const map = { Globe, Code, Shield, BookOpen, Github, Video, FileText }
  const Cmp = map[name] || Globe
  return <Cmp className={className} />
}

// ---------- Page ----------
export default async function CuratedLinksPage() {
  const items = await loadLinks()
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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Curated Links</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            External resources (docs, videos, repos, guides) pulled automatically from Markdown files in{' '}
            <code className="text-white/80">app/resources/curated-links/</code>.
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
                {group.items.map((lnk) => (
                  <a
                    key={lnk.key}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-white/10 bg-[#1a1a1a] hover:border-white/30 hover:bg-[#202020] transition-colors p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] grid place-items-center">
                        <Icon name={lnk.icon} className="h-4 w-4 text-white" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="truncate text-base font-medium text-white group-hover:text-[#73FDEA]">
                            {lnk.title}
                          </h3>
                          <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/60 group-hover:text-[#73FDEA]" />
                        </div>

                        {lnk.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2">{lnk.description}</p>
                        )}

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                          <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/70">
                            {lnk.type}
                          </span>
                          {lnk.domain && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/60">
                              {lnk.domain}
                            </span>
                          )}
                          {lnk.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Found a Great Resource?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Drop a new <code className="text-white/80">.md</code> into <code className="text-white/80">app/resources/curated-links/</code> and
            it’ll show up here after a rebuild.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Suggest a Resource
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}
