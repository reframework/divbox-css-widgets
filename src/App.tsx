import { SuperButton } from '@src/components/Button'
import { hot } from 'react-hot-loader/root'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'
import { App as AntApp } from 'antd'

export const App = () => {
  return (
    <ChakraProvider>
      <AntApp>
        <ErrorBoundary fallbackRender={() => 'Whoops'}>
          <SuperButton />
        </ErrorBoundary>
      </AntApp>
    </ChakraProvider>
  )
}

export default hot(App)
