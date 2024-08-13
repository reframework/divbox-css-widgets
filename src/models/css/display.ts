import { Display, Position, VerticalAlign } from '@src/models/css/enums'
import { IFlex } from '@src/models/css/flex'
import { IGrid } from '@src/models/css/grid'

export type ILayout = {
  /**
   * Display property is required.
   */
  d: Display
  /**
   * Flex settings
   * Null if user didn't set the value.
   */
  flex: IFlex | null
  /**
   * Grid settings
   * Null if user didn't set the value.
   */
  grid: IGrid | null
  /**
   * Applies to inline and inline-block elements.
   * Default value is baseline.
   * Null if user didn't set the value.
   */
  vAlign: VerticalAlign | null
}

export const LayoutModel = (props?: Partial<ILayout>): ILayout => {
  return {
    d: props?.d || Display.BLOCK,
    flex: props?.flex || null,
    grid: props?.grid || null,
    vAlign: props?.vAlign || null,
  }
}
