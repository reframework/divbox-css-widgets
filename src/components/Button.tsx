import { Button } from '@chakra-ui/react'
import { css } from '@emotion/react'

const superStyle = css`
  color: pink;
`

export const SuperButton = () => {
  return <Button css={superStyle}>Click me</Button>
}
