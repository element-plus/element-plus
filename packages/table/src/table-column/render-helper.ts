import {
  getCurrentInstance,
  h,
  ComputedRef,
  ref,
  computed,
  watch,
} from 'vue'
import { isUndefined } from '@element-plus/utils/util'
import { cellForced, defaultRenderCell, treeCellPrefix } from '../config'
import { parseWidth, parseMinWidth } from '../util'
import { TableColumn, TableColumnCtx } from '../table.type'
import cloneDeep from 'lodash/cloneDeep'

function useRender(props: TableColumnCtx, slots, owner: ComputedRef<any>) {
  const instance = (getCurrentInstance() as unknown) as TableColumn
  const realAlign = ref<string>()
  const realHeaderAlign = ref<string>()

  const columnOrTableParent = computed(() => {
    let parent = (instance.vnode as any).vParent || (instance.parent as any)
    while (parent && !parent.tableId && !parent.columnId) {
      parent = (parent.vnode as any).vParent || (parent.parent as any)
    }
    return parent
  })

  const realWidth = parseWidth(props.width)
  const realMinWidth = parseMinWidth(props.minWidth)
  const setColumnWidth = column => {
    if (realWidth) column.width = realWidth

    column.minWidth = realMinWidth ? realMinWidth : 80
    column.realWidth =
      isUndefined(column.width) ? column.minWidth : column.width
    return column
  }
  const setColumnForcedProps = column => {
    // 对于特定类型的 column，某些属性不允许设置
    const type = column.type
    const source = cellForced[type] || {}
    Object.keys(source).forEach(prop => {
      const value = source[prop]
      if (!isUndefined(value)) {
        column[prop] = prop === 'className' ? `${column[prop]} ${value}` : value
      }
    })
    return column
  }

  const checkSubColumn = children => {
    if (children instanceof Array) {
      children.forEach(child => check(child))
    } else {
      check(children)
    }
    function check(item) {
      if (item?.type?.name === 'ElTableColumn') {
        item.vParent = instance
      }
    }
  }
  const setColumnRenders = column => {
    // renderHeader 属性不推荐使用。
    if (props.renderHeader) {
      console.warn(
        '[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.',
      )
    } else if (column.type !== 'selection') {
      column.renderHeader = scope => {
        // help render
        instance.columnConfig.value['label']
        const renderHeader = slots.header
        return renderHeader ? renderHeader(scope) : column.label
      }
    }

    let originRenderCell = column.renderCell
    // TODO: 这里的实现调整
    if (column.type === 'expand') {
      // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
      column.renderCell = data =>
        h(
          'div',
          {
            class: 'cell',
          },
          [originRenderCell(data)],
        )
      owner.value.renderExpanded = data => {
        return slots.default ? slots.default(data) : slots.default
      }
    } else {
      originRenderCell = originRenderCell || defaultRenderCell
      // 对 renderCell 进行包装
      column.renderCell = data => {
        let children = null
        if (slots.default) {
          children = slots.default(data)
        } else {
          children = originRenderCell(data)
        }
        const prefix = treeCellPrefix(data)
        const props = {
          class: 'cell',
          style: {},
        }
        if (column.showOverflowTooltip) {
          props.class += ' el-tooltip'
          props.style = {
            width: (data.column.realWidth || data.column.width) - 1 + 'px',
          }
        }
        checkSubColumn(children)
        return h('div', props, [prefix, cloneDeep(children)])
      }
    }
    return column
  }
  const getPropsData = (...propsKey: unknown[]) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach(key => {
          prev[key] = props[key]
        })
      }
      return prev
    }, {})
  }
  const getColumnElIndex = <T = any>(children: T[], child: T) => {
    return Array.from(children).indexOf(child)
  }

  // watchers
  watch(
    () => props.align,
    val => {
      realAlign.value = val ? `is-${props.align}` : null
    },
    { immediate: true },
  )

  watch(
    () => props.headerAlign,
    val => {
      realHeaderAlign.value = val ? `is-${props.headerAlign}` : realAlign.value
    },
    { immediate: true },
  )

  return {
    realAlign,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
  }
}

export default useRender
