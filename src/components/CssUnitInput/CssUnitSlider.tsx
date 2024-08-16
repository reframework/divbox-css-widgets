import {
  getRawSliderValue,
  getRawUnitType,
  ICssUnitValue,
  ISelectUnitType,
  lengthUnits,
} from '@src/components/CssUnitInput/utils'
import { Css } from '@src/models/css'
import { Slider } from 'antd'
import { useMemo } from 'react'

export interface ICssUnitSliderProps {
  onChange: (value: ICssUnitValue) => void
  value: ICssUnitValue
  allowNegative?: boolean
  defaultUnit?: Css.Enum.LengthUnit
}

export const CssUnitSlider = ({
  allowNegative,
  onChange,
  value: valueProp,
  defaultUnit = Css.Enum.LengthUnit.PX,
}: ICssUnitSliderProps) => {
  const [value, unit] = useMemo(() => {
    return [getRawSliderValue(valueProp), getRawUnitType(valueProp) || defaultUnit]
  }, [valueProp])

  return (
    <Slider
      tooltip={{ open: false }}
      onChange={(value) => {
        if (unit === Css.Enum.LengthLiteral.AUTO) {
          onChange(
            Css.Model.Length({
              u: defaultUnit,
              v: value,
            }),
          )

          return
        }

        if (unit === Css.Enum.FractionUnit.FR) {
          onChange(Css.Model.FrTrack(value))
          return
        }

        onChange({ u: unit, v: value })
      }}
      value={value || 0}
      range={false}
      {...getRangeStep({ unit, defaultUnit, allowNegative })}
    />
  )
}

const getRangeStep = (props: {
  unit: ISelectUnitType
  defaultUnit: Css.Enum.LengthUnit
  allowNegative?: boolean
}) => {
  const { unit, defaultUnit, allowNegative } = props

  let currentUnit = unit
  if (!lengthUnits.includes(unit as Css.Enum.LengthUnit)) {
    currentUnit = defaultUnit
  }

  switch (currentUnit) {
    case Css.Enum.LengthUnit.VW:
    case Css.Enum.LengthUnit.VH:
    case Css.Enum.LengthUnit.SVW:
    case Css.Enum.LengthUnit.SVH:
      return {
        min: allowNegative ? -100 : 0,
        max: 100,
        step: 1,
      }

    case Css.Enum.LengthUnit.EM:
    case Css.Enum.LengthUnit.REM:
      return {
        min: allowNegative ? -10 : 0,
        max: 10,
        step: 0.1,
      }

    case Css.Enum.LengthUnit.CH:
      return {
        min: allowNegative ? -10 : 0,
        max: 10,
        step: 0.1,
      }

    case Css.Enum.FractionUnit.FR:
      return {
        min: allowNegative ? -10 : 0,
        max: 10,
        step: 0.1,
      }

    case Css.Enum.LengthUnit.PERCENT:
      return {
        min: allowNegative ? -100 : 0,
        max: 100,
        step: 1,
      }

    case Css.Enum.LengthUnit.PX:
      return {
        min: allowNegative ? -200 : 0,
        max: 200,
        step: 1,
      }

    default:
      throw new Error('CssUnitError: Unexpected unit')
  }
}
