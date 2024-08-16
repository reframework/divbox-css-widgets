import { useCallback, useState } from 'react'

export interface HandleActiveStateProps {
  defaultValue?: boolean
}
export const HandleActiveState = ({ defaultValue }: HandleActiveStateProps) => {
  const [isActive, setIsActive] = useState<boolean>(defaultValue || false)
  const handleIsActive = useCallback(
    (value: boolean) => {
      setIsActive(value)
    },
    [setIsActive],
  )

  const toggleActive = useCallback(() => {
    setIsActive((prev) => !prev)
  }, [setIsActive])

  return {
    isActive,
    handleIsActive,
    toggleActive,
  }
}
