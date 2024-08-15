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
    <ChakraAccordionItem>
      <h2>
        <AccordionButton>
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
      </h2>
      <AccordionPanel p={1} pb={4}>
        {children}
      </AccordionPanel>
    </ChakraAccordionItem>
  )
}
