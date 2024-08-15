import { IColor } from '@src/models/css/color'
import { BorderStyle } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export type IBorderWidth = ILength | IVariable
export type IBorderRadius = ILength | IVariable

export type IBorderCustomRadius = {
  tl: ILength | IVariable | null
  tr: ILength | IVariable | null
  br: ILength | IVariable | null
  bl: ILength | IVariable | null
}

export type IBorderLine = {
  w: IBorderWidth | null // 1px
  c: IColor | null
  s: BorderStyle | null // solid
}

export type IBorderCustomLine = {
  t: IBorderLine | null
  r: IBorderLine | null
  b: IBorderLine | null
  l: IBorderLine | null
}

export const BorderLineModel = (props?: Partial<IBorderLine>): IBorderLine => {
  return {
    w: props?.w || null,
    c: props?.c || null,
    s: props?.s || null,
  }
}

export const BorderCustomLineModel = (
  props?: Partial<IBorderCustomLine>,
): IBorderCustomLine => {
  return {
    t: props?.t || null,
    r: props?.r || null,
    b: props?.b || null,
    l: props?.l || null,
  }
}

export const BorderCustomRadiusModel = (
  props?: Partial<IBorderCustomRadius>,
): IBorderCustomRadius => {
  return {
    tl: props?.tl || null,
    tr: props?.tr || null,
    br: props?.br || null,
    bl: props?.bl || null,
  }
}

export type IBorder = {
  line: IBorderLine | IBorderCustomLine | null
  radius: IBorderRadius | IBorderCustomRadius | null // 0px
}

export const BorderModel = (props?: Partial<IBorder>): IBorder => {
  return {
    line: props?.line || null,
    radius: props?.radius || null,
  }
}
