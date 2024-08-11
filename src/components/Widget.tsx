import { Accordion, Box } from '@chakra-ui/react'
import { AccordionItem } from '@src/components/AccordionItem'
import { Layout } from '@src/components/Layout'
import { Size } from '@src/components/Size'

export const Widget = () => {
  return (
    <Box maxW={'260px'} fontSize={'12px'} bg={'gray.50'} pr={'2px'} pl={'2px'}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem title={'Layout'}>
          <Layout />
        </AccordionItem>
        <AccordionItem title={'Spacing'}></AccordionItem>
        <AccordionItem title={'Size'}>
          <Size />
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
