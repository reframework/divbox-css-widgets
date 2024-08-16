import { LengthLiteral } from '@src/models/css/enums'
import { IFrTrack } from '@src/models/css/frTrack'
import { ILength } from '@src/models/css/length'

export type IMinMax = {
  min: ILength | IFrTrack | LengthLiteral.AUTO
  max: ILength | IFrTrack | LengthLiteral.AUTO
}

export const MinMaxModel = (model?: Partial<IMinMax>): IMinMax => {
  return {
    min: model?.min || LengthLiteral.AUTO,
    max: model?.max || LengthLiteral.AUTO,
  }
}
