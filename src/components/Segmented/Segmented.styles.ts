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
  padding: 0px;
  display: flex !important;
  max-height: 24px;
  border: none !important;

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
      background: var(--chakra-colors-gray-200) !important;
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
  display: flex;
  /* grid-auto-flow: column;
  grid-template-columns: ${({ itemsCount, isAdditionalOptions }) =>
    isAdditionalOptions
      ? `1.3fr 1.1fr 1fr 1.1fr 20px`
      : `repeat(${itemsCount}, 1fr)`}; */
  font-size: 12px;
  background: var(--chakra-colors-gray-50);
  border: 1px solid var(--chakra-colors-gray-300);
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  max-height: 26px;

  & > * {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
