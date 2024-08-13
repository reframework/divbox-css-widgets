import { LengthUnit } from '@src/models/css/enums'
import { IFrTrack } from '@src/models/css/frTrack'
import { ILength } from '@src/models/css/length'

export type IMinMax = {
  min: ILength | IFrTrack | LengthUnit.AUTO
  max: ILength | IFrTrack | LengthUnit.AUTO
}

export const MinMaxModel = (model?: Partial<IMinMax>): IMinMax => {
  return {
    min: model?.min || LengthUnit.AUTO,
    max: model?.max || LengthUnit.AUTO,
  }
}
