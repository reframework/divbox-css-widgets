import { Display } from '@src/models/css/enums'

const isFlexLayout = (v: Display) => {
  return [Display.FLEX, Display.INLINE_FLEX].includes(v)
}

const isGridLayout = (v: Display) => {
  return [Display.GRID, Display.INLINE_GRID].includes(v)
}

const isInlineLayout = (v: Display) => {
  return [Display.INLINE_BLOCK, Display.INLINE].includes(v)
}

const isBlockLayout = (v: Display) => {
  return [Display.BLOCK].includes(v)
}

const isNoneLayout = (v: Display) => {
  return [Display.NONE].includes(v)
}

export const Util = {
  isFlex: isFlexLayout,
  isGrid: isGridLayout,
  isInline: isInlineLayout,
  isBlock: isBlockLayout,
  isNone: isNoneLayout,
}
