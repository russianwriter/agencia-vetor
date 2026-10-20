import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { TextRoll } from './TextRoll'

const NAV_LINKS = [
  { label: 'Campanhas', href: '#work' },
  { label: 'Agência', href: '#studio' },
  { label: 'Blog', href: '#journal' },
  { label: 'Contato', href: '#connect' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav className="flex items-center justify-between rounded-full bg-white p-[5px]">
          <div className="flex items-center gap-4 pl-1 md:gap-6 lg:gap-8">
            <a
              href="#top"
              aria-label="Página inicial da Vetor Agência"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold tracking-tight text-white sm:h-10 sm:w-10 sm:text-[11px]"
            >
              VT
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-gray-900 transition-colors duration-300 hover:text-gray-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 pr-0.5 md:flex lg:gap-5">
            <a
              href="#connect"
              className="group flex items-center gap-3 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white"
            >
              <TextRoll>Iniciar um projeto</TextRoll>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="text-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
                />
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white md:hidden"
          >
            {open ? 'Fechar' : 'Menu'}
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col justify-end transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60"
        />

        <div
          className={`relative z-10 mx-3 mb-3 rounded-2xl bg-white px-5 pb-5 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-6 ${
            open ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="text-[28px] font-medium leading-[32px] text-gray-900 sm:text-[32px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#connect"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:text-[14px]"
          >
            <TextRoll>Iniciar um projeto</TextRoll>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
              <ArrowRight
                size={14}
                strokeWidth={1.75}
                className="text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
              />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
