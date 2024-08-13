import { LengthUnit } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'

export type IVariable = string

export type IMargin = {
  /** The margin on the top side. Default is null. */
  t: ILength | IVariable | LengthUnit.AUTO | null
  r: ILength | IVariable | LengthUnit.AUTO | null
  b: ILength | IVariable | LengthUnit.AUTO | null
  l: ILength | IVariable | LengthUnit.AUTO | null
}

export type IPadding = {
  t: ILength | IVariable | null
  r: ILength | IVariable | null
  b: ILength | IVariable | null
  l: ILength | IVariable | null
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
