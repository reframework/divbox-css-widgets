import { Filter, LengthUnit } from '@src/models/css/enums'
import { ILength, LengthModel } from '@src/models/css/length'

export type IFilter = {
  f: Filter
  /**
   * Length on blur filter, and percentage on other filters.
   */
  v: ILength | number
}

export const FilterModel = (props?: IFilter): IFilter => {
  return (
    props || {
      f: Filter.BLUR,
      v: LengthModel({
        v: 4,
        u: LengthUnit.PX,
      }),
    }
  )
}
