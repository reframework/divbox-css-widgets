import { LengthUnit } from '@src/models/css/enums'

export type ILength = {
  /** The numeric value representing the length. */
  v: number

  /** The unit of measurement for the length (e.g., px, em, rem). */
  u: LengthUnit
}

export const LengthModel = (model: ILength): ILength => {
  return {
    v: model.v,
    u: model.u,
  }
}
