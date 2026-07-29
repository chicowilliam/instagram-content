import type { CalendarWeek } from './types'

/** Semanas 1–13 · Fundamentos, credibilidade e como ser encontrado */
export const q1: CalendarWeek[] = [
  {
    week: 1,
    month: 1,
    pillar: 'confianca',
    objective:
      'Fazer o empresário perceber que a empresa dele já tem presença digital — boa ou ruim.',
    metric: 'Salvamentos',
    narrative:
      'A semana abre a série mostrando que a avaliação já acontece hoje, mesmo sem site. Do diagnóstico geral (C1) para os lugares específicos (C3), com os reels provocando o teste na prática.',
    carousels: [
      {
        title: 'Sua empresa já tem presença digital — mesmo sem site',
        angle:
          'O que aparece quando alguém pesquisa o nome da empresa hoje e por que isso já é uma vitrine.',
      },
      {
        title: 'O que o cliente vê antes de falar com você',
        angle:
          'A jornada silenciosa entre a indicação e o primeiro contato, etapa por etapa.',
      },
      {
        title: '3 lugares onde sua empresa é julgada agora',
        angle:
          'Busca no Google, perfil social e boca a boca digital: o que cada um comunica.',
      },
    ],
    reels: [
      {
        title: 'Pesquise o nome da sua empresa agora',
        angle:
          'Teste ao vivo: abrir o navegador e mostrar o que um cliente encontraria.',
      },
      {
        title: 'O que o silêncio digital comunica',
        angle:
          'Quando não há informação, o cliente preenche a lacuna com desconfiança.',
      },
    ],
    storyFocus:
      'Enquete: "Você já pesquisou o nome da sua empresa no Google?" (Sim / Nunca)',
    bridge:
      'Se a empresa já é avaliada, a pergunta seguinte é: quanto tempo ela tem para causar boa impressão.',
  },
  {
    week: 2,
    month: 1,
    pillar: 'confianca',
    objective:
      'Provar que a decisão de confiar acontece nos primeiros segundos de visita.',
    metric: 'Compartilhamentos',
    narrative:
      'Depois de constatar que a empresa é avaliada, a semana quantifica o tempo dessa avaliação e mostra o custo de perder a janela.',
    carousels: [
      {
        title: 'Os 3 segundos que decidem se o cliente continua',
        angle:
          'O que precisa estar visível antes de qualquer rolagem para o visitante permanecer.',
      },
      {
        title: 'Por que o cliente sai sem entrar em contato',
        angle:
          'Motivos comuns de abandono que não têm relação com preço nem com concorrência.',
      },
      {
        title: 'Confiança não se pede, se demonstra',
        angle:
          'Sinais concretos de credibilidade que substituem a frase "somos confiáveis".',
      },
    ],
    reels: [
      {
        title: 'O teste do primeiro olhar',
        angle:
          'Mostrar duas telas por 3 segundos cada e perguntar em qual o espectador confiaria.',
      },
      {
        title: 'Improvisado x profissional',
        angle:
          'Comparação visual direta, sem citar tecnologia, só percepção.',
      },
    ],
    storyFocus:
      'Caixinha: "O que te faz desistir de um site em 3 segundos?"',
    bridge:
      'Entendida a importância, aparece a objeção clássica: isso é gasto ou investimento.',
  },
  {
    week: 3,
    month: 1,
    pillar: 'decisao',
    objective:
      'Quebrar a crença de que site é despesa e reposicioná-lo como patrimônio da empresa.',
    metric: 'Comentários',
    narrative:
      'A semana enfrenta a objeção financeira de frente e prepara o terreno para o empresário aceitar investir atenção no tema.',
    carousels: [
      {
        title: 'Site é custo ou patrimônio da empresa?',
        angle:
          'A diferença entre pagar por algo que some e construir algo que permanece.',
      },
      {
        title: 'O que sua empresa perde sem endereço próprio',
        angle:
          'Oportunidades que passam despercebidas quando tudo depende de rede social.',
      },
      {
        title: 'Rede social é aluguel. Site é imóvel.',
        angle:
          'Você não controla o alcance, as regras nem a permanência do perfil.',
      },
    ],
    reels: [
      {
        title: 'Você não é dono do seu perfil',
        angle:
          'Em 20 segundos: o que acontece se a conta for bloqueada amanhã.',
      },
      {
        title: 'A conta que muda tudo',
        angle:
          'Quanto vale um cliente novo por mês comparado ao custo de um projeto.',
      },
    ],
    storyFocus:
      'Enquete: "Se sua conta fosse bloqueada hoje, seus clientes te encontrariam?"',
    bridge:
      'Aceito o valor, falta definir o que exatamente é um site que cumpre esse papel.',
  },
  {
    week: 4,
    month: 1,
    pillar: 'confianca',
    objective:
      'Dar ao empresário uma definição prática de "site que funciona" para usar como régua.',
    metric: 'Salvamentos',
    narrative:
      'Fecha o mês entregando um critério objetivo. Sai da percepção e entra no checklist que será usado nos meses seguintes.',
    carousels: [
      {
        title: 'O que é um site que funciona',
        angle:
          'Definição prática: informa, gera confiança e conduz ao próximo passo.',
      },
      {
        title: 'As 4 perguntas que todo site precisa responder',
        angle:
          'O que é, para quem, por que confiar e como contratar — nessa ordem.',
      },
      {
        title: 'Site institucional, página de campanha ou sistema?',
        angle:
          'Três necessidades diferentes explicadas pelo problema que cada uma resolve.',
      },
    ],
    reels: [
      {
        title: 'Seu site responde essas 4 perguntas?',
        angle:
          'Checklist rápido narrado sobre a tela de um site genérico.',
      },
      {
        title: 'Bonito não é o mesmo que funcional',
        angle:
          'Dois exemplos visuais mostrando que atratividade sem clareza não converte.',
      },
    ],
    storyFocus:
      'Sequência das 4 perguntas, uma por story, com enquete Sim/Não em cada.',
    bridge:
      'Com a régua definida, o próximo mês ensina a aplicá-la no próprio site.',
  },
  {
    week: 5,
    month: 2,
    pillar: 'confianca',
    objective:
      'Ensinar o empresário a auditar o próprio site com olhar crítico em poucos minutos.',
    metric: 'Salvamentos',
    narrative:
      'Abre o mês de credibilidade com autodiagnóstico. Do método (C1) aos sintomas (C2) e à causa estrutural (C3).',
    carousels: [
      {
        title: 'Como avaliar seu próprio site em 5 minutos',
        angle:
          'Roteiro de auditoria simples que dispensa qualquer conhecimento técnico.',
      },
      {
        title: 'Sinais de que seu site parece amador',
        angle:
          'Detalhes que o dono não enxerga mais, mas o visitante percebe de imediato.',
      },
      {
        title: 'Por que o cliente não acha o que procura',
        angle:
          'Quando tudo tem o mesmo destaque, nada tem destaque.',
      },
    ],
    reels: [
      {
        title: 'Diagnóstico em 5 minutos',
        angle:
          'Roteiro cronometrado: abrir, olhar, anotar, decidir.',
      },
      {
        title: 'O erro do "tudo importante ao mesmo tempo"',
        angle:
          'Demonstração de uma tela poluída sendo reduzida ao essencial.',
      },
    ],
    storyFocus:
      'Caixinha aberta: "Manda o link do seu site que eu aponto o primeiro ajuste."',
    bridge:
      'A auditoria costuma apontar o mesmo culpado inicial: as imagens.',
  },
  {
    week: 6,
    month: 2,
    pillar: 'confianca',
    objective:
      'Mostrar que a qualidade das imagens define a percepção de qualidade do negócio.',
    metric: 'Compartilhamentos',
    narrative:
      'Aprofunda o primeiro achado da auditoria. Termina com um checklist prático de fotos para o empresário executar sozinho.',
    carousels: [
      {
        title: 'Fotos ruins derrubam a percepção de qualidade',
        angle:
          'O cliente transfere a impressão da foto para o produto e para o atendimento.',
      },
      {
        title: 'Foto real ou banco de imagens: quando usar cada uma',
        angle:
          'Critério simples para não parecer genérico nem improvisado.',
      },
      {
        title: 'O que fotografar no seu negócio',
        angle:
          'Checklist de registros que aumentam confiança: espaço, equipe, entrega e detalhe.',
      },
    ],
    reels: [
      {
        title: 'Troque uma foto e mude a percepção',
        angle:
          'Antes e depois de uma seção usando apenas a substituição da imagem.',
      },
      {
        title: 'O que a foto da fachada diz',
        angle:
          'Leitura rápida de como o cliente interpreta a imagem de entrada.',
      },
    ],
    storyFocus:
      'Enquete: "Suas fotos são próprias ou de banco de imagens?"',
    bridge:
      'Imagem cuida da percepção; a próxima camada de confiança vem de quem já comprou.',
  },
  {
    week: 7,
    month: 2,
    pillar: 'confianca',
    objective:
      'Fazer o empresário usar prova social de forma estratégica, não decorativa.',
    metric: 'Salvamentos',
    narrative:
      'Sai da estética e entra na validação externa. Do que funciona (C1) ao posicionamento (C2) e ao método de coleta (C3).',
    carousels: [
      {
        title: 'Depoimentos que convencem e os que ninguém lê',
        angle:
          'A diferença entre elogio genérico e relato específico com resultado.',
      },
      {
        title: 'Onde colocar avaliações no seu site',
        angle:
          'Prova social perto da decisão vale mais do que prova social no rodapé.',
      },
      {
        title: 'Como pedir um depoimento sem constranger o cliente',
        angle:
          'Três perguntas prontas que geram respostas úteis em menos de um minuto.',
      },
    ],
    reels: [
      {
        title: 'O depoimento genérico não funciona',
        angle:
          'Comparação entre "atendimento ótimo" e um relato com contexto e número.',
      },
      {
        title: 'Prova social em 15 segundos',
        angle:
          'Como transformar uma avaliação em elemento visual do site.',
      },
    ],
    storyFocus:
      'Caixinha: "Qual foi o melhor elogio que você já recebeu de um cliente?"',
    bridge:
      'Prova social precisa de consistência visual para ser levada a sério — e isso é identidade.',
  },
  {
    week: 8,
    month: 2,
    pillar: 'confianca',
    objective:
      'Mostrar que consistência visual comunica organização e maturidade da empresa.',
    metric: 'Alcance',
    narrative:
      'Encerra o mês conectando todos os sinais anteriores em um conceito único: identidade coerente entre site, perfil e material.',
    carousels: [
      {
        title: 'Por que consistência visual gera confiança',
        angle:
          'Quando tudo parece da mesma empresa, o cliente assume que há organização por trás.',
      },
      {
        title: 'Logo não é marca',
        angle:
          'A diferença entre um símbolo e o conjunto de sinais que a empresa emite.',
      },
      {
        title: 'O que suas cores e letras comunicam',
        angle:
          'Leitura simples de como escolhas visuais criam expectativa de preço e seriedade.',
      },
    ],
    reels: [
      {
        title: 'Sua marca parece a mesma em todo lugar?',
        angle:
          'Comparar cartão, perfil e site lado a lado para expor a inconsistência.',
      },
      {
        title: 'Consistência custa pouco e vale muito',
        angle:
          'Padronizar três elementos já muda a percepção de porte da empresa.',
      },
    ],
    storyFocus:
      'Enquete: "Seu site e seu Instagram parecem da mesma empresa?"',
    bridge:
      'Com credibilidade construída, falta resolver o problema anterior: ser encontrado.',
  },
  {
    week: 9,
    month: 3,
    pillar: 'encontrabilidade',
    objective:
      'Mapear como o cliente realmente procura por serviços antes de decidir.',
    metric: 'Salvamentos',
    narrative:
      'Abre o mês de busca explicando o comportamento do cliente antes de falar de qualquer ferramenta.',
    carousels: [
      {
        title: 'Onde seu cliente procura antes de comprar',
        angle:
          'O caminho real: pesquisa, comparação e confirmação social.',
      },
      {
        title: 'Busca e indicação: dois caminhos, dois preparos',
        angle:
          'Quem chega por indicação já confia; quem chega pela busca precisa ser convencido.',
      },
      {
        title: 'Aparecer no Google não é sorte',
        angle:
          'É consequência de informação organizada e atualizada sobre o negócio.',
      },
    ],
    reels: [
      {
        title: 'Pesquise seu serviço mais a sua cidade',
        angle:
          'Teste ao vivo mostrando quem aparece e quem não aparece.',
      },
      {
        title: 'Quem aparece primeiro leva a ligação',
        angle:
          'A vantagem prática de estar entre os primeiros resultados locais.',
      },
    ],
    storyFocus:
      'Enquete: "Sua empresa aparece quando você pesquisa seu serviço + cidade?"',
    bridge:
      'O primeiro ativo de busca não é o site: é o perfil da empresa no Google.',
  },
  {
    week: 10,
    month: 3,
    pillar: 'encontrabilidade',
    objective:
      'Levar o empresário a completar e corrigir o perfil da empresa no Google.',
    metric: 'Comentários',
    narrative:
      'Semana de ação prática. Tudo é executável no mesmo dia, sem depender de contratar ninguém.',
    carousels: [
      {
        title: 'Seu perfil no Google está completo?',
        angle:
          'Campos que a maioria das empresas locais deixa vazio e o efeito disso.',
      },
      {
        title: 'As informações que fazem o cliente ligar',
        angle:
          'Horário, forma de pagamento, serviços e fotos recentes decidem o contato.',
      },
      {
        title: 'Endereço e horário errados custam clientes',
        angle:
          'O prejuízo silencioso de uma informação desatualizada.',
      },
    ],
    reels: [
      {
        title: '3 campos que quase ninguém preenche',
        angle:
          'Tour rápido pelos campos ignorados e o impacto de cada um.',
      },
      {
        title: 'Atualize isso hoje',
        angle:
          'Tarefa de cinco minutos com resultado imediato na busca local.',
      },
    ],
    storyFocus:
      'Checklist em três stories: horário, serviços e fotos — com enquete de conclusão.',
    bridge:
      'Perfil ajustado, o próximo passo é organizar o próprio site para a busca.',
  },
  {
    week: 11,
    month: 3,
    pillar: 'encontrabilidade',
    objective:
      'Explicar organização de conteúdo para busca sem usar termo técnico algum.',
    metric: 'Salvamentos',
    narrative:
      'Traduz estrutura de site para linguagem de negócio: uma página por serviço, com as palavras do cliente.',
    carousels: [
      {
        title: 'Por que uma página por serviço funciona melhor',
        angle:
          'Página específica responde à pesquisa específica que o cliente faz.',
      },
      {
        title: 'Use as palavras do cliente, não as suas',
        angle:
          'O nome técnico do serviço raramente é o termo pesquisado.',
      },
      {
        title: 'Perguntas frequentes trabalham por você',
        angle:
          'Conteúdo que responde dúvidas atrai busca e reduz atendimento repetitivo.',
      },
    ],
    reels: [
      {
        title: 'Você chama de um jeito, ele pesquisa de outro',
        angle:
          'Exemplos reais de descompasso entre o nome interno e o termo popular.',
      },
      {
        title: 'Uma página, um serviço',
        angle:
          'Por que juntar tudo em uma página só reduz as chances de ser encontrado.',
      },
    ],
    storyFocus:
      'Caixinha: "Como seu cliente chama o serviço que você vende?"',
    bridge:
      'Conteúdo organizado precisa agora de reputação local para se destacar.',
  },
  {
    week: 12,
    month: 3,
    pillar: 'encontrabilidade',
    objective:
      'Mostrar como reputação local influencia a escolha entre concorrentes próximos.',
    metric: 'Compartilhamentos',
    narrative:
      'Fecha o ciclo de busca tratando do fator que a empresa não controla sozinha: as avaliações públicas.',
    carousels: [
      {
        title: 'Como aparecer para quem está perto',
        angle:
          'Sinais que indicam ao buscador que sua empresa atende aquela região.',
      },
      {
        title: 'Avaliações: o ativo que você não controla',
        angle:
          'Volume, recência e resposta pesam mais do que uma nota perfeita.',
      },
      {
        title: 'Como responder uma avaliação negativa',
        angle:
          'Estrutura de resposta que preserva a reputação e demonstra postura.',
      },
    ],
    reels: [
      {
        title: 'Bairro mais serviço é intenção de compra',
        angle:
          'Quem pesquisa com localização está pronto para contratar.',
      },
      {
        title: 'A resposta vale mais que a crítica',
        angle:
          'Quem lê avaliação negativa está avaliando a reação da empresa.',
      },
    ],
    storyFocus:
      'Enquete: "Você responde as avaliações que recebe?" (Sempre / Às vezes / Nunca)',
    bridge:
      'Três meses de fundamentos pedem um fechamento com diagnóstico consolidado.',
  },
  {
    week: 13,
    month: 3,
    pillar: 'decisao',
    objective:
      'Consolidar o primeiro trimestre em um diagnóstico único e priorizado.',
    metric: 'Salvamentos',
    narrative:
      'Semana de síntese. Transforma 12 semanas em um plano de ação de uma página e prepara a virada para experiência de uso.',
    carousels: [
      {
        title: 'Checklist do primeiro trimestre',
        angle:
          'Todos os pontos de confiança e busca reunidos em uma lista verificável.',
      },
      {
        title: 'Se você só puder fazer uma coisa, faça esta',
        angle:
          'Critério de priorização para quem tem pouco tempo e pouco orçamento.',
      },
      {
        title: 'Os erros que mais apareceram em 12 semanas',
        angle:
          'Padrões repetidos nos sites analisados e o que eles têm em comum.',
      },
    ],
    reels: [
      {
        title: 'Três meses em 30 segundos',
        angle:
          'Recapitulação rápida dos marcos do trimestre.',
      },
      {
        title: 'Por onde começar',
        angle:
          'A primeira tarefa recomendada para cada tipo de negócio.',
      },
    ],
    storyFocus:
      'Sequência de recapitulação com link para os posts mais salvos do trimestre.',
    bridge:
      'Sabendo o que corrigir, o próximo trimestre entra na experiência real de uso: o celular.',
  },
]
