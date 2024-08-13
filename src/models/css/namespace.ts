import type { Variable, IMargin, IPadding } from './spacing'
import type { IFlex } from './flex'
import type { IGrid } from './grid'
import type { ILayout } from './display'
import type { IHeight, IWidth } from './size'
import type { ICss } from './css'
import type { IFrTrack } from './frTrack'
import type { ILength } from './length'
import type { IMinMax } from './minmax'
import type { IGap } from './gap'
import type { ISize } from './size'

import * as Enum from './enums'
import { Util } from './utils'
import { LayoutModel } from './display'
import { SizeModel } from './size'
import { MarginModel, PaddingModel } from './spacing'
import { FlexModel } from './flex'
import { GridModel } from './grid'
import { FrTrackModel } from './frTrack'
import { LengthModel } from './length'
import { MinMaxModel } from './minmax'
import { GapModel } from './gap'
import { CssModel } from './css'

const Model = {
  Css: CssModel,
  Flex: FlexModel,
  FrTrack: FrTrackModel,
  Gap: GapModel,
  Grid: GridModel,
  Layout: LayoutModel,
  Length: LengthModel,
  Margin: MarginModel,
  MinMax: MinMaxModel,
  Padding: PaddingModel,
  Size: SizeModel,
}

export {
  Enum,
  Model,
  Util,
  // Types
  ICss,
  IFlex,
  IFrTrack,
  IGap,
  IGrid,
  IHeight,
  ILayout,
  ILength,
  IMargin,
  IMinMax,
  IPadding,
  ISize,
  IWidth,
  Variable,
}
