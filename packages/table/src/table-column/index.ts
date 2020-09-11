import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onUnmounted,
  computed,
  getCurrentInstance,
  h,
} from 'vue'
import { cellStarts } from '../config'
import { mergeOptions, compose } from '../util'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'
import { TableColumn } from '../table'
import useWatcher from './watcher-helper'
import useRender from './render-helper'

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
    width: {},
    minWidth: {},
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
      default() {
        return ['ascending', 'descending', null]
      },
      validator(val: unknown[]) {
        return val.every(
          (order: string) =>
            ['ascending', 'descending', null].indexOf(order) > -1,
        )
      },
    },
  },
  setup(prop, { slots }) {
    const instance = getCurrentInstance()
    const columnConfig = ref({})
    const props = (prop as unknown) as TableColumn

    const row = ref({})
    const r = ref({})
    const $index = ref(0)
    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.ctx.tableId) {
        parent = parent.parent
      }
      return parent
    })

    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
      owner,
      props,
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
    } = useRender(props, slots, owner)

    onBeforeMount(() => {
      const parent = columnOrTableParent.value
      isSubColumn.value = owner.value !== parent
      columnId.value =
        (parent.ctx.tableId || parent.ctx.columnId) +
        '_column_' +
        columnIdSeed++

      const type = props.type || 'default'
      const sortable = props.sortable === '' ? true : props.sortable
      const defaults = {
        ...cellStarts[type],
        id: columnId.value,
        type: type,
        property: props.prop || props.property,
        align: realAlign.value,
        headerAlign: realHeaderAlign.value,
        showOverflowTooltip:
          props.showOverflowTooltip || props.showTooltipWhenOverflow,
        // filter 相关属性
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: '',
        isColumnGroup: false,
        filterOpened: false,
        // sort 相关属性
        sortable: sortable,
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

      let column = getPropsData(
        basicProps,
        sortProps,
        selectProps,
        filterProps,
      )

      column = mergeOptions(defaults, column)

      // 注意 compose 中函数执行的顺序是从右到左
      const chains = compose(
        setColumnRenders,
        setColumnWidth,
        setColumnForcedProps,
      )
      column = chains(column)
      // instance.columnConfig = column
      columnConfig.value = column

      // 注册 watcher
      registerNormalWatchers()
      registerComplexWatchers()
    })
    onMounted(() => {
      const parent = columnOrTableParent.value
      const children = isSubColumn.value
        ? parent.vnode.el.children
        : parent.refs.hiddenColumns.children
      let columnIndex = getColumnElIndex(children, instance.vnode.el)
      if (columnIndex < 0 && isSubColumn.value) {
        const children = parent.slots.default?.() || []
        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          let ifMatch = true
          for (const key in child.props) {
            if (
              !instance.props.hasOwnProperty(key) ||
              child.props[key] !== instance.props[key]
            ) {
              ifMatch = false
              break
            }
          }
          if (ifMatch) {
            columnIndex = i
          }
        }
      }
      owner.value.store.commit(
        'insertColumn',
        columnConfig.value,
        columnIndex,
        isSubColumn.value ? parent.ctx.columnConfig : null,
      )
    })
    onUnmounted(() => {
      if (!instance.parent) return
      const parent = (instance.parent as unknown) as TableColumn
      owner.value.store.commit(
        'removeColumn',
        columnConfig.value,
        isSubColumn.value ? parent.ctx.columnConfig : null,
      )
    })
    return {
      row,
      r,
      $index,
      columnId,
      columnConfig,
    }
  },
  render() {
    return h('div', this.$slots.default)
  },
})
