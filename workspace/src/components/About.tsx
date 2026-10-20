import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'
import { TextRoll } from './TextRoll'

const SEGMENTS = [
  'Varejo',
  'Alimentos e bebidas',
  'Saúde e bem-estar',
  'Educação',
  'Tecnologia',
  'Serviços',
]

const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Estratégia antes da estética',
    description:
      'Todo conceito criativo nasce de um objetivo de negócio e de um público bem definido.',
  },
  {
    number: '02',
    title: 'Criação e mídia no mesmo time',
    description:
      'Quem cria a ideia acompanha a veiculação, o que evita ruídos e acelera os ajustes.',
  },
  {
    number: '03',
    title: 'Resultado medido, não presumido',
    description:
      'Metas e KPIs combinados no briefing, com relatórios claros durante toda a campanha.',
  },
]

function AboutButton() {
  return (
    <a
      href="#servicos"
      className="group inline-flex items-center gap-3 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
    >
      <TextRoll>Ver nossos serviços</TextRoll>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
        <ArrowRight
          size={14}
          strokeWidth={1.75}
          className="text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
        />
      </span>
    </a>
  )
}

export function About() {
  return (
    <section id="studio" className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionBadge number="1" label="Conheça a Vetor" />

        <Reveal variant="blur">
          <h2 className="mb-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 lg:mb-20">
            Ideia, mídia e resultado,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            todos na mesma direção.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left" className="min-w-0">
            <p className="max-w-[520px] text-[16px] font-medium leading-[1.65] text-gray-900 sm:text-[18px]">
              A Vetor une estratégia, criação e mídia em um só time. Cada campanha parte de um objetivo de negócio claro e é medida por ele.
            </p>
            <div className="mt-8">
              <AboutButton />
            </div>
            <div className="mt-10 sm:mt-12">
              <p className="mb-3 text-[13px] text-gray-600">Segmentos que atendemos</p>
              <div className="flex flex-wrap gap-2">
                {SEGMENTS.map((segment) => (
                  <span
                    key={segment}
                    className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium text-gray-900 transition-colors duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white sm:px-4 sm:py-1.5 sm:text-[13px]"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="min-w-0">
            {DIFFERENTIALS.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <div
                  className={`group flex gap-5 border-t border-gray-200 py-6 sm:py-7${
                    index === DIFFERENTIALS.length - 1 ? ' border-b' : ''
                  }`}
                >
                  <span className="w-8 shrink-0 text-[13px] text-gray-600 transition-colors duration-500 group-hover:text-[#F26522]">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-medium tracking-[-0.01em] text-gray-900 sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[440px] text-[14px] leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
