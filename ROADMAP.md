# Roadmap

Legenda: ✅ concluído · 🟡 parcial · ⬜ não iniciado

> Sempre que uma feature for concluída, marcar aqui na mesma entrega.

## Núcleo

- ✅ **Dashboard** — biblioteca de conteúdo, estatísticas, menu lateral, recentes
- ✅ **Biblioteca** — catálogo central, cartões de post, detalhe, registro escalável
- ✅ **Design System** — tokens, componentes UI, superfícies, tipografia
- ✅ **Mockups** — Browser, Window, iPhone, MacBook, Dashboard, Editor
- ✅ **Microanimações** — motion, tailwindcss-animate e scroll suave no CMS
- ✅ **Tokens semânticos** — radius, spacing, shadow, blur, opacity, border, texto e animação
- ✅ **Backgrounds** — Aurora, Noise, Mesh, Grid, Gradient, Glow, Spotlight, Beam, Pattern
- ✅ **Assets** — textures, noise, mesh, glow, patterns, illustrations, icons, logos
- ✅ **Modo noturno** — Light / Dark / System no CMS; canvases de post isolados
- 🟡 **21st.dev MCP** — servidor ativo e autenticado; uso sob demanda para referência visual
- 🟡 **Analytics** — composição da biblioteca pronta; falta registro de desempenho por publicação
- ✅ **Templates** — 10 templates oficiais + seleção automática por brief

## Produção

- ✅ **Exportador PNG** — Playwright, carrossel 1080×1350, qualidade máxima
- ✅ **Exportador Stories** — 1080×1920, pasta dedicada e espelho global
- ✅ **Thumbnails** — geração automática a partir do slide 01
- 🟡 **Gerador de Reels** — roteiro, tempo, gancho, legenda e CTA automáticos; falta edição no CMS
- ✅ **Gerador de Legenda** — legenda, CTA, comentário fixado e horário
- ✅ **Gerador de Hashtags** — separadas por alta, média e baixa concorrência
- ✅ **Scaffold de post** — `create-post` gera brief, copy, strategy, meta e Post.tsx

## Planejamento

- ✅ **Calendário** — 12 meses, 52 semanas, validação anti-repetição
- ✅ **Fluxo de status** — IDEA → BRIEF → COPY → DESIGN → REACT → PREVIEW → READY → PUBLISHED
- ✅ **Ideias** — inbox de temas antes da produção

## Próximas features

- 🟡 **Sistema Editorial Instagram** — regra persistente, estrutura de registros e plano W32 prontos; falta migrar calendário/CMS legado de 2 para 1 Reel semanal
- ✅ **Background + Brand Signature System** — 4 camadas de fundo, 4 assinaturas, 3 opções em `/variants` e `SignatureFooterMinimal` aplicada aos 5 slides
- 🟡 **Swiss Editorial System** — slides 02–03 corrigidos (Aura ruim×boa, review em `/post/001/review`); faltam PNGs reais em `public/assets/comparisons/` e polish do Slide 01
- ✅ **Swiss Tech Editorial (Post 001)** — capa A (GAZU) aprovada; 5 slides + 3 stories; `visualConcept` em `docs/post-001-visual-concepts.md`; B/C preservadas em `/variants`
- 🟡 **Visual Engine** — contrato em `VISUAL_ENGINE.md` (hero object, metáfora, environment, tensão, `visualConcept`, anti-card, teste visual, stack Lucide/Rough/Motion/Sharp/SVG/21st); faltam Rough.js + Sharp, biblioteca temática em `visuals/` e tipo `visualConcept` no pipeline
- ⬜ **Rough.js** — anotações manuais (círculos, setas) estáticas no export
- ⬜ **Sharp** — pipeline de textura, recorte e otimização de PNGs nos scripts de export/assets
- ✅ **Tech Editorial Premium** — tokens `techEditorial`, biblioteca `visuals/` (18 elementos), Post 001 refatorado, 3 variantes de capa em `/post/001/variants`, export estático
- ⬜ **IA** — geração assistida de brief, copy por slide e variações de gancho
- ⬜ **Mood Board** — combinar referências curadas e derivar preset visual
- ⬜ **Design Engine** — mesmo Design System gerando LinkedIn, X, Pinterest, PDF, thumbnails e propostas
- ⬜ **Desempenho por publicação** — registro manual de alcance, salvamentos e comentários
- ⬜ **Migração de tokens** — substituir utilitários crus pelos tokens semânticos nos componentes antigos
- ⬜ **Agendamento** — data de publicação e fila semanal no dashboard
- ⬜ **Edição no CMS** — alterar brief e copy pela interface, sem editar arquivos
- ⬜ **Duplicar e excluir** — ações reais nos cartões de post
- ⬜ **Migração completa** — posts 002–010 para a estrutura `posts/AAAA/MM-mes/`
- ⬜ **Publicação** — registro de publicação e arquivamento automático
