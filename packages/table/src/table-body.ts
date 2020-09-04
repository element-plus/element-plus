import { defineComponent, getCurrentInstance, h, computed, watch } from 'vue'
import useLayoutObserver from './layout-observer'
import { arrayFindIndex } from '@element-plus/utils/util'
import { getCell, getColumnByCell, getRowIdentity } from './util'
import { getStyle, hasClass, removeClass, addClass } from '@element-plus/utils/dom'
import isServer from '@element-plus/utils/isServer'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
// import ElTooltip from '@element-plus/tooltip';
import { debounce } from 'throttle-debounce'
import { RenderRowData } from './types'
export default defineComponent({
  name: 'ElTableBody',
  components: {
    ElCheckbox,
  },
  props: {
    store: {
      required: true,
      type: Object,
    },
    stripe: Boolean,
    context: {
      default: () => ({}),
      type: Object,
    },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: {
      type: String,
      default: '',
    },
    highlight: Boolean,
  },
  setup(props) {
    const instance = getCurrentInstance() as any
    const parent = instance.parent as any
    const store = props.store as any
    watch(props.store.states.hoverRow, (newVal: number | null, oldVal: number | null) => {
      if (!props.store.states.isComplex.value || isServer) return
      let raf = window.requestAnimationFrame
      if (!raf) {
        raf = fn => window.setTimeout(fn, 16)
      }
      raf(() => {
        const rows = instance.vnode.el.querySelectorAll('.el-table__row')
        const oldRow = rows[oldVal]
        const newRow = rows[newVal]
        if (oldRow) {
          removeClass(oldRow, 'hover-row')
        }
        if (newRow) {
          addClass(newRow, 'hover-row')
        }
      })
    })

    const { tableLayout, onColumnsChange, onScrollableChange } = useLayoutObserver(parent)

    const isColumnHidden = index => {
      if (props.fixed === 'left') {
        return index >= store.states.fixedLeafColumnsLength.value
      } else if (props.fixed === 'right') {
        return index < store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value
      } else {
        return index < store.states.fixedLeafColumnsLength.value || index >= store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value
      }
    }
    const getRowStyle = (row, rowIndex) => {
      const rowStyle = parent.ctx.rowStyle
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row,
          rowIndex,
        })
      }
      return rowStyle || null
    }

    const getRowClass = (row, rowIndex) => {
      const classes = ['el-table__row']
      if (parent.ctx.highlightCurrentRow && row === store.states.currentRow.value) {
        classes.push('current-row')
      }

      if (props.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped')
      }
      const rowClassName = parent.ctx.rowClassName
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName)
      } else if (typeof rowClassName === 'function') {
        classes.push(
          rowClassName.call(null, {
            row,
            rowIndex,
          }),
        )
      }

      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push('expanded')
      }

      return classes
    }

    const getCellStyle = (rowIndex, columnIndex, row, column) => {
      const cellStyle = parent.ctx.cellStyle
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        })
      }
      return cellStyle
    }

    const getCellClass = (rowIndex, columnIndex, row, column) => {
      const classes = [column.id, column.align, column.className]

      if (isColumnHidden(columnIndex)) {
        classes.push('is-hidden')
      }

      const cellClassName = parent.ctx.cellClassName
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName)
      } else if (typeof cellClassName === 'function') {
        classes.push(
          cellClassName.call(null, {
            rowIndex,
            columnIndex,
            row,
            column,
          }),
        )
      }

      return classes.join(' ')
    }
    const getKeyOfRow = (row, index) => {
      const rowKey = parent.ctx.rowKey
      if (rowKey) {
        return getRowIdentity(row, rowKey)
      }
      return index
    }
    const getSpan = (row, column, rowIndex, columnIndex) => {
      let rowspan = 1
      let colspan = 1
      const fn = parent.ctx.spanMethod
      if (typeof fn === 'function') {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex,
        })
        if (Array.isArray(result)) {
          rowspan = result[0]
          colspan = result[1]
        } else if (typeof result === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
      }
      return { rowspan, colspan }
    }
    const getColspanRealWidth = (columns, colspan, index) => {
      if (colspan < 1) {
        return columns[index].realWidth
      }
      const widthArr = columns.map(({ realWidth }) => realWidth).slice(index, index + colspan)
      return widthArr.reduce((acc, width) => acc + width, -1)
    }

    const handleEvent = (event, row, name) => {
      const table = parent
      const cell = getCell(event)
      let column
      if (cell) {
        column = getColumnByCell(
          {
            columns: props.store.states.columns.value,
          },
          cell,
        )
        if (column) {
          table.emit(`cell-${name}`, row, column, cell, event)
        }
      }
      table.emit(`row-${name}`, row, column, event)
    }
    const handleDoubleClick = (event, row) => {
      handleEvent(event, row, 'dblclick')
    }
    const handleClick = (event, row) => {
      parent.store.commit('setCurrentRow', row)
      handleEvent(event, row, 'click')
    }
    const handleContextMenu = (event, row) => {
      handleEvent(event, row, 'contextmenu')
    }
    const handleMouseEnter = debounce(30, function (index) {
      parent.store.commit('setHoverRow', index)
    })
    const handleMouseLeave = debounce(30, function () {
      parent.store.commit('setHoverRow', null)
    })
    const handleCellMouseEnter = (event, row) => {
      const table = parent
      const cell = getCell(event)

      if (cell) {
        const column = getColumnByCell(
          {
            columns: props.store.states.columns.value,
          },
          cell,
        )
        const hoverState = (table.hoverState = { cell, column, row })
        table.emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event)
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell')
      if (!(hasClass(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
        return
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      const range = document.createRange()
      range.setStart(cellChild, 0)
      range.setEnd(cellChild, cellChild.childNodes.length)
      const rangeWidth = range.getBoundingClientRect().width
      const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0)
      // if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
      //   const tooltip = this.$refs.tooltip;
      //   // TODO 会引起整个 Table 的重新渲染，需要优化
      //   this.tooltipContent = cell.innerText || cell.textContent;
      //   tooltip.referenceElm = cell;
      //   tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
      //   tooltip.doDestroy();
      //   tooltip.setExpectedState(true);
      //   this.activateTooltip(tooltip);
      // }
    }
    const handleCellMouseLeave = event => {
      // const tooltip = this.$refs.tooltip;
      // if (tooltip) {
      //   tooltip.setExpectedState(false);
      //   tooltip.handleClosePopper();
      // }
      const cell = getCell(event)
      if (!cell) return

      const oldHoverState = parent.ctx.hoverState || {}
      parent.emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event)
    }
    const firstDefaultColumnIndex = computed(() => {
      return arrayFindIndex(props.store.states.columns.value, ({ type }) => type === 'default')
    })
    const rowRender = (row, $index, treeRowData) => {
      const { indent, columns } = props.store.states
      const columnsHidden = columns.value.map((column, index) => isColumnHidden(index))
      const rowClasses = getRowClass(row, $index)
      let display = true
      if (treeRowData) {
        rowClasses.push('el-table__row--level-' + treeRowData.level)
        display = treeRowData.display
      }
      // 指令 v-show 会覆盖 row-style 中 display
      // 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
      const displayStyle = display
        ? null
        : {
          display: 'none',
        }
      return h(
        'tr',
        {
          style: [displayStyle, getRowStyle(row, $index)],
          class: rowClasses,
          key: getKeyOfRow(row, $index),
          onDbclick: $event => handleDoubleClick($event, row),
          onClick: $event => handleClick($event, row),
          onContextmenu: $event => handleContextMenu($event, row),
          onMouseenter: () => handleMouseEnter($index),
          onMouseleave: handleMouseLeave,
        },
        columns.value.map((column, cellIndex) => {
          const { rowspan, colspan } = getSpan(row, column, $index, cellIndex)
          if (!rowspan || !colspan) {
            return null
          }
          const columnData = { ...column }
          columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex)
          const data: RenderRowData = {
            store: props.store,
            _self: props.context || parent.ctx,
            column: columnData,
            row,
            $index,
          }
          if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
            data.treeNode = {
              indent: treeRowData.level * indent.value,
              level: treeRowData.level,
            }
            if (typeof treeRowData.expanded === 'boolean') {
              data.treeNode.expanded = treeRowData.expanded
              // 表明是懒加载
              if ('loading' in treeRowData) {
                data.treeNode.loading = treeRowData.loading
              }
              if ('noLazyChildren' in treeRowData) {
                data.treeNode.noLazyChildren = treeRowData.noLazyChildren
              }
            }
          }
          return h(
            'td',
            {
              style: getCellStyle($index, cellIndex, row, column),
              class: getCellClass($index, cellIndex, row, column),
              rowspan,
              colspan,
              onMouseenter: $event => handleCellMouseEnter($event, row),
              onMouseleave: handleCellMouseLeave,
            },
            [column.renderCell(data)],
          )
        }),
      )
    }

    const wrappedRowRender = (row, $index) => {
      const store = props.store as any
      const { isRowExpanded, assertRowKey } = store
      const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states
      const hasExpandColumn = store.states.columns.value.some(({ type }) => type === 'expand')
      if (hasExpandColumn && isRowExpanded(row)) {
        const renderExpanded = parent.renderExpanded
        const tr = rowRender(row, $index, undefined)
        if (!renderExpanded) {
          console.error('[Element Error]renderExpanded is required.')
          return tr
        }
        // 使用二维数组，避免修改 $index
        return [
          [
            tr,
            h(
              'tr',
              {
                key: 'expanded-row__' + tr.key,
              },
              [
                h(
                  'td',
                  {
                    colspan: store.states.columns.value.length,
                    class: 'el-table__expanded-cell',
                  },
                  [
                    renderExpanded({ row, $index, store }),
                  ],
                ),
              ],
            ),
          ],
        ]
      } else if (Object.keys(treeData.value).length) {
        assertRowKey()
        // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
        // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
        const key = getRowIdentity(row, rowKey.value)
        let cur = treeData.value[key]
        let treeRowData = null
        if (cur) {
          treeRowData = {
            expanded: cur.expanded,
            level: cur.level,
            display: true,
          }
          if (typeof cur.lazy === 'boolean') {
            if (typeof cur.loaded === 'boolean' && cur.loaded) {
              treeRowData.noLazyChildren = !(cur.children && cur.children.length)
            }
            treeRowData.loading = cur.loading
          }
        }
        const tmp = [rowRender(row, $index, treeRowData)]
        // 渲染嵌套数据
        if (cur) {
          // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
          let i = 0
          const traverse = (children, parent) => {
            if (!(children && children.length && parent)) return
            children.forEach(node => {
              // 父节点的 display 状态影响子节点的显示状态
              const innerTreeRowData = {
                display: parent.display && parent.expanded,
                level: parent.level + 1,
                expanded: false,
                noLazyChildren: false,
                loading: false,
              }
              const childKey = getRowIdentity(node, rowKey.value)
              if (childKey === undefined || childKey === null) {
                throw new Error('for nested data item, row-key is required.')
              }
              cur = { ...treeData.value[childKey] }
              // 对于当前节点，分成有无子节点两种情况。
              // 如果包含子节点的，设置 expanded 属性。
              // 对于它子节点的 display 属性由它本身的 expanded 与 display 共同决定。
              if (cur) {
                innerTreeRowData.expanded = cur.expanded
                // 懒加载的某些节点，level 未知
                cur.level = cur.level || innerTreeRowData.level
                cur.display = !!(cur.expanded && innerTreeRowData.display)
                if (typeof cur.lazy === 'boolean') {
                  if (typeof cur.loaded === 'boolean' && cur.loaded) {
                    innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length)
                  }
                  innerTreeRowData.loading = cur.loading
                }
              }
              i++
              tmp.push(rowRender(node, $index + i, innerTreeRowData))
              if (cur) {
                const nodes = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value]
                traverse(nodes, cur)
              }
            })
          }
          // 对于 root 节点，display 一定为 true
          cur.display = true
          const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value]
          traverse(nodes, cur)
        }
        return tmp
      } else {
        return rowRender(row, $index, undefined)
      }
    }

    return {
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
    }
  },
  render() {
    const data = this.store.states.data.value || []
    return h(
      'table',
      {
        class: 'el-table__body',
        cellspacing: '0',
        cellpadding: '0',
        border: '0',
      },
      [
        h(
          'colgroup',
          {},
          this.store.states.columns.value.map(column =>
            h('col', {
              name: column.id,
              key: column.id,
            }),
          ),
        ),
        h('tbody', {}, [
          data.reduce((acc, row) => {
            return acc.concat(this.wrappedRowRender(row, acc.length))
          }, []),
        ]),
      ],
    )
  },
})
