import { ILength } from '@src/models/css/length'
import { Variable } from '@src/models/css/spacing'

export interface IGap {
  row: ILength | Variable | null
  col: ILength | Variable | null
}

export const GapModel = (props?: Partial<IGap>): IGap => {
  return {
    row: props?.row || null,
    col: props?.col || null,
  }
}
