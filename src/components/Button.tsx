import { css } from '@emotion/react'
import { Button } from 'antd'

const s = {
  superStyle: css`
    color: pink;
  `,
}

export const SuperButton = () => {
  return (
    <Button type="primary" css={s.superStyle}>
      Click me
    </Button>
  )
}
