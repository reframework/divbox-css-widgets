import { Segmented } from '@src/components/Segmented'
import {
  FLEX_DISPLAY_ADD_OPTIONS,
  FLEX_DISPLAY_MAIN_OPTIONS,
} from '@src/constants/flex'
import { DISPLAY_TYPES } from '@src/constants/common'
import { ContentWrapper } from '@src/components/ContentWrapper'
import { FlexContent } from '@src/components/Layout/FlexContent'
import { GridContent } from '@src/components/Layout/GridContent'
import { useProps } from '@src/components/Context'
import { Css } from '@src/models/css'

export const Layout = () => {
  const { value, onChange } = useProps()

  const { layout } = value

  const onDisplayTypeChange = (d: Css.Enum.Display) => {
    if (Css.Util.isFlex(d) && !layout.flex) {
      onChange({
        layout: {
          ...layout,
          d,
          flex: Css.Model.Flex(),
        },
      })
      return
    }

    if (Css.Util.isGrid(d) && !layout.grid) {
      onChange({
        layout: {
          ...layout,
          d,
          grid: Css.Model.Grid(),
        },
      })
      return
    }

    if (Css.Util.isInline(d) && !layout.vAlign) {
      onChange({
        layout: {
          ...layout,
          d,
          vAlign: Css.Enum.VerticalAlign.BASELINE,
        },
      })
      return
    }

    onChange({ layout: { ...layout, d } })
  }

  return (
    <>
      <ContentWrapper title={'Display'}>
        <Segmented
          defaultValue={layout.d}
          addOptsDefaultValue={DISPLAY_TYPES.none}
          mainDefaultOptions={FLEX_DISPLAY_MAIN_OPTIONS}
          additionalOptions={FLEX_DISPLAY_ADD_OPTIONS}
          onChange={onDisplayTypeChange}
          additionalOptionLabelProp={'label_prop'}
        />
      </ContentWrapper>
      {Css.Util.isFlex(layout.d) && layout.flex && (
        <FlexContent model={layout.flex} />
      )}
      {Css.Util.isGrid(layout.d) && layout.grid && (
        <GridContent model={layout.grid} />
      )}
      {/* TODO: inline layout with vertical align */}
    </>
  )
}
