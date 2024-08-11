import { Grid } from '@chakra-ui/react'
import { InputNumber, InputNumberProps } from '@src/components/InputNumber'
import { LABEL_WIDTH } from '@src/constants/styles'

const Input: React.FC<InputNumberProps> = (props) => (
  <InputNumber
    labelPosition={'left'}
    labelWrapperStyles={{ width: LABEL_WIDTH }}
    {...props}
  />
)

export const Size = () => {
  return (
    <>
      <Grid templateColumns={'1fr 1fr'} gap={'5px'}>
        <Input label={'Width'} />
        <Input label={'Height'} />
        <Input label={'Min W'} />
        <Input label={'Min H'} />
        <Input label={'Max W'} />
        <Input label={'Max H'} />
      </Grid>
    </>
  )
}
