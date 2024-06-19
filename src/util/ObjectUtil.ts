const omitProperty = <T extends object, KEY extends keyof T>(
  obj: T,
  key: KEY
): Omit<T, KEY> => {
  const { [key]: _, ...omitted } = obj
  return omitted
}

const purify = <T extends object>(obj: T, template: T): T => {
  const ret: Record<string, unknown> = {}
  Object.keys(template).forEach((key) => {
    ret[key] = obj[key as keyof T]
  })
  return ret as T
}

const isRecord = <T = unknown>(o: unknown): o is Record<string, T> =>
  o !== null && typeof o === 'object'

const isStrictEqual = (o1: unknown, o2: unknown): boolean => {
  if (o1 === o2) {
    return true
  } else if (typeof o1 === typeof o2) {
    if ((o1 && !o2) || (!o1 && o2)) {
      return false
    } else if (isRecord(o1) && isRecord(o2)) {
      const keys1 = Object.keys(o1).sort()
      const keys2 = Object.keys(o2).sort()
      if (keys1.length === keys2.length) {
        for (let i = 0; i < keys1.length; i++) {
          const key = keys1[i]
          if (!isStrictEqual(o1[key], o2[key])) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

const copyContent = (src: unknown, dst: unknown) => {
  if (isRecord(src) && isRecord(dst)) {
    for (const key in src) {
      dst[key] = src[key]
    }
  }
}

const convert = <T extends object>(
  obj: T,
  callback: <KEY extends keyof T>(key: KEY, orig: T[KEY]) => T[KEY]
): T => {
  if (isRecord(obj)) {
    const ret: Record<string, unknown> = {}
    Object.keys(obj).forEach((key) => {
      ret[key] = callback(key as keyof T, obj[key] as T[keyof T])
    })
    return ret as T
  } else {
    throw new Error(`cannot convert ${obj}:${typeof obj}`)
  }
}

const groupBy = <T, K extends keyof T>(
  array: T[],
  key: K
): { [key: string]: T[] } =>
  array.reduce((result: { [key: string]: T[] }, currentValue: T) => {
    const groupKey = String(currentValue[key])
    ;(result[groupKey] = result[groupKey] || []).push(currentValue)
    return result
  }, {})

export const ObjectUtil = {
  omitProperty,
  purify,
  isRecord,
  isStrictEqual,
  copyContent,
  convert,
  groupBy
}
