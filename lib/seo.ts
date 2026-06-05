import type { Metadata } from "next";

export const SITE_URL = "https://www.fernandatalavera.art";
export const BRAND_NAME = "Fernanda Talavera";
export const BUSINESS_NAME = "Fernanda Talavera Hair Braider";
export const BUSINESS_EMAIL = "contato@fernandatalavera.art";
export const BUSINESS_PHONE_DISPLAY = "(21) 98702-1112";
export const BUSINESS_PHONE_E164 = "+5521987021112";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521987021112";
export const INSTAGRAM_URL = "https://www.instagram.com/mf_talavera/";

export const DEFAULT_OG_IMAGE = "/images/hero-braids.jpg";
export const DEFAULT_DESCRIPTION =
  "Fernanda Talavera é trancista profissional e hair braider no Rio de Janeiro, especializada em box braids, knotless braids, nagô, cornrows, tranças afro e penteados protetores.";

export const MAIN_KEYWORDS = [
  "Fernanda Talavera",
  "Fernanda Talavera Hair Braider",
  "Fernanda Talavera Trancista",
  "Hair Braider",
  "Hair Braider Rio de Janeiro",
  "Luxury Hair Braider",
  "Professional Hair Braider",
  "Trancista",
  "Trancista Rio de Janeiro",
  "Trancista Zona Norte",
  "Trancista RJ",
  "Tranças Afro",
  "Tranças Femininas",
  "Tranças Masculinas",
  "Box Braids",
  "Knotless Braids",
  "Boho Braids",
  "Goddess Braids",
  "Nagô",
  "Cornrows",
  "Protective Hairstyles",
  "Braiding Specialist",
];

export const SERVICE_AREA = [
  "Rio de Janeiro",
  "RJ",
  "Zona Norte do Rio de Janeiro",
  "Grande Rio",
];

export type SeoFaq = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  kind: "service" | "guide";
  bookingType?: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  highlights: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
  faqs: SeoFaq[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "box-braids-rio-de-janeiro",
    kind: "service",
    bookingType: "box-braids",
    title: "Box Braids no Rio de Janeiro",
    seoTitle: "Box Braids no Rio de Janeiro com Fernanda Talavera",
    metaDescription:
      "Agende box braids no Rio de Janeiro com Fernanda Talavera, trancista profissional especializada em tranças afro, acabamento premium e proteção capilar.",
    eyebrow: "BOX BRAIDS RJ",
    h1: "Box Braids no Rio de Janeiro",
    lead: "Box braids são tranças soltas com extensão, criadas para unir proteção capilar, versatilidade e presença visual. Fernanda Talavera atende no Rio de Janeiro com foco em conforto, divisão precisa e acabamento elegante.",
    image: "/images/box-braids.jpg",
    imageAlt:
      "Box braids feitas por Fernanda Talavera, trancista no Rio de Janeiro",
    keywords: [
      "box braids rio de janeiro",
      "box braids RJ",
      "trancista box braids",
      "tranças afro rio de janeiro",
    ],
    highlights: [
      "Penteado protetor para cabelos naturais",
      "Acabamento alinhado e personalizado",
      "Ideal para praticidade, volume e estilo",
    ],
    sections: [
      {
        heading: "Para quem as box braids são indicadas",
        body: "As box braids são indicadas para quem busca um penteado protetor de longa duração, com liberdade para usar preso, solto, com acessórios ou em diferentes volumes. A técnica ajuda a reduzir a manipulação diária dos fios naturais.",
      },
      {
        heading: "Como Fernanda Talavera trabalha a técnica",
        body: "O atendimento considera textura, densidade, comprimento desejado e sensibilidade do couro cabeludo. O objetivo é entregar tranças firmes, bonitas e confortáveis, evitando excesso de tensão na raiz.",
      },
      {
        heading: "Contexto local",
        body: "Para buscas como trancista Rio de Janeiro, box braids perto de mim e hair braider RJ, a marca Fernanda Talavera se posiciona como especialista em tranças com atendimento profissional na cidade do Rio de Janeiro.",
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva para fazer box braids?",
        answer:
          "O tempo médio fica entre 5 e 7 horas, variando conforme comprimento, volume, tamanho das divisões e quantidade de cabelo utilizado.",
      },
      {
        question: "Box braids protegem o cabelo natural?",
        answer:
          "Sim. Quando feitas com tensão adequada e manutenção correta, as box braids funcionam como penteado protetor e reduzem a manipulação diária dos fios.",
      },
      {
        question: "Onde fazer box braids no Rio de Janeiro?",
        answer:
          "Fernanda Talavera atende no Rio de Janeiro como trancista profissional especializada em box braids, nagô, knotless braids e tranças afro.",
      },
    ],
    related: [
      "knotless-braids-rio-de-janeiro",
      "trancas-afro-rio-de-janeiro",
      "cuidados-com-trancas",
    ],
  },
  {
    slug: "knotless-braids-rio-de-janeiro",
    kind: "service",
    bookingType: "knotless",
    title: "Knotless Braids no Rio de Janeiro",
    seoTitle: "Knotless Braids no Rio de Janeiro | Trancista RJ",
    metaDescription:
      "Knotless braids no Rio de Janeiro com Fernanda Talavera: tranças sem nó na raiz, visual natural, conforto e menor tensão no couro cabeludo.",
    eyebrow: "KNOTLESS BRAIDS RJ",
    h1: "Knotless Braids no Rio de Janeiro",
    lead: "Knotless braids são tranças sem nó aparente na raiz. A técnica cria um acabamento natural, leve e confortável, ideal para quem deseja elegância com menor tensão no couro cabeludo.",
    image: "/images/knotless-braids.jpg",
    imageAlt:
      "Knotless braids com acabamento natural feitas por Fernanda Talavera no Rio de Janeiro",
    keywords: [
      "knotless braids rio de janeiro",
      "trancista knotless",
      "tranças sem nó RJ",
      "hair braider rio de janeiro",
    ],
    highlights: [
      "Raiz com aparência mais natural",
      "Menor tensão no couro cabeludo",
      "Estilo sofisticado e versátil",
    ],
    sections: [
      {
        heading: "Diferença entre knotless e box braids",
        body: "Nas knotless braids, a extensão é adicionada gradualmente, sem o nó inicial marcado. Isso cria um caimento mais leve e costuma ser uma escolha confortável para quem sente sensibilidade na raiz.",
      },
      {
        heading: "Acabamento e personalização",
        body: "O tamanho, comprimento, cor e volume são definidos conforme o objetivo visual da cliente. A técnica exige precisão para manter simetria, durabilidade e conforto.",
      },
      {
        heading: "Busca local e intenção de agendamento",
        body: "Quem procura knotless braids no Rio de Janeiro geralmente busca uma hair braider com domínio técnico, higiene, orientação de cuidados e acabamento premium.",
      },
    ],
    faqs: [
      {
        question: "Knotless braids doem menos?",
        answer:
          "A técnica tende a gerar menos tensão inicial porque a extensão é adicionada aos poucos, mas o conforto também depende da avaliação da raiz e da execução profissional.",
      },
      {
        question: "Quanto tempo dura knotless braids?",
        answer:
          "A durabilidade depende dos cuidados, da oleosidade, do crescimento dos fios e da rotina da cliente. A manutenção correta ajuda a preservar o acabamento por mais tempo.",
      },
      {
        question: "Fernanda Talavera faz knotless braids no RJ?",
        answer:
          "Sim. Fernanda Talavera atua no Rio de Janeiro como trancista profissional e realiza knotless braids, box braids, nagô e outros estilos protetores.",
      },
    ],
    related: [
      "box-braids-rio-de-janeiro",
      "boho-braids-rio-de-janeiro",
      "manutencao-de-trancas",
    ],
  },
  {
    slug: "boho-braids-rio-de-janeiro",
    kind: "service",
    bookingType: "goddess",
    title: "Boho Braids no Rio de Janeiro",
    seoTitle: "Boho Braids no Rio de Janeiro | Hair Braider RJ",
    metaDescription:
      "Boho braids no Rio de Janeiro com Fernanda Talavera: tranças com fios soltos, movimento natural e acabamento sofisticado para um visual boêmio.",
    eyebrow: "BOHO BRAIDS RJ",
    h1: "Boho Braids no Rio de Janeiro",
    lead: "Boho braids combinam tranças com fios cacheados soltos, criando movimento, volume e uma estética boêmia. É uma escolha elegante para quem quer um visual marcante sem perder naturalidade.",
    image: "/images/goddess-braids.jpg",
    imageAlt:
      "Boho braids e goddess braids com fios soltos feitas por Fernanda Talavera",
    keywords: [
      "boho braids rio de janeiro",
      "goddess braids rio de janeiro",
      "hair braider RJ",
      "trancista boho braids",
    ],
    highlights: [
      "Visual boêmio com movimento",
      "Fios soltos para efeito natural",
      "Acabamento romântico e sofisticado",
    ],
    sections: [
      {
        heading: "O que torna as boho braids diferentes",
        body: "O diferencial das boho braids está nos fios soltos distribuídos ao longo das tranças. Eles trazem textura, fluidez e um efeito mais orgânico ao penteado.",
      },
      {
        heading: "Quando escolher boho braids",
        body: "O estilo é indicado para quem quer tranças com aparência leve, elegante e fotogênica, muito procurada para viagens, eventos, ensaios e mudanças de visual.",
      },
      {
        heading: "Cuidados essenciais",
        body: "Por ter fios soltos, o cuidado com hidratação, frizz e atrito é importante. Fernanda orienta cada cliente sobre manutenção para preservar o aspecto das tranças.",
      },
    ],
    faqs: [
      {
        question: "Boho braids e goddess braids são a mesma coisa?",
        answer:
          "Os termos são próximos e muitas vezes usados para estilos parecidos, com tranças e fios cacheados soltos. A diferença final depende da referência visual e da técnica escolhida.",
      },
      {
        question: "Boho braids exigem mais manutenção?",
        answer:
          "Elas podem exigir mais cuidado com frizz e desembaraço dos fios soltos. Uma rotina leve de manutenção ajuda a preservar o visual.",
      },
      {
        question: "Onde agendar boho braids no Rio de Janeiro?",
        answer:
          "Fernanda Talavera realiza boho braids e goddess braids no Rio de Janeiro com atendimento personalizado e foco em acabamento premium.",
      },
    ],
    related: [
      "goddess-braids-rio-de-janeiro",
      "knotless-braids-rio-de-janeiro",
      "cuidados-com-trancas",
    ],
  },
  {
    slug: "goddess-braids-rio-de-janeiro",
    kind: "service",
    bookingType: "goddess",
    title: "Goddess Braids no Rio de Janeiro",
    seoTitle: "Goddess Braids no Rio de Janeiro | Fernanda Talavera",
    metaDescription:
      "Goddess braids no Rio de Janeiro com Fernanda Talavera: tranças elegantes com fios cacheados soltos, volume e acabamento delicado.",
    eyebrow: "GODDESS BRAIDS RJ",
    h1: "Goddess Braids no Rio de Janeiro",
    lead: "Goddess braids são tranças com textura, volume e fios soltos que deixam o penteado mais leve e feminino. O resultado combina proteção capilar com acabamento sofisticado.",
    image: "/images/goddess-braids.jpg",
    imageAlt:
      "Goddess braids feitas por Fernanda Talavera, hair braider no Rio de Janeiro",
    keywords: [
      "goddess braids rio de janeiro",
      "trancista goddess braids",
      "tranças femininas RJ",
      "luxury hair braider",
    ],
    highlights: [
      "Volume e movimento",
      "Acabamento delicado",
      "Estilo protetor para ocasiões especiais",
    ],
    sections: [
      {
        heading: "Visual e intenção do penteado",
        body: "As goddess braids valorizam textura, caimento e movimento. São muito escolhidas por clientes que buscam um estilo protetor com presença e suavidade.",
      },
      {
        heading: "Personalização por referência",
        body: "A construção do penteado pode variar em espessura, comprimento, quantidade de fios soltos e tipo de cacho, sempre considerando a saúde capilar e a expectativa visual.",
      },
      {
        heading: "Atendimento especializado",
        body: "Fernanda Talavera une técnica de tranças, escuta da cliente e orientação de cuidados para entregar um resultado alinhado à identidade de cada pessoa.",
      },
    ],
    faqs: [
      {
        question: "Goddess braids são penteado protetor?",
        answer:
          "Sim. Quando feitas corretamente, elas protegem parte do cabelo natural, reduzem manipulação diária e mantêm uma estética sofisticada.",
      },
      {
        question: "Goddess braids combinam com cabelo curto?",
        answer:
          "A possibilidade depende do comprimento e da saúde dos fios naturais. Uma avaliação antes do agendamento ajuda a definir o melhor caminho.",
      },
      {
        question: "Como cuidar dos fios soltos das goddess braids?",
        answer:
          "Evite atrito excessivo, durma com proteção e siga a orientação de manutenção para reduzir frizz e preservar o acabamento.",
      },
    ],
    related: [
      "boho-braids-rio-de-janeiro",
      "trancas-femininas-rio-de-janeiro",
      "manutencao-de-trancas",
    ],
  },
  {
    slug: "nago-rio-de-janeiro",
    kind: "service",
    bookingType: "nago",
    title: "Nagô no Rio de Janeiro",
    seoTitle: "Tranças Nagô no Rio de Janeiro | Trancista RJ",
    metaDescription:
      "Tranças nagô no Rio de Janeiro com Fernanda Talavera: cornrows, desenhos rentes ao couro cabeludo e acabamento preciso.",
    eyebrow: "NAGÔ RJ",
    h1: "Tranças Nagô no Rio de Janeiro",
    lead: "Nagô é uma técnica de tranças rentes ao couro cabeludo, conhecida também como cornrows. O estilo permite desenhos, linhas limpas e um resultado marcante.",
    image: "/images/cornrows.jpg",
    imageAlt:
      "Tranças nagô e cornrows feitas por Fernanda Talavera no Rio de Janeiro",
    keywords: [
      "nagô rio de janeiro",
      "trança nagô RJ",
      "cornrows rio de janeiro",
      "trancista zona norte",
    ],
    highlights: [
      "Desenhos rentes ao couro cabeludo",
      "Linhas precisas e acabamento limpo",
      "Opção versátil para diferentes identidades",
    ],
    sections: [
      {
        heading: "A força visual da trança nagô",
        body: "A trança nagô cria desenhos que acompanham a cabeça e valorizam o formato do rosto. Pode ser usada em propostas discretas, geométricas ou mais artísticas.",
      },
      {
        heading: "Técnica, conforto e couro cabeludo",
        body: "A execução exige controle da tensão, simetria e atenção ao couro cabeludo. Uma trança bem feita deve ficar firme sem comprometer o conforto.",
      },
      {
        heading: "Termos relacionados",
        body: "No Brasil, muita gente pesquisa por nagô; em inglês, o termo mais comum é cornrows. A página ajuda buscadores e IAs a entenderem que Fernanda Talavera trabalha os dois estilos no Rio de Janeiro.",
      },
    ],
    faqs: [
      {
        question: "Nagô e cornrows são a mesma técnica?",
        answer:
          "São termos relacionados. Nagô é o termo popular no Brasil, enquanto cornrows é muito usado em inglês para tranças rentes ao couro cabeludo.",
      },
      {
        question: "Quanto tempo leva para fazer nagô?",
        answer:
          "O tempo médio varia de 2 a 4 horas, dependendo do desenho, quantidade de linhas, extensão e detalhamento.",
      },
      {
        question: "Trança nagô pode ser masculina?",
        answer:
          "Sim. A técnica é muito usada em tranças femininas e masculinas, com desenho adaptado ao estilo de cada pessoa.",
      },
    ],
    related: [
      "cornrows-rio-de-janeiro",
      "trancas-masculinas-rio-de-janeiro",
      "trancas-afro-rio-de-janeiro",
    ],
  },
  {
    slug: "cornrows-rio-de-janeiro",
    kind: "service",
    bookingType: "nago",
    title: "Cornrows no Rio de Janeiro",
    seoTitle: "Cornrows no Rio de Janeiro | Hair Braider RJ",
    metaDescription:
      "Cornrows no Rio de Janeiro com Fernanda Talavera: tranças rentes ao couro cabeludo, desenhos precisos e atendimento profissional.",
    eyebrow: "CORNROWS RJ",
    h1: "Cornrows no Rio de Janeiro",
    lead: "Cornrows são tranças rentes ao couro cabeludo com linhas organizadas e desenhos personalizados. No Brasil, o estilo também é muito conhecido como trança nagô.",
    image: "/images/cornrows.jpg",
    imageAlt:
      "Cornrows com desenho rente ao couro cabeludo feitas por Fernanda Talavera",
    keywords: [
      "cornrows rio de janeiro",
      "cornrows RJ",
      "hair braider near me",
      "professional hair braider",
    ],
    highlights: [
      "Técnica reconhecida internacionalmente",
      "Boa leitura para buscas em inglês",
      "Design personalizado para cada cliente",
    ],
    sections: [
      {
        heading: "Busca em português e inglês",
        body: "A página conecta as buscas por cornrows, nagô, hair braider Rio de Janeiro e trancista RJ, tornando o serviço mais fácil de entender por mecanismos tradicionais e generativos.",
      },
      {
        heading: "Design e durabilidade",
        body: "A durabilidade depende da espessura, do desenho, da textura dos fios e da rotina de cuidados. O acabamento precisa equilibrar firmeza e conforto.",
      },
      {
        heading: "Atendimento profissional",
        body: "Fernanda Talavera trabalha com técnica, escuta e orientação para que o resultado represente a identidade da cliente e respeite a saúde capilar.",
      },
    ],
    faqs: [
      {
        question: "Cornrows são boas para prática esportiva?",
        answer:
          "Podem ser uma opção prática por manterem os fios organizados, mas a escolha do desenho e a manutenção precisam considerar suor, lavagem e sensibilidade do couro cabeludo.",
      },
      {
        question: "Cornrows podem ter extensão?",
        answer:
          "Sim. Dependendo da proposta, é possível trabalhar com ou sem extensão para ajustar comprimento, volume e desenho.",
      },
      {
        question: "Quem faz cornrows no Rio de Janeiro?",
        answer:
          "Fernanda Talavera é hair braider e trancista profissional no Rio de Janeiro, com atendimento para cornrows, nagô e outros estilos de tranças.",
      },
    ],
    related: [
      "nago-rio-de-janeiro",
      "trancas-masculinas-rio-de-janeiro",
      "cuidados-com-trancas",
    ],
  },
  {
    slug: "trancas-afro-rio-de-janeiro",
    kind: "service",
    bookingType: "box-braids",
    title: "Tranças Afro no Rio de Janeiro",
    seoTitle: "Tranças Afro no Rio de Janeiro | Fernanda Talavera",
    metaDescription:
      "Tranças afro no Rio de Janeiro com Fernanda Talavera: box braids, nagô, knotless, goddess e penteados protetores com acabamento profissional.",
    eyebrow: "TRANÇAS AFRO RJ",
    h1: "Tranças Afro no Rio de Janeiro",
    lead: "Tranças afro carregam estética, cultura, praticidade e cuidado. Fernanda Talavera atua como trancista no Rio de Janeiro com foco em penteados protetores e acabamento personalizado.",
    image: "/images/hero-braids.jpg",
    imageAlt:
      "Tranças afro elegantes feitas por Fernanda Talavera no Rio de Janeiro",
    keywords: [
      "tranças afro rio de janeiro",
      "trancista afro RJ",
      "penteados protetores",
      "braiding specialist",
    ],
    highlights: [
      "Serviços de tranças afro e hair braiding",
      "Técnica voltada para proteção capilar",
      "Atendimento personalizado no Rio de Janeiro",
    ],
    sections: [
      {
        heading: "Especialidade em penteados protetores",
        body: "Box braids, knotless braids, nagô, cornrows, goddess e boho braids são estilos que podem proteger os fios naturais quando executados com técnica e orientação de cuidado.",
      },
      {
        heading: "Experiência e escuta",
        body: "A escolha da trança considera rotina, objetivo visual, saúde capilar, tempo disponível e preferência pessoal. Essa escuta torna o atendimento mais preciso e confiável.",
      },
      {
        heading: "Entidade local para buscadores",
        body: "A associação entre Fernanda Talavera, trancista profissional, Rio de Janeiro e tranças afro fortalece a presença orgânica em buscas locais e consultas feitas a ferramentas de IA.",
      },
    ],
    faqs: [
      {
        question: "Quais tranças afro Fernanda Talavera faz?",
        answer:
          "Fernanda trabalha com box braids, knotless braids, boho braids, goddess braids, nagô, cornrows, tranças femininas e tranças masculinas.",
      },
      {
        question: "Tranças afro ajudam na transição capilar?",
        answer:
          "Podem ajudar como penteado protetor durante algumas fases, mas a indicação ideal depende da saúde dos fios e da orientação profissional.",
      },
      {
        question: "Como escolher uma trancista no Rio de Janeiro?",
        answer:
          "Procure acabamento consistente, atenção à tensão na raiz, orientação de cuidados, portfólio real e comunicação clara antes do agendamento.",
      },
    ],
    related: [
      "box-braids-rio-de-janeiro",
      "knotless-braids-rio-de-janeiro",
      "nago-rio-de-janeiro",
    ],
  },
  {
    slug: "trancas-femininas-rio-de-janeiro",
    kind: "service",
    bookingType: "goddess",
    title: "Tranças Femininas no Rio de Janeiro",
    seoTitle: "Tranças Femininas no Rio de Janeiro | Trancista RJ",
    metaDescription:
      "Tranças femininas no Rio de Janeiro com Fernanda Talavera: box braids, knotless, boho, goddess, nagô e estilos protetores personalizados.",
    eyebrow: "TRANÇAS FEMININAS RJ",
    h1: "Tranças Femininas no Rio de Janeiro",
    lead: "Tranças femininas podem ser delicadas, marcantes, práticas ou luxuosas. O atendimento de Fernanda Talavera valoriza identidade, conforto e saúde capilar.",
    image: "/images/braider-portrait.jpg",
    imageAlt:
      "Fernanda Talavera, trancista profissional especializada em tranças femininas no RJ",
    keywords: [
      "tranças femininas rio de janeiro",
      "trancista feminina RJ",
      "luxury hair braider",
      "penteados protetores femininos",
    ],
    highlights: [
      "Estilos personalizados",
      "Opções para rotina, viagem e eventos",
      "Orientação antes e depois do atendimento",
    ],
    sections: [
      {
        heading: "Escolha do estilo ideal",
        body: "A escolha entre box braids, knotless, boho, goddess ou nagô depende de rotina, sensibilidade, preferência de volume, duração desejada e acabamento esperado.",
      },
      {
        heading: "Beleza e proteção capilar",
        body: "As tranças femininas podem reduzir manipulação diária e facilitar a rotina. A técnica correta é essencial para preservar conforto e saúde do cabelo natural.",
      },
      {
        heading: "Presença de marca",
        body: "Fernanda Talavera constrói uma assinatura visual associada a tranças elegantes, cuidado próximo e atendimento profissional no Rio de Janeiro.",
      },
    ],
    faqs: [
      {
        question: "Qual trança feminina dura mais?",
        answer:
          "A durabilidade varia conforme estilo, espessura, crescimento dos fios e manutenção. Box braids e knotless costumam ser escolhas práticas para maior duração.",
      },
      {
        question: "Qual trança feminina fica mais natural?",
        answer:
          "Knotless braids e boho braids tendem a ter acabamento mais leve e natural, mas a melhor escolha depende da referência visual.",
      },
      {
        question: "Fernanda Talavera atende tranças femininas no Rio de Janeiro?",
        answer:
          "Sim. Fernanda Talavera é trancista profissional no Rio de Janeiro e atende diferentes estilos de tranças femininas.",
      },
    ],
    related: [
      "goddess-braids-rio-de-janeiro",
      "boho-braids-rio-de-janeiro",
      "cuidados-com-trancas",
    ],
  },
  {
    slug: "trancas-masculinas-rio-de-janeiro",
    kind: "service",
    bookingType: "nago",
    title: "Tranças Masculinas no Rio de Janeiro",
    seoTitle: "Tranças Masculinas no Rio de Janeiro | Cornrows e Nagô RJ",
    metaDescription:
      "Tranças masculinas no Rio de Janeiro com Fernanda Talavera: nagô, cornrows e desenhos rentes ao couro cabeludo com acabamento profissional.",
    eyebrow: "TRANÇAS MASCULINAS RJ",
    h1: "Tranças Masculinas no Rio de Janeiro",
    lead: "Tranças masculinas valorizam linhas, desenho e praticidade. Os estilos mais buscados incluem nagô, cornrows e combinações rentes ao couro cabeludo.",
    image: "/images/cornrows.jpg",
    imageAlt:
      "Tranças masculinas estilo cornrows e nagô feitas no Rio de Janeiro",
    keywords: [
      "tranças masculinas rio de janeiro",
      "cornrows masculino RJ",
      "nagô masculino",
      "trancista masculina rio de janeiro",
    ],
    highlights: [
      "Desenhos personalizados",
      "Acabamento limpo e alinhado",
      "Opção prática para rotina e estilo",
    ],
    sections: [
      {
        heading: "Estilos masculinos mais procurados",
        body: "Nagô reta, cornrows com desenho, linhas laterais e tranças com extensão são opções comuns para quem deseja um visual organizado e expressivo.",
      },
      {
        heading: "Atenção ao couro cabeludo",
        body: "O couro cabeludo masculino também precisa de avaliação de sensibilidade, crescimento e tensão. O conforto é parte essencial de um resultado profissional.",
      },
      {
        heading: "Busca local",
        body: "A página atende pesquisas como tranças masculinas Rio de Janeiro, cornrows masculino RJ e trancista perto de mim, conectando a intenção de busca ao atendimento de Fernanda Talavera.",
      },
    ],
    faqs: [
      {
        question: "Homens podem fazer box braids?",
        answer:
          "Sim. A escolha depende do comprimento natural, referência visual e rotina. Para estilos rentes, nagô e cornrows são opções muito procuradas.",
      },
      {
        question: "Tranças masculinas precisam de manutenção?",
        answer:
          "Sim. Limpeza, proteção ao dormir e cuidado com suor e atrito ajudam a preservar o desenho e o conforto.",
      },
      {
        question: "Qual estilo masculino é mais prático?",
        answer:
          "Nagô e cornrows costumam ser práticos porque mantêm os fios organizados e podem ser adaptados em desenhos simples ou mais elaborados.",
      },
    ],
    related: [
      "nago-rio-de-janeiro",
      "cornrows-rio-de-janeiro",
      "manutencao-de-trancas",
    ],
  },
  {
    slug: "cuidados-com-trancas",
    kind: "guide",
    title: "Cuidados com Tranças",
    seoTitle: "Cuidados com Tranças | Guia de Fernanda Talavera",
    metaDescription:
      "Guia de cuidados com tranças por Fernanda Talavera: como lavar, proteger ao dormir, reduzir frizz e preservar penteados protetores.",
    eyebrow: "GUIA DE CUIDADOS",
    h1: "Cuidados com Tranças",
    lead: "Cuidar das tranças ajuda a preservar o acabamento, proteger os fios naturais e manter o couro cabeludo confortável. A rotina certa depende do estilo, da pele e da frequência de uso.",
    image: "/images/knotless-braids.jpg",
    imageAlt:
      "Cuidados com tranças e penteados protetores orientados por Fernanda Talavera",
    keywords: [
      "cuidados com tranças",
      "como cuidar de box braids",
      "manutenção de tranças",
      "penteados protetores",
    ],
    highlights: [
      "Proteção ao dormir",
      "Higienização sem excesso de atrito",
      "Rotina para reduzir frizz",
    ],
    sections: [
      {
        heading: "Como dormir com tranças",
        body: "Use touca, lenço ou fronha de cetim para reduzir atrito e frizz. Esse cuidado preserva o acabamento das pontas e diminui desgaste nas raízes.",
      },
      {
        heading: "Higienização do couro cabeludo",
        body: "A limpeza deve ser leve e focada no couro cabeludo. Evite movimentos agressivos e excesso de produto, principalmente em tranças com fios soltos.",
      },
      {
        heading: "Sinais de atenção",
        body: "Coceira intensa, dor persistente, vermelhidão ou tensão excessiva não devem ser ignoradas. Um penteado protetor precisa ser bonito e confortável.",
      },
    ],
    faqs: [
      {
        question: "Pode lavar o cabelo com tranças?",
        answer:
          "Sim, mas a lavagem deve ser cuidadosa, priorizando couro cabeludo e enxágue completo para evitar acúmulo de produto.",
      },
      {
        question: "Como diminuir frizz nas tranças?",
        answer:
          "Proteção ao dormir, menos atrito, hidratação adequada e manutenção profissional ajudam a reduzir o frizz.",
      },
      {
        question: "Tranças muito apertadas são normais?",
        answer:
          "Não. Firmeza é diferente de dor. Tensão excessiva pode incomodar e prejudicar os fios naturais.",
      },
    ],
    related: [
      "manutencao-de-trancas",
      "box-braids-rio-de-janeiro",
      "knotless-braids-rio-de-janeiro",
    ],
  },
  {
    slug: "manutencao-de-trancas",
    kind: "guide",
    title: "Manutenção de Tranças",
    seoTitle: "Manutenção de Tranças | Fernanda Talavera RJ",
    metaDescription:
      "Saiba como fazer manutenção de tranças, preservar box braids, knotless, nagô e cornrows e identificar o momento certo de renovar o penteado.",
    eyebrow: "MANUTENÇÃO",
    h1: "Manutenção de Tranças",
    lead: "A manutenção correta preserva estética, conforto e saúde capilar. Cada estilo tem sinais próprios de desgaste, e a orientação profissional ajuda a evitar dano por uso prolongado.",
    image: "/images/box-braids.jpg",
    imageAlt:
      "Manutenção de tranças, box braids e penteados protetores no Rio de Janeiro",
    keywords: [
      "manutenção de tranças",
      "manutenção box braids",
      "quando tirar tranças",
      "trancista rio de janeiro",
    ],
    highlights: [
      "Orientação sobre tempo de uso",
      "Redução de frizz e desgaste",
      "Avaliação do couro cabeludo",
    ],
    sections: [
      {
        heading: "Quando fazer manutenção",
        body: "A necessidade de manutenção depende do crescimento da raiz, frizz, soltura das pontas, acúmulo de resíduos e conforto. O ideal é observar sinais antes de o penteado perder estrutura.",
      },
      {
        heading: "Quando retirar as tranças",
        body: "Dor, tensão, embaraço excessivo, quebra visível ou acúmulo persistente indicam que pode ser hora de remover ou renovar o estilo.",
      },
      {
        heading: "Plano de cuidado personalizado",
        body: "Fernanda Talavera orienta cada cliente conforme técnica, estilo escolhido e rotina, fortalecendo a experiência e a confiança no atendimento.",
      },
    ],
    faqs: [
      {
        question: "Com quanto tempo devo fazer manutenção das tranças?",
        answer:
          "Depende do estilo e da rotina. O crescimento da raiz, frizz e conforto são os principais sinais para avaliar manutenção ou retirada.",
      },
      {
        question: "Posso refazer apenas a frente das tranças?",
        answer:
          "Em alguns casos, sim. A possibilidade depende do estado do penteado, do estilo e do objetivo da cliente.",
      },
      {
        question: "Manutenção aumenta a durabilidade?",
        answer:
          "Sim. Uma manutenção adequada pode preservar o acabamento por mais tempo, desde que não prolongue o uso além do recomendado para o cabelo natural.",
      },
    ],
    related: [
      "cuidados-com-trancas",
      "trancas-afro-rio-de-janeiro",
      "cornrows-rio-de-janeiro",
    ],
  },
];

export const getServicePage = (slug: string) =>
  servicePages.find((page) => page.slug === slug);

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title.includes(BRAND_NAME)
    ? title
    : `${title} | ${BRAND_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [...new Set([...MAIN_KEYWORDS, ...keywords])],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: BRAND_NAME,
      locale: "pt_BR",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - tranças e hair braiding no Rio de Janeiro`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "BR-RJ",
      "geo.placename": "Rio de Janeiro, RJ, Brasil",
      "business:contact_data:locality": "Rio de Janeiro",
      "business:contact_data:region": "RJ",
      "business:contact_data:country_name": "Brasil",
      "business:contact_data:phone_number": BUSINESS_PHONE_DISPLAY,
      "business:contact_data:email": BUSINESS_EMAIL,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function identityGraphSchema() {
  const services = [
    "Box Braids",
    "Knotless Braids",
    "Boho Braids",
    "Goddess Braids",
    "Nagô",
    "Cornrows",
    "Tranças Afro",
    "Tranças Femininas",
    "Tranças Masculinas",
    "Cuidados com Tranças",
    "Manutenção de Tranças",
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        legalName: BRAND_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/logo.svg"),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE_E164,
        sameAs: [INSTAGRAM_URL],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BUSINESS_PHONE_E164,
            contactType: "customer service",
            areaServed: "BR-RJ",
            availableLanguage: ["pt-BR", "en"],
            url: WHATSAPP_URL,
          },
        ],
      },
      {
        "@type": ["HairSalon", "BeautySalon", "ProfessionalService"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: BUSINESS_NAME,
        alternateName: [
          "Fernanda Talavera Trancista",
          "Fernanda Talavera Hair Braider",
          "Fernanda Talavera Braiding Specialist",
        ],
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: [
          absoluteUrl("/images/hero-braids.jpg"),
          absoluteUrl("/images/braider-portrait.jpg"),
          absoluteUrl("/images/box-braids.jpg"),
        ],
        logo: absoluteUrl("/logo.svg"),
        telephone: BUSINESS_PHONE_E164,
        email: BUSINESS_EMAIL,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        areaServed: SERVICE_AREA.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        serviceArea: {
          "@type": "AdministrativeArea",
          name: "Rio de Janeiro - RJ",
        },
        founder: {
          "@id": `${SITE_URL}/#person`,
        },
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
        sameAs: [INSTAGRAM_URL],
        knowsAbout: MAIN_KEYWORDS,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de tranças e hair braiding",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
              areaServed: "Rio de Janeiro - RJ",
              provider: {
                "@id": `${SITE_URL}/#localbusiness`,
              },
            },
          })),
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Isabella Vitorino" },
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
            reviewBody:
              "Atendimento cuidadoso, ambiente acolhedor e resultado de box braids acima da expectativa.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Eduarda" },
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
            reviewBody:
              "Tranças com boa durabilidade e atenção à saúde capilar.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Maria Luiza" },
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
            reviewBody:
              "Goddess braids com acabamento elogiado e orientação de cuidados.",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: BRAND_NAME,
        url: SITE_URL,
        image: absoluteUrl("/images/braider-portrait.jpg"),
        jobTitle: ["Trancista Profissional", "Hair Braider", "Braiding Specialist"],
        worksFor: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        sameAs: [INSTAGRAM_URL],
        knowsAbout: MAIN_KEYWORDS,
        homeLocation: {
          "@type": "Place",
          name: "Rio de Janeiro, RJ",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: BRAND_NAME,
        alternateName: [
          "Fernanda Talavera Hair Braider",
          "Fernanda Talavera Trancista",
        ],
        url: SITE_URL,
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

export function webPageSchema({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "pt-BR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: [
      {
        "@id": `${SITE_URL}/#localbusiness`,
      },
      {
        "@id": `${SITE_URL}/#person`,
      },
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image),
      caption: `${BRAND_NAME} - tranças e hair braiding no Rio de Janeiro`,
    },
  };
}

export function serviceSchema(page: ServicePage) {
  const path = `/trancas/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": page.kind === "guide" ? "Article" : "Service",
    "@id": `${absoluteUrl(path)}#${page.kind}`,
    name: page.title,
    headline: page.seoTitle,
    description: page.metaDescription,
    url: absoluteUrl(path),
    image: absoluteUrl(page.image),
    inLanguage: "pt-BR",
    mainEntityOfPage: absoluteUrl(path),
    provider:
      page.kind === "service"
        ? {
            "@id": `${SITE_URL}/#localbusiness`,
          }
        : undefined,
    author:
      page.kind === "guide"
        ? {
            "@id": `${SITE_URL}/#person`,
          }
        : undefined,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed:
      page.kind === "service"
        ? {
            "@type": "AdministrativeArea",
            name: "Rio de Janeiro - RJ",
          }
        : undefined,
    serviceType: page.kind === "service" ? page.title : undefined,
    offers:
      page.kind === "service"
        ? {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: page.bookingType
              ? absoluteUrl(`/agendar?tipo=${page.bookingType}`)
              : absoluteUrl("/agendar"),
          }
        : undefined,
    about: page.keywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
  };
}

export function faqSchema(faqs: SeoFaq[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function imageObjectSchema(page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(page.image),
    url: absoluteUrl(page.image),
    name: page.imageAlt,
    caption: page.imageAlt,
    creator: {
      "@id": `${SITE_URL}/#person`,
    },
    copyrightHolder: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
