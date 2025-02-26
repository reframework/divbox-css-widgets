import { Dropdown as AntdDropdown, MenuProps } from 'antd'
import { Button, Divider, Placement, Text } from '@chakra-ui/react'
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
  setActiveItemOnHover?: (key?: string) => void
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

  const keyRef = React.useRef<string | undefined>()
  const contentStyle: React.CSSProperties = {
    backgroundColor: 'var(--chakra-colors-white)',
    borderRadius: 'var(--chakra-radii-sm)',
    boxShadow: 'none',
  }
  useEffect(() => {
    if (defaultSelectedKey) {
      keyRef.current = defaultSelectedKey
      setValue(findSelectItem({ key: defaultSelectedKey, options }))
      setActiveItemOnHover?.(defaultSelectedKey)
      return
    }

    const defaultValue = (options as any)?.[0]?.children?.[0] || options?.[0]
    keyRef.current = defaultValue.key
    setValue(defaultValue)
    setActiveItemOnHover?.(defaultValue.key)
  }, [])

  const onSelect = ({ key }: any) => {
    keyRef.current = key
    setValue(key)
    const item = findSelectItem({ key, options })
    setValue(item)
    handleSelect?.(item)
    setActiveItemOnHover?.(key)
  }

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  }
  const dropdownRender = (menu) => {
    return (
      <div
        style={contentStyle}
        onMouseLeave={() => setActiveItemOnHover?.(keyRef.current)}
      >
        {React.cloneElement(menu, { style: menuStyle })} <Divider />
        <SelectDropdownBox>
          {
            options?.find((el) => el.key === activeItemKeyOnHover)?.[
              activeItemPropertyOnHover
            ]
          }
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
          ...menuProps,
        }}
      >
        <Button
          width={'100%'}
          height={'var(--spacing-26)'}
          paddingStart={1.5}
          paddingEnd={1.5}
          backgroundColor={'gray.200'}
          borderColor={'gray.300'}
          borderWidth={'1px'}
          display={'flex'}
          justifyContent={'space-between'}
          gap={1}
          colorScheme={'gray'}
          fontSize={'xs'}
        >
          <Text
            color={'gray.900'}
            fontWeight={'medium'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
            whiteSpace={'nowrap'}
          >
            {isCapitalizeButtonTitle ? _.capitalize(buttonTitle || '') : buttonTitle}
          </Text>
          <IoIosArrowDown color={'var(--chakra-colors-gray-900)'} />
        </Button>
      </Dropdown>
    </Label>
  )
}
