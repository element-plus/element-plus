import {
  defineComponent,
  ref,
  computed,
  getCurrentInstance,
  h,
  onBeforeMount,
  onMounted,
  onUnmounted,
} from 'vue'
import ElCheckbox from '@element-plus/checkbox'
import { isFragment, isTemplate } from '@element-plus/utils/vnode'
import { isArray } from '@element-plus/utils/util'
import { cellStarts } from '../config'
import { mergeOptions, compose } from '../util'
import { TableColumnCtx, TableColumn } from '../table.type'
import useWatcher from './watcher-helper'
import useRender from './render-helper'

import type { VNode, VNodeChild, Component } from 'vue'

const HIDDEN_CLM_KLS = 'el-column__hidden-column'
const HIDDEN_CLM_GRP_KLS = 'el-column__hidden-column-group'

const buildColumnStructure = (vnodes: VNodeChild) => {
  const children = []

  if (isArray(vnodes)) {
    // resume here, if the current node is an array, then we loop the array.
    // otherwise we check if the current vnode is ElTableColumn, if it is,
    // then we go through the entire tree,
    // otherwise we don't
    vnodes.map(c => {
      if (isFragment(c) || isTemplate(c)) {
        children.push(
          ...buildColumnStructure((c as VNode).children as VNodeChild),
        )
      } else if (((c as VNode).type as Component)?.name === 'ElTableColumn'){
        c = c as VNode
        if ((c as VNode).children !== null) {
          // since vue did not expose the type declaration of RawSlots we had to covert it to any
          children.push(
            h('div',
              {
                class: HIDDEN_CLM_GRP_KLS,
              },
              buildColumnStructure((c.children as any).default())
            ),
          )

        } else {
          children.push(
            h('div', { class: HIDDEN_CLM_KLS }, []),
          )
        }
      }
    })
  }
  return children
}

let columnIdSeed = 1
export default defineComponent({
  name: 'ElTableColumn',
  components: {
    ElCheckbox,
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {
      type: [Object, Number, String],
      default: () => {
        return {}
      },
    },
    minWidth: {
      type: [Object, Number, String],
      default: () => {
        return {}
      },
    },
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false,
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true,
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true,
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default () {
        return ['ascending', 'descending', null]
      },
      validator (val: unknown[]) {
        return val.every(
          (order: string) =>
            ['ascending', 'descending', null].indexOf(order) > -1,
        )
      },
    },
  },
  setup (prop, { slots }) {
    const instance = getCurrentInstance() as TableColumn
    const columnConfig = ref<Partial<TableColumnCtx>>({})
    const props = (prop as unknown) as TableColumnCtx
    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.tableId) {
        parent = parent.parent
      }
      return parent
    })

    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
      owner,
      props,
    )
    const {
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign,
    } = useRender(props, slots, owner)

    // local variable indicates whether the current column is sub

    const parent = columnOrTableParent.value
    const columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++
    const isSubColumn = owner.value !== parent

    // local variable ends

    onBeforeMount(() => {

      const type = props.type || 'default'
      const sortable = props.sortable === '' ? true : props.sortable
      const defaults = {
        ...cellStarts[type],
        id: columnId,
        type,
        property: props.prop || props.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip:
          props.showOverflowTooltip || props.showTooltipWhenOverflow,
        // filter 相关属性
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: '',
        isColumnGroup: false,
        filterOpened: false,
        // sort 相关属性
        sortable,
        // index 列
        index: props.index,
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
      ]

      let column = getPropsData(basicProps, sortProps, selectProps, filterProps)

      column = mergeOptions(defaults, column)
      // 注意 compose 中函数执行的顺序是从右到左
      const chains = compose(
        setColumnRenders,
        setColumnWidth,
        setColumnForcedProps,
      )
      column = chains(column)
      columnConfig.value = column

      // 注册 watcher
      registerNormalWatchers()
      registerComplexWatchers()
    })
    onMounted(() => {
      const parent = columnOrTableParent.value

      const children = isSubColumn
        ? parent.vnode.el.children
        : parent.refs.hiddenColumns?.children

      const columnIndex = getColumnElIndex(children || [], instance.vnode.el)

      columnIndex > -1 &&
        owner.value.store.commit(
          'insertColumn',
          columnConfig.value,
          isSubColumn ? parent.columnConfig.value : null,
        )
    })

    onUnmounted(() => {
      owner.value.store.commit(
        'removeColumn',
        columnConfig.value,
        isSubColumn ? parent.columnConfig.value : null,
      )
    })
    instance.columnId = columnId

    // eslint-disable-next-line
    instance.columnConfig = columnConfig
    return {
      columnId,
    }
  },
  render () {
    // let children = []
    // console.log(this.columnId)
    // try {
    const renderDefault = this.$slots.default?.({ row: {}, column: {}, $index: -1 })
    // exhaustively loop through the entire template to build up the structure.
    // if (renderDefault instanceof Array) {
    //   renderDefault.map((c) => {
    //     if (isTemplate(c) || isFragment(c)) {

    //     }
    //   })
      // for (const childNode of renderDefault) {
      //   if
      //   if (childNode.type?.name === 'ElTableColumn') {
      //     children.push(childNode)
      //   } else if (childNode.type === Fragment && childNode.children instanceof Array) {
      //     renderDefault.push(...childNode.children)
      //   }
      // }
    // }
    // } catch {
    //   children = []
    // }

    // renderDefault.map(c => {
    //   // if (c.type.name === 'ElTableColumn') {
    //   //   children.push(h('div', {}, []))
    //   // }
    // })
    const result = buildColumnStructure(renderDefault)
    console.log(result)
    return result
  },
})
