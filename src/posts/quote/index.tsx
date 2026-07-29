import { PostCanvas } from '@/components/layout'
import { Badge, Footer, Quote } from '@/components/ui'
import { content } from './content'

export function QuotePost() {
  return (
    <PostCanvas name="quote" format="square" surface="mesh">
      <div className="flex h-full flex-col gap-12">
        <Badge tone="accent">{content.badge}</Badge>
        <div className="flex flex-1 items-center">
          <Quote author={content.author} role={content.role}>
            {content.quote}
          </Quote>
        </div>
        <Footer brand={content.footer.brand} handle={content.footer.handle} />
      </div>
    </PostCanvas>
  )
}
