import { Grid, GridItem } from '@chakra-ui/react'
import { Slider as AntdSlider } from 'antd'
import { InputNumber } from '@src/components/InputNumber'
import { Button } from '@src/components/Spacing/PopoverContent/Button'
import { LengthLiteral } from '@src/models/css/enums'
interface Props {
  changeValue: (value: number) => void
  values: (number | string)[]
  value: number
}

export const PopoverContent: React.FC<Props> = ({ changeValue, values, value }) => {
  return (
    <Grid
      backgroundColor={'white'}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(6, 1fr)"
      rowGap={'chakra-spacing-1'}
      columnGap={'chakra-spacing-2'}
    >
      <GridItem colSpan={4}>
        <AntdSlider tooltip={{ open: false }} onChange={changeValue} value={value} />
      </GridItem>
      <GridItem colSpan={2}>
        <InputNumber onChange={changeValue} value={value} />
      </GridItem>
      <>
        {values.map((item) => {
          if (item === LengthLiteral.AUTO) {
            return (
              <GridItem key={item} rowSpan={2} colSpan={2}>
                <Button value={item} handleClick={changeValue} />
              </GridItem>
            )
          }
          return (
            <GridItem key={item} rowSpan={1} colSpan={1}>
              <Button value={item} handleClick={changeValue} />
            </GridItem>
          )
        })}
      </>
    </Grid>
  )
}
