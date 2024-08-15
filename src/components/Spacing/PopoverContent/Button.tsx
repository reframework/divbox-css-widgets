import { Button as ChakraButton } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface Props {
  value: number | string
  handleClick: (val: string | number) => void
}

export const Button: React.FC<Props> = ({ value, handleClick }) => {
  const onClick = ({
    target: {
      dataset: { value },
    },
  }: any) => {
    handleClick(value)
  }

  return (
    <ChakraButton
      size={'xs'}
      height={'100%'}
      width={'100%'}
      fontSize={'xs'}
      colorScheme={'gray'}
      variant={'solid'}
      color={'gray.700'}
      fontWeight={'normal'}
      data-value={value}
      onClick={onClick}
      _firstLetter={{ textTransform: 'uppercase' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {value}
    </ChakraButton>
  )
}
