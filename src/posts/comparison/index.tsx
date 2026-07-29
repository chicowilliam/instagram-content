import { PostCanvas } from '@/components/layout'
import {
  Badge,
  Comparison,
  Footer,
  Subtitle,
  Title,
} from '@/components/ui'
import { content } from './content'

export function ComparisonPost() {
  return (
    <PostCanvas name="comparison" format="portrait" surface="soft">
      <div className="flex h-full flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Badge>{content.badge}</Badge>
          <Title size="h1">{content.title}</Title>
          <Subtitle>{content.subtitle}</Subtitle>
        </div>

        <Comparison
          left={content.comparison.left}
          right={content.comparison.right}
        />

        <Footer brand={content.footer.brand} handle={content.footer.handle} />
      </div>
    </PostCanvas>
  )
}
