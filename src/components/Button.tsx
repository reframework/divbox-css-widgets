import { css } from '@emotion/react'
import { Button } from 'antd'

const superStyle = css`
  color: pink;
`

export const SuperButton = () => {
  return <Button css={superStyle}>Click me</Button>
}
