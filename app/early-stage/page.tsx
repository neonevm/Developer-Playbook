// app/early-stage/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react'

export const runtime = 'nodejs'
export const dynamic = 'force-static' // set to 'force-dynamic' in dev if you want hot reloads of new files

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
}

// ---------- helpers ----------
const toLower = (s: unknown) => String(s || '').toLowerCase().trim()

const isEarlyStageTag = (tags?: unknown) => {
  if (!Array.isArray(tags)) return false
  const t = tags.map(toLower)
  return t.includes('early') || t.includes('early stage') || t.includes('early-stage')
}

const formatDate = (d?: Date | string) => {
  if (!d) return ''
  const dt = typeof d === 'string' ? new Date(d) : d
  if (isNaN(dt.getTime())) return ''
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
}

// Build a normalized haystack for phrase matching (prevents "video" matching "ide")
function haystack(meta: ResourceMeta) {
  const parts = [
    meta.title,
    meta.category,
    ...(meta.tags || []),
    ...(meta.languages || []),
    meta.level,
    meta.description,
  ]
    .map(toLower)
    .join(' ')
  return ` ${parts.replace(/[^a-z0-9+]+/g, ' ').replace(/\s+/g, ' ').trim()} `
}
const containsPhrase = (hay: string, phrase: string) => hay.includes(` ${phrase.toLowerCase()} `)
const containsAny = (hay: string, items: string[]) => items.some((p) => containsPhrase(hay, p))

// New classifier → 'tooling' | 'courses' | 'guides' | 'code' | 'other'
function classify(meta: ResourceMeta): 'tooling' | 'courses' | 'guides' | 'code' | 'other' {
  const hay = haystack(meta)

  const toolingSignals = [
    'docs','documentation','reference','api reference','api docs',
    'handbook','manual','spec','specification','readme','guide (cli)',
    'install','installation','setup','getting started','quickstart',
    'cli','command line','tool','tools','sdk','framework',
    'hardhat','foundry','anvil','remix','metamask','phantom',
    'solana cli','anchor','etherscan','solscan','node.js','npm','nvm',
  ]
  const courseSignals = [
    'course','courses','bootcamp','curriculum','syllabus','academy',
    'track','learning path','program','cohort','mooc','udemy','coursera','edx',
    'university','certificate'
  ]
  const codeSignals = [
    'example','examples','sample','samples','snippet','snippets',
    'template','templates','boilerplate','boilerplates','starter','starter kit',
    'scaffold','scaffolding','reference implementation','repo','github repository',
    'playground'
  ]
  const guideSignals = [
    'guide','how to','how-to','tutorial','walkthrough','step by step','step-by-step',
    'deep dive','best practices','explained','overview','article','blog','cookbook',
    'patterns','tips','gotchas'
  ]

  const isTooling = containsAny(hay, toolingSignals)
  const isCourse  = containsAny(hay, courseSignals)
  const isCode    = containsAny(hay, codeSignals)
  const isGuide   = containsAny(hay, guideSignals)

  if (isCourse)  return 'courses'
  if (isCode)    return 'code'
  if (isTooling) return 'tooling'
  if (isGuide)   return 'guides'
  return 'other'
}

// Blog MD -> HTML
async function getBlogHtml() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'early-stage', 'blogpost.md')
    const fileContent = await fs.promises.readFile(filePath, 'utf-8')
    const { content } = matter(fileContent)
    return marked.parse(content)
  } catch {
    return marked.parse('# Early Stage: Learn Blockchain\n\n_Add **blogpost.md** to show this section._')
  }
}

// Read all .md (except blogpost.md) with "Early"/"Early Stage" tag
async function getEarlyResources(): Promise<(ResourceMeta & { key: string; section: ReturnType<typeof classify> })[]> {
  const dir = path.join(process.cwd(), 'app', 'early-stage')
  const files = await fs.promises.readdir(dir)
  const mdFiles = files.filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'blogpost.md')

  const list: (ResourceMeta & { key: string; section: ReturnType<typeof classify> })[] = []
  for (const file of mdFiles) {
    const raw = await fs.promises.readFile(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    const meta = data as ResourceMeta
    if (!isEarlyStageTag(meta.tags)) continue
    if (!meta.url) continue
    list.push({
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

  list.sort((a, b) => (new Date(b.dateAdded || 0).getTime()) - (new Date(a.dateAdded || 0).getTime()))
  return list
}

export default async function EarlyStagePage() {
  const [blogContent, resources] = await Promise.all([getBlogHtml(), getEarlyResources()])

  const toolingDocs = resources.filter(r => r.section === 'tooling')
  const courses     = resources.filter(r => r.section === 'courses')
  const guides      = resources.filter(r => r.section === 'guides')
  const codeSamples = resources.filter(r => r.section === 'code')
  const other       = resources.filter(r => r.section === 'other')

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

  const listUrl = 'https://twitter.com/i/lists/1959973436228288972'

  return (
    <div className="min-h-screen bg-black">
      {/* Contained Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0b0b0b]">
          <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
            <Image src="/Early.png" alt="Early Stage" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Main Content */}
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
          <h1 className="text-xl md:text-2xl font-display font-bold text-white mb-3">Early Stage</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Learn the ecosystem fast: official docs for key tools, structured courses, practical guides,
            and copy-pasteable code samples & starters.
          </p>
        </div>

        {/* Blogpost — foldable */}
        <details className="dropdown group mb-8 rounded-lg border border-white/10 bg-[#1a1a1a]">
          <summary className="flex items-center gap-2 cursor-pointer select-none px-4 md:px-5 py-3 md:py-4 list-none focus:outline-none focus:ring-2 focus:ring-[#73FDEA]/40">
            <ChevronRight className="h-4 w-4 text-white/70 transition-transform duration-200 group-open:rotate-90 shrink-0" />
            <span className="text-sm md:text-base font-semibold text-white">
              You know how to code: now learn blockchain
            </span>
          </summary>
          <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
            <article className="md-content md-compact" dangerouslySetInnerHTML={{ __html: blogContent }} />
          </div>
        </details>

        {/* Auto sections */}
        <Section title="Tooling Docs" items={toolingDocs} />
        <Section title="Courses" items={courses} />
        <Section title="Guides" items={guides} />
        <Section title="Code Samples" items={codeSamples} />
        {other.length ? <Section title="Other" items={other} /> : null}

        <section className="mb-12">
          <h2 className="text-lg md:text-xl font-display font-semibold text-white mb-4">
            Selected voices to boost your dev learning on X
          </h2>

          <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-4">
            <div className="mb-3 text-sm text-white/70">
              Curated builders & educators worth following{' '}
              <a
                className="text-[#73FDEA] hover:text-[#FF00AA]"
                href="https://twitter.com/i/lists/1959973436228288972"
                target="_blank"
                rel="noopener noreferrer"
              >
                (open on X)
              </a>.
            </div>

            {/* Programmatic timeline container */}
            <div id="x-list" />

            {/* Hidden fallback hint */}
            <div id="x-fallback" className="hidden mt-3 text-xs text-white/60">
              If you see “Nothing to see here”, enable third-party cookies or disable tracker blockers
              for this site, then refresh. You can also open the list directly on X.
            </div>
          </div>

          {/* Load widgets.js */}
          <Script src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />

          {/* Create the timeline and reveal fallback if the iframe never mounts */}
          <Script id="x-init" strategy="afterInteractive">
            {`
              (function initList(){
                function mount() {
                  var el = document.getElementById('x-list');
                  if (!window.twttr || !window.twttr.widgets || !el) return setTimeout(mount, 80);
                  if (el.dataset.mounted) return;
                  el.dataset.mounted = '1';
                  window.twttr.widgets.createTimeline(
                    { sourceType: 'list', id: '1959973436228288972' },
                    el,
                    { theme: 'dark', height: 620, dnt: true }
                  );
                  // If no iframe appears, show a helpful hint
                  setTimeout(function(){
                    if (!el.querySelector('iframe')) {
                      var fb = document.getElementById('x-fallback');
                      if (fb) fb.classList.remove('hidden');
                    }
                  }, 3000);
                }
                mount();
              })();
            `}
          </Script>
        </section>


        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share Your Knowledge</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great resource? Help the community by contributing to this collection.
          </p>
          <a
            href="https://github.com/neonlabsorg/Developer-Playbook"
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
