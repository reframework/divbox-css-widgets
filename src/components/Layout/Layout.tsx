import { Segmented } from '@src/components/Segmented'
import { DISPLAY_ADD_OPTIONS, DISPLAY_MAIN_OPTIONS } from '@src/constants/flex'
import { ContentWrapper } from '@src/components/ContentWrapper'
import { FlexContent } from '@src/components/Layout/FlexContent'
import { GridContent } from '@src/components/Layout/GridContent'
import { useProps } from '@src/components/Context'
import { Css } from '@src/models/css'

export const Layout = () => {
  const { value, onChange } = useProps()

  const { layout } = value

  console.log(layout, 'layout')

  const onDisplayTypeChange = (d: string) => {
    const display = d as Css.Enum.Display

    if (Css.Util.isFlex(display) && !layout.flex) {
      console.log(display, 'k display')

      onChange({
        layout: {
          ...layout,
          d: display,
          flex: Css.Model.Flex(),
        },
      })
      return
    }

    if (Css.Util.isGrid(display) && !layout.grid) {
      onChange({
        layout: {
          ...layout,
          d: display,
          grid: Css.Model.Grid(),
        },
      })
      return
    }

    if (Css.Util.isInline(display) && !layout.vAlign) {
      onChange({
        layout: {
          ...layout,
          d: display,
          vAlign: Css.Enum.VerticalAlign.BASELINE,
        },
      })
      return
    }

    onChange({ layout: { ...layout, d: display } })
  }

  return (
    <>
      <ContentWrapper title={'Display'}>
        <Segmented
          value={layout.d}
          options={DISPLAY_MAIN_OPTIONS}
          menuItems={DISPLAY_ADD_OPTIONS}
          onChange={onDisplayTypeChange}
          defaultSelectedKey={Css.Enum.Display.NONE}
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
