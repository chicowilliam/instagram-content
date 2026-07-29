/**
 * Registers the entire content library into the CMS catalog.
 * Import once at boot (see main.tsx).
 */

import { registerPost } from '@/posts/catalog'
import { flattenHashtags } from '@/captions/generate'
import { templateDeliverables } from '@/posts/content-package'
import {
  meta as meta001,
  brief as brief001,
  copy as copy001,
} from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/meta'
import Post001 from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/Post'

import { ComparisonPost } from '@/posts/comparison'
import { QuotePost } from '@/posts/quote'
import { ProductShotPost } from '@/posts/product-shot'
import { StatisticPost } from '@/posts/statistic'
import { CtaLaunchPost } from '@/posts/cta-launch'
import { EditorialDropPost } from '@/posts/editorial-drop'
import { AcidBentoPost } from '@/posts/acid-bento'
import { TechwearSpecPost } from '@/posts/techwear-spec'
import { SwissGroteskPost } from '@/posts/swiss-grotesk'
import type { ContentCategory, ContentObjective, ContentStatus, ContentTemplate } from '@/cms/types'
import type { ComponentType } from 'react'

registerPost({
  ...meta001,
  Component: Post001,
  deliverables: {
    objective: brief001.solution,
    primaryMetric: brief001.primaryMetric,
    cta: brief001.cta,
    pinnedComment: copy001.pinnedComment,
    suggestedTime: copy001.suggestedTime,
    caption: copy001.caption,
    hashtags: flattenHashtags(copy001.hashtags),
    reel: {
      hook: copy001.reel.hook,
      scenes: copy001.reel.scenes,
      closing: copy001.reel.cta,
    },
  },
})

type Legacy = {
  id: string
  slug: string
  title: string
  description: string
  category: ContentCategory
  objective: ContentObjective
  status: ContentStatus
  template: ContentTemplate
  slideCount: number
  Component: ComponentType
}

const legacy: Legacy[] = [
  {
    id: '002',
    slug: 'comparison',
    title: 'Comparison',
    description: 'Colunas antes / depois',
    category: 'conversao',
    objective: 'educar',
    status: 'REACT',
    template: 'comparacao',
    slideCount: 1,
    Component: ComparisonPost,
  },
  {
    id: '003',
    slug: 'quote',
    title: 'Quote',
    description: 'Citação serifada com autoria',
    category: 'confianca',
    objective: 'compartilhamentos',
    status: 'REACT',
    template: 'quote',
    slideCount: 1,
    Component: QuotePost,
  },
  {
    id: '004',
    slug: 'product-shot',
    title: 'Product Shot',
    description: 'Mockup de browser + CTA',
    category: 'conversao',
    objective: 'orcamento',
    status: 'REACT',
    template: 'hero',
    slideCount: 1,
    Component: ProductShotPost,
  },
  {
    id: '005',
    slug: 'statistic',
    title: 'Statistic',
    description: 'Número em destaque',
    category: 'experiencia',
    objective: 'compartilhamentos',
    status: 'REACT',
    template: 'estatisticas',
    slideCount: 1,
    Component: StatisticPost,
  },
  {
    id: '006',
    slug: 'cta-launch',
    title: 'CTA Launch',
    description: 'Story escuro com chamada',
    category: 'conversao',
    objective: 'orcamento',
    status: 'REACT',
    template: 'hero',
    slideCount: 1,
    Component: CtaLaunchPost,
  },
  {
    id: '007',
    slug: 'editorial-drop',
    title: 'Editorial Drop',
    description: 'Wordmark gigante atrás do sujeito',
    category: 'bastidores',
    objective: 'autoridade',
    status: 'DESIGN',
    template: 'hero',
    slideCount: 1,
    Component: EditorialDropPost,
  },
  {
    id: '008',
    slug: 'acid-bento',
    title: 'Acid Bento',
    description: 'Grid de tiles neon com tipografia sticker',
    category: 'geral',
    objective: 'seguidores',
    status: 'DESIGN',
    template: 'lista',
    slideCount: 1,
    Component: AcidBentoPost,
  },
  {
    id: '009',
    slug: 'techwear-spec',
    title: 'Techwear Spec',
    description: 'Ficha técnica com HUD e código de barras',
    category: 'sistemas',
    objective: 'autoridade',
    status: 'DESIGN',
    template: 'lista',
    slideCount: 1,
    Component: TechwearSpecPost,
  },
  {
    id: '010',
    slug: 'swiss-grotesk',
    title: 'Swiss Grotesk',
    description: 'Grid rotacionado, numerais gigantes',
    category: 'geral',
    objective: 'compartilhamentos',
    status: 'DESIGN',
    template: 'estatisticas',
    slideCount: 1,
    Component: SwissGroteskPost,
  },
]

for (const post of legacy) {
  registerPost({
    id: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
    objective: post.objective,
    status: post.status,
    template: post.template,
    slideCount: post.slideCount,
    storyCount: 3,
    folder: `legacy/${post.slug}`,
    createdAt: '2026-07-01',
    updatedAt: '2026-07-29',
    Component: post.Component,
    deliverables: templateDeliverables(post.title, post.description),
  })
}
