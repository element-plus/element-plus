<template>
  <div
    ref="tableWrapper"
    :class="[
      {
        [ns.m('fit')]: fit,
        [ns.m('striped')]: stripe,
        [ns.m('border')]: border || isGroup,
        [ns.m('hidden')]: isHidden,
        [ns.m('group')]: isGroup,
        [ns.m('fluid-height')]: maxHeight,
        [ns.m('scrollable-x')]: layout.scrollX.value,
        [ns.m('scrollable-y')]: layout.scrollY.value,
        [ns.m('enable-row-hover')]: !store.states.isComplex.value,
        [ns.m('enable-row-transition')]:
          (store.states.data.value || []).length !== 0 &&
          (store.states.data.value || []).length < 100,
        'has-footer': showSummary,
      },
      ns.m(tableSize),
      className,
      ns.b(),
      ns.m(`layout-${tableLayout}`),
    ]"
    :style="style"
    :data-prefix="ns.namespace.value"
    @mouseleave="handleMouseLeave"
  >
    <div :class="ns.e('inner-wrapper')">
      <div ref="hiddenColumns" class="hidden-columns">
        <slot />
      </div>
      <div
        v-if="showHeader && tableLayout === 'fixed'"
        ref="headerWrapper"
        v-mousewheel="handleHeaderFooterMousewheel"
        :class="ns.e('header-wrapper')"
      >
        <table
          ref="tableHeader"
          :class="ns.e('header')"
          :style="tableBodyStyles"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          <hColgroup
            :columns="store.states.columns.value"
            :table-layout="tableLayout"
          />
          <table-header
            ref="tableHeaderRef"
            :border="border"
            :default-sort="defaultSort"
            :store="store"
            :append-filter-panel-to="appendFilterPanelTo"
            :allow-drag-last-column="allowDragLastColumn"
            @set-drag-visible="setDragVisible"
          />
        </table>
      </div>
      <div ref="bodyWrapper" :class="ns.e('body-wrapper')">
        <el-scrollbar
          ref="scrollBarRef"
          :view-style="scrollbarViewStyle"
          :wrap-style="scrollbarStyle"
          :always="scrollbarAlwaysOn"
          :tabindex="scrollbarTabindex"
          @scroll="$emit('scroll', $event)"
        >
          <table
            ref="tableBody"
            :class="ns.e('body')"
            cellspacing="0"
            cellpadding="0"
            border="0"
            :style="{
              width: bodyWidth,
              tableLayout,
            }"
          >
            <hColgroup
              :columns="store.states.columns.value"
              :table-layout="tableLayout"
            />
            <table-header
              v-if="showHeader && tableLayout === 'auto'"
              ref="tableHeaderRef"
              :class="ns.e('body-header')"
              :border="border"
              :default-sort="defaultSort"
              :store="store"
              :append-filter-panel-to="appendFilterPanelTo"
              @set-drag-visible="setDragVisible"
            />
            <table-body
              :context="context"
              :highlight="highlightCurrentRow"
              :row-class-name="rowClassName"
              :tooltip-effect="tooltipEffect"
              :tooltip-options="tooltipOptions"
              :row-style="rowStyle"
              :store="store"
              :stripe="stripe"
            />
            <table-footer
              v-if="showSummary && tableLayout === 'auto'"
              :class="ns.e('body-footer')"
              :border="border"
              :default-sort="defaultSort"
              :store="store"
              :sum-text="computedSumText"
              :summary-method="summaryMethod"
            />
          </table>
          <div
            v-if="isEmpty"
            ref="emptyBlock"
            :style="emptyBlockStyle"
            :class="ns.e('empty-block')"
          >
            <span :class="ns.e('empty-text')">
              <slot name="empty">{{ computedEmptyText }}</slot>
            </span>
          </div>
          <div
            v-if="$slots.append"
            ref="appendWrapper"
            :class="ns.e('append-wrapper')"
          >
            <slot name="append" />
          </div>
        </el-scrollbar>
      </div>
      <div
        v-if="showSummary && tableLayout === 'fixed'"
        v-show="!isEmpty"
        ref="footerWrapper"
        v-mousewheel="handleHeaderFooterMousewheel"
        :class="ns.e('footer-wrapper')"
      >
        <table
          :class="ns.e('footer')"
          cellspacing="0"
          cellpadding="0"
          border="0"
          :style="tableBodyStyles"
        >
          <hColgroup
            :columns="store.states.columns.value"
            :table-layout="tableLayout"
          />
          <table-footer
            :border="border"
            :default-sort="defaultSort"
            :store="store"
            :sum-text="computedSumText"
            :summary-method="summaryMethod"
          />
        </table>
      </div>
      <div v-if="border || isGroup" :class="ns.e('border-left-patch')" />
    </div>
    <div
      v-show="resizeProxyVisible"
      ref="resizeProxy"
      :class="ns.e('column-resize-proxy')"
    />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  provide,
} from 'vue'
import { debounce } from 'lodash-unified'
import { Mousewheel } from '@element-plus/directives'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElScrollbar from '@element-plus/components/scrollbar'
import { createStore } from './store/helper'
import TableLayout from './table-layout'
import TableHeader from './table-header'
import TableBody from './table-body'
import TableFooter from './table-footer'
import useUtils from './table/utils-helper'
import { convertToRows } from './table-header/utils-helper'
import useStyle from './table/style-helper'
import useKeyRender from './table/key-render-helper'
import defaultProps from './table/defaults'
import { TABLE_INJECTION_KEY } from './tokens'
import { hColgroup } from './h-helper'
import { useScrollbar } from './composables/use-scrollbar'

import type { Table } from './table/defaults'

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
    ElScrollbar,
    hColgroup,
  },
  props: defaultProps,
  emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-mouse-enter',
    'cell-mouse-leave',
    'cell-contextmenu',
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
    'scroll',
  ],
  setup(props) {
    type Row = typeof props.data[number]
    const { t } = useLocale()
    const ns = useNamespace('table')
    const table = getCurrentInstance() as Table<Row>
    provide(TABLE_INJECTION_KEY, table)
    const store = createStore<Row>(table, props)
    table.store = store
    const layout = new TableLayout<Row>({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader,
    })
    table.layout = layout

    const isEmpty = computed(() => (store.states.data.value || []).length === 0)

    /**
     * open functions
     */
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort,
      updateKeyChildren,
    } = useUtils<Row>(store)
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
    } = useStyle<Row>(props, layout, store, table)

    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } =
      useScrollbar()

    const debouncedUpdateLayout = debounce(doLayout, 50)

    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`
    table.tableId = tableId
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout,
    }
    const computedSumText = computed(
      () => props.sumText ?? t('el.table.sumText')
    )

    const computedEmptyText = computed(() => {
      return props.emptyText ?? t('el.table.emptyText')
    })

    const columns = computed(() => {
      return convertToRows(store.states.originColumns.value)[0]
    })

    useKeyRender(table)

    onBeforeUnmount(() => {
      debouncedUpdateLayout.cancel()
    })

    return {
      ns,
      layout,
      store,
      columns,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      /**
       * @description used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection
       */
      setCurrentRow,
      /**
       * @description returns the currently selected rows
       */
      getSelectionRows,
      /**
       * @description used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected
       */
      toggleRowSelection,
      /**
       * @description used in multiple selection Table, clear user selection
       */
      clearSelection,
      /**
       * @description clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters
       */
      clearFilter,
      /**
       * @description used in multiple selection Table, toggle select all and deselect all
       */
      toggleAllSelection,
      /**
       * @description used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed
       */
      toggleRowExpansion,
      /**
       * @description clear sorting, restore data to the original order
       */
      clearSort,
      /**
       * @description refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout
       */
      doLayout,
      /**
       * @description sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order
       */
      sort,
      /**
       * @description used in lazy Table, must set `rowKey`, update key children
       */
      updateKeyChildren,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
      scrollBarRef,
      /**
       * @description scrolls to a particular set of coordinates
       */
      scrollTo,
      /**
       * @description set horizontal scroll position
       */
      setScrollLeft,
      /**
       * @description set vertical scroll position
       */
      setScrollTop,
      /**
       * @description whether to allow drag the last column
       */
      allowDragLastColumn: props.allowDragLastColumn,
    }
  },
})
</script>
