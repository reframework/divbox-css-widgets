import { ContentWrapper } from '@src/components/ContentWrapper'
import { Select } from '@src/components/Select'
import { Box, Grid } from '@chakra-ui/react'
import { CssUnit } from '@src/components/CssUnitInput'
import { useProps } from '@src/components/Context'
import { LABEL_WIDTH } from '@src/constants/styles'
import { Segmented } from '@src/components/Segmented'
import {
  ALIGN_OPTIONS,
  FONT_FAMILY_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  STYLE_DECORATION_OPTIONS,
  STYLE_ITALIC_OPTIONS,
  TRANSFORM_OPTIONS,
  WHITE_SPACE_OPTIONS,
  WORD_BREAK_OPTIONS,
  WRAP_OPTIONS,
} from '@src/constants/typogpaphy'
import { MoreItemsButton } from '@src/components/MoreItemsButton'
import { useCallback, useState } from 'react'
import { ColorPicker } from '@src/components/ColorPicker'
import { IFontSize, ILineHeight } from '@src/models/css/typography'
import {
  FontFamily,
  FontWeight,
  TextAlign,
  TextDecoration,
  TextFontStyle,
} from '@src/models/css/enums'
import { MainItemType } from '@src/types/props'

export const Typography = () => {
  const { value, onChange } = useProps()
  const [color, setColor] = useState('rgba(255,255,255,1)')
  const onChangeFontValue = useCallback(
    (next: MainItemType) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          f: next.key as FontFamily,
        },
      })
    },
    [value],
  )
  const onChangeWeightValue = useCallback(
    (next: MainItemType) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          w: next.key as FontWeight,
        },
      })
    },
    [value],
  )
  const onChangeSizeValue = useCallback(
    (next: IFontSize) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          s: next,
        },
      })
    },
    [value],
  )

  const onChangeHeightValue = useCallback(
    (next: ILineHeight | null) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          lh: next,
        },
      })
    },
    [value],
  )
  const onChangeAlignValue = useCallback(
    (next: TextAlign | null) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          a: next,
        },
      })
    },
    [value],
  )

  const onChangeFontStyleValue = useCallback(
    (next: TextFontStyle | null) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          fs: next,
        },
      })
    },
    [value],
  )
  const onChangeDecorationValue = useCallback(
    (next: TextDecoration | null) => {
      onChange({
        ...value,
        text: {
          ...value.text,
          dec: next,
        },
      })
    },
    [value],
  )

  const [wrapActiveItemOnHover, setWrapActiveItemOnHover] = useState<
    string | undefined
  >()
  const [wordBreakActiveItemOnHover, setWordBreakActiveItemOnHover] = useState<
    string | undefined
  >()
  const [whiteSpaceActiveItemOnHover, setWhiteSpaceActiveItemOnHover] = useState<
    string | undefined
  >()

  console.log(color)
  return (
    <>
      <ContentWrapper title={'Font'}>
        <Select
          options={FONT_FAMILY_OPTIONS}
          defaultSelectedKey={value.text.f}
          handleSelect={onChangeFontValue}
          optionLabelProp={'labelInValue'}
        />
      </ContentWrapper>
      <ContentWrapper title={'Weight'}>
        <Select
          options={FONT_WEIGHT_OPTIONS}
          defaultSelectedKey={value.text.w}
          handleSelect={onChangeWeightValue}
          isCapitalizeButtonTitle={false}
        />
      </ContentWrapper>
      <Grid templateColumns={'1fr 1fr'} gap={1} mb="2">
        <CssUnit.InputWithLabel
          onChange={onChangeSizeValue}
          value={value.text.s}
          label={'Size'}
          labelPosition={'left'}
          labelWrapperStyles={{ width: LABEL_WIDTH }}
        />
        <CssUnit.InputWithLabel
          onChange={onChangeHeightValue}
          value={value.text.lh}
          label={'Height'}
          labelPosition={'left'}
          labelWrapperStyles={{ width: LABEL_WIDTH }}
        />
      </Grid>
      <ContentWrapper title={'Color'}>
        <ColorPicker
          gradientColorPickerProps={{
            onChange: setColor,
            value: color,
          }}
        />
      </ContentWrapper>
      <ContentWrapper title={'Align'}>
        <Segmented
          defaultSelectedKey={ALIGN_OPTIONS[0].key}
          options={ALIGN_OPTIONS}
          value={value.text.a}
          onChange={onChangeAlignValue}
        />
      </ContentWrapper>
      <ContentWrapper title={'Style'}>
        <Grid templateColumns={'1fr 2fr'} gap={1}>
          <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Segmented
              defaultSelectedKey={STYLE_ITALIC_OPTIONS[0].key}
              options={STYLE_ITALIC_OPTIONS}
              value={value.text.fs}
              onChange={onChangeFontStyleValue}
              label={'Italic'}
              labelPosition={'down'}
            />
          </Box>
          <Segmented
            defaultSelectedKey={STYLE_DECORATION_OPTIONS[0].key}
            options={STYLE_DECORATION_OPTIONS}
            value={value.text.dec}
            onChange={onChangeDecorationValue}
            label={'Decoration'}
            labelPosition={'down'}
          />
        </Grid>
      </ContentWrapper>
      <MoreItemsButton buttonTitle={'More type options'}>
        <ContentWrapper title={'Spacing'} containerProps={{ mt: 2 }}>
          <Grid templateColumns={'1fr 1fr'} gap={2} alignContent={'center'}>
            <CssUnit.InputWithLabel
              onChange={onChangeSizeValue}
              value={value.text.whs}
              label={'Letter'}
              labelPosition={'down'}
            />
            <CssUnit.InputWithLabel
              onChange={onChangeHeightValue}
              value={value.text.wbr}
              label={'Word'}
              labelPosition={'down'}
            />
          </Grid>
        </ContentWrapper>
        <ContentWrapper title={'Transform'}>
          <Segmented
            defaultSelectedKey={TRANSFORM_OPTIONS[0].key}
            options={TRANSFORM_OPTIONS}
            value={value.text.a}
            onChange={onChangeAlignValue}
          />
        </ContentWrapper>
        <ContentWrapper title={'Wrap'}>
          <Select
            options={WRAP_OPTIONS({
              setActiveItemOnHover: setWrapActiveItemOnHover,
            })}
            activeItemKeyOnHover={wrapActiveItemOnHover}
            activeItemPropertyOnHover={'description'}
            setActiveItemOnHover={setWrapActiveItemOnHover}
          />
        </ContentWrapper>
        <ContentWrapper title={'Breaking'}>
          <Grid templateColumns={'1fr 1fr'} gap={1}>
            <Select
              options={WORD_BREAK_OPTIONS({
                setActiveItemOnHover: setWordBreakActiveItemOnHover,
              })}
              activeItemKeyOnHover={wordBreakActiveItemOnHover}
              activeItemPropertyOnHover={'description'}
              setActiveItemOnHover={setWordBreakActiveItemOnHover}
              labelProps={{ labelPosition: 'down', label: 'Words' }}
            />
            <Select
              options={WHITE_SPACE_OPTIONS({
                setActiveItemOnHover: setWhiteSpaceActiveItemOnHover,
              })}
              activeItemKeyOnHover={whiteSpaceActiveItemOnHover}
              activeItemPropertyOnHover={'description'}
              setActiveItemOnHover={setWhiteSpaceActiveItemOnHover}
              labelProps={{ labelPosition: 'down', label: 'Lines' }}
            />
          </Grid>
        </ContentWrapper>
      </MoreItemsButton>
    </>
  )
}
