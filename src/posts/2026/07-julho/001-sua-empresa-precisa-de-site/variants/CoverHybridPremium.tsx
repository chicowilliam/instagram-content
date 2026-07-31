import {
  BrowserScene,
  DotPattern,
  EditorialGrid,
  GlowSpot,
  NoiseTexture,
  TrustMeter,
  TypographyAccent,
} from '@/components/visuals'
import { content } from '@/posts/feature-grid/content'
import {
  CarouselCue,
  CoverBadge,
  CoverShell,
  CoverSignature,
} from './shared'

/**
 * Variant C — Hybrid Premium (DEFAULT).
 * Light editorial top + dark product dock. Highest composite score.
 */
export function CoverHybridPremium() {
  return (
    <CoverShell className="bg-te-paper text-te-paper-ink" padding={0}>
      <div className="relative flex h-[58%] flex-col overflow-hidden px-20 pt-20">
        <DotPattern tone="light" />
        <NoiseTexture tone="light" strength="ghost" />
        <div className="absolute top-0 right-0 h-full w-[42%] bg-gradient-to-l from-te-accent/15 to-transparent" />

        <div className="relative z-10 flex items-start justify-between">
          <CoverBadge className="border-black/10 bg-white/80 text-ink-500">
            {content.badge}
          </CoverBadge>
          <CarouselCue className="[&>span:last-child]:text-ink-400" />
        </div>

        <h1 className="relative z-10 mt-14 max-w-[880px] text-[66px] font-semibold leading-[1.02] tracking-[-0.045em]">
          <TypographyAccent accent="qualidade" tone="light">
            {content.title}
          </TypographyAccent>
        </h1>
        <p className="relative z-10 mt-7 max-w-[600px] text-[28px] leading-[1.35] text-ink-600">
          {content.subtitle}
        </p>
      </div>

      <div className="relative flex h-[42%] overflow-hidden bg-te-bg px-20 pt-10 pb-16 text-te-ink">
        <EditorialGrid tone="dark" />
        <GlowSpot color="accent" size={360} className="-top-20 right-10" />
        <NoiseTexture tone="dark" strength="faint" />

        <div className="relative z-10 flex w-full items-end justify-between gap-8">
          <div className="flex w-[300px] flex-col gap-5 pb-2">
            <TrustMeter value={94} className="w-full" />
            <CoverSignature
              brand={content.footer.brand}
              handle={content.footer.handle}
              className="border-te-border text-te-faint"
            />
          </div>
          <div className="relative w-[520px] -mb-6">
            <BrowserScene rotate={-7} className="w-full" />
          </div>
        </div>
      </div>
    </CoverShell>
  )
}
