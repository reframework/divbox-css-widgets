import { LengthLiteral, Position } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export type IInset = {
  t: ILength | IVariable | LengthLiteral.AUTO | null
  r: ILength | IVariable | LengthLiteral.AUTO | null
  b: ILength | IVariable | LengthLiteral.AUTO | null
  l: ILength | IVariable | LengthLiteral.AUTO | null
}

export interface IPosition {
  p: Position
  inset: IInset | null
  z: number | null
}

export const InsetModel = (props?: Partial<IInset>): IInset => {
  return {
    /** The margin on the top side.
     * Default is auto.
     * Null when not set.
     */
    t: props?.t || null,
    r: props?.r || null,
    b: props?.b || null,
    l: props?.l || null,
  }
}

export const PositionModel = (props?: Partial<IPosition>): IPosition => {
  return {
    p: props?.p || Position.STATIC,
    inset: props?.inset || null,
    z: props?.z || null,
  }
}
