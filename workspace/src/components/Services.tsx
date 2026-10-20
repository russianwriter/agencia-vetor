import { BarChart3, Clapperboard, Lightbulb, Megaphone, Palette, Share2, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: Lightbulb,
    title: 'Ideação e estratégia',
    description:
      'Insights, conceito criativo e plano de comunicação para posicionar sua marca.',
  },
  {
    icon: Palette,
    title: 'Branding e identidade',
    description:
      'Naming, identidade visual e posicionamento para marcas que querem ser reconhecidas.',
  },
  {
    icon: Clapperboard,
    title: 'Criação e produção',
    description: 'Campanhas, filmes, fotografia e peças para todos os canais, do digital ao offline.',
  },
  {
    icon: Megaphone,
    title: 'Mídia e performance',
    description: 'Planejamento de mídia paga e orgânica com foco em alcance, leads e vendas.',
  },
  {
    icon: Share2,
    title: 'Social media e influência',
    description:
      'Gestão de redes, conteúdo e parcerias com criadores para aproximar a marca do público.',
  },
  {
    icon: BarChart3,
    title: 'Dados e relatórios',
    description: 'Dashboards e relatórios que transformam os resultados da campanha em decisões.',
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionBadge number="3" label="O que fazemos" />

        <Reveal variant="blur">
          <h2 className="mb-10 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-14 lg:mb-16">
            Da ideia à veiculação,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            tudo sob o mesmo teto.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal key={service.title} delay={index * 80}>
                <div className="group flex min-h-[280px] flex-col justify-between rounded-2xl bg-[#F5F5F5] p-6 transition-colors duration-500 hover:bg-gray-900 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <Icon size={18} strokeWidth={1.75} className="text-gray-900" />
                    </span>
                    <span className="text-[13px] text-gray-600 transition-colors duration-500 group-hover:text-white/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium text-gray-900 transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
