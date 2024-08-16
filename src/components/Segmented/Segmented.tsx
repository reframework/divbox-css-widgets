import React, { useEffect, useState } from 'react'
import { CheckboxOptionType, Dropdown, MenuProps } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import { RadioChangeEvent } from 'antd/es/radio/interface'
import { RadioButton, RadioGroup } from '@src/components/Segmented/Segmented.styles'
import { findSelectItem, toMakeUpperFirstChar } from '@src/helpers'
import { Box, IconButton } from '@chakra-ui/react'
import { ItemType } from 'antd/es/menu/interface'

interface Props {
  defaultValue?: string | number
  addOptsDefaultValue?: string | number
  mainDefaultOptions: (string | number)[] | Array<CheckboxOptionType>
  additionalOptions?: ItemType[]
  additionalOptionLabelProp?: string
  onChange?: (value: string | number) => void
  menuProps?: MenuProps
}

export const Segmented: React.FC<Props> = ({
  defaultValue,
  addOptsDefaultValue,
  mainDefaultOptions,
  additionalOptions,
  additionalOptionLabelProp = 'label',
  onChange,
  menuProps,
}) => {
  const itemsCount = mainDefaultOptions?.length + (additionalOptions?.length ? 1 : 0)
  const isAdditionalOptions = Boolean(additionalOptions?.length)
  const [value, setValue] = useState<string | number>(
    defaultValue || mainDefaultOptions[0]?.value || mainDefaultOptions[0],
  )
  const [isChangedAddOptSelect, setIsChangedAddOptSelect] = useState(false)

  const [addOptsValue, setAddOptsValue] = useState<ItemType | undefined>()

  useEffect(() => {
    if (addOptsDefaultValue) {
      setAddOptsValue(
        findSelectItem({
          key: String(addOptsDefaultValue),
          options: additionalOptions,
        }),
      )
      return
    }
    if (!defaultValue) {
      const res =
        (additionalOptions as any)?.[0].children?.[0] || additionalOptions?.[0]
      setAddOptsValue(res)
      return
    }
    const item = findSelectItem({
      key: String(defaultValue),
      options: additionalOptions,
    })
    if (item) {
      setIsChangedAddOptSelect(true)
      setAddOptsValue(item)
      return
    }
    setAddOptsValue(
      (additionalOptions as any)?.[0].children?.[0] || additionalOptions?.[0],
    )
  }, [])

  const handleChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value)
    setIsChangedAddOptSelect(false)
    onChange?.(value)
  }
  const onSelect = ({ key }: any) => {
    setValue(key)
    const item = findSelectItem({
      key: String(key),
      options: additionalOptions,
    })
    setAddOptsValue(item)
    setIsChangedAddOptSelect(true)
    onChange?.(key)
  }
  return (
    <RadioGroup
      buttonStyle={'solid'}
      defaultValue={value}
      onChange={handleChange}
      value={value}
      itemsCount={itemsCount}
      isAdditionalOptions={isAdditionalOptions}
    >
      {mainDefaultOptions.map((item) => {
        const value = (item as CheckboxOptionType)?.value || item
        const label =
          (item as CheckboxOptionType)?.label || toMakeUpperFirstChar(String(item))
        return (
          <RadioButton key={value} value={value}>
            <Box
              display={'flex'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {label}
            </Box>
          </RadioButton>
        )
      })}
      {isAdditionalOptions && (
        <>
          <RadioButton
            key={addOptsValue?.key}
            value={addOptsValue?.key}
            bg={'transparent'}
          >
            <Box
              display={'flex'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {addOptsValue?.[additionalOptionLabelProp]}
            </Box>
          </RadioButton>
          <Dropdown
            trigger={['click']}
            placement={'bottomRight'}
            menu={{
              items: additionalOptions,
              selectable: true,
              selectedKeys: [addOptsValue?.key],
              defaultSelectedKeys: [addOptsValue?.key],
              onSelect,
              ...menuProps,
            }}
          >
            <IconButton
              aria-label={'dropdown button'}
              style={{
                ...(isChangedAddOptSelect && {
                  background: 'var(--chakra-colors-gray-200)',
                }),
              }}
              bg={'transparent'}
              borderRadius={0}
              size={'s'}
              width={'100%'}
              icon={<IoIosArrowDown color={'var(--chakra-colors-gray-900)'} />}
            />
          </Dropdown>
        </>
      )}
    </RadioGroup>
  )
}
