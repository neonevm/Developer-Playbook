'use client'

type TwitterProfile = {
  handle: string
  title?: string
  avatar?: string
  bio?: string
}

export default function SolanaTimelines({ profiles }: { profiles: TwitterProfile[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((p) => {
        const handle = p.handle.replace(/^@/, '')
        const avatar = p.avatar || `https://unavatar.io/twitter/${handle}`

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
                    (e.currentTarget as HTMLImageElement).src = `https://unavatar.io/twitter/${handle}`
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-white font-semibold truncate">@{handle}</div>
                {p.bio ? (
                  <p className="text-white/70 text-sm mt-1 line-clamp-3">{p.bio}</p>
                ) : null}

                <div className="mt-3">
                  <a
                    href={`https://x.com/${handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-xs font-medium hover:bg-gray-200 transition-colors"
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
