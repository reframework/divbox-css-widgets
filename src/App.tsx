import { hot } from 'react-hot-loader/root'
import { ErrorBoundary } from 'react-error-boundary'
import { App as AntApp, ConfigProvider } from 'antd'
import { css, Global } from '@emotion/react'
import { colors } from '@src/components/theme/colors'
import { Widget } from '@src/components/Widget'
import { ctx } from '@src/components/Context'
import { ICssWidgetProps } from '@src/types/props'
import { fonts } from '@src/components/theme/fonts'

export const App = (props: ICssWidgetProps) => {
  return (
    <ConfigProvider
      theme={{
        // cssVars: true,
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
            buttonSolidCheckedBg: 'var(--chakra-colors-gray-200)',
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
            optionActiveBg: 'var(--chakra-colors-gray-100)',
            optionSelectedBg: 'var(--chakra-colors-blue-50)',
            optionPadding: '0 var(--chakra-space-2)',
            optionHeight: 'var(--control-height)',
            optionLineHeight: '26px',
            fontSize: 'var(--chakra-fontSizes-xs)',
            controlHeight: 'var(--chakra-space-7)',
            controlPaddingHorizontal: '0 2px',
            paddingSM: '0 2px',
          },
          InputNumber: {
            activeBorderColor: 'var(--chakra-colors-gray-300)',
          },
          Input: {
            activeBorderColor: 'var(--chakra-colors-gray-300)',
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
  )
}

export default hot(App)

export const GlobalStyles = () => {
  return (
    <Global
      styles={[
        colors,
        fonts,
        css`
          :root {
            --divbox-highlight-bg-blue-50: rgba(235, 248, 255, 0.8);
            --divbox-highlight-bg-blue-100: rgba(198, 227, 248, 0.8);

            --control-height: ${(26 / 16).toFixed(2)}rem;
          }

          .ant-popover-inner {
            padding: var(--chakra-space-2) !important;
          }

          .ant-dropdown-menu-item-group-list {
            padding: 0 !important;
          }

          .ant-dropdown-menu,
          .ant-dropdown-menu-submenu {
            padding: var(--chakra-space-2) !important;
          }

          .ant-dropdown-menu-item {
            padding: 0 var(--chakra-space-4) !important;
            min-height: var(--control-height) !important;
          }

          .ant-select-dropdown {
            padding: var(--chakra-space-2) !important;
          }
        `,
      ]}
    />
  )
}
