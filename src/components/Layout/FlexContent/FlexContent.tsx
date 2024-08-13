import { Segmented } from '@src/components/Segmented'
import {
  FLEX_DIRECTION_ADD_OPTIONS,
  FLEX_DIRECTION_MAIN_OPTIONS,
} from '@src/constants/flex'
import { ContentWrapper } from '@src/components/ContentWrapper/ContentWrapper'
import { Slider } from '@src/components/Slider/Slider'
import { Css } from '@src/models/css'

interface IFlexContentProps {
  model: Css.IFlex
}

export const FlexContent = ({ model }: IFlexContentProps) => {
  return (
    <>
      <ContentWrapper title={'Direction'}>
        <Segmented
          defaultValue={model.direction}
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
