import { ICssWidgetProps } from '@src/types/props'
import { createContext, useContext } from 'react'

export const ctx = createContext<ICssWidgetProps>({} as ICssWidgetProps)

export const useProps = () => {
  return useContext(ctx)
}
