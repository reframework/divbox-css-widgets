import { IHexColor, IRgbColor, RgbColorModel } from '@src/models/css/color'
import {
  FontFamily,
  FontWeight,
  LengthUnit,
  LetterSpacingLiteral,
  TextAlign,
  TextDecoration,
  TextFontStyle,
  TextTransform,
  WhiteSpace,
  WordBreak,
  WordSpacingLiteral,
  Wrap,
} from '@src/models/css/enums'
import { ILength, LengthModel } from '@src/models/css/length'
import { ITextShadow } from '@src/models/css/shadows'
import { IVariable } from '@src/models/css/spacing'

export type ILetterSpacing = ILength | LetterSpacingLiteral.NORMAL
export type IWordSpacing = ILength | WordSpacingLiteral.NORMAL
export type ILineHeight = ILength | IVariable
export type IFontSize = ILength | IVariable

export type ITypography = {
  f: FontFamily
  s: IFontSize
  w: FontWeight
  c: IHexColor | IRgbColor | string
  a: TextAlign | null // left
  lh: ILineHeight | null // normal
  ls: ILetterSpacing | null // normal
  ws: IWordSpacing | null // normal
  fs: TextFontStyle | null // normal
  dec: TextDecoration | null // none
  ttr: TextTransform // none
  wbr: WordBreak // normal
  whs: WhiteSpace // normal
  wwr: Wrap // normal
  // dir: TextDirection | null // ltr //todo
  shd: ITextShadow | null
}

export const TypographyModel = (props?: Partial<ITypography>): ITypography => {
  return {
    f: props?.f || FontFamily.INTER,
    s: props?.s || LengthModel({ v: 14, u: LengthUnit.PX }),
    w: props?.w || FontWeight.REGULAR,
    c: props?.c || RgbColorModel(), //
    a: props?.a || TextAlign.LEFT,
    lh: props?.lh || null,
    ls: props?.ls || null,
    ws: props?.ws || null,
    dec: props?.dec || TextDecoration.NONE,
    ttr: props?.ttr || TextTransform.NONE,
    wbr: props?.wbr || WordBreak.NORMAL,
    whs: props?.whs || WhiteSpace.NORMAL,
    wwr: props?.wwr || Wrap.NORMAL,
    // dir: props?.dir || null,
    shd: props?.shd || null,
    fs: props?.fs || TextFontStyle.NORMAL,
  }
}
