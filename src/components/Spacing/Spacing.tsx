import { Box, Grid } from '@chakra-ui/react'
import { styles } from '@src/components/Spacing/Spacing.styles'
import { SpacingValueButton } from '@src/components/Spacing/Button'
import { MARGIN_PRESETS, PADDING_PRESETS } from '@src/constants/spacing'
import { useProps } from '@src/components/Context'
import { ICssUnitValue } from '@src/components/CssUnitInput/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { Css } from '@src/models/css'

export const Spacing = () => {
  const { value, onChange } = useProps()

  const [internalValue, setInternalValue] = useState(value)

  const debouncedOnChange = useMemo(
    () =>
      debounce((value: Css.ICss) => {
        onChange(value)
      }, 300),
    [onChange],
  )

  useEffect(() => {
    debouncedOnChange(internalValue)
  }, [internalValue, debouncedOnChange])

  const onChangeMargin = useCallback((next: ICssUnitValue | null, prop: string) => {
    setInternalValue({
      ...value,
      margin: {
        ...value.margin,
        [prop]: next,
      },
    })
  }, [])

  const onChangePadding = useCallback((next: ICssUnitValue | null, prop: string) => {
    setInternalValue({
      ...value,
      padding: {
        ...value.padding,
        [prop]: next,
      },
    })
  }, [])

  return (
    <Grid height={'124px'} width={'100%'} position={'relative'}>
      <Box css={styles.label}>Margin</Box>
      <Box css={styles.box1}>
        <SpacingValueButton
          presets={MARGIN_PRESETS}
          isMargin
          value={internalValue.margin.l}
          onChange={onChangeMargin}
          property={'l'}
        />
      </Box>
      <Box css={styles.box2}>
        <SpacingValueButton
          presets={MARGIN_PRESETS}
          isMargin
          value={internalValue.margin.t}
          onChange={onChangeMargin}
          property={'t'}
        />
      </Box>
      <Box css={styles.box3}>
        <Box css={styles.label}>Padding</Box>
        <Box css={styles.box3_1}>
          <SpacingValueButton
            presets={PADDING_PRESETS}
            value={internalValue.padding.l}
            onChange={onChangePadding}
            property={'l'}
          />
        </Box>
        <Box css={styles.box3_2}>
          <SpacingValueButton
            presets={PADDING_PRESETS}
            value={internalValue.padding.t}
            onChange={onChangePadding}
            property={'t'}
          />
        </Box>
        <Box css={styles.box3_3}></Box>
        <Box css={styles.box3_4}>
          <SpacingValueButton
            presets={PADDING_PRESETS}
            value={internalValue.padding.r}
            onChange={onChangePadding}
            property={'r'}
          />
        </Box>
        <Box css={styles.box3_5}>
          <SpacingValueButton
            presets={PADDING_PRESETS}
            value={internalValue.padding.b}
            onChange={onChangePadding}
            property={'b'}
          />
        </Box>
      </Box>
      <Box css={styles.box4}>
        <SpacingValueButton
          presets={MARGIN_PRESETS}
          isMargin
          value={internalValue.margin.r}
          onChange={onChangeMargin}
          property={'r'}
        />
      </Box>
      <Box css={styles.box5}>
        <SpacingValueButton
          presets={MARGIN_PRESETS}
          isMargin
          value={internalValue.margin.b}
          onChange={onChangeMargin}
          property={'b'}
        />
      </Box>
    </Grid>
  )
}
