<template>
  <TableColumnRenderer />
</template>

<script lang="ts" setup generic="T extends DefaultRow = DefaultRow">
import {
  Fragment,
  computed,
  getCurrentInstance,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'
import { useId } from '@element-plus/hooks'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { isArray, isString, isUndefined } from '@element-plus/utils'
import { cellStarts } from '../config'
import { compose, createTableColumnId, mergeOptions } from '../util'
import useWatcher from './watcher-helper'
import useRender from './render-helper'

import type { VNode } from 'vue'
import type { TableColumn, TableColumnCtx, TableColumnProps } from './defaults'
import type { DefaultRow } from '../table/defaults'

defineOptions({
  name: 'ElTableColumn',
})

const props = withDefaults(defineProps<TableColumnProps<T>>(), {
  type: 'default',
  width: '',
  minWidth: '',
  sortable: false,
  resizable: true,
  showOverflowTooltip: undefined,
  filterMultiple: true,
  sortOrders: () => ['ascending', 'descending', null],
})
const slots = defineSlots<{
  default?: (props: {
    row: T
    column: TableColumnCtx<T>
    $index: number
  }) => any
  header?: (props: { column: TableColumnCtx<T>; $index: number }) => any
  expand?: (props: { expanded: boolean; expandable: boolean }) => any
  'filter-icon'?: (props: { filterOpened: boolean }) => any
}>()

const instance = getCurrentInstance() as TableColumn<T>
const globalConfig = useGlobalConfig('table')
const columnConfig = ref<Partial<TableColumnCtx<T>>>({})
const owner = computed(() => {
  let parent = instance.parent as any
  while (parent && !parent.tableId) {
    parent = parent.parent
  }
  return parent
})

const { registerNormalWatchers, registerComplexWatchers } = useWatcher<T>(
  owner,
  props
)
const {
  columnId,
  isSubColumn,
  realHeaderAlign,
  columnOrTableParent,
  setColumnWidth,
  setColumnForcedProps,
  setColumnRenders,
  getPropsData,
  getColumnElIndex,
  realAlign,
  updateColumnOrder,
} = useRender<T>(props as unknown as TableColumnCtx<T>, slots, owner)

const parent = columnOrTableParent.value
const parentId = 'tableId' in parent ? parent.tableId : parent.columnId
columnId.value = createTableColumnId(parentId, useId().value)

isSubColumn.value = owner.value !== parent

const type = (props.type as keyof typeof cellStarts) || 'default'
const sortable = props.sortable === '' ? true : props.sortable
//The selection column should not be affected by `showOverflowTooltip`.
const showOverflowTooltip =
  type === 'selection'
    ? false
    : isUndefined(props.showOverflowTooltip)
      ? (parent.props.showOverflowTooltip ??
        globalConfig.value?.showOverflowTooltip)
      : props.showOverflowTooltip
const tooltipFormatter = isUndefined(props.tooltipFormatter)
  ? (parent.props.tooltipFormatter ?? globalConfig.value?.tooltipFormatter)
  : props.tooltipFormatter
const defaults = {
  ...cellStarts[type],
  id: columnId.value,
  type,
  property: props.prop || props.property,
  align: realAlign,
  headerAlign: realHeaderAlign,
  showOverflowTooltip,
  tooltipFormatter,
  // filter 相关属性
  filterable: props.filters || props.filterMethod,
  filteredValue: [],
  filterPlacement: '',
  filterClassName: '',
  isColumnGroup: false,
  isSubColumn: false,
  filterOpened: false,
  // sort 相关属性
  sortable,
  // index 列
  index: props.index,
  // <el-table-column key="xxx" />
  rawColumnKey: instance.vnode.key,
}

const basicProps = [
  'columnKey',
  'label',
  'className',
  'labelClassName',
  'type',
  'renderHeader',
  'formatter',
  'fixed',
  'resizable',
]
const sortProps = ['sortMethod', 'sortBy', 'sortOrders']
const selectProps = ['selectable', 'reserveSelection']
const filterProps = [
  'filterMethod',
  'filters',
  'filterMultiple',
  'filterOpened',
  'filteredValue',
  'filterPlacement',
  'filterClassName',
]

let column = getPropsData(basicProps, sortProps, selectProps, filterProps)

column = mergeOptions(defaults, column)
// 注意 compose 中函数执行的顺序是从右到左
const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps)
column = chains(column) as unknown as TableColumnCtx<T>
columnConfig.value = column

// 注册 watcher
registerNormalWatchers()
registerComplexWatchers()

const getColumnIndex = () => {
  const children = isSubColumn.value
    ? parent.vnode.el?.children
    : parent.refs.hiddenColumns?.children
  return getColumnElIndex(children || [], instance.vnode.el)
}
columnConfig.value.getColumnIndex = getColumnIndex
owner.value.store.commit(
  'insertColumn',
  columnConfig.value,
  isSubColumn.value
    ? 'columnConfig' in parent && parent.columnConfig.value
    : null,
  updateColumnOrder
)

onMounted(() => {
  updateColumnOrder()
})

onBeforeUnmount(() => {
  owner.value.store.commit(
    'removeColumn',
    columnConfig.value,
    isSubColumn.value
      ? 'columnConfig' in parent && parent.columnConfig.value
      : null,
    updateColumnOrder
  )
})

instance.columnId = columnId.value

instance.columnConfig = columnConfig as any

const TableColumnRenderer = () => {
  try {
    const renderDefault = slots.default?.({
      row: {} as T,
      column: {} as TableColumnCtx<T>,
      $index: -1,
    })
    const children = []
    if (isArray(renderDefault)) {
      for (const childNode of renderDefault) {
        if (
          (childNode.type as any)?.name === 'ElTableColumn' ||
          childNode.shapeFlag & 2
        ) {
          children.push(childNode)
        } else if (childNode.type === Fragment && isArray(childNode.children)) {
          childNode.children.forEach((vnode: VNode) => {
            // No rendering when vnode is dynamic slot or text
            if (
              (vnode as VNode)?.patchFlag !== 1024 &&
              !isString((vnode as VNode)?.children)
            ) {
              children.push(vnode)
            }
          })
        }
      }
    }
    return h('div', children)
  } catch {
    return h('div', [])
  }
}
</script>
