import styled from '@emotion/styled'
import { Input, InputNumber as AntdInputNumber } from 'antd'
import { css } from '@emotion/react'

const stylesInput = css`
  font-size: var(--chakra-fontSizes-xs);
  padding: var(--chakra-space-1);
`
export const InputNumberComponent = styled(AntdInputNumber)`
  & .ant-input-number-input {
    ${stylesInput}
  }
`
export const InputComponent = styled(Input)`
  & .ant-input {
    ${stylesInput};
    ::first-letter {
      text-transform: uppercase;
    }
  }
`
