import { FormEvent, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionBadge } from './SectionBadge'
import { ShaderBackdrop } from './ShaderBackdrop'
import { TextRoll } from './TextRoll'

const WHATSAPP = '5511900000000' // trocar pelo número real
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const SERVICES = [
  'Ideação e estratégia',
  'Branding e identidade',
  'Criação e produção',
  'Mídia e performance',
  'Social media e influência',
  'Dados e relatórios',
  'Ainda não sei',
]

const BUDGETS = [
  'Até R$ 5 mil',
  'R$ 5 a 15 mil',
  'R$ 15 a 50 mil',
  'Acima de R$ 50 mil',
  'Prefiro conversar',
]

const FIELD =
  'w-full rounded-full border border-gray-200 px-5 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-gray-900'
const SELECT = `${FIELD} appearance-none bg-white`

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    const payload = { name, email, company, service, budget, message }

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        setStatus(response.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = encodeURIComponent(`Novo contato — ${name}`)
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\nEmpresa: ${company}\nServiço de interesse: ${service}\nInvestimento mensal estimado: ${budget}\nMensagem: ${message}`,
    )
    window.location.href = `mailto:ola@vetoragencia.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="connect" className="relative overflow-hidden bg-[#EFEFEF] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <ShaderBackdrop />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="blur">
            <SectionBadge number="7" label="Vamos conversar" borderClassName="border-gray-300" />

            <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
              Vamos criar algo
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              que ninguém
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              vai esquecer?
            </h2>

            <p className="mt-6 text-[15px] font-medium text-gray-900 sm:text-[17px]">
              Conte sobre a sua marca e o seu desafio. Respondemos em até 24 horas úteis.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e quero falar sobre um projeto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white sm:text-[14px]"
            >
              <TextRoll>Falar no WhatsApp</TextRoll>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <MessageCircle
                  size={14}
                  className="text-gray-900 transition-transform duration-500 group-hover:-rotate-12"
                />
              </span>
            </a>

            <div className="mt-8 flex flex-col gap-1 text-[14px] text-gray-900">
              <a
                href="mailto:ola@vetoragencia.com"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                ola@vetoragencia.com
              </a>
              <a href="tel:+551140000000" className="transition-colors duration-300 hover:text-gray-500">
                +55 11 4000-0000
              </a>
              <span className="transition-colors duration-300 hover:text-gray-500">São Paulo, SP — Brasil</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              {status === 'sent' ? (
                <p className="text-[18px] font-medium text-gray-900">Mensagem enviada. Falamos em breve.</p>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-medium text-gray-600">Nome</span>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className={FIELD}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-medium text-gray-600">E-mail</span>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className={FIELD}
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-medium text-gray-600">Empresa</span>
                      <input
                        type="text"
                        name="company"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        required
                        className={FIELD}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-medium text-gray-600">
                        Serviço de interesse
                      </span>
                      <select
                        name="service"
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                        required
                        className={SELECT}
                      >
                        <option value="" disabled>
                          Selecione
                        </option>
                        {SERVICES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-medium text-gray-600">
                      Investimento mensal estimado
                    </span>
                    <select
                      name="budget"
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                      required
                      className={SELECT}
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      {BUDGETS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-medium text-gray-600">Mensagem</span>
                    <textarea
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Conte sobre o desafio da sua marca"
                      className="w-full rounded-2xl border border-gray-200 px-5 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-gray-900"
                    />
                  </label>

                  <label className="flex items-start gap-2 text-[12px] text-gray-600">
                    <input type="checkbox" name="privacy" required className="mt-0.5 shrink-0" />
                    <span>
                      Concordo com o tratamento dos meus dados conforme a{' '}
                      <a href="#/privacidade" className="underline">
                        Política de Privacidade
                      </a>
                      .
                    </span>
                  </label>

                  {status === 'error' && (
                    <p className="text-[12px] text-red-600">
                      Não foi possível enviar. Fale pelo WhatsApp ou por e-mail.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex items-center gap-3 self-start rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] disabled:opacity-60 sm:pl-6 sm:text-[14px]"
                  >
                    <TextRoll>{status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}</TextRoll>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                      <ArrowRight
                        size={14}
                        strokeWidth={1.75}
                        className="text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
                      />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
