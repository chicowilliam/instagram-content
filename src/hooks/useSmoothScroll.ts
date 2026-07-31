import { useEffect, type RefObject } from 'react'
import Lenis from 'lenis'

/**
 * Smooth scrolling for the CMS shell only.
 * Never enable it on /export routes — Playwright needs instant, predictable
 * scroll positions when capturing slides.
 */
export function useSmoothScroll(
  wrapper: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    const element = wrapper.current
    if (!enabled || !element) return

    const content = element.firstElementChild
    if (!(content instanceof HTMLElement)) return

    const lenis = new Lenis({
      wrapper: element,
      content,
      duration: 0.9,
      smoothWheel: true,
    })

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [wrapper, enabled])
}
