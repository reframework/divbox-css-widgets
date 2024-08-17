import React, { ReactNode, useMemo } from 'react'
import { Dropdown } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import { Button, ButtonGroup, Center, Icon } from '@chakra-ui/react'

export type ISegmentedItem<T extends string = string> = {
  label: ReactNode
  key: T
}

type SegmentedMenuDefaultItem<T extends string = string> = {
  label: ReactNode
  buttonLabel: ReactNode
  key: T
  icon?: ReactNode
}

type SegmentedMenuGroupItem<T extends string = string> = {
  type: 'group'
  label: ReactNode
  key: string
  children: SegmentedMenuDefaultItem<T>[]
  icon?: ReactNode
}

export type ISegmentedMenuItem<T extends string = string> =
  | SegmentedMenuDefaultItem<T>
  | { type: 'divider' }
  | SegmentedMenuGroupItem<T>

interface Props<T extends string> {
  value: T
  options: ISegmentedItem<T>[]
  onChange?: (value: T | null) => void
  menuItems?: ISegmentedMenuItem<T>[]
  defaultSelectedKey?: string
}

export const Segmented = <T extends string>({
  options,
  onChange,
  value,
  menuItems,
  defaultSelectedKey,
}: Props<T>) => {
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>(
    defaultSelectedKey,
  )

  const handleChange = (value: T) => {
    onChange?.(value)
  }

  const onSelect = ({ key }: any) => {
    setSelectedKey(key)
    onChange?.(key)
  }

  const currentOptions = useMemo(() => {
    return mapSegmentedOptions({
      options,
      menuItems,
      selectedKey: selectedKey || defaultSelectedKey,
    })
  }, [options, menuItems, value, selectedKey, defaultSelectedKey])

  return (
    <ButtonGroup
      isAttached
      width="100%"
      size="xs"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="md"
    >
      {currentOptions.map((item, idx, { length }) => {
        const withMenu = idx === length - 1 && menuItems?.length

        if (withMenu) {
          return (
            <Button
              {...buttonProps(value === item.key)}
              minW="50px"
              justifyContent="space-between"
              p="1"
              pr="0"
              onClick={() => {
                handleChange(item.key as T)
              }}
            >
              <Center flexGrow="1">{item.label}</Center>
              <Dropdown
                trigger={['click']}
                placement={'bottomRight'}
                menu={{
                  items: menuItems,
                  selectable: true,
                  selectedKeys: [value],
                  onSelect,
                  onClick: ({ domEvent }) => {
                    domEvent.stopPropagation()
                  },
                }}
              >
                <Center role="button" aria-label="More options" minW="16px" h="26px">
                  <Icon
                    as={IoIosArrowDown}
                    color="gray-700"
                    size="xs"
                    aria-label="button"
                  />
                </Center>
              </Dropdown>
            </Button>
          )
        }

        return (
          <Button
            {...buttonProps(value === item.key)}
            onClick={() => {
              handleChange(item.key as T)
            }}
          >
            {item.label}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}

const buttonProps = (active: boolean) => ({
  h: 6,
  flexGrow: '1',
  variant: 'ghost',
  bg: active ? 'gray.200' : 'gray.50',
  fontWeight: active ? '500' : '400',
})

const mapSegmentedOptions = (props: {
  options: ISegmentedItem[]
  menuItems?: ISegmentedMenuItem[]
  selectedKey?: string
}): ISegmentedItem[] => {
  const { options, menuItems, selectedKey } = props

  if (!menuItems?.length) {
    return options
  }

  const items = menuItems.flatMap((item) => {
    if (isDividerItem(item)) {
      return []
    }

    if (isGroupItem(item)) {
      return item.children.map(toSegmentedItem) || []
    }

    return [toSegmentedItem(item)]
  })

  const selectedItem = items.find((item) => item?.key === selectedKey)
  if (!selectedItem) {
    return options
  }

  return selectedItem ? [...options, selectedItem] : options
}

const isGroupItem = (item: ISegmentedMenuItem): item is SegmentedMenuGroupItem => {
  return 'type' in item && item.type === 'group'
}

const isDividerItem = (item: ISegmentedMenuItem): item is { type: 'divider' } => {
  return 'type' in item && item.type === 'divider'
}

const toSegmentedItem = (item: SegmentedMenuDefaultItem): ISegmentedItem | null => {
  return {
    key: item.key,
    label: item.buttonLabel,
  }
}
