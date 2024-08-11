export const toMakeUpperFirstChar = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const makeSelectOptions = <T>(
  valueField: string,
  labelField: string,
  values: T[],
) => values.map((item) => ({ [valueField]: item, [labelField]: item }))
