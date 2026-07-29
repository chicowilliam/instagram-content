import { PostCanvas } from '@/components/layout'
import { ImageSlot } from '@/components/ui'
import { display } from '@/design-system'
import { cn } from '@/lib/cn'
import {
  DiagonalType,
  VerticalType,
  WeightLadder,
} from '@/components/styles/swiss'
import { content } from './content'

const ANGLE = 30

export function SwissGroteskPost() {
  return (
    <PostCanvas
      name="swiss-grotesk"
      format="portrait"
      surface="swiss"
      padding={0}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="pattern-paper absolute inset-0" />

        {/* Rotated black field — its lower edge sets the secondary grid */}
        <div
          className="absolute h-[700px] w-[900px] bg-swiss-ink"
          style={{
            left: 530,
            top: -380,
            transform: `rotate(${ANGLE}deg)`,
          }}
        />

        <ImageSlot
          src={content.subject}
          hint="Subject"
          grayscale
          className="absolute left-1/2 top-[330px] h-[700px] w-[600px] -translate-x-1/2 bg-transparent"
          imageClassName="object-contain"
        />

        <div className="absolute left-[6px] top-0 h-full">
          <VerticalType size={150} rail={170} className="text-swiss-red">
            {content.vertical}
          </VerticalType>
        </div>

        <div className="absolute left-[520px] top-[10px]">
          <DiagonalType size={70} angle={ANGLE} className="text-swiss-cream">
            {content.overline}
          </DiagonalType>
        </div>

        <div className="absolute left-[230px] top-[210px]">
          <DiagonalType size={160} angle={ANGLE} className="text-swiss-red">
            {content.numerals}
          </DiagonalType>
        </div>

        <div className="absolute left-[560px] bottom-[330px]">
          <WeightLadder items={content.weights} angle={ANGLE} />
        </div>

        <div className="absolute bottom-14 left-14 flex flex-col gap-1">
          {content.caption.map((line, index) => (
            <span
              key={line}
              className={cn(
                display.monoSm,
                index === 0 ? 'text-swiss-ink' : 'text-swiss-ink/55',
              )}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </PostCanvas>
  )
}
