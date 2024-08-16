import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem as ChakraAccordionItem,
  Text,
} from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
}

export const AccordionItem: React.FC<Props> = ({ title, children }) => {
  return (
    <ChakraAccordionItem w="100%">
      <AccordionButton
        w="100%"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        px="2"
      >
        <Text
          as="span"
          flex="1"
          textAlign="left"
          fontWeight={600}
          color={'gray.900'}
          fontSize={'sm'}
        >
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pt="0.5" px="2" pb="2">
        {children}
      </AccordionPanel>
    </ChakraAccordionItem>
  )
}
