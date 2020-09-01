import { getPropByPath } from '@element-plus/utils/util'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import { h } from 'vue'

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
    renderHeader: function ({ store }) {
      return h(
        ElCheckbox,
        {
          disabled: store.states.data.value && store.states.data.value.length === 0,
          indeterminate: store.states.selection.value.length > 0 && !this.isAllSelected,
          nativeOnClick: this.toggleAllSelection,
          value: this.isAllSelected,
        },
      )
    },
    renderCell: function ({ row, column, store, $index }) {
      return h(
        ElCheckbox,
        {
          disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
          onInput: () => { store.commit('rowSelectedChanged', row) },
          nativeOnClick: event => event.stopPropagation(),
          value: store.isSelected(row),
        },
      )
    },
    sortable: false,
    resizable: false,
  },
  index: {
    renderHeader: function ({ column }) {
      return column.label || '#'
    },
    renderCell: function ({ $index, column }) {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }
      return h(
        'div',
        {},
        {
          default: () => i,
        },
      )
    },
    sortable: false,
  },
  expand: {
    renderHeader: function ({ column }) {
      return column.label || ''
    },
    renderCell: function ({ row, store }) {
      const classes = ['el-table__expand-icon']
      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push('el-table__expand-icon--expanded')
      }
      const callback = function (e) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      return h(
        'div',
        {
          class: classes,
          onClick: callback,
        },
        {
          default: () => h(
            'i',
            {
              class: 'el-icon el-icon-arrow-right',
            },
          ),
        },
      )
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column',
  },
}

export function defaultRenderCell({ row, column, $index }) {
  const property = column.property
  const value = property && getPropByPath(row, property, false).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value
}

export function treeCellPrefix({ row, treeNode, store }) {
  if (!treeNode) return null
  const ele = []
  const callback = function (e) {
    e.stopPropagation()
    store.loadOrToggle(row)
  }
  if (treeNode.indent) {
    ele.push(h(
      'span',
      {
        class: 'el-table__indent',
        style: { 'padding-left': treeNode.indent + 'px' },
      },
    ))
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    const expandClasses = ['el-table__expand-icon', treeNode.expanded ? 'el-table__expand-icon--expanded' : '']
    let iconClasses = ['el-icon-arrow-right']
    if (treeNode.loading) {
      iconClasses = ['el-icon-loading']
    }

    ele.push(h(
      'div',
      {
        class: expandClasses,
        onClick: callback,
      },
      {
        default: () => h(
          'i',
          {
            class: iconClasses,
          },
        ),
      },
    ))
  } else {
    ele.push(h(
      'span',
      {
        class: 'el-table__placeholder',
      },
    ))
  }
  return ele
}
