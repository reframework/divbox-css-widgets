import { Segmented } from '@src/components/Segmented'
import { useState } from 'react'
import {
  FLEX_DISPLAY_ADD_OPTIONS,
  FLEX_DISPLAY_MAIN_OPTIONS,
} from '@src/constants/flex'
import { DISPLAY_TYPES } from '@src/constants/common'
import { ContentWrapper } from '@src/components/ContentWrapper'
import { FlexContent } from '@src/components/Layout/FlexContent'
import { GridContent } from '@src/components/Layout/GridContent'

export const Layout = () => {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPES.block)
  const onDisplayTypeChange = (val: string) => {
    setDisplayType(val)
  }

  return (
    <>
      <ContentWrapper title={'Display'}>
        <Segmented
          defaultValue={displayType}
          addOptsDefaultValue={DISPLAY_TYPES.none}
          mainDefaultOptions={FLEX_DISPLAY_MAIN_OPTIONS}
          additionalOptions={FLEX_DISPLAY_ADD_OPTIONS}
          onChange={onDisplayTypeChange}
          additionalOptionLabelProp={'label_prop'}
        />
      </ContentWrapper>
      {displayType === DISPLAY_TYPES.flex && <FlexContent />}
      {displayType === DISPLAY_TYPES.grid && <GridContent />}
    </>
  )
}
