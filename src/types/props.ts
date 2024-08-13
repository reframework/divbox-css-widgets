import { Css } from '@src/models/css'

export interface ICssWidgetProps {
  isVar: (value: any) => value is Css.Variable
  getVarRawValue: (value: Css.Variable) => string | null
  value: Css.ICss
  onChange: (value: Partial<Css.ICss>) => void
}
