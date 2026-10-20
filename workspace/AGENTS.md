# Vetor Agência — site one-page (PT-BR)
Stack: React 18 + TS + Vite + Tailwind 3.4 (config padrão), shaders, lucide-react. Sem novas dependências.
Estrutura: src/App.tsx (ordem das seções) · src/components/{Navbar,Hero,About,CaseStudies,TextRoll,SectionBadge,ShaderBackdrop,PartnerIcon}.tsx · src/hooks/
Tokens: laranja #F26522 (hover #e05a1a); fundos #EFEFEF, #F5F5F5, branco, gray-900; texto secundário gray-600; container "mx-auto w-full max-w-[1440px]"; padding "px-5 sm:px-8 lg:px-12"; seção "pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"; cards rounded-2xl; botões rounded-full; transição "duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]".
Tipografia: fonte do sistema. h2 grande: "text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em]". h2 editorial: "text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em]". Corpo 13–17px.
Padrões: botão laranja = group + <TextRoll> + círculo branco (w-7 h-7 sm:w-8 sm:h-8) com ArrowRight group-hover:-rotate-45. Seção = <section id> + container + <SectionBadge number label />. Reveal variants: up|fade|scale|left|right|blur; Parallax e ScrollProgress em src/components.
Regras: todo texto em PT-BR; marca "Vetor Agência", logo "VT"; mobile-first; reutilizar componentes; editar só o necessário; não rodar build/dev salvo se pedido; resposta final em 1 linha "Arquivos modificados: ...".
Blog: posts em src/data/posts.ts; artigo via rota por hash #/blog/<slug> (Article.tsx).
CTA principal: 'Iniciar um projeto' (#connect). Privacidade: #/privacidade (PRIVACY em src/data/posts.ts). Form: VITE_FORM_ENDPOINT (fallback mailto). WhatsApp: const WHATSAPP em Contact.tsx.
