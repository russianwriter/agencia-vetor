import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'

const STATS = [
  { value: '120+', label: 'campanhas no ar' },
  { value: '35 mi', label: 'pessoas impactadas' },
  { value: '18', label: 'prêmios e menções' },
  { value: '8 anos', label: 'de agência' },
]

const TESTIMONIALS = [
  {
    quote:
      'A Vetor entendeu a nossa marca antes de escrever a primeira linha. A campanha dobrou o fluxo nas lojas em dois meses.',
    name: 'Marina Duarte',
    role: 'CMO · Aurora Café',
    initials: 'MD',
  },
  {
    quote:
      'Processo transparente, prazos cumpridos e uma criatividade que nenhuma outra agência nos entregou.',
    name: 'Rafael Nogueira',
    role: 'CEO · Solenne',
    initials: 'RN',
  },
  {
    quote:
      'Em seis semanas lançamos uma campanha 360 que reposicionou o produto. O time conduz tudo com muita clareza.',
    name: 'Camila Torres',
    role: 'Head de Marketing · Orbital',
    initials: 'CT',
  },
  {
    quote:
      'Raramente vi uma agência unir criatividade e dados tão bem. Cada real de mídia foi acompanhado e otimizado.',
    name: 'Bruno Katsuragi',
    role: 'CMO · Fluxa',
    initials: 'BK',
  },
  {
    quote:
      'Nos ajudaram a repensar o posicionamento inteiro. As vendas cresceram 60% no semestre.',
    name: 'Helena Prado',
    role: 'Fundadora · Casa Alba',
    initials: 'HP',
  },
  {
    quote: 'Comunicação direta, sem enrolação, e um resultado final acima do que imaginávamos.',
    name: 'Diego Menezes',
    role: 'Diretor Comercial · Vertix',
    initials: 'DM',
  },
]

type Testimonial = (typeof TESTIMONIALS)[number]

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex min-h-[260px] w-[300px] shrink-0 cursor-default flex-col justify-between rounded-2xl bg-white p-6 sm:w-[400px] sm:p-8">
      <p className="text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-gray-900 sm:text-[22px]">
        {item.quote}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[12px] font-semibold text-white">
          {item.initials}
        </span>
        <div>
          <p className="text-[14px] font-semibold text-gray-900">{item.name}</p>
          <p className="text-[13px] text-gray-600">{item.role}</p>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <SectionBadge
            number="5"
            label="Resultados e depoimentos"
            borderClassName="border-gray-300"
          />
        </div>

        <div className="mb-12 grid grid-cols-2 gap-6 px-5 sm:mb-16 sm:px-8 lg:grid-cols-4 lg:px-12">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div>
                <p className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-[13px] text-gray-600 sm:text-[14px]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="marquee marquee-mask overflow-hidden">
          <div className="marquee-track gap-5 pr-5 sm:gap-6 sm:pr-6">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.initials} item={item} />
            ))}
            <div aria-hidden="true" className="contents">
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={`${item.initials}-dup`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
