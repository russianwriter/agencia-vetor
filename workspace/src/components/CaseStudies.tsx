import { ArrowRight } from 'lucide-react'
import { LazyVideo } from './LazyVideo'
import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'

const NUVIA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4'

const SOLENNE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4'

export function CaseStudies() {
  return (
    <section id="work" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <SectionBadge number="2" label="Campanhas em destaque" borderClassName="border-gray-300" />

          <Reveal variant="blur">
            <h2 className="mb-10 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16">
              Nossas campanhas
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          <Reveal variant="scale" delay={0}>
          <article>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1a1d2e]"
              style={{ aspectRatio: '329 / 246' }}
            >
              <LazyVideo src={NUVIA_VIDEO} className="h-full w-full object-cover" />

              <a
                href="#connect"
                aria-label="Quero uma campanha como a da Apex"
                className="absolute bottom-4 left-4 h-9 w-9 overflow-hidden rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-[156px]"
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[13px] font-medium text-gray-900 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                  Quero algo assim
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="absolute right-[11px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 -rotate-45 text-gray-900 transition-transform duration-300 group-hover:rotate-0"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </a>
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
              Campanha de lançamento construída em torno de um foguete 3D: um símbolo de decolagem para uma marca de tecnologia que precisava sair do pitch e entrar na conversa. O conceito virou filme, redes e mídia integrada no mesmo movimento, com uma narrativa que o público quis repetir. Em 30 dias, o produto deixou de ser só um release e passou a ser lembrado como o próximo salto da categoria.
            </p>
            <h3 className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">Apex</h3>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900">
                Tecnologia
              </span>
              <span className="text-[13px] text-gray-600">Conceito, filme 3D e mídia integrada</span>
            </div>
            <p className="mt-2 text-[13px] text-gray-900 sm:text-[14px]">
              Resultado: <strong className="font-semibold">3 mi de pessoas alcançadas em 30 dias</strong>
            </p>
          </article>
          </Reveal>

          <Reveal variant="scale" delay={80}>
          <article>
            <div
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-[#6b6b6b]"
            >
              <LazyVideo src={SOLENNE_VIDEO} className="h-full w-full object-cover" />

              <a
                href="#connect"
                aria-label="Quero uma campanha como a da Helix"
                className="absolute bottom-4 left-4 h-9 w-9 overflow-hidden rounded-full bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-[156px]"
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[13px] font-medium text-white opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                  Quero algo assim
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="absolute right-[11px] top-1/2 -translate-y-1/2 -rotate-45 text-white transition-transform duration-300 group-hover:rotate-0"
                />
              </a>
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
              Soluções de segurança de dados que funcionam no seu ecossistema. Uma campanha 360 que traduziu proteção digital em confiança visível e reaproximou a marca do mercado.
            </p>
            <h3 className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">Helix</h3>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-900">
                Tecnologia
              </span>
              <span className="text-[13px] text-gray-600">Posicionamento e campanha 360</span>
            </div>
            <p className="mt-2 text-[13px] text-gray-900 sm:text-[14px]">
              Resultado: <strong className="font-semibold">+27% de lembrança de marca</strong>
            </p>
          </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
