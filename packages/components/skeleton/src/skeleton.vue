<template>
  <template v-if="uiLoading">
    <div
      :class="[skeletonPrefixClass, animated ? 'is-animated' : '']"
      v-bind="$attrs"
    >
      <template v-for="i in count" :key="i">
        <slot v-if="loading" :key="i" name="template">
          <el-skeleton-item class="is-first" variant="p" />
          <el-skeleton-item
            v-for="item in rows"
            :key="item"
            :class="{
              [`${skeletonPrefixClass}__paragraph`]: true,
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
import SkeletonItem from './skeleton-item.vue'
import { skeletonProps } from './skeleton'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElSkeleton',
  components: {
    [SkeletonItem.name]: SkeletonItem,
  },
  props: skeletonProps,
  setup(props) {
    const skeletonPrefixClass = usePrefixClass('skeleton')
    const innerLoading = computed(() => {
      return props.loading
    })

    const uiLoading = useThrottleRender(innerLoading, props.throttle)

    return {
      skeletonPrefixClass,
      uiLoading,
    }
  },
})
</script>
