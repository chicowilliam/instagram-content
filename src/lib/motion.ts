/**
 * Motion (successor to Framer Motion) — micro-animations for the CMS UI.
 * Prefer discreet motion. Never decorate Instagram export canvases with
 * looping animations; Playwright captures static frames.
 */
export {
  motion,
  AnimatePresence,
  LayoutGroup,
  useAnimate,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
