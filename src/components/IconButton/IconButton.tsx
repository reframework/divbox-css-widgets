import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import React from 'react'
import { IconButtonProps } from '@chakra-ui/button/dist/icon-button'

interface Props extends Omit<IconButtonProps, 'aria-label'> {
  ariaLabel: string
}
export const IconButton: React.FC<Props> = ({ ariaLabel, ...props }) => {
  return (
    <ChakraIconButton
      backgroundColor={'gray.300'}
      height={7}
      minWidth={'24px'}
      aria-label={ariaLabel}
      {...props}
    />
  )
}
