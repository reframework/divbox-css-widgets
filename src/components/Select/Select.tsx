import { Dropdown as AntdDropdown, MenuProps } from 'antd'
import { Button, Divider, Placement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { findSelectItem } from '@src/helpers'
import { IoIosArrowDown } from 'react-icons/io'
import styled from '@emotion/styled'
import _ from 'lodash'
import { MainItemType } from '@src/types/props'
import { Label, LabelProps } from '@src/components/Label'
import { SelectDropdownBox } from '@src/components/Select/SelectDropdownBox'

interface Props {
  options: MainItemType[]
  menuProps?: Omit<MenuProps, 'defaultSelectedKeys'>
  defaultSelectedKey?: string
  handleSelect?: (value?: MainItemType) => void
  placement?: Placement
  optionLabelProp?: string
  activeItemKeyOnHover?: string
  activeItemPropertyOnHover?: string
  setActiveItemOnHover?: (key?: React.Key) => void
  labelProps?: LabelProps
  isCapitalizeButtonTitle?: boolean
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
  activeItemKeyOnHover,
  activeItemPropertyOnHover,
  setActiveItemOnHover,
  labelProps,
  isCapitalizeButtonTitle = true,
}) => {
  const [value, setValue] = useState<MainItemType | undefined>()

  const contentStyle: React.CSSProperties = {
    backgroundColor: 'var(--chakra-colors-white)',
    borderRadius: 'var(--chakra-radii-sm)',
    boxShadow: 'none',
  }
  useEffect(() => {
    if (defaultSelectedKey) {
      setValue(findSelectItem({ key: defaultSelectedKey, options }))
      setActiveItemOnHover?.(defaultSelectedKey)
      return
    }

    const defaultValue = (options as any)?.[0]?.children?.[0] || options?.[0]
    setValue(defaultValue)
    setActiveItemOnHover?.(defaultValue.key)
  }, [])

  useEffect(() => {
    return () => {
      setActiveItemOnHover?.(value?.key)
    }
  }, [value])
  const onSelect = ({ key }: any) => {
    setValue(key)
    const item = findSelectItem({ key, options })
    setValue(item)
    setActiveItemOnHover?.(key)
    handleSelect?.(item)
  }

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  }

  const dropdownRender = (menu) => {
    return (
      <div
        style={contentStyle}
        onMouseLeave={() => setActiveItemOnHover?.(value?.key)}
      >
        {React.cloneElement(menu, { style: menuStyle })} <Divider />
        <SelectDropdownBox>
          {activeItemKeyOnHover &&
            options?.find((el) => el.key === activeItemKeyOnHover)?.[
              activeItemPropertyOnHover
            ]}
        </SelectDropdownBox>
      </div>
    )
  }
  const buttonTitle = value?.[optionLabelProp || 'label']
  return (
    <Label {...labelProps}>
      <Dropdown
        trigger={['click']}
        placement={placement}
        dropdownRender={activeItemKeyOnHover ? dropdownRender : undefined}
        menu={{
          items: options,
          defaultSelectedKeys: [defaultSelectedKey],
          selectedKeys: [value?.key],
          selectable: true,
          onSelect,
          Item: { onMouseEnter: () => console.log('koko') },
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
          textOverflow={'ellipsis'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
        >
          {isCapitalizeButtonTitle ? _.capitalize(buttonTitle || '') : buttonTitle}
          <IoIosArrowDown color={'var(--chakra-colors-gray-900)'} />
        </Button>
      </Dropdown>
    </Label>
  )
}
