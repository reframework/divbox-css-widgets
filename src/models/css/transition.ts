import { TransitionProperty, TransitionTimingFunction } from '@src/models/css/enums'
import { IVariable } from '@src/models/css/spacing'

export type ITransition = {
  property: TransitionProperty
  duration: number // ms int
  timingFn: TransitionTimingFunction | IVariable
}

export const TransitionModel = (props?: ITransition): ITransition => {
  return {
    property: props?.property || TransitionProperty.ALL,
    duration: props?.duration || 300,
    timingFn: props?.timingFn || TransitionTimingFunction.EASE,
  }
}
