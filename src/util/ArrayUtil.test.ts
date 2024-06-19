import { ArrayUtil } from './ArrayUtil'

describe('ArrayUtil.move', () => {
  test('move to latter', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 1, 2)).toStrictEqual([1, 3, 2, 4, 5])
  })

  test('move to former', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 3, 1)).toStrictEqual([1, 4, 2, 3, 5])
  })

  test('move to top', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 2, 0)).toStrictEqual([3, 1, 2, 4, 5])
  })

  test('move to bottom', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 3, -1)).toStrictEqual([1, 2, 3, 5, 4])
  })

  test('move to bottom 2', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 3, 5)).toStrictEqual([1, 2, 3, 5, 4])
  })

  test('do not move', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(ArrayUtil.move(arr, 3, 3)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
