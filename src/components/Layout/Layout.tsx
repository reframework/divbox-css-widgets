import { Segmented } from '@src/components/Segmented'
import { DISPLAY_ADD_OPTIONS, DISPLAY_MAIN_OPTIONS } from '@src/constants/flex'
import { ContentWrapper } from '@src/components/ContentWrapper'
import { FlexContent } from '@src/components/Layout/FlexContent'
import { GridContent } from '@src/components/Layout/GridContent'
import { useProps } from '@src/components/Context'
import { Css } from '@src/models/css'
import { useCallback } from 'react'

export const Layout = () => {
  const { value, onChange } = useProps()

  const { layout } = value
  const isDisplayEmpty = Css.Util.isEmptyValue(layout.d)

  const onDisplayTypeChange = useCallback(
    (d: Css.Enum.Display | null) => {
      if (!d) {
        onChange({ layout: { ...layout, d: null } })
        return
      }

      if (Css.Util.isFlex(d) && !layout.flex) {
        onChange({
          layout: {
            ...layout,
            d: d,
            flex: Css.Model.Flex(),
          },
        })
        return
      }

      if (Css.Util.isGrid(d) && !layout.grid) {
        onChange({
          layout: {
            ...layout,
            d: d,
            grid: Css.Model.Grid(),
          },
        })
        return
      }

      onChange({ layout: { ...layout, d } })
    },
    [layout, onChange],
  )

  const onChangeFlex = useCallback(
    (flex: Css.IFlex) => {
      onChange({ layout: { ...layout, flex } })
    },
    [layout, onChange],
  )

  const onChangeGrid = useCallback(
    (grid: Css.IGrid) => {
      onChange({ layout: { ...layout, grid } })
    },
    [layout, onChange],
  )

  const resetDisplay = () => {
    onDisplayTypeChange(null)
  }

  return (
    <>
      <ContentWrapper
        property="display"
        isActive={!isDisplayEmpty}
        onReset={!isDisplayEmpty ? resetDisplay : null}
      >
        <Segmented
          value={layout.d || Css.DefaultValue.DISPLAY}
          options={DISPLAY_MAIN_OPTIONS}
          menuItems={DISPLAY_ADD_OPTIONS}
          onChange={onDisplayTypeChange}
          defaultSelectedKey={Css.Enum.Display.NONE}
        />
      </ContentWrapper>
      {Css.Util.isFlex(layout.d) && layout.flex && (
        <FlexContent model={layout.flex} onChange={onChangeFlex} />
      )}
      {Css.Util.isGrid(layout.d) && layout.grid && (
        <GridContent model={layout.grid} onChange={onChangeGrid} />
      )}
      {/* TODO: inline layout with vertical align */}
    </>
  )
}
