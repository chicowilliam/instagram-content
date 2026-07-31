# Assets — estratégia Swiss Tech Editorial

As quatro referências anexadas **não entram** nesta pasta.
Elas vivem apenas na análise (`docs/reference-style-analysis.md`).

## Pastas

| Pasta | Conteúdo permitido | Uso |
|---|---|---|
| `photography/` | Fotografias locais com licença ou fornecidas pelo usuário | Slide 5, retratos, objetos reais |
| `cutouts/` | PNGs com alpha (recortes) | Oclusão tipográfica, protagonistas |
| `interfaces/` | Screenshots de sites fictícios gerados pelo próprio projeto | Protagonista dos Slides 1–3 |
| `textures/` | Grão, papel, meiotom, ruído | Bases e máscaras |
| `symbols/` | SVG de adesivos, setas, marcas | Acentos Y2K controlados (≤5%) |
| `technical/` | SVG de barcode auxiliar, brackets, hachuras | Modo Cyber Technical |
| `references/` | **Vazio no produto.** Apenas links/notas internas se necessário | Nunca exportado |

## Regras

1. Nenhuma URL remota no momento do export (Unsplash, Pinterest, CDN).
2. Preferir interfaces renderizadas em React (`WebsiteFragment`) a screenshots externos.
3. Quando um screenshot for necessário, gerar via Playwright e salvar em `interfaces/`.
4. CSS organiza composição. CSS não finge ser fotografia 3D.
5. Sem foto local no Slide 5: tipografia assume o protagonismo.
