<template>
  <template v-if="loading">
    <div :class="['el-skeleton', animated ? 'is-animated' : '']">
      <slot v-if="loading" name="template">
        <el-skeleton-item class="el-skeleton__first-line" variant="p"></el-skeleton-item>
        <el-skeleton-item
          v-for="item in rows"
          :key="item"
          :class="{
            'el-skeleton__paragraph': true,
            'is-last': item === rows && rows > 1,
          }"
          variant="p"
        ></el-skeleton-item>
      </slot>
    </div>
  </template>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkeletonItem from '@element-plus/skeleton-item'

export default defineComponent({
  name: 'ElSkeleton',
  components: {
    [SkeletonItem.name]: SkeletonItem,
  },
  props: {
    rows: {
      type: Number,
      default: 3,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    // todo
  },
})
</script>
