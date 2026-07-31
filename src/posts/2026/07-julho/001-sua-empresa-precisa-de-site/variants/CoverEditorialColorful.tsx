import {
  AbstractOrb,
  AbstractIllustration,
  DotPattern,
  GlowSpot,
  NoiseTexture,
  TypographyAccent,
} from '@/components/visuals'
import { content } from '@/posts/feature-grid/content'
import {
  CoverBadge,
  CoverShell,
  CoverSignature,
} from './shared'

/** Variant B — Editorial Colorful: paper field, bold color blocks, magazine scale. */
export function CoverEditorialColorful() {
  return (
    <CoverShell className="surface-tech-editorial-paper text-te-paper-ink">
      <DotPattern tone="light" />
      <NoiseTexture tone="light" strength="ghost" />

      <div className="absolute top-0 right-0 h-[420px] w-[380px] bg-te-accent" />
      <div className="absolute top-[320px] right-[120px] h-[180px] w-[180px] bg-te-violet" />
      <div className="absolute bottom-[220px] left-0 h-[120px] w-[240px] bg-te-cyan/80" />
      <GlowSpot
        color="accent"
        size={300}
        className="top-[80px] right-[40px] opacity-30"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <CoverBadge className="border-black/10 bg-white/80 text-ink-500">
            {content.badge}
          </CoverBadge>
          <div className="flex items-center gap-2 rounded-full bg-te-paper-ink px-4 py-2">
            <span className="size-2 rounded-full bg-te-cyan" />
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-white/70">
              01 / 05
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-1 flex-col">
          <p className="font-mono text-[14px] tracking-[0.22em] uppercase text-ink-400">
            Ed. 001 · Primeira impressão
          </p>
          <h1 className="mt-6 max-w-[860px] text-[76px] font-semibold leading-[0.98] tracking-[-0.05em] text-te-paper-ink">
            <TypographyAccent accent="qualidade" tone="light">
              {content.title}
            </TypographyAccent>
          </h1>
          <p className="mt-8 max-w-[560px] text-[28px] leading-[1.35] text-ink-600">
            {content.subtitle}
          </p>

          <div className="relative mt-auto flex items-end justify-between pt-8">
            <AbstractOrb tone="light" size={220} className="-mb-4" />
            <div className="w-[360px]">
              <AbstractIllustration variant="layers" tone="light" />
            </div>
          </div>
        </div>

        <CoverSignature
          brand={content.footer.brand}
          handle={content.footer.handle}
          className="mt-8 border-black/10 text-ink-400"
        />
      </div>
    </CoverShell>
  )
}
