import { Css } from '@src/models/css'
import * as React from 'react'
import {
  MenuClickEventHandler,
  MenuHoverEventHandler,
  RenderIconType,
} from 'rc-menu/lib/interface'

export interface ICssWidgetProps {
  isVar: (value: any) => value is Css.IVariable
  getVarRawValue: (value: Css.IVariable) => string | null
  value: Css.ICss
  onChange: (value: Partial<Css.ICss>) => void
  getRelativeParent: () => {
    name: string
  } | null
}

export interface ItemType {
  type?: 'item'
  label?: React.ReactNode
  disabled?: boolean
  itemIcon?: RenderIconType
  key: React.Key
  onMouseEnter?: MenuHoverEventHandler
  onMouseLeave?: MenuHoverEventHandler
  onClick?: MenuClickEventHandler
  labelInValue?: string
}
export interface MainItemType extends ItemType {
  description?: string
}
