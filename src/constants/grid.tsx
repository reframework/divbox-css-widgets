import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io'
import { HiMiniBarsArrowDown } from 'react-icons/hi2'
import { Box } from '@chakra-ui/react'
import { toMakeUpperFirstChar } from '@src/helpers'
import { Css } from '@src/models/css'

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
