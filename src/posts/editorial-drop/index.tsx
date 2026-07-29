import { PostCanvas } from '@/components/layout'
import { ImageSlot } from '@/components/ui'
import { display } from '@/design-system'
import { cn } from '@/lib/cn'
import {
  CategoryStrip,
  EditorialActions,
  MegaWordmark,
  MicroCaps,
} from '@/components/styles/editorial'
import { content } from './content'

export function EditorialDropPost() {
  return (
    <PostCanvas
      name="editorial-drop"
      format="portrait"
      surface="editorial"
      padding={0}
    >
      <div className="flex h-full flex-col">
        <header className="px-16 pt-14">
          <div className="flex items-center justify-between pb-6">
            <span className={cn(display.micro, 'text-ink-900')}>
              {content.header.left}
            </span>
            <span className={cn(display.micro, 'text-ink-500')}>
              {content.header.right}
            </span>
          </div>
          <span className="block h-px w-full bg-ink-950/15" />
        </header>

        <div className="relative flex-1">
          <MicroCaps rule className="absolute left-16 top-16">
            {content.tagline.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </MicroCaps>

          <div className="absolute inset-x-0 top-[300px]">
            <MegaWordmark size={330}>{content.brand}</MegaWordmark>
          </div>

          <ImageSlot
            src={content.subject}
            hint="Subject"
            grayscale
            className="absolute bottom-[176px] left-1/2 h-[640px] w-[420px] -translate-x-1/2"
          />

          <EditorialActions
            primary={content.actions.primary}
            secondary={content.actions.secondary}
            className="absolute bottom-16 left-16"
          />

          <MicroCaps align="right" className="absolute bottom-16 right-16">
            {content.release.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </MicroCaps>
        </div>

        <CategoryStrip items={content.categories} />
      </div>
    </PostCanvas>
  )
}
