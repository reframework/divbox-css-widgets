export const makeSelectOptions = <T>(
  valueField: string,
  labelField: string,
  values: T[],
) =>
  values.map((item) => {
    if (Array.isArray(item)) {
      return { [valueField]: item[0], [labelField]: item[1] }
    }
    return { [valueField]: item, [labelField]: item }
  })

export const toMakeUpperFirstChar = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)
