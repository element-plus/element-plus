import Vue from 'vue'
import { hasClass, addClass, removeClass } from '@element-plus/utils/dom'
import ElCheckbox from '@element-plus/checkbox'
import FilterPanel from './filter-panel.vue'
import LayoutObserver from './layout-observer'
import { mapStates } from './store/helper'

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

export default {
  name: 'ElTableHeader',

  mixins: [LayoutObserver],

  render(h) {
    const originColumns = this.store.states.originColumns
    // const columnRows = convertToRows(originColumns, this.columns)
    const columnRows = convertToRows(originColumns)
    // 是否拥有多级表头
    const isGroup = columnRows.length > 1
    if (isGroup) this.$parent.isGroup = true
    // *************************
    return
  },

  props: {
    fixed: String,
    store: {
      required: true,
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

  components: {
    ElCheckbox,
  },

  computed: {
    table() {
      return this.$parent
    },

    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth
    },

    ...mapStates({
      columns: 'columns',
      isAllSelected: 'isAllSelected',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length,
    }),
  },

  created() {
    this.filterPanels = {}
  },

  mounted() {
    // nextTick 是有必要的 https://github.com/ElemeFE/element/pull/11311
    this.$nextTick(() => {
      const { prop, order } = this.defaultSort
      const init = true
      this.store.commit('sort', { prop, order, init })
    })
  },

  beforeDestroy() {
    const panels = this.filterPanels
    for (const prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true)
      }
    }
  },

  methods: {
    isCellHidden(index, columns) {
      let start = 0
      for (let i = 0; i < index; i++) {
        start += columns[i].colSpan
      }
      const after = start + columns[index].colSpan - 1
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount
      } else {
        return (after < this.leftFixedLeafCount) || (start >= this.columnsCount - this.rightFixedLeafCount)
      }
    },

    getHeaderRowStyle(rowIndex) {
      const headerRowStyle = this.table.headerRowStyle
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex })
      }
      return headerRowStyle
    },

    getHeaderRowClass(rowIndex) {
      const classes = []

      const headerRowClassName = this.table.headerRowClassName
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName)
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex }))
      }

      return classes.join(' ')
    },

    getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      const headerCellStyle = this.table.headerCellStyle
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        })
      }
      return headerCellStyle
    },

    getHeaderCellClass(rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName]

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden')
      }

      if (!column.children) {
        classes.push('is-leaf')
      }

      if (column.sortable) {
        classes.push('is-sortable')
      }

      const headerCellClassName = this.table.headerCellClassName
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName)
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        }))
      }

      return classes.join(' ')
    },

    toggleAllSelection(event) {
      event.stopPropagation()
      this.store.commit('toggleAllSelection')
    },

    handleFilterClick(event, column) {
      event.stopPropagation()
      const target = event.target
      let cell = target.tagName === 'TH' ? target : target.parentNode
      if (hasClass(cell, 'noclick')) return
      cell = cell.querySelector('.el-table__column-filter-trigger') || cell
      const table = this.$parent

      const filterPanel = this.filterPanels[column.id]

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false
        return
      }

      if (!filterPanel) {
        // *******
        // filterPanel = new Vue(FilterPanel)
        this.filterPanels[column.id] = filterPanel
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement
        }
        filterPanel.table = table
        filterPanel.cell = cell
        filterPanel.column = column
        !this.$isServer && filterPanel.$mount(document.createElement('div'))
      }

      setTimeout(() => {
        filterPanel.showPopper = true
      }, 16)
    },

    handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column)
      } else if (column.filterable && !column.sortable) {
        this.handleFilterClick(event, column)
      }

      this.$parent.$emit('header-click', column, event)
    },

    handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event)
    },

    handleMouseDown(event, column) {
      if (this.$isServer) return
      if (column.children && column.children.length > 0) return
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true

        this.$parent.resizeProxyVisible = true

        const table = this.$parent
        const tableEl = table.$el
        const tableLeft = tableEl.getBoundingClientRect().left
        const columnEl = this.$el.querySelector(`th.${column.id}`)
        const columnRect = columnEl.getBoundingClientRect()
        const minLeft = columnRect.left - tableLeft + 30

        addClass(columnEl, 'noclick')

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft,
        }

        const resizeProxy = table.$refs.resizeProxy
        resizeProxy.style.left = this.dragState.startLeft + 'px'

        document.onselectstart = function () { return false }
        document.ondragstart = function () { return false }

        const handleMouseMove = event => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft
          const proxyLeft = this.dragState.startLeft + deltaLeft

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px'
        }

        const handleMouseUp = () => {
          if (this.dragging) {
            const {
              startColumnLeft,
              startLeft,
            } = this.dragState
            const finalLeft = parseInt(resizeProxy.style.left, 10)
            const columnWidth = finalLeft - startColumnLeft
            column.width = column.realWidth = columnWidth
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event)

            this.store.scheduleLayout()

            document.body.style.cursor = ''
            this.dragging = false
            this.draggingColumn = null
            this.dragState = {}

            table.resizeProxyVisible = false
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
    },

    handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return
      let target = event.target
      while (target && target.tagName !== 'TH') {
        target = target.parentNode
      }

      if (!column || !column.resizable) return

      if (!this.dragging && this.border) {
        const rect = target.getBoundingClientRect()

        const bodyStyle = document.body.style
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize'
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'col-resize'
          }
          this.draggingColumn = column
        } else if (!this.dragging) {
          bodyStyle.cursor = ''
          if (hasClass(target, 'is-sortable')) {
            target.style.cursor = 'pointer'
          }
          this.draggingColumn = null
        }
      }
    },

    handleMouseOut() {
      if (this.$isServer) return
      document.body.style.cursor = ''
    },

    toggleOrder({ order, sortOrders }) {
      if (order === '') return sortOrders[0]
      const index = sortOrders.indexOf(order || null)
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1]
    },

    handleSortClick(event, column, givenOrder) {
      event.stopPropagation()
      const order = column.order === givenOrder
        ? null
        : (givenOrder || this.toggleOrder(column))

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

      const states = this.store.states
      let sortProp = states.sortProp
      let sortOrder
      const sortingColumn = states.sortingColumn

      if (sortingColumn !== column || (sortingColumn === column && sortingColumn.order === null)) {
        if (sortingColumn) {
          sortingColumn.order = null
        }
        states.sortingColumn = column
        sortProp = column.property
      }

      if (!order) {
        sortOrder = column.order = null
      } else {
        sortOrder = column.order = order
      }

      states.sortProp = sortProp
      states.sortOrder = sortOrder

      this.store.commit('changeSortCondition')
    },
  },

  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {},
    }
  },
}
