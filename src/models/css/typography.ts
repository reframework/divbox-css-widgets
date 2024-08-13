import { HexColorModel, IHexColor, IRgbColor } from '@src/models/css/color'
import {
  FontFamily,
  FontWeight,
  LengthUnit,
  LetterSpacingLiteral,
  TextAlign,
  TextDecoration,
  TextDirection,
  TextTransform,
  WhiteSpace,
  WordBreak,
} from '@src/models/css/enums'
import { ILength, LengthModel } from '@src/models/css/length'
import { ITextShadow } from '@src/models/css/shadows'
import { Variable } from '@src/models/css/spacing'

export type ILetterSpacing = ILength | LetterSpacingLiteral.NORMAL
export type ILineHeight = ILength | Variable
export type IFontSize = ILength | Variable

export type ITypography = {
  f: FontFamily
  s: IFontSize
  w: FontWeight
  c: IHexColor | IRgbColor
  a: TextAlign | null // left
  lh: ILineHeight | null // normal
  ls: ILetterSpacing | null // normal
  dec: TextDecoration | null // none
  ttr: TextTransform | null // none
  wbr: WordBreak | null // normal
  whs: WhiteSpace | null // normal
  dir: TextDirection | null // ltr
  shd: ITextShadow | null
}

export const TypographyModel = (props?: Partial<ITypography>): ITypography => {
  return {
    f: props?.f || FontFamily.INTER,
    s: props?.s || LengthModel({ v: 14, u: LengthUnit.PX }),
    w: props?.w || FontWeight.REGULAR,
    c: props?.c || HexColorModel({ h: '000000' }),
    a: props?.a || null,
    lh: props?.lh || null,
    ls: props?.ls || null,
    dec: props?.dec || null,
    ttr: props?.ttr || null,
    wbr: props?.wbr || null,
    whs: props?.whs || null,
    dir: props?.dir || null,
    shd: props?.shd || null,
  }
}
