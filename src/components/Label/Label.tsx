import { mapLabelPosition } from '@src/constants/styles'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TextProps } from '@chakra-ui/layout/dist/text'
import { BoxProps } from '@chakra-ui/layout/dist/box'

export interface LabelProps {
  isActive?: boolean
  label?: string
  labelPosition?: 'left' | 'top' | 'down'
  labelStyles?: TextProps
  labelWrapperStyles?: BoxProps
}
export const Label: React.FC<LabelProps> = ({
  children,
  label,
  labelPosition,
  labelStyles,
  labelWrapperStyles,
  isActive,
}) => {
  return (
    <Flex direction={mapLabelPosition[labelPosition]} alignItems={'center'}>
      {children}
      {label && (
        <Box flexShrink={0} {...labelWrapperStyles}>
          <Text
            as={'span' as any}
            fontSize={'xs'}
            color={isActive ? 'blue.500' : 'gray.700'}
            bg={isActive ? 'blue.50' : 'transparent'}
            width={'auto'}
            {...labelStyles}
          >
            {label}
          </Text>
        </Box>
      )}
    </Flex>
  )
}
