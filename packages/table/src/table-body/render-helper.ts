import { h, getCurrentInstance, computed } from 'vue'
import useEvents from './events-helper'
import useStyles from './styles-helper'
import { arrayFindIndex } from '@element-plus/utils/util'
import { getRowIdentity } from '../util'
import { TableBodyProps } from './defaults'
import { RenderRowData, Table, TreeNode } from '../table/defaults'
import { TableProps } from '../table/defaults'

function useRender<T>(props: Partial<TableBodyProps<T>>) {
  const instance = getCurrentInstance()
  const parent = instance.parent as Table<T>
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger,
  } = useEvents(props)
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth,
  } = useStyles(props)
  const firstDefaultColumnIndex = computed(() => {
    return arrayFindIndex(
      props.store.states.columns.value,
      ({ type }) => type === 'default',
    )
  })
  const getKeyOfRow = (row: T, index: number) => {
    const rowKey = (parent.props as Partial<TableProps<T>>).rowKey
    if (rowKey) {
      return getRowIdentity(row, rowKey)
    }
    return index
  }
  const rowRender = (row: T, $index: number, treeRowData?: TreeNode) => {
    const { tooltipEffect, store } = props
    const { indent, columns } = store.states
    const rowClasses = getRowClass(row, $index)
    let display = true
    if (treeRowData) {
      rowClasses.push('el-table__row--level-' + treeRowData.level)
      display = treeRowData.display
    }
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
        onDblclick: $event => handleDoubleClick($event, row),
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
        columnData.realWidth = getColspanRealWidth(
          columns.value,
          colspan,
          cellIndex,
        )
        const data: RenderRowData<T> = {
          store: props.store,
          _self: props.context || parent,
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
        const key = `${$index},${cellIndex}`
        return h(
          'td',
          {
            style: getCellStyle($index, cellIndex, row, column),
            class: getCellClass($index, cellIndex, row, column),
            key,
            rowspan,
            colspan,
            onMouseenter: $event =>
              handleCellMouseEnter($event, { ...row, tooltipEffect }),
            onMouseleave: handleCellMouseLeave,
          },
          [column.renderCell(data)],
        )
      }),
    )
  }
  const wrappedRowRender = (row: T, $index: number) => {
    const store = props.store as any
    const { isRowExpanded, assertRowKey } = store
    const {
      treeData,
      lazyTreeNodeMap,
      childrenColumnName,
      rowKey,
    } = store.states
    const hasExpandColumn = store.states.columns.value.some(
      ({ type }) => type === 'expand',
    )
    if (hasExpandColumn && isRowExpanded(row)) {
      const renderExpanded = parent.renderExpanded
      const tr = rowRender(row, $index, undefined)
      if (!renderExpanded) {
        console.error('[Element Error]renderExpanded is required.')
        return tr
      }
      // 使用二维数组，避免修改 $index
      /**
       * TIP: One dimensional array is used temporarily to avoid rendering flicker.
       * The case of $index being modified has not been found by testing
       */
      return [
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
              [renderExpanded({ row, $index, store })],
            ),
          ],
        ),
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
                  innerTreeRowData.noLazyChildren = !(
                    cur.children && cur.children.length
                  )
                }
                innerTreeRowData.loading = cur.loading
              }
            }
            i++
            tmp.push(rowRender(node, $index + i, innerTreeRowData))
            if (cur) {
              const nodes =
                lazyTreeNodeMap.value[childKey] ||
                node[childrenColumnName.value]
              traverse(nodes, cur)
            }
          })
        }
        // 对于 root 节点，display 一定为 true
        cur.display = true
        const nodes =
          lazyTreeNodeMap.value[key] || row[childrenColumnName.value]
        traverse(nodes, cur)
      }
      return tmp
    } else {
      return rowRender(row, $index, undefined)
    }
  }

  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger,
  }
}

export default useRender
