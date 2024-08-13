export type IHexColor = {
  /** The hexadecimal value of the color. */
  h: string
  /** The alpha value of the color. 0-1 */
  a: number | null
}

export type IRgbColor = {
  /** The red value of the color. 0-255 */
  r: number
  /** The green value of the color. */
  g: number
  /** The blue value of the color. */
  b: number
  /** The alpha value of the color. 0-1 */
  a: number | null
}

export const HexColorModel = (
  props?: Omit<IHexColor, 'a'> & { a?: number },
): IHexColor => {
  return {
    h: props?.h || '000',
    a: props?.a || null,
  }
}

export const RgbColorModel = (
  props?: Omit<IRgbColor, 'a'> & { a?: number },
): IRgbColor => {
  return {
    r: props?.r || 0,
    g: props?.g || 0,
    b: props?.b || 0,
    a: props?.a || null,
  }
}

export type IColor = IHexColor | IRgbColor
