import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

/** Soft orb with layered radial glow — focal depth without photography. */
export function AbstractOrb({
  className,
  tone = 'dark',
  size = 280,
}: VisualProps & { size?: number }) {
  return (
    <div
      aria-hidden
      className={cn('relative shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-full blur-2xl',
          tone === 'dark' ? 'bg-te-accent/40' : 'bg-te-accent/30',
        )}
      />
      <div
        className={cn(
          'absolute inset-[12%] rounded-full',
          tone === 'dark'
            ? 'bg-[radial-gradient(circle_at_30%_28%,#9ec0ff_0%,#4f7cff_38%,#1a2450_72%,#0b1020_100%)]'
            : 'bg-[radial-gradient(circle_at_30%_28%,#ffffff_0%,#a8c4ff_40%,#4f7cff_78%,#2a3a7a_100%)]',
        )}
      />
      <div className="absolute inset-[38%] rounded-full bg-white/20 blur-md" />
      <div className="absolute top-[18%] left-[22%] size-[18%] rounded-full bg-white/50 blur-[2px]" />
    </div>
  )
}
