import { Css } from '@src/models/css'

export interface ICssWidgetProps {
  isVar: (value: any) => value is Css.IVariable
  getVarRawValue: (value: Css.IVariable) => string | null
  value: Css.ICss
  onChange: (value: Partial<Css.ICss>) => void
  getRelativeParent: () => {
    name: string
  } | null
}
