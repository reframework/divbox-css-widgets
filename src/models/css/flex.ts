import {
  BetweenAround,
  FlexDirection,
  FlexWrap,
  StartCenterEnd,
  StretchBaseline,
} from '@src/models/css/enums'
import { GapModel, IGap } from '@src/models/css/gap'

/**
 * For direction: 'row', X-axis alignment is controlled by `justifyContent`, and Y-axis by `alignItems`.
 * For direction: 'column', X-axis alignment is controlled by `alignItems`, and Y-axis by `justifyContent`.
 * In both cases: 'start' corresponds to Left/Top, 'end' to Right/Bottom, and 'center' to Center.
 */
export type IFlex = {
  /** Aligns flex items along the cross axis. Default is 'stretch'. */
  alignItems: StartCenterEnd | StretchBaseline

  /** Controls the distribution of space between flex items. */
  justifyContent: StartCenterEnd | BetweenAround

  /** Defines the direction of flex items in the container. */
  direction: FlexDirection

  /** Defines whether flex items are forced into a single line or can wrap onto multiple lines. */
  wrap: FlexWrap

  /** Specifies the gap size between flex items. */
  gap: IGap

  /** Controls the distribution of space between flex lines. Default is null. */
  alignContent: StartCenterEnd | BetweenAround | null
}

export const FlexModel = (props?: Partial<IFlex>): IFlex => {
  return {
    alignItems: props?.alignItems || StretchBaseline.STRETCH,
    justifyContent: props?.justifyContent || StartCenterEnd.START,
    direction: props?.direction || FlexDirection.ROW,
    wrap: props?.wrap || FlexWrap.NOWRAP,
    gap: props?.gap || GapModel(),
    alignContent: props?.alignContent || null,
  }
}
