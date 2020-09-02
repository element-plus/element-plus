interface TreeNode {
  expanded: boolean
  loading: boolean
  noLazyChildren: boolean
  indent: number
  level: number
}

interface RenderRowData {
  store: any
  _self: any
  column: any
  row: any
  $index: any
  treeNode?: TreeNode
}

export {
  TreeNode,
  RenderRowData,
}
