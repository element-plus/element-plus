<template>
  <div
    :class="[
      {
        'el-table--fit': fit,
        'el-table--striped': stripe,
        'el-table--border': border || isGroup,
        'el-table--hidden': isHidden,
        'el-table--group': isGroup,
        'el-table--fluid-height': maxHeight,
        'el-table--scrollable-x': layout.scrollX.value,
        'el-table--scrollable-y': layout.scrollY.value,
        'el-table--enable-row-hover': !store.states.isComplex.value,
        'el-table--enable-row-transition':
          (store.states.data.value || []).length !== 0 &&
          (store.states.data.value || []).length < 100,
      },
      tableSize ? `el-table--${tableSize}` : '',
    ]"
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
          width: layout.bodyWidth.value ? layout.bodyWidth.value + 'px' : '',
        }"
        @set-drag-visible="setDragVisible"
      />
    </div>
    <div ref="bodyWrapper" :style="[bodyHeight]" class="el-table__body-wrapper">
      <table-body
        :context="context"
        :highlight="highlightCurrentRow"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :store="store"
        :stripe="stripe"
        :style="{
          width: bodyWidth,
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
        :border="border"
        :default-sort="defaultSort"
        :store="store"
        :style="{
          width: layout.bodyWidth.value ? layout.bodyWidth.value + 'px' : '',
        }"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
      />
    </div>
    <div
      v-if="store.states.fixedColumns.value.length > 0"
      ref="fixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      :style="[
        {
          width: layout.fixedWidth.value ? layout.fixedWidth.value + 'px' : '',
        },
        fixedHeight,
      ]"
      class="el-table__fixed"
    >
      <div
        v-if="showHeader"
        ref="fixedHeaderWrapper"
        class="el-table__fixed-header-wrapper"
      >
        <table-header
          ref="fixedTableHeader"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth,
          }"
          fixed="left"
          @set-drag-visible="setDragVisible"
        />
      </div>
      <div
        ref="fixedBodyWrapper"
        :style="[
          {
            top: layout.headerHeight.value + 'px',
          },
          fixedBodyHeight,
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
            width: bodyWidth,
          }"
          fixed="left"
        />
        <div
          v-if="$slots.append"
          :style="{ height: layout.appendHeight.value + 'px' }"
          class="el-table__append-gutter"
        ></div>
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
            width: bodyWidth,
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
      :style="[
        {
          width: layout.rightFixedWidth.value
            ? layout.rightFixedWidth.value + 'px'
            : '',
          right: layout.scrollY.value
            ? (border ? layout.gutterWidth : layout.gutterWidth || 0) + 'px'
            : '',
        },
        fixedHeight,
      ]"
      class="el-table__fixed-right"
    >
      <div
        v-if="showHeader"
        ref="rightFixedHeaderWrapper"
        class="el-table__fixed-header-wrapper"
      >
        <table-header
          ref="rightFixedTableHeader"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth,
          }"
          fixed="right"
          @set-drag-visible="setDragVisible"
        />
      </div>
      <div
        ref="rightFixedBodyWrapper"
        :style="[{ top: layout.headerHeight.value + 'px' }, fixedBodyHeight]"
        class="el-table__fixed-body-wrapper"
      >
        <table-body
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :store="store"
          :stripe="stripe"
          :style="{
            width: bodyWidth,
          }"
          fixed="right"
        />
        <div
          v-if="$slots.append"
          :style="{ height: layout.appendHeight.value + 'px' }"
          class="el-table__append-gutter"
        ></div>
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
            width: bodyWidth,
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
        height: layout.headerHeight.value + 'px',
      }"
      class="el-table__fixed-right-patch"
    ></div>
    <div
      v-show="resizeProxyVisible"
      ref="resizeProxy"
      class="el-table__column-resize-proxy"
    ></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, computed } from 'vue'
import { createStore } from './store/helper'
import { t } from '@element-plus/locale'
import { Mousewheel } from '@element-plus/directives'
import TableLayout from './table-layout'
import TableHeader from './table-header/index'
import TableBody from './table-body/index'
import TableFooter from './table-footer/index'
import debounce from 'lodash/debounce'
import useUtils from './table/utils-helper'
import useStyle from './table/style-helper'
import { TableProps, Table } from './table.type'

let tableIdSeed = 1
export default defineComponent({
  name: 'ElTable',
  directives: {
    Mousewheel,
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
  emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-mouse-enter',
    'cell-mouse-leave',
    'cell-click',
    'cell-dblclick',
    'row-click',
    'row-contextmenu',
    'row-dblclick',
    'header-click',
    'header-contextmenu',
    'sort-change',
    'filter-change',
    'current-change',
    'header-dragend',
    'expand-change',
  ],
  setup(props: TableProps) {
    let table = getCurrentInstance() as Table
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

    const shouldUpdateHeight = computed(() => {
      return (
        props.height ||
          props.maxHeight ||
          store.states.fixedColumns.value.length > 0 ||
          store.states.rightFixedColumns.value.length > 0
      )
    })
    /**
       * open functions
       */
    const {
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
    } = useUtils(store, layout, shouldUpdateHeight)
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      bodyHeight,
      emptyBlockStyle,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
    } = useStyle(props, layout, store, table, doLayout)

    const debouncedUpdateLayout = debounce(() => doLayout(), 50)

    const tableId = 'el-table_' + tableIdSeed++
    table.tableId = tableId
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout,
    }
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
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table,
    }
  },
})
</script>
