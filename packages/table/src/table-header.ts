import {
  defineComponent,
  getCurrentInstance,
  computed,
  onMounted,
  nextTick,
  ref,
  h,
} from 'vue'
import { hasClass, addClass, removeClass } from '@element-plus/utils/dom'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import FilterPanel from './filter-panel.vue'
import useLayoutObserver from './layout-observer'
import isServer from '@element-plus/utils/isServer'

const getAllColumns = columns => {
  const result = []
  columns.forEach(column => {
    if (column.children) {
      result.push(column)
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, getAllColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

const convertToRows = originColumns => {
  let maxLevel = 1
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1
      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }
    if (column.children) {
      let colSpan = 0
      column.children.forEach(subColumn => {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach(column => {
    column.level = 1
    traverse(column, undefined)
  })

  const rows = []
  for (let i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  const allColumns = getAllColumns(originColumns)

  allColumns.forEach(column => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }
    rows[column.level - 1].push(column)
  })

  return rows
}

interface ITableHeaderProps {
  fixed: string
  store: any
  border: boolean
  defaultSort: any
}

export default defineComponent({
  name: 'ElTableHeader',
  components: {
    ElCheckbox,
  },
  props: {
    fixed: {
      type: String,
      default: '',
    },
    store: {
      required: true,
      type: Object,
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: '',
        }
      },
    },
  },
  setup(props: ITableHeaderProps, { emit }) {
    const instance = getCurrentInstance()
    const parent = instance.parent as any
    const storeData = parent.store.states
    const filterPanels = ref({})
    const {
      tableLayout,
      onColumnsChange,
      onScrollableChange,
    } = useLayoutObserver(parent)
    const hasGutter = computed(() => {
      return !props.fixed && tableLayout.gutterWidth
    })
    onMounted(() => {
      nextTick(() => {
        const { prop, order } = props.defaultSort
        const init = true
        parent.store.commit('sort', { prop, order, init })
      })
    })

    const isCellHidden = (index, columns) => {
      let start = 0
      for (let i = 0; i < index; i++) {
        start += columns[i].colSpan
      }
      const after = start + columns[index].colSpan - 1
      if (props.fixed === 'left') {
        return after >= storeData.fixedLeafColumnsLength.value
      } else if (props.fixed === 'right') {
        return (
          start <
          storeData.columns.value.length.value -
          storeData.rightFixedLeafColumnsLength.value.value
        )
      } else {
        return (
          after < storeData.fixedLeafColumnsLength.value ||
          start >=
          storeData.columns.value.length.value -
          storeData.rightFixedLeafColumnsLength.value.value
        )
      }
    }

    const getHeaderRowStyle = rowIndex => {
      const headerRowStyle = parent.ctx.headerRowStyle
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex })
      }
      return headerRowStyle
    }

    const getHeaderRowClass = rowIndex => {
      const classes = []
      const headerRowClassName = parent.ctx.headerRowClassName
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName)
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex }))
      }

      return classes.join(' ')
    }

    const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
      const headerCellStyle = parent.ctx.headerCellStyle
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        })
      }
      return headerCellStyle
    }

    const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
      const classes = [
        column.id,
        column.order,
        column.headerAlign,
        column.className,
        column.labelClassName,
      ]
      if (rowIndex === 0 && isCellHidden(columnIndex, row)) {
        classes.push('is-hidden')
      }

      if (!column.children) {
        classes.push('is-leaf')
      }

      if (column.sortable) {
        classes.push('is-sortable')
      }

      const headerCellClassName = parent.ctx.headerCellClassName
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName)
      } else if (typeof headerCellClassName === 'function') {
        classes.push(
          headerCellClassName.call(null, {
            rowIndex,
            columnIndex,
            row,
            column,
          }),
        )
      }

      return classes.join(' ')
    }

    const toggleAllSelection = event => {
      event.stopPropagation()
      parent.store.commit('toggleAllSelection')
    }

    const handleFilterClick = (event, column) => {
      event.stopPropagation()
      return
    }

    const handleHeaderClick = (event, column) => {
      if (!column.filters && column.sortable) {
        handleSortClick(event, column, false)
      } else if (column.filterable && !column.sortable) {
        handleFilterClick(event, column)
      }

      parent.emit('header-click', column, event)
    }

    const handleHeaderContextMenu = (event, column) => {
      parent.emit('header-contextmenu', column, event)
    }
    const draggingColumn = ref(null)
    const dragging = ref(false)
    const dragState = ref({})
    const handleMouseDown = (event, column) => {
      if (isServer) return
      if (column.children && column.children.length > 0) return
      /* istanbul ignore if */
      if (draggingColumn.value && props.border) {
        dragging.value = true

        const table = parent
        emit('set-drag-visible', true)
        const tableEl = table.vnode.el
        const tableLeft = tableEl.getBoundingClientRect().left
        const columnEl = instance.vnode.el.querySelector(`th.${column.id}`)
        const columnRect = columnEl.getBoundingClientRect()
        const minLeft = columnRect.left - tableLeft + 30

        addClass(columnEl, 'noclick')

        dragState.value = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft,
        }
        const resizeProxy = table.refs.resizeProxy
        resizeProxy.style.left = (dragState.value as any).startLeft + 'px'

        document.onselectstart = function () {
          return false
        }
        document.ondragstart = function () {
          return false
        }

        const handleMouseMove = event => {
          const deltaLeft =
            event.clientX - (dragState.value as any).startMouseLeft
          const proxyLeft = (dragState.value as any).startLeft + deltaLeft

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px'
        }

        const handleMouseUp = () => {
          if (dragging.value) {
            const { startColumnLeft, startLeft } = dragState.value as any
            const finalLeft = parseInt(resizeProxy.style.left, 10)
            const columnWidth = finalLeft - startColumnLeft
            column.width = column.realWidth = columnWidth
            table.emit(
              'header-dragend',
              column.width,
              startLeft - startColumnLeft,
              column,
              event,
            )

            props.store.scheduleLayout()

            document.body.style.cursor = ''
            dragging.value = false
            draggingColumn.value = null
            dragState.value = {}
            emit('set-drag-visible', false)
          }

          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
          document.onselectstart = null
          document.ondragstart = null

          setTimeout(function () {
            removeClass(columnEl, 'noclick')
          }, 0)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
      }
    }

    const handleMouseMove = (event, column) => {
      if (column.children && column.children.length > 0) return
      let target = event.target
      while (target && target.tagName !== 'TH') {
        target = target.parentNode
      }

      if (!column || !column.resizable) return

      if (!dragging.value && props.border) {
        const rect = target.getBoundingClientRect()

        const bodyStyle = document.body.style
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize'
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'col-resize'
          }
          draggingColumn.value = column
        } else if (!dragging.value) {
          bodyStyle.cursor = ''
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'pointer'
          }
          draggingColumn.value = null
        }
      }
    }

    const handleMouseOut = () => {
      if (isServer) return
      document.body.style.cursor = ''
    }

    const toggleOrder = ({ order, sortOrders }) => {
      if (order === '') return sortOrders[0]
      const index = sortOrders.indexOf(order || null)
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1]
    }

    const handleSortClick = (event, column, givenOrder) => {
      event.stopPropagation()
      const order =
        column.order === givenOrder ? null : givenOrder || toggleOrder(column)

      let target = event.target
      while (target && target.tagName !== 'TH') {
        target = target.parentNode
      }

      if (target && target.tagName === 'TH') {
        if (hasClass(target, 'noclick')) {
          removeClass(target, 'noclick')
          return
        }
      }

      if (!column.sortable) return

      const states = props.store.states
      let sortProp = states.sortProp.value
      let sortOrder
      const sortingColumn = states.sortingColumn.value

      if (
        sortingColumn !== column ||
        (sortingColumn === column && sortingColumn.order === null)
      ) {
        if (sortingColumn) {
          sortingColumn.order = null
        }
        states.sortingColumn.value = column
        sortProp = column.property
      }
      if (!order) {
        sortOrder = column.order = null
      } else {
        sortOrder = column.order = order
      }

      states.sortProp.value = sortProp
      states.sortOrder.value = sortOrder

      parent.store.commit('changeSortCondition')
    }
    const columnRows = computed(() => {
      return convertToRows(props.store.states.originColumns.value)
    })
    const isGroup = computed(() => {
      const result = columnRows.value.length > 1
      if (result) parent.ctx.isGroup = true
      return result
    })
    return {
      columns: storeData.columns,
      filterPanels,
      hasGutter,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection,
    }
  },
  render() {
    return h(
      'table',
      {
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: 'el-table__header',
      },
      [
        h('colgroup', {}, [
          ...this.columns.map(column =>
            h('col', {
              key: column.id,
              name: column.id,
            }),
          ),
          this.hasGutter &&
          h('col', {
            name: 'gutter',
          }),
        ]),
        h(
          'thead',
          {
            class: { 'is-group': this.isGroup, 'has-gutter': this.hasGutter },
          },
          this.columnRows.map((subColumns, rowIndex) =>
            h(
              'tr',
              {
                class: this.getHeaderRowClass(rowIndex),
                key: rowIndex,
                style: this.getHeaderRowStyle(rowIndex),
              },
              subColumns.map((column, cellIndex) =>
                h(
                  'th',
                  {
                    class: this.getHeaderCellClass(
                      rowIndex,
                      cellIndex,
                      subColumns,
                      column,
                    ),
                    colspan: column.colSpan,
                    key: `${column.id}-thead`,
                    rowSpan: column.rowSpan,
                    style: this.getHeaderCellStyle(
                      rowIndex,
                      cellIndex,
                      subColumns,
                      column,
                    ),
                    onClick: $event => this.handleHeaderClick($event, column),
                    onContextmenu: $event => this.handleHeaderContextMenu($event, column),
                    onMousedown: $event => this.handleMouseDown($event, column),
                    onMouseMove: $event => this.handleMouseMove($event, column),
                    onMouseout: this.handleMouseOut,
                  },
                  [
                    h(
                      'div',
                      {
                        class: [
                          'cell',
                          column.filteredValue &&
                            column.filteredValue.length > 0
                            ? 'highlight'
                            : '',
                          column.labelClassName,
                        ],
                      },
                      [
                        column.renderHeader
                          ? column.renderHeader({
                            column,
                            $index: cellIndex,
                            store: this.store,
                            _self: this.$parent,
                          })
                          : column.label,
                        column.sortable &&
                        h(
                          'span',
                          {
                            onClick: $event =>
                              this.handleSortClick($event, column),
                            class: 'caret-wrapper',
                          },
                          [
                            h('i', {
                              onClick: $event =>
                                this.handleSortClick(
                                  $event,
                                  column,
                                  'ascending',
                                ),
                              class: 'sort-caret ascending',
                            }),
                            h('i', {
                              onClick: $event =>
                                this.handleSortClick(
                                  $event,
                                  column,
                                  'descending',
                                ),
                              class: 'sort-caret descending',
                            }),
                          ],
                        ),
                        column.filterable &&
                        h(FilterPanel, {
                          store: this.$parent.store,
                          placement: column.filterPlacement || 'bottom-start',
                          column: column,
                          upDataColumn: (key, value) => {
                            column[key] = value
                          },
                        }),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ],
    )
  },
})
