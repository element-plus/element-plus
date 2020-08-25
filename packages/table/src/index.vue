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
    <div
      ref="bodyWrapper"
      :class="[layout.scrollX ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
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
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
      />
    </div>
    <div
      v-if="fixedColumns.length > 0"
      ref="fixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      :style="[{
                 width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
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
                   top: layout.headerHeight + 'px'
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
        <div v-if="$slots.append" :style="{ height: layout.appendHeight + 'px'}" class="el-table__append-gutter"></div>
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
      v-if="rightFixedColumns.length > 0"
      ref="rightFixedWrapper"
      v-mousewheel="handleFixedMousewheel"
      :style="[{
                 width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
                 right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
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
        :style="[{
                   top: layout.headerHeight + 'px'
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
          fixed="right"
        />
        <div v-if="$slots.append" :style="{ height: layout.appendHeight + 'px' }" class="el-table__append-gutter"></div>
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
      v-if="rightFixedColumns.length > 0"
      ref="rightFixedPatch"
      :style="{
        width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight + 'px'
      }"
      class="el-table__fixed-right-patch"
    ></div>
    <div v-show="resizeProxyVisible" ref="resizeProxy" class="el-table__column-resize-proxy"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { debounce, throttle } from 'throttle-debounce'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import Mousewheel from '@element-plus/directives/mousewheel/index'
import Locale from '@element-plus/locale/mixin'
import { useMigrating } from '../../hooks'
import { createStore, mapStates } from './store/helper'
import TableLayout from './table-layout'
import TableBody from './table-body'
import TableHeader from './table-header'
import TableFooter from './table-footer'
import { parseHeight } from './util'
export default defineComponent({
  name: 'ElTable',
  props: {},
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
