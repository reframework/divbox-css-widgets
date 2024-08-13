import { LengthUnit, SizeLiteral } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'
import { Variable } from '@src/models/css/spacing'

export type IWidth = ILength | Variable | LengthUnit.AUTO | SizeLiteral | null
export type IHeight = ILength | Variable | LengthUnit.AUTO | SizeLiteral | null

export type ISize = {
  w: IWidth
  h: IHeight
  minW: IWidth
  minH: IHeight
  maxW: IWidth
  maxH: IHeight
}

export const SizeModel = (props?: Partial<ISize>): ISize => {
  return {
    w: props?.w || null,
    h: props?.h || null,
    minW: props?.minW || null,
    minH: props?.minH || null,
    maxW: props?.maxW || null,
    maxH: props?.maxH || null,
  }
}
