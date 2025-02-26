import { useState } from 'react'
import { Box, Button, ButtonProps } from '@chakra-ui/react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
  isExpanded?: boolean
  buttonTitle?: string
  buttonProps?: ButtonProps
}
export const MoreItemsButton: React.FC<Props> = ({
  isExpanded = false,
  buttonTitle,
  buttonProps,
  children,
}) => {
  const [expanded, setExpanded] = useState(isExpanded)
  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }
  return (
    <Box mt={1} mb={1}>
      <Button
        colorScheme={'gray'}
        variant={'outline'}
        display={'flex'}
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
        color={'gray.900'}
        fontSize={'xs'}
        onClick={toggleExpanded}
        width={'100%'}
        height={'var(--spacing-26)'}
        {...buttonProps}
      >
        {buttonTitle}
        {expanded ? (
          <MdKeyboardArrowUp fontSize={'lg'} />
        ) : (
          <MdKeyboardArrowDown fontSize={'lg'} />
        )}
      </Button>
      <Box mt={2}>{expanded && children}</Box>
    </Box>
  )
}
