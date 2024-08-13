import { IColor, RgbColorModel } from '@src/models/css/color'
import { LengthUnit } from '@src/models/css/enums'
import { ILength, LengthModel } from '@src/models/css/length'

export type IBoxShadow = {
  /** The horizontal offset of the shadow. */
  x: ILength

  /** The vertical offset of the shadow. */
  y: ILength

  /** The blur radius of the shadow. */
  b: ILength

  /** The spread radius of the shadow. */
  s: ILength

  /** The color of the shadow. */
  c: IColor

  /** The inset shadow. */
  i: boolean
}

export const BoxShadowModel = (props?: Partial<IBoxShadow>): IBoxShadow => {
  return {
    x: props?.x || LengthModel({ v: 0, u: LengthUnit.PX }),
    y: props?.y || LengthModel({ v: 0, u: LengthUnit.PX }),
    b: props?.b || LengthModel({ v: 0, u: LengthUnit.PX }),
    s: props?.s || LengthModel({ v: 0, u: LengthUnit.PX }),
    c: props?.c || RgbColorModel({ r: 0, g: 0, b: 0, a: 0.25 }),
    i: props?.i || false,
  }
}

export type ITextShadow = {
  /** The horizontal offset of the shadow. */
  x: ILength

  /** The vertical offset of the shadow. */
  y: ILength

  /** The blur radius of the shadow. */
  b: ILength

  /** The color of the shadow. */
  c: IColor
}

export const TextShadowModel = (props?: Partial<ITextShadow>): ITextShadow => {
  return {
    x: props?.x || LengthModel({ v: 0, u: LengthUnit.PX }),
    y: props?.y || LengthModel({ v: 0, u: LengthUnit.PX }),
    b: props?.b || LengthModel({ v: 0, u: LengthUnit.PX }),
    c: props?.c || RgbColorModel({ r: 0, g: 0, b: 0, a: 0.25 }),
  }
}
