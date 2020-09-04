interface Sort {
  prop: string
  order: string
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
}

interface RenderRowData {
  store: any
  _self: any
  column: any
  row: any
  $index: any
  treeNode?: TreeNode
}

interface TableFooter {
  fixed: string
  store: unknown
  summaryMethod: () => void
  sumText: string
  border: boolean
  defaultSort: Sort
}

export {
  TreeNode,
  RenderRowData,
  TableFooter,
}
