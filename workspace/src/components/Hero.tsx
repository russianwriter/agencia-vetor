import { ArrowRight, Sparkles } from 'lucide-react'
import { Navbar } from './Navbar'
import { Reveal } from './Reveal'
import { ShaderBackdrop } from './ShaderBackdrop'
import { TextRoll } from './TextRoll'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-0 flex-col overflow-hidden bg-[#EFEFEF] sm:min-h-screen">
      <ShaderBackdrop />
      <Navbar />

      <div className="hidden flex-1 sm:block" aria-hidden="true" />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 sm:pb-16 sm:pt-0 lg:px-12 lg:pb-20">
        <Reveal delay={100}>
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
            Vetor Agência
          </p>
        </Reveal>

        <Reveal variant="blur" delay={250}>
          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            Campanhas que fazem sua marca
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            ser lembrada, escolhida
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            e comprada.
          </h1>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#connect"
              className="group flex items-center gap-3 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
            >
              <TextRoll>Iniciar um projeto</TextRoll>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
                />
              </span>
            </a>

            <div className="inline-flex items-center gap-2 rounded-[4px] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:gap-2.5 sm:px-4 sm:py-2.5">
              <Sparkles className="h-5 w-5 shrink-0 text-[#F26522] sm:h-6 sm:w-6" strokeWidth={1.75} />
              <span className="text-[13px] font-medium text-gray-900 sm:text-[14px]">
                120+ campanhas no ar
              </span>
              <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
                Desde 2018
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
