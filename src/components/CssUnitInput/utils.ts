import { Css } from '@src/models/css'
import { InputProps, SelectProps } from 'antd'
import { capitalize, debounce } from 'lodash'

export type ICssUnitValue =
  | Css.ILength
  | Css.IVariable
  | Css.Enum.LengthLiteral.AUTO
  | Css.IFrTrack
  | null

export type ISelectUnitType =
  | Css.Enum.LengthUnit
  | Css.Enum.LengthLiteral.AUTO
  | Css.Enum.FractionUnit

export type IUnitSelectOption = {
  value: ISelectUnitType
  label: string
  labelForInput: string
}

export type ICssUnitInputProps = InputProps & {
  unitProps: {
    options: IUnitSelectOption[]
    value: ISelectUnitType
    onSelect: (v: ISelectUnitType) => void
  } & Omit<SelectProps, 'value' | 'onSelect' | 'options'>
}

export const lengthUnits = Object.values(Css.Enum.LengthUnit)
export const lengthPattern = new RegExp(`(${lengthUnits.join('|')})$`, 'i')
export const frPattern = /^fr$`/i

export const getInputPlaceholder = (unit: ISelectUnitType): string => {
  if (unit === Css.Enum.LengthLiteral.AUTO) {
    return 'auto'
  }

  if (unit === Css.Enum.FractionUnit.FR) {
    return '1'
  }

  return '0'
}

export const isEmptyValue = (value: ICssUnitValue): boolean => {
  return value == null
}

export const getRawValue = (value: ICssUnitValue): string => {
  if (value == null) {
    return ''
  }

  if (Css.Util.isAuto(value)) {
    return capitalize(value)
  }

  if (Css.Util.isFrTrack(value)) {
    return `${value.fr}`
  }

  if (Css.Util.isLength(value)) {
    return `${value.v}`
  }

  throw new Error(`CssUnitInputError: Unexpected value ${value}`)
}

export const getRawSliderValue = (value: ICssUnitValue): number | null => {
  if (value == null) {
    return null
  }

  if (Css.Util.isAuto(value)) {
    return null
  }

  if (Css.Util.isFrTrack(value)) {
    return value.fr
  }

  if (Css.Util.isLength(value)) {
    return value.v
  }

  throw new Error(`CssUnitInputError: Unexpected value ${value}`)
}

export const getRawUnitType = (value: ICssUnitValue): ISelectUnitType | null => {
  if (value == null) {
    return null
  }

  if (Css.Util.isAuto(value)) {
    return Css.Enum.LengthLiteral.AUTO
  }

  if (Css.Util.isFrTrack(value)) {
    return Css.Enum.FractionUnit.FR
  }

  if (Css.Util.isLength(value)) {
    return value.u
  }

  throw new Error(`CssUnitInputError: Unexpected value ${value}`)
}

export const getCssUnitValue = (props: {
  value: string
  unit: ISelectUnitType
  hasAuto?: boolean
  hasFr?: boolean
}): ICssUnitValue => {
  const { value, unit, hasAuto, hasFr } = props

  if (hasAuto && Css.Util.isAuto(value)) {
    return value
  }

  const numericValue = parseFloat(value as string)
  if (Number.isNaN(numericValue)) {
    return null
  }

  if (hasFr) {
    const match = value.match(frPattern)
    if (match) {
      return Css.Model.FrTrack(numericValue)
    }

    if (unit === Css.Enum.FractionUnit.FR) {
      return Css.Model.FrTrack(numericValue)
    }
  }

  const match = value.match(lengthPattern)
  if (match?.[1]) {
    return Css.Model.Length({
      v: numericValue,
      u: match[1].toLowerCase() as Css.Enum.LengthUnit,
    })
  }

  return Css.Model.Length({
    v: numericValue,
    u: unit as Css.Enum.LengthUnit,
  })
}
