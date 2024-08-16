import { Accordion, Box } from '@chakra-ui/react'
import { AccordionItem } from '@src/components/AccordionItem'
import { Layout } from '@src/components/Layout'
import { Size } from '@src/components/Size'
import { Spacing } from '@src/components/Spacing'

export const Widget = () => {
  return (
    <Accordion defaultIndex={[0, 1, 2, 3, 4, 5]} allowMultiple>
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
  )
}
