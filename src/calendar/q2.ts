import type { CalendarWeek } from './types'

/** Semanas 14–26 · Experiência no celular, velocidade e conversão */
export const q2: CalendarWeek[] = [
  {
    week: 14,
    month: 4,
    pillar: 'experiencia',
    objective:
      'Convencer o empresário de que o celular, não o computador, é onde o cliente decide.',
    metric: 'Compartilhamentos',
    narrative:
      'Abre o trimestre com a constatação de que dono e cliente olham telas diferentes. Do dado (C1) ao sintoma (C2) e ao teste prático (C3).',
    carousels: [
      {
        title: 'Seu site foi feito para o computador. Seu cliente usa o celular.',
        angle:
          'A maior parte dos acessos vem do celular, mas a aprovação do projeto acontece no desktop.',
      },
      {
        title: 'O que quebra no celular e você não vê',
        angle:
          'Elementos que funcionam na tela grande e falham na tela pequena.',
      },
      {
        title: 'O teste do polegar',
        angle:
          'Se não dá para usar com uma mão só, o cliente desiste antes de contratar.',
      },
    ],
    reels: [
      {
        title: 'Abra seu site no celular agora',
        angle:
          'Gravação de tela real mostrando o que o cliente encontra.',
      },
      {
        title: 'Botão pequeno, cliente perdido',
        angle:
          'Demonstração de toque errado repetido até a desistência.',
      },
    ],
    storyFocus:
      'Enquete: "Você já abriu o site da sua empresa pelo celular esta semana?"',
    bridge:
      'Reconhecido o problema, a prioridade é o que mais importa no celular: facilitar o contato.',
  },
  {
    week: 15,
    month: 4,
    pillar: 'conversao',
    objective:
      'Reduzir o esforço entre o cliente decidir falar com a empresa e conseguir falar.',
    metric: 'Mensagens diretas',
    narrative:
      'Semana operacional. Cada publicação remove um obstáculo diferente no caminho até o contato.',
    carousels: [
      {
        title: 'Telefone que não disca, endereço que não abre o mapa',
        angle:
          'Informações que existem no site mas não funcionam quando tocadas.',
      },
      {
        title: 'WhatsApp no site: como fazer certo',
        angle:
          'Posição, mensagem inicial e expectativa de resposta.',
      },
      {
        title: 'Formulário curto converte mais',
        angle:
          'Cada campo extra é um motivo a mais para o visitante desistir.',
      },
    ],
    reels: [
      {
        title: 'Um toque para falar com você',
        angle:
          'Comparação entre contato em um toque e contato em cinco etapas.',
      },
      {
        title: 'Cada campo a mais é um cliente a menos',
        angle:
          'Formulário longo sendo reduzido ao essencial na tela.',
      },
    ],
    storyFocus:
      'Caixinha: "Quantos toques até alguém falar com sua empresa pelo site?"',
    bridge:
      'Contato facilitado não resolve se o cliente não conseguir ler a página.',
  },
  {
    week: 16,
    month: 4,
    pillar: 'experiencia',
    objective:
      'Mostrar que legibilidade e conforto visual são parte do atendimento.',
    metric: 'Salvamentos',
    narrative:
      'Fecha o ciclo técnico do mobile pelo ângulo humano: quem é o cliente e como ele enxerga.',
    carousels: [
      {
        title: 'Texto pequeno demais afasta cliente',
        angle:
          'Conforto de leitura influencia o tempo de permanência e a decisão.',
      },
      {
        title: 'Quando o design bonito atrapalha',
        angle:
          'Contraste insuficiente em nome da estética prejudica a compreensão.',
      },
      {
        title: 'Acessibilidade é atendimento',
        angle:
          'Ajustes simples que ampliam o público sem mudar a identidade visual.',
      },
    ],
    reels: [
      {
        title: 'Se precisa dar zoom, está errado',
        angle:
          'Demonstração de leitura em condições reais de uso.',
      },
      {
        title: 'Seu cliente tem 50 anos?',
        angle:
          'Simulação de como a mesma tela é percebida por públicos diferentes.',
      },
    ],
    storyFocus:
      'Enquete: "Qual a idade média do seu cliente?" com desdobramento sobre tamanho de texto.',
    bridge:
      'Com os problemas mapeados, a semana seguinte entrega o checklist consolidado.',
  },
  {
    week: 17,
    month: 4,
    pillar: 'experiencia',
    objective:
      'Entregar um checklist de celular que o empresário consiga aplicar sozinho.',
    metric: 'Salvamentos',
    narrative:
      'Semana de consolidação do mês. Transforma quatro semanas de diagnóstico em uma rotina de verificação.',
    carousels: [
      {
        title: 'Checklist de celular em 7 itens',
        angle:
          'Verificação completa que cabe em cinco minutos e não exige ferramenta.',
      },
      {
        title: 'O que testar antes de publicar qualquer página',
        angle:
          'Rotina mínima de conferência antes de colocar algo no ar.',
      },
      {
        title: 'Erros de celular que aparecem toda semana',
        angle:
          'Padrões recorrentes encontrados em sites de comércio e serviço local.',
      },
    ],
    reels: [
      {
        title: 'Sete itens, cinco minutos',
        angle:
          'Checklist narrado sobre gravação de tela.',
      },
      {
        title: 'O teste que quase ninguém faz',
        angle:
          'Abrir o site usando dados móveis em vez de wi-fi.',
      },
    ],
    storyFocus:
      'Um item do checklist por story, com enquete de conclusão no último.',
    bridge:
      'O último teste, com dados móveis, revela o tema do próximo mês: velocidade.',
  },
  {
    week: 18,
    month: 5,
    pillar: 'experiencia',
    objective:
      'Ligar lentidão de carregamento diretamente a perda de cliente.',
    metric: 'Compartilhamentos',
    narrative:
      'Abre o mês de desempenho com consequência antes de causa. Primeiro o prejuízo, depois a origem.',
    carousels: [
      {
        title: 'Site lento é cliente perdido',
        angle:
          'O visitante não espera: ele volta e clica no concorrente seguinte.',
      },
      {
        title: 'Quanto tempo seu cliente espera de verdade',
        angle:
          'A paciência real em conexão móvel é menor do que o dono imagina.',
      },
      {
        title: 'Onde a lentidão nasce',
        angle:
          'As três causas mais comuns explicadas sem termo técnico.',
      },
    ],
    reels: [
      {
        title: 'Três segundos e ele volta para a busca',
        angle:
          'Contagem regressiva sobre uma tela carregando.',
      },
      {
        title: 'Lentidão custa dinheiro',
        angle:
          'Tradução de tempo de espera em contatos não recebidos.',
      },
    ],
    storyFocus:
      'Enquete: "Quanto tempo você espera um site abrir?" (1s / 3s / 5s / mais)',
    bridge:
      'A causa número um da lentidão tem nome: imagens pesadas.',
  },
  {
    week: 19,
    month: 5,
    pillar: 'experiencia',
    objective:
      'Ensinar o empresário a preparar imagens antes de publicá-las.',
    metric: 'Salvamentos',
    narrative:
      'Aprofunda a principal causa apontada na semana anterior e entrega o procedimento correto.',
    carousels: [
      {
        title: 'A foto de 8 MB que derruba seu site',
        angle:
          'Como uma única imagem direto da câmera compromete a página inteira.',
      },
      {
        title: 'Como preparar imagens antes de publicar',
        angle:
          'Tamanho, formato e proporção em um procedimento repetível.',
      },
      {
        title: 'Qualidade visual e peso: o equilíbrio',
        angle:
          'É possível manter nitidez reduzindo drasticamente o carregamento.',
      },
    ],
    reels: [
      {
        title: 'Sua foto pesa quanto?',
        angle:
          'Verificação rápida do peso de um arquivo antes do envio.',
      },
      {
        title: 'Mesma imagem, dez vezes mais leve',
        angle:
          'Comparação lado a lado sem perda perceptível de qualidade.',
      },
    ],
    storyFocus:
      'Caixinha: "Você redimensiona as fotos antes de subir no site?"',
    bridge:
      'Resolvidas as imagens, sobra o excesso de recursos instalados.',
  },
  {
    week: 20,
    month: 5,
    pillar: 'experiencia',
    objective:
      'Mostrar que excesso de recursos visuais atrapalha mais do que ajuda.',
    metric: 'Comentários',
    narrative:
      'Fecha o diagnóstico de lentidão com o argumento da simplicidade, que também sustenta a identidade do perfil.',
    carousels: [
      {
        title: 'Os complementos que travam seu site',
        angle:
          'Recursos instalados "por garantia" que cobram um preço em desempenho.',
      },
      {
        title: 'Animação bonita ou site usável?',
        angle:
          'Quando o efeito visual atrasa a informação que o cliente veio buscar.',
      },
      {
        title: 'Menos recursos, mais resultado',
        angle:
          'A simplicidade como decisão estratégica, não como limitação.',
      },
    ],
    reels: [
      {
        title: 'Cada enfeite tem um custo',
        angle:
          'Demonstração de carregamento com e sem recursos supérfluos.',
      },
      {
        title: 'O site mais rápido é o mais simples',
        angle:
          'Comparação entre página enxuta e página cheia de elementos.',
      },
    ],
    storyFocus:
      'Enquete: "Seu site tem carrossel de banners na primeira tela?"',
    bridge:
      'Além do que está na página, importa também onde o site está hospedado.',
  },
  {
    week: 21,
    month: 5,
    pillar: 'experiencia',
    objective:
      'Explicar hospedagem, disponibilidade e segurança em linguagem de negócio.',
    metric: 'Salvamentos',
    narrative:
      'Encerra o mês com a camada invisível. Traduz infraestrutura para risco operacional e reputação.',
    carousels: [
      {
        title: 'Onde seu site "mora" faz diferença',
        angle:
          'A estrutura por trás determina velocidade, estabilidade e suporte.',
      },
      {
        title: 'Hospedagem barata sai cara',
        angle:
          'O custo real de instabilidade, lentidão e atendimento inexistente.',
      },
      {
        title: 'O cadeado do navegador e a confiança do cliente',
        angle:
          'O aviso de "site não seguro" afasta o visitante antes da primeira leitura.',
      },
    ],
    reels: [
      {
        title: 'Site fora do ar é loja fechada',
        angle:
          'A analogia direta entre indisponibilidade e porta trancada.',
      },
      {
        title: 'Segurança visível gera confiança',
        angle:
          'O que o cliente vê no navegador e como interpreta.',
      },
    ],
    storyFocus:
      'Enquete: "Seu site já ficou fora do ar sem você saber?"',
    bridge:
      'Com um site rápido e estável, chega a pergunta central: ele está gerando contato?',
  },
  {
    week: 22,
    month: 6,
    pillar: 'conversao',
    objective:
      'Definir conversão em linguagem de negócio e deslocar o foco de visitas para contatos.',
    metric: 'Comentários',
    narrative:
      'Abre o mês de conversão redefinindo o indicador de sucesso do site.',
    carousels: [
      {
        title: 'Visitas não pagam conta. Contatos sim.',
        angle:
          'Por que número de acessos é um indicador enganoso sozinho.',
      },
      {
        title: 'O que é conversão, em português',
        angle:
          'Definição prática: a ação que aproxima o visitante de virar cliente.',
      },
      {
        title: 'Qual é o próximo passo do seu site?',
        angle:
          'Todo site precisa de um pedido claro; a maioria não faz nenhum.',
      },
    ],
    reels: [
      {
        title: 'Seu site pede alguma coisa?',
        angle:
          'Navegação por uma página inteira sem encontrar um convite à ação.',
      },
      {
        title: 'Visita não é cliente',
        angle:
          'Comparação entre movimento na loja e venda registrada.',
      },
    ],
    storyFocus:
      'Caixinha: "Quantos contatos seu site gerou no último mês?"',
    bridge:
      'Definido o próximo passo, ele precisa estar visível — e isso é botão.',
  },
  {
    week: 23,
    month: 6,
    pillar: 'conversao',
    objective:
      'Ensinar a construir chamadas para ação que o cliente entende e usa.',
    metric: 'Salvamentos',
    narrative:
      'Semana tática, com exemplos substituíveis imediatamente no site do empresário.',
    carousels: [
      {
        title: 'Botões que funcionam',
        angle:
          'Texto, tamanho e posição que transformam intenção em clique.',
      },
      {
        title: '"Saiba mais" é o pior botão do mundo',
        angle:
          'Alternativas específicas que dizem exatamente o que vai acontecer.',
      },
      {
        title: 'Um objetivo por página',
        angle:
          'Quando a página oferece cinco caminhos, o visitante não escolhe nenhum.',
      },
    ],
    reels: [
      {
        title: 'Troque o texto do botão',
        angle:
          'Três substituições rápidas com ganho imediato de clareza.',
      },
      {
        title: 'Onde o botão precisa estar',
        angle:
          'Posições que acompanham a decisão do visitante durante a leitura.',
      },
    ],
    storyFocus:
      'Enquete: qual botão você clicaria — "Saiba mais" ou "Ver preços e prazos".',
    bridge:
      'Mesmo com o botão certo, o cliente só age quando as dúvidas somem.',
  },
  {
    week: 24,
    month: 6,
    pillar: 'conversao',
    objective:
      'Antecipar objeções que impedem o contato antes que elas apareçam.',
    metric: 'Compartilhamentos',
    narrative:
      'Aprofunda a psicologia da decisão e prepara o terreno para o tema de preço no site.',
    carousels: [
      {
        title: 'As 5 dúvidas que travam a decisão',
        angle:
          'Preço, prazo, garantia, experiência e suporte — nessa ordem de peso.',
      },
      {
        title: 'Responda a objeção antes que ela apareça',
        angle:
          'Onde posicionar cada resposta ao longo da página.',
      },
      {
        title: 'Preço no site: mostrar ou não?',
        angle:
          'Critério por tipo de negócio, com alternativas como faixa de investimento.',
      },
    ],
    reels: [
      {
        title: 'A dúvida que ele não te pergunta',
        angle:
          'A objeção silenciosa que faz o visitante sair sem contato.',
      },
      {
        title: 'Transparência acelera decisão',
        angle:
          'Por que informação clara filtra e qualifica ao mesmo tempo.',
      },
    ],
    storyFocus:
      'Caixinha: "Qual é a pergunta que seus clientes mais fazem antes de fechar?"',
    bridge:
      'Quando existe campanha ou anúncio, a conversão exige uma página dedicada.',
  },
  {
    week: 25,
    month: 6,
    pillar: 'conversao',
    objective:
      'Mostrar quando uma página única de campanha supera o site institucional.',
    metric: 'Salvamentos',
    narrative:
      'Introduz o formato de página de campanha como serviço, conectando conversão a investimento em divulgação.',
    carousels: [
      {
        title: 'Quando você precisa de uma página só',
        angle:
          'Situações em que o site completo atrapalha em vez de ajudar.',
      },
      {
        title: 'Campanha sem página de destino é dinheiro perdido',
        angle:
          'Levar anúncio para a página inicial dilui a intenção do clique.',
      },
      {
        title: 'Anatomia de uma página que converte',
        angle:
          'Sequência de blocos que conduz da promessa até o contato.',
      },
    ],
    reels: [
      {
        title: 'Não mande anúncio para a página inicial',
        angle:
          'Demonstração do desperdício de atenção em três telas.',
      },
      {
        title: 'Uma página, um objetivo',
        angle:
          'Comparação entre página focada e página genérica.',
      },
    ],
    storyFocus:
      'Enquete: "Você já investiu em anúncio?" com desdobramento sobre o destino do clique.',
    bridge:
      'Metade do ano cumprida: hora de medir o que mudou desde janeiro.',
  },
  {
    week: 26,
    month: 6,
    pillar: 'decisao',
    objective:
      'Fechar o semestre com balanço e uma lista de correções rápidas.',
    metric: 'Salvamentos',
    narrative:
      'Semana de consolidação semestral. Reúne confiança, busca, experiência e conversão em um único plano.',
    carousels: [
      {
        title: 'Balanço: seis meses de presença digital',
        angle:
          'Os quatro pilares trabalhados até aqui e o que cada um resolveu.',
      },
      {
        title: 'O que mudou no seu site desde janeiro?',
        angle:
          'Comparação honesta entre intenção e execução no primeiro semestre.',
      },
      {
        title: 'As 10 correções mais rápidas do semestre',
        angle:
          'Ajustes de alto impacto que levam menos de uma hora cada.',
      },
    ],
    reels: [
      {
        title: 'Meio ano em 30 segundos',
        angle:
          'Retrospectiva dos marcos e das principais lições.',
      },
      {
        title: 'O que fazer no próximo semestre',
        angle:
          'Prioridades sugeridas conforme o estágio de cada empresa.',
      },
    ],
    storyFocus:
      'Retrospectiva em stories com os conteúdos mais salvos do semestre.',
    bridge:
      'Com a estrutura resolvida, o segundo semestre começa pelo que preenche o site: o texto.',
  },
]
