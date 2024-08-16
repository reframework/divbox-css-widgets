import { Display, LengthLiteral } from '@src/models/css/enums'
import { IFrTrack } from '@src/models/css/frTrack'
import { ILength } from '@src/models/css/length'

const isFlexLayout = (v: Display) => {
  if (typeof v !== 'string') return false

  return [Display.FLEX, Display.INLINE_FLEX].includes(v)
}

const isGridLayout = (v: Display) => {
  if (typeof v !== 'string') return

  return [Display.GRID, Display.INLINE_GRID].includes(v)
}

const isInlineLayout = (v: Display) => {
  if (typeof v !== 'string') return false

  return [Display.INLINE_BLOCK, Display.INLINE].includes(v)
}

const isBlockLayout = (v: Display) => {
  if (typeof v !== 'string') return false

  return [Display.BLOCK].includes(v)
}

const isNoneLayout = (v: Display) => {
  if (typeof v !== 'string') return false

  return [Display.NONE].includes(v)
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

export const Util = {
  isFlex: isFlexLayout,
  isGrid: isGridLayout,
  isInline: isInlineLayout,
  isBlock: isBlockLayout,
  isNone: isNoneLayout,
  isFrTrack,
  isLength,
  isAuto,
}
