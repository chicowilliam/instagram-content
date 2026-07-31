# Reference Style Analysis — Swiss Tech Editorial

Análise individual das quatro referências obrigatórias.  
As imagens servem **apenas como contrato de direção**. Nenhum elemento (pessoas, avião, capacete, marcas GAZU/LOT/NX-07/DIRTYBARN) entra no produto final.

Pesos definidos: **50% Editorial Fashion · 30% Swiss Poster · 15% Cyber Technical · 5% Y2K controlado**

---

## Referência 1 — GAZU · Minimal Fashion Editorial (peso 50%)

### 1. Composição
Hero de largura total com wordmark gigante `GAZU` centralizado no eixo horizontal e uma figura recortada caminhando **por cima das letras**. A figura oclui parcialmente o `A` e o `Z`, criando profundidade em duas camadas. Elementos satélites nos quatro cantos: tagline em cima à esquerda, CTAs embaixo à esquerda, selo `NEW COLLECTION 2024` à direita. Abaixo, faixa preta invertida com três categorias; depois seção `NEW VIBES` com texto à esquerda e foto à direita.

### 2. Hierarquia tipográfica
Quatro níveis muito separados:
1. Wordmark gigante (domina ~30% da altura do hero)
2. Headline de seção (`NEW VIBES`) bold, duas linhas
3. Micro-labels em caixa alta com tracking largo (`FASHION THAT MOVES WITH YOU.`)
4. Corpo pequeno e discreto

O salto entre nível 1 e nível 3 é brutal — é isso que cria o ar premium.

### 3. Proporção texto / imagem
Hero: aproximadamente **50/50**, mas a tipografia é tão grande que funciona como imagem. A foto ganha protagonismo pela **oclusão**, não pelo tamanho.

### 4. Paleta
Monocromática estrita: quase-preto (~`#0d0d0d`), papel levemente quente (~`#f0efec`), cinzas médios. Fotografia dessaturada. **Zero cor de acento.**

### 5. Contraste
Altíssimo em valor (preto sobre papel), baixíssimo em cor. A ausência de cor é a decisão de marca.

### 6. Espaço negativo
Muito generoso no hero. As letras respiram e o contorno da figura recorta o próprio espaço vazio. O vazio é enquadramento, não sobra.

### 7. Densidade visual
Baixa no hero, média nas seções de grid. Alternância proposital.

### 8. Direção do olhar
A figura caminha da esquerda para a direita, na mesma direção da leitura do wordmark. Depois o olho desce para os CTAs em baixo à esquerda. Movimento reforçando movimento.

### 9. Ritmo
Bandas horizontais alternando claro → preto → claro. A inversão de fundo é o batimento da página.

### 10. Elementos memoráveis
- Wordmark gigante com figura ocluindo as letras
- Faixa preta invertida
- Sublinhado fino em links
- Fotografia sempre em preto e branco

### 11. Reproduzível com React / CSS / SVG
- Tipografia gigante (`font-display`, `font-black`, tracking negativo)
- Oclusão por camadas (`absolute` + `z-index`)
- Inversão de banda (troca de tokens de superfície)
- Small caps com `tracking` largo
- `filter: grayscale(1)` para unificar imagens
- Sublinhado com `underline-offset`

### 12. Depende de fotografia / ilustração / 3D
**Sim, criticamente.** A figura recortada com alpha é o que segura a composição. Sem um asset real com transparência, o hero vira só uma palavra grande num fundo vazio.

### 13. Riscos de cópia superficial
- Palavra gigante **sem** protagonista visual = pôster vazio
- Foto de pessoa aleatória que não tem relação com sites
- Achar que `grayscale` é a direção de arte
- Copiar o wordmark de marca (`GAZU`) — aqui a palavra precisa ser conteúdo (`IMPRESSÃO`), não logo
- Monocromia total pode ficar frio demais para o público empresário

---

## Referência 2 — Swiss Poster · Helvetica / LOT (peso 30%)

### 1. Composição
Assimetria radical. `HELVETICA` em vermelho, rotacionado 90°, colado na borda esquerda ocupando toda a altura. `NEUE` rotacionado no topo. Numerais `1234567890` em vermelho numa diagonal ascendente. Avião fotográfico inclinado no centro, nariz para cima à direita. Cunha preta diagonal no canto superior direito. Escada de pesos (`BOLD MEDIUM REGULAR LIGHT ULTRA LIGHT`) rotacionada em baixo à direita com barra preta.

### 2. Hierarquia tipográfica
1. `HELVETICA` vertical — domina pela altura, não pelo corpo
2. Numerais diagonais
3. Escada de pesos em micro-escala

### 3. Proporção texto / imagem
Cerca de **40% imagem / 60% tipografia**, mas a tipografia opera como imagem. O avião é âncora, não conteúdo.

### 4. Paleta
Três cores apenas: creme quente (~`#ece7dd`), vermelho sinal (~`#c8102e`), quase-preto.

### 5. Contraste
Alto e **cromático**: o vermelho é tensão, não decoração. Aparece em dois lugares e ambos estruturam a composição.

### 6. Espaço negativo
O campo creme central é enorme e o avião flutua nele. O vazio dá velocidade ao objeto.

### 7. Densidade visual
Média, com massa concentrada nas bordas e centro-esquerda relativamente vazio.

### 8. Direção do olhar
Diagonal forte de baixo-esquerda para cima-direita, reforçada por três vetores paralelos: fuselagem, numerais e cunha preta.

### 9. Ritmo
Repetição disciplinada de ângulos: −90° na vertical, ~30–35° nas diagonais. Nada é rotacionado ao acaso.

### 10. Elementos memoráveis
- Tipografia rotacionada colada na borda
- Numerais atravessando a diagonal
- Cunha preta como recorte geométrico
- Escada de pesos como microdetalhe editorial

### 11. Reproduzível com React / CSS / SVG
- `transform: rotate()` e `writing-mode: vertical-rl`
- `clip-path` para a cunha diagonal
- Numerais como bloco rotacionado
- Escada de pesos = spans com `font-weight` diferentes
- Grid de papel com grão sutil

### 12. Depende de fotografia / 3D
**Sim.** O avião é foto real, tratada em cinza. Nossa tradução honesta: **um dispositivo ou janela de navegador real**, inclinado no mesmo eixo — nunca um avião nem um objeto desconectado do tema.

### 13. Riscos de cópia superficial
- Rotacionar texto sem motivo estrutural
- Texto vertical **ilegível na miniatura** do feed (risco alto no Instagram)
- Vermelho como enfeite em vez de tensão
- Referenciar “Helvetica/tipografia” quando o assunto é presença digital de empresas
- Diagonal sem objeto protagonista = composição solta

---

## Referência 3 — NX-07 · Cyber Technical Poster (peso 15%)

### 1. Composição
Campo azul cobalto saturado. Objeto central fotográfico/3D (capacete + jaqueta) escuro com acentos magenta. Logotipo `NX-07` gigante no topo à esquerda. Duas colunas laterais densas de micro-etiquetas. Código de barras no topo à direita. Coordenadas, caixas de ícone, faixa inferior com medidores.

### 2. Hierarquia tipográfica
1. `NX-07` enorme
2. `MODEL 07` / `ISSUE 24` / `VER 2.4` em médio
3. Dezenas de micro-labels mono (equivalente a 8–12px)

O contraste entre nível 1 e nível 3 é o que dá a sensação “ficha técnica”.

### 3. Proporção texto / imagem
Aproximadamente **55% objeto / 45% tipografia técnica**. O objeto domina o centro; o texto cerca.

### 4. Paleta
Cobalto elétrico (~`#0b3cf0`), magenta quente (~`#ff2d8e`), branco, objeto quase-preto, um micro-acento amarelo.

### 5. Contraste
Extremo e saturado. Funciona porque o objeto é escuro e absorve o ruído cromático.

### 6. Espaço negativo
Quase inexistente — mas organizado por colunas e calhas regulares. É denso, não confuso.

### 7. Densidade visual
Altíssima. Sustentada apenas pela disciplina de grid.

### 8. Direção do olhar
Entrada pelo logotipo, depois centro no objeto, depois varredura radial pelas etiquetas.

### 9. Ritmo
Módulos de etiqueta repetidos, hachuras diagonais recorrentes, medidores em série.

### 10. Elementos memoráveis
- Código de barras
- Coordenadas geográficas
- Hachuras diagonais
- Zíper magenta como linha de acento
- Texto secundário em japonês

### 11. Reproduzível com React / CSS / SVG
- Micro-labels mono com tracking largo
- Hachuras via `repeating-linear-gradient`
- Barcode determinístico por seed (**já existe** `Barcode.tsx` no projeto)
- Molduras de canto (brackets)
- Medidores em série
- Fundo chapado saturado

### 12. Depende de fotografia / 3D
**Sim, de forma absoluta.** O capacete é render 3D. Tentar reproduzir com `div` e gradiente resulta em algo amador. Regra de realismo do brief se aplica aqui: usar asset real ou trocar o protagonista.

### 13. Riscos de cópia superficial
- **Texto japonês decorativo** — cosplay cultural sem função e sem significado
- **Números e seriais inventados** — proibido pelo brief; toda etiqueta precisa carregar dado real (slide, formato, data, post id)
- Densidade técnica que **afasta o público empresário** e vira conteúdo “para programador”
- Cobalto + magenta em excesso destrói a percepção de confiabilidade
- Etiquetas técnicas como enfeite = ruído

---

## Referência 4 — Bento Grid Y2K · DIRTYBARN × GRAZIAESTHETICA (peso 5%)

### 1. Composição
Folha de showcase: seis clusters bento sobre preto, cada um com módulos irregulares. Título `BENTO GRID` em lime gigante no topo. Cada cluster mistura recortes, retratos, adesivos e blocos de cor.

### 2. Hierarquia tipográfica
Display gordo com contorno e sombra dura, pesos misturados, tipografia às vezes vazada. Hierarquia é **energia**, não ordem.

### 3. Proporção texto / imagem
Cerca de 50/50, com recortes e retratos dentro dos módulos.

### 4. Paleta
Preto de base + lime neon (~`#b6ff2e`), azul elétrico, laranja-vermelho, roxo, magenta, ciano, além de xadrez preto e branco.

### 5. Contraste
Máximo. Neon sobre preto.

### 6. Espaço negativo
Mínimo dentro dos clusters; as calhas preta funcionam como respiro.

### 7. Densidade visual
Muito alta, deliberadamente saturada.

### 8. Direção do olhar
Não linear. Dispersa por design — o olho salta.

### 9. Ritmo
Módulos de tamanhos irregulares e motivos de adesivo repetidos (estrelas, corações, setas, smiley, xadrez).

### 10. Elementos memoráveis
- Lime neon
- Adesivos e símbolos
- Blobs 3D brancos
- Xadrez
- Tipografia com contorno

### 11. Reproduzível com React / CSS / SVG
- Grid irregular com `span` variável
- Adesivos SVG próprios
- Xadrez via `conic-gradient` (**já existe** `pattern-checker`)
- Contorno via `-webkit-text-stroke` (**já existe** `sticker-outline`)
- Cores chapadas neon

### 12. Depende de fotografia / 3D
**Sim.** Blobs 3D e retratos recortados. Sem esses assets, o cluster fica pobre.

### 13. Riscos de cópia superficial
Esta é a referência **mais perigosa** das quatro:
- A própria imagem é uma **folha de template** (“FULLY EDITABLE /.AI”) — imitá-la produz aparência de template, exatamente o que queremos evitar
- Energia Y2K briga com o objetivo de **parecer confiável** para donos de negócio
- Seis clusters de módulos = **card soup voltando pela porta dos fundos**
- Neon em excesso lê como “post de agência de social media”, não consultoria
- Deve ficar restrita a **acentos de 5%**: um adesivo, um xadrez pequeno, uma cor viva pontual

---

## Síntese — o contrato resultante

| Dimensão | Decisão |
|---|---|
| Base | Warm paper ou ink; **nunca navy** |
| Protagonista | Sempre um objeto visual real: navegador, tela, dispositivo, recorte |
| Tipografia | Display gigante (80–150px, fundo até 180px+) + serif em 1 palavra + mono técnico |
| Cor | Uma base, uma cor principal, no máximo uma tensão |
| Vermelho | Tensão estrutural (Swiss), não enfeite |
| Cobalto | Área específica, não fundo global |
| Lime / magenta | 5–10% no máximo, em detalhe |
| Caixas | Máximo dois `border-radius` convencionais por slide |
| Ângulos | Rotações repetidas e disciplinadas, nunca aleatórias |
| Densidade | Alta permitida só com grid rígido |

## Descoberta estrutural (afeta o plano)

As três referências mais fortes (1, 2, 3) **dependem de um protagonista fotográfico ou 3D**. O projeto hoje não tem nenhum asset desse tipo — apenas `.gitkeep` nas pastas.

Tradução honesta para o nosso tema: o protagonista deve ser **um site real renderizado**, não uma pessoa nem um objeto emprestado.

Caminho recomendado, que reaproveita a infraestrutura existente:
1. Construir sites fictícios completos em React (cafeteria, clínica, escritório)
2. Capturar com o Playwright que já existe no projeto
3. Salvar em `assets/interfaces/` como PNG local e determinístico
4. Usar esses PNGs como protagonista recortado, inclinado e ocluído pela tipografia

Isso satisfaz a regra de realismo sem depender de URL externa e sem CSS fingindo ser fotografia.

Para o Slide 5, uma foto local sua seria o ideal (`assets/photography/`). Sem ela, a tipografia assume o protagonismo — nunca inventar uma foto.

## Riscos gerais de cópia superficial

1. Trocar navy por papel e manter os mesmos cards
2. Rotacionar texto e chamar de Swiss
3. Adicionar etiquetas técnicas sem informação real
4. Usar japonês decorativo
5. Inventar números, seriais e percentuais
6. Deixar Y2K dominar e virar template
7. Palavra gigante sem protagonista visual
8. Monocromia fria que não conversa com empresário
9. Texto vertical ilegível em ~270×338
10. Misturar os quatro modos com igual intensidade no mesmo slide

---

**Status:** análise concluída. Próximo passo: auditoria da direção atual e as duas buscas no 21st, antes de qualquer token ou componente.
