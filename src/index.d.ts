type PartialOmit<T, K extends keyof T> = Omit<T, K> & {
  [keys in K]?: T[keys]
}

type PartialPick<T, K extends keyof T> = Pick<T, K> & {
  [keys in K]?: T[keys]
}

type RequiredPick<T, K extends keyof T> = Partial<T> & Pick<T, K>
