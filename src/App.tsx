import { hot } from 'react-hot-loader/root'
import { ErrorBoundary } from 'react-error-boundary'
import { App as AntApp, ConfigProvider } from 'antd'
import { Global } from '@emotion/react'
import { colors } from '@src/components/theme/colors'
import { ChakraProvider } from '@chakra-ui/react'
import { Widget } from '@src/components/Widget'
import { ctx } from '@src/components/Context'
import { ICssWidgetProps } from '@src/types/props'

export const App = (props: ICssWidgetProps) => {
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
            Dropdown: {
              colorPrimary: 'var(--chakra-colors-gray-900)',
              controlItemBgActive: 'var(--color-gray-2)',
              fontSize: 'var(--chakra-fontSizes-xs)',
              lineHeight: '2',
              paddingBlock: 5,
              controlItemBgHover: 'var(--chakra-colors-gray-100)',
              controlItemBgActiveHover: 'var(--chakra-colors-gray-100)',
            },
            Radio: {
              buttonSolidCheckedHoverBg: 'var(--chakra-colors-gray-100)',
              buttonSolidCheckedBg: 'var(--chakra-colors-gray-300)',
              buttonSolidCheckedColor: 'var(--chakra-colors-gray-900)',
              buttonColor: 'var(--chakra-colors-gray-900)',
              colorBorder: 'transparent',
              colorBgContainer: 'transparent',
              borderRadius: 0,
              controlHeight: 'var(--chakra-space-7)',
              fontSize: 'var(--chakra-fontSizes-xs)',
            },
            Slider: {
              dotActiveBorderColor: 'var(--chakra-colors-gray-200)',
              handleActiveColor: 'var(--chakra-colors-gray-500)',
              handleColor: 'var(--chakra-colors-gray-200)',
              dotBorderColor: 'var(--chakra-colors-gray-200)',
              trackBg: 'var(--chakra-colors-gray-500)',
              trackHoverBg: 'var(--chakra-colors-gray-500)',
              dotSize: 4,
              handleSizeHover: 6,
            },
            Select: {
              colorPrimaryHover: 'var(--chakra-colors-gray-900)',
              colorPrimary: 'var(--chakra-colors-gray-900)',
              optionActiveBg: 'var(--chakra-colors-gray-50)',
              optionSelectedBg: 'var(--color-gray-2)',
              fontSize: 'var(--chakra-fontSizes-xs)',
              controlHeight: 'var(--chakra-space-7)',
              controlPaddingHorizontal: '0 2px',
              paddingSM: '0 2px',
            },
          },
        }}
      >
        <AntApp>
          <ErrorBoundary fallbackRender={() => 'Whoops'}>
            <ctx.Provider value={props}>
              <Widget />
            </ctx.Provider>
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
