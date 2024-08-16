import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import { LengthLiteral } from '@src/models/css/enums'
import { CssUnit } from '@src/components/CssUnitInput'
import { ICssUnitValue } from '@src/components/CssUnitInput/utils'
import { capitalize } from 'lodash'
import { Css } from '@src/models/css'

interface Props {
  onChange: (value: ICssUnitValue) => void
  presets: Css.ILength[]
  value: ICssUnitValue
  isMargin?: boolean
  onReset: (() => void) | null
  onClose: () => void
}

export const PopoverContent: React.FC<Props> = ({
  onChange,
  presets,
  isMargin,
  value,
  onReset,
  onClose,
}) => {
  return (
    <>
      <Grid bg="white" templateColumns="3fr 2fr" gap={1}>
        <GridItem>
          <CssUnit.Slider
            onChange={onChange}
            value={value}
            allowNegative={isMargin}
          />
        </GridItem>
        <GridItem>
          <CssUnit.Input
            onChange={onChange}
            onClose={onClose}
            value={value}
            unitTypes={{ auto: true }}
          />
        </GridItem>
      </Grid>
      <Grid mt="2" bg="white" templateColumns="repeat(5, 1fr)" gap={1}>
        {isMargin && (
          <GridItem rowSpan={2}>
            <Button
              {...presetButtonProps}
              h="100%"
              onClick={() => onChange(Css.Enum.LengthLiteral.AUTO)}
              aspectRatio="1/1"
            >
              {capitalize(LengthLiteral.AUTO)}
            </Button>
          </GridItem>
        )}
        {presets.map((item) => (
          <GridItem key={item.v}>
            <Button {...presetButtonProps} onClick={() => onChange(item)}>
              {item.v}
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Box mt="2">
        <Button
          isDisabled={!onReset}
          onClick={() => onReset?.()}
          {...presetButtonProps}
        >
          Reset
        </Button>
      </Box>
    </>
  )
}

/**
 * TODO: make shared props for gray buttons
 */
const presetButtonProps = {
  size: 'xs',
  h: '26px',
  width: '100%',
  fontSize: 'xs',
  colorScheme: 'gray',
  variant: 'solid',
  color: 'gray.700',
  fontWeight: 'normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as const
