'use client'

import { useEffect, useRef } from 'react'

type TwitterProfile = { handle: string; title?: string; avatar?: string; bio?: string }

function loadTwitter(): Promise<any> {
  return new Promise((resolve) => {
    const w = window as any
    const ready = (tw: any) => tw?.widgets && resolve(tw)
    if (w.twttr?.ready) { w.twttr.ready(ready); return }

    const src = 'https://platform.twitter.com/widgets.js'
    let s = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (!s) {
      s = document.createElement('script')
      s.src = src
      s.async = true
      document.body.appendChild(s)
    }
    s.addEventListener('load', () => {
      const tw = (window as any).twttr
      if (tw?.ready) tw.ready(ready)
      else resolve((window as any).twttr)
    })
  })
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!))
}

// Compact Notion-like fallback card (avatar + handle + bio + button)
function renderFallback(node: HTMLElement, p: TwitterProfile) {
  const handle = p.handle
  const avatar = p.avatar || `https://unavatar.io/twitter/${handle}`
  const bio = p.bio ? escapeHtml(p.bio) : ''

  node.innerHTML = `
    <div style="
      display:flex;align-items:center;gap:12px;
      padding:14px;min-height:120px;background:#15202b;color:#e6edf3;
      font:14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    ">
      <div style="position:relative;width:48px;height:48px;flex:0 0 48px;">
        <img
          src="${avatar}"
          alt="@${handle} avatar"
          width="48" height="48"
          style="border-radius:9999px;display:block;background:#0f1419;object-fit:cover;"
          onerror="this.src='https://unavatar.io/twitter/${handle}';this.onerror=null"
        />
      </div>

      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          @${handle}
        </div>
        ${bio ? `
          <div style="
            opacity:.9;font-size:13px;margin-top:2px;
            display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
          ">${bio}</div>` : ''
        }
      </div>

      <a
        href="https://twitter.com/${handle}" target="_blank" rel="noopener noreferrer"
        style="
          display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:9999px;
          background:#1DA1F2;color:#fff;text-decoration:none;font-weight:600;white-space:nowrap;
        "
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 2L6 22M2 6l20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Open on X
      </a>
    </div>
  `
}

export default function SolanaTimelines({ profiles }: { profiles: TwitterProfile[] }) {
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    let mounted = true

    const mount = async () => {
      const twttr = await loadTwitter()
      if (!mounted) return

      refs.current.forEach((node, i) => {
        const p = profiles[i]
        if (!node || !p) return
        node.innerHTML = '' // reset

        let finished = false
        const successCheck = () => {
          if (node.querySelector('iframe')) { finished = true; return true }
          return false
        }

        // Fallback after 4s if embed blocked
        const fallbackTimer = window.setTimeout(() => {
          if (!finished) renderFallback(node, p)
        }, 4000)

        const options = {
          theme: 'dark' as const,
          tweetLimit: 1,       // compact preview
          chrome: 'nofooter',  // keep header; remove footer for tidy look
          height: 360,
          width: '100%',
          dnt: true,
        }

        twttr.widgets
          .createTimeline({ sourceType: 'profile', screenName: p.handle }, node, options)
          .then(() => {
            setTimeout(() => {
              if (successCheck()) window.clearTimeout(fallbackTimer)
              else {
                // Retry once
                twttr.widgets
                  .createTimeline({ sourceType: 'profile', screenName: p.handle }, node, options)
                  .then(() => setTimeout(successCheck, 100))
                  .catch(() => { /* fallback timer takes care */ })
              }
            }, 100)
          })
          .catch(() => {
            window.clearTimeout(fallbackTimer)
            renderFallback(node, p)
          })
      })
    }

    mount()
    return () => { mounted = false }
  }, [profiles])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((p, idx) => (
        <div key={p.handle} className="rounded-xl border border-white/10 bg-[#15202b] overflow-hidden">
          <div
            ref={(el) => { if (el) refs.current[idx] = el }}
            className="min-h-[120px] w-full"  // compact; expands if real timeline loads
            aria-label={`Timeline for @${p.handle}`}
          />
        </div>
      ))}
    </div>
  )
}
