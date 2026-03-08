import {
  Comment,
  Fragment,
  computed,
  createTextVNode,
  getCurrentInstance,
  h,
  ref,
  renderSlot,
  unref,
  watchEffect,
} from 'vue'
import { debugWarn, isArray, isUndefined } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import {
  cellForced,
  defaultRenderCell,
  getDefaultClassName,
  treeCellPrefix,
} from '../config'
import { ensureValidVNode, parseMinWidth, parseWidth } from '../util'

import type { ComputedRef, RendererNode, Slots, VNode } from 'vue'
import type { TableColumn, TableColumnCtx } from './defaults'
import type { DefaultRow, Table } from '../table/defaults'

function useRender<T extends DefaultRow>(
  props: TableColumnCtx<T>,
  slots: Slots,
  owner: ComputedRef<Table<T>>
) {
  const instance = getCurrentInstance() as TableColumn<T>
  const columnId = ref('')
  const isSubColumn = ref(false)
  const realAlign = ref<string | null>()
  const realHeaderAlign = ref<string | null | undefined>()
  const ns = useNamespace('table')
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null
    // nextline help render
    realAlign.value
  })
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign
      ? `is-${props.headerAlign}`
      : realAlign.value
    // nextline help render
    realHeaderAlign.value
  })
  const columnOrTableParent = computed<Table<T> | TableColumn<T>>(() => {
    let parent: any = instance.vnode.vParent || instance.parent
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent
    }
    return parent
  })
  const hasTreeColumn = computed<boolean>(() => {
    const { store } = (instance.parent as Table<T>)!
    if (!store) return false
    const { treeData } = store.states
    const treeDataValue = treeData.value
    return treeDataValue && Object.keys(treeDataValue).length > 0
  })

  const realWidth = ref(parseWidth(props.width))
  const realMinWidth = ref(parseMinWidth(props.minWidth))
  const setColumnWidth = (column: TableColumnCtx<T>) => {
    if (realWidth.value) column.width = realWidth.value
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = undefined
    }
    if (!column.minWidth) {
      column.minWidth = 80
    }
    column.realWidth = Number(
      isUndefined(column.width) ? column.minWidth : column.width
    )
    return column
  }
  const setColumnForcedProps = (column: TableColumnCtx<T>) => {
    // 对于特定类型的 column，某些属性不允许设置
    const type = column.type
    const source = cellForced[type as keyof typeof cellForced] || {}
    Object.keys(source).forEach((prop) => {
      const value = source[prop as keyof typeof source]
      if (prop !== 'className' && !isUndefined(value)) {
        ;(column as any)[prop] = value
      }
    })
    const className = getDefaultClassName(type)
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`
      column.className = column.className
        ? `${column.className} ${forceClass}`
        : forceClass
    }
    return column
  }

  const checkSubColumn = (children: VNode | VNode[]) => {
    if (isArray(children)) {
      children.forEach((child) => check(child))
    } else {
      check(children)
    }
    function check(item: any) {
      if (item?.type?.name === 'ElTableColumn') {
        item.vParent = instance
      }
    }
  }
  const setColumnRenders = (column: TableColumnCtx<T>) => {
    // renderHeader 属性不推荐使用。
    //@ts-expect-error
    if (props.renderHeader) {
      debugWarn(
        'TableColumn',
        'Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.'
      )
    } else if (column.type !== 'selection') {
      column.renderHeader = (scope) => {
        // help render
        instance.columnConfig.value['label']

        if (slots.header) {
          const slotResult = slots.header(scope)
          // Manual valid check to support v-if fallback
          // and bypass renderSlot to support HMR
          if (ensureValidVNode(slotResult)) {
            return h(Fragment, slotResult)
          }
        }

        return createTextVNode(column.label)
      }
    }

    if (slots['filter-icon']) {
      column.renderFilterIcon = (scope) => {
        return renderSlot(slots, 'filter-icon', scope)
      }
    }

    if (slots.expand) {
      column.renderExpand = (scope) => {
        return renderSlot(slots, 'expand', scope)
      }
    }

    let originRenderCell = column.renderCell
    // TODO: 这里的实现调整
    if (column.type === 'expand') {
      // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
      column.renderCell = (data) =>
        h(
          'div',
          {
            class: 'cell',
          },
          [originRenderCell(data)]
        )
      owner.value.renderExpanded = (row) => {
        return slots.default ? slots.default(row) : slots.default
      }
    } else {
      originRenderCell = originRenderCell || defaultRenderCell
      // 对 renderCell 进行包装
      column.renderCell = (data) => {
        let children: VNode | VNode[] | null = null
        if (slots.default) {
          const vnodes = slots.default(data)
          children = vnodes.some((v) => v.type !== Comment)
            ? vnodes
            : originRenderCell(data)
        } else {
          children = originRenderCell(data)
        }

        const { columns } = owner.value.store.states
        const firstUserColumnIndex = columns.value.findIndex(
          (item) => item.type === 'default'
        )
        const shouldCreatePlaceholder =
          hasTreeColumn.value && data.cellIndex === firstUserColumnIndex
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder)
        const props = {
          class: 'cell',
          style: {},
        }
        if (column.showOverflowTooltip) {
          props.class = `${props.class} ${unref(ns.namespace)}-tooltip`
          props.style = {
            width: `${
              (data.column.realWidth || Number(data.column.width)) - 1
            }px`,
          }
        }
        checkSubColumn(children)
        return h('div', props, [prefix, children])
      }
    }
    return column
  }
  const getPropsData = (...propsKey: string[][]) => {
    return propsKey.reduce(
      (prev, cur) => {
        if (isArray(cur)) {
          cur.forEach((key) => {
            prev[key] = props[key as keyof TableColumnCtx<T>]
          })
        }
        return prev
      },
      {} as Record<string, any>
    )
  }
  const getColumnElIndex = (children: T[], child: RendererNode | null) => {
    return Array.prototype.indexOf.call(children, child)
  }

  const updateColumnOrder = () => {
    owner.value.store.commit('updateColumnOrder', instance.columnConfig.value)
  }

  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    updateColumnOrder,
  }
}

export default useRender
