# Changelog

Todas as mudanças relevantes deste CMS são documentadas aqui.

## [Unreleased]

### Adicionado

- **Aura UX diagnostic asset** — Slide 02 usa imagem bakeada em `public/assets/post-001/aura-ux-diagnostic.png` (sem anotações React)
- **Aura bad crops** — `BadWebsiteHeroCrop`, `BadWebsiteContactCrop`, `BadWebsiteFrame`, `AnnotatedBadWebsite` (clínica estética); Slide 02 usa só o crop do hero
- **Swiss Editorial System** — identidade única dos posts; análise em `docs/swiss-editorial-analysis.md`
- **Palette System** — 6 famílias (`swiss-classic` default do Post 001) em `design-system/swiss-editorial.ts`
- **Mock sites** — `CafeBadWebsite` + `CafeGoodWebsite` (Casa Nôa) como assets reais
- **Brand Signature** — `SignatureFooterSplit` + `SignatureDomainOnly`
- Slides 02–05 do Post 001 realinhados à paleta swiss-classic (sem cobalt/lime/Y2K)
- Plano W32 com **8 Stories** sugeridos por dia

### Adicionado (anterior)

- **Sistema Editorial Instagram** — rotina 3 carrosséis + 1 Reel, Stories sustentáveis, pilares, regra de repost, fluxo de produção, estrutura de registros e plano `2026-W32`
- **Background + Brand Signature System** — fundos em 4 camadas, atmosfera editorial, quatro assinaturas reutilizáveis e footer premium aplicado ao Post 001
- Contrato **Visual Engine** em `VISUAL_ENGINE.md` — concepção temática obrigatória por slide (`visualConcept`, hero object, metáfora, environment, tensão, anti-card, teste visual)
- Stack visual oficial documentada: Lucide ✅ · Motion ✅ (só preview) · SVG próprio ✅ · 21st ✅ · Rough.js ⬜ · Sharp ⬜ · **Three.js/R3F proibidos**
- Direção **Swiss Tech Editorial** — contrato de arte com pesos 50/30/15/5 (Fashion · Swiss · Cyber · Y2K)
- Post 001 completo sob capa **A · GAZU Editorial** — 5 slides + 3 stories; FeatureGrid legado desconectado
- Análise das quatro referências obrigatórias em `docs/reference-style-analysis.md`
- Tokens semânticos `--editorial-ink`, `--editorial-paper`, `--signal-red`, `--electric-cobalt`, `--neon-lime`, `--hot-magenta` + quatro modos reutilizáveis
- Biblioteca `src/components/art-direction/` (tipografia de pôster, marcas técnicas, cutouts, `WebsiteFragment`)
- Três capas do Post 001 (GAZU Editorial, Swiss Disruption, Cyber Tech Editorial) em `/post/001/variants`
- Estratégia de assets em `assets/` + registro de decisões em `docs/post-001-art-decisions.md`
- Round 2 de pesquisa 21st (sem instalação): Minimalist Hero #4582 + Safari #1241 como matéria-prima

### Adicionado (anterior)

- Identidade **Tech Editorial Premium** (tokens `te-*`, superfície `techEditorial`, estilo visual no Design System)
- Biblioteca reutilizável `src/components/visuals/` — 18 elementos estáticos (orb, mesh, noise, flow, mockup scenes, meters, etc.)
- Três variantes de capa do Post 001 (Dark Tech, Editorial Colorful, Hybrid Premium) em `/post/001/variants`
- Capa padrão do Post 001: **Hybrid Premium** (maior média nas notas de impacto/leitura/reuso)
- Refatoração visual completa do Post 001 (5 slides + 3 stories) preservando copy e nomes de exportação
- Modo de exportação estático via `data-export-mode="true"` (congela animações/transições)

### Adicionado (anterior)

- `motion` para microanimações (sucessor do Framer Motion)
- `react-wrap-balancer` para equilíbrio tipográfico
- `tailwindcss-animate` integrado ao Tailwind v4
- `lucide-react` confirmado como biblioteca de ícones oficial
- `lenis` com scroll suave restrito ao shell do CMS
- Família de mockups: Browser, Window, iPhone, MacBook, Dashboard e Editor
- Primitivos compartilhados de mockup para evitar HTML repetido
- Camada de tokens semânticos em `design-system/semantic.ts`
- Backgrounds componentizados: Aurora, Noise, Mesh, Grid, Gradient, Glow, Spotlight, Beam e Pattern
- Utilitários de textura: grade e pontos para superfície clara, além de grain
- Estrutura de assets por tipo de recurso
- Página de Analytics interna com composição da biblioteca
- Modo noturno do CMS (Light / Dark / System) com remapeamento de tokens
- Isolamento de tema: slides de preview/export permanecem na identidade do post
- Configuração do MCP 21st.dev para uso no Cursor

### Planejado para v0.4

- IA para geração assistida de brief
- Copy dividida automaticamente por slides
- Variações de ganchos, legendas e CTAs

---

## [0.3.0] — 2026-07-29

### Adicionado

- Geração obrigatória de três Stories por post
- Estrutura Gancho → Explicação → CTA
- Preview de Stories no CMS
- Exportação PNG em 1080×1920
- Organização global em `exports/stories/`

---

## [0.2.0] — 2026-07-29

### Adicionado

- Exportação automatizada com Playwright
- Comando para exportar um post
- Comando para exportar todos os posts válidos
- PNG de carrossel em 1080×1350
- Thumbnails automáticos
- Manifesto e arquivos complementares do pacote

---

## [0.1.0] — 2026-07-29

### Adicionado

- Dashboard do CMS
- Biblioteca central de conteúdo
- Menu lateral e rotas internas
- Fluxo de produção por status
- Primeiros componentes reutilizáveis do Design System
- Templates iniciais
- Cadastro e preview de posts

