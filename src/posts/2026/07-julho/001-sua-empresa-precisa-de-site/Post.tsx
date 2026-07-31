import {
  PostCanvas,
  PostCarousel,
  PostStories,
} from '@/components/layout'
import {
  Slide01Cover,
  Slide02Problem,
  Slide03Comparison,
  Slide04Principles,
  Slide05Presentation,
  Story01Hook,
  Story02Problem,
  Story03Cta,
} from './slides'

/**
 * Post 001 — Swiss Tech Editorial
 * Capa aprovada: A · GAZU Editorial
 * Narrativa: IMPACTO → PROBLEMA → DEMONSTRAÇÃO → PRINCÍPIOS → APRESENTAÇÃO
 *
 * Conceitos: docs/post-001-visual-concepts.md
 * Decisões: docs/post-001-art-decisions.md
 */
export default function Post001() {
  return (
    <div className="flex flex-col gap-16">
      <PostCarousel>
        <PostCanvas
          name="post001-hook"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Slide01Cover />
        </PostCanvas>

        <PostCanvas
          name="post001-problema"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Slide02Problem />
        </PostCanvas>

        <PostCanvas
          name="post001-comparacao"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Slide03Comparison />
        </PostCanvas>

        <PostCanvas
          name="post001-principios"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Slide04Principles />
        </PostCanvas>

        <PostCanvas
          name="post001-apresentacao"
          format="portrait"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Slide05Presentation />
        </PostCanvas>
      </PostCarousel>

      <PostStories>
        <PostCanvas
          name="post001-story-1"
          format="story"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Story01Hook />
        </PostCanvas>

        <PostCanvas
          name="post001-story-2"
          format="story"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Story02Problem />
        </PostCanvas>

        <PostCanvas
          name="post001-story-3"
          format="story"
          surface="light"
          padding={0}
          contentClassName="relative"
        >
          <Story03Cta />
        </PostCanvas>
      </PostStories>
    </div>
  )
}
