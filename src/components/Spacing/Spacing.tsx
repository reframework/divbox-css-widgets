import { Box, Grid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

//background: linear-gradient(to bottom right, var(--chakra-colors-gray-100) 50%, var(--chakra-colors-gray-200) 50%);
//&:hover{
//background: linear-gradient(to bottom right, var(--chakra-colors-gray-100) 50%, var(--chakra-colors-gray-200) 50%);

const styles = {
  box1: css`
    position: absolute;
    top: 0;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
    height: 26px;
    background: var(--chakra-colors-gray-100);
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box2: css`
    position: absolute;
    left: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%);
    width: calc(37 / 248 * 100%);
    height: 100%;
    background: var(--chakra-colors-gray-100);
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box3: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 74px;
    border-radius: var(--chakra-radii-base);
    border: 1px solid var(--chakra-colors-gray-300);
    width: calc(176 / 248 * 100%);
    z-index: 1;
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box4: css`
    position: absolute;
    right: 0;
    clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%);
    height: 100%;
    width: calc(37 / 248 * 100%);
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
  box5: css`
    position: absolute;
    bottom: 0;
    clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
    height: 26px;
    width: 100%;
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
}

export const Spacing = () => {
  return (
    <Grid height={'124px'} width={'100%'} position={'relative'}>
      <Box css={styles.box1}></Box>
      <Box css={styles.box2}></Box>
      <Box css={styles.box3}></Box>
      <Box css={styles.box4}></Box>
      <Box css={styles.box5}></Box>
    </Grid>
  )
}
