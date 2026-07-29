import { cn } from '@/lib/cn'

type ChecklistProps = {
  items: readonly string[]
  className?: string
}

export function Checklist({ items, className }: ChecklistProps) {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item, index) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[22px] border border-surface-200 bg-white/80 px-5 py-4"
        >
          <span className="mt-0.5 font-mono text-sm text-ink-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base leading-snug text-ink-800">{item}</span>
        </li>
      ))}
    </ul>
  )
}

type FAQItem = { question: string; answer: string }

export function FAQ({
  items,
  className,
}: {
  items: readonly FAQItem[]
  className?: string
}) {
  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {items.map((item) => (
        <li
          key={item.question}
          className="rounded-[22px] border border-surface-200 bg-white/80 px-5 py-4"
        >
          <p className="text-base font-medium text-ink-900">{item.question}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            {item.answer}
          </p>
        </li>
      ))}
    </ul>
  )
}

type TimelineItem = {
  label: string
  description?: string
}

export function Timeline({
  items,
  className,
}: {
  items: readonly TimelineItem[]
  className?: string
}) {
  return (
    <ol className={cn('flex flex-col gap-0', className)}>
      {items.map((item, index) => (
        <li key={item.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="flex size-8 items-center justify-center rounded-full border border-surface-200 bg-white font-mono text-xs text-ink-500">
              {index + 1}
            </span>
            {index < items.length - 1 ? (
              <span className="w-px flex-1 bg-surface-200" />
            ) : null}
          </div>
          <div className={cn('pb-6', index === items.length - 1 && 'pb-0')}>
            <p className="text-base font-medium text-ink-900">{item.label}</p>
            {item.description ? (
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export type { FAQItem, TimelineItem }
