import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import {
  formats,
  spacing,
  surfaces,
  type PostFormat,
  type Surface,
} from '@/design-system'
import { exportNodeToPng } from '@/lib/export'
import { useExportMode } from '@/lib/export-mode'
import { useContentFormat } from './content-format-context'

type PostCanvasProps = {
  children: ReactNode
  /** Used as the PNG filename (manual browser export) */
  name: string
  format?: PostFormat
  surface?: Surface
  className?: string
  /** Extra class on the inner content area */
  contentClassName?: string
  /** Override the default canvas padding (px). Use 0 for full-bleed posters. */
  padding?: number
}

/**
 * One Instagram slide.
 * In studio: scaled preview + manual PNG button.
 * In export mode (`/export/:id`): full 1080×1350 surface marked with [data-slide].
 */
export function PostCanvas({
  children,
  name,
  format = 'portrait',
  surface = 'mesh',
  className,
  contentClassName,
  padding,
}: PostCanvasProps) {
  const exportMode = useExportMode()
  const contentFormat = useContentFormat()
  const ref = useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = useState(false)
  const { width, height, label } = formats[format]
  const pad = padding ?? spacing.canvas[format]

  async function handleExport() {
    if (!ref.current || exporting) return
    setExporting(true)
    try {
      await exportNodeToPng(ref.current, name, 2)
    } finally {
      setExporting(false)
    }
  }

  const slide = (
    <div
      ref={ref}
      data-slide
      data-slide-kind={contentFormat}
      data-post-canvas
      data-slide-name={name}
      className={cn(
        'relative flex flex-col overflow-hidden',
        surfaces[surface],
        className,
      )}
      style={{ width, height, padding: pad }}
    >
      <div className={cn('flex h-full flex-col', contentClassName)}>
        {children}
      </div>
    </div>
  )

  if (exportMode) {
    return slide
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full max-w-[540px] items-center justify-between px-1">
        <p className="text-sm text-ink-500">
          {name} · {label} · {width}×{height}
        </p>
        <button
          type="button"
          onClick={handleExport}
          disabled={exporting}
          className={cn(
            'rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-white',
            'transition hover:bg-ink-800 disabled:opacity-50',
          )}
        >
          {exporting ? 'Exportando…' : 'Exportar PNG'}
        </button>
      </div>

      <div
        className="overflow-hidden rounded-[20px] shadow-lift ring-1 ring-black/5"
        style={{ width: width / 2, height: height / 2 }}
      >
        <div
          style={{
            width,
            height,
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
          }}
        >
          {slide}
        </div>
      </div>
    </div>
  )
}
