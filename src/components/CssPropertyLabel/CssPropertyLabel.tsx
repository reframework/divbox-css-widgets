import { Box, Button, Center, Divider, Kbd, Text } from '@chakra-ui/react'
import { Popover, TooltipProps } from 'antd'
import { capitalize } from 'lodash'
import { MouseEvent } from 'react'

export interface ICssPropertyLabelProps {
  property: string
  isActive: boolean
  onReset?: (() => void) | null
  align?: TooltipProps['align']
  placement?: TooltipProps['placement']
}

export const CssPropertyLabel = ({
  property,
  isActive,
  onReset,
  align,
  placement = 'bottomLeft',
}: ICssPropertyLabelProps) => {
  // when option/alt is pressed then reset value
  const onClick = (e: MouseEvent) => {
    if (e.altKey) {
      onReset?.()
    }
  }

  const label = (
    <Text
      role="label"
      textOverflow={'ellipsis'}
      overflow={'hidden'}
      whiteSpace={'nowrap'}
      alignItems={'center'}
      color={isActive ? 'blue.500' : 'gray.700'}
      bg={isActive ? 'blue.50' : 'transparent'}
      h="16px"
      lineHeight="12px"
      w="min-content"
      p="2px"
      borderRadius="sm"
      fontSize="xs"
      cursor="default"
      userSelect="none"
      onClick={onClick}
    >
      {capitalize(property)}
    </Text>
  )

  if (onReset) {
    return (
      <Popover
        trigger="click"
        arrow={false}
        placement={placement}
        align={align}
        content={<ResetContent property={property} onReset={onReset} />}
      >
        {label}
      </Popover>
    )
  }

  return label
}

const ResetContent = (props: { property: string; onReset: () => void }) => {
  const { property, onReset } = props

  return (
    <Box maxW="228px">
      <Button
        w="100%"
        size="sm"
        variant="ghost"
        colorScheme="gray"
        justifyContent="space-between"
        alignItems="center"
        px="2"
        onClick={onReset}
      >
        <Text fontWeight="500">Reset</Text>
        <Center gap="1" color="gray.500">
          <Kbd>option</Kbd> + <Kbd>click</Kbd>
        </Center>
      </Button>
      <Divider my="1" />
      <Text px="2" fontSize="xs" color="gray.500">
        Resetting will revert{' '}
        <Text as="span" {...textProps}>
          {property.toLowerCase()}
        </Text>{' '}
        to the initial value.
      </Text>
    </Box>
  )
}

const textProps = {
  alignItems: 'center',
  color: 'blue.500',
  bg: 'blue.50',
  px: '1px',
  borderRadius: 'sm',
  fontSize: 'inherit',
  cursor: 'default',
}
