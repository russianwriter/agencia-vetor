type PostCoverProps = {
  slug: string
  className?: string
}

function IdeaCover() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#ffb07a]">
      <div className="cover-idea-orbit absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
        <span className="absolute bottom-[18%] right-0 h-2 w-2 rounded-full bg-white/80" />
        <span className="absolute bottom-0 left-[22%] h-1.5 w-1.5 rounded-full bg-white/70" />
      </div>
      <div className="cover-idea-orbit-slow absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15">
        <span className="absolute right-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/90" />
      </div>
      <div className="cover-idea-core absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_32px_rgba(255,255,255,0.45)] sm:h-20 sm:w-20" />
    </div>
  )
}

function MediaCover() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600">
      <div className="absolute inset-y-0 left-0 flex w-1/2 items-end justify-center gap-1.5 px-6 pb-8 sm:gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <span
            key={index}
            className="cover-media-bar w-2 origin-bottom rounded-full bg-[#F26522] sm:w-2.5"
            style={{
              height: `${36 + index * 10}%`,
              animationDelay: `${index * 0.18}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center">
        <span className="cover-media-organic absolute h-28 w-28 rounded-full border border-white/20 sm:h-32 sm:w-32" />
        <span className="cover-media-organic absolute h-16 w-16 rounded-full bg-white/15 sm:h-20 sm:w-20" style={{ animationDelay: '1.2s' }} />
        <span className="h-3 w-3 rounded-full bg-white" />
      </div>
      <span className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-white/20" />
    </div>
  )
}

function StoryCover() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#EFEFEF] to-gray-400">
      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path
          className="cover-story-path"
          d="M28 168 C 86 168, 92 72, 160 72 S 236 168, 292 88"
          fill="none"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="cover-story-node absolute left-[8%] top-[68%] h-3 w-3 rounded-full bg-gray-900" />
      <span className="cover-story-node absolute left-[48%] top-[28%] h-3 w-3 rounded-full bg-[#F26522]" style={{ animationDelay: '0.6s' }} />
      <span className="cover-story-node absolute right-[8%] top-[34%] h-3 w-3 rounded-full bg-gray-900" style={{ animationDelay: '1.2s' }} />
    </div>
  )
}

export function PostCover({ slug, className = '' }: PostCoverProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      {slug === 'ideia-criativa-que-resiste-ao-tempo' && <IdeaCover />}
      {slug === 'midia-paga-ou-organica' && <MediaCover />}
      {slug === 'storytelling-de-marca' && <StoryCover />}
    </div>
  )
}
