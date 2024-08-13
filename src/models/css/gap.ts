import { ILength } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export interface IGap {
  row: ILength | IVariable | null
  col: ILength | IVariable | null
}

export const GapModel = (props?: Partial<IGap>): IGap => {
  return {
    row: props?.row || null,
    col: props?.col || null,
  }
}
