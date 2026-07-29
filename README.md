# Content Studio

CMS privado para produção de conteúdo Instagram.

## Fluxo

```
IDEA → BRIEF → COPY → DESIGN → REACT → PREVIEW → READY → PUBLISHED
```

## Comandos

```bash
npm run dev              # Abre o Dashboard (localhost:5173)
npm run create-post -- --title "Quanto custa um site"
npm run export -- 001    # Exporta o post 001
npm run export           # Exporta pacotes válidos
npm run calendar:check   # Valida calendário de 12 meses
```

## Estrutura

```
src/
  dashboard/     # Shell do CMS
  cms/           # Tipos e fluxo de status
  posts/2026/    # Biblioteca de conteúdo
  ideas/         # Inbox de ideias
  templates/     # Templates oficiais
  components/ui/ # Design System (não alterar por post)
  layouts/       # Canvas de exportação
  calendar/      # Calendário editorial 12 meses
exports/         # PNG + markdown gerados
```

## Novo post

1. `npm run create-post -- --title "..."`
2. Preencher `brief.md` / `meta.ts`
3. Registrar em `src/posts/register.ts`
4. Avançar status uma etapa por vez
5. Preview em `/post/001`
6. `npm run export -- 001`
