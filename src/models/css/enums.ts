export enum LengthUnit {
  PX = 'px',
  REM = 'rem',
  EM = 'em',
  PERCENT = '%',
  CH = 'ch',
  VW = 'vw',
  VH = 'vh',
  SVW = 'svw',
  SVH = 'svh',
  AUTO = 'auto',
}

export enum SizeLiteral {
  MAX_CONTENT = 'max-content',
  MIN_CONTENT = 'min-content',
  FIT_CONTENT = 'fit-content',
}

export enum AngleUnit {
  DEG = 'deg',
  RAD = 'rad',
  GRAD = 'grad',
  TURN = 'turn',
}

export enum Display {
  BLOCK = 'block',
  GRID = 'grid',
  FLEX = 'flex',
  INLINE = 'inline',
  INLINE_BLOCK = 'inline-block',
  INLINE_GRID = 'inline-grid',
  INLINE_FLEX = 'inline-flex',
  NONE = 'none',
}

export enum VerticalAlign {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  BASELINE = 'baseline',
}

export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
  ROW_REVERSE = 'row-reverse',
  COLUMN_REVERSE = 'column-reverse',
}

export enum FlexWrap {
  WRAP = 'wrap',
  NOWRAP = 'nowrap',
  REVERSE = 'wrap-reverse',
}

export enum StretchBaseline {
  STRETCH = 'stretch',
  BASELINE = 'baseline',
}

export enum StartCenterEnd {
  START = 'start',
  END = 'end',
  CENTER = 'center',
}

export enum BetweenAround {
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

export enum GridAutoFlow {
  ROW = 'row',
  COLUMN = 'column',
  ROW_DENSE = 'row dense',
  COLUMN_DENSE = 'column dense',
}

export enum Position {
  STATIC = 'static',
  RELATIVE = 'relative',
  ABSOLUTE = 'absolute',
  FIXED = 'fixed',
  STICKY = 'sticky',
}

export enum FontWeight {
  THIN = '100',
  EXTRA_LIGHT = '200',
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  BOLD = '700',
  EXTRA_BOLD = '800',
  BLACK = '900',
}

export enum FontFamily {
  ROBOTO = 'roboto',
  UBUNTU = 'ubuntu',
  INTER = 'inter',
}

export enum TextTransform {
  NONE = 'none',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  CAPITALIZE = 'capitalize',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export enum TextDecoration {
  NONE = 'none',
  UNDERLINE = 'underline',
  OVERLINE = 'overline',
  LINE_THROUGH = 'line-through',
}

export enum WhiteSpace {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_LINE = 'pre-line',
  PRE_WRAP = 'pre-wrap',
}

export enum WordBreak {
  NORMAL = 'normal',
  BREAK_WORD = 'break-word',
  KEEP_ALL = 'keep-all',
  BREAK_ALL = 'break-all',
}

export enum LetterSpacingLiteral {
  NORMAL = 'normal',
}

export enum Overflow {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
  SCROLL = 'scroll',
  AUTO = 'auto',
}

export enum BoxSizing {
  BORDER_BOX = 'border-box',
  CONTENT_BOX = 'content-box',
}

export enum Cursor {
  POINTER = 'pointer',
  DEFAULT = 'default',
  TEXT = 'text',
  WAIT = 'wait',
  CROSSHAIR = 'crosshair',
  MOVE = 'move',
  NOT_ALLOWED = 'not-allowed',
  HELP = 'help',
  GRAB = 'grab',
  GRABBING = 'grabbing',
}

export enum TransitionTimingFunction {
  EASE = 'ease',
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
  EASE_IN_OUT = 'ease-in-out',
  LINEAR = 'linear',
}

export enum ObjectFit {
  FILL = 'fill',
  CONTAIN = 'contain',
  COVER = 'cover',
  NONE = 'none',
  SCALE_DOWN = 'scale-down',
}

export enum BorderStyle {
  SOLID = 'solid',
  DASHED = 'dashed',
  DOTTED = 'dotted',
  DOUBLE = 'double',
  NONE = 'none',
  HIDDEN = 'hidden',
}

export enum Filter {
  BLUR = 'blur',
  BRIGHTNESS = 'brightness',
  CONTRAST = 'contrast',
  GRAYSCALE = 'grayscale',
  HUE_ROTATE = 'hue-rotate',
  INVERT = 'invert',
  SATURATE = 'saturate',
  SEPIA = 'sepia',
}

export enum PointerEvents {
  AUTO = 'auto',
  NONE = 'none',
}

export enum TransitionProperty {
  ALL = 'all',
  NONE = 'none',
  COLOR = 'color',
  // Todo
}

export enum TransformFunction {
  Rotate = 'rotate',
  Scale = 'scale',
  Translate = 'translate',
  Skew = 'skew',
}

export enum RadialGradientShape {
  ELLIPSE = 'ellipse',
  CIRCLE = 'circle',
}

export enum RadialGradientSize {
  CLOSEST_SIDE = 'closest-side',
  CLOSEST_CORNER = 'closest-corner',
  FARTHEST_SIDE = 'farthest-side',
  FARTHEST_CORNER = 'farthest-corner',
}

export enum BackgroundSize {
  COVER = 'cover',
  CONTAIN = 'contain',
}

export enum BackgroundRepeat {
  NO_REPEAT = 'no-repeat',
  REPEAT = 'repeat',
  REPEAT_X = 'repeat-x',
  REPEAT_Y = 'repeat-y',
}
