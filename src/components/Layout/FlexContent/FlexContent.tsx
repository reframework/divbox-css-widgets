import { Segmented } from '@src/components/Segmented'
import {
  FLEX_DIRECTION_ADD_OPTIONS,
  FLEX_DIRECTION_MAIN_OPTIONS,
} from '@src/constants/flex'
import { ContentWrapper } from '@src/components/ContentWrapper/ContentWrapper'
import { Slider } from '@src/components/Slider/Slider'

export const FlexContent = () => {
  return (
    <>
      <ContentWrapper title={'Direction'}>
        <Segmented
          defaultValue={FLEX_DIRECTION_MAIN_OPTIONS[0].value}
          mainDefaultOptions={FLEX_DIRECTION_MAIN_OPTIONS}
          additionalOptions={FLEX_DIRECTION_ADD_OPTIONS}
          additionalOptionLabelProp={'icon'}
        />
      </ContentWrapper>
      <ContentWrapper title={'Gap'}>
        <Slider />
      </ContentWrapper>
    </>
  )
}
