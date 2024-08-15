import { Grid, GridItem } from '@chakra-ui/react'
import { Slider as AntdSlider } from 'antd'
import { InputNumber } from '@src/components/InputNumber'
import { Button } from '@src/components/Spacing/PopoverContent/Button'
import { LengthLiteral } from '@src/models/css/enums'
import { ContentType } from '@src/components/Spacing/Button/Button.types'
interface Props {
  changeValue: (value: number) => void
  values: (number | string)[]
  value: number | string | null
  contentType: ContentType
}

export const PopoverContent: React.FC<Props> = ({
  changeValue,
  values,
  value,
  contentType,
}) => {
  const isMarginContentType = contentType === ContentType.margin
  return (
    <Grid
      backgroundColor={'white'}
      templateRows="repeat(3, 1fr)"
      templateColumns={`repeat(${isMarginContentType ? 6 : 5}, 1fr)`}
      rowGap={1}
      columnGap={2}
    >
      <GridItem colSpan={isMarginContentType ? 4 : 3}>
        <AntdSlider
          tooltip={{ open: false }}
          onChange={changeValue}
          value={typeof value === 'string' || !value ? 0 : value}
          range
          min={isMarginContentType ? -200 : 0}
          max={200}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <InputNumber onChange={changeValue} value={value} cssUnitsTypes={['auto']} />
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
