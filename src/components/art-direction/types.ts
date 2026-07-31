/** Tom da base sobre a qual o componente é desenhado. */
export type ArtTone = 'paper' | 'ink' | 'cobalt'

export interface ArtProps {
  className?: string
  tone?: ArtTone
}

/** Negócios fictícios usados como conteúdo dos protagonistas visuais. */
export type FakeBusiness = 'cafeteria' | 'clinica' | 'escritorio'

/** Qualidade da interface fictícia — o eixo narrativo do post. */
export type SiteQuality = 'improvised' | 'intentional'
