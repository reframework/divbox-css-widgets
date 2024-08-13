import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io'
import { HiMiniBarsArrowDown } from 'react-icons/hi2'
import { Box } from '@chakra-ui/react'
import { toMakeUpperFirstChar } from '@src/helpers'
import { DISPLAY_TYPES } from '@src/constants/common'
import { Css } from '@src/models/css'

export const FLEX_DIRECTION_MAIN_OPTIONS = [
  {
    value: Css.Enum.FlexDirection.ROW,
    label: <IoIosArrowRoundForward fontSize={'18px'} />,
  },
  {
    value: Css.Enum.FlexDirection.COLUMN,
    label: <IoIosArrowRoundDown fontSize={'18px'} />,
  },
]

export const FLEX_DISPLAY_MAIN_OPTIONS = [
  {
    value: Css.Enum.Display.BLOCK,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.block),
  },
  {
    value: Css.Enum.Display.FLEX,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.flex),
  },
  {
    value: Css.Enum.Display.GRID,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.grid),
  },
]

export const FLEX_DISPLAY_ADD_OPTIONS = [
  {
    key: Css.Enum.Display.INLINE_BLOCK,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineBlock),
    label_prop: 'Inl-blk',
  },
  {
    key: Css.Enum.Display.INLINE_FLEX,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineFlex),
    label_prop: 'Inl-flx',
  },
  {
    key: Css.Enum.Display.INLINE_GRID,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineGrid),
    label_prop: 'Inl-grd',
  },
  {
    key: Css.Enum.Display.INLINE,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inline),
    label_prop: 'Inln',
  },
  { type: 'divider' },
  {
    key: Css.Enum.Display.NONE,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.none),
    label_prop: 'None',
  },
]

const AddOptsLabelWrapper: React.FC = ({ children }) => (
  <Box fontSize={'12px'} display={'flex'} alignItems={'center'} gap={'5px'}>
    {children}
  </Box>
)
const AddOptsGroupLabelWrapper: React.FC = ({ children }) => (
  <Box fontSize={'12px'} fontWeight={'bold'}>
    {children}
  </Box>
)
export const FLEX_DIRECTION_ADD_OPTIONS = [
  {
    key: 'group1',
    label: <AddOptsGroupLabelWrapper>Left to right</AddOptsGroupLabelWrapper>,
    type: 'group',
    children: [
      {
        label: <AddOptsLabelWrapper>Wrap down</AddOptsLabelWrapper>,
        key: '1',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap up</AddOptsLabelWrapper>,
        key: '2',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <AddOptsGroupLabelWrapper>Right to left</AddOptsGroupLabelWrapper>,
    key: 'group2',
    type: 'group',
    children: [
      {
        label: <AddOptsLabelWrapper>Single row</AddOptsLabelWrapper>,
        key: '3',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap down</AddOptsLabelWrapper>,
        key: '4',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap up</AddOptsLabelWrapper>,
        key: '5',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <AddOptsGroupLabelWrapper>Top to bottom</AddOptsGroupLabelWrapper>,
    key: 'group3',
    type: 'group',
    children: [
      {
        label: <AddOptsLabelWrapper>Wrap right</AddOptsLabelWrapper>,
        key: '6',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap left</AddOptsLabelWrapper>,
        key: '7',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
    ],
  },
  { type: 'divider' },
  {
    label: <AddOptsGroupLabelWrapper>Bottom to top</AddOptsGroupLabelWrapper>,
    key: 'group4',
    type: 'group',
    children: [
      {
        label: <AddOptsLabelWrapper>Single column</AddOptsLabelWrapper>,
        key: '8',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap right</AddOptsLabelWrapper>,
        key: '9',
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
      },
      {
        label: <AddOptsLabelWrapper>Wrap left</AddOptsLabelWrapper>,
        icon: <HiMiniBarsArrowDown fontSize={'18px'} />,
        key: '10',
      },
    ],
  },
]
