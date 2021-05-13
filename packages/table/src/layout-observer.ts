import {
  onBeforeMount,
  onUnmounted,
  onMounted,
  onUpdated,
  computed,
  getCurrentInstance,
} from 'vue'
import { TableHeader } from './table-header/index'
import type TableLayout from './table-layout'
import { Table } from './table/defaults'

function useLayoutObserver<T>(root: Table<T>) {
  const instance = getCurrentInstance() as TableHeader
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance)
  })
  onMounted(() => {
    onColumnsChange(tableLayout.value)
    onScrollableChange(tableLayout.value)
  })
  onUpdated(() => {
    onColumnsChange(tableLayout.value)
    onScrollableChange(tableLayout.value)
  })
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance)
  })
  const tableLayout = computed(() => {
    const layout = root.layout as TableLayout<T>
    if (!layout) {
      throw new Error('Can not find table layout.')
    }
    return layout
  })
  const onColumnsChange = (layout: TableLayout<T>) => {
    const cols = root.vnode.el?.querySelectorAll('colgroup > col') || []
    if (!cols.length) return
    const flattenColumns = layout.getFlattenColumns()
    const columnsMap = {}
    flattenColumns.forEach(column => {
      columnsMap[column.id] = column
    })
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i]
      const name = col.getAttribute('name')
      const column = columnsMap[name]
      if (column) {
        col.setAttribute('width', column.realWidth || column.width)
      }
    }
  }

  const onScrollableChange = (layout: TableLayout<T>) => {
    const cols = root.vnode.el.querySelectorAll('colgroup > col[name=gutter]')
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i]
      col.setAttribute('width', layout.scrollY.value ? layout.gutterWidth : '0')
    }
    const ths = root.vnode.el.querySelectorAll('th.gutter')
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i]
      th.style.width = layout.scrollY.value ? layout.gutterWidth + 'px' : '0'
      th.style.display = layout.scrollY.value ? '' : 'none'
    }
  }

  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange,
  }
}

export default useLayoutObserver
