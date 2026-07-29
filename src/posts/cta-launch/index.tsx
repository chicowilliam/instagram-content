import { PostCanvas } from '@/components/layout'
import { Badge, CTA, Footer, Subtitle, Title } from '@/components/ui'
import { content } from './content'

export function CtaLaunchPost() {
  return (
    <PostCanvas name="cta-launch" format="story" surface="dark" className="text-white">
      <div className="flex h-full flex-col justify-between gap-16 py-8">
        <Badge tone="neutral" className="bg-white/10 text-white/80 border-white/10">
          {content.badge}
        </Badge>

        <div className="flex flex-col gap-8">
          <Title size="display" className="text-white">
            {content.title}
          </Title>
          <Subtitle muted={false} className="text-white/55 max-w-[28ch]">
            {content.subtitle}
          </Subtitle>
        </div>

        <div className="flex flex-col gap-16">
          <CTA
            label={content.cta.label}
            hint={content.cta.hint}
            className="[&>div]:bg-white [&>div]:text-ink-950 [&>p]:text-white/40"
          />
          <Footer
            brand={content.footer.brand}
            handle={content.footer.handle}
            className="border-white/10 text-white [&>span:first-child]:text-white [&>span:last-child]:text-white/40"
          />
        </div>
      </div>
    </PostCanvas>
  )
}
