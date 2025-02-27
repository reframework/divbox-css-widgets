import { IHexColor, IRgbColor } from '@src/models/css/color'
import { useEffect, useState } from 'react'
import { useColorPicker } from 'react-best-gradient-color-picker'

interface Props {
  initState: IHexColor | IRgbColor | string
  changeColor: (val: IHexColor | IRgbColor | string) => void
}
interface ReturnType {
  color: string
  setColor: (value: ((prevState: string) => string) | string) => void
}

const isHexColorType = (val: IHexColor | IRgbColor | string) => {
  return typeof val !== 'string' && 'h' in val
}

const isIRgbColorType = (val: IHexColor | IRgbColor | string) => {
  return typeof val !== 'string' && 'r' in val
}
export const useSetColorPikerState = ({
  initState,
  changeColor,
}: Props): ReturnType => {
  const [color, setColor] = useState<string>('000000')
  const { rgbaArr } = useColorPicker(color, setColor)
  useEffect(() => {
    if (isHexColorType(initState)) {
      setColor((initState as IHexColor).h)
      return
    }
    if (isIRgbColorType(initState)) {
      setColor(
        `rgba(${(initState as IRgbColor).r},${(initState as IRgbColor).g},${(initState as IRgbColor).b},${(initState as IRgbColor).a})`,
      )
      return
    }
    setColor(initState as string)
  }, [])
  useEffect(() => {
    if (!rgbaArr.length) return
    changeColor({ r: rgbaArr[0], g: rgbaArr[1], b: rgbaArr[2], a: rgbaArr[3] })
  }, [color])
  return {
    color,
    setColor,
  }
}
