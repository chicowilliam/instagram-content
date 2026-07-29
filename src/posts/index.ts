import { getCatalog, getPostBySlug, type CatalogEntry } from './catalog'

export {
  getCatalog,
  getPostById,
  getPostBySlug,
  libraryStats,
  type CatalogEntry,
} from './catalog'

export { templateDeliverables } from './content-package'
export type { ContentDeliverables, ReelScript } from './content-package'

export function getPost(slug: string) {
  return getPostBySlug(slug)
}

/** Live catalog snapshot helper for legacy callers. */
export function getPosts(): CatalogEntry[] {
  return getCatalog()
}

/** @deprecated Visual style filter replaced by CMS categories. */
export function postsByStyle(): CatalogEntry[] {
  return getCatalog()
}
