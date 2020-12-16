<template>
  <div
    ref="viewportRef"
    class="el-vl__viewport"
    :style="viewportStyle"
    @scroll.passive="onScroll"
  >
    <div class="el-vl__content" :style="contentStyle">
      <div
        class="el-vl__item-container"
        :style="itemContainerStyle"
        :data-direction="direction"
      >
        <el-virtual-list-item
          v-for="(item, idx) in window"
          :key="idx"
          class="el-vl__item"
          :style="itemStyle"
        >
          <slot :item="item"></slot>
        </el-virtual-list-item>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useVirtualScroll from './useVirtualScroll'
import VirtualItem from './virtual-item.vue'

import type { PropType } from 'vue'
import type { Direction } from './useVirtualScroll'

export default defineComponent({
  name: 'ElVirtualList',
  components: {
    [VirtualItem.name]: VirtualItem,
  },
  props: {
    direction: {
      type: String as PropType<Direction>,
      default: 'v',
    },
    data: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
    itemSize: {
      type: Number,
      required: true,
    },
    windowSize: {
      type: Number,
      required: true,
    },
    poolSize: {
      type: Number,
      default: 20,
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
<style scoped></style>
