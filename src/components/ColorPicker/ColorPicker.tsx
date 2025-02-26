import {
  ColorPicker as AntColorPicker,
  ColorPickerProps as AntColorPickerProps,
} from 'antd'
import GradientColorPicker from 'react-best-gradient-color-picker'
import React from 'react'
import { ColorPickerProps } from 'react-best-gradient-color-picker/src/shared/types'
import { WIDGET_WIDTH } from '@src/constants/styles'
import styled from '@emotion/styled'
interface Props {
  gradientColorPickerProps?: ColorPickerProps
  antColorPickerProps?: AntColorPickerProps
}

const StyledAntColorPicker = styled(AntColorPicker)`
  align-items: flex-start;
  justify-content: flex-start;
`

export const ColorPicker: React.FC<Props> = ({
  gradientColorPickerProps,
  antColorPickerProps,
}) => {
  return (
    <StyledAntColorPicker
      value={gradientColorPickerProps?.value}
      showText
      allowClear
      arrow={false}
      placement={'top'}
      panelRender={() => (
        <GradientColorPicker
          hidePresets
          hideInputs
          hideAdvancedSliders
          hideColorGuide
          hideInputType
          width={parseInt(WIDGET_WIDTH) - 16} // 8px is paddingXS in AntDesign Inner
          {...gradientColorPickerProps}
        />
      )}
      {...antColorPickerProps}
    />
  )
}
