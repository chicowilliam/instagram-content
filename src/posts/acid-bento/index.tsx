import { PostCanvas } from '@/components/layout'
import { ImageSlot } from '@/components/ui'
import { display } from '@/design-system'
import { cn } from '@/lib/cn'
import {
  AcidChip,
  AcidTile,
  Starburst,
  StickerText,
} from '@/components/styles/acid'
import { content } from './content'

export function AcidBentoPost() {
  return (
    <PostCanvas name="acid-bento" format="portrait" surface="acid" padding={44}>
      <div className="flex h-full flex-col gap-7">
        <header className="flex items-end justify-between">
          <h1 className="font-display text-[104px] font-black uppercase leading-[0.82] tracking-[-0.04em] text-acid-lime">
            {content.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <span className={cn(display.monoSm, 'pb-3 text-white/50')}>
            {content.kicker}
          </span>
        </header>

        <div className="grid flex-1 grid-cols-6 grid-rows-5 gap-3">
          <AcidTile
            color="blue"
            className="col-span-4 row-span-2 justify-between"
          >
            <AcidChip className="self-start bg-white text-acid-black">
              {content.hero.chip}
            </AcidChip>
            <StickerText size={82} className="text-white">
              {content.hero.sticker}
            </StickerText>
          </AcidTile>

          <AcidTile color="lime" className="col-span-2 justify-between">
            <AcidChip className="self-start">{content.tiles.lime.chip}</AcidChip>
            <p className="font-mono text-[15px] leading-[1.3] font-medium">
              {content.tiles.lime.text}
            </p>
          </AcidTile>

          <AcidTile
            color="orange"
            className="col-span-2 items-center justify-center"
          >
            <Starburst size={104} className="text-acid-black" />
            <span
              className={cn(
                display.monoSm,
                'absolute bottom-4 font-semibold text-acid-black',
              )}
            >
              {content.tiles.orange.label}
            </span>
          </AcidTile>

          <AcidTile color="black" outline bare className="col-span-2 row-span-2">
            <ImageSlot hint="Retrato" tone="dark" className="h-full w-full" />
          </AcidTile>

          <AcidTile
            color="yellow"
            className="col-span-2 items-center justify-center"
          >
            <StickerText size={56} className="text-white">
              {content.tiles.yellow.sticker}
            </StickerText>
          </AcidTile>

          <AcidTile color="white" className="col-span-2 justify-end">
            <p className="font-mono text-[15px] leading-[1.3] font-medium">
              {content.tiles.white.text}
            </p>
          </AcidTile>

          <div className="pattern-checker col-span-2 rounded-[18px]" />

          <AcidTile
            color="pink"
            className="col-span-2 items-center justify-center"
          >
            <span className="font-display text-[44px] font-black uppercase leading-none">
              {content.tiles.pink.label}
            </span>
          </AcidTile>

          <AcidTile color="violet" className="col-span-6 justify-center">
            <div className="flex items-center justify-between gap-6">
              <StickerText size={62} className="text-acid-lime">
                {content.tiles.violet.text}
              </StickerText>
              <span className="font-display text-[80px] font-black leading-none text-acid-lime">
                {content.tiles.violet.arrow}
              </span>
            </div>
          </AcidTile>
        </div>

        <footer className="flex items-center justify-between">
          <span className={cn(display.monoSm, 'text-white/50')}>
            {content.footer.left}
          </span>
          <span className={cn(display.monoSm, 'text-acid-lime')}>
            {content.footer.right}
          </span>
        </footer>
      </div>
    </PostCanvas>
  )
}
