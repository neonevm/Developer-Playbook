// app/resources/code-examples/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Code } from 'lucide-react'
import CodeExampleIcon from '@/app/components/CodeExampleIcon'

export const runtime = 'nodejs'
export const dynamic = 'force-static' // build-time scan of .md files

// ---------- Types ----------
type Example = {
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
}
type Group = { category: string; items: Example[] }

// ---------- Helpers ----------
const toStr = (v: unknown): string => (typeof v === 'string' ? v : '')
const toArr = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : [])

// Where the .md files live
const DIR = path.join(process.cwd(), 'app', 'resources', 'code-examples')

// Build the list from .md files
async function getExamples(): Promise<Group[]> {
  let files: string[] = []
  try {
    files = (await fs.promises.readdir(DIR)).filter((f) => f.toLowerCase().endsWith('.md'))
  } catch {
    console.warn('Code examples folder not found:', DIR)
    return []
  }

  const list: Example[] = []
  for (const file of files) {
    const raw = await fs.promises.readFile(path.join(DIR, file), 'utf-8')
    const { data } = matter(raw)

    const ex: Example = {
      key: file,
      title: toStr(data.title) || file.replace(/\.md$/i, ''),
      description: toStr(data.description),
      authors: toArr(data.authors),
      tags: toArr(data.tags),
      languages: toArr(data.languages),
      url: toStr(data.url),
      dateAdded: data.dateAdded,
      level: toStr(data.level),
      category: toStr(data.category) || 'General',
    }

    if (ex.title && ex.url) list.push(ex)
  }

  // newest first
  list.sort((a, b) => {
    const da = new Date(a.dateAdded || 0).getTime()
    const db = new Date(b.dateAdded || 0).getTime()
    return db - da
  })

  // group by category
  const map = new Map<string, Example[]>()
  for (const ex of list) {
    const key = ex.category || 'General'
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(ex)
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => ({ category, items }))
}

function isGitHub(url?: string) {
  if (!url) return false
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./, '') === 'github.com'
  } catch {
    return false
  }
}

// ---------- Page ----------
export default async function CodeExamplesPage() {
  const groups = await getExamples()

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
            Code Samples & Templates
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Snippets, templates and boilerplates pulled automatically from Markdown files.
            Add a new <span className="font-semibold">.md</span> and it appears here at build time.
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
                {group.items.map((ex) => (
                  <a
                    key={ex.key}
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-white/10 bg-[#1a1a1a] hover:border-white/30 hover:bg-[#202020] transition-colors p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] grid place-items-center">
                        <CodeExampleIcon tags={ex.tags} category={ex.category || 'Code Example'} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="truncate text-base font-medium text-white group-hover:text-[#73FDEA]">
                            {ex.title}
                          </h3>
                          {isGitHub(ex.url) ? (
                            <Github className="h-4 w-4 flex-shrink-0 text-white/60 group-hover:text-[#73FDEA]" />
                          ) : (
                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/60 group-hover:text-[#73FDEA]" />
                          )}
                        </div>

                        {ex.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2">{ex.description}</p>
                        )}

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                          {ex.languages?.[0] && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/70">
                              {ex.languages[0]}
                            </span>
                          )}
                          {ex.level && (
                            <span className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/70">
                              {ex.level}
                            </span>
                          )}
                          {ex.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="inline-block rounded border border-white/20 bg-black/30 px-2 py-0.5 text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {ex.authors?.length > 0 && (
                          <div className="mt-2 text-[11px] text-white/50 truncate">
                            {ex.authors.join(', ')}
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
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-6 text-center">
          <h3 className="text-xl font-display font-bold text-white mb-2">Share Your Code</h3>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto text-sm">
            Drop a new <code className="text-white/80">.md</code> with front-matter into
            <code className="mx-1 text-white/80">app/resources/code-examples/</code> and it’ll show up
            here after a rebuild.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Submit Code Example
            <Code className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}
