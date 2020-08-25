import { getPropByPath } from '@element-plus/utils/util'

export const cellStarts = {
  default: {
    order: '',
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'el-table-column--selection',
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
}

// 这些选项不应该被覆盖
export const cellForced = {
  selection: {
    renderHeader: function (h, { store }) {
      // *************************
      return
    },
    renderCell: function (h, { row, column, store, $index }) {
      // *************************
      return
    },
    sortable: false,
    resizable: false,
  },
  index: {
    renderHeader: function (h, { column }) {
      return column.label || '#'
    },
    renderCell: function (h, { $index, column }) {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }

      // *************************
      return
    },
    sortable: false,
  },
  expand: {
    renderHeader: function (h, { column }) {
      return column.label || ''
    },
    renderCell: function (h, { row, store }) {
      const classes = ['el-table__expand-icon']
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('el-table__expand-icon--expanded')
      }
      const callback = function (e) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      // *************************
      return
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column',
  },
}

export function defaultRenderCell(h, { row, column, $index }) {
  const property = column.property
  const value = property && getPropByPath(row, property, false).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value
}

export function treeCellPrefix(h, { row, treeNode, store }) {
  if (!treeNode) return null
  const ele = []
  const callback = function (e) {
    e.stopPropagation()
    store.loadOrToggle(row)
  }
  if (treeNode.indent) {
    // *************************
    ele.push()
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    const expandClasses = ['el-table__expand-icon', treeNode.expanded ? 'el-table__expand-icon--expanded' : '']
    let iconClasses = ['el-icon-arrow-right']
    if (treeNode.loading) {
      iconClasses = ['el-icon-loading']
    }
    // *************************
    ele.push()
  } else {
    // *************************
    ele.push()
  }
  return ele
}
