# Post 001 — Visual Audit

**Direção atual:** Tech Editorial Premium (Hybrid Premium como capa padrão)  
**Direção proposta:** Editorial Web Intelligence  
**Data:** 2026-07-30  
**Fonte analisada:** PNGs exportados em `exports/post-001/` + `src/posts/feature-grid/` + variantes Hybrid/Dark/Editorial

---

## 1. Problemas encontrados

### Identidade e diferenciação
- Estética genérica de startup SaaS (navy + glow + cards arredondados).
- Pouca personalidade de marca; qualquer desenvolvedor poderia publicar o mesmo carrossel.
- Baixa diferenciação frente a perfis de “web design tips” no Instagram.
- O post parece tela de produto, não peça de campanha.

### Cor e atmosfera
- Excesso de azul-marinho / violeta / ciano em todos os slides.
- Glow radial repetido como atalho de “premium”.
- Gradientes usados como solução automática de profundidade.
- Quase nenhum uso de tensão cromática (alerta / contraste quente).

### Composição (“card soup”)
- Slides 02–04 dependem de cards arredondados empilhados.
- Slide 03 é um bento grid clássico (1 tile grande + 2 pequenos).
- Slide 02 usa três cards de fluxo + dois cards de comparação = cinco containers.
- Slide 04 transforma checklist em lista administrativa + medidor.
- Bordas arredondadas onipresentes; falta contraste entre formas duras e suaves.

### Tipografia e escala Instagram
- Títulos grandes o suficiente no desktop, mas a hierarquia se dilui com badges e footers monótonos.
- Pouco contraste tipográfico (quase só sans).
- Serif editorial quase ausente; falta “palavra-chave” memorável.
- Labels e footers próximos do limite de leitura em miniatura (~270×338).

### Conteúdo visual e metáfora
- Mockups internos são blocos abstratos (bento skeleton), sem relação com negócio real.
- Sem elemento humano, comercial ou de “empresa local”.
- Estatísticas inventadas: **94%** (capa) e **88%** (checklist) — não verificáveis.
- TrustMeter / progress bar reforçam linguagem de dashboard, não de autoridade editorial.
- Pouca variação entre slides: mesma atmosfera dark + glow + card.

### Narrativa e público
- Progressão existe (problema → princípios → CTA), mas visualmente parece cinco telas do mesmo app.
- Pouca conexão emocional com empresário: não mostra “improvisado vs intencional” de forma visceral.
- CTA final (“Salve este checklist”) é útil, mas o encerramento ainda parece produto, não posicionamento de pessoa.

### Espaço
- Capa Hybrid: metade superior tipográfica ok; dock inferior parece painel de analytics.
- Slide 05: grande vazio central sem tensão editorial — só “espaço sobrando”.
- Elementos raramente cortam a borda; tudo contido e previsível.

---

## 2. Elementos que podem ser preservados

| Elemento | Motivo |
|---|---|
| Contrato técnico 1080×1350 / 1080×1920 | Export Playwright e PostCanvas |
| Nomes de slide (`post001-hook`, etc.) | Compatibilidade de export |
| Assinatura Vinícius William | Continuação de marca |
| Progressão 01/05 | Leitura de carrossel |
| Ideia “primeira impressão / confiança” | Estratégia do brief original |
| Conceitos Clareza · Cuidado · Direção | Mensagem forte; precisa de nova forma |
| Browser mockup como metáfora de site | Adequado ao público empresário |
| Isolamento CMS vs canvas (`data-post-canvas`) | Não vazar dark mode do CMS |
| `data-export-mode="true"` | Congelamento estático já existe |
| Rota `/post/001/variants` | Já serve para comparação de capas |

---

## 3. Elementos que devem ser removidos

### Remoção visual imediata
- `TrustMeter` e qualquer percentual fictício (94%, 88%, “leitura em 3s”).
- Glow aurora / violet halo como fundo padrão.
- Bento grid como composição principal.
- Três cards iguais para etapas ou princípios.
- Skeleton abstrato de dashboard dentro do browser.
- Cards de checklist com anéis tracejados “inspect UI”.
- CodeFragment / presença.ts na capa (afasta empresário).
- Paleta `te-*` como identidade exclusiva do Post 001 (permanece no DS, mas não governa esta peça).

### Remoção de linguagem de produto
- Badges pill genéricos em todo slide.
- Footer mono idêntico em todos os frames (pode existir, mas precisa de variação editorial).
- CTA de “salvar checklist” como clímax do post (reposicionar para continuidade / posicionamento).

### Componentes genéricos identificados no código
- `DecisionFlow` (card soup de etapas)
- `TrustMeter`
- `GlowSpot` em excesso
- `VisualComparison` em formato card/card
- Layouts Hybrid Premium / Dark Tech como referência de qualidade

---

## 4. Riscos de parecer genérico (mesmo na nova direção)

1. Trocar navy/roxo por “papel + azul” e manter os mesmos cards.
2. Usar serif só como enfeite, sem hierarquia real.
3. Criar “before/after” com dois cards arredondados lado a lado.
4. Importar componente 21st e deixar ele ditar a arte.
5. Adicionar crop marks / grain em tudo até virar filtro Instagram.
6. Inventar outro número (“+37% conversão”) no lugar do 94%.
7. Manter mockups sem conteúdo de negócio real (cafeteria/clínica fictícia).
8. Centralizar tudo e “respeitar padding” demais.

---

## 5. Nova estratégia visual — Editorial Web Intelligence

### Síntese de referências (obrigatória)
| Tipo | Referência | Contribuição |
|---|---|---|
| Landing | GAZU / fashion editorial heroes | Escala tipográfica, imagem como foco, assimetria |
| Branding | Identidade tech com cor sinal | Cobalt + Signal Orange; energia sem neon |
| Editorial | Swiss poster / revista contemporânea | Diagonais, recortes, palavra gigante, anotações |
| UI | Browser crop + comparação de sites | Metáfora de web design, não dashboard |

### Contrato visual
- **Ink Black** para contraste e campanha.
- **Warm Paper** para páginas editoriais.
- **Cobalt Blue** como assinatura tecnológica (não glow).
- **Signal Orange** para problema / tensão.
- **Acid Lime** só em microdetalhe.
- Tipografia: sans forte (Geist/Archivo) + **Instrument Serif** em 1 palavra-chave por slide.
- Proibido: card soup, bento, percentuais inventados, glow onipresente.
- Cada slide = uma metáfora visual + progressão narrativa.

### Separação
- CMS continua software.
- Posts viram peças Instagram / campanha.

---

## 6. Nova narrativa do carrossel

```
IMPACTO → PROBLEMA → COMPARAÇÃO → PRINCÍPIOS → POSICIONAMENTO
```

| Slide | Função | Mensagem | Metáfora visual |
|---|---|---|---|
| 01 Capa | Interromper scroll | “Antes de ler tudo, seu cliente já formou uma **impressão**.” | Cartaz tipográfico + recorte de interface anotado |
| 02 Problema | Diagnóstico | “O problema não é ser pequeno. É parecer improvisado.” | Improvisado vs intencional (sem cards iguais) |
| 03 Comparação | Prova visual | “Mesmo negócio. Duas percepções completamente diferentes.” | Dois browsers do mesmo negócio fictício |
| 04 Princípios | Método | “Clareza. Cuidado. Direção.” | Composição editorial vertical/diagonal |
| 05 Posicionamento | Pessoa + continuidade | “Um bom site… precisa fazer sua empresa parecer confiável.” | Assinatura tipográfica / foto local se existir |

Stories e Reel ficam para a Fase 5 (após aprovação das variantes S1/S2).

---

## 7. Mapa de remoção / substituição (código)

| Atual | Destino |
|---|---|
| `CoverHybridPremium` / Dark / Editorial Colorful | Substituídas por variantes Editorial Paper / High-Contrast / Hybrid Web Audit |
| `TrustMeter` no post | Removido do Post 001 |
| `DecisionFlow` | Removido; comparação tipográfica + recortes |
| `GlowSpot` dominante | Removido ou residual mínimo |
| `visuals/` genéricos no post | Biblioteca nova `src/components/editorial/` |
| Copy de capa antiga | Nova copy editorial (preservar brief estratégico, não o wording visual atual) |

---

## 8. Critério de sucesso da Fase 1

Esta auditoria está completa quando:
- [x] Screenshots analisados
- [x] Problemas nomeados sem eufemismo
- [x] Remoções listadas (incluindo 94%/88%)
- [x] Estratégia e narrativa definidas
- [x] Fase 2: buscas 21st específicas
- [x] Fase 3–4: variantes S1/S2 + miniaturas + notas

---

# Addendum — Auditoria sob o contrato SWISS TECH EDITORIAL

**Data:** 2026-07-30 (revisão)  
**Contrato:** `docs/reference-style-analysis.md` — 50% Editorial Fashion · 30% Swiss · 15% Cyber Technical · 5% Y2K  
**Fonte:** leitura direta de `src/posts/feature-grid/index.tsx`, `src/components/visuals/`, `src/components/editorial/`, `src/styles/index.css`

## 9. Evidência no código (não impressão, linha por linha)

`src/posts/feature-grid/index.tsx` viola o contrato de forma verificável:

| Linha | Evidência | Regra violada |
|---|---|---|
| 63, 99, 170, 232 | `surface="techEditorial"` em 4 de 5 slides → fundo `#0b1020` navy | “fundo azul-marinho genérico” |
| 68, 104, 236, 281, 309, 337 | 6× `GlowSpot` violet/accent/cyan | “glow em todos os elementos” |
| 119, 136, 148 | 3 cards `rounded-[32px]` / `rounded-[28px]` em bento `col-span-7 + col-span-5` | “bento grids tradicionais”, máx. 2 radius |
| 189 | Checklist gera N cards `rounded-[24px]` em loop | card soup |
| 81 | `DecisionFlow` = 3 etapas em caixas | “três caixas iguais lado a lado” |
| 220, 320 | `TrustMeter value={88}` / `value={91}` | **números inventados** |
| 211–217 | Skeleton abstrato de dashboard dentro da janela | “interfaces abstratas sem propósito” |
| 73, 109, 179 | Títulos em 52px / 48px no canvas de 1080×1350 | contrato pede 80–150px |
| 32–35, 120, 137, 149 | Ícones `lucide` dentro de tiles | “ícones pequenos dentro de quadrados” |
| 372–381 | `TeBadge` pill em todos os slides | excesso de caixas |

**Diagnóstico numérico:** o slide mais denso tem **9 containers com border-radius**. O contrato permite **2**.

**Escala tipográfica:** o maior título do post é 52px. O contrato exige mínimo de 80px para display, com palavra de fundo podendo passar de 180px. Estamos a **35% da escala necessária**.

**Protagonista visual:** nenhum slide tem objeto protagonista real. `BrowserScene` e `FloatingWindow` são retângulos com barras `bg-white/25` — decoração, não conteúdo. Nenhum representa um site de negócio reconhecível.

## 10. O que a tentativa anterior (Editorial Web Intelligence) já resolveu

Não é lixo e não será jogado fora:

| Ativo | Estado | Destino |
|---|---|---|
| Tokens `--editorial-ink`, `--editorial-paper` | Corretos | Mantidos |
| `--color-swiss-red`, `--color-tech-blue`, `--color-tech-pink`, `--color-acid-lime` | Já existem em `index.css` | Promovidos a tokens semânticos nomeados |
| Fontes Archivo / Instrument Serif / Geist Mono | Já carregadas no `index.html` | Cobrem as 3 funções tipográficas |
| `src/components/editorial/` (7 arquivos, ~540 linhas) | Parcialmente aproveitável | **Consolidado** em `art-direction/` |
| `Barcode.tsx`, `pattern-checker`, `sticker-outline` | Já existem | Reaproveitados no modo Cyber / Y2K |
| `PostCanvas` + `data-export-mode` + isolamento de dark mode | Sólido | Intocado |

### Decisão de arquitetura: consolidar, não duplicar

A regra do projeto proíbe componentes duplicados. O brief pede `src/components/art-direction/` com `CropMarks`, `EditorialCaption`, `BrandSignature`, `SlideCounter` — e `src/components/editorial/` **já tem** `CropMarks`, `EditorialCaption`, `BrandSignature`, `SlideProgress`.

Criar as duas pastas geraria quatro pares duplicados. Portanto:

- `src/components/editorial/` é **renomeado/absorvido** em `src/components/art-direction/`
- `SlideProgress` → `SlideCounter` (nome do novo contrato)
- Componentes sem função no novo contrato (`VisualQuestion`, `SelectionHighlight`) são descartados
- `src/components/visuals/` permanece disponível para outros posts, mas **não governa o Post 001**

Trade-off: as variantes `editorial/Variant*.tsx` da tentativa anterior perdem a base de imports. Como elas serão substituídas pelas três novas capas nesta mesma entrega, o custo é zero.

## 11. Riscos específicos desta nova direção

1. **Texto vertical ilegível na miniatura.** `IMPROVISADO` rotacionado a 90° em ~270px de largura. Mitigação: o texto vertical nunca carrega a mensagem sozinho.
2. **Etiqueta técnica sem dado real.** Toda `TechnicalLabel` deve codificar informação verdadeira: slide, formato, data, post id, modo. Nunca serial inventado.
3. **Palavra gigante sem protagonista.** É o risco maior do modo Editorial Fashion. Mitigação: nenhum slide entrega sem objeto visual.
4. **Y2K vazando.** Mitigação: cor viva limitada a ≤10% da área e só no Slide 4.
5. **Fonte remota no export.** Archivo/Instrument Serif vêm do Google Fonts. Se o Playwright rodar offline, o display cai para Arial e a composição quebra. Registrado como dívida a resolver antes do export final.

**Próximo passo:** duas buscas no 21st MCP, sem instalação automática.
