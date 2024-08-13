import { IColor } from '@src/models/css/color'
import { BorderStyle } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export type IOutlineWidth = ILength | IVariable
export type IOutlineOffset = ILength | IVariable

export type IOutline = {
  w: IOutlineWidth | null // 1px
  c: IColor | null
  s: BorderStyle | null // solid
  o: IOutlineOffset | null // 0px
}

export const OutlineModel = (props?: Partial<IOutline>): IOutline => {
  return {
    w: props?.w || null,
    c: props?.c || null,
    s: props?.s || null,
    o: props?.o || null,
  }
}
