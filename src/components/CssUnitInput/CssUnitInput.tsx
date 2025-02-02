import { Input, InputProps, InputRef, Select, SelectProps } from 'antd'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Css } from '@src/models/css'
import { inputStyle } from '@src/components/CssUnitInput/styles'
import {
  getInputPlaceholder,
  getRawValue,
  getRawUnitType,
  ICssUnitValue,
  ISelectUnitType,
  lengthUnits,
  getCssUnitValue,
} from '@src/components/CssUnitInput/utils'
import { debounce } from 'lodash'

export type IUnitSelectOption = {
  value: ISelectUnitType
  label: string
  labelForInput: string
}

const unitOptions = {
  default: lengthUnits.map((value) => {
    return {
      value: value,
      label: value.toUpperCase(),
      labelForInput: value,
    }
  }) as IUnitSelectOption[],
  auto: {
    value: Css.Enum.LengthLiteral.AUTO,
    label: 'AUTO',
    labelForInput: '-',
  } as IUnitSelectOption,
  fr: {
    value: Css.Enum.FractionUnit.FR,
    label: 'FR',
    labelForInput: Css.Enum.FractionUnit.FR,
  } as IUnitSelectOption,
}

export interface ICssUnitInputProps extends Omit<InputProps, 'onChange' | 'value'> {
  unitSelectProps?: SelectProps
  unitTypes?: { auto?: boolean; fr?: boolean }
  value: ICssUnitValue
  onChange: (v: ICssUnitValue) => void
  defaultUnit?: ISelectUnitType
  onClose: () => void
}

export const CssUnitInput: React.FC<ICssUnitInputProps> = ({
  value: valueProp,
  onChange: onChangeProp,
  unitSelectProps,
  unitTypes,
  defaultUnit = Css.Enum.LengthUnit.PX,
  onClose,
  ...props
}) => {
  const ref = useRef<InputRef>(null)
  const [value, setValue] = useState(() => getRawValue(valueProp))
  const [unit, setUnit] = useState(() => getRawUnitType(valueProp) || defaultUnit)

  const hasAuto = !!unitTypes?.auto
  const hasFr = !!unitTypes?.fr

  const options = useMemo(() => {
    return [
      ...unitOptions.default,
      ...(hasAuto ? [unitOptions.auto] : []),
      ...(hasFr ? [unitOptions.fr] : []),
    ]
  }, [hasAuto, hasFr])

  useEffect(() => {
    setValue(getRawValue(valueProp))
    setUnit(getRawUnitType(valueProp) || defaultUnit)
  }, [valueProp, defaultUnit])

  useEffect(() => {
    focus()
  }, [])

  const focus = useCallback(() => {
    if (ref.current?.nativeElement) {
      focusInput(ref.current.nativeElement)
    }
  }, [])

  const onChangeValue: InputProps['onChange'] = ({ target }) => {
    const { value } = target
    setValue(value)
  }

  const onChangeUnitType = (unitValue: ISelectUnitType) => {
    setUnit(unitValue)
    focus()

    if (unitValue === Css.Enum.LengthLiteral.AUTO) {
      setValue(unitValue)
    } else {
      if (Css.Util.isAuto(value)) {
        setValue('')
      }
    }
  }

  const submitValue = () => {
    const next = getCssUnitValue({
      value,
      unit,
      hasAuto,
      hasFr,
    })

    if (next != null) {
      onChangeProp(next)
    }
  }

  const onKeyDown: InputProps['onKeyDown'] = ({ key }) => {
    if (key === 'Enter') {
      submitValue()
      onClose()
    }
  }

  const selectAfter = (
    <Select
      {...unitSelectProps}
      value={unit}
      onSelect={onChangeUnitType}
      optionLabelProp={'labelForInput'}
      options={options}
      suffixIcon={null}
      dropdownStyle={{ width: 72 }}
      placement={'bottomRight'}
      listHeight={500}
    />
  )

  return (
    <Input
      {...props}
      ref={ref}
      css={inputStyle}
      value={value}
      onChange={onChangeValue}
      addonAfter={selectAfter}
      placeholder={getInputPlaceholder(unit)}
      onBlur={submitValue}
      onKeyDown={onKeyDown}
    />
  )
}

const focusInput = debounce((input: HTMLElement) => {
  requestAnimationFrame(() => input && input?.focus())
}, 100)
