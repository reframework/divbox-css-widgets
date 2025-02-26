import { InputNumberProps as AntdInputNumberProps, Select, SelectProps } from 'antd'
import { makeSelectOptions } from '@src/helpers'
import { useState } from 'react'
import { LengthLiteral, LengthUnit } from '@src/models/css/enums'
import {
  InputComponent,
  InputNumberComponent,
} from '@src/components/InputNumber/InputNumber.styles'
import { Label, LabelProps } from '@src/components/Label'

export interface InputNumberProps extends AntdInputNumberProps {
  labelProps?: LabelProps
  selectAfterProps?: SelectProps
  cssUnitsTypes?: ('auto' | 'fr')[]
  handleSelectUnit?: (value: string | number) => void
}
export const InputNumber: React.FC<InputNumberProps> = ({
  defaultValue,
  onChange,
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
        controls={isInputComponent}
        value={value}
        onChange={onChangeValue}
        addonAfter={selectAfter}
        {...inputProps}
      />
    </Label>
  )
}
