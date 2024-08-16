import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { App } from '@src/App'
import { WIDGET_WIDTH } from '@src/constants/styles'
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
    <ChakraProvider>
      <Flex w="100%" justifyContent="flex-end">
        <Box bg={'gray.50'} maxW={WIDGET_WIDTH} minH="100vh" w="100%">
          <App
            {...({
              isVar,
              getVarRawValue,
              value: state,
              onChange,
            } as ICssWidgetProps)}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

root.render(<MockProvider />)
