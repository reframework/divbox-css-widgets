import { Css } from '@src/models/css'

export const MARGIN_PRESETS = [0, 10, 20, 40, 60, 100, 150, 200].map((v) =>
  Css.Model.Length({
    v,
    u: Css.Enum.LengthUnit.PX,
  }),
)

export const PADDING_PRESETS = [0, 10, 20, 40, 60, 80, 100, 125, 150, 200].map((v) =>
  Css.Model.Length({
    v,
    u: Css.Enum.LengthUnit.PX,
  }),
)
