import { useCallback, useState } from 'react'

export interface HandleActiveStateProps {
  defaultValue?: boolean
}
export const HandleActiveState = ({ defaultValue }: HandleActiveStateProps) => {
  const [isActive, setIsActive] = useState<boolean>(defaultValue || false)
  const toggleActive = useCallback(
    (value?: boolean) => {
      if (value) {
        setIsActive(value)
      } else {
        setIsActive((prev) => !prev)
      }
    },
    [setIsActive],
  )

  return {
    isActive,
    toggleActive,
  }
}
