import { useEffect, useState } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { Popover } from 'antd'
import { HandleActiveState } from '@src/hooks/handleActiveState'
import { PopoverContent } from '@src/components/Spacing/PopoverContent/PopoverContent'

interface Props {
  values: (number | string)[]
}
export const Button: React.FC<Props> = ({ values }) => {
  const [value, setValue] = useState<number>(0)
  const { isActive, toggleActive } = HandleActiveState({ defaultValue: false })

  useEffect(() => {
    toggleActive(Boolean(value))
  }, [value, toggleActive])

  const changeValue = (val: number) => {
    setValue(val)
  }

  return (
    <Popover
      content={
        <PopoverContent value={value} values={values} changeValue={changeValue} />
      }
      trigger="click"
      showArrow={false}
      placement={'bottom'}
    >
      <ChakraButton
        fontSize={'xs'}
        colorScheme={'gray'}
        variant={'ghost'}
        color={'gray.500'}
        fontWeight={'normal'}
        _hover={{ bg: 'transparent' }}
        isActive={isActive}
        _active={{ bg: 'blue.50', color: 'blue.500' }}
      >
        {value}
      </ChakraButton>
    </Popover>
  )
}
