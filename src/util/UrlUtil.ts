const searchQuery = (
  params: Record<string, string | number | undefined>
): string => {
  const keys = Object.keys(params).filter((key) => typeof key !== 'undefined')
  if (keys.length === 0) {
    return ''
  } else {
    const search = new URLSearchParams()
    keys.forEach((key) => {
      search.set(key, params[key] || params[key] === 0 ? `${params[key]}` : '')
    })
    return '?' + search.toString()
  }
}

const pathAndQuery = (
  path: string,
  params: Record<string, string | number | undefined>
): string => {
  return `${path}${searchQuery(params)}`
}

export const UrlUtil = {
  searchQuery,
  pathAndQuery
}
