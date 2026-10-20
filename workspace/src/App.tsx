import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Article } from './components/Article'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Journal } from './components/Journal'
import { Process } from './components/Process'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { POSTS, PRIVACY, type Post } from './data/posts'

const SITE_TITLE = 'Vetor Agência — Publicidade e Propaganda'

function useHashPost() {
  const [post, setPost] = useState<Post | null>(() => matchPost(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setPost(matchPost(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return post
}

function matchPost(hash: string) {
  if (hash === '#/privacidade') return PRIVACY
  const match = hash.match(/^#\/blog\/([a-z0-9-]+)$/)
  if (!match) return null
  return POSTS.find((item) => item.slug === match[1]) ?? null
}

export default function App() {
  const post = useHashPost()

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Vetor Agência`
      window.scrollTo(0, 0)
      return () => {
        document.title = SITE_TITLE
      }
    }

    document.title = SITE_TITLE
    const id = window.location.hash.replace('#', '')
    if (!id || id.startsWith('/')) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView()
  }, [post])

  if (post) {
    return (
      <main className="min-h-screen bg-white antialiased">
        <ScrollProgress />
        <Article post={post} plain={post.slug === 'privacidade'} />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white antialiased">
      <ScrollProgress />
      <Hero />
      <About />
      <CaseStudies />
      <Services />
      <Process />
      <Testimonials />
      <Journal />
      <Contact />
      <Footer />
    </main>
  )
}
