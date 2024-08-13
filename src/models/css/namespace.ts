import type { IVariable, IMargin, IPadding } from './spacing'
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
import type { IInset, IPosition } from './position'
import type { IAngle } from './angle'
import type { IColor, IHexColor, IRgbColor } from './color'
import type { IFilter } from './filters'
import type { IOpacity } from './opacity'
import type { IOutline, IOutlineWidth, IOutlineOffset } from './outline'
import type { IBoxShadow, ITextShadow } from './shadows'
import type {
  ITransform,
  ITransformOrigin,
  ITransformRotate,
  ITransformScale,
  ITransformSkew,
  ITransformTranslate,
  ITransformation,
} from './transform'
import type { ITransition } from './transition'
import type {
  ITypography,
  IFontSize,
  ILetterSpacing,
  ILineHeight,
} from './typography'
import type {
  IBackground,
  IBackgroundItem,
  IImageBackground,
  IGradientBackground,
  IPlainBackground,
} from './background'
import type { IFontFamily } from './fontFamily.ts'
import type {
  IBorder,
  IBorderCustomLine,
  IBorderCustomRadius,
  IBorderLine,
  IBorderWidth,
  IBorderRadius,
} from './border'

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
import { PositionModel, InsetModel } from './position'
import { AngleModel } from './angle'
import { RgbColorModel, HexColorModel } from './color'
import { FilterModel } from './filters'
import { OutlineModel } from './outline'
import { BoxShadowModel, TextShadowModel } from './shadows'
import { TransformModel, TransformationModel } from './transform'
import { TransitionModel } from './transition'
import { TypographyModel } from './typography'
import { FontFamilyModel } from './fontFamily'
import {
  BorderCustomLineModel,
  BorderModel,
  BorderCustomRadiusModel,
  BorderLineModel,
} from './border'
import {
  GradientColorModel,
  LinearGradientModel,
  RadialGradientModel,
} from './gradient'

import {
  BackgroundModel,
  GradientBackgroundModel,
  PlainBackgroundModel,
} from './background'

const Model = {
  Angle: AngleModel,
  BoxShadow: BoxShadowModel,
  Css: CssModel,
  Filter: FilterModel,
  Flex: FlexModel,
  FrTrack: FrTrackModel,
  Gap: GapModel,
  GradientColor: GradientColorModel,
  Grid: GridModel,
  Inset: InsetModel,
  Layout: LayoutModel,
  Length: LengthModel,
  LinearGradient: LinearGradientModel,
  Margin: MarginModel,
  MinMax: MinMaxModel,
  Outline: OutlineModel,
  Padding: PaddingModel,
  Position: PositionModel,
  RadialGradient: RadialGradientModel,
  RgbColor: RgbColorModel,
  Size: SizeModel,
  Transform: TransformModel,
  Transition: TransitionModel,
  Typography: TypographyModel,
  TextShadow: TextShadowModel,
  Transformation: TransformationModel,
  HexColor: HexColorModel,
  Background: BackgroundModel,
  GradientBackground: GradientBackgroundModel,
  PlainBackground: PlainBackgroundModel,
  FontFamily: FontFamilyModel,
  BorderCustomLine: BorderCustomLineModel,
  Border: BorderModel,
  BorderCustomRadius: BorderCustomRadiusModel,
  BorderLine: BorderLineModel,
}

export {
  Enum,
  Model,
  Util,
  // Types
  IAngle,
  IBackgroundItem,
  IBorder,
  IBorderCustomLine,
  IBorderCustomRadius,
  IBorderLine,
  IBorderRadius,
  IBorderWidth,
  IColor,
  ICss,
  IFlex,
  IFontFamily,
  IFontSize,
  IFrTrack,
  IGap,
  IGrid,
  IHeight,
  IImageBackground,
  IInset,
  ILayout,
  ILength,
  ILetterSpacing,
  ILineHeight,
  IMargin,
  IMinMax,
  IOpacity,
  IOutlineOffset,
  IOutlineWidth,
  IPadding,
  IPosition,
  ISize,
  ITransform,
  ITransformation,
  ITransformOrigin,
  ITransformRotate,
  ITransformScale,
  ITransformSkew,
  ITransformTranslate,
  ITypography,
  IWidth,
  IVariable,
}
