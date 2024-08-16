import { Dropdown as AntdDropdown, MenuProps } from 'antd'
import { Button, Placement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ItemType } from 'antd/es/menu/interface'
import { findSelectItem, toMakeUpperFirstChar } from '@src/helpers'
import { IoIosArrowDown } from 'react-icons/io'
import styled from '@emotion/styled'

interface Props {
  options: ItemType[]
  menuProps?: Omit<MenuProps, 'defaultSelectedKeys'>
  defaultSelectedKey?: string
  handleSelect?: (value: ItemType) => void
  placement?: Placement
  optionLabelProp?: string
}

const Dropdown = styled(AntdDropdown)`
  & .ant-dropdown-menu-title-content {
    padding: var(--chakra-space-1) var(--chakra-space-3);
  }
`
export const Select: React.FC<Props> = ({
  options,
  placement = 'bottom',
  menuProps,
  defaultSelectedKey,
  handleSelect,
  optionLabelProp,
}) => {
  const [value, setValue] = useState<ItemType | undefined>()
  useEffect(() => {
    if (defaultSelectedKey) {
      setValue(findSelectItem({ key: defaultSelectedKey, options }))
      return
    }

    const defaultValue = (options as any)?.[0]?.children?.[0] || options?.[0]
    setValue(defaultValue)
  }, [defaultSelectedKey, findSelectItem, options, setValue])

  const onSelect = ({ key }: any) => {
    setValue(key)
    const item = findSelectItem({ key, options })
    setValue(item)
    handleSelect?.(item)
  }
  return (
    <Dropdown
      trigger={['click']}
      placement={placement}
      menu={{
        items: options,
        defaultSelectedKeys: [defaultSelectedKey],
        selectedKeys: [value?.key],
        selectable: true,
        onSelect,
        ...menuProps,
      }}
    >
      <Button
        width={'100%'}
        height={'var(--spacing-26)'}
        backgroundColor={'gray.200'}
        borderColor={'gray.300'}
        borderWidth={'1px'}
        fontSize={'xs'}
        fontWeight={'medium'}
        color={'gray.900'}
        display={'flex'}
        justifyContent={'space-between'}
        gap={1}
        colorScheme={'gray'}
      >
        {toMakeUpperFirstChar(value?.[optionLabelProp || 'label'] || '')}
        <IoIosArrowDown color={'var(--chakra-colors-gray-900)'} />
      </Button>
    </Dropdown>
  )
}
