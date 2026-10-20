import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { POSTS, type Post } from '../data/posts'
import { PostCover } from './PostCover'
import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'

function resolveCover(cover?: string) {
  if (!cover) return undefined
  if (cover.startsWith('/') || cover.startsWith('http') || cover.startsWith('data:')) return cover
  return `/${cover}`
}

function CardCover({ post }: { post: Post }) {
  const [failed, setFailed] = useState(false)
  const src = resolveCover(post.cover)

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      {src && !failed ? (
        <img
          src={src}
          alt={post.title}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        />
      ) : (
        <PostCover
          slug={post.slug}
          className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        />
      )}
      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-gray-900">
        {post.category}
      </span>
    </div>
  )
}

export function Journal() {
  return (
    <section id="journal" className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <SectionBadge number="6" label="Blog" />

          <Reveal variant="blur">
            <h2 className="mb-10 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16">
              Ideias e bastidores
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-3 lg:gap-7 lg:px-12">
          {POSTS.map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <a
                href={`#/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <CardCover post={post} />
                <p className="mt-4 text-[13px] text-gray-600">{post.date}</p>
                <h3 className="mt-1 text-[17px] font-medium leading-snug text-gray-900 sm:text-[18px]">
                  {post.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-gray-900">
                  Ler artigo
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
