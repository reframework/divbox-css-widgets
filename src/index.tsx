import { App } from '@src/App'
import { Css } from '@src/models/css'
import { ICssWidgetProps } from '@src/types/props'
import { useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)

const MockProvider = () => {
  const [state, setState] = useState<Css.ICss>(Css.Model.Css())

  const isVar = useCallback((value: any): value is Css.IVariable => {
    return value.startsWith('var(--')
  }, [])

  const getVarRawValue = useCallback((value: Css.IVariable): string | null => {
    return '100px'
  }, [])

  const onChange = useCallback((value: Partial<Css.ICss>) => {
    setState((prev) => ({ ...prev, ...value }))
  }, [])

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
