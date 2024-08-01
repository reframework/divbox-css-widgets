import { SuperButton } from '@src/components/Button'
import { hot } from 'react-hot-loader/root'
import { ErrorBoundary } from 'react-error-boundary'
import { App as AntApp, ConfigProvider } from 'antd'
import { Global } from '@emotion/react'
import { colors } from '@src/components/theme/colors'
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'var(--font-family-base)',
          },
          components: {
            Menu: {
              // @ts-expect-error type
              itemBorderRadius: 'var(--radius-base)',
            },
          },
        }}
      >
        <AntApp>
          <ErrorBoundary fallbackRender={() => 'Whoops'}>
            <SuperButton />
          </ErrorBoundary>
        </AntApp>
        <GlobalStyles />
      </ConfigProvider>
    </ChakraProvider>
  )
}

export default hot(App)

export const GlobalStyles = () => {
  return <Global styles={[colors]} />
}
