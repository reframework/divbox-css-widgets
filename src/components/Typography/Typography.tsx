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
import {
  mapPropertyTitle,
  TypographyProperties,
  TypographyValues,
} from '@src/components/Typography/Typography.helpers'
import { useSetColorPikerState } from '@src/hooks/handlePikerColor'

export const Typography = () => {
  const { value, onChange } = useProps()

  const onChangeValue = useCallback(
    (property: any) => (next: any) => {
      const isSelectValue = [
        TypographyValues[TypographyProperties.FONT_FAMILY],
        TypographyValues[TypographyProperties.FONT_WEIGHT],
        TypographyValues[TypographyProperties.WORD_WRAP],
        TypographyValues[TypographyProperties.WHITE_SPACE],
        TypographyValues[TypographyProperties.WORD_BREAK],
      ].includes(property)
      const propertyValue = isSelectValue ? next.key : next

      onChange({
        ...value,
        text: {
          ...value.text,
          [property]: propertyValue,
        },
      })
    },
    [value, TypographyValues],
  )
  const { color, setColor } = useSetColorPikerState({
    initState: value.text.c,
    changeColor: onChangeValue(TypographyValues[TypographyProperties.COLOR]),
  })
  const [wrapActiveItemOnHover, setWrapActiveItemOnHover] = useState<
    string | undefined
  >()

  const [wordBreakActiveItemOnHover, setWordBreakActiveItemOnHover] = useState<
    string | undefined
  >()

  const [whiteSpaceActiveItemOnHover, setWhiteSpaceActiveItemOnHover] = useState<
    string | undefined
  >()

  return (
    <>
      <ContentWrapper property={mapPropertyTitle[TypographyProperties.FONT_FAMILY]}>
        <Select
          options={FONT_FAMILY_OPTIONS}
          defaultSelectedKey={value.text.f}
          handleSelect={onChangeValue(
            TypographyValues[TypographyProperties.FONT_FAMILY],
          )}
          optionLabelProp={'labelInValue'}
        />
      </ContentWrapper>
      <ContentWrapper property={mapPropertyTitle[TypographyProperties.FONT_WEIGHT]}>
        <Select
          options={FONT_WEIGHT_OPTIONS}
          defaultSelectedKey={value.text.w}
          handleSelect={onChangeValue(
            TypographyValues[TypographyProperties.FONT_WEIGHT],
          )}
          isCapitalizeButtonTitle={false}
        />
      </ContentWrapper>
      <Grid templateColumns={'1fr 1fr'} gap={1} mb="2">
        <CssUnit.InputWithLabel
          onChange={onChangeValue(TypographyValues[TypographyProperties.FONT_SIZE])}
          value={value.text.s}
          label={mapPropertyTitle[TypographyProperties.FONT_SIZE]}
          labelPosition={'left'}
          labelWrapperStyles={{ width: LABEL_WIDTH }}
        />
        <CssUnit.InputWithLabel
          onChange={onChangeValue(
            TypographyValues[TypographyProperties.LINE_HEIGHT],
          )}
          value={value.text.lh}
          label={mapPropertyTitle[TypographyProperties.LINE_HEIGHT]}
          labelPosition={'left'}
          labelWrapperStyles={{ width: LABEL_WIDTH }}
        />
      </Grid>
      <ContentWrapper property={mapPropertyTitle[TypographyProperties.COLOR]}>
        <ColorPicker
          gradientColorPickerProps={{
            value: color,
            onChange: setColor,
          }}
        />
      </ContentWrapper>
      <ContentWrapper property={mapPropertyTitle[TypographyProperties.TEXT_ALIGN]}>
        <Segmented
          defaultSelectedKey={ALIGN_OPTIONS[0].key}
          options={ALIGN_OPTIONS}
          value={value.text.a}
          onChange={onChangeValue(TypographyValues[TypographyProperties.TEXT_ALIGN])}
        />
      </ContentWrapper>
      <ContentWrapper property={'Style'}>
        <Grid templateColumns={'1fr 2fr'} gap={1}>
          <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Segmented
              defaultSelectedKey={STYLE_ITALIC_OPTIONS[0].key}
              options={STYLE_ITALIC_OPTIONS}
              value={value.text.fs}
              onChange={onChangeValue(
                TypographyValues[TypographyProperties.FONT_STYLE],
              )}
              label={mapPropertyTitle[TypographyProperties.FONT_STYLE]}
              labelPosition={'down'}
            />
          </Box>
          <Segmented
            defaultSelectedKey={STYLE_DECORATION_OPTIONS[0].key}
            options={STYLE_DECORATION_OPTIONS}
            value={value.text.dec}
            onChange={onChangeValue(
              TypographyValues[TypographyProperties.TEXT_DECORATION],
            )}
            label={mapPropertyTitle[TypographyProperties.TEXT_DECORATION]}
            labelPosition={'down'}
          />
        </Grid>
      </ContentWrapper>
      <MoreItemsButton buttonTitle={'More type options'}>
        <ContentWrapper property={'Spacing'} containerProps={{ mt: 2 }}>
          <Grid templateColumns={'1fr 1fr'} gap={2} alignContent={'center'}>
            <CssUnit.InputWithLabel
              onChange={onChangeValue(
                TypographyValues[TypographyProperties.LETTER_SPACING],
              )}
              value={value.text.ls}
              label={mapPropertyTitle[TypographyProperties.LETTER_SPACING]}
              labelPosition={'down'}
            />
            <CssUnit.InputWithLabel
              onChange={onChangeValue(
                TypographyValues[TypographyProperties.WORD_SPACING],
              )}
              value={value.text.ws}
              label={mapPropertyTitle[TypographyProperties.WORD_SPACING]}
              labelPosition={'down'}
            />
          </Grid>
        </ContentWrapper>
        <ContentWrapper
          property={mapPropertyTitle[TypographyProperties.TEXT_TRANSFORM]}
        >
          <Segmented
            defaultSelectedKey={TRANSFORM_OPTIONS[0].key}
            options={TRANSFORM_OPTIONS}
            value={value.text.ttr}
            onChange={onChangeValue(
              TypographyValues[TypographyProperties.TEXT_TRANSFORM],
            )}
          />
        </ContentWrapper>
        <ContentWrapper property={mapPropertyTitle[TypographyProperties.WORD_WRAP]}>
          <Select
            options={WRAP_OPTIONS(setWrapActiveItemOnHover)}
            activeItemKeyOnHover={wrapActiveItemOnHover}
            activeItemPropertyOnHover={'description'}
            setActiveItemOnHover={setWrapActiveItemOnHover}
            defaultSelectedKey={value.text.wwr}
            handleSelect={onChangeValue(
              TypographyValues[TypographyProperties.WORD_WRAP],
            )}
          />
        </ContentWrapper>
        <ContentWrapper property={'Breaking'}>
          <Grid templateColumns={'1fr 1fr'} gap={1}>
            <Select
              options={WORD_BREAK_OPTIONS(setWordBreakActiveItemOnHover)}
              activeItemKeyOnHover={wordBreakActiveItemOnHover}
              activeItemPropertyOnHover={'description'}
              setActiveItemOnHover={setWordBreakActiveItemOnHover}
              labelProps={{
                labelPosition: 'down',
                label: mapPropertyTitle[TypographyProperties.WORD_BREAK],
              }}
              defaultSelectedKey={value.text.wbr}
              handleSelect={onChangeValue(
                TypographyValues[TypographyProperties.WORD_BREAK],
              )}
            />
            <Select
              options={WHITE_SPACE_OPTIONS(setWhiteSpaceActiveItemOnHover)}
              activeItemKeyOnHover={whiteSpaceActiveItemOnHover}
              activeItemPropertyOnHover={'description'}
              setActiveItemOnHover={setWhiteSpaceActiveItemOnHover}
              labelProps={{
                labelPosition: 'down',
                label: mapPropertyTitle[TypographyProperties.WHITE_SPACE],
              }}
              defaultSelectedKey={value.text.whs}
              handleSelect={onChangeValue(
                TypographyValues[TypographyProperties.WHITE_SPACE],
              )}
            />
          </Grid>
        </ContentWrapper>
      </MoreItemsButton>
    </>
  )
}
