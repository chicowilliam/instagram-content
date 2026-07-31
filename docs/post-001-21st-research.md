# Post 001 — 21st MCP Research (Fase 2)

Pesquisas exatas solicitadas. Metadata apenas — **nenhum `get_component` / instalação**.

---

## Pesquisa 1 — `editorial asymmetric hero typography browser mockup`

| # | Componente | ID | Estático? | Animação? | 1080×1350? | Dashboard/Bento? | Veredito |
|---|---|---|---|---|---|---|---|
| 1 | Editorial Image Hero | 19077 | Sim | Baixa | Bom (escala tipográfica) | Não | **Candidato** |
| 2 | Editorial Collage Hero | 19074 | Sim | Baixa | Bom | Não (colagem) | Candidato secundário |
| 3 | Modern Hero Section | 5156 | Parcial | Médio | Ruim no feed | Collage SaaS | Rejeitado |
| 4 | Hero (sam344334) | 11413 | ? | ? | Incerto | — | Sem descrição útil |
| 5 | Minimalist Hero | 4582 | Sim | Baixa | Bom | Não | Útil p/ tipografia, pouco “web” |
| 6 | Hero with Dashboard Mockup | 19068 | Não ideal | CTA animado | Não | **Dashboard** | **Rejeitado** |
| 7 | Hero with Mockup | 1492 | Não | Glow + stagger | SaaS genérico | Mockup flutuante | **Rejeitado** |
| 8 | Editorial Hero | 19075 | Sim | Baixa | Bom | Não | Candidato |

### O que acrescentariam
- **Editorial Image Hero / Editorial Hero:** assimetria tipográfica, serif de destaque, tagline lateral, composição de revista — matéria-prima para a capa cartaz.
- **Não ditam** a direção: usamos só princípios (hierarquia, alinhamento, crop), não o layout HTML completo.

---

## Pesquisa 2 — `before after website comparison browser window`

| # | Componente | ID | Estático? | Animação? | 1080×1350? | Notas | Veredito |
|---|---|---|---|---|---|---|---|
| 1 | Browser | 5942 | **Sim** | Não | Excelente | Frame realista | **Candidato** |
| 2 | Browser Simulator | 5620 | Sim | Não | Médio | Tabs detalhadas demais | Opcional |
| 3 | Safari (Magic UI) | 1241 | Sim | Não | Bom | Já temos BrowserMockup | Princípio só |
| 4 | Compare | 1080 | **Não** | Drag obrigatório | Ruim em PNG | Depende de interação | **Rejeitado** |
| 5 | Safari_01 | 4117 | Sim | Não | Bom | Frame macOS | Redundante |
| 6 | Image Comparison | 1466 | **Não** | Slider | Ruim em PNG | Hover/drag | **Rejeitado** |
| 7 | Comparison Slider + Highlights | 19262 | **Não** | Drag | Ruim | Sidebar + slider | **Rejeitado** |
| 8 | Domain Stack | 22059 | Sim | Não | Bom | Empilhamento editorial | Candidato secundário |

### O que acrescentariam
- **Browser:** chrome limpo para encaixar “sites” fictícios (improvisado vs intencional) sem dashboard.
- **Domain Stack:** ideia de camadas/recorte — útil como metáfora, sem instalar.

---

## Escolha final (máx. 2) — sem instalar

1. **Editorial Image Hero (19077)** — princípios: tipografia assimétrica, serif de ênfase, ritmo de revista.
2. **Browser (5942)** — princípios: frame estático para comparação de sites; adaptar via `BrowserCrop` / mockup local.

**Não usados como ditadores da arte.**  
**Não instalados.** Quota de código preservada.

---

## Próximo

Fase 3 — tokens Editorial Web Intelligence + `src/components/editorial/` + 3 variantes (S1+S2).

---
---

# Round 2 — SWISS TECH EDITORIAL

Buscas exatas do novo brief. **Nenhum `get_component`, nenhuma instalação, nenhuma quota consumida.**  
Previews baixados e inspecionados visualmente antes do veredito.

## Busca 1 — `editorial typography image cutout hero poster`

| Componente | ID | PNG estático | Hover/anim. | 1080×1350 | Veredito |
|---|---|---|---|---|---|
| **Minimalist Hero** | 4582 | Sim | Nenhuma | Recompõe bem | **ESCOLHIDO** |
| Editorial Image Hero | 19077 | Sim | Nenhuma | Fraco | Rejeitado |
| Editorial Hero | 19075 | Sim | Nenhuma | Fraco | Rejeitado |
| Editorial Collage Hero | 19074 | Sim | Nenhuma | Médio | Rejeitado |
| Split Hero With Image Cards | 19078 | Sim | Nenhuma | — | Rejeitado |
| Modern Hero Section | 5156 | Parcial | Float | — | Rejeitado |
| Hero Section (floral) | 5260 | Não | Animado | — | Rejeitado |
| Hero Shutter Text | 9989 | **Não** | Animação é o componente | — | Rejeitado |

### Por que 4582 e não os "Editorial *"

Inspecionei os previews. Os três `Editorial *` de `felipemenezes098` são a mesma família: **banda de imagem + banda de texto**, headline serif alinhada à direita. São elegantes, mas:

- imagem e tipografia **nunca se cruzam** — zero oclusão, que é o princípio central da referência GAZU;
- headline serif em duas linhas longas viola nossa regra de serif;
- em 1080×1350 a banda de imagem esmaga o texto ou vice-versa.

O `Minimalist Hero` (4582) é o único que executa o princípio GAZU de verdade:

1. retrato monocromático **recortado**, ocupando o centro-direita;
2. tipografia display gigante (`less is more.`) **atravessada pela cabeça do sujeito** — oclusão real;
3. **círculo amarelo chapado** atrás do recorte, funcionando como campo de cor, não como gradiente;
4. satélites nos cantos (wordmark, nav, micro-texto, social) mantendo o grid respirando;
5. preto absoluto + monocromia + **uma** cor saturada.

### Princípios extraídos (matéria-prima, não layout)

- **Campo de cor chapado atrás do recorte** → nosso `ImageMask` com forma sólida em cobalto ou vermelho
- **Oclusão tipografia ↔ objeto** → `OverlapHeadline` + `MassiveWord` em camadas
- **Uma cor saturada em fundo monocromático** → regra “uma base, uma principal, uma tensão”
- **Satélites de canto** → `SlideCounter`, `BrandSignature`, `TechnicalLabel`

### O que muda para não ser cópia

| 4582 | Nosso |
|---|---|
| Retrato de pessoa | Recorte de **navegador com site real renderizado** |
| Círculo amarelo | Forma chapada em cobalto/vermelho, geometria diferente |
| `less is more.` (slogan) | `IMPRESSÃO` (conteúdo, palavra-chave da mensagem) |
| Fundo preto + nav de site | Warm paper + microtipografia mono técnica |
| Landscape 1024×769 | Portrait 1080×1350, composição reconstruída |

**Não instalado.** Nenhuma linha de código de 4582 entra no projeto.

## Busca 2 — `browser mockup website comparison asymmetric`

| Componente | ID | PNG estático | Hover/anim. | Veredito |
|---|---|---|---|---|
| **Safari (magicui)** | 1241 | Sim | Nenhuma | **ESCOLHIDO** |
| Safari (designali) | 1111 | Sim | Nenhuma | Duplicata conceitual |
| Browser Simulator | 5620 | Sim | Nenhuma | Rejeitado — chrome dark decorativo, redundante |
| Great UI MacBook Mockup | 23323 | Sim | Nenhuma | Rejeitado — já temos `MacBookMockup` |
| Great UI Mobile Mockup | 23322 | Sim | Nenhuma | Rejeitado — já temos `IPhoneMockup` |
| Iphone Mockup | 6475 | Sim | Nenhuma | Rejeitado — redundante |
| Section With Mockup | 1913 | **Não** | framer-motion + parallax de scroll | Rejeitado |
| Image Comparison | 1466 | **Não** | Slider arrastável | Rejeitado |

### Por que 1466 Image Comparison foi rejeitado, apesar de ser "comparação"

Era o resultado mais óbvio para o Slide 3 e é o mais errado:

1. depende de **arrastar** — no export estático congela em 50% arbitrário;
2. produz exatamente **dois retângulos divididos por uma linha vertical**, proibido pelo brief;
3. o preview confirma: o split corta a headline no meio, gerando texto ilegível (`UI kit to mal|e beautiful`).

A comparação do Slide 3 precisa ser percebida **antes da leitura**, por diagonal e sobreposição. Um slider não entrega isso.

### Por que 1241 Safari

O preview mostra apenas **o chrome vazio** com área de conteúdo cinza. É exatamente o que queremos: uma moldura honesta, sem opinião sobre o conteúdo. Nós fornecemos o site.

Princípios extraídos:
- proporção de chrome real (barra ~11–12% da altura da janela)
- semáforo de 3 pontos à esquerda
- barra de URL em pílula centralizada com cadeado
- borda de 1px e conteúdo sem padding

Adaptação: incorporados ao `BrowserCutout`, que difere do `BrowserMockup` já existente por ser **objeto de pôster** — recortável, inclinável, sangrando fora do canvas, com tratamento monocromático opcional. O `BrowserMockup` continua sendo o mockup limpo para outros posts.

**Não instalado.** Nenhuma linha de código de 1241 entra no projeto.

## Conclusão do Round 2

Escolhidos: **1 por busca**, conforme o limite.

Nenhum dos dois dita a direção de arte. Ambos entram como princípio de composição dentro de `src/components/art-direction/`, sob os pesos 50/30/15/5 do contrato.
