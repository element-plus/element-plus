import { escapeStringRegexp } from '@element-plus/utils'

export const filterOption = (query: string, label: string, created: boolean): boolean => {
  if (created) return true
  const regexp = new RegExp(escapeStringRegexp(query), 'i')
  return regexp.test(String(label))
}
