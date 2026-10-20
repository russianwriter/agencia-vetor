import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'

type Step = {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Imersão na marca, no público e nos concorrentes para definir metas e KPIs.',
  },
  {
    number: '02',
    title: 'Ideação',
    description: 'Brainstorm, conceito criativo e roteiro de campanha aprovados com você.',
  },
  {
    number: '03',
    title: 'Produção',
    description: 'Criação das peças, filmagens e adaptações para cada canal e formato.',
  },
  {
    number: '04',
    title: 'Veiculação e otimização',
    description: 'Mídia no ar, monitoramento em tempo real e otimização contínua.',
  },
]

export function Process() {
  return (
    <section
      id="processo"
      className="bg-gray-900 pb-16 pt-16 text-white sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionBadge dark number="4" label="Como trabalhamos" />

        <Reveal variant="blur">
          <h2 className="mb-12 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mb-16 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-20">
            Um processo claro,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            do briefing à campanha no ar.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="border-t border-white/15 pt-6">
                <span className="text-[13px] text-white/50">{step.number}</span>
                <h3 className="mt-10 text-[20px] font-medium sm:mt-14">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
