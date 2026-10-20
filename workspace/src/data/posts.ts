export type Post = {
  slug: string
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  gradient: string
  cover?: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const POSTS: Post[] = [
  {
    slug: 'ideia-criativa-que-resiste-ao-tempo',
    category: 'Estratégia',
    date: '08 set 2026',
    readTime: '5 min',
    title: 'Como construir uma ideia criativa que resiste ao tempo e aos algoritmos',
    excerpt: 'O que separa uma ideia memorável de uma campanha esquecida em duas semanas.',
    gradient: 'bg-gradient-to-br from-[#F26522] to-[#ffb07a]',
    cover: '/blog/ideia-criativa.svg',
    sections: [
      {
        heading: 'Comece pelo problema, não pelo formato',
        paragraphs: [
          'Uma ideia forte não nasce de um briefing de mídia. Ela nasce de um problema real: um hábito que a marca quer mudar, um preconceito que o público carrega, uma verdade que ninguém disse em voz alta. Quando a conversa começa pelo Reel, pelo outdoor ou pelo filme de trinta segundos, o conceito já chega estreito demais para durar.',
          'Antes de escolher canal, descreva o que precisa acontecer na cabeça de quem vê. Se a frase de ouro só funciona num formato, ela não é ideia — é recurso. Ideias que resistem ao tempo cabem em um cartaz, numa conversa e num filme sem perder o sentido.',
        ],
      },
      {
        heading: 'Uma ideia, muitos formatos',
        paragraphs: [
          'O teste mais honesto de um conceito é perguntar se ele ainda funciona sem o efeito especial, sem a trilha e sem o influencer da vez. Se a resposta depende do recurso, a campanha envelhece no mesmo ritmo da plataforma. Se a resposta está no insight, cada canal vira adaptação, não reinvenção.',
          'Trabalhe um núcleo curto, que qualquer pessoa da equipe consiga repetir. A partir dele, abra ramificações: peça de mídia, conteúdo de redes, atendimento, ponto de venda. O público deve reconhecer a mesma marca em todos os pontos, não uma coleção de execuções desconectadas.',
        ],
      },
      {
        heading: 'Teste antes de investir em mídia',
        paragraphs: [
          'Colocar uma campanha no ar sem ouvir ninguém é um atalho caro. Mostre o conceito para pessoas que não trabalham com você. Peça para contar o que entenderam, não o que acharam “legal”. Se a leitura muda a cada conversa, o problema está no núcleo, não no layout.',
          'Ajuste o que for ambíguo enquanto o investimento ainda é tempo, não verba. Um teste simples — uma frase, uma imagem, uma reação — evita reescrever a campanha depois que ela já está no ar.',
        ],
      },
      {
        heading: 'Meça o que importa',
        paragraphs: [
          'Alcance e cliques descrevem movimento, não memória. Combine indicadores de desempenho com sinais de reconhecimento: as pessoas repetem a ideia? Associam à marca sem ver o logo? Continuam falando depois que a mídia acabou?',
          'Uma ideia que resiste ao tempo gera conversa, não só tráfego. Use os números para calibrar, mas deixe o critério de sucesso no que a marca quer ser lembrada por fazer — não no que o algoritmo privilegiou naquela semana.',
        ],
      },
    ],
  },
  {
    slug: 'midia-paga-ou-organica',
    category: 'Mídia',
    date: '22 ago 2026',
    readTime: '4 min',
    title: 'Mídia paga ou orgânica? Como dividir o orçamento com inteligência',
    excerpt: 'Um guia prático para equilibrar alcance, custo e construção de marca.',
    gradient: 'bg-gradient-to-br from-gray-900 to-gray-600',
    cover: '/blog/midia-paga-organica.svg',
    sections: [
      {
        heading: 'O papel de cada canal',
        paragraphs: [
          'Mídia paga compra atenção agora. Orgânica constrói relacionamento ao longo do tempo. Confundir os dois papéis é o caminho mais curto para gastar demais no que deveria ser conversa e esperar demais do que deveria ser distribuição.',
          'Paga serve para chegar em quem ainda não te conhece, para acelerar um lançamento e para testar mensagens com controle. Orgânica serve para aprofundar, responder, mostrar o dia a dia da marca e manter o vínculo depois que o anúncio some. Uma não substitui a outra.',
        ],
      },
      {
        heading: 'Um ponto de partida para dividir o orçamento',
        paragraphs: [
          'Comece pelo objetivo do período, não pela moda do canal. Se a prioridade é fazer a marca ser vista por um público novo, a maior parte da verba precisa ir para distribuição paga, com criativos que aguentem volume. Se a prioridade é reputação e recorrência, fortaleça o conteúdo próprio e use a paga para ampliar o que já funciona.',
          'Uma divisão inicial razoável é tratar a orgânica como operação contínua — equipe, calendário, comunidade — e a paga como investimento variável, ligado a campanhas e janelas de oportunidade. Ajuste conforme o resultado, não conforme o palpite da semana.',
        ],
      },
      {
        heading: 'Quando reforçar a mídia paga',
        paragraphs: [
          'Reforce a paga quando o conteúdo já provou que conversa com o público, mas não chega longe o suficiente. Também faz sentido acelerar quando há data, estoque, lançamento ou uma janela competitiva que não espera o crescimento natural do perfil.',
          'O erro comum é colocar dinheiro em cima de uma mensagem ainda confusa. Paga multiplica o que existe. Se o conceito está fraco, ela só torna o problema mais caro e mais visível.',
        ],
      },
      {
        heading: 'Como medir e rebalancear',
        paragraphs: [
          'Olhe o conjunto, não o canal isolado. Combine custo de alcance, qualidade do tráfego, retenção e sinais de marca. Um anúncio barato que não gera lembrança é desperdício. Um conteúdo orgânico que gera conversa, mas não escala, pede distribuição — não abandono.',
          'Rebalanceie com frequência curta o suficiente para corrigir rumo e longa o suficiente para o conteúdo respirar. Mídia inteligente não é escolher um lado. É saber quando pagar para ser visto e quando merecer ser acompanhado.',
        ],
      },
    ],
  },
  {
    slug: 'storytelling-de-marca',
    category: 'Criação',
    date: '15 jul 2026',
    readTime: '5 min',
    title: 'Storytelling de marca: sinais de que sua comunicação precisa de um novo conceito',
    excerpt: 'Como perceber que a comunicação envelheceu e o que fazer a respeito.',
    gradient: 'bg-gradient-to-br from-[#EFEFEF] to-gray-400',
    cover: '/blog/storytelling.svg',
    sections: [
      {
        heading: 'Sinais de que o conceito envelheceu',
        paragraphs: [
          'O primeiro sinal é o silêncio. A campanha sai, as peças circulam e ninguém comenta, questiona ou repete. Outro é a equipe interna: se ninguém consegue explicar o conceito em uma frase, o público também não vai conseguir.',
          'Há ainda o cansaço visual. Quando as peças só mudam de cor, de recorte ou de trilha, mas dizem a mesma coisa de sempre, a marca está operando no automático. Comunicação que envelheceu não precisa de mais volume. Precisa de um novo ponto de vista.',
        ],
      },
      {
        heading: 'O que é, de fato, um conceito de comunicação',
        paragraphs: [
          'Conceito não é slogan, não é paleta e não é o nome da campanha. É a lente pela qual a marca olha o mundo e convida o público a olhar junto. Ele organiza escolhas: o que dizer, o que calar, o tom, o humor, o conflito.',
          'Um bom conceito gera variação sem se perder. Cada peça parece nova, mas pertence à mesma família. Se cada campanha começa do zero, a marca não constrói memória — só ocupa espaço.',
        ],
      },
      {
        heading: 'Renovar sem perder a identidade',
        paragraphs: [
          'Renovar não é apagar a história. É decidir o que permanece — valores, território, jeito de falar — e o que precisa sair do caminho. Marcas que mudam tudo de uma vez confundem. Marcas que não mudam nada desaparecem.',
          'Traga para a mesa o que ainda é verdade sobre o produto e o que o público já não acredita. O novo conceito deve tensionar esse espaço: familiar o bastante para ser reconhecido, fresco o bastante para merecer atenção.',
        ],
      },
      {
        heading: 'Primeiros passos',
        paragraphs: [
          'Reúna as últimas campanhas e leia em voz alta, sem as imagens. Se o texto parece genérico, o problema não é a produção. Converse com clientes e com quem atende o cliente todo dia. Pergunte o que a marca promete e o que ela realmente entrega.',
          'Com isso em mãos, escreva o conceito em poucas linhas e teste se ele aguenta três execuções diferentes. Se aguentar, você tem um ponto de partida. Se não aguentar, continue até ter. Storytelling de marca não é enfeite: é o filtro que impede a comunicação de envelhecer no piloto automático.',
        ],
      },
    ],
  },
]

export const PRIVACY: Post = {
  slug: 'privacidade',
  category: 'Legal',
  date: 'Atualizada em out 2026',
  readTime: '2 min',
  title: 'Política de Privacidade',
  excerpt: 'Como a Vetor Agência trata os dados pessoais coletados neste site.',
  gradient: 'bg-gray-100',
  sections: [
    {
      heading: 'Dados que coletamos',
      paragraphs: [
        'Coletamos nome, e-mail, empresa, interesse, faixa de investimento e a mensagem enviados no formulário deste site.',
      ],
    },
    {
      heading: 'Para que usamos',
      paragraphs: [
        'Usamos esses dados para responder o contato e enviar propostas. A base legal é o consentimento, nos termos da Lei 13.709/2018 (LGPD).',
      ],
    },
    {
      heading: 'Seus direitos',
      paragraphs: [
        'Você pode solicitar acesso, correção, exclusão dos dados e a revogação do consentimento. Envie pedidos para privacidade@vetoragencia.com.',
      ],
    },
    {
      heading: 'Retenção e compartilhamento',
      paragraphs: [
        'Guardamos os dados pelo tempo necessário ao atendimento. Não vendemos dados pessoais.',
        'Texto ilustrativo para projeto conceitual.',
      ],
    },
  ],
}
