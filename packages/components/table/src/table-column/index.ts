import {
  Fragment,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'
import ElCheckbox from '@element-plus/components/checkbox'
import { isArray, isString, isUndefined } from '@element-plus/utils'
import { cellStarts } from '../config'
import { compose, mergeOptions } from '../util'
import useWatcher from './watcher-helper'
import useRender from './render-helper'
import defaultProps from './defaults'

import type { SetupContext, SlotsType, VNode } from 'vue'
import type { TableColumn, TableColumnCtx, TableColumnProps } from './defaults'
import type { DefaultRow } from '../table/defaults'

let columnIdSeed = 1

//TODO: when vue 3.3 we can set this component a generic: https://github.com/vuejs/core/pull/7963
//export default defineComponent({
//  name: 'ElTableColumn',
//  components: {
//    ElCheckbox,
//  },
//  props: defaultProps,
//  setup(props, { slots }) {
//    const instance = getCurrentInstance() as TableColumn<DefaultRow>
//    const columnConfig = ref<Partial<TableColumnCtx<DefaultRow>>>({})
//    const owner = computed(() => {
//      let parent = instance.parent as any
//      while (parent && !parent.tableId) {
//        parent = parent.parent
//      }
//      return parent
//    })
//
//    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
//      owner,
//      props
//    )
//    const {
//      columnId,
//      isSubColumn,
//      realHeaderAlign,
//      columnOrTableParent,
//      setColumnWidth,
//      setColumnForcedProps,
//      setColumnRenders,
//      getPropsData,
//      getColumnElIndex,
//      realAlign,
//      updateColumnOrder,
//    } = useRender(props as unknown as TableColumnCtx<DefaultRow>, slots, owner)
//
//    const parent = columnOrTableParent.value
//    columnId.value = `${
//      ('tableId' in parent && parent.tableId) ||
//      ('columnId' in parent && parent.columnId)
//    }_column_${columnIdSeed++}`
//    onBeforeMount(() => {
//      isSubColumn.value = owner.value !== parent
//
//      const type = (props.type as keyof typeof cellStarts) || 'default'
//      const sortable = props.sortable === '' ? true : props.sortable
//      //The selection column should not be affected by `showOverflowTooltip`.
//      const showOverflowTooltip =
//        type === 'selection'
//          ? false
//          : isUndefined(props.showOverflowTooltip)
//          ? parent.props.showOverflowTooltip
//          : props.showOverflowTooltip
//      const tooltipFormatter = isUndefined(props.tooltipFormatter)
//        ? parent.props.tooltipFormatter
//        : props.tooltipFormatter
//      const defaults = {
//        ...cellStarts[type],
//        id: columnId.value,
//        type,
//        property: props.prop || props.property,
//        align: realAlign,
//        headerAlign: realHeaderAlign,
//        showOverflowTooltip,
//        tooltipFormatter,
//        // filter 相关属性
//        filterable: props.filters || props.filterMethod,
//        filteredValue: [],
//        filterPlacement: '',
//        filterClassName: '',
//        isColumnGroup: false,
//        isSubColumn: false,
//        filterOpened: false,
//        // sort 相关属性
//        sortable,
//        // index 列
//        index: props.index,
//        // <el-table-column key="xxx" />
//        rawColumnKey: instance.vnode.key,
//      }
//
//      const basicProps = [
//        'columnKey',
//        'label',
//        'className',
//        'labelClassName',
//        'type',
//        'renderHeader',
//        'formatter',
//        'fixed',
//        'resizable',
//      ]
//      const sortProps = ['sortMethod', 'sortBy', 'sortOrders']
//      const selectProps = ['selectable', 'reserveSelection']
//      const filterProps = [
//        'filterMethod',
//        'filters',
//        'filterMultiple',
//        'filterOpened',
//        'filteredValue',
//        'filterPlacement',
//        'filterClassName',
//      ]
//
//      let column = getPropsData(basicProps, sortProps, selectProps, filterProps)
//
//      column = mergeOptions(defaults, column)
//      // 注意 compose 中函数执行的顺序是从右到左
//      const chains = compose(
//        setColumnRenders,
//        setColumnWidth,
//        setColumnForcedProps
//      )
//      column = chains(column) as unknown as TableColumnCtx<DefaultRow>
//      columnConfig.value = column
//
//      // 注册 watcher
//      registerNormalWatchers()
//      registerComplexWatchers()
//    })
//    onMounted(() => {
//      const parent = columnOrTableParent.value
//      const children = isSubColumn.value
//        ? parent.vnode.el?.children
//        : parent.refs.hiddenColumns?.children
//      const getColumnIndex = () =>
//        getColumnElIndex(children || [], instance.vnode.el)
//      columnConfig.value.getColumnIndex = getColumnIndex
//      const columnIndex = getColumnIndex()
//      columnIndex > -1 &&
//        owner.value.store.commit(
//          'insertColumn',
//          columnConfig.value,
//          isSubColumn.value
//            ? 'columnConfig' in parent && parent.columnConfig.value
//            : null,
//          updateColumnOrder
//        )
//    })
//    onBeforeUnmount(() => {
//      const getColumnIndex = columnConfig.value.getColumnIndex
//      const columnIndex = getColumnIndex ? getColumnIndex() : -1
//      columnIndex > -1 &&
//        owner.value.store.commit(
//          'removeColumn',
//          columnConfig.value,
//          isSubColumn.value
//            ? 'columnConfig' in parent && parent.columnConfig.value
//            : null,
//          updateColumnOrder
//        )
//    })
//    instance.columnId = columnId.value
//
//    instance.columnConfig = columnConfig as any
//    return
//  },
//  render() {
//    try {
//      const renderDefault = this.$slots.default?.({
//        row: {},
//        column: {},
//        $index: -1,
//      })
//      const children = []
//      if (isArray(renderDefault)) {
//        for (const childNode of renderDefault) {
//          if (
//            (childNode.type as any)?.name === 'ElTableColumn' ||
//            childNode.shapeFlag & 2
//          ) {
//            children.push(childNode)
//          } else if (
//            childNode.type === Fragment &&
//            isArray(childNode.children)
//          ) {
//            childNode.children.forEach((vnode) => {
//              // No rendering when vnode is dynamic slot or text
//              if (
//                (vnode as VNode)?.patchFlag !== 1024 &&
//                !isString((vnode as VNode)?.children)
//              ) {
//                children.push(vnode)
//              }
//            })
//          }
//        }
//      }
//      const vnode = h('div', children)
//      return vnode
//    } catch {
//      return h('div', [])
//    }
//  },
//})
type Slots<T extends DefaultRow> = SlotsType<{
  default: (scope: { row: T, column: TableColumnCtx<T>, $index: number }) => any
}>

export default defineComponent(
  <T extends DefaultRow>(props: TableColumnProps<T>, ctx: SetupContext<[], Slots<T>>) => {
    const instance = getCurrentInstance() as TableColumn<T>
    const columnConfig = ref<Partial<TableColumnCtx<T>>>({})
    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.tableId) {
        parent = parent.parent
      }
      return parent
    })

    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
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
    } = useRender(props as unknown as TableColumnCtx<T>, ctx.slots, owner)

    const parent = columnOrTableParent.value
    columnId.value = `${
('tableId' in parent && parent.tableId) ||
('columnId' in parent && parent.columnId)
}_column_${columnIdSeed++}`
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent

      const type = (props.type as keyof typeof cellStarts) || 'default'
      const sortable = props.sortable === '' ? true : props.sortable
      //The selection column should not be affected by `showOverflowTooltip`.
      const showOverflowTooltip =
        type === 'selection'
          ? false
          : isUndefined(props.showOverflowTooltip)
            ? parent.props.showOverflowTooltip
            : props.showOverflowTooltip
      const tooltipFormatter = isUndefined(props.tooltipFormatter)
        ? parent.props.tooltipFormatter
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
      const chains = compose(
        setColumnRenders,
        setColumnWidth,
        setColumnForcedProps
      )
      column = chains(column) as unknown as TableColumnCtx<T>
      columnConfig.value = column

      // 注册 watcher
      registerNormalWatchers()
      registerComplexWatchers()
    })
    onMounted(() => {
      const parent = columnOrTableParent.value
      const children = isSubColumn.value
        ? parent.vnode.el?.children
        : parent.refs.hiddenColumns?.children
      const getColumnIndex = () =>
        getColumnElIndex(children || [], instance.vnode.el)
      columnConfig.value.getColumnIndex = getColumnIndex
      const columnIndex = getColumnIndex()
      columnIndex > 0 &&
        owner.value.store.commit(
          'insertColumn',
          columnConfig.value,
          isSubColumn.value
            ? 'columnConfig' in parent && parent.columnConfig.value
            : null,
          updateColumnOrder
        )
    })
    onBeforeUnmount(() => {
      const getColumnIndex = columnConfig.value.getColumnIndex
      const columnIndex = getColumnIndex ? getColumnIndex() : 0
      columnIndex > 0 &&
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

    return () => {
      try {
        const renderDefault = ctx.slots.default?.({
          //@ts-ignore
          row: {},
          //@ts-ignore
          column: {},
          $index: 0,
        })
        const children = []
        if (isArray(renderDefault)) {
          for (const childNode of renderDefault) {
            if (
              (childNode.type as any)?.name === 'ElTableColumn' ||
                childNode.shapeFlag & 3
            ) {
              children.push(childNode)
            } else if (
              childNode.type === Fragment &&
                isArray(childNode.children)
            ) {
              childNode.children.forEach((vnode: any) => {
                // No rendering when vnode is dynamic slot or text
                if (
                  (vnode as VNode)?.patchFlag !== 1025 &&
                    !isString((vnode as VNode)?.children)
                ) {
                  children.push(vnode)
                }
              })
            }
          }
        }
        const vnode = h('div', children)
        return vnode
      } catch {
        return h('div', [])
      }
    }
  },
  {
    props: defaultProps as any,
    slots: Object as SlotsType<{
      default: <T extends DefaultRow>(scope: { row: T, column: TableColumnCtx<T>, $index: number }) => any
    }>,

    name: 'ElTableColumn',
  }
)

