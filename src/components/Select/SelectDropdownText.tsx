import { TextProps } from '@chakra-ui/layout/dist/text'
import React from 'react'
import { Text } from '@chakra-ui/react'

interface Props {
  textProps?: TextProps
}

export const SelectDropdownText: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  textProps,
}) => (
  <Text fontSize={'xs'} {...textProps}>
    {children}
  </Text>
)
