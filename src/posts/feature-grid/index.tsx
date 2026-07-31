import type { ReactNode } from 'react'
import { Eye, Heart, Layers, MousePointerClick, Sparkles, Zap } from 'lucide-react'
import {
  PostCanvas,
  PostCarousel,
  PostStories,
} from '@/components/layout'
import {
  BrowserScene,
  CodeFragment,
  DecisionFlow,
  DecorativeArrow,
  DotPattern,
  EditorialGrid,
  FloatingWindow,
  GlowSpot,
  HighlightCircle,
  NoiseTexture,
  TrustMeter,
  VisualComparison,
} from '@/components/visuals'
import { DefaultCover } from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/variants'
import { content } from './content'

const stepIcons = [
  <Eye key="eye" strokeWidth={1.5} className="size-7" />,
  <Heart key="heart" strokeWidth={1.5} className="size-7" />,
  <MousePointerClick key="click" strokeWidth={1.5} className="size-7" />,
]

const featureIcons = {
  spark: <Sparkles className="size-8" strokeWidth={1.5} />,
  layers: <Layers className="size-8" strokeWidth={1.5} />,
  zap: <Zap className="size-8" strokeWidth={1.5} />,
} as const

/**
 * Post 001 — Tech Editorial Premium.
 * Copy preserved. Visual metaphors per slide. Static-export safe.
 *
 * References synthesized:
 * Landing GAZU · Branding Cyberpunk NX-07 · Editorial Swiss · UI Bento
 */
export function FeatureGridPost() {
  return (
    <div className="flex flex-col gap-16">
      <PostCarousel>
        {/* ── 01 Cover — Hybrid Premium ── */}
        <PostCanvas
          name="post001-hook"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <DefaultCover />
        </PostCanvas>

        {/* ── 02 Problem — Decision flow ── */}
        <PostCanvas
          name="post001-problema"
          format="portrait"
          surface="techEditorial"
          padding={72}
        >
          <EditorialGrid tone="dark" />
          <NoiseTexture tone="dark" strength="faint" />
          <GlowSpot color="violet" size={380} className="-right-20 top-40" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex flex-col gap-5">
              <TeBadge>{content.slides.problem.badge}</TeBadge>
              <h2 className="max-w-[900px] text-[52px] font-semibold leading-[1.08] tracking-[-0.035em] text-te-ink">
                {content.slides.problem.title}
              </h2>
              <p className="max-w-[720px] text-[27px] leading-[1.4] text-te-muted">
                {content.slides.problem.subtitle}
              </p>
            </div>

            <DecisionFlow
              emphasize={1}
              steps={content.decisionSteps.map((step, i) => ({
                ...step,
                icon: stepIcons[i],
              }))}
            />

            <VisualComparison />

            <TeFooter />
          </div>
        </PostCanvas>

        {/* ── 03 Solution — Asymmetric editorial ── */}
        <PostCanvas
          name="post001-solucao"
          format="portrait"
          surface="techEditorial"
          padding={72}
        >
          <DotPattern tone="dark" />
          <NoiseTexture tone="dark" strength="ghost" />
          <GlowSpot color="accent" size={420} className="-left-24 bottom-32" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex flex-col gap-5">
              <TeBadge accent>{content.slides.solution.badge}</TeBadge>
              <h2 className="text-[52px] font-semibold leading-[1.08] tracking-[-0.035em] text-te-ink">
                {content.slides.solution.title}
              </h2>
              <p className="max-w-[700px] text-[27px] leading-[1.4] text-te-muted">
                {content.slides.solution.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {/* Clareza — hero tile */}
              <div className="col-span-7 flex min-h-[340px] flex-col justify-between rounded-[32px] border border-te-accent/40 bg-te-accent p-8 text-white">
                <span className="text-te-ink/40">{featureIcons.spark}</span>
                <div>
                  <p className="font-mono text-[14px] tracking-[0.18em] uppercase text-white/55">
                    01
                  </p>
                  <h3 className="mt-2 text-[44px] font-semibold tracking-[-0.03em]">
                    {content.features[0].title}
                  </h3>
                  <p className="mt-3 text-[27px] leading-[1.35] text-white/80">
                    {content.features[0].description}
                  </p>
                </div>
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                {/* Cuidado */}
                <div className="flex flex-1 flex-col justify-between rounded-[28px] border border-te-border bg-te-elevated/90 p-7">
                  <span className="text-te-violet">{featureIcons.layers}</span>
                  <div>
                    <p className="font-mono text-[13px] tracking-[0.16em] uppercase text-te-faint">
                      02 · {content.features[1].title}
                    </p>
                    <p className="mt-3 text-[27px] leading-[1.35] text-te-ink">
                      {content.features[1].description}
                    </p>
                  </div>
                </div>
                {/* Direção */}
                <div className="flex flex-1 flex-col justify-between rounded-[28px] border border-te-cyan/30 bg-gradient-to-br from-te-cyan/20 to-transparent p-7">
                  <span className="text-te-cyan">{featureIcons.zap}</span>
                  <div>
                    <p className="font-mono text-[13px] tracking-[0.16em] uppercase text-te-faint">
                      03 · {content.features[2].title}
                    </p>
                    <p className="mt-3 text-[27px] leading-[1.35] text-te-ink">
                      {content.features[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <TeFooter />
          </div>
        </PostCanvas>

        {/* ── 04 Checklist — Inspection UI ── */}
        <PostCanvas
          name="post001-checklist"
          format="portrait"
          surface="techEditorial"
          padding={72}
        >
          <EditorialGrid tone="dark" />
          <NoiseTexture tone="dark" strength="faint" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex flex-col gap-5">
              <TeBadge>{content.slides.checklist.badge}</TeBadge>
              <h2 className="max-w-[880px] text-[48px] font-semibold leading-[1.1] tracking-[-0.035em] text-te-ink">
                {content.slides.checklist.title}
              </h2>
            </div>

            <div className="relative grid grid-cols-12 gap-5">
              <div className="col-span-7 flex flex-col gap-4">
                {content.slides.checklist.items.map((item, index) => (
                  <div
                    key={item}
                    className="relative flex items-center gap-5 rounded-[24px] border border-te-border bg-te-elevated/85 p-6"
                  >
                    <HighlightCircle size={72} className="shrink-0">
                      <span className="font-mono text-[22px] text-te-accent">
                        0{index + 1}
                      </span>
                    </HighlightCircle>
                    <p className="text-[28px] font-medium tracking-[-0.02em] text-te-ink">
                      {item}
                    </p>
                    <div className="absolute top-4 right-5 size-3 rounded-full bg-te-cyan shadow-[0_0_12px_rgb(34_211_238_/_0.7)]" />
                  </div>
                ))}
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                <FloatingWindow
                  title="inspect · site"
                  rotate={3}
                  className="w-full"
                >
                  <div className="flex flex-col gap-3 p-4">
                    <div className="h-3 w-2/3 rounded-full bg-te-ink" />
                    <div className="h-2 w-1/2 rounded-full bg-white/25" />
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-xl bg-te-accent/30 ring-1 ring-te-accent/40" />
                      <div className="h-14 rounded-xl bg-white/10" />
                    </div>
                    <div className="mt-1 h-8 w-28 rounded-full bg-te-accent" />
                  </div>
                </FloatingWindow>
                <TrustMeter value={88} label="Leitura" />
              </div>
            </div>

            <TeFooter />
          </div>
        </PostCanvas>

        {/* ── 05 CTA — High contrast close ── */}
        <PostCanvas
          name="post001-cta"
          format="portrait"
          surface="techEditorial"
          padding={72}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-te-bg via-[#070b16] to-black" />
          <GlowSpot color="accent" size={480} className="right-0 -bottom-20" />
          <NoiseTexture tone="dark" strength="subtle" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <TeBadge accent>{content.slides.cta.badge}</TeBadge>

            <div className="flex flex-col gap-6">
              <h2 className="max-w-[920px] text-[60px] font-semibold leading-[1.05] tracking-[-0.04em] text-te-ink">
                {content.slides.cta.title}
              </h2>
              <p className="max-w-[680px] text-[28px] leading-[1.4] text-te-muted">
                {content.slides.cta.subtitle}
              </p>
            </div>

            <div className="relative flex items-end justify-between gap-8">
              <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-4 rounded-full bg-te-ink px-8 py-5 text-[28px] font-semibold tracking-[-0.02em] text-te-bg">
                  {content.slides.cta.cta}
                  <DecorativeArrow length={72} className="text-te-bg [&_span]:hidden" />
                </div>
                <TeFooter light />
              </div>

              <div className="relative w-[420px]">
                <BrowserScene rotate={8} withGlow className="w-full" />
                <div className="pointer-events-none absolute top-16 left-8 flex size-12 items-center justify-center rounded-full bg-te-ink text-te-bg shadow-lift">
                  <MousePointerClick className="size-6" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          </div>
        </PostCanvas>
      </PostCarousel>

      <PostStories>
        {/* Story 01 — Hook */}
        <PostCanvas
          name="post001-story-1"
          format="story"
          surface="techEditorial"
          padding={88}
        >
          <EditorialGrid tone="dark" />
          <NoiseTexture tone="dark" strength="faint" />
          <GlowSpot color="accent" size={420} className="-right-10 top-40" />

          <div className="relative z-10 flex h-full flex-col justify-between py-6">
            <TeBadge accent>{content.stories[0].badge}</TeBadge>
            <div className="flex flex-col gap-8">
              <h2 className="text-[64px] font-semibold leading-[1.05] tracking-[-0.04em] text-te-ink">
                {content.stories[0].title}
              </h2>
              <p className="text-[30px] leading-[1.4] text-te-muted">
                {content.stories[0].subtitle}
              </p>
              <BrowserScene rotate={-4} className="mt-6 w-[85%]" />
            </div>
            <p className="font-mono text-[16px] uppercase tracking-[0.16em] text-te-faint">
              {content.stories[0].footer}
            </p>
          </div>
        </PostCanvas>

        {/* Story 02 — Explanation */}
        <PostCanvas
          name="post001-story-2"
          format="story"
          surface="techEditorial"
          padding={88}
        >
          <DotPattern tone="dark" />
          <NoiseTexture tone="dark" strength="ghost" />
          <GlowSpot color="violet" size={380} className="left-10 bottom-40" />

          <div className="relative z-10 flex h-full flex-col justify-between py-6">
            <TeBadge>{content.stories[1].badge}</TeBadge>
            <div className="flex flex-col gap-10">
              <h2 className="text-[58px] font-semibold leading-[1.06] tracking-[-0.04em] text-te-ink">
                {content.stories[1].title}
              </h2>
              <p className="text-[30px] leading-[1.4] text-te-muted">
                {content.stories[1].subtitle}
              </p>
              <TrustMeter value={91} className="max-w-[520px]" />
              <CodeFragment className="max-w-[520px]" />
            </div>
            <p className="font-mono text-[16px] uppercase tracking-[0.16em] text-te-faint">
              {content.stories[1].footer}
            </p>
          </div>
        </PostCanvas>

        {/* Story 03 — CTA */}
        <PostCanvas
          name="post001-story-3"
          format="story"
          surface="techEditorial"
          padding={88}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-te-bg to-black" />
          <GlowSpot color="cyan" size={360} className="right-0 top-1/3" />
          <NoiseTexture tone="dark" strength="subtle" />

          <div className="relative z-10 flex h-full flex-col justify-between py-6">
            <TeBadge accent>{content.stories[2].badge}</TeBadge>
            <div className="flex flex-col gap-8">
              <h2 className="text-[56px] font-semibold leading-[1.06] tracking-[-0.04em] text-te-ink">
                {content.stories[2].title}
              </h2>
              <p className="text-[30px] leading-[1.4] text-te-muted">
                {content.stories[2].subtitle}
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-te-ink px-8 py-5 text-[28px] font-semibold text-te-bg">
                Salve para revisar
                <DecorativeArrow length={64} className="[&_span]:hidden" />
              </div>
            </div>
            <p className="font-mono text-[16px] uppercase tracking-[0.16em] text-te-faint">
              {content.stories[2].footer}
            </p>
          </div>
        </PostCanvas>
      </PostStories>
    </div>
  )
}

function TeBadge({
  children,
  accent = false,
}: {
  children: ReactNode
  accent?: boolean
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-4 py-2 font-mono text-[14px] tracking-[0.18em] uppercase ${
        accent
          ? 'border-te-accent/40 bg-te-accent/15 text-te-accent'
          : 'border-te-border bg-white/5 text-te-muted'
      }`}
    >
      {children}
    </span>
  )
}

function TeFooter({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between border-t pt-5 font-mono text-[14px] tracking-[0.14em] uppercase ${
        light ? 'border-white/15 text-white/45' : 'border-te-border text-te-faint'
      }`}
    >
      <span>{content.footer.brand}</span>
      <span>{content.footer.handle}</span>
    </div>
  )
}
