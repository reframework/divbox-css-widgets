import React from 'react'
import { Box } from '@chakra-ui/react'
import { TextProps } from '@chakra-ui/layout/dist/text'
import { BoxProps } from '@chakra-ui/layout/dist/box'
import { SelectDropdownText } from '@src/components/Select/SelectDropdownText'

interface Props {
  textProps?: TextProps
  boxProps?: BoxProps
}

export const SelectDropdownBox: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  textProps,
  boxProps,
}) => (
  <Box
    padding={'var(--chakra-space-3) var(--chakra-space-6)'}
    backgroundColor={'var(--chakra-colors-white)'}
    {...boxProps}
  >
    <SelectDropdownText {...textProps}>{children}</SelectDropdownText>
  </Box>
)
