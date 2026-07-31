/**
 * SWISS TECH EDITORIAL — biblioteca de direção de arte dos posts.
 *
 * Consolida a antiga pasta `components/editorial/`: cada componente aqui tem
 * função declarada na direção, não é wrapper genérico.
 * Contrato: docs/reference-style-analysis.md
 */

export {
  MassiveWord,
  VerticalHeadline,
  DiagonalHeadline,
  OverlapHeadline,
  RotatedText,
  TypeAsImage,
  EditorialCaption,
} from './typography'

export {
  TechnicalLabel,
  MicroTypeBlock,
  CoordinatesLabel,
  BarcodeDecoration,
  PosterNumber,
  SlideCounter,
  BrandSignature,
} from './technical'

export {
  CropMarks,
  SwissRule,
  PaperGrain,
  HalftoneTexture,
  AnnotationMark,
  CutoutShadow,
} from './marks'

export {
  PaperTexture,
  GrainOverlay,
  NoiseOverlay,
  EditorialTexture,
  EditorialGrid,
  CornerMarks,
  SectionLabel,
  FooterRule,
  RegistrationMarks,
  AmbientPanel,
  GhostWord,
  EditorialBand,
  ShadowPlane,
  ShapeCut,
  PosterBlock,
  FadedNumber,
  BackgroundAccent,
  BackgroundSystem,
} from './background-system'

export {
  SignatureFooterMinimal,
  SignatureFooterSplit,
  SignatureLabel,
  SignatureVertical,
  SignatureDomainOnly,
  SignatureDomain,
} from './signatures'

export { ImageMask, EditorialCutout, BrowserCutout, WebAuditTag } from './cutouts'

export { WebsiteFragment, siteUrl } from './WebsiteFragment'

export {
  CafeBadWebsite,
  CafeGoodWebsite,
  BadWebsiteFrame,
  BadWebsiteHeroCrop,
  BadWebsiteContactCrop,
  BadWebsitePromoCrop,
  AnnotatedBadWebsite,
  AuraBadHero,
  AuraBadContact,
  AuraBadPromo,
} from '@/components/mocksites'

export type { ArtProps, ArtTone, FakeBusiness, SiteQuality } from './types'
