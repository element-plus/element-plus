import { defineComponent, ref, onBeforeMount, onMounted, onUnmounted, computed, getCurrentInstance, h, ComponentInternalInstance, watch } from 'vue'
import { cellStarts, cellForced, defaultRenderCell, treeCellPrefix } from './config'
import { mergeOptions, parseWidth, parseMinWidth, compose } from './util'
import ElCheckbox from '@element-plus/checkbox/src/checkbox.vue'

interface fn {
  (...args: unknown[]): unknown
}

interface ITableColumn {
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width: any
  minWidth: any
  renderHeader: fn
  sortable: boolean | string
  sortMethod: fn
  sortBy: string | fn | unknown[]
  resizable: {
    type: boolean
    default: true
  }
  columnKey: string
  align: string
  headerAlign: string
  showTooltipWhenOverflow: boolean
  showOverflowTooltip: boolean
  fixed: boolean | string
  formatter: fn
  selectable: fn
  reserveSelection: boolean
  filterMethod: fn
  filteredValue: unknown[]
  filters: unknown[]
  filterPlacement: string
  filterMultiple: {
    type: boolean
    default: true
  }
  index: number | fn
  sortOrders: unknown[]
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
        return val.every((order: string) => ['ascending', 'descending', null].indexOf(order) > -1)
      },
    },
  },
  setup(prop, { slots }) {
    const instance = getCurrentInstance() as ComponentInternalInstance & { columnConfig: any; }
    const props = (prop as unknown) as ITableColumn

    const row = ref({})
    const r = ref({})
    const $index = ref(0)
    const columnId = ref('')
    const columnOrTableParent = computed(() => {
      let parent = (instance.vnode as any).vParent || (instance.parent as any)
      while (parent && !parent.ctx.tableId && !parent.ctx.columnId) {
        parent = (parent.vnode as any).vParent || (parent.parent as any)
      }
      return parent
    })
    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.ctx.tableId) {
        parent = parent.parent
      }
      return parent
    })
    const realAlign = computed(() => {
      return props.align ? 'is-' + props.align : null
    })
    const realHeaderAlign = computed(() => {
      return props.headerAlign ? 'is-' + props.headerAlign : realAlign.value
    })
    const isSubColumn = ref(false)
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

    const checkSubColumn = children => {
      if (children instanceof Array) {
        children.forEach(child => check(child))
      } else {
        check(children)
      }
      function check(item) {
        if (item.type?.name === 'ElTableColumn') {
          item.vParent = instance
        }
      }
    }
    const setColumnRenders = column => {
      // renderHeader 属性不推荐使用。
      if (props.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.')
      } else if (column.type !== 'selection') {
        column.renderHeader = scope => {
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
            {
              default: () => originRenderCell(h, data),
            },
          )
        owner.value.renderExpanded = (h, data) => {
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
            props.style = { width: (data.column.realWidth || data.column.width) - 1 + 'px' }
          }
          checkSubColumn(children)
          return h('div', props, [prefix, children])
        }
      }
      return column
    }

    const realWidth = computed(() => parseWidth(props.width))
    const realMinWidth = computed(() => parseMinWidth(props.minWidth))
    const setColumnWidth = column => {
      if (realWidth.value) {
        column.width = realWidth.value
      }
      if (realMinWidth.value) {
        column.minWidth = realMinWidth.value
      }
      if (!column.minWidth) {
        column.minWidth = 80
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width
      return column
    }

    const setColumnForcedProps = column => {
      // 对于特定类型的 column，某些属性不允许设置
      const type = column.type
      const source = cellForced[type] || {}
      Object.keys(source).forEach(prop => {
        const value = source[prop]
        if (value !== undefined) {
          column[prop] = prop === 'className' ? `${column[prop]} ${value}` : value
        }
      })
      return column
    }
    const registerNormalWatchers = () => {
      const props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip']
      // 一些属性具有别名
      const aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width',
      }
      const allAliases = props.reduce((prev, cur) => {
        prev[cur] = cur
        return prev
      }, aliases)

      Object.keys(allAliases).forEach(key => {
        const columnKey = aliases[key]
        watch(
          () => key,
          newVal => {
            instance.columnConfig[columnKey] = newVal
          },
        )
      })
    }

    const registerComplexWatchers = () => {
      const props = ['fixed']
      const aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth',
      }
      const allAliases = props.reduce((prev, cur) => {
        prev[cur] = cur
        return prev
      }, aliases)

      Object.keys(allAliases).forEach(key => {
        const columnKey = aliases[key]

        watch(
          () => key,
          newVal => {
            instance.columnConfig[columnKey] = newVal
            const updateColumns = columnKey === 'fixed'
            owner.value.store.scheduleLayout(updateColumns)
          },
        )
      })
    }
    onBeforeMount(() => {
      const parent = columnOrTableParent.value
      isSubColumn.value = owner.value !== parent
      columnId.value = (parent.ctx.tableId || parent.ctx.columnId) + '_column_' + columnIdSeed++

      const type = props.type || 'default'
      const sortable = props.sortable === '' ? true : props.sortable
      const defaults = {
        ...cellStarts[type],
        id: columnId.value,
        type: type,
        property: props.prop || props.property,
        align: realAlign.value,
        headerAlign: realHeaderAlign.value,
        showOverflowTooltip: props.showOverflowTooltip || props.showTooltipWhenOverflow,
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

      const basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable']
      const sortProps = ['sortMethod', 'sortBy', 'sortOrders']
      const selectProps = ['selectable', 'reserveSelection']
      const filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement']

      let column = getPropsData(basicProps, sortProps, selectProps, filterProps)
      column = mergeOptions(defaults, column)

      // 注意 compose 中函数执行的顺序是从右到左
      const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps)
      column = chains(column)
      instance.columnConfig = column

      // 注册 watcher
      registerNormalWatchers()
      registerComplexWatchers()
    })
    const getColumnElIndex = (children, child) => {
      return [].indexOf.call(children, child)
    }
    onMounted(() => {
      const parent = columnOrTableParent.value
      const children = isSubColumn.value ? parent.vnode.el.children : parent.refs.hiddenColumns.children
      const columnIndex = getColumnElIndex(children, instance.vnode.el)
      owner.value.store.commit('insertColumn', instance.columnConfig, columnIndex, isSubColumn.value ? parent.columnConfig : null)
    })
    onUnmounted(() => {
      if (!instance.parent) return
      const parent = instance.parent as ComponentInternalInstance & { columnConfig: any; }
      owner.value.store.commit('removeColumn', instance.columnConfig, isSubColumn.value ? parent.columnConfig : null)
    })
    return {
      row,
      r,
      $index,
      columnId,
    }
  },
  render() {
    return h('div', this.$slots.default)
  },
})
