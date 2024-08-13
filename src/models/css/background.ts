import { HexColorModel, IColor } from '@src/models/css/color'
import { BackgroundRepeat, BackgroundSize } from '@src/models/css/enums'
import {
  ILinearGradient,
  IRadialGradient,
  LinearGradientModel,
} from '@src/models/css/gradient'
import { IImage } from '@src/models/css/image'
import { ILength } from '@src/models/css/length'

export type IPlainBackground = {
  c: IColor
}

export type IGradientBackground = {
  g: ILinearGradient | IRadialGradient
}

export type IImageBackground = {
  image: IImage
  size:
    | BackgroundSize
    | {
        w: ILength | null // auto
        h: ILength | null // auto
      }
  position: {
    x: ILength
    y: ILength
  }
  repeat: BackgroundRepeat
  fixed: boolean // background-attachment: fixed
}

export type IBackgroundItem =
  | IPlainBackground
  | IGradientBackground
  | IImageBackground

export type IBackground = {
  c: IColor // fallback color
  items: IBackgroundItem[]
}

export const PlainBackgroundModel = (props: IPlainBackground): IPlainBackground => {
  return {
    c: props.c || HexColorModel(),
  }
}

export const GradientBackgroundModel = (
  props: IGradientBackground,
): IGradientBackground => {
  return {
    g: props.g || LinearGradientModel(),
  }
}

export const BackgroundModel = (props?: IBackground): IBackground => {
  return {
    c: props?.c || HexColorModel({ h: 'fff' }),
    items: [],
  }
}
