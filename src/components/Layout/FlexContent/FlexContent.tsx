import { Segmented } from '@src/components/Segmented'
import {
  FLEX_DIRECTION_ADD_OPTIONS,
  FLEX_DIRECTION_MAIN_OPTIONS,
} from '@src/constants/flex'
import { ContentWrapper } from '@src/components/ContentWrapper/ContentWrapper'
import { Slider } from '@src/components/Slider/Slider'
import { Css } from '@src/models/css'
import { useCallback } from 'react'

interface IFlexContentProps {
  model: Css.IFlex
  onChange: (model: Css.IFlex) => void
}

export const FlexContent = ({ model, onChange }: IFlexContentProps) => {
  const isEmptyGap = Css.Util.isEmptyValue(model.gap)
  const isEmptyDirection = Css.Util.isEmptyValue(model.direction)

  const onChangeDirection = useCallback(
    (direction: Css.Enum.FlexDirection | null) => {
      onChange({ ...model, direction })
    },
    [model, onChange],
  )

  const onChangeGap = useCallback(
    (gap: Css.IGap | null) => {
      onChange({ ...model, gap })
    },
    [model, onChange],
  )

  const onResetDirection = useCallback(() => {
    onChangeDirection(null)
  }, [onChangeDirection])

  const onResetGap = useCallback(() => {
    onChangeGap(null)
  }, [onChangeGap])

  return (
    <>
      <ContentWrapper
        property={'direction'}
        isActive={!isEmptyDirection}
        onReset={!isEmptyDirection ? onResetDirection : null}
      >
        <Segmented
          value={model.direction || Css.DefaultValue.FLEX_DIRECTION}
          onChange={onChangeDirection}
          options={FLEX_DIRECTION_MAIN_OPTIONS}
          menuItems={FLEX_DIRECTION_ADD_OPTIONS}
          defaultSelectedKey={Css.Enum.FlexDirection.ROW_REVERSE}
        />
      </ContentWrapper>
      <ContentWrapper
        property={'gap'}
        isActive={!isEmptyGap}
        onReset={!isEmptyGap ? onResetGap : null}
      >
        <Slider onChange={onChangeGap} />
      </ContentWrapper>
    </>
  )
}
