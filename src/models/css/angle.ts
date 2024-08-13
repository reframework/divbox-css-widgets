import { AngleUnit } from '@src/models/css/enums'

export type IAngle = {
  v: number
  u: AngleUnit
}

export const AngleModel = (model?: Partial<IAngle>): IAngle => {
  return {
    v: model?.v || 0,
    u: model?.u || AngleUnit.DEG,
  }
}
