import { AngleModel, IAngle } from '@src/models/css/angle'
import { IColor, RgbColorModel } from '@src/models/css/color'
import {
  LengthUnit,
  RadialGradientShape,
  RadialGradientSize,
} from '@src/models/css/enums'
import { ILength, LengthModel } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export type IGradientColor = {
  c: IColor
  p: number
}

export type ILinearGradient = {
  angle: IAngle | IVariable
  colors: IGradientColor[]
}

export type IRadialGradient = {
  shape: RadialGradientShape
  size: RadialGradientSize
  position: {
    x: ILength
    y: ILength
  }
  colors: IGradientColor[]
}

export const GradientColorModel = (props?: IGradientColor): IGradientColor => {
  return {
    c: props?.c || RgbColorModel(),
    p: props?.p || 0,
  }
}

export const LinearGradientModel = (props?: ILinearGradient): ILinearGradient => {
  return {
    angle: props?.angle || AngleModel(),
    colors: props?.colors || [
      GradientColorModel({
        c: RgbColorModel({ r: 0, g: 0, b: 0 }),
        p: 0,
      }),
      GradientColorModel({
        c: RgbColorModel({ r: 255, g: 255, b: 255 }),
        p: 100,
      }),
    ],
  }
}

export const RadialGradientModel = (props?: IRadialGradient): IRadialGradient => {
  return {
    shape: props?.shape || RadialGradientShape.ELLIPSE,
    size: props?.size || RadialGradientSize.FARTHEST_SIDE,
    position: props?.position || {
      x: LengthModel({
        v: 50,
        u: LengthUnit.PERCENT,
      }),
      y: LengthModel({
        v: 50,
        u: LengthUnit.PERCENT,
      }),
    },
    colors: props?.colors || [
      GradientColorModel({
        c: RgbColorModel({ r: 0, g: 0, b: 0 }),
        p: 0,
      }),
      GradientColorModel({
        c: RgbColorModel({ r: 255, g: 255, b: 255 }),
        p: 100,
      }),
    ],
  }
}
