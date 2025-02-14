import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io'
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from 'react-icons/hi2'
import { Box } from '@chakra-ui/react'
import { Css } from '@src/models/css'
import { ReactNode } from 'react'
import { ISegmentedMenuItem } from '@src/components/Segmented'
import _ from 'lodash'

export const FLEX_DIRECTION_MAIN_OPTIONS = [
  {
    key: Css.Enum.FlexDirection.ROW,
    label: <IoIosArrowRoundForward fontSize={'18px'} />,
  },
  {
    key: Css.Enum.FlexDirection.COLUMN,
    label: <IoIosArrowRoundDown fontSize={'18px'} />,
  },
]

export const DISPLAY_MAIN_OPTIONS = [
  {
    key: Css.Enum.Display.BLOCK,
    label: _.capitalize(Css.Enum.Display.BLOCK),
  },
  {
    key: Css.Enum.Display.FLEX,
    label: _.capitalize(Css.Enum.Display.FLEX),
  },
  {
    key: Css.Enum.Display.GRID,
    label: _.capitalize(Css.Enum.Display.GRID),
  },
]

export const DISPLAY_ADD_OPTIONS: ISegmentedMenuItem[] = [
  {
    key: Css.Enum.Display.INLINE_BLOCK,
    label: _.capitalize(Css.Enum.Display.INLINE_BLOCK),
    buttonLabel: 'In-blk',
  },
  {
    key: Css.Enum.Display.INLINE_FLEX,
    label: _.capitalize(Css.Enum.Display.INLINE_FLEX),
    buttonLabel: 'In-flx',
  },
  {
    key: Css.Enum.Display.INLINE_GRID,
    label: _.capitalize(Css.Enum.Display.INLINE_GRID),
    buttonLabel: 'In-grd',
  },
  {
    key: Css.Enum.Display.INLINE,
    label: _.capitalize(Css.Enum.Display.INLINE),
    buttonLabel: 'Inline',
  },
  { type: 'divider' },
  {
    key: Css.Enum.Display.NONE,
    label: _.capitalize(Css.Enum.Display.NONE),
    buttonLabel: 'None',
  },
]

const LabelWrapper = ({ children }: { children: ReactNode }) => (
  <Box fontSize={'12px'} display={'flex'} alignItems={'center'} gap={'5px'}>
    {children}
  </Box>
)
const GroupLabelWrapper = ({ children }: { children: ReactNode }) => (
  <Box fontSize={'12px'} fontWeight={'bold'}>
    {children}
  </Box>
)
export const FLEX_DIRECTION_ADD_OPTIONS: ISegmentedMenuItem[] = [
  {
    key: 'group1',
    label: <GroupLabelWrapper>Left to right</GroupLabelWrapper>,
    type: 'group',
    children: [
      {
        label: <LabelWrapper>Wrap down</LabelWrapper>,
        key: '1',
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap up</LabelWrapper>,
        key: '2',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <GroupLabelWrapper>Right to left</GroupLabelWrapper>,
    key: 'group2',
    type: 'group',
    children: [
      {
        label: <LabelWrapper>Single row</LabelWrapper>,
        key: '3',
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap down</LabelWrapper>,
        key: '4',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap up</LabelWrapper>,
        key: '5',
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <GroupLabelWrapper>Top to bottom</GroupLabelWrapper>,
    key: 'group3',
    type: 'group',
    children: [
      {
        label: <LabelWrapper>Wrap right</LabelWrapper>,
        key: '6',
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap left</LabelWrapper>,
        key: '7',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <GroupLabelWrapper>Bottom to top</GroupLabelWrapper>,
    key: 'group4',
    type: 'group',
    children: [
      {
        label: <LabelWrapper>Single column</LabelWrapper>,
        key: '8',
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap right</LabelWrapper>,
        key: '9',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <LabelWrapper>Wrap left</LabelWrapper>,
        icon: <HiMiniBarsArrowUp fontSize={'18px'} />,
        buttonLabel: <HiMiniBarsArrowUp fontSize={'18px'} />,
        key: '10',
      },
    ],
  },
] as const
