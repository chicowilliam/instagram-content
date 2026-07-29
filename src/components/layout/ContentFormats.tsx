import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useExportMode } from '@/lib/export-mode'
import {
  ContentFormatContext,
  type ContentFormatKind,
} from './content-format-context'

function FormatGroup({
  kind,
  children,
  className,
}: {
  kind: ContentFormatKind
  children: ReactNode
  className?: string
}) {
  const exportMode = useExportMode()

  return (
    <ContentFormatContext.Provider value={kind}>
      <section
        data-content-format={kind}
        className={cn(
          'flex flex-col',
          exportMode ? 'items-start gap-0' : 'items-center gap-10',
          className,
        )}
      >
        {children}
      </section>
    </ContentFormatContext.Provider>
  )
}

export function PostCarousel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <FormatGroup kind="carousel" className={className}>
      {children}
    </FormatGroup>
  )
}

export function PostStories({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <FormatGroup kind="stories" className={className}>
      {children}
    </FormatGroup>
  )
}
