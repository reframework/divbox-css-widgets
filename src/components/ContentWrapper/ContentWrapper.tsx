import { Flex, Grid, GridProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { LABEL_WIDTH } from '@src/constants/styles'

interface Props extends PropsWithChildren {
  title: string
  isActive?: boolean
  containerProps?: GridProps
}

export const ContentWrapper: React.FC<Props> = ({
  title,
  children,
  isActive,
  containerProps,
}) => {
  return (
    <Grid
      templateColumns={`${LABEL_WIDTH} 1fr`}
      boxSizing={'border-box'}
      mb="2"
      {...containerProps}
    >
      <Flex
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        alignItems={'center'}
        color={isActive ? 'blue.500' : 'gray.700'}
        bg={isActive ? 'blue.50' : 'transparent'}
        h="26px"
        fontSize={'xs'}
      >
        {title}
      </Flex>

      {children}
    </Grid>
  )
}
