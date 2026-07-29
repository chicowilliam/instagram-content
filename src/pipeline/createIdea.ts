/**
 * Template for new pipeline ideas.
 * Copy into items.ts — always start as Ideas / idea.
 *
 * Flow: Ideas → Brief → Copy → React → Export → Published
 */
import type { PipelineItem } from './types'
import { nextIdeaId } from './items'

export function createIdea(input: {
  title: string
  theme: string
  series?: string
  whyItMatters?: string
  businessReaction?: string
  shareability?: string
}): PipelineItem {
  const today = new Date().toISOString().slice(0, 10)
  return {
    id: nextIdeaId(),
    title: input.title,
    theme: input.theme,
    status: 'ideas',
    stage: 'idea',
    series: input.series,
    whyItMatters: input.whyItMatters,
    businessReaction: input.businessReaction,
    shareability: input.shareability,
    createdAt: today,
    updatedAt: today,
  }
}
