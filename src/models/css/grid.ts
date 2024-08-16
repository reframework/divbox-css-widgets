import {
  BetweenAround,
  GridAutoFlow,
  LengthLiteral,
  StartCenterEnd,
  StretchBaseline,
} from '@src/models/css/enums'
import { IFrTrack } from '@src/models/css/frTrack'
import { GapModel, IGap } from '@src/models/css/gap'
import { ILength } from '@src/models/css/length'
import { IMinMax } from '@src/models/css/minmax'

export type IGridTrack = ILength | IFrTrack | IMinMax | LengthLiteral.AUTO

export interface IGrid {
  /** Horizontal alignment of grid items along the X-axis. Default is 'stretch'. */
  justifyItems: StartCenterEnd | StretchBaseline

  /** Vertical alignment of grid items along the Y-axis. Default is 'stretch'. */
  alignItems: StartCenterEnd | StretchBaseline

  /** Defines the structure of the grid columns. Default is an empty array. */
  templateColumns: IGridTrack[]

  /** Defines the structure of the grid rows. Default is an empty array. */
  templateRows: IGridTrack[]

  /** Specifies how items are placed in the grid. Default is 'row'. */
  autoFlow: GridAutoFlow

  /** Specifies the gap size between rows and columns. Default is null for both. */
  gap: IGap

  /** Controls the distribution of space between rows. Default is 'stretch'. */
  alignContent: StartCenterEnd | BetweenAround | StretchBaseline.STRETCH | null

  /** Controls the distribution of space between columns. Default is 'stretch'. */
  justifyContent: StartCenterEnd | BetweenAround | StretchBaseline.STRETCH | null
}

export const GridModel = (props?: Partial<IGrid>): IGrid => {
  return {
    justifyItems: props?.justifyItems || StretchBaseline.STRETCH,
    alignItems: props?.alignItems || StretchBaseline.STRETCH,
    templateColumns: props?.templateColumns || [],
    templateRows: props?.templateRows || [],
    autoFlow: props?.autoFlow || GridAutoFlow.ROW,
    gap: props?.gap || GapModel(),
    alignContent: props?.alignContent || null,
    justifyContent: props?.justifyContent || null,
  }
}
