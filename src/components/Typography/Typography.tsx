import { ContentWrapper } from '@src/components/ContentWrapper'
import { Select } from '@src/components/Select'
import { FontFamily } from '@src/models/css/enums'
import { Box } from '@chakra-ui/react'
import { toMakeUpperFirstChar } from '@src/helpers'

export const Typography = () => {
  const fontsOptions = Object.entries(FontFamily).map((item) => {
    const text = toMakeUpperFirstChar(item[1])
    return {
      label: (
        <Box fontSize={'xs'} fontFamily={text}>
          {text}
        </Box>
      ),
      key: item[0],
      labelInValue: text,
    }
  })

  return (
    <>
      <ContentWrapper title={'Font'}>
        <Select options={fontsOptions} optionLabelProp={'labelInValue'} />
      </ContentWrapper>
      {/*<Segmented*/}
      {/*  defaultValue={layout.d}*/}
      {/*  addOptsDefaultValue={Css.Enum.Display.NONE}*/}
      {/*  mainDefaultOptions={FLEX_DISPLAY_MAIN_OPTIONS}*/}
      {/*  additionalOptions={FLEX_DISPLAY_ADD_OPTIONS}*/}
      {/*  onChange={onDisplayTypeChange}*/}
      {/*  additionalOptionLabelProp={'label_prop'}*/}
      {/*/>*/}
    </>
  )
}
