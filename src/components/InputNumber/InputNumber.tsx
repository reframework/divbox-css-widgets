import {
  InputNumber as AntdInputNumber,
  InputNumberProps as AntdInputNumberProps,
  Select,
} from 'antd'
import { Box, Flex, Text } from '@chakra-ui/react'
import { CSS_UNITS } from '@src/constants/common'
import { makeSelectOptions } from '@src/helpers'
import styled from '@emotion/styled'
import { TextProps } from '@chakra-ui/layout/dist/text'
import { useState } from 'react'
import { BoxProps } from '@chakra-ui/layout/dist/box'

const Input = styled(AntdInputNumber)`
  & .ant-input-number-input {
    font-size: var(--chakra-fontSizes-xs);
    padding: 4px;
  }
`
const mapLabelPosition = {
  left: 'row-reverse',
  top: 'column-reverse',
  down: 'column',
}
export interface InputNumberProps extends AntdInputNumberProps {
  label?: string
  labelPosition?: 'left' | 'top' | 'down'
  labelStyles?: TextProps
  labelWrapperStyles?: BoxProps
}
export const InputNumber: React.FC<InputNumberProps> = ({
  label,
  labelPosition = 'down',
  value,
  onChange,
  labelStyles,
  labelWrapperStyles,
  ...inputProps
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const onFocus = () => {
    setIsActive(true)
  }
  const onBlur = () => {
    setIsActive(false)
  }

  const selectAfter = (
    <Select
      defaultValue={CSS_UNITS.px}
      options={makeSelectOptions('value', 'label', Object.values(CSS_UNITS))}
      suffixIcon={null}
      popupMatchSelectWidth
      dropdownStyle={{ width: '60px', padding: '4px' }}
      placement={'bottomRight'}
    />
  )

  return (
    <Flex direction={mapLabelPosition[labelPosition]} alignItems={'center'}>
      <Input
        min={0}
        controls={false}
        value={value}
        onChange={onChange}
        addonAfter={selectAfter}
        onFocus={onFocus}
        onBlur={onBlur}
        {...inputProps}
      />
      {label && (
        <Box flexShrink={0} {...labelWrapperStyles}>
          <Text
            as={'span' as any}
            fontSize={'xs'}
            color={isActive ? 'blue.500' : 'gray.700'}
            bg={isActive ? 'blue.50' : 'transparent'}
            width={'auto'}
            {...labelStyles}
          >
            {label}
          </Text>
        </Box>
      )}
    </Flex>
  )
}
