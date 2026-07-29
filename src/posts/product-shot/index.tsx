import { PostCanvas } from '@/components/layout'
import {
  Badge,
  BrowserMockup,
  CTA,
  Footer,
  Subtitle,
  Title,
} from '@/components/ui'
import { content } from './content'

export function ProductShotPost() {
  return (
    <PostCanvas name="product-shot" format="portrait" surface="mesh">
      <div className="flex h-full flex-col gap-10">
        <div className="flex flex-col gap-6">
          <Badge tone="dark">{content.badge}</Badge>
          <Title size="h1">{content.title}</Title>
          <Subtitle>{content.subtitle}</Subtitle>
        </div>

        <BrowserMockup url={content.url} />

        <CTA label={content.cta.label} hint={content.cta.hint} />

        <Footer brand={content.footer.brand} handle={content.footer.handle} />
      </div>
    </PostCanvas>
  )
}
