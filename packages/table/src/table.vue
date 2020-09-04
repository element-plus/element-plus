<template>
  <div
    :class="[{
      'el-table--fit': fit,
      'el-table--striped': stripe,
      'el-table--border': border || isGroup,
      'el-table--hidden': isHidden,
      'el-table--group': isGroup,
      'el-table--fluid-height': maxHeight,
      'el-table--scrollable-x': layout.scrollX.value,
      'el-table--scrollable-y': layout.scrollY.value,
      'el-table--enable-row-hover': !store.states.isComplex.value,
      'el-table--enable-row-transition': (store.states.data.value || []).length !== 0 && (store.states.data.value || []).length < 100
    }, tableSize ? `el-table--${ tableSize }` : '']"
    class="el-table"
    @mouseleave="handleMouseLeave()"
  >
    <div ref="hiddenColumns" class="hidden-columns">
      <slot></slot>
    </div>
    <div
      v-if="showHeader"
      ref="headerWrapper"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__header-wrapper"
    >
      <table-header
        ref="tableHeader"
        :border="border"
        :default-sort="defaultSort"
        :store="store"
        :style="{
          width: layout.bodyWidth.value ? layout.bodyWidth.value + 'px' : ''
        }"
      />
    </div>
    <div
      ref="bodyWrapper"
      :class="[layout.scrollX.value ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
      :style="[bodyHeight]"
      class="el-table__body-wrapper"
    >
      <table-body
        :context="context"
        :highlight="highlightCurrentRow"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :store="store"
        :stripe="stripe"
        :style="{
          width: bodyWidth
        }"
      />
      <div
        v-if="!data || data.length === 0"
        ref="emptyBlock"
        :style="emptyBlockStyle"
        class="el-table__empty-block"
      >
        <span class="el-table__empty-text">
          <slot name="empty">{{ emptyText || t('el.table.emptyText') }}</slot>
        </span>
      </div>
      <div v-if="$slots.append" ref="appendWrapper" class="el-table__append-wrapper">
        <slot name="append"></slot>
      </div>
    </div>
    <div
      v-if="showSummary"
      v-show="data && data.length > 0"
      ref="footerWrapper"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__footer-wrapper"
    >
      <table-footer
        :border="border"
        :default-sort="defaultSort"
        :store="store"
        :style="{
          width: layout.bodyWidth.value ? layout.bodyWidth.value + 'px' : ''
        }"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
      />
    </div>
    <div
      v-if="store.states.fixedColumns.value.length > 0"
      ref="fixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      :style="[{
                 width: layout.fixedWidth.value ? layout.fixedWidth.value + 'px' : ''
               },
               fixedHeight]"
      class="el-table__fixed"
    >
      <div v-if="showHeader" ref="fixedHeaderWrapper" class="el-table__fixed-header-wrapper">
        <table-header
          ref="fixedTableHeader"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
          fixed="left"
        />
      </div>
      <div
        ref="fixedBodyWrapper"
        :style="[{
                   top: layout.headerHeight.value + 'px'
                 },
                 fixedBodyHeight]"
        class="el-table__fixed-body-wrapper"
      >
        <table-body
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :store="store"
          :stripe="stripe"
          :style="{
            width: bodyWidth
          }"
          fixed="left"
        />
        <div v-if="$slots.append" :style="{ height: layout.appendHeight.value + 'px'}" class="el-table__append-gutter"></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        ref="fixedFooterWrapper"
        class="el-table__fixed-footer-wrapper"
      >
        <table-footer
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          fixed="left"
        />
      </div>
    </div>
    <div
      v-if="store.states.rightFixedColumns.value.length > 0"
      ref="rightFixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      :style="[{
                 width: layout.rightFixedWidth.value ? layout.rightFixedWidth.value + 'px' : '',
                 right: layout.scrollY.value ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
               },
               fixedHeight]"
      class="el-table__fixed-right"
    >
      <div v-if="showHeader" ref="rightFixedHeaderWrapper" class="el-table__fixed-header-wrapper">
        <table-header
          ref="rightFixedTableHeader"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
          fixed="right"
        />
      </div>
      <div
        ref="rightFixedBodyWrapper"
        :style="[
          {top: layout.headerHeight.value + 'px'},
          fixedBodyHeight
        ]"
        class="el-table__fixed-body-wrapper"
      >
        <table-body
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :store="store"
          :stripe="stripe"
          :style="{
            width: bodyWidth
          }"
          fixed="right"
        />
        <div v-if="$slots.append" :style="{ height: layout.appendHeight.value + 'px' }" class="el-table__append-gutter"></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        ref="rightFixedFooterWrapper"
        class="el-table__fixed-footer-wrapper"
      >
        <table-footer
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          fixed="right"
        />
      </div>
    </div>
    <div
      v-if="store.states.rightFixedColumns.value.length > 0"
      ref="rightFixedPatch"
      :style="{
        width: layout.scrollY.value ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight.value + 'px'
      }"
      class="el-table__fixed-right-patch"
    ></div>
    <div v-show="resizeProxyVisible" ref="resizeProxy" class="el-table__column-resize-proxy"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, onMounted, onUnmounted, computed, ref, watchEffect, watch } from 'vue'
import { createStore } from '@element-plus/table/src/store/helper'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { t } from '@element-plus/locale'
import mousewheel from '@element-plus/directives/mousewheel/index'
import TableLayout from '@element-plus/table/src/table-layout'
import TableHeader from './table-header'
import TableBody from './table-body'
import TableFooter from './table-footer'
import { debounce, throttle } from 'throttle-debounce'
import { parseHeight } from './util'

  interface fn {
    (...args: any[]): any
  }

  interface ITable {
    data: any[]
    size: string
    width: string | number
    height: string | number
    maxHeight: string | number
    fit: boolean
    stripe: boolean
    border: boolean
    rowKey: string | fn
    context: unknown
    showHeader: boolean
    showSummary: boolean
    sumText: string
    summaryMethod: fn
    rowClassName: string | fn
    rowStyle: unknown | fn
    cellClassName: string | fn
    cellStyle: unknown | fn
    headerRowClassName: string | fn
    headerRowStyle: unknown | fn
    headerCellClassName: string | fn
    headerCellStyle: unknown | fn
    highlightCurrentRow: boolean
    currentRowKey: string | number
    emptyText: string
    expandRowKeys: any[]
    defaultExpandAll: boolean
    defaultSort: unknown
    tooltipEffect: string
    spanMethod: fn
    selectOnIndeterminate: boolean
    indent: number
    treeProps: any
    lazy: boolean
    load: fn
  }

let tableIdSeed = 1
export default defineComponent({
  name: 'ElTable',
  directives: {
    mousewheel,
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      },
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true,
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    context: {},
    showHeader: {
      type: Boolean,
      default: true,
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    selectOnIndeterminate: {
      type: Boolean,
      default: true,
    },
    indent: {
      type: Number,
      default: 16,
    },
    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children',
        }
      },
    },
    lazy: Boolean,
    load: Function,
  },
  setup(props: ITable) {
    let table = getCurrentInstance() as any
    const store = createStore(table, {
      rowKey: props.rowKey,
      defaultExpandAll: props.defaultExpandAll,
      selectOnIndeterminate: props.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: props.indent,
      lazy: props.lazy,
      lazyColumnIdentifier: props.treeProps.hasChildren || 'hasChildren',
      childrenColumnName: props.treeProps.children || 'children',
      data: props.data,
    })
    table.store = store
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader,
    })
    table.layout = layout
    const isHidden = ref(false)
    const renderExpanded = ref(null)
    const resizeProxyVisible = ref(false)
    const resizeState = ref({
      width: null,
      height: null,
    })
    const isGroup = ref(false)
    const scrollPosition = ref('left')

    watchEffect(() => {
      layout.setHeight(props.height)
    })
    watchEffect(() => {
      layout.setMaxHeight(props.maxHeight)
    })
    watchEffect(() => {
      if (!store.states.rowKey.value) return
      store.setCurrentRowKey(props.currentRowKey)
    })
    watch(
      () => props.data,
      () => {
        table.store.commit('setData', props.data)
      },
      {
        immediate: true,
      },
    )
    watchEffect(() => {
      if (props.expandRowKeys) {
        store.setExpandRowKeysAdapter(props.expandRowKeys)
      }
    })

    const handleMouseLeave = () => {
      table.store.commit('setHoverRow', null)
      if (table.hoverState) table.hoverState = null
    }

    const debouncedUpdateLayout = debounce(50, () => doLayout())

    const handleHeaderFooterMousewheel = (event, data) => {
      const { pixelX, pixelY } = data
      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        table.refs.bodyWrapper.scrollLeft += data.pixelX / 5
      }
    }

    const shouldUpdateHeight = computed(() => {
      return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0
    })
    const doLayout = () => {
      if (shouldUpdateHeight.value) {
        layout.updateElsHeight()
      }
      layout.updateColumnsWidth()
    }
    onMounted(() => {
      bindEvents()
      store.updateColumns()
      doLayout()

      resizeState.value = {
        width: table.vnode.el.offsetWidth,
        height: table.vnode.el.offsetHeight,
      }

      // init filters
      store.states.columns.value.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          table.store.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true,
          })
        }
      })
      table.$ready = true
    })
    const syncPostion = throttle(20, function () {
      const { scrollLeft, scrollTop, offsetWidth, scrollWidth } = table.ctx.$refs.bodyWrapper
      const { headerWrapper, footerWrapper, fixedBodyWrapper, rightFixedBodyWrapper } = table.ctx.$refs
      if (headerWrapper) headerWrapper.scrollLeft = scrollLeft
      if (footerWrapper) footerWrapper.scrollLeft = scrollLeft
      if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop
      if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop
      const maxScrollLeftPosition = scrollWidth - offsetWidth - 1
      if (scrollLeft >= maxScrollLeftPosition) {
        scrollPosition.value = 'right'
      } else if (scrollLeft === 0) {
        scrollPosition.value = 'left'
      } else {
        scrollPosition.value = 'middle'
      }
    })
    const bindEvents = () => {
      table.ctx.$refs.bodyWrapper.addEventListener('scroll', syncPostion, { passive: true })
      if (props.fit) {
        addResizeListener(table.vnode.el, resizeListener)
      }
    }
    onUnmounted(() => {
      unbindEvents()
    })
    const unbindEvents = () => {
        table.ctx.$refs.bodyWrapper?.removeEventListener('scroll', syncPostion, { passive: true })
        if (props.fit) {
          removeResizeListener(table.vnode.el, resizeListener)
        }
    }
    const resizeListener = () => {
      if (!table.$ready) return
      let shouldUpdateLayout = false
      const el = table.vnode.el
      const { width: oldWidth, height: oldHeight } = resizeState.value

      const width = el.offsetWidth
      if (oldWidth !== width) {
        shouldUpdateLayout = true
      }

      const height = el.offsetHeight
      if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
        shouldUpdateLayout = true
      }

      if (shouldUpdateLayout) {
        resizeState.value = {
          width,
          height,
        }
        doLayout()
      }
    }
    const tableSize = computed(() => {
      return props.size
    })
    const bodyWidth = computed(() => {
      const { bodyWidth, scrollY, gutterWidth } = layout
      return bodyWidth.value ? bodyWidth.value - (scrollY.value ? gutterWidth : 0) + 'px' : ''
    })
    const bodyHeight = computed(() => {
      const headerHeight = layout.headerHeight.value || 0
      const bodyHeight = layout.bodyHeight.value
      const footerHeight = layout.footerHeight.value || 0
      if (props.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : '',
        }
      } else if (props.maxHeight) {
        const maxHeight = parseHeight(props.maxHeight)
        if (typeof maxHeight === 'number') {
          return {
            'max-height': maxHeight - footerHeight - (props.showHeader ? headerHeight : 0) + 'px',
          }
        }
      }
      return {}
    })
    const emptyBlockStyle = computed(() => {
      if (props.data && props.data.length) return null
      let height = '100%'
      if (layout.appendHeight.value) {
        height = `calc(100% - ${layout.appendHeight.value}px)`
      }
      return {
        width: bodyWidth.value,
        height,
      }
    })
    /**
       * fix layout
       */
    const handleFixedMousewheel = (event, data) => {
      const bodyWrapper = table.refs.bodyWrapper
      if (Math.abs(data.spinY) > 0) {
        const currentScrollTop = bodyWrapper.scrollTop
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault()
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault()
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5)
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5)
      }
    }
    const fixedHeight = computed(() => {
      if (props.maxHeight) {
        if (props.showSummary) {
          return {
            bottom: 0,
          }
        }
        return {
          bottom: layout.scrollX.value && props.data.length ? layout.gutterWidth + 'px' : '',
        }
      } else {
        if (props.showSummary) {
          return {
            height: layout.tableHeight.value ? layout.tableHeight.value + 'px' : '',
          }
        }
        return {
          height: layout.viewportHeight.value ? layout.viewportHeight.value + 'px' : '',
        }
      }
    })
    const fixedBodyHeight = computed(() => {
      if (props.height) {
        return {
          height: layout.fixedBodyHeight.value ? layout.fixedBodyHeight.value + 'px' : '',
        }
      } else if (props.maxHeight) {
        let maxHeight = parseHeight(props.maxHeight)
        if (typeof maxHeight === 'number') {
          maxHeight = layout.scrollX.value ? maxHeight - layout.gutterWidth : maxHeight
          if (props.showHeader) {
            maxHeight -= layout.headerHeight.value
          }
          maxHeight -= layout.footerHeight.value
          return {
            'max-height': maxHeight + 'px',
          }
        }
      }
      return {}
    })

    /**
       * open functions
       */
    const setCurrentRow = row => {
      store.commit('setCurrentRow', row)
    }
    const toggleRowSelection = (row, selected) => {
      store.toggleRowSelection(row, selected, false)
      store.updateAllSelected()
    }
    const clearSelection = () => {
      store.clearSelection()
    }
    const clearFilter = columnKeys => {
      store.clearFilter(columnKeys)
    }
    const tableId = 'el-table_' + tableIdSeed++
    return {
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      scrollPosition,
      bodyWidth,
      bodyHeight,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      t,
    }
  },
})
</script>
<style scoped>
</style>
