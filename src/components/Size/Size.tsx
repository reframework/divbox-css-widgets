import { Grid } from '@chakra-ui/react'
import { InputNumber, InputNumberProps } from '@src/components/InputNumber'
import { LABEL_WIDTH } from '@src/constants/styles'
import { LabelPositionType } from '@src/components/Label'

const Input: React.FC<InputNumberProps> = ({ labelProps, ...props }) => (
  <InputNumber
    min={0}
    labelProps={{
      labelPosition: 'left' as LabelPositionType,
      labelWrapperStyles: { width: LABEL_WIDTH },
      ...labelProps,
    }}
    {...props}
  />
)

export const Size = () => {
  return (
    <>
      <Grid templateColumns={'1fr 1fr'} gap={'5px'}>
        <Input labelProps={{ label: 'Width' }} />
        <Input labelProps={{ label: 'Height' }} />
        <Input labelProps={{ label: 'Min W' }} />
        <Input labelProps={{ label: 'Min H' }} />
        <Input labelProps={{ label: 'Max W' }} />
        <Input labelProps={{ label: 'Max H' }} />
      </Grid>
    </>
  )
}
