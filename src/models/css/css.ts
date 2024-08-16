import { BackgroundModel, IBackground } from '@src/models/css/background'
import { IBorder } from '@src/models/css/border'
import { ILayout, LayoutModel } from '@src/models/css/display'
import { BoxSizing, Cursor, Overflow, PointerEvents } from '@src/models/css/enums'
import { IFilter } from '@src/models/css/filters'
import { IOpacity } from '@src/models/css/opacity'
import { IOutline } from '@src/models/css/outline'
import { IPosition, PositionModel } from '@src/models/css/position'
import { IBoxShadow } from '@src/models/css/shadows'
import { ISize, SizeModel } from '@src/models/css/size'
import {
  IMargin,
  IPadding,
  MarginModel,
  PaddingModel,
} from '@src/models/css/spacing'
import { ITransform, TransformModel } from '@src/models/css/transform'
import { ITransition } from '@src/models/css/transition'
import { ITypography, TypographyModel } from '@src/models/css/typography'

export type ICss = {
  backdropFilter: IFilter[]
  background: IBackground | null
  border: IBorder | null
  boxShadow: IBoxShadow[]
  boxSizing: BoxSizing | null
  cursor: Cursor | null
  filter: IFilter[] | null
  layout: ILayout
  margin: IMargin
  opacity: IOpacity | null
  outline: IOutline | null
  overflow: Overflow | null
  padding: IPadding
  pointerEvents: PointerEvents | null
  position: IPosition
  size: ISize
  text: ITypography
  transform: ITransform
  transition: ITransition[]
}

export const CssModel = (props?: Partial<ICss>): ICss => {
  return {
    backdropFilter: props?.backdropFilter || [],
    background: props?.background || BackgroundModel(),
    border: props?.border || null,
    boxShadow: props?.boxShadow || [],
    boxSizing: props?.boxSizing || null,
    cursor: props?.cursor || null,
    filter: props?.filter || null,
    layout: props?.layout || LayoutModel(),
    margin: props?.margin || MarginModel(),
    opacity: props?.opacity || null,
    outline: props?.outline || null,
    overflow: props?.overflow || null,
    padding: props?.padding || PaddingModel(),
    pointerEvents: props?.pointerEvents || null,
    position: props?.position || PositionModel(),
    size: props?.size || SizeModel(),
    text: props?.text || TypographyModel(),
    transform: props?.transform || TransformModel(),
    transition: props?.transition || [],
  }
}
