import { Segmented } from '@src/components/Segmented'
import { ContentWrapper } from '@src/components/ContentWrapper/ContentWrapper'
import { Slider } from '@src/components/Slider/Slider'
import { GRID_DIRECTION_MAIN_OPTIONS } from '@src/constants/grid'
import { Grid } from '@chakra-ui/react'
import { IconButton } from '@src/components/IconButton'
import { BsQuestion } from 'react-icons/bs'
import { InputNumber } from '@src/components/InputNumber'
import { RiSettings5Fill } from 'react-icons/ri'
import { Css } from '@src/models/css'

interface IGridContentProps {
  model: Css.IGrid
}

export const GridContent = ({ model }: IGridContentProps) => {
  return (
    <>
      <ContentWrapper title={'Grid'}>
        <Grid templateColumns={'1fr 1fr 24px'} gap={'5px'}>
          <InputNumber min={0} defaultValue={0} controls label={'Columns'} />
          <InputNumber min={0} defaultValue={0} controls label={'Rows'} />
          <IconButton
            icon={<RiSettings5Fill fontSize={'11px'} />}
            ariaLabel={'button'} //todo
          />
        </Grid>
      </ContentWrapper>
      <ContentWrapper title={'Direction'}>
        <Grid templateColumns={'1fr 24px'} gap={'5px'}>
          {/* <Segmented
            defaultValue={GRID_DIRECTION_MAIN_OPTIONS[0].value}
            mainDefaultOptions={GRID_DIRECTION_MAIN_OPTIONS}
            additionalOptionLabelProp={'icon'}
          /> */}
          <IconButton
            icon={<BsQuestion fontSize={'xs'} />}
            ariaLabel={'button'} //todo
          />
        </Grid>
      </ContentWrapper>
      <ContentWrapper title={'Gap'}>
        <Slider />
      </ContentWrapper>
    </>
  )
}
