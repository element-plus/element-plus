import {
  onUnmounted,
  onMounted,
  onUpdated,
  computed,
} from 'vue'

export default function useLayoutObserver(instance: any) {
  const tableLayout = computed(() => {
    let layout = instance.layout
    if (!layout && instance.table) {
      layout = instance.table.layout
    }
    if (!layout) {
      throw new Error('Can not find table layout.')
    }
    return layout
  })
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance)
  })
  onMounted(() => {
    instance.onColumnsChange(tableLayout.value)
    instance.onScrollableChange(tableLayout.value)
  })
  onUpdated(() => {
    if (instance.__updated__) return
    instance.onColumnsChange(tableLayout.value)
    instance.onScrollableChange(tableLayout.value)
    instance.__updated__ = true
  })

  const onColumnsChange = layout => {
    const cols = instance.$el.querySelectorAll('colgroup > col')
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

  const onScrollableChange = layout => {
    const cols = instance.$el.querySelectorAll('colgroup > col[name=gutter]')
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i]
      col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0')
    }
    const ths = instance.$el.querySelectorAll('th.gutter')
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i]
      th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0'
      th.style.display = layout.scrollY ? '' : 'none'
    }
  }
  return {
    onColumnsChange,
    onScrollableChange,
  }
}
