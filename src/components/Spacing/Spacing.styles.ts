import { css } from '@emotion/react'

const centerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const styles = {
  box1: css`
    ${centerStyles};
    position: absolute;
    top: 0;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
    height: 26px;
    background: var(--chakra-colors-gray-100);
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box2: css`
    ${centerStyles};
    position: absolute;
    left: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%);
    width: calc(51 / 248 * 100%);
    height: 100%;
    background: var(--chakra-colors-gray-100);
    z-index: 2;
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box3: css`
    ${centerStyles};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 74px;
    border-radius: var(--chakra-radii-base);
    overflow: hidden;
    border: 1px solid var(--chakra-colors-gray-300);
    width: calc(147 / 248 * 100%);
    z-index: 1;
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box4: css`
    ${centerStyles};
    position: absolute;
    right: 0;
    clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%);
    height: 100%;
    width: calc(51 / 248 * 100%);
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
  box5: css`
    ${centerStyles};
    position: absolute;
    bottom: 0;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    height: 26px;
    width: 100%;
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
  box3_1: css`
    position: absolute;
    ${centerStyles};
    top: 0;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 66% 100%, 34% 100%);
    height: 26px;
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
  box3_2: css`
    ${centerStyles};
    position: absolute;
    left: 0;
    bottom: 0;
    clip-path: polygon(0% 0%, 100% 36%, 100% 64%, 0% 100%);
    width: calc(85 / 248 * 100%);
    height: 100%;
    background: var(--chakra-colors-gray-200);
    &:hover {
      background: var(--chakra-colors-gray-300);
    }
  `,
  box3_3: css`
    ${centerStyles};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    border-radius: var(--chakra-radii-base);
    border: 1px solid var(--chakra-colors-gray-300);
    width: calc(80 / 248 * 100%);
    z-index: 1;
    background: linear-gradient(
      to bottom right,
      var(--chakra-colors-gray-100) 50%,
      var(--chakra-colors-gray-200) 50%
    );
    &:hover {
      background: linear-gradient(
        to bottom right,
        var(--chakra-colors-gray-200) 50%,
        var(--chakra-colors-gray-100) 50%
      );
    }
  `,
  box3_4: css`
    ${centerStyles};
    position: absolute;
    right: 0;
    clip-path: polygon(0% 36%, 100% 0%, 100% 100%, 0% 64%);
    height: 100%;
    width: calc(85 / 248 * 100%);
    background: var(--chakra-colors-gray-100);
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  box3_5: css`
    ${centerStyles};
    position: absolute;
    bottom: 0;
    clip-path: polygon(34% 0%, 66% 0%, 100% 100%, 0% 100%);
    height: 26px;
    width: 100%;
    background: var(--chakra-colors-gray-100);
    &:hover {
      background: var(--chakra-colors-gray-200);
    }
  `,
  label: css`
    ${centerStyles};
    position: absolute;
    top: 0;
    left: var(--chakra-space-0-5);
    font-weight: 200;
    color: var(--chakra-colors-gray-600);
    font-size: 0.7rem;
    font-style: italic;
    z-index: var(--chakra-zIndices-docked);
  `,
}
