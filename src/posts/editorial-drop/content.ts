export const content = {
  brand: 'KIVO',
  header: {
    left: 'Kivo Atelier',
    right: 'Ed. 01',
  },
  tagline: ['Peças que', 'acompanham', 'o seu ritmo.'],
  actions: {
    primary: 'Ver coleção',
    secondary: 'Novidades',
  },
  release: ['Nova', 'coleção', '2026'],
  /** Drop a cut-out subject in /public and set the path here */
  subject: undefined as string | undefined,
  categories: [
    { label: 'Ela', caption: 'Alfaiataria fluida para o dia inteiro.' },
    { label: 'Ele', caption: 'Básicos densos, caimento amplo.' },
    { label: 'Casa', caption: 'Tecidos naturais, tons de areia.' },
  ],
} as const
