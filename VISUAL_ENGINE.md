# VISUAL ENGINE — SISTEMA DE DIREÇÃO DE ARTE TEMÁTICA

A partir de agora, nenhum slide poderá ser criado apenas com:

- título;
- subtítulo;
- cards;
- ícones;
- fundo genérico.

Cada slide precisa possuir uma CONCEPÇÃO VISUAL relacionada diretamente ao conteúdo.

O objetivo não é apenas organizar texto.

O objetivo é transformar cada ideia em uma composição visual memorável.

============================================================

# PRINCÍPIO FUNDAMENTAL

Antes de criar qualquer slide, responda internamente:

1. Qual é a ideia principal?
2. Qual é a metáfora visual dessa ideia?
3. Qual objeto pode representar essa metáfora?
4. Qual cenário pode reforçar o conceito?
5. Qual contraste pode ser mostrado?
6. O usuário entenderia parte da mensagem sem ler o texto?

Não escreva código antes de responder essas perguntas.

============================================================

# ESTRUTURA VISUAL OBRIGATÓRIA

Cada slide deve possuir:

1. HERO OBJECT

Um elemento visual protagonista.

Exemplos:

- navegador;
- computador;
- celular;
- interface;
- estabelecimento;
- recibo;
- gráfico;
- escudo;
- arquitetura;
- código;
- busca;
- mapa;
- objeto conceitual;
- pessoa recortada;
- ilustração.

O Hero Object deve ocupar aproximadamente 30% a 70% do canvas.

Não use o objeto como uma miniatura dentro de um card.

Ele deve participar da composição.

------------------------------------------------------------

2. VISUAL METAPHOR

A composição deve possuir uma metáfora visual.

Exemplos:

- site como vitrine;
- domínio como endereço próprio;
- protótipo como maquete;
- arquitetura como estrutura de um prédio;
- velocidade como corrida;
- SEO como mapa;
- confiança como acabamento;
- conversão como caminho;
- preço como construção modular;
- segurança como proteção;
- experiência como jornada.

Não apenas escreva a metáfora.

Mostre-a visualmente.

------------------------------------------------------------

3. ENVIRONMENT

Crie um ambiente visual coerente.

Exemplos:

- mesa de trabalho;
- cenário editorial;
- pôster;
- blueprint;
- janela de navegador;
- vitrine;
- página de busca;
- composição industrial;
- composição cyber;
- folha de orçamento;
- grid arquitetônico;
- painel de análise;
- espaço tridimensional abstrato.

O fundo não deve ser apenas uma cor sólida com glow.

------------------------------------------------------------

4. SUPPORTING DETAILS

Inclua detalhes narrativos relacionados ao conteúdo.

Exemplos:

- cursor;
- seleção;
- círculos;
- anotações;
- setas;
- números;
- labels;
- códigos;
- marcações;
- réguas;
- coordenadas;
- linhas;
- conexões;
- notificações;
- barras;
- carimbos;
- selos.

Os detalhes precisam reforçar a história.

Não utilize decoração aleatória.

------------------------------------------------------------

5. VISUAL TENSION

Todo slide deve apresentar algum contraste ou tensão.

Exemplos:

- improvisado × profissional;
- lento × rápido;
- alugado × próprio;
- protótipo × produto;
- desorganizado × claro;
- invisível × encontrado;
- visitante × cliente;
- custo × valor;
- aparência × estrutura.

A tensão precisa ser percebida visualmente.

============================================================

# REGRA ANTI-CARD

Cards não são proibidos.

Entretanto, cards só podem ser utilizados quando representarem:

- módulos reais;
- etapas;
- funcionalidades;
- opções;
- janelas;
- informações que precisam de agrupamento.

É proibido utilizar cards apenas porque existe texto para colocar.

Antes de criar um card, pergunte:

“O conteúdo precisa realmente de um contêiner?”

Quando não precisar, utilize:

- tipografia;
- imagem;
- escala;
- posição;
- contraste;
- linha;
- sobreposição;
- textura;
- composição.

Não utilize mais de três cards tradicionais em um slide.

Não utilize três cards iguais lado a lado como solução automática.

============================================================

# SISTEMA DE ASSETS TEMÁTICOS

Crie uma biblioteca reutilizável:

src/components/visuals/

devices/
- LaptopScene
- DesktopScene
- PhoneScene
- BrowserScene
- MultiDeviceScene

web/
- BrowserStack
- WebsiteFragment
- WebsiteComparison
- SearchResultScene
- DomainScene
- LandingPageScene
- FormScene

business/
- StorefrontScene
- CustomerJourney
- PricingReceipt
- LeadNotification
- BusinessGrowthScene
- AppointmentScene

performance/
- SpeedometerScene
- LoadingTimeline
- PerformanceRace
- BeforeAfterSpeed

security/
- SecurityShield
- DataProtectionScene
- AuthenticationLayers
- SecureArchitecture

ai/
- PrototypeScene
- ProductArchitecture
- AIWorkflow
- PrototypeVsProduct
- AutomationScene

code/
- CodeWindow
- ArchitectureDiagram
- APILayers
- DatabaseScene
- ComponentTree

patterns/
- CircuitPattern
- SearchPattern
- BlueprintPattern
- EditorialGrid
- DotMatrix
- SpeedLines
- ConnectionMesh
- Halftone
- PaperGrid
- TechnicalCoordinates

annotations/
- Arrow
- Circle
- Underline
- Selection
- Cursor
- Label
- Stamp
- Warning
- Measurement
- CropMark

Cada elemento deve possuir variantes coerentes com o Design System.

============================================================

# FUNÇÃO visualConcept

Cada slide deve possuir um objeto de configuração:

visualConcept: {
  topic,
  mainIdea,
  metaphor,
  heroObject,
  environment,
  supportingDetails,
  backgroundPattern,
  visualContrast,
  dominantStyle,
  palette,
  composition
}

Exemplo:

visualConcept: {
  topic: "Instagram substitui um site?",
  mainIdea: "Plataforma alugada versus propriedade digital",
  metaphor: "Loja alugada versus sede própria",
  heroObject: "PhoneVsBrowserScene",
  environment: "DigitalStorefront",
  supportingDetails: [
    "chave",
    "placa de endereço",
    "cursor",
    "domínio"
  ],
  backgroundPattern: "EditorialGrid",
  visualContrast: "dependência versus controle",
  dominantStyle: "Swiss Tech Editorial",
  palette: "paper-cobalt-red",
  composition: "asymmetric-split"
}

Esse planejamento deve acontecer antes da implementação.

============================================================

# VARIAÇÃO ENTRE SLIDES

Dentro de um mesmo carrossel, evite repetir:

- a mesma composição;
- o mesmo fundo;
- o mesmo mockup;
- o mesmo tipo de card;
- o mesmo posicionamento de título;
- o mesmo padrão visual.

Crie ritmo.

Exemplo:

Slide 1:
pôster tipográfico com objeto protagonista.

Slide 2:
comparação visual.

Slide 3:
cena temática.

Slide 4:
diagrama editorial.

Slide 5:
composição humana ou assinatura de marca.

Todos pertencem à mesma identidade, mas possuem funções diferentes.

============================================================

# OBJETOS TEMÁTICOS POR ASSUNTO

SEO:

- Google Search fictício;
- lupa;
- mapa;
- palavras-chave;
- links;
- indexação;
- resultados;
- posição.

PERFORMANCE:

- cronômetro;
- velocímetro;
- timeline;
- página pesada;
- página rápida;
- corrida;
- progresso.

CONFIANÇA:

- vitrine;
- acabamento;
- selo;
- assinatura;
- fachada;
- alinhamento;
- consistência.

PREÇO:

- recibo;
- módulos;
- calculadora;
- orçamento;
- camadas;
- escopo.

LOVABLE E IA:

- protótipo;
- maquete;
- arquitetura;
- blocos;
- blueprint;
- banco de dados;
- autenticação;
- testes.

SITE VERSUS INSTAGRAM:

- terreno próprio;
- loja alugada;
- endereço;
- chave;
- feed;
- navegador;
- domínio.

CONVERSÃO:

- jornada;
- caminho;
- funil;
- botão;
- formulário;
- notificação;
- lead.

SEGURANÇA:

- escudo;
- autenticação;
- dados;
- cadeado;
- barreira;
- camadas.

============================================================

# PADRÕES SVG

Não utilize o mesmo padrão em todos os slides.

Escolha padrões relacionados ao conceito.

Os padrões devem ser gerados localmente com SVG ou CSS.

Não dependa de links externos.

Eles precisam funcionar corretamente no Playwright.

Utilize opacidade baixa e contraste controlado.

O padrão deve criar contexto, não competir com o conteúdo.

============================================================

# REALISMO TÉCNICO

Não tente criar objetos fotográficos complexos utilizando apenas divs.

Utilize React, SVG e CSS para:

- interfaces;
- browsers;
- computadores estilizados;
- diagramas;
- padrões;
- ícones;
- elementos gráficos;
- ilustrações geométricas.

Quando o conceito exigir:

- pessoa;
- ambiente real;
- produto real;
- objeto 3D complexo;

utilize um asset local com licença adequada ou uma imagem criada especificamente para o projeto.

Não invente fotografias através de formas genéricas.

============================================================

# TESTE VISUAL

Antes de aprovar um slide, verifique:

1. Existe um objeto protagonista?
2. Existe uma metáfora visual?
3. O fundo possui intenção?
4. Os detalhes reforçam o conteúdo?
5. Existe contraste narrativo?
6. O slide funciona sem os textos menores?
7. Ele parece uma publicação ou uma tela de dashboard?
8. Ele é diferente do slide anterior?
9. Ele funciona em miniatura?
10. Existe algo memorável?

Caso três ou mais respostas sejam negativas, refaça a composição.

============================================================

# REGRA FINAL

Nunca entregue um slide que possa ser resumido como:

“Texto em cima e cards embaixo.”

Nunca entregue um slide em que remover os textos deixe apenas caixas vazias.

O visual precisa continuar contando parte da história mesmo sem o texto.

O objetivo é criar cenas editoriais temáticas que utilizem:

- tecnologia;
- computadores;
- navegadores;
- interfaces;
- objetos;
- padrões;
- texturas;
- tipografia;
- diagramas;
- metáforas;
- imagens;
- contraste.

A criatividade precisa nascer do assunto.

Não aplique efeitos de maneira aleatória.

============================================================

# STACK DE BIBLIOTECAS

Poucas bibliotecas. Cada uma com responsabilidade clara.

| Biblioteca | Uso | Status no projeto |
|---|---|---|
| **Lucide** (`lucide-react`) | Ícones básicos | ✅ Instalado |
| **Rough.js** | Círculos, setas e anotações com aparência manual | ⬜ Ainda não instalado |
| **Motion** | Apenas no preview do CMS | ✅ Instalado — PNG deve permanecer estático (`data-export-mode`) |
| **Sharp** | Texturas, recortes, composição e otimização de PNGs (scripts Node) | ⬜ Ainda não instalado |
| **SVG próprio** | Padrões, diagramas e cenas temáticas | ✅ Preferência oficial — gerar localmente |
| **21st.dev MCP** | Só para encontrar bases de mockups, heróis e estruturas | ✅ Configurado — pesquisar, adaptar; nunca instalar e deixar ditar a arte |

## Regras de uso

- **Lucide:** ícone como detalhe narrativo, nunca como solução automática de “três cards com ícone”.
- **Rough.js:** anotações humanas (círculo, seta, sublinhado). Export deve renderizar o SVG estático final — sem depender de animação.
- **Motion:** microinteração no CMS. Em canvas de post/export, animação congelada. Se o PNG depender de motion, a composição está errada.
- **Sharp:** pipeline de assets e pós-processamento de export (recorte, textura, otimização). Não substitui React na composição do slide.
- **SVG próprio:** fonte principal de padrões e cenas. Sem CDN, sem URL remota no export.
- **21st:** no máximo busca + princípio. Desmontar e adaptar. Sem `get_component` automático ditando a identidade.

## Proibido agora

- **Three.js**
- **React Three Fiber**
- Qualquer stack 3D em tempo real no canvas do post

Motivo: peso local, complexidade de exportação Playwright e risco de gastar tempo em elementos 3D em vez de composição editorial.

Quando um conceito exigir objeto 3D ou fotografia complexa: usar **asset local** (ver `assets/` e regra de realismo em `VISUAL_ENGINE.md` / `ART_DIRECTION.md`). CSS e React não fingem ser render 3D.

============================================================

# DESIGN RULE — BACKGROUND + BRAND SIGNATURE

Todo slide usa um sistema de fundo em quatro camadas:

1. **Base** — paper, ink ou cor dominante.
2. **Textura** — `EditorialTexture`, com grão local quase invisível.
3. **Estrutura** — grid leve, crop/corner/registration marks, label e coordenadas.
4. **Atmosfera** — painel, palavra fantasma, faixa, shape cortado, numeral ou sombra.

Regras:

- A atmosfera deve explicar ou enquadrar o hero object; nunca ser efeito gratuito.
- Textura não pode reduzir contraste ou legibilidade.
- Grid e microtipografia ficam abaixo da mensagem principal.
- Cada slide deve possuir pelo menos três microdetalhes narrativos.
- Palavra fantasma usa opacidade máxima aproximada de 5%.
- Uma composição não deve usar todos os elementos atmosféricos disponíveis.
- Browser/mockup precisa interagir com sombra, linha, anotação, clipping ou tipografia.

## Assinatura

Variantes oficiais:

- `SignatureFooterMinimal` — padrão para carrosséis; autor, descriptor, progresso e domínio.
- `SignatureLabel` — composições densas que pedem crédito compacto.
- `SignatureVertical` — bordas laterais com pouco espaço horizontal.
- `SignatureDomain` — encerramentos premium e minimalistas.

Regras:

- Preferir `viniciuswilliam.dev` sem `@` em layouts editoriais premium.
- O handle com `@` só aparece quando a função é explicitamente social.
- Assinatura é crédito autoral, não link nem campo de formulário.
- Usar mono/sans discreta, tracking amplo e peso leve.
- Variar a forma da assinatura entre posts; manter nome, domínio e rigor tipográfico.

## Teste adicional

Antes de aprovar:

1. Consigo identificar as quatro camadas do fundo sem que elas compitam?
2. O mockup parece pertencer ao ambiente?
3. A assinatura parece marca, não texto solto?
4. O fundo continua interessante sem o corpo de texto?
5. Em miniatura, hero e headline continuam dominando?

