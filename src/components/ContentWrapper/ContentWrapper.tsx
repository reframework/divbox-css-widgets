import { Flex, Grid } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { LABEL_WIDTH } from '@src/constants/styles'
import {
  CssPropertyLabel,
  ICssPropertyLabelProps,
} from '@src/components/CssPropertyLabel/CssPropertyLabel'

interface Props extends ICssPropertyLabelProps {
  children: ReactNode
}

export const ContentWrapper: React.FC<Props> = ({ children, ...labelProps }) => {
  return (
    <Grid templateColumns={`${LABEL_WIDTH} 1fr`} boxSizing={'border-box'} mb="2">
      <Flex
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        alignItems={'center'}
        h="26px"
      >
        <CssPropertyLabel {...labelProps} />
      </Flex>

      {children}
    </Grid>
  )
}
