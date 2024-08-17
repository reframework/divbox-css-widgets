import { Display, LengthLiteral } from '@src/models/css/enums'
import { IFrTrack } from '@src/models/css/frTrack'
import { ILength } from '@src/models/css/length'
import { isPlainObject, isEqual } from 'lodash'

const isFlexLayout = (v: any) => {
  if (typeof v !== 'string') return false

  return [Display.FLEX, Display.INLINE_FLEX].includes(v as Display)
}

const isGridLayout = (v: any) => {
  if (typeof v !== 'string') return

  return [Display.GRID, Display.INLINE_GRID].includes(v as Display)
}

const isInlineLayout = (v: any) => {
  if (typeof v !== 'string') return false

  return [Display.INLINE_BLOCK, Display.INLINE].includes(v as Display)
}

const isBlockLayout = (v: any) => {
  if (typeof v !== 'string') return false

  return [Display.BLOCK].includes(v as Display)
}

const isNoneLayout = (v: any) => {
  if (typeof v !== 'string') return false

  return [Display.NONE].includes(v as Display)
}

const isFrTrack = (v: any): v is IFrTrack => {
  if (!v || typeof v !== 'object') return false

  return 'fr' in v
}

const isLength = (v: any): v is ILength => {
  if (!v || typeof v !== 'object') return false

  return 'v' in v && 'u' in v
}

const isAuto = (v: any): v is LengthLiteral.AUTO => {
  if (typeof v !== 'string') return false

  return v.trim().toLowerCase() === LengthLiteral.AUTO
}

const isEmptyValue = (v: any) => {
  /**
   * No value is considered empty
   */
  return v == null
}

const isEmptyModel = (v: any, model: () => any) => {
  const instance = model()

  if (!v || !isPlainObject(v) || !isPlainObject(instance)) return false

  return isEqual(v, instance)
}

export const Util = {
  isFlex: isFlexLayout,
  isGrid: isGridLayout,
  isInline: isInlineLayout,
  isBlock: isBlockLayout,
  isNone: isNoneLayout,
  isFrTrack,
  isLength,
  isAuto,
  isEmptyModel,
  isEmptyValue,
}
