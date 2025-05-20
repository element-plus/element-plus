// @ts-nocheck
import {
  Comment,
  computed,
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
import { parseMinWidth, parseWidth } from '../util'
import type { ComputedRef } from 'vue'
import type { TableColumn, TableColumnCtx } from './defaults'

function useRender<T>(
  props: TableColumnCtx<T>,
  slots,
  owner: ComputedRef<any>
) {
  const instance = getCurrentInstance() as TableColumn<T>
  const columnId = ref('')
  const isSubColumn = ref(false)
  const realAlign = ref<string>()
  const realHeaderAlign = ref<string>()
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
  const columnOrTableParent = computed(() => {
    let parent: any = instance.vnode.vParent || instance.parent
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent
    }
    return parent
  })
  const hasTreeColumn = computed<boolean>(() => {
    const { store } = instance.parent
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
    const source = cellForced[type] || {}
    Object.keys(source).forEach((prop) => {
      const value = source[prop]
      if (prop !== 'className' && !isUndefined(value)) {
        column[prop] = value
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

  const checkSubColumn = (children: TableColumn<T> | TableColumn<T>[]) => {
    if (isArray(children)) {
      children.forEach((child) => check(child))
    } else {
      check(children)
    }
    function check(item: TableColumn<T>) {
      if (item?.type?.name === 'ElTableColumn') {
        item.vParent = instance
      }
    }
  }
  const setColumnRenders = (column: TableColumnCtx<T>) => {
    // renderHeader 属性不推荐使用。
    if (props.renderHeader) {
      debugWarn(
        'TableColumn',
        'Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.'
      )
    } else if (column.type !== 'selection') {
      column.renderHeader = (scope) => {
        // help render
        instance.columnConfig.value['label']
        return renderSlot(slots, 'header', scope, () => [column.label])
      }
    }

    if (slots['filter-icon']) {
      column.renderFilterIcon = (scope) => {
        return renderSlot(slots, 'filter-icon', scope)
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
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default
      }
    } else {
      originRenderCell = originRenderCell || defaultRenderCell
      // 对 renderCell 进行包装
      column.renderCell = (data) => {
        let children = null
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
  const getPropsData = (...propsKey: unknown[]) => {
    return propsKey.reduce((prev, cur) => {
      if (isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key]
        })
      }
      return prev
    }, {})
  }
  const getColumnElIndex = (children, child) => {
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
