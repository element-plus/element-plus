<template>
  <div
    :class="['el-skeleton', loading ? 'el-skeleton-loading' : '']"
  >
    <div class="el-skeleton-title"></div>
    <div
      v-for="item in rows"
      :key="item"
      :class="['el-skeleton-paragraph', item === rows && rows > 1 ? 'el-skeleton-paragraph-last' : '']"
    >
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElSkeleton',
  props: {
    rows: {
      type: Number,
      default: 3,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // todo
  },
})
</script>
