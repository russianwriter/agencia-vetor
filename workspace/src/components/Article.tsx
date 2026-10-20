import { ArrowRight } from 'lucide-react'
import { POSTS, type Post } from '../data/posts'
import { Footer } from './Footer'
import { PostCover } from './PostCover'
import { Reveal } from './Reveal'
import { TextRoll } from './TextRoll'

type ArticleProps = {
  post: Post
  plain?: boolean
}

export function Article({ post, plain = false }: ArticleProps) {
  const related = POSTS.filter((item) => item.slug !== post.slug)

  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <div className="flex items-center justify-between rounded-full bg-gray-900 p-[5px]">
          <a
            href="/"
            aria-label="Página inicial da Vetor Agência"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold tracking-tight text-gray-900 sm:h-10 sm:w-10 sm:text-[11px]"
          >
            VT
          </a>
          <a
            href="/#journal"
            className="pr-4 text-[13px] text-white transition-colors duration-300 hover:text-white/60"
          >
            ← Voltar ao site
          </a>
        </div>
      </div>

      <header className="mx-auto max-w-[860px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium text-gray-900 sm:text-[13px]">
            {post.category}
          </span>
          <span className="text-[13px] text-gray-600">
            {post.date} · {post.readTime} de leitura
          </span>
        </div>
        <h1 className="mt-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
          {post.title}
        </h1>
        <p className="mt-4 text-[16px] text-gray-600 sm:text-[18px]">{post.excerpt}</p>
      </header>

      {!plain && (
        <div className="mx-auto mt-10 max-w-[1100px] px-5 sm:px-8 lg:px-12">
          {post.cover ? (
            <img
              src={post.cover.startsWith('/') || post.cover.startsWith('http') ? post.cover : `/${post.cover}`}
              alt={post.title}
              className="aspect-[16/8] w-full rounded-2xl object-cover"
            />
          ) : (
            <PostCover slug={post.slug} className="aspect-[16/8] rounded-2xl" />
          )}
        </div>
      )}

      <article className="mx-auto max-w-[720px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {post.sections.map((section, index) => (
          <Reveal key={section.heading} delay={index * 80}>
            <section>
              <h2
                className={`text-[22px] font-medium tracking-[-0.01em] text-gray-900 sm:text-[26px] ${
                  index === 0 ? '' : 'mt-10'
                }`}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[16px] leading-[1.7] text-gray-700 sm:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>
        ))}
      </article>

      {!plain && (
        <div className="mx-auto max-w-[720px] px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl bg-[#F5F5F5] p-6 sm:p-8">
            <p className="text-[20px] font-medium text-gray-900">Quer aplicar isso na sua marca?</p>
            <a
              href="/#connect"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
            >
              <TextRoll>Fale com a Vetor</TextRoll>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
                />
              </span>
            </a>
          </div>

          <div className="mt-12 pb-16 sm:pb-20">
            <h3 className="text-[14px] font-semibold text-gray-900">Continue lendo</h3>
            <div className="mt-4 flex flex-col gap-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`#/blog/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-medium text-gray-900 transition-colors duration-300 hover:text-gray-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
