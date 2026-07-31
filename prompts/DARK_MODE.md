# Prompt — Modo Noturno (Dark Mode) no Content Studio CMS

Cole este prompt inteiro no Agent. Não pule etapas.

---

## Missão

Implementar **modo noturno** no CMS privado `instagram-content`.

Este projeto **não é** website, landing page nem portfólio. É uma ferramenta interna de produção de conteúdo.

Siga obrigatoriamente:

- `Brand.md`
- `ART_DIRECTION.md`
- `.cursor/rules/project-standards.mdc`
- `ROADMAP.md` (marcar a feature ao concluir)
- `CHANGELOG.md` (registrar a mudança)

---

## O que NÃO fazer

- Não inventar paleta nova. Reutilizar `surface`, `ink`, `accent` e variantes já existentes.
- Não criar cores aleatórias (`#1a1a2e`, purple dark, neon).
- Não alterar o Design System para “fazer dark mode funcionar” em um post isolado.
- Não aplicar dark mode nos canvases de exportação PNG (`/export/:id`, `PostCanvas` em modo export).
- Não animar o fundo dos slides (Playwright precisa de frames estáticos).
- Não escrever `rounded-xl`, `p-6`, cores hardcodadas. Usar tokens semânticos de `src/design-system/semantic.ts`.
- Não quebrar a arquitetura existente.
- Não pular planejamento: explique a abordagem antes de implementar.

---

## Escopo do dark mode

### Aplica-se a

- Shell do CMS (`CmsShell`, `Sidebar`)
- Dashboard, Posts, Ideias, Templates, Stories, Reels, Exportações, Publicado, Calendário, Analytics, Configurações
- Preview UI chrome (barra “← CMS”), **não** o conteúdo interno do slide
- Controles, cards, tipografia de interface, bordas, sombras

### NÃO se aplica a

- Slides de carrossel e stories renderizados para export
- Superfícies de post (`surfaces.mesh`, `surfaces.dark`, editorial, acid, techwear, swiss)
- Backgrounds de post (`Aurora`, `Noise`, `Mesh`, etc.) — eles já têm `tone="light" | "dark"` próprio
- Mockups de conteúdo (Browser, iPhone, etc.) — mantêm `tone` independente do tema do CMS

Regra: **tema do CMS ≠ tema do post**. São camadas separadas.

---

## Arquitetura desejada

### 1. Preferência de tema

Suportar:

- `light`
- `dark`
- `system` (segue `prefers-color-scheme`)

Persistir em `localStorage` (chave clara, ex: `cms-theme`).

### 2. Aplicação técnica (Tailwind v4)

Usar a estratégia de **variáveis CSS** + classe no root:

- Em `html` ou `#root`: `class="dark"` quando dark estiver ativo
- Em `src/styles/index.css`, sobrescrever tokens com:

```css
.dark {
  --color-surface-0: ...;
  --color-surface-50: ...;
  /* remapear surface + ink + borders + shadows */
}
```

Preferir remapeamento de tokens a espalhar `dark:` em centenas de classes.

Se precisar de `dark:` em algum lugar, usar com parcimônia e só na UI do CMS.

### 3. Provider / Hook

Criar algo como:

- `src/lib/theme.tsx` ou `src/hooks/useTheme.ts`
- `ThemeProvider` no `main.tsx` / shell
- `useTheme()` expondo `{ theme, resolvedTheme, setTheme }`
- Evitar flash no load (script mínimo ou leitura síncrona antes do paint, se viável)

### 4. Controle na UI

Colocar toggle discreto e premium em:

- **Sidebar** (preferencial) ou
- **Configurações** + atalho na sidebar

Opções: Light / Dark / System.

Visual: minimalista, Apple/Linear feeling. Sem ícones aleatórios, sem glow exagerado.

Usar `lucide-react` (`Sun`, `Moon`, `Monitor`) e `motion` só para microinteração (não obrigatório).

---

## Tokens a remapear no `.dark`

Remapear no mínimo:

| Token | Intenção no dark |
| --- | --- |
| `surface-0` | fundo de card / painel |
| `surface-50` | fundo de página / chrome |
| `surface-100` | hover / fill suave |
| `surface-200` | borda / divider |
| `surface-300` | borda mais forte |
| `ink-950` … `ink-300` | hierarquia tipográfica invertida com cuidado |
| `shadow-soft` / `shadow-lift` | mais discretas, nunca neon |
| `body` background | alinhar ao shell |

Manter `accent-*` coerente (cool gray-blue), sem virar ciano ou roxo.

Referências de síntese (obrigatório declarar antes de implementar):

1. **Landing:** Linear — densidade tipográfica limpa no dark
2. **Branding:** Apple — preto profundo, não cinza morto
3. **Editorial:** Notion — hierarquia calma, contraste legível
4. **UI:** Arc / Raycast — chrome discreto, controles precisos

Sintetizar. Nunca copiar.

---

## Componentes / arquivos a tocar (esperados)

- `src/styles/index.css` — bloco `.dark` com remapeamento
- `src/lib/theme.tsx` (ou equivalente) — provider + persistência
- `src/main.tsx` — envolver app
- `src/dashboard/Sidebar.tsx` — toggle
- `src/dashboard/SettingsPage.tsx` — seção Tema
- `src/dashboard/CmsShell.tsx` — garantir fundo via tokens
- Tokens semânticos em `text`, `border` se hoje hardcodam `text-ink-950` / `bg-surface-0` de forma que quebre no dark — preferir remapeamento global

Auditar páginas do dashboard que usam `bg-white`, `#ffffff`, `text-black` hardcoded e corrigir via tokens.

---

## Critérios de aceite

1. Toggle Light / Dark / System funciona e persiste após reload
2. Sem flash branco/preto agressivo no primeiro paint (mitigar)
3. Todas as rotas do CMS legíveis no dark (contraste AA prático)
4. `/export/:id` e preview de slides **iguais** ao modo light (sem tema no canvas)
5. Build `npm run build` passa
6. Nenhum token de cor novo fora da identidade
7. `ROADMAP.md` atualizado
8. `CHANGELOG.md` atualizado em Unreleased

---

## Crítica brutal (obrigatória ao final)

Após a UI do toggle e do shell em dark, pontuar 0–10:

- Originalidade
- Impacto
- Elegância
- Premium
- Tecnologia
- Apple Feeling
- Linear Feeling
- Compartilhamento (N/A para CMS → avaliar “desejo de usar”)
- Instagram Appeal (N/A → avaliar “coerência com a marca do conteúdo”)

Se qualquer nota < 9,5, refazer o visual do dark mode (não o escopo).

Pergunta final:

> Isso parece o dark mode de uma ferramenta interna de uma startup de bilhões?

Se não, refaça.

---

## Ordem de trabalho

1. Planejar e declarar as 4 referências + decisão técnica (CSS variables vs dark: utilities)
2. Implementar provider + remapeamento de tokens
3. Toggle na Sidebar + Settings
4. Auditar shell e páginas CMS
5. Garantir isolamento dos canvases de export
6. Build + crítica + atualizar ROADMAP/CHANGELOG

Comece pelo planejamento. Só então implemente.
