import { LengthUnit } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'

export type Variable = string

export type IMargin = {
  /** The margin on the top side. Default is null. */
  t: ILength | Variable | LengthUnit.AUTO | null
  r: ILength | Variable | LengthUnit.AUTO | null
  b: ILength | Variable | LengthUnit.AUTO | null
  l: ILength | Variable | LengthUnit.AUTO | null
}

export type IPadding = {
  t: ILength | Variable | null
  r: ILength | Variable | null
  b: ILength | Variable | null
  l: ILength | Variable | null
}

export const MarginModel = (props?: Partial<IMargin>): IMargin => {
  return {
    t: props?.t || null,
    r: props?.r || null,
    b: props?.b || null,
    l: props?.l || null,
  }
}

export const PaddingModel = (props?: Partial<IPadding>): IPadding => {
  return {
    t: props?.t || null,
    r: props?.r || null,
    b: props?.b || null,
    l: props?.l || null,
  }
}
