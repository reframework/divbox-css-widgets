import { ISegmentedItem } from '@src/components/Segmented'
import {
  FontFamily,
  FontWeight,
  TextAlign,
  TextDecoration,
  TextFontStyle,
  TextTransform,
  WhiteSpace,
  WordBreak,
  Wrap,
} from '@src/models/css/enums'
import {
  TbAlignCenter,
  TbAlignJustified,
  TbAlignLeft,
  TbAlignRight,
  TbItalic,
  TbLetterCase,
  TbLetterCaseLower,
  TbLetterCaseUpper,
  TbLetterI,
  TbOverline,
  TbStrikethrough,
  TbUnderline,
} from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'
import { MainItemType } from '@src/types/props'
import { SelectDropdownText } from '@src/components/Select/SelectDropdownText'

export const FONT_FAMILY_OPTIONS: MainItemType[] = [
  {
    key: FontFamily.ROBOTO,
    label: (
      <SelectDropdownText
        textProps={{
          fontSize: 'xs',
          fontFamily: 'Roboto',
        }}
      >
        {_.capitalize(FontFamily.ROBOTO)}
      </SelectDropdownText>
    ),
    labelInValue: 'Roboto',
  },
  {
    key: FontFamily.UBUNTU,
    label: (
      <SelectDropdownText
        textProps={{
          fontSize: 'xs',
          fontFamily: 'Ubuntu',
        }}
      >
        {_.capitalize(FontFamily.UBUNTU)}
      </SelectDropdownText>
    ),
    labelInValue: 'Ubuntu',
  },
  {
    key: FontFamily.INTER,
    label: (
      <SelectDropdownText
        textProps={{
          fontSize: 'xs',
          fontFamily: 'Inter',
        }}
      >
        {_.capitalize(FontFamily.INTER)}
      </SelectDropdownText>
    ),
    labelInValue: 'Inter',
  },
]

export const FONT_WEIGHT_OPTIONS: MainItemType[] = [
  {
    key: FontWeight.THIN,
    label: [FontWeight.THIN, 'Thin'].join(' - '),
  },
  {
    key: FontWeight.EXTRA_LIGHT,
    label: [FontWeight.EXTRA_LIGHT, 'Extra Light'].join(' - '),
  },
  {
    key: FontWeight.LIGHT,
    label: [FontWeight.LIGHT, 'Light'].join(' - '),
  },
  {
    key: FontWeight.REGULAR,
    label: [FontWeight.REGULAR, 'Regular'].join(' - '),
  },
  {
    key: FontWeight.MEDIUM,
    label: [FontWeight.MEDIUM, 'Medium'].join(' - '),
  },
  {
    key: FontWeight.SEMI_BOLD,
    label: [FontWeight.SEMI_BOLD, 'Semi Bold'].join(' - '),
  },
  {
    key: FontWeight.BOLD,
    label: [FontWeight.BOLD, 'Bold'].join(' - '),
  },
  {
    key: FontWeight.EXTRA_BOLD,
    label: [FontWeight.EXTRA_BOLD, 'Extra Bold'].join(' - '),
  },
  {
    key: FontWeight.BLACK,
    label: [FontWeight.BLACK, 'Black'].join(' - '),
  },
]
export const ALIGN_OPTIONS: ISegmentedItem[] = [
  {
    key: TextAlign.LEFT,
    label: <TbAlignLeft size={'14px'} />,
  },
  {
    key: TextAlign.RIGHT,
    label: <TbAlignRight size={'14px'} />,
  },
  {
    key: TextAlign.CENTER,
    label: <TbAlignCenter size={'14px'} />,
  },
  {
    key: TextAlign.JUSTIFY,
    label: <TbAlignJustified size={'14px'} />,
  },
]
export const STYLE_ITALIC_OPTIONS: ISegmentedItem[] = [
  {
    key: TextFontStyle.NORMAL,
    label: <TbLetterI size={'14px'} />,
  },
  {
    key: TextFontStyle.ITALIC,
    label: <TbItalic size={'14px'} />,
  },
]
export const STYLE_DECORATION_OPTIONS: ISegmentedItem[] = [
  {
    key: TextDecoration.NONE,
    label: <RxCross2 size={'14px'} />,
  },
  {
    key: TextDecoration.LINE_THROUGH,
    label: <TbStrikethrough size={'14px'} />,
  },
  {
    key: TextDecoration.OVERLINE,
    label: <TbOverline size={'14px'} />,
  },
  {
    key: TextDecoration.UNDERLINE,
    label: <TbUnderline size={'14px'} />,
  },
]
export const TRANSFORM_OPTIONS = [
  {
    key: TextTransform.NONE,
    label: <RxCross2 size={'14px'} />,
  },
  {
    key: TextTransform.CAPITALIZE,
    label: <TbLetterCaseUpper size={'14px'} />,
  },
  {
    key: TextTransform.UPPERCASE,
    label: <TbLetterCase size={'14px'} />,
  },
  {
    key: TextTransform.LOWERCASE,
    label: <TbLetterCaseLower size={'14px'} />,
  },
]
export const WRAP_OPTIONS = ({
  setActiveItemOnHover,
}: {
  setActiveItemOnHover?: (key: string) => void
}) => [
  {
    key: Wrap.NORMAL,
    label: _.capitalize(Wrap.NORMAL),
    onMouseEnter: () => setActiveItemOnHover?.(Wrap.NORMAL),
    description: 'example',
  },
  {
    key: Wrap.BREAK_WORD,
    label: _.capitalize(Wrap.BREAK_WORD),
    onMouseEnter: () => setActiveItemOnHover?.(Wrap.BREAK_WORD),
    description: 'example1',
  },
  {
    key: Wrap.ANYWHERE,
    label: _.capitalize(Wrap.ANYWHERE),
    onMouseEnter: () => setActiveItemOnHover?.(Wrap.ANYWHERE),
    description: 'example2',
  },
]
export const WORD_BREAK_OPTIONS = ({
  setActiveItemOnHover,
}: {
  setActiveItemOnHover?: (key: string) => void
}) => [
  {
    key: WordBreak.NORMAL,
    label: _.capitalize(WordBreak.NORMAL),
    onMouseEnter: () => setActiveItemOnHover?.(WordBreak.NORMAL),
    description: 'example1',
  },
  {
    key: WordBreak.BREAK_WORD,
    label: _.capitalize(WordBreak.BREAK_WORD),
    onMouseEnter: () => setActiveItemOnHover?.(WordBreak.BREAK_WORD),
    description: 'example2',
  },
  {
    key: WordBreak.BREAK_ALL,
    label: _.capitalize(WordBreak.BREAK_ALL),
    onMouseEnter: () => setActiveItemOnHover?.(WordBreak.BREAK_ALL),
    description: 'example3',
  },
  {
    key: WordBreak.KEEP_ALL,
    label: _.capitalize(WordBreak.KEEP_ALL),
    onMouseEnter: () => setActiveItemOnHover?.(WordBreak.KEEP_ALL),
    description: 'example4',
  },
]
export const WHITE_SPACE_OPTIONS = ({
  setActiveItemOnHover,
}: {
  setActiveItemOnHover?: (key: string) => void
}) => [
  {
    key: WhiteSpace.NORMAL,
    label: _.capitalize(WhiteSpace.NORMAL),
    onMouseEnter: () => setActiveItemOnHover?.(WhiteSpace.NORMAL),
    onMouseLeave: () => setActiveItemOnHover?.(WhiteSpace.NORMAL),
    description: 'example1',
  },
  {
    key: WhiteSpace.NOWRAP,
    label: _.capitalize(WhiteSpace.NOWRAP),
    onMouseEnter: () => setActiveItemOnHover?.(WhiteSpace.NOWRAP),
    description: 'example2',
  },
  {
    key: WhiteSpace.PRE,
    label: _.capitalize(WhiteSpace.PRE),
    onMouseEnter: () => setActiveItemOnHover?.(WhiteSpace.PRE),
    description: 'example3',
  },
  {
    key: WhiteSpace.PRE_LINE,
    label: _.capitalize(WhiteSpace.PRE_LINE),
    onMouseEnter: () => setActiveItemOnHover?.(WhiteSpace.PRE_LINE),
    description: 'example4',
  },
  {
    key: WhiteSpace.PRE_WRAP,
    label: _.capitalize(WhiteSpace.PRE_WRAP),
    onMouseEnter: () => setActiveItemOnHover?.(WhiteSpace.PRE_WRAP),
    description: 'example5',
  },
]
