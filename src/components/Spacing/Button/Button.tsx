import { useEffect, useState } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { Popover } from 'antd'
import { HandleActiveState } from '@src/hooks/handleActiveState'
import { PopoverContent } from '@src/components/Spacing/PopoverContent'
import { WIDGET_WIDTH } from '@src/constants/styles'
import { ContentType } from '@src/components/Spacing/Button/Button.types'

interface Props {
  values: (number | string)[]
  contentType?: ContentType
  // unitOptions:
}
export const Button: React.FC<Props> = ({
  values,
  contentType = ContentType.padding,
}) => {
  const [value, setValue] = useState<number | string | null>(null)
  const { isActive, handleIsActive } = HandleActiveState({ defaultValue: false })
  const [unit, setUnit] = useState()
  useEffect(() => {
    handleIsActive(!!value)
  }, [value, handleIsActive])
  const changeValue = (val: number) => {
    setValue(val)
  }

  return (
    <Popover
      content={
        <PopoverContent
          contentType={contentType}
          value={value}
          values={values}
          changeValue={changeValue}
        />
      }
      trigger="click"
      arrow={false}
      placement={'bottom'}
      overlayInnerStyle={{ maxWidth: WIDGET_WIDTH }}
    >
      <ChakraButton
        size={'xs'}
        fontSize={'xs'}
        colorScheme={'gray'}
        variant={'ghost'}
        color={'gray.500'}
        fontWeight={'normal'}
        _hover={{ bg: 'transparent' }}
        isActive={isActive}
        _active={{ bg: 'blue.50', color: 'blue.500' }}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
      >
        {value || 0}
      </ChakraButton>
    </Popover>
  )
}
