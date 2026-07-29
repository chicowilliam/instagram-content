import { PostCanvas } from '@/components/layout'
import { Badge, Footer, Statistic } from '@/components/ui'
import { content } from './content'

export function StatisticPost() {
  return (
    <PostCanvas name="statistic" format="square" surface="soft">
      <div className="flex h-full flex-col gap-12">
        <Badge>{content.badge}</Badge>
        <div className="flex flex-1 items-center">
          <Statistic
            value={content.value}
            label={content.label}
            hint={content.hint}
          />
        </div>
        <Footer brand={content.footer.brand} handle={content.footer.handle} />
      </div>
    </PostCanvas>
  )
}
