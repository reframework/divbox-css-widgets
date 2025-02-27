import { MainItemType } from '@src/types/props'

export const makeSelectOptions = <T>(
  values: T[],
  valueField: string,
  labelField: string,
  optionLabelProp?: string,
) =>
  values.map((item) => {
    if (Array.isArray(item)) {
      return {
        [valueField]: item[0],
        [labelField]: item[1],
        [optionLabelProp]: item,
      }
    }
    return { [valueField]: item, [labelField]: item, [optionLabelProp]: item }
  })

// export const transformString = {
//   state: '',
//   get() {
//     return this.state
//   },
//   set(initValue: string) {
//     this.state = initValue
//     return this
//   },
//   toUpperFirstChar() {
//     const res =
//       this.state.charAt(0).toUpperCase() + this.state.slice(1).toLowerCase()
//     this.set(res)
//     return this
//   },
//   changeSeparator({
//     initSeparator,
//     useSeparator,
//   }: {
//     initSeparator?: string
//     useSeparator?: string
//   }) {
//     const res = this.state.split(initSeparator).join(useSeparator)
//     this.set(res)
//     return this
//   },
// }

export const findSelectItem = ({
  key,
  options,
}: {
  key: string
  options?: MainItemType[]
}) => {
  let result
  ;(options || [])?.forEach((item: any) => {
    if (item?.children?.length) {
      const value = item.children.find((val) => val.key === key)
      if (value) {
        result = value
      }
    } else {
      if (item.key === key) {
        result = item
      }
    }
  })
  return result
}
