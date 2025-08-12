'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function TwitterLoader() {
  // Re-hydrate embeds after mount / client navigations
  useEffect(() => {
    // Call once after script is available
    const id = setTimeout(() => {
      // @ts-ignore
      if (window.twttr?.widgets?.load) window.twttr.widgets.load()
    }, 0)
    return () => clearTimeout(id)
  }, [])

  return (
    <Script
      id="twitter-widgets"
      src="https://platform.twitter.com/widgets.js"
      strategy="afterInteractive"
    />
  )
}
