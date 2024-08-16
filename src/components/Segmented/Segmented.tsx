import React, { ReactNode, useMemo } from 'react'
import { Dropdown } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import { Button, ButtonGroup, Center, Icon } from '@chakra-ui/react'

export type ISegmentedItem = {
  label: ReactNode
  key: string
}

type SegmentedMenuDefaultItem = {
  label: ReactNode
  buttonLabel: ReactNode
  key: string
  icon?: ReactNode
}

type SegmentedMenuGroupItem = {
  type: 'group'
  label: ReactNode
  key: string
  children: SegmentedMenuDefaultItem[]
  icon?: ReactNode
}

export type ISegmentedMenuItem =
  | SegmentedMenuDefaultItem
  | { type: 'divider' }
  | SegmentedMenuGroupItem

interface Props {
  value: string
  options: ISegmentedItem[]
  onChange?: (value: string) => void
  menuItems?: ISegmentedMenuItem[]
  defaultSelectedKey?: string
}

export const Segmented: React.FC<Props> = ({
  options,
  onChange,
  value,
  menuItems,
  defaultSelectedKey,
}) => {
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>(
    defaultSelectedKey,
  )

  const handleChange = (value: string) => {
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
                handleChange(item.key)
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
              handleChange(item.key)
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
  h: '26px',
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
