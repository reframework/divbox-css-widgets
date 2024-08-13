import { FontFamily, FontWeight } from '@src/models/css/enums'

export type IFontFamily = {
  /**
   * The display label of the font family.
   * e.g 'Roboto'
   */
  label: string
  /** key e.g 'roboto' */
  value: FontFamily
  /** The font weights available for the font family. */
  weights: FontWeight[]
  /** The default font weight of the text. */
  weight: FontWeight
}

export const FontFamilyModel = (props: IFontFamily): IFontFamily => {
  return {
    label: props.label,
    value: props.value,
    weights: props.weights,
    weight: props.weight,
  }
}
