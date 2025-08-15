// app/resources/courses-grants/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, ExternalLink, Code, Shield, Globe, BookOpen } from 'lucide-react'

export const runtime = 'nodejs'
export const dynamic = 'force-static' // build-time scan

// ---------- Types ----------
type Item = {
  key: string
  title: string
  description?: string
  authors: string[]
  tags: string[]
  languages: string[]
  url?: string
  dateAdded?: string | Date
  level?: string
  category?: string
  platform?: string
  icon: 'Code' | 'Shield' | 'Globe' | 'BookOpen' | 'GraduationCap'
}
type Group = { category: string; items: Item[] }

// ---------- Helpers ----------
const DIR = path.join(process.cwd(), 'app', 'resources', 'courses-grants')
const toStr = (v: unknown): string => (typeof v === 'string' ? v : '')
const toArr = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : [])
const low = (s: string) => s.toLowerCase()

const hasAny = (arr: string[], words: string[]) => {
  const L = arr.map(low)
  return words.some((w) => L.includes(low(w)))
}

function pickIcon(category: string, tags: string[]): Item['icon'] {
  const t = tags.map(low)
  const c = low(category)
  if (t.some((x) => x.includes('solidity') || x.includes('smart contract') || x.includes('rust') || x.includes('programming')))
    return 'Code'
  if (t.some((x) => x.includes('cryptography') || x.includes('security'))) return 'Shield'
  if (t.some((x) => x.includes('web3') || x.includes('fundamentals') || x.includes('blockchain'))) return 'Globe'
  if (c.includes('fundamental') || t.some((x) => x.includes('academic'))) return 'BookOpen'
  return 'GraduationCap'
}

// Classify into a display category (uses frontmatter if present)
function classifyCategory(frontCategory?: string, tags: string[] = []): string {
  const t = tags.map(low)
  const c = low(frontCategory || '')

  if (c) return frontCategory!

  if (t.some((x) => x.includes('accelerator') || x.includes('incubator'))) return 'Accelerator Programs'
  if (t.some((x) => x.includes('grant') || x.includes('funding'))) return 'Grants & Funding'
  if (t.some((x) => x.includes('solidity') || x.includes('rust') || x.includes('programming')))
    return 'Programming Languages for Web3'
  if (t.some((x) => x.includes('smart contract') || x.includes('solidity'))) return 'Smart Contract Development'
  if (t.some((x) => x.includes('fundamental') || x.includes('blockchain'))) return 'Blockchain Fundamentals'
  if (t.some((x) => x.includes('advanced') || x.includes('cryptography'))) return 'Advanced Web3 Topics'
  if (t.some((x) => x.includes('free') || x.includes('beginner'))) return 'Free Web3 Courses'

  return 'General'
}

function Icon({ name, className }: { name: Item['icon']; className?: string }) {
  const map = { Code, Shield, Globe, BookOpen, GraduationCap }
  const Cmp = map[name] || GraduationCap
  return <Cmp className={className} />
}

function isExternal(url?: string) {
  if (!url) return true
  try {
    const u = new URL(url)
    return !['localhost', '127.0.0.1'].includes(u.hostname)
  } catch {
    return true
  }
}

// ---------- Loader ----------
async function getItems(): Promise<Group[]> {
  let files: string[] = []
  try {
    files = (await fs.promises.readdir(DIR)).filter((f) => f.toLowerCase().endsWith('.md'))
  } catch {
    console.warn('Courses/Grants folder not found:', DIR)
    return []
  }

  const list: Item[] = []
  for (const file of files) {
    try {
      const raw = await fs.promises.readFile(path.join(DIR, file), 'utf-8')
      const { data } = matter(raw)

      const title = toStr(data.title) || file.replace(/\.md$/i, '')
      const description = toStr(data.description)
      const authors = toArr(data.authors)
      const tags = toArr(data.tags)
      const languages = toArr(data.languages)
      const url = toStr(data.url)
      const dateAdded = data.dateAdded
      const level = toStr(data.level)
      const platform = authors[0]?.replace(/^@/, '')

      const category = classifyCategory(toStr(data.category), tags)
      const icon = pickIcon(category, tags)

      if (!title || !url) continue

      list.push({
        key: file,
        title,
        description,
        authors,
        tags,
        languages,
        url,
        dateAdded,
        level,
        category,
        platform,
        icon,
      })
    } catch (err) {
      console.warn('Failed to parse', file, err)
    }
  }

  // newest first
  list.sort((a, b) => {
    const da = new Date(a.dateAdded || 0).getTime()
    const db = new Date(b.dateAdded || 0).getTime()
    return db - da
  })

  // group by category
  const map = new Map<string, Item[]>()
  for (const ex of list) {
    const key = ex.category || 'General'
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(ex)
  }

  // alphabetical categories
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => ({ category, items }))
}

// ---------- Page ----------
export default async function CoursesPage() {
  const groups = await getItems()

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
          <h1 className="text-3xl font-display font-bold text-white mb-4">Courses & Grants</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            This list is compiled automatically from Markdown files. Drop a new <code>.md</code> into
            <code className="mx-1 text-white/80">app/resources/courses-grants/</code> and it appears here after a rebuild.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.category}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-semibold text-white">
                  {group.category}{' '}
                  <span className="text-white/50 text-sm">({group.items.length})</span>
                </h2>
              </div>

              {/* Compact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((c) => (
                  <a
                    key={c.key}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-white/10 bg-[#1a1a1a] hover:border-white/30 hover:bg-[#202020] transition-colors p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] grid place-items-center">
                        <Icon name={c.icon} className="h-4 w-4 text-white" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="truncate text-base font-medium text-white group-hover:text-[#73FDEA]">
                            {c.title}
                          </h3>
                          {isExternal(c.url) && (
                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/60 group-hover:text-[#73FDEA]" />
                          )}
                        </div>

                        {c.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2">{c.description}</p>
                        )}

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                          {c.level && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/70">
                              {c.level}
                            </span>
                          )}
                          {c.languages?.[0] && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/70">
                              {c.languages[0]}
                            </span>
                          )}
                          {c.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {(c.platform || c.authors.length > 0) && (
                          <div className="mt-2 text-[11px] text-white/50 truncate">
                            {c.platform || c.authors.join(', ')}
                          </div>
                        )}
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
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share a Course or Grant</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Know a great course, grant, or accelerator? Add a Markdown card to{' '}
            <code className="text-white/80">app/resources/courses-grants/</code>.
          </p>
          <a
            href="https://github.com/neonlabsorg/Developer-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Suggest a Course
            <GraduationCap className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}
