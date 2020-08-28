<template>
  <div
    :class="[{
      'el-table--fit': fit,
      'el-table--striped': stripe,
      'el-table--border': border || isGroup,
      'el-table--hidden': isHidden,
      'el-table--group': isGroup,
      'el-table--fluid-height': maxHeight,
      'el-table--scrollable-x': layout.scrollX,
      'el-table--scrollable-y': layout.scrollY,
      'el-table--enable-row-hover': !store.states.isComplex,
      'el-table--enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
    }, tableSize ? `el-table--${ tableSize }` : '']"
    class="el-table"
    @mouseleave="handleMouseLeave($event)"
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
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
      />
    </div>
    <!-- <div
      ref="bodyWrapper"
      class="el-table__body-wrapper"
      :class="[layout.scrollX ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
      :style="[bodyHeight]"
    >
      <table-body
        :context="context"
        :store="store"
        :stripe="stripe"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :highlight="highlightCurrentRow"
        :style="{
          width: bodyWidth
        }"
      />
      <div
        v-if="!data || data.length === 0"
        ref="emptyBlock"
        class="el-table__empty-block"
        :style="emptyBlockStyle"
      >
        <span class="el-table__empty-text">
          <slot name="empty">{{ emptyText || t('el.table.emptyText') }}</slot>
        </span>
      </div>
      <div
        v-if="$slots.append"
        ref="appendWrapper"
        class="el-table__append-wrapper"
      >
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
        :store="store"
        :border="border"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
      />
    </div>
    <div
      v-if="fixedColumns.length > 0"
      ref="fixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed"
      :style="[{
                 width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
               },
               fixedHeight]"
    >
      <div
        v-if="showHeader"
        ref="fixedHeaderWrapper"
        class="el-table__fixed-header-wrapper"
      >
        <table-header
          ref="fixedTableHeader"
          fixed="left"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
        />
      </div>
      <div
        ref="fixedBodyWrapper"
        class="el-table__fixed-body-wrapper"
        :style="[{
                   top: layout.headerHeight + 'px'
                 },
                 fixedBodyHeight]"
      >
        <table-body
          fixed="left"
          :store="store"
          :stripe="stripe"
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :style="{
            width: bodyWidth
          }"
        />
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{ height: layout.appendHeight + 'px'}"
        ></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        ref="fixedFooterWrapper"
        class="el-table__fixed-footer-wrapper"
      >
        <table-footer
          fixed="left"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"
        />
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      ref="rightFixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed-right"
      :style="[{
                 width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
                 right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
               },
               fixedHeight]"
    >
      <div
        v-if="showHeader"
        ref="rightFixedHeaderWrapper"
        class="el-table__fixed-header-wrapper"
      >
        <table-header
          ref="rightFixedTableHeader"
          fixed="right"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"
        />
      </div>
      <div
        ref="rightFixedBodyWrapper"
        class="el-table__fixed-body-wrapper"
        :style="[{
                   top: layout.headerHeight + 'px'
                 },
                 fixedBodyHeight]"
      >
        <table-body
          fixed="right"
          :store="store"
          :stripe="stripe"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{
            width: bodyWidth
          }"
        />
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{ height: layout.appendHeight + 'px' }"
        ></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        ref="rightFixedFooterWrapper"
        class="el-table__fixed-footer-wrapper"
      >
        <table-footer
          fixed="right"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"
        />
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      ref="rightFixedPatch"
      class="el-table__fixed-right-patch"
      :style="{
        width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight + 'px'
      }"
    ></div>
    <div v-show="resizeProxyVisible" ref="resizeProxy" class="el-table__column-resize-proxy"></div>-->
  </div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, reactive, onMounted, computed } from 'vue'
import { createStore } from '@element-plus/table/src/store/helper'
import TableLayout from '@element-plus/table/src/table-layout'
import { mapStates } from './store/helper'
import mousewheel from '@element-plus/directives/mousewheel/index'
import TableHeader from './table-header.vue'

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
      defaultExpandAll: table.defaultExpandAll,
      selectOnIndeterminate: table.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: table.indent,
      lazy: table.lazy,
      lazyColumnIdentifier: props.treeProps.hasChildren || 'hasChildren',
      childrenColumnName: props.treeProps.children || 'children',
    })
    const storeData = mapStates({
      selection: 'selection',
      columns: 'columns',
      tableData: 'data',
      fixedColumns: 'fixedColumns',
      rightFixedColumns: 'rightFixedColumns',
    })
    table.store = store
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: table.fit,
      showHeader: props.showHeader,
    })
    const that = reactive({
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null,
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left',
    })
    const handleMouseLeave = () => {
      store.commit('setHoverRow', null)
      if (table.hoverState) table.hoverState = null
    }
    table = {
      ...table,
      ...that,
      layout,
    }

    const handleHeaderFooterMousewheel = (event, data) => {
      const { pixelX, pixelY } = data
      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        // this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    }

    const bindEvents = () => {
      // this.bodyWrapper.addEventListener('scroll', this.syncPostion, { passive: true });
      // if (this.fit) {
      //   addResizeListener(this.$el, this.resizeListener);
      // }
    }
    const shouldUpdateHeight = computed(() => {
      return props.height || props.maxHeight || table.ctx.fixedColumns().length > 0 || table.ctx.rightFixedColumns().length > 0
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

      that.resizeState = {
        width: table.vnode.el.offsetWidth,
        height: table.vnode.el.offsetHeight,
      }

      // init filters
      store.states.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          table.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true,
          })
        }
      })
      table.$ready = true
    })

    const tableId = 'el-table_' + tableIdSeed++
    return {
      ...that,
      layout,
      store,
      handleHeaderFooterMousewheel,
      ...storeData,
      tableId,
    }
  },
})
</script>
<style scoped>
</style>
