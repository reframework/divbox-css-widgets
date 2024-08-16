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

export const toMakeUpperFirstChar = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)
