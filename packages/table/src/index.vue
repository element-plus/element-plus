<template>
  <div
    class="el-table"
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
    @mouseleave="handleMouseLeave($event)"
  >
    <div ref="hiddenColumns" class="hidden-columns"><slot></slot></div>
    <div
      v-if="showHeader"
      ref="headerWrapper"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__header-wrapper"
    >
      <table-header
        ref="tableHeader"
        :store="store"
        :border="border"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
      />
    </div>
    <div
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
    <div v-show="resizeProxyVisible" ref="resizeProxy" class="el-table__column-resize-proxy"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { debounce, throttle } from 'throttle-debounce'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import Mousewheel from 'element-ui/src/directives/mousewheel'
import Locale from 'element-ui/src/mixins/locale'
import Migrating from 'element-ui/src/mixins/migrating'
import { createStore, mapStates } from './store/helper'
import TableLayout from './table-layout'
import TableBody from './table-body'
import TableHeader from './table-header'
import TableFooter from './table-footer'
import { parseHeight } from './util'
export default defineComponent({
  name: 'ElTable',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
