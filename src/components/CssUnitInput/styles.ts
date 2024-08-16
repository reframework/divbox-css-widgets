import { css } from '@emotion/react'

export const inputStyle = css`
  & .ant-input-group-addon {
    background-color: var(--chakra-colors-white);
  }

  & .ant-input {
    font-size: var(--chakra-fontSizes-xs);
    padding: var(--chakra-space-1);
  }

  &:not(:focus-within) {
    & .ant-input:not(:hover) {
      border-right: 1px solid transparent;
    }
  }
`
