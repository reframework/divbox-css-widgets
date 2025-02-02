import { useCallback, useState } from 'react'
import { Button, Center, Text } from '@chakra-ui/react'
import { Popover, TooltipProps } from 'antd'
import { PopoverContent } from '@src/components/Spacing/PopoverContent'
import { WIDGET_INNER_WIDTH } from '@src/constants/styles'
import { Css } from '@src/models/css'
import { ICssUnitValue } from '@src/components/CssUnitInput/utils'
import { CssUnit } from '@src/components/CssUnitInput'

interface Props {
  presets: Css.ILength[]
  value: ICssUnitValue
  onChange: (value: ICssUnitValue, property: keyof Css.IMargin) => void
  isMargin?: boolean
  property: keyof Css.IMargin
  placement?: TooltipProps['placement']
  align?: TooltipProps['align']
}

export const SpacingValueButton: React.FC<Props> = ({
  presets,
  value,
  isMargin,
  onChange: onChangeProp,
  property,
  align,
  placement = 'bottom',
}) => {
  const [isOpened, setIsOpened] = useState(false)

  if (isOpened) {
    console.log(property, value)
  }

  const isEmpty = CssUnit.Util.isEmptyValue(value)
  const isHighlighted = !isEmpty || isOpened

  const onChange = useCallback(
    (value: ICssUnitValue) => onChangeProp(value, property),
    [property, onChangeProp],
  )

  const onReset = useCallback(
    () => onChangeProp(null, property),
    [property, onChangeProp],
  )

  const onClose = useCallback(() => {
    setIsOpened(false)
  }, [])

  return (
    <Popover
      open={isOpened}
      onOpenChange={setIsOpened}
      destroyTooltipOnHide
      align={align}
      content={
        <PopoverContent
          value={value}
          presets={presets}
          onChange={onChange}
          isMargin={isMargin}
          onReset={!isEmpty ? onReset : null}
          onClose={onClose}
        />
      }
      trigger="click"
      arrow={false}
      placement={placement}
      overlayInnerStyle={{ maxWidth: WIDGET_INNER_WIDTH }}
    >
      <Center w="100%" h="100%">
        <Button {...buttonProps}>
          <Text {...textProps} {...(isHighlighted ? highlightedProps : {})}>
            {isEmpty ? '0' : CssUnit.Util.getRawValue(value)}
            {renderUnitType(value)}
          </Text>
        </Button>
      </Center>
    </Popover>
  )
}

const renderUnitType = (value: ICssUnitValue) => {
  const unitType = CssUnit.Util.getRawUnitType(value)

  if (
    !unitType ||
    unitType === Css.Enum.LengthUnit.PX ||
    unitType === Css.Enum.LengthLiteral.AUTO
  ) {
    return ''
  }

  return unitType
}

const buttonProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variant: 'unstyled',
  color: 'gray.500',
  _hover: { bg: 'transparent' },
  _active: { bg: 'transparent' },
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  w: '100%',
  h: '100%',
  p: 0,
} as const

const textProps = {
  as: 'span',
  display: 'inline-block',
  fontSize: 'xs',
  colorScheme: 'gray',
  variant: 'ghost',
  color: 'gray.500',
  fontWeight: 'normal',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  p: '2px',
  w: 'min-content',
  h:'16px',
  lineHeight: '12px',
  borderRadius: 'sm',
} as const

const highlightedProps = {
  bgColor: 'var(--divbox-highlight-bg-blue-50)',
  color: 'blue.600',
} as const
