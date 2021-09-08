<template>
  <template v-if="uiLoading">
    <div
      :class="['el-skeleton', animated ? 'is-animated' : '']"
      v-bind="$attrs"
    >
      <template v-for="i in count" :key="i">
        <slot v-if="loading" :key="i" name="template">
          <el-skeleton-item class="is-first" variant="p" />
          <el-skeleton-item
            v-for="item in rows"
            :key="item"
            :class="{
              'el-skeleton__paragraph': true,
              'is-last': item === rows && rows > 1,
            }"
            variant="p"
          />
        </slot>
      </template>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs"></slot>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useThrottleRender } from '@element-plus/hooks'
import SkeletonItem from './item.vue'

export default defineComponent({
  name: 'ElSkeleton',
  components: {
    [SkeletonItem.name]: SkeletonItem,
  },
  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 3,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    throttle: {
      type: Number,
    },
  },
  setup(props) {
    const innerLoading = computed(() => {
      return props.loading
    })

    const uiLoading = useThrottleRender(innerLoading, props.throttle)

    return {
      uiLoading,
    }
  },
})
</script>
