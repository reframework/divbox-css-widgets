import { ILayout, LayoutModel } from '@src/models/css/display'
import { ISize, SizeModel } from '@src/models/css/size'
import {
  IMargin,
  IPadding,
  MarginModel,
  PaddingModel,
} from '@src/models/css/spacing'

export type ICss = {
  layout: ILayout
  p: IPadding
  m: IMargin
  size: ISize
}

export const CssModel = (props?: Partial<ICss>): ICss => {
  return {
    layout: props?.layout || LayoutModel(),
    p: props?.p || PaddingModel(),
    m: props?.m || MarginModel(),
    size: props?.size || SizeModel(),
  }
}
