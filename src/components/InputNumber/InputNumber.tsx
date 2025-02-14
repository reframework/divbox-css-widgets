import { InputNumberProps as AntdInputNumberProps, Select, SelectProps } from 'antd'
import { Box, Flex, Text } from '@chakra-ui/react'
import { makeSelectOptions } from '@src/helpers'
import { TextProps } from '@chakra-ui/layout/dist/text'
import { useState } from 'react'
import { BoxProps } from '@chakra-ui/layout/dist/box'
import { LengthLiteral, LengthUnit } from '@src/models/css/enums'
import {
  InputComponent,
  InputNumberComponent,
} from '@src/components/InputNumber/InputNumber.styles'
import { Label, LabelProps } from '@src/components/Label'

const mapLabelPosition = {
  left: 'row-reverse',
  top: 'column-reverse',
  down: 'column',
}
export interface InputNumberProps extends AntdInputNumberProps {
  labelProps?: LabelProps
  selectAfterProps?: SelectProps
  cssUnitsTypes?: ('auto' | 'fr')[]
  handleSelectUnit?: (value: string | number) => void
}
export const InputNumber: React.FC<InputNumberProps> = ({
  label,
  labelPosition = 'down',
  defaultValue,
  onChange,
  labelStyles,
  labelWrapperStyles,
  selectAfterProps,
  cssUnitsTypes,
  handleSelectUnit,
  labelProps,
  ...inputProps
}) => {
  const [value, setValue] = useState<string | number | undefined>(defaultValue)
  const [unit, setUnit] = useState<string>(LengthUnit.PX)
  // const [isActive, setIsActive] = useState<boolean>(false)
  // const onFocus = () => {
  //   setIsActive(true)
  // }
  // const onBlur = () => {
  //   setIsActive(false)
  // }
  const selectOptions = makeSelectOptions(
    Object.entries(LengthUnit),
    'value',
    'label',
    'labelForInput',
  )

  const additionalSelectOptions = cssUnitsTypes?.length
    ? cssUnitsTypes.map((item) => {
        switch (item) {
          case 'auto':
            return { value: item, label: 'Auto', labelForInput: '-' }
          case 'fr':
            return { value: item, label: 'Fr', labelForInput: '-' }
        }
      })
    : []

  const onChangeValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(value)
    onChange?.()
  }
  const onSelectUnit = (value) => {
    setUnit(value)
    if (value === LengthLiteral.AUTO) {
      setValue(value)
    }
    handleSelectUnit?.(value)
  }

  const selectAfter = (
    <Select
      defaultValue={LengthUnit.PX}
      value={unit}
      onSelect={onSelectUnit}
      optionLabelProp={'labelForInput'}
      options={[...selectOptions, ...additionalSelectOptions]}
      suffixIcon={null}
      popupMatchSelectWidth
      dropdownStyle={{ width: '60px', padding: 'var(--chakra-space-1)' }}
      placement={'bottomRight'}
    />
  )
  const isInputComponent = typeof value === 'string'
  const Component = isInputComponent ? InputComponent : InputNumberComponent
  return (
    <Label {...labelProps}>
      <Component
        controls={isInputComponent ? true : false}
        value={value}
        onChange={onChangeValue}
        addonAfter={selectAfter}
        {...inputProps}
      />
    </Label>
  )
}
