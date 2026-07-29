import { Layers, Sparkles, Zap } from 'lucide-react'
import type { ReactNode } from 'react'
import {
  PostCanvas,
  PostCarousel,
  PostStories,
} from '@/components/layout'
import {
  Badge,
  CTA,
  FeatureCard,
  Footer,
  Subtitle,
  Title,
} from '@/components/ui'
import { content } from './content'

const icons = {
  spark: <Sparkles className="size-6" strokeWidth={1.5} />,
  layers: <Layers className="size-6" strokeWidth={1.5} />,
  zap: <Zap className="size-6" strokeWidth={1.5} />,
} as const

export function FeatureGridPost() {
  return (
    <div className="flex flex-col gap-16">
      <PostCarousel>
        <PostCanvas name="post001-hook" format="portrait" surface="mesh">
          <SlideShell>
            <div className="flex flex-col gap-6">
              <Badge tone="accent">{content.badge}</Badge>
              <Title size="display">{content.title}</Title>
              <Subtitle>{content.subtitle}</Subtitle>
            </div>
          </SlideShell>
        </PostCanvas>

        <PostCanvas name="post001-problema" format="portrait" surface="soft">
          <SlideShell>
            <div className="flex flex-col gap-7">
              <Badge>{content.slides.problem.badge}</Badge>
              <Title size="h1">{content.slides.problem.title}</Title>
              <Subtitle>{content.slides.problem.subtitle}</Subtitle>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Primeiro olhar', 'Sensação', 'Decisão'].map((label, index) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-surface-200 bg-white/80 p-6"
                >
                  <span className="mb-8 block font-mono text-sm text-ink-300">
                    0{index + 1}
                  </span>
                  <p className="text-xl font-medium text-ink-800">{label}</p>
                </div>
              ))}
            </div>
          </SlideShell>
        </PostCanvas>

        <PostCanvas name="post001-solucao" format="portrait" surface="mesh">
          <SlideShell>
            <div className="flex flex-col gap-6">
              <Badge tone="accent">{content.slides.solution.badge}</Badge>
              <Title size="h1">{content.slides.solution.title}</Title>
              <Subtitle>{content.slides.solution.subtitle}</Subtitle>
            </div>

            <div className="grid flex-1 content-center gap-4">
              {content.features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={icons[feature.icon]}
                />
              ))}
            </div>
          </SlideShell>
        </PostCanvas>

        <PostCanvas name="post001-checklist" format="portrait" surface="soft">
          <SlideShell>
            <div className="flex flex-col gap-6">
              <Badge>{content.slides.checklist.badge}</Badge>
              <Title size="h1">{content.slides.checklist.title}</Title>
            </div>

            <ol className="flex flex-col gap-4">
              {content.slides.checklist.items.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-6 rounded-[24px] border border-surface-200 bg-white p-7 shadow-soft"
                >
                  <span className="font-mono text-base text-ink-300">
                    0{index + 1}
                  </span>
                  <span className="text-[26px] font-medium tracking-[-0.02em] text-ink-900">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </SlideShell>
        </PostCanvas>

        <PostCanvas name="post001-cta" format="portrait" surface="dark">
          <div className="flex h-full flex-col justify-between">
            <Badge className="border-white/10 bg-white/10 text-white">
              {content.slides.cta.badge}
            </Badge>
            <div className="flex flex-col gap-7">
              <Title size="display" className="text-white">
                {content.slides.cta.title}
              </Title>
              <Subtitle className="text-white/55">
                {content.slides.cta.subtitle}
              </Subtitle>
            </div>
            <div className="flex flex-col gap-12">
              <CTA
                label={content.slides.cta.cta}
                className="[&>div]:bg-white [&>div]:text-ink-950"
              />
              <Footer
                brand={content.footer.brand}
                handle={content.footer.handle}
                className="border-white/10 [&>span:first-child]:text-white [&>span:last-child]:text-white/40"
              />
            </div>
          </div>
        </PostCanvas>
      </PostCarousel>

      <PostStories>
        {content.stories.map((story, index) => (
          <PostCanvas
            key={story.title}
            name={`post001-story-${index + 1}`}
            format="story"
            surface={index === 1 ? 'dark' : 'mesh'}
          >
            <div className="flex h-full flex-col justify-between py-10">
              <Badge
                tone={index === 1 ? 'neutral' : 'accent'}
                className={
                  index === 1
                    ? 'border-white/10 bg-white/10 text-white'
                    : undefined
                }
              >
                {story.badge}
              </Badge>
              <div className="flex flex-col gap-8">
                <Title
                  size="display"
                  className={index === 1 ? 'text-white' : undefined}
                >
                  {story.title}
                </Title>
                <Subtitle className={index === 1 ? 'text-white/55' : undefined}>
                  {story.subtitle}
                </Subtitle>
              </div>
              <p
                className={`font-mono text-base uppercase tracking-[0.16em] ${
                  index === 1 ? 'text-white/40' : 'text-ink-400'
                }`}
              >
                {story.footer}
              </p>
            </div>
          </PostCanvas>
        ))}
      </PostStories>
    </div>
  )
}

function SlideShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      {children}
      <Footer brand={content.footer.brand} handle={content.footer.handle} />
    </div>
  )
}
