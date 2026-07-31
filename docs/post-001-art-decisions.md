# Post 001 — Art Decisions

Registro obrigatório: referência, princípio, adaptação, anti-cópia e por quê.

**Direção:** SWISS TECH EDITORIAL  
**Capa aprovada:** A — GAZU EDITORIAL (2026-07-30)  
**Status:** carrossel completo (5 slides + 3 stories)

Conceitos: `docs/post-001-visual-concepts.md`  
Análise: `docs/reference-style-analysis.md`

---

## Contrato de pesos

| Referência | Peso | Modo |
|---|---|---|
| GAZU · Minimal Fashion Editorial | 50% | `EDITORIAL_FASHION` |
| Swiss Poster | 30% | `SWISS_DISRUPTION` |
| NX-07 · Cyber Technical | 15% | `CYBER_TECHNICAL` |
| Bento Grid Y2K | 5% | `NEO_Y2K_MODULAR` (só Slide 4) |

---

## Slide 1 · Capa — GAZU EDITORIAL ✓

| Campo | Decisão |
|---|---|
| Referência dominante | GAZU (50%) |
| Princípio | Wordmark ocluído por recorte, monocromia, papel |
| Adaptação | `IMPRESSÃO` + browser Casa Nôa dessaturado |
| Anti-cópia | Sem pessoa/marca GAZU; fio vermelho = única tensão |
| Conteúdo | Site real como metáfora de impressão digital |

## Slide 2 · Problema — SWISS_DISRUPTION

| Campo | Decisão |
|---|---|
| Referência dominante | Swiss Poster |
| Princípio | Vertical vermelho + objeto anotado |
| Adaptação | `IMPROVISADO` vertical + site improvisado + 4 anotações UX |
| Anti-cópia | Sem avião; defeitos reais de web |
| Conteúdo | Empresário reconhece o site bagunçado antes de ler |

## Slide 3 · Demonstração — comparação diagonal

| Campo | Decisão |
|---|---|
| Referência dominante | Swiss + anti Image-Comparison |
| Princípio | Sobreposição — diferença antes da leitura |
| Adaptação | A fundo / B atravessa; mesma cafeteria |
| Anti-cópia | Proibido split 50/50 |
| Conteúdo | Prova visual de intenção |

## Slide 4 · Princípios — NEO_Y2K_MODULAR controlado

| Campo | Decisão |
|---|---|
| Referência dominante | Y2K 5% |
| Princípio | Módulos irregulares com identidade própria |
| Adaptação | Cobalt / lime / vermelho angular — zero cards iguais |
| Anti-cópia | Sem adesivos aleatórios; metáforas tipográficas |
| Conteúdo | Energia pontual, não linguagem do perfil |

## Slide 5 · Apresentação — EDITORIAL_FASHION

| Campo | Decisão |
|---|---|
| Referência dominante | GAZU |
| Princípio | Nome como assinatura tipográfica |
| Adaptação | `VINÍCIUS` gigante + William serif cobalt; sem foto inventada |
| Anti-cópia | CTA tipográfico, sem orçamento |
| Conteúdo | Pessoa + continuidade |

---

## Arquitetura

| Decisão | Motivo |
|---|---|
| `Post.tsx` próprio | FeatureGrid = direção SaaS abandonada |
| `DefaultCover = CoverGazuEditorial` | Escolha A |
| B/C em `/variants` | Referência histórica |
| Export names | hook / problema / comparacao / principios / apresentacao |

---

## Refinamento final — fundo + assinatura

### Background System

Todos os cinco slides passaram a usar quatro camadas:

1. Base: paper ou ink do modo dominante.
2. Textura: grão local + noise suave.
3. Estrutura: grid editorial, crop/corner marks e registration marks.
4. Atmosfera: painel, ghost word, shape cortado, numeral desbotado e acento.

Cada slide usa uma combinação diferente; nenhum aplica todos os efeitos.

### Mockups

- Slide 01: rotação de 2°, sombra difusa + sombra dura, shape cobalt atrás.
- Slide 02: sombra projetada alinhada ao ângulo do browser e linha de auditoria.
- Slide 03: sobreposição diagonal preservada; fundo recebeu zona de contraste.

### Assinatura escolhida

`SignatureFooterMinimal` foi aplicada aos cinco slides:

- `VINÍCIUS WILLIAM`
- descriptor curto `WEB DEVELOPER`
- progresso central
- domínio `VINICIUSWILLIAM.DEV` sem `@`
- categoria/edição no eixo direito

Alternativas expostas em `/post/001/variants`: `SignatureLabel` e
`SignatureDomain`. `SignatureVertical` permanece disponível para próximos posts.
