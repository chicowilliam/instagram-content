import {
  BrowserScene,
  DotPattern,
  EditorialGrid,
  GlowSpot,
  NoiseTexture,
  TypographyAccent,
} from '@/components/visuals'
import { content } from '@/posts/feature-grid/content'
import {
  CarouselCue,
  CoverBadge,
  CoverShell,
  CoverSignature,
} from './shared'

/** Variant A — Dark Tech: navy, electric glow, product depth. */
export function CoverDarkTech() {
  return (
    <CoverShell className="surface-tech-editorial text-te-ink">
      <EditorialGrid tone="dark" />
      <GradientLayer />
      <NoiseTexture tone="dark" strength="subtle" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-6">
          <CoverBadge className="border-te-border bg-white/5 text-te-muted">
            {content.badge}
          </CoverBadge>
          <CarouselCue />
        </div>

        <div className="relative mt-10 flex flex-1 flex-col">
          <h1 className="max-w-[920px] text-[68px] font-semibold leading-[1.02] tracking-[-0.045em]">
            <TypographyAccent accent="qualidade">
              {content.title}
            </TypographyAccent>
          </h1>
          <p className="mt-7 max-w-[620px] text-[28px] leading-[1.35] tracking-[-0.015em] text-te-muted">
            {content.subtitle}
          </p>

          <div className="relative mt-auto flex items-end justify-between gap-6 pt-8">
            <div className="flex w-[260px] shrink-0 flex-col gap-4 pb-2">
              <div className="rounded-2xl border border-te-border bg-black/35 p-4 font-mono text-[13px] leading-relaxed text-te-muted">
                <p className="text-te-faint">// signal</p>
                <p>
                  trust<span className="text-te-cyan">:felt</span>
                </p>
                <p>
                  next<span className="text-te-accent">:contact</span>
                </p>
              </div>
            </div>
            <div className="relative w-[540px]">
              <GlowSpot
                color="violet"
                size={340}
                className="-top-16 left-16"
              />
              <BrowserScene rotate={-10} className="w-full" />
            </div>
          </div>
        </div>

        <CoverSignature
          brand={content.footer.brand}
          handle={content.footer.handle}
          className="mt-8 border-te-border text-te-faint"
        />
      </div>
    </CoverShell>
  )
}

function GradientLayer() {
  return (
    <>
      <DotPattern tone="dark" className="opacity-50" />
      <GlowSpot color="accent" size={520} className="-top-24 -right-10" />
    </>
  )
}
