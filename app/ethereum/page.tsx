// app/ethereum/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react'
import EthereumTimelines from './EthereumTimelines'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

type ResourceMeta = {
  title: string
  description?: string
  authors?: string[]
  tags?: string[]
  languages?: string[]
  url?: string
  dateAdded?: string | Date
  level?: string
  category?: string
  // twitter extras
  avatar?: string
  bio?: string
  displayName?: string
}

type TwitterProfile = {
  handle: string
  title?: string
  avatar?: string
  bio?: string
  displayName?: string
}

// ---------- helpers ----------
const toLower = (s: unknown) => String(s || '').toLowerCase().trim()
const arrLower = (a?: unknown[]) => (Array.isArray(a) ? a.map(toLower) : [])

const isEthereumTag = (tags?: unknown) =>
  Array.isArray(tags) && tags.map(toLower).some(t => ['ethereum','eth','evm','ethereum dev'].includes(t))

const isTwitterTag = (tags?: unknown) =>
  Array.isArray(tags) && tags.map(toLower).some(t => ['twitter','x','twitter profile'].includes(t))

const isGithub = (url?: string) => {
  if (!url) return false
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./,'') === 'github.com'
  } catch { return false }
}

const formatDate = (d?: Date | string) => {
  if (!d) return ''
  const dt = typeof d === 'string' ? new Date(d) : d
  return isNaN(dt.getTime()) ? '' :
    `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`
}

function haystack(meta: ResourceMeta) {
  const parts = [meta.title, meta.category, meta.description, ...(meta.tags || []), ...(meta.languages || []), meta.level]
    .map(toLower).join(' ')
  return ` ${parts.replace(/[^a-z0-9+]+/g,' ').replace(/\s+/g,' ').trim()} `
}
const containsPhrase = (hay: string, phrase: string) => hay.includes(` ${phrase.toLowerCase()} `)
const containsAny = (hay: string, items: string[]) => items.some(p => containsPhrase(hay, p))

// Classifier → 'guides' | 'code' | 'courses'  (Ecosystem removed)
// Anything that would've been "ecosystem" now falls under Guides & Docs unless it matches Code or Courses.
function classify(meta: ResourceMeta): 'guides' | 'code' | 'courses' {
  const hay = haystack(meta)
  const tags = arrLower(meta.tags)

  const courseSignals = [
    'course','courses','bootcamp','academy','curriculum','lesson','lectures','mooc','program',
    'tutorial series','cohort','workshop'
  ]
  if (tags.includes('book') || containsAny(hay, courseSignals)) return 'courses'

  const codeSignals = [
    'template','templates','starter','starter kit','boilerplate','example','examples','sample','samples',
    'repo','repository','scaffold','sdk','library'
  ]
  if (isGithub(meta.url) || containsAny(hay, codeSignals)) return 'code'

  // Fold prior "ecosystem" hints into Guides & Docs
  const ecosystemSignals = [
    'node.js','nodejs','npm','pnpm','yarn','nvm',
    'hardhat','foundry','forge','anvil','remix',
    'metamask','wallet',
    'ethers.js','ethers','viem','web3.js',
    'tenderly','infura','alchemy','chainlink',
    'cli','rpc','explorer','plugin','framework','tool','tools','devtools'
  ]

  const guideSignals = [
    'docs','documentation','reference','api reference','guide','guides','how to','tutorial','handbook',
    'cookbook','overview','walkthrough','article','blog','deep dive',
    'erc20','erc-20','erc721','erc-721','erc1155','erc-1155','standard'
  ]

  if (containsAny(hay, guideSignals) || containsAny(hay, ecosystemSignals)) return 'guides'

  // Default to Guides & Docs
  return 'guides'
}

// Twitter handle extraction
function extractTwitterHandle(meta: ResourceMeta): string | null {
  const handleRe = /^@?([A-Za-z0-9_]{1,15})$/
  for (const a of meta.authors || []) {
    const m = String(a).trim().match(handleRe)
    if (m) return m[1]
  }
  if (meta.url) {
    try {
      const u = new URL(meta.url)
      const host = u.hostname.replace(/^www\./,'')
      if (host === 'twitter.com' || host === 'x.com') {
        const seg = u.pathname.split('/').filter(Boolean)[0] || ''
        const m = seg.match(handleRe)
        if (m) return m[1]
      }
    } catch {}
  }
  if (meta.title?.trim().startsWith('@')) {
    const m = meta.title.trim().match(handleRe)
    if (m) return m[1]
  }
  return null
}

// Blog MD -> HTML
async function getBlogHtml() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'ethereum', 'blogpost.md')
    const fileContent = await fs.promises.readFile(filePath, 'utf-8')
    const { content } = matter(fileContent)
    return marked.parse(content)
  } catch {
    return marked.parse('# Ethereum: Start Here\n\n_Add **app/ethereum/blogpost.md** to show this section._')
  }
}

// Read .md and split into resources + twitter profiles
async function getEthereumContent(): Promise<{
  resources: (ResourceMeta & { key: string; section: ReturnType<typeof classify> })[]
  profiles: TwitterProfile[]
}> {
  const dir = path.join(process.cwd(), 'app', 'ethereum')
  const files = await fs.promises.readdir(dir)
  const mdFiles = files.filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'blogpost.md')

  const resources: (ResourceMeta & { key: string; section: ReturnType<typeof classify> })[] = []
  const profiles: TwitterProfile[] = []
  const seen = new Set<string>()

  for (const file of mdFiles) {
    const raw = await fs.promises.readFile(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    const meta = data as ResourceMeta

    // Twitter profiles
    if (isTwitterTag(meta.tags)) {
      const h = extractTwitterHandle(meta)
      if (h) {
        const key = h.toLowerCase()
        if (!seen.has(key)) {
          seen.add(key)
          profiles.push({
            handle: h,
            title: meta.title,
            displayName: meta.displayName,
            avatar: typeof meta.avatar === 'string' ? meta.avatar : undefined,
            bio: typeof meta.bio === 'string' ? meta.bio : undefined,
          })
        }
      }
      continue
    }

    // Normal resources
    if (!isEthereumTag(meta.tags)) continue
    if (!meta.url) continue

    resources.push({
      key: file,
      title: meta.title || file.replace(/\.md$/i, ''),
      description: meta.description || '',
      authors: Array.isArray(meta.authors) ? meta.authors : [],
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      languages: Array.isArray(meta.languages) ? meta.languages : [],
      url: meta.url,
      dateAdded: meta.dateAdded,
      level: meta.level || '',
      category: meta.category || '',
      section: classify(meta),
    })
  }

  resources.sort((a, b) => (new Date(b.dateAdded || 0).getTime()) - (new Date(a.dateAdded || 0).getTime()))
  return { resources, profiles }
}

export default async function EthereumPage() {
  const [blogContent, content] = await Promise.all([getBlogHtml(), getEthereumContent()])
  const { resources, profiles } = content

  const guidesDocs    = resources.filter(r => r.section === 'guides')
  const codeTemplates = resources.filter(r => r.section === 'code')
  const courses       = resources.filter(r => r.section === 'courses')

  const Card = ({ r }: { r: (ResourceMeta & { key: string }) }) => (
    <a
      key={r.key}
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-white/10 bg-[#1a1a1a] p-5 hover:border-white/30 hover:bg-[#232323] transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors">
          {r.title}
        </h3>
        <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors shrink-0" />
      </div>
      {r.description && <p className="text-sm text-white/80 mb-4">{r.description}</p>}
      <div className="flex flex-wrap gap-2 text-xs">
        {r.level && <span className="inline-block bg-[#0b0b0b] border border-white/20 text-white/70 px-2 py-0.5 rounded">{r.level}</span>}
        {r.category && <span className="inline-block bg-[#0b0b0b] border border-white/20 text-white/70 px-2 py-0.5 rounded">{r.category}</span>}
        {r.languages && r.languages.length > 0 && (
          <span className="inline-block bg-[#0b0b0b] border border-white/20 text-white/70 px-2 py-0.5 rounded">
            {r.languages.join(', ')}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-white/50">
        <span className="truncate">{r.authors && r.authors.length > 0 ? r.authors.join(', ') : ''}</span>
        <span>{formatDate(r.dateAdded)}</span>
      </div>
    </a>
  )

  const Section = ({ title, items }: { title: string; items: (ResourceMeta & { key: string })[] }) =>
    items.length ? (
      <section className="mb-12">
        <h2 className="text-lg md:text-xl font-display font-semibold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r) => <Card key={r.key} r={r} />)}
        </div>
      </section>
    ) : null

  return (
    <div className="min-h-screen bg-black">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0b0b0b]">
          <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
            <Image src="/Ethereum.png" alt="Ethereum" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-xl md:text-2xl font-display font-bold text-white mb-3">Ethereum</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Deep dive into Solidity, smart contract patterns, and EVM-based workflows. Learning to build dApps on
            EVM chains, interact with DeFi protocols, and optimize contracts.
          </p>
        </div>

        {/* Blogpost — foldable */}
        <details className="dropdown group mb-8 rounded-lg border border-white/10 bg-[#1a1a1a]">
          <summary className="flex items-center gap-2 cursor-pointer select-none px-4 md:px-5 py-3 md:py-4 list-none focus:outline-none focus:ring-2 focus:ring-[#73FDEA]/40">
            <ChevronRight className="h-4 w-4 text-white/70 transition-transform duration-200 group-open:rotate-90 shrink-0" />
            <span className="text-sm md:text-base font-semibold text-white">Ethereum Dev: quick start guide</span>
          </summary>
          <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
            <article className="md-content md-compact" dangerouslySetInnerHTML={{ __html: blogContent }} />
          </div>
        </details>

        {/* Auto sections (Ecosystem removed) */}
        <Section title="Guides & Docs" items={guidesDocs} />
        <Section title="Code & Templates" items={codeTemplates} />
        <Section title="Courses" items={courses} />

        {/* Ethereum Twitter (unchanged) */}
        {profiles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg md:text-xl font-display font-semibold text-white mb-4">Ethereum Twitter</h2>
            <EthereumTimelines profiles={profiles} />
          </section>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share Your Knowledge</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great Ethereum resource? Help the community by contributing to this collection.
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
}
