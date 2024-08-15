import { Button as ChakraButton } from '@chakra-ui/button/dist/button'

interface Props {
  value: number | string
  handleClick: (val: string | number) => void
}

export const Button: React.FC<Props> = ({ value, handleClick }) => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <ChakraButton
      fontSize={'xs'}
      colorScheme={'gray'}
      variant={'ghost'}
      color={'gray.700'}
      fontWeight={'normal'}
      data-value={value}
      onClick={onClick}
      _firstLetter={{ textTransform: 'uppercase' }}
    >
      {value}
    </ChakraButton>
  )
}
