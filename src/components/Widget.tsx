import { Accordion, Box } from '@chakra-ui/react'
import { AccordionItem } from '@src/components/AccordionItem'
import { Layout } from '@src/components/Layout'
import { Size } from '@src/components/Size'
import { Spacing } from '@src/components/Spacing'
import { Typography } from '@src/components/Typography'

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
        <AccordionItem title={'Typography'}>
          <Typography />
        </AccordionItem>
      </Accordion>
  )
}
