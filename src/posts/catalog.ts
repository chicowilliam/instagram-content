import type { ComponentType } from 'react'
import type { PostMeta } from '@/cms/types'
import type { ContentDeliverables } from '@/posts/content-package'

export type CatalogEntry = PostMeta & {
  Component: ComponentType
  deliverables: ContentDeliverables
}

/**
 * Central CMS library.
 * New posts: create folder under posts/YYYY/MM-name/NNN-slug/ and register here.
 * Scalable to 1000+ via modular registration (see posts/2026).
 */
const entries: CatalogEntry[] = []

export function registerPost(entry: CatalogEntry) {
  if (entries.some((e) => e.id === entry.id)) {
    throw new Error(`Post id ${entry.id} já registrado.`)
  }
  entries.push(entry)
}

export function getCatalog(): CatalogEntry[] {
  return [...entries].sort((a, b) => a.id.localeCompare(b.id))
}

export function getPostById(id: string) {
  const normalized = id.replace(/^post-?/i, '').padStart(3, '0')
  return entries.find((e) => e.id === normalized)
}

export function getPostBySlug(slug: string) {
  return entries.find((e) => e.slug === slug)
}

export function libraryStats() {
  const all = getCatalog()
  const byStatus = (status: PostMeta['status']) =>
    all.filter((p) => p.status === status).length

  return {
    total: all.length,
    published: byStatus('PUBLISHED'),
    inProduction: all.filter(
      (p) => p.status !== 'IDEA' && p.status !== 'PUBLISHED',
    ).length,
    scheduled: all.filter((p) => Boolean(p.scheduledAt)).length,
    stories: all.reduce((sum, p) => sum + p.storyCount, 0),
    reels: all.length,
    slides: all.reduce((sum, p) => sum + p.slideCount, 0),
    ready: byStatus('READY'),
    ideas: byStatus('IDEA'),
  }
}
