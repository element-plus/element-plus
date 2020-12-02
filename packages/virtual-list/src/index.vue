<template>
  <div class="el-vl__viewport" :style="viewportStyle" @scroll="onScroll">
    <div class="el-vl__content" :style="contentStyle">
      <div class="el-vl__item-container" :style="itemContainerStyle">
        <div
          v-for="(item, idx) in window"
          :key="idx + startNode"
          :style="itemStyle"
        >
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import useVirtualScroll from './useVirtualScroll'

import type { PropType } from 'vue'
import type { Direction } from './useVirtualScroll'

export default defineComponent({
  name: 'ElVirtualList',
  props: {
    cache: {
      type: Number,
      default: 10,
    },
    direction: {
      type: String as PropType<Direction>,
      default: 'v',
    },
    data: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
    rowHeight: {
      type: Number,
      required: true,
    },
    windowSize: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // init here

    const api = useVirtualScroll(props)

    // onMounted(() => {

    // })

    return api
  },
})
</script>
<style scoped>
</style>
