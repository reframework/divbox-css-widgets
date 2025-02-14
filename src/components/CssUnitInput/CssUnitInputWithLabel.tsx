import { Box, Flex, Text } from '@chakra-ui/react'
import { TextProps } from '@chakra-ui/layout/dist/text'
import { BoxProps } from '@chakra-ui/layout/dist/box'
import { ICssUnitInputProps } from '@src/components/CssUnitInput/CssUnitInput'
import { CssUnit } from '@src/components/CssUnitInput/index'

const mapLabelPosition = {
  left: 'row-reverse',
  top: 'column-reverse',
  down: 'column',
}
export interface ICssUnitInputWithLabelProps extends ICssUnitInputProps {
  label?: string
  labelPosition?: 'left' | 'top' | 'down'
  labelStyles?: TextProps
  labelWrapperStyles?: BoxProps
}
export const CssUnitInputWithLabel: React.FC<ICssUnitInputWithLabelProps> = ({
  label,
  labelPosition = 'down',
  labelStyles,
  labelWrapperStyles,
  ...inputProps
}) => {
  return (
    <Flex direction={mapLabelPosition[labelPosition]} alignItems={'center'}>
      <CssUnit.Input {...inputProps} />
      {label && (
        <Box flexShrink={0} {...labelWrapperStyles}>
          <Text as={'span' as any} fontSize={'xs'} width={'auto'} {...labelStyles}>
            {label}
          </Text>
        </Box>
      )}
    </Flex>
  )
}
