import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useExportMode } from '@/lib/export-mode'

type PostSlidesProps = {
  children: ReactNode
  className?: string
}

/**
 * Groups multiple PostCanvas slides into one post.
 * Studio: stacks previews with spacing.
 * Export: stacks full-size slides for Playwright ([data-slide] × N).
 *
 * @example
 * <PostSlides>
 *   <PostCanvas name="hook">…</PostCanvas>
 *   <PostCanvas name="problem">…</PostCanvas>
 *   <PostCanvas name="cta">…</PostCanvas>
 * </PostSlides>
 */
export function PostSlides({ children, className }: PostSlidesProps) {
  const exportMode = useExportMode()

  return (
    <div
      data-post-slides
      className={cn(
        'flex flex-col',
        exportMode ? 'items-start gap-0' : 'items-center gap-10',
        className,
      )}
    >
      {children}
    </div>
  )
}
