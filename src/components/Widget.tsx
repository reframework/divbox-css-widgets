import { Accordion, Box } from '@chakra-ui/react'
import { AccordionItem } from '@src/components/AccordionItem'
import { Layout } from '@src/components/Layout'
import { Size } from '@src/components/Size'
import { Spacing } from '@src/components/Spacing'
import { WIDGET_WIDTH } from '@src/constants/styles'

export const Widget = () => {
  return (
    <Box maxW={WIDGET_WIDTH} fontSize={'xs'} bg={'gray.50'} pr={'0.5'} pl={'0.5'}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem title={'Layout'}>
          <Layout />
        </AccordionItem>
        <AccordionItem title={'Spacing'}>
          <Spacing />
        </AccordionItem>
        <AccordionItem title={'Size'}>
          <Size />
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
