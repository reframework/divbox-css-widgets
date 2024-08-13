import { App } from '@src/App'
import { Css } from '@src/models/css'
import { ICssWidgetProps } from '@src/types/props'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)

const MockProvider = () => {
  const [state, setState] = useState<Css.ICss>(Css.Model.Css())

  const isVar = (value: any): value is Css.Variable => {
    return value.startsWith('var(--')
  }

  const getVarRawValue = (value: Css.Variable): string | null => {
    return '100px'
  }

  const onChange = (value: Partial<Css.ICss>) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  return (
    <App
      {...({
        isVar,
        getVarRawValue,
        value: state,
        onChange,
      } as ICssWidgetProps)}
    />
  )
}

root.render(<MockProvider />)
