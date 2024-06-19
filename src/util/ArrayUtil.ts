const move = <T>(
  arr: ReadonlyArray<T>,
  fromIndex: number,
  toIndex: number
): ReadonlyArray<T> => {
  const array = arr.slice()
  toIndex = toIndex < 0 ? arr.length : toIndex
  const [elementToMove] = array.splice(fromIndex, 1)
  array.splice(toIndex, 0, elementToMove)
  return array
}

export const ArrayUtil = {
  move
}
