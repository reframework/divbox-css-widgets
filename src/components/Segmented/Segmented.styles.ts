import { Radio } from 'antd'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const ellipsisStyles = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const RadioButton = styled(Radio.Button)`
  font-size: 12px;
  &.ant-radio-button-wrapper-disabled {
    background: transparent;
    color: var(--chakra-colors-gray-900);
  }
  &:hover {
    color: var(--chakra-colors-gray-900);
    background: var(--chakra-colors-gray-200);
  }
  &.ant-radio-button-wrapper {
    padding-inline: 4px;
    ${ellipsisStyles};
  }

  &.ant-radio-button-wrapper-checked {
    &:hover {
      background: var(--chakra-colors-gray-300) !important;
      border-color: transparent !important;
    }
    &:not(.ant-radio-button-wrapper-disabled)::before {
      background-color: transparent !important;
    }
  }
`
export const styles = {
  buttonStyle: css`
    border: none;
    background: transparent !important;
  `,
}

export const RadioGroup = styled(Radio.Group)<{
  itemsCount: number
  isAdditionalOptions: boolean
}>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ itemsCount, isAdditionalOptions }) =>
    isAdditionalOptions
      ? `repeat(${itemsCount}, 1fr) 27px`
      : `repeat(${itemsCount}, 1fr)`};
  font-size: 12px;
  background: var(--chakra-colors-gray-50);
  border: 1px solid var(--chakra-colors-gray-300);
  border-radius: 6px;
  overflow: hidden;
`
