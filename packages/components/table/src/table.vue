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
    <div ref="tableInnerWrapper" :class="ns.e('inner-wrapper')">
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
          :native="nativeScrollbar"
          @scroll="
            ($event) => {
              handleScroll($event)
              $emit('scroll', $event)
            }
          "
        >
          <div :style="useVirtual ? `height: ${virtualBodyHeight}px;` : ''">
            <div
              :style="useVirtual ? `position: sticky; top: ${innerTop}px;` : ''"
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
                  :tooltip-effect="computedTooltipEffect"
                  :tooltip-options="computedTooltipOptions"
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
            </div>
          </div>
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
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
  shallowRef,
  watch,
} from 'vue'
import { debounce, throttle } from 'lodash-unified'
import { Mousewheel } from '@element-plus/directives'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { useGlobalConfig } from '@element-plus/components/config-provider'
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
import { getRowIdentity } from './util'
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
    type Row = (typeof props.data)[number]
    const { t } = useLocale()
    const ns = useNamespace('table')
    const globalConfig = useGlobalConfig('table')
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
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
    } = useStyle<Row>(props, layout, store, table)

    const {
      scrollBarRef,
      scrollTo: scrollToOld,
      setScrollLeft,
      setScrollTop: setScrollTopOld,
    } = useScrollbar()
    const scrollTo = function (
      options: number | ScrollToOptions,
      yCoord?: number | undefined
    ) {
      scrollToOld(options, yCoord)
      handleScroll({
        scrollTop:
          (typeof options === 'number' ? options : options.top) || yCoord,
      })
    }
    const setScrollTop = function (value: number | undefined) {
      setScrollTopOld(value)
      handleScroll({ scrollTop: value })
    }

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

    const computedTooltipEffect = computed(
      () => props.tooltipEffect ?? globalConfig.value?.tooltipEffect
    )

    const computedTooltipOptions = computed(
      () => props.tooltipOptions ?? globalConfig.value?.tooltipOptions
    )

    const columns = computed(() => {
      return convertToRows(store.states.originColumns.value)[0]
    })

    useKeyRender(table)

    onBeforeUnmount(() => {
      debouncedUpdateLayout.cancel()
    })
    const { data, treeData } = store.states
    const start = ref(0)
    const end = ref(25)
    const treeStart = ref(0)
    const realTreeStart = ref(0)
    const realTreeEnd = ref(25)
    table.useVirtual = props.useVirtual
    table.rowHeight = props.rowHeight
    table.start = start
    table.end = end
    table.treeStart = treeStart
    const innerTop = ref(0)
    const scrollTop = ref(0)

    // 性能优化：使用 Set 存储展开节点缓存，查找性能 O(1)
    const expandedKeysCache = shallowRef<Set<string>>(new Set())

    const visibleCount = computed(() =>
      Math.ceil(
        Number.parseFloat((props.height || props.maxHeight || 0).toString()) /
          props.rowHeight
      )
    )
    const handleScroll = function (event: { scrollTop: number | undefined }) {
      if (props.useVirtual) {
        const top = event.scrollTop || 0
        scrollTop.value = top
        const expectIdx = Math.floor(top / props.rowHeight)
        innerTop.value = expectIdx * props.rowHeight - top
        setVirtualParams(expectIdx)
      }
    }
    const setVirtualParams = throttle(
      (expectIdx) => {
        const newStart = expectIdx
        const newEnd = expectIdx + visibleCount.value + props.excessRows + 1

        // 只有当范围真正改变时才更新
        if (start.value !== newStart || end.value !== newEnd) {
          start.value = newStart
          end.value = newEnd
          // 计算 treeStart 和 realTreeEnd
          calculateTreeStart()
          calculateTreeEnd()
        }

        // 使用 requestAnimationFrame 优化滚动条更新
        requestAnimationFrame(() => {
          scrollBarRef.value?.update()
        })
      },
      16, // 优化为60fps
      {
        leading: true,
        trailing: true, // 确保最后一次滚动也被处理
      }
    )
    // 递归计算某个展开节点的所有可见后代数量
    const getVisibleDescendantCount = (rowKey: string): number => {
      if (!expandedKeysCache.value.has(rowKey)) return 0
      const children = treeData.value[rowKey]?.children
      if (!children || !children.length) return 0
      let count = children.length
      for (const childKey of children) {
        count += getVisibleDescendantCount(childKey)
      }
      return count
    }

    // 更新展开节点缓存
    const updateExpandedKeysCache = () => {
      if (!props.useVirtual || !Object.keys(treeData.value).length) {
        expandedKeysCache.value = new Set()
        return
      }

      const expandedKeys = Object.keys(treeData.value).filter(
        (key) =>
          treeData.value[key].expanded &&
          (!props.lazy || treeData.value[key].loaded)
      )
      expandedKeysCache.value = new Set(expandedKeys)
    }
    const virtualBodyHeight = computed(() => {
      if (!props.useVirtual || !data.value) {
        return 0
      }

      if (expandedKeysCache.value.size) {
        let totalDescendants = 0
        for (let i = 0; i < data.value.length; i++) {
          const rowKey = getRowIdentity(data.value[i], props.rowKey || null)
          totalDescendants += getVisibleDescendantCount(rowKey)
        }
        return (data.value.length + totalDescendants) * props.rowHeight
      } else {
        return data.value.length * props.rowHeight
      }
    })
    watch(virtualBodyHeight, () => {
      nextTick(() => {
        // fix scrollbar's position
        scrollBarRef.value.update()
      })
    })
    // 计算 treeStart 的函数
    const calculateTreeStart = () => {
      const expandedKeys = expandedKeysCache.value
      if (
        !data.value ||
        !Object.keys(treeData.value).length ||
        !expandedKeys.size
      ) {
        treeStart.value = start.value
        realTreeStart.value = start.value
        return
      }

      let ci = -1
      for (let i = 0; i < data.value.length; i++) {
        ci++
        const rowKey = getRowIdentity(data.value[i], props.rowKey || null)
        const descendantCount = getVisibleDescendantCount(rowKey)
        ci += descendantCount
        if (ci >= start.value) {
          realTreeStart.value = i
          treeStart.value = ci - descendantCount
          return
        }
      }

      // 兜底：start 超出数据范围时，定位到最后一条数据
      realTreeStart.value = data.value.length - 1
      treeStart.value = ci
    }

    // 计算 realTreeEnd 的函数
    const calculateTreeEnd = () => {
      const expandedKeys = expandedKeysCache.value
      if (
        !data.value ||
        !Object.keys(treeData.value).length ||
        !expandedKeys.size
      ) {
        return
      }

      let ci = treeStart.value - 1
      for (let i = realTreeStart.value; i < data.value.length; i++) {
        ci++
        const rowKey = getRowIdentity(data.value[i], props.rowKey || null)
        ci += getVisibleDescendantCount(rowKey)
        if (ci >= end.value) {
          realTreeEnd.value = i
          return
        }
      }

      // 如果没有找到,说明 end 超出了数据范围
      realTreeEnd.value = data.value.length - 1
    }

    const virtualData = computed(() => {
      if (!data.value) {
        return []
      }

      if (expandedKeysCache.value.size) {
        return data.value.slice(realTreeStart.value, realTreeEnd.value + 1)
      } else {
        return data.value.slice(start.value, end.value)
      }
    })

    table.virtualData = virtualData

    // 优化监听器
    watch(
      () => props.data,
      () => {
        handleScroll({ scrollTop: 0 })
      },
      { flush: 'post', immediate: true }
    )

    watch(
      () => props.height,
      () => handleScroll({ scrollTop: scrollTop.value })
    )

    watch(
      () => props.maxHeight,
      () => handleScroll({ scrollTop: scrollTop.value })
    )

    // 监听 treeData 变化,更新展开节点缓存并重新计算
    watch(
      () => treeData.value,
      () => {
        if (props.useVirtual) {
          updateExpandedKeysCache()
          calculateTreeStart()
          calculateTreeEnd()
        }
      },
      { deep: true, immediate: true }
    )

    // 监听 data 变化,重新计算
    watch(
      () => data.value,
      () => {
        if (props.useVirtual) {
          updateExpandedKeysCache()
          calculateTreeStart()
          calculateTreeEnd()
        }
      },
      { immediate: true }
    )

    return {
      start,
      end,
      rowHeight: props.rowHeight,
      treeStart,
      scrollTop,
      handleScroll,
      virtualBodyHeight,
      innerTop,
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
      computedTooltipEffect,
      computedTooltipOptions,
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
