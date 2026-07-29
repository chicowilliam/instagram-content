import { PostCanvas } from '@/components/layout'
import { ImageSlot } from '@/components/ui'
import { display } from '@/design-system'
import { cn } from '@/lib/cn'
import {
  Barcode,
  DataBlock,
  HudFrame,
  MeterBar,
  TechTitle,
} from '@/components/styles/techwear'
import { content } from './content'

export function TechwearSpecPost() {
  return (
    <PostCanvas
      name="techwear-spec"
      format="portrait"
      surface="techwear"
      padding={0}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="pattern-grid absolute inset-0" />

        <ImageSlot
          src={content.subject}
          hint="Subject"
          tone="dark"
          className="absolute bottom-0 left-1/2 h-[900px] w-[560px] -translate-x-1/2"
        />

        <div className="relative flex h-full flex-col justify-between p-14">
          <div className="flex items-start justify-between gap-10">
            <div className="flex flex-col gap-4">
              <TechTitle size={132}>{content.code}</TechTitle>
              <span
                className={cn(
                  display.mono,
                  'font-semibold tracking-[0.22em] text-tech-pink',
                )}
              >
                {content.protocol}
              </span>
              <HudFrame className="mt-2 self-start px-4 py-2">
                <span className={cn(display.monoSm, 'text-white/85')}>
                  {content.system}
                </span>
              </HudFrame>
            </div>

            <div className="flex flex-col items-end gap-2 text-tech-pink">
              <Barcode seed={content.barcodeSeed} height={62} />
              <span className={cn(display.monoSm, 'text-white/70')}>
                {content.barcodeLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-10">
              {content.left.map((item) => (
                <DataBlock
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  lines={item.lines}
                  accent
                />
              ))}
            </div>

            <div className="flex flex-col gap-10">
              {content.right.map((item) => (
                <DataBlock
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  lines={item.lines}
                  align="right"
                />
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between gap-10">
            <div className="flex flex-col gap-2">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(display.monoSm, 'text-tech-yellow')}
                >
                  {tag}
                </span>
              ))}
            </div>

            <HudFrame className="bg-tech-deep/45 px-5 py-4">
              <div className="flex flex-col gap-2">
                {content.meters.map((meter) => (
                  <MeterBar
                    key={meter.label}
                    label={meter.label}
                    value={meter.value}
                  />
                ))}
              </div>
            </HudFrame>

            <span
              className={cn(
                display.monoSm,
                'max-w-[130px] text-right leading-[1.9] text-white/80',
              )}
            >
              {content.footer}
            </span>
          </div>
        </div>
      </div>
    </PostCanvas>
  )
}
