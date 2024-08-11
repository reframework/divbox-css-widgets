import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io'
import { HiMiniBarsArrowDown } from 'react-icons/hi2'
import { Box } from '@chakra-ui/react'
import { toMakeUpperFirstChar } from '@src/helpers'
import { DISPLAY_TYPES } from '@src/constants/common'

export const GRID_DIRECTION_MAIN_OPTIONS = [
  {
    value: 'horizontal',
    label: <IoIosArrowRoundForward fontSize={'18px'} />,
  },
  {
    value: 'vertical',
    label: <IoIosArrowRoundDown fontSize={'18px'} />,
  },
]

export const FLEX_DISPLAY_MAIN_OPTIONS = [
  {
    value: DISPLAY_TYPES.block,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.block),
  },
  {
    value: DISPLAY_TYPES.flex,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.flex),
  },
  {
    value: DISPLAY_TYPES.grid,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.grid),
  },
]

export const FLEX_DISPLAY_ADD_OPTIONS = [
  {
    key: DISPLAY_TYPES.inlineBlock,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineBlock),
    label_prop: 'Inl-blk',
  },
  {
    key: DISPLAY_TYPES.inlineFlex,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineFlex),
    label_prop: 'Inl-flx',
  },
  {
    key: DISPLAY_TYPES.inlineGrid,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inlineGrid),
    label_prop: 'Inl-grd',
  },
  {
    key: DISPLAY_TYPES.inline,
    label: toMakeUpperFirstChar(DISPLAY_TYPES.inline),
    label_prop: 'Inln',
  },
  { type: 'divider' },
  {
    key: DISPLAY_TYPES.none,
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
