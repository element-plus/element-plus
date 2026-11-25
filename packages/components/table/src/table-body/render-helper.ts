import { computed, h, inject } from 'vue'
import { merge } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import { isBoolean, isPropAbsent } from '@element-plus/utils'
import { getRowIdentity } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import useEvents from './events-helper'
import useStyles from './styles-helper'
import TdWrapper from './td-wrapper.vue'

import type { VNode } from 'vue'
import type { TableBodyProps } from './defaults'
import type {
  DefaultRow,
  RenderRowData,
  Table,
  TableColumnCtx,
  TableProps,
  TreeNode,
} from '../table/defaults'
import type { TreeData } from '../store/tree'
import type { TableOverflowTooltipOptions } from '../util'

function useRender<T extends DefaultRow>(props: Partial<TableBodyProps<T>>) {
  const parent = inject(TABLE_INJECTION_KEY) as Table<T>
  const ns = useNamespace('table')
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

  let displayIndex = -1
  let rootIndex = 0
  let rootSpanEnd = 0
  let pendingTreeRows: ((rows: VNode[], index: number) => void)[] | undefined
  type CellSpan = ReturnType<typeof getSpan>
  let spanCache: Map<T, Map<number, (CellSpan | undefined)[]>> | undefined
  const getSiblingSpan = (row: T, rowIndex: number, columnIndex: number) => {
    const cached = spanCache?.get(row)?.get(rowIndex)?.[columnIndex]
    if (cached) return cached
    const span = getSpan(
      row,
      props.store!.states.columns.value[columnIndex],
      rowIndex,
      columnIndex
    )
    // Lookahead is position-dependent and is discarded after each body render.
    spanCache ??= new Map()
    let rowCache = spanCache.get(row)
    if (!rowCache) {
      rowCache = new Map()
      spanCache.set(row, rowCache)
    }
    let cells = rowCache.get(rowIndex)
    if (!cells) {
      cells = []
      rowCache.set(rowIndex, cells)
    }
    cells[columnIndex] = span
    return span
  }
  const getSiblingSpanEnd = (
    siblings: T[],
    start: number,
    rowIndex: number,
    rendered: VNode
  ) => {
    const firstCells = rendered.children as (VNode | null)[]
    if (!firstCells.some((cell) => cell?.props?.rowspan > 1)) return start + 1
    const columns = props.store!.states.columns.value
    const coveredUntil: number[] = []
    let end = start + 1
    for (let index = start; index < end; index++) {
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const { rowspan, colspan } =
          index === start
            ? {
                rowspan: firstCells[columnIndex]?.props?.rowspan ?? 0,
                colspan: firstCells[columnIndex]?.props?.colspan ?? 0,
              }
            : getSiblingSpan(
                siblings[index],
                rowIndex + index - start,
                columnIndex
              )
        if (!rowspan || !colspan) continue
        const rowEnd = index + Math.max(1, rowspan)
        if (rowEnd > siblings.length) return start + 1
        for (
          let column = columnIndex;
          column < Math.min(columns.length, columnIndex + colspan);
          column++
        ) {
          // Independent cells in a covered column rule out a sibling merge.
          if (coveredUntil[column] > index) return start + 1
          coveredUntil[column] = rowEnd
        }
        end = Math.max(end, rowEnd)
      }
    }
    return end
  }

  const firstDefaultColumnIndex = computed(() => {
    return props.store?.states.columns.value.findIndex(
      ({ type }) => type === 'default'
    )
  })
  const getKeyOfRow = (row: T, index: number) => {
    const rowKey = (parent?.props as Partial<TableProps<T>>)?.rowKey
    if (rowKey) {
      return getRowIdentity(row, rowKey)
    }
    return index
  }
  const rowRender = (
    row: T,
    $index: number,
    treeRowData?: TreeNode,
    expanded = false
  ) => {
    const { tooltipEffect, tooltipOptions, store } = props
    const { indent, columns } = store!.states
    const rowClasses: string[] = []
    let display = true
    if (treeRowData) {
      rowClasses.push(ns.em('row', `level-${treeRowData.level}`))
      display = !!treeRowData.display
    }
    if ($index === 0) {
      displayIndex = -1
    }
    if (props.stripe && display) {
      displayIndex++
    }
    rowClasses.push(...getRowClass(row, $index, displayIndex))
    const displayStyle = display ? null : { display: 'none' }
    return h(
      'tr',
      {
        style: [displayStyle, getRowStyle(row, $index)],
        class: rowClasses,
        key: getKeyOfRow(row, $index),
        onDblclick: ($event: MouseEvent) => handleDoubleClick($event, row),
        onClick: ($event: PointerEvent) => handleClick($event, row),
        onContextmenu: ($event: PointerEvent) => handleContextMenu($event, row),
        onMouseenter: () => handleMouseEnter($index),
        onMouseleave: handleMouseLeave,
      },
      columns.value.map((column, cellIndex) => {
        const { rowspan, colspan } =
          spanCache?.get(row)?.get($index)?.[cellIndex] ??
          getSpan(row, column, $index, cellIndex)
        if (!rowspan || !colspan) {
          return null
        }
        const columnData = Object.assign({}, column)
        columnData.realWidth = getColspanRealWidth(
          columns.value,
          colspan,
          cellIndex
        )
        const data: RenderRowData<T> = {
          store: store!,
          _self: props.context || parent!,
          column: columnData,
          row,
          $index,
          cellIndex,
          expanded,
        }
        if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
          data.treeNode = {
            indent: treeRowData.level && treeRowData.level * indent.value,
            level: treeRowData.level,
          }
          if (isBoolean(treeRowData.expanded)) {
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
        const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`
        const patchKey = columnData.columnKey || columnData.rawColumnKey || ''
        const mergedTooltipOptions =
          column.showOverflowTooltip &&
          merge(
            {
              effect: tooltipEffect,
            },
            tooltipOptions,
            column.showOverflowTooltip
          )
        return h(
          TdWrapper,
          {
            style: getCellStyle($index, cellIndex, row, column),
            class: getCellClass($index, cellIndex, row, column, colspan - 1),
            key: `${patchKey}${baseKey}`,
            rowspan,
            colspan,
            onMouseenter: ($event: MouseEvent) =>
              handleCellMouseEnter(
                $event,
                row,
                mergedTooltipOptions as TableOverflowTooltipOptions
              ),
            onMouseleave: handleCellMouseLeave,
          },
          {
            default: () => cellChildren(cellIndex, column, data),
          }
        )
      })
    )
  }
  const cellChildren = <T extends DefaultRow>(
    _cellIndex: number,
    column: TableColumnCtx<T>,
    data: RenderRowData<T>
  ) => {
    return column.renderCell(data)
  }

  const wrappedRowRender = (row: T, $index: number) => {
    const store = props.store!
    const { isRowExpanded, assertRowKey } = store
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } =
      store.states
    const columns = store.states.columns.value
    const hasExpandColumn = columns.some(({ type }) => type === 'expand')
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row)
      const tr = rowRender(row, $index, undefined, expanded)
      const renderExpanded = parent?.renderExpanded
      if (!renderExpanded) {
        console.error('[Element Error]renderExpanded is required.')
        return tr
      }

      // 在没设置时候避免 h 执行
      // 非保留模式且未展开时，直接返回
      // 使用二维数组包装，避免修改 $index
      const rows = [[tr]]

      // 仅在需要时创建展开行（保留模式或展开状态）
      if (parent.props.preserveExpandedContent || expanded) {
        rows[0].push(
          h(
            'tr',
            {
              key: `expanded-row__${tr.key as string}`,
              style: { display: expanded ? '' : 'none' },
            },
            [
              h(
                'td',
                {
                  colspan: columns.length,
                  class: `${ns.e('cell')} ${ns.e('expanded-cell')}`,
                },
                [renderExpanded({ row, $index, store, expanded })]
              ),
            ]
          )
        )
      }

      return rows
    } else if (Object.keys(treeData.value).length) {
      assertRowKey()
      // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
      // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
      const key = getRowIdentity(row, rowKey.value)
      let cur = treeData.value[key]
      let treeRowData: TreeNode | null = null
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true,
          noLazyChildren: undefined as boolean | undefined,
          loading: undefined as boolean | undefined,
        }
        if (isBoolean(cur.lazy)) {
          if (treeRowData && isBoolean(cur.loaded) && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length)
          }
          treeRowData.loading = cur.loading
        }
      }
      if ($index === 0) spanCache = undefined
      const tmp = [rowRender(row, $index, treeRowData ?? undefined)]
      const hasSpanMethod = !!parent.props.spanMethod
      if (hasSpanMethod) {
        if ($index === 0) {
          rootIndex = 0
          rootSpanEnd = 0
          pendingTreeRows = undefined
        }
        rootIndex++
        if (rootIndex > rootSpanEnd) {
          rootSpanEnd = getSiblingSpanEnd(
            store.states.data.value,
            rootIndex - 1,
            $index,
            tmp[0]
          )
        }
      }
      // Defer descendants only for a confirmed merge between siblings.
      const deferChildren =
        hasSpanMethod &&
        rootIndex < rootSpanEnd &&
        rootIndex < store.states.data.value.length
      if (hasSpanMethod && !deferChildren && pendingTreeRows) {
        for (const render of pendingTreeRows) {
          render(tmp, $index + tmp.length)
        }
        pendingTreeRows = undefined
      }
      // 渲染嵌套数据
      if (cur) {
        const root = cur
        let childrenRows = tmp
        // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
        let i = tmp.length - 1
        const traverse = (children: T[], parent: TreeData) => {
          if (!(children && children.length && parent)) return
          let spanEnd = 0
          let pendingChildren: (() => void)[] | undefined
          children.forEach((node, index) => {
            // 父节点的 display 状态影响子节点的显示状态
            const innerTreeRowData: Partial<Record<string, any>> = {
              display: parent.display && parent.expanded,
              level: parent.level! + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false,
            }
            const childKey = getRowIdentity(node, rowKey.value)
            if (isPropAbsent(childKey)) {
              throw new Error('For nested data item, row-key is required.')
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
              if (isBoolean(cur.lazy)) {
                if (isBoolean(cur.loaded) && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(
                    cur.children && cur.children.length
                  )
                }
                innerTreeRowData.loading = cur.loading
              }
            }
            i++
            const tr = rowRender(node, $index + i, innerTreeRowData)
            childrenRows.push(tr)
            // Queued traversals overwrite cur, so retain this sibling's tree state.
            const childTree = cur
            const nodes =
              childTree &&
              (lazyTreeNodeMap.value[childKey] ||
                node[childrenColumnName.value])
            if (hasSpanMethod) {
              if (index >= spanEnd) {
                spanEnd = getSiblingSpanEnd(children, index, $index + i, tr)
              }
              if (
                pendingChildren &&
                (index + 1 >= spanEnd || index === children.length - 1)
              ) {
                for (const render of pendingChildren) render()
                pendingChildren = undefined
              }
            }
            if (childTree) {
              if (
                hasSpanMethod &&
                index + 1 < spanEnd &&
                index < children.length - 1 &&
                nodes?.length
              ) {
                pendingChildren ??= []
                pendingChildren.push(() => traverse(nodes, childTree))
              } else {
                traverse(nodes, childTree)
              }
            }
          })
        }
        // 对于 root 节点，display 一定为 true
        root.display = true
        const nodes =
          lazyTreeNodeMap.value[key] || row[childrenColumnName.value]
        if (deferChildren && nodes?.length) {
          pendingTreeRows ??= []
          pendingTreeRows.push((rows, startIndex) => {
            childrenRows = rows
            // traverse increments i before rendering; hidden rows still count toward indices.
            i = startIndex - $index - 1
            traverse(nodes, root)
          })
        } else {
          traverse(nodes, root)
        }
      }
      if (hasSpanMethod && rootIndex === store.states.data.value.length) {
        spanCache = undefined
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
