import { InputNumberProps, Slider as AntdSlider } from 'antd'
import { Grid } from '@chakra-ui/react'
import { useState } from 'react'
import { PiLockKey, PiLockKeyOpen } from 'react-icons/pi'
import { InputNumber } from '@src/components/InputNumber'
import { IconButton } from '@src/components/IconButton'

interface Props {
  handleChange?: (val: number) => void
  handleColumnsInputChange?: (val: number) => void
  handleRowsInputChange?: (val: number) => void
}

export const Slider: React.FC<Props> = ({
  handleChange,
  handleRowsInputChange,
  handleColumnsInputChange,
}) => {
  const [inputValue, setInputValue] = useState(0)
  const [columnsInputValue, setColumnsInputValue] = useState(0)
  const [rowsInputValue, setRowsInputValue] = useState(0)
  const [isLocked, setIsLocked] = useState(true)
  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number)
    handleChange?.(newValue as number)
  }
  const onColumnsChange: InputNumberProps['onChange'] = (newValue) => {
    setColumnsInputValue(newValue as number)
    handleColumnsInputChange?.(newValue as number)
  }
  const onRowsChange: InputNumberProps['onChange'] = (newValue) => {
    setRowsInputValue(newValue as number)
    handleRowsInputChange?.(newValue as number)
  }
  const toggleKeyButton = () => {
    setIsLocked((prevState) => !prevState)
  }

  return (
    <Grid templateColumns={'1fr 1fr 24px'} gap={'5px'} alignItems={'center'}>
      {isLocked && (
        <>
          <AntdSlider
            tooltip={{ open: false }}
            onChange={onChange}
            value={inputValue}
          />
          <InputNumber onChange={onChange} value={inputValue} />
        </>
      )}
      {!isLocked && (
        <>
          <InputNumber
            label={'Columns'}
            min={0}
            onChange={onColumnsChange}
            value={columnsInputValue}
          />
          <InputNumber
            label={'Rows'}
            min={0}
            onChange={onRowsChange}
            value={rowsInputValue}
          />
        </>
      )}
      <IconButton
        icon={
          isLocked ? (
            <PiLockKey fontSize={'var(--chakra-fontSizes-xs)'} />
          ) : (
            <PiLockKeyOpen fontSize={'var(--chakra-fontSizes-xs)'} />
          )
        }
        onClick={toggleKeyButton}
        ariaLabel={'lock-button'}
      />
    </Grid>
  )
}
