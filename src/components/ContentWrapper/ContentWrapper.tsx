import { Box, Grid } from '@chakra-ui/react'
import { PropsWithChildren, useState } from 'react'
import { LABEL_WIDTH } from '@src/constants/styles'

interface Props extends PropsWithChildren {
  title: string
}

export const ContentWrapper: React.FC<Props> = ({ title, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const onFocus = () => {
    setIsActive(true)
  }
  const onBlur = () => {
    setIsActive(false)
  }

  return (
    <Grid
      templateColumns={`${LABEL_WIDTH} 1fr`}
      gap={'4px'}
      pb={'5px'}
      alignItems={'center'}
      boxSizing={'border-box'}
    >
      <Box
        display={'block'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        color={isActive ? 'blue.500' : 'gray.700'}
        bg={isActive ? 'blue.50' : 'transparent'}
      >
        {title}
      </Box>
      <div tabIndex="0" onFocus={onFocus} onBlur={onBlur}>
        {children}
      </div>
    </Grid>
  )
}
