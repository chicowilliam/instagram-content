import {
  BrandSignature,
  BrowserCutout,
  DiagonalHeadline,
  EditorialCaption,
  ImageMask,
  MicroTypeBlock,
  PaperGrain,
  SlideCounter,
  SwissRule,
  TechnicalLabel,
  VerticalHeadline,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { base, modes, typeScale } from '@/design-system'
import { PosterFrame, cover } from './shared'

const ANGLE = modes.SWISS_DISRUPTION.angle

/**
 * VARIANTE B — SWISS DISRUPTION · modo SWISS_DISRUPTION
 *
 * Referência dominante: pôster Helvetica/LOT (30%).
 * Princípios extraídos: palavra vermelha vertical colada à borda, cunha preta no
 * canto, objeto fotográfico inclinado no mesmo eixo dos elementos diagonais, e a
 * escada de pesos tipográficos como microdetalhe.
 *
 * Adaptação: a escada de pesos vira a escada de critérios de avaliação de um
 * site — mensagem, hierarquia, ação, percepção. O avião vira a janela do
 * navegador, inclinada no mesmo ângulo.
 *
 * Todas as rotações usam o ângulo canônico do modo. Nada é rotacionado ao acaso.
 */
export function CoverSwissDisruption() {
  return (
    <PosterFrame surface={base.paper}>
      <PaperGrain strength={0.06} />

      {/* Cunha preta — massa no canto superior direito */}
      <ImageMask
        shape="wedge"
        color="bg-editorial-ink"
        size={430}
        className="top-0 right-0"
      />

      {/* Palavra-chave vertical em vermelho, colada à borda esquerda */}
      <div className="absolute top-0 bottom-0 left-[10px] flex items-center">
        <VerticalHeadline side="left" size="xl" className="text-signal-red">
          {cover.keyword}
        </VerticalHeadline>
      </div>

      {/* Vetor diagonal em vermelho, atrás do objeto */}
      <div className="absolute bottom-[300px] left-[120px] text-signal-red/85">
        <SwissRule weight={5} length={1080} angle={ANGLE} />
      </div>

      {/* Mensagem principal */}
      <div className="absolute top-[92px] left-[210px]">
        {cover.lines.map((line) => (
          <p
            key={line}
            className={`${typeScale.display.sm} text-editorial-ink uppercase`}
          >
            {line}
          </p>
        ))}
        <p className={`${typeScale.serif.md} text-editorial-ink/70`}>
          {cover.connector}
        </p>
      </div>

      <TechnicalLabel
        marker="01/05"
        className="absolute top-[76px] right-[64px] text-white/85"
      >
        Impressão
      </TechnicalLabel>

      {/* Objeto protagonista inclinado no eixo do modo */}
      <div className="absolute top-[470px] left-[150px]">
        <BrowserCutout
          url={siteUrl('clinica')}
          width={720}
          angle={ANGLE / 2}
          className="grayscale"
        >
          <WebsiteFragment business="clinica" quality="intentional" />
        </BrowserCutout>
      </div>

      {/* Diagonal tipográfica — reforça o mesmo vetor */}
      <DiagonalHeadline
        angle={ANGLE}
        size="sm"
        className="absolute top-[1090px] left-[92px] text-editorial-ink/25"
      >
        Percepção
      </DiagonalHeadline>

      {/* Escada de critérios — tradução da escada de pesos do pôster */}
      <div
        className="absolute right-[70px] bottom-[300px] origin-bottom-right"
        style={{ transform: `rotate(${ANGLE}deg)` }}
      >
        <MicroTypeBlock
          align="right"
          items={['MENSAGEM', 'HIERARQUIA', 'AÇÃO', 'PERCEPÇÃO']}
        />
      </div>

      {/* Leitura de apoio e rodapé */}
      <div className="absolute right-[64px] bottom-[72px] left-[210px] flex flex-col gap-6">
        <EditorialCaption size="sm" className="w-[420px] text-editorial-ink/70">
          {cover.support}
        </EditorialCaption>
        <div className="flex items-end justify-between gap-8">
          <SlideCounter current={cover.slide} total={cover.total} />
          <BrandSignature rule={false} className="w-[440px]" />
        </div>
      </div>
    </PosterFrame>
  )
}
