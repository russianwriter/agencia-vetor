const CIDEV_URL = 'https://www.instagram.com/tech.cidev/'

const NAV_LINKS = [
  { label: 'Campanhas', href: '/#work' },
  { label: 'Agência', href: '/#studio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Blog', href: '/#journal' },
  { label: 'Contato', href: '/#connect' },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex items-start gap-4">
            <a
              href="/#top"
              aria-label="Página inicial da Vetor Agência"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold tracking-tight text-gray-900 sm:h-10 sm:w-10 sm:text-[11px]"
            >
              VT
            </a>
            <p className="max-w-[260px] text-[14px] text-white/60">
              Agência de publicidade e propaganda guiada por estratégia.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[14px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-white/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 text-[14px]">
            {SOCIAL.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-1.5 text-[12px] text-white/50">
              <p>© 2026 Vetor Agência · Projeto conceitual</p>
              <p className="text-[11px] text-white/40">Vetor Agência Ltda. · CNPJ 00.000.000/0001-00 · São Paulo, SP</p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-5 text-[12px] text-white/60 sm:text-[13px]">
                <a href="#/privacidade" className="transition-colors hover:text-white/90">Política de privacidade</a>
                <a href="/#top" className="transition-colors hover:text-white/90">Voltar ao topo ↑</a>
              </div>

              {CIDEV_URL ? (
                <a
                  href={CIDEV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 items-center gap-3 overflow-hidden rounded-full bg-black px-4 py-2 ring-1 ring-white/40 transition-transform duration-300 hover:scale-105 hover:ring-white/70"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-colors group-hover:text-white">
                    Desenvolvido por
                  </span>
                  <img src="/cidev.png" alt="Cidev" className="relative -top-0.5 h-14 w-auto" />
                </a>
              ) : (
                <span className="inline-flex h-10 items-center gap-3 overflow-hidden rounded-full bg-black px-4 py-2 ring-1 ring-white/40">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Desenvolvido por
                  </span>
                  <img src="/cidev.png" alt="Cidev" className="relative -top-0.5 h-14 w-auto" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
