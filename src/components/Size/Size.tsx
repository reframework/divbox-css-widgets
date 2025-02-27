import { Grid } from '@chakra-ui/react'
import { CssUnit } from '@src/components/CssUnitInput'
import { LABEL_WIDTH } from '@src/constants/styles'
import { LabelPositionType } from '@src/components/Label'
import { useProps } from '@src/components/Context'
import { useCallback } from 'react'
import { SizeLabels, SizeValues } from '@src/components/Size/Size.helpers'
import { ICssUnitInputWithLabelProps } from '@src/components/CssUnitInput/CssUnitInputWithLabel'

const Input: React.FC<ICssUnitInputWithLabelProps> = (props) => (
  <CssUnit.InputWithLabel
    labelPosition={'left' as LabelPositionType}
    labelWrapperStyles={{ width: LABEL_WIDTH }}
    {...props}
  />
)

export const Size = () => {
  const { value, onChange } = useProps()
  const onChangeValue = useCallback(
    (property: any) => (next: any) => {
      onChange({
        ...value,
        size: {
          ...value.size,
          [property]: next,
        },
      })
    },
    [value],
  )
  return (
    <Grid templateColumns={'1fr 1fr'} gap={'5px'}>
      <Input
        label={SizeLabels[SizeValues.width]}
        value={value.size.w}
        onChange={onChangeValue(SizeValues.width)}
      />
      <Input
        label={SizeLabels[SizeValues.height]}
        value={value.size.h}
        onChange={onChangeValue(SizeValues.height)}
      />
      <Input
        label={SizeLabels[SizeValues.minWidth]}
        value={value.size.minW}
        onChange={onChangeValue(SizeValues.minWidth)}
      />
      <Input
        label={SizeLabels[SizeValues.minHeight]}
        value={value.size.minH}
        onChange={onChangeValue(SizeValues.minHeight)}
      />
      <Input
        label={SizeLabels[SizeValues.maxWidth]}
        value={value.size.maxW}
        onChange={onChangeValue(SizeValues.maxWidth)}
      />
      <Input
        label={SizeLabels[SizeValues.maxHeight]}
        value={value.size.maxH}
        onChange={onChangeValue(SizeValues.maxHeight)}
      />
    </Grid>
  )
}
