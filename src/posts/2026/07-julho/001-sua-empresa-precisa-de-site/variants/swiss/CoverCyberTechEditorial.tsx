import {
  BarcodeDecoration,
  BrandSignature,
  BrowserCutout,
  CoordinatesLabel,
  CutoutShadow,
  EditorialCaption,
  MassiveWord,
  MicroTypeBlock,
  PosterNumber,
  SlideCounter,
  TechnicalLabel,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { base, typeScale } from '@/design-system'
import { PosterFrame, cover } from './shared'

/**
 * VARIANTE C — CYBER TECH EDITORIAL · modo CYBER_TECHNICAL
 *
 * Referência dominante: pôster NX-07 (15%, elevado a dominante nesta variante).
 * Princípios extraídos: base saturada chapada, objeto escuro dominando o centro,
 * colunas rígidas de microtipografia, código de barras e numeral de pôster.
 *
 * Adaptação honesta: o capacete 3D é insubstituível por CSS, então o objeto
 * protagonista é a janela do navegador em tema escuro — dark sobre cobalto
 * reproduz a mesma relação de massa. Nenhum texto decorativo em outro idioma e
 * nenhum serial inventado: toda etiqueta carrega dado real da peça.
 */
export function CoverCyberTechEditorial() {
  return (
    <PosterFrame surface={base.cobalt}>
      {/* Logotipo tipográfico no lugar do NX-07 */}
      <div className="absolute top-[60px] left-[64px]">
        <MassiveWord size="xl" className="text-white">
          {cover.keyword}
        </MassiveWord>
        <TechnicalLabel size="md" className="mt-2 text-hot-magenta">
          Antes de ler · a percepção já aconteceu
        </TechnicalLabel>
      </div>

      <BarcodeDecoration
        seed="post-001-swiss-tech-editorial"
        caption={`${cover.postId} · ${cover.date}`}
        tone="cobalt"
        className="absolute top-[62px] right-[64px]"
      />

      {/* Coluna técnica esquerda — dados reais da peça */}
      <div className="absolute top-[330px] left-[64px] flex flex-col gap-8">
        <PosterNumber
          value="01"
          label="Slide"
          accent="text-hot-magenta"
          tone="cobalt"
        />
        <MicroTypeBlock
          tone="cobalt"
          title="Peça"
          items={[cover.postId, 'CARROSSEL · 05 SLIDES', 'MODO CYBER_TECHNICAL']}
        />
      </div>

      {/* Coluna técnica direita — critérios de leitura de um site */}
      <div className="absolute top-[330px] right-[64px]">
        <MicroTypeBlock
          tone="cobalt"
          align="right"
          title="Leitura"
          items={['01 MENSAGEM', '02 HIERARQUIA', '03 AÇÃO', '04 PERCEPÇÃO']}
        />
      </div>

      {/* Objeto protagonista — escuro, centralizado, com sombra dura */}
      <div className="absolute top-[420px] left-1/2 -translate-x-1/2">
        <div className="relative">
          <CutoutShadow offsetX={22} offsetY={22} color="bg-editorial-ink/55" />
          <BrowserCutout
            url={siteUrl('escritorio')}
            width={700}
            tone="dark"
            angle={-3}
          >
            <WebsiteFragment business="escritorio" quality="intentional" />
          </BrowserCutout>
        </div>
      </div>

      {/* Mensagem — abaixo do objeto, em alto contraste */}
      <div className="absolute bottom-[218px] left-[64px]">
        {cover.lines.map((line) => (
          <p key={line} className={`${typeScale.display.sm} text-white uppercase`}>
            {line}
          </p>
        ))}
      </div>

      {/* Faixa técnica inferior */}
      <div className="absolute right-0 bottom-[104px] left-0 flex items-center gap-6 px-[64px]">
        <span
          aria-hidden
          className="h-[10px] w-[120px] shrink-0 bg-neon-lime"
        />
        <span
          aria-hidden
          className="pattern-hatch h-[10px] flex-1 text-white/45"
        />
        <CoordinatesLabel tone="cobalt" />
      </div>

      <div className="absolute right-[64px] bottom-[56px] left-[64px] flex items-end justify-between gap-8">
        <div className="flex flex-col gap-3">
          <EditorialCaption size="sm" className="w-[520px] text-white/75">
            {cover.support}
          </EditorialCaption>
          <SlideCounter
            current={cover.slide}
            total={cover.total}
            tone="cobalt"
            accent="bg-hot-magenta"
          />
        </div>
        <BrandSignature tone="cobalt" rule={false} className="w-[420px]" />
      </div>
    </PosterFrame>
  )
}
