import type { Option, SelectedNodeItem } from './types'

const findNode = (
  _options: Option[],
  value: string | number,
  fallbackLevel: number
): { node: Option; level: number } | null => {
  const node = _options.find((item) => item.value === value)
  if (!node) return null
  const level = typeof node.level === 'number' ? node.level : fallbackLevel
  return { node, level }
}

export const getSelectedNodeItems = (
  options: Option[],
  selectedPaths: (string | number)[][]
): SelectedNodeItem[] => {
  const flatMap = new Map<string | number, SelectedNodeItem>()
  for (const path of selectedPaths) {
    let _options = options
    for (const [i, value] of path.entries()) {
      const result = findNode(_options, value, i + 1)
      if (!result) break
      const { node, level } = result
      if (node.value && !flatMap.has(node.value)) {
        flatMap.set(node.value, {
          value: node.value,
          label: node.label ?? '',
          level,
        })
      }
      if (Array.isArray(node.children)) {
        _options = node.children as Option[]
      } else {
        _options = []
      }
    }
  }
  return Array.from(flatMap.values())
}
