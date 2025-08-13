'use client'

type Profile = {
  handle: string
  title?: string
  avatar?: string
  bio?: string
  displayName?: string
}

function displayNameOf(p: Profile) {
  if (p.displayName && p.displayName.trim()) return p.displayName.trim()
  if (p.title && !p.title.startsWith('@')) return p.title.trim()
  return p.handle.replace(/^@/, '')
}

export default function EthereumTimelines({ profiles }: { profiles: Profile[] }) {
  if (!profiles || profiles.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((p) => {
        const handle = p.handle.replace(/^@/, '') // normalize
        const name = displayNameOf(p)
        const sameAsHandle = name.replace(/^@/, '').toLowerCase() === handle.toLowerCase()

        // fallback avatar like Solana component
        const avatar =
          (p.avatar && p.avatar.trim()) || `https://unavatar.io/twitter/${handle}`

        return (
          <div
            key={handle}
            className="rounded-lg border border-white/10 bg-[#0f0f10] p-4 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-[#1a1a1a] border border-white/10 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar}
                  alt={`@${handle} avatar`}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // final fallback to unavatar
                    (e.currentTarget as HTMLImageElement).src = `https://unavatar.io/twitter/${handle}`
                  }}
                />
              </div>

              <div className="min-w-0">
                {sameAsHandle ? (
                  <span className="text-white font-semibold truncate">@{handle}</span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold truncate">{name}</span>
                    <span className="text-white/50 truncate">@{handle}</span>
                  </div>
                )}

                {p.bio && (
                  <p className="text-white/70 text-sm mt-1 line-clamp-3">{p.bio}</p>
                )}

                <div className="mt-3">
                  <a
                    href={`https://x.com/${handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded bg-white text-black hover:bg-gray-200 font-medium transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
