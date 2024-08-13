import { IAngle } from '@src/models/css/angle'
import { TransformFunction } from '@src/models/css/enums'
import { ILength } from '@src/models/css/length'
import { IVariable } from '@src/models/css/spacing'

export type ITransformTranslate = {
  p: TransformFunction.Translate
  x: ILength | IVariable | null
  y: ILength | IVariable | null
  z: ILength | IVariable | null
}

export type ITransformScale = {
  p: TransformFunction.Scale
  x: number | IVariable | null
  y: number | IVariable | null
  z: number | IVariable | null
}

export type ITransformRotate = {
  p: TransformFunction.Rotate
  x: IAngle | IVariable | null
  y: IAngle | IVariable | null
  z: IAngle | IVariable | null
}

export type ITransformSkew = {
  p: TransformFunction.Skew
  x: IAngle | IVariable | null
  y: IAngle | IVariable | null
  z: IAngle | IVariable | null
}

export type ITransformation =
  | ITransformTranslate
  | ITransformScale
  | ITransformRotate
  | ITransformSkew

export const TransformationModel = (props: ITransformation): ITransformation => {
  return props
}

export type ITransformOrigin = {
  x: ILength | IVariable | null
  y: ILength | IVariable | null
}

export type ITransform = {
  t: ITransformation[]
  o: ITransformOrigin
  bv: true | false | null // backface-visibility
}

export const TransformModel = (props?: Partial<ITransform>): ITransform => {
  return {
    t: props?.t || [],
    o: props?.o || { x: null, y: null },
    bv: props?.bv || null,
  }
}
