<script lang="ts" setup>
import { toRef } from 'vue'
import { useNamespace, useThrottleRender } from '@element-plus/hooks'
import { skeletonProps } from './skeleton'
import ElSkeletonItem from './skeleton-item.vue'

const props = defineProps(skeletonProps)
defineOptions({
  name: 'ElSkeleton',
})
const ns = useNamespace('skeleton')
const uiLoading = useThrottleRender(toRef(props, 'loading'), props.throttle)

defineExpose({
  /** @description loading state */
  uiLoading,
})
</script>

<template>
  <template v-if="uiLoading">
    <div :class="[ns.b(), ns.is('animated', animated)]" v-bind="$attrs">
      <template v-for="i of count" :key="i">
        <slot v-if="loading" :key="i" name="template">
          <el-skeleton-item :class="ns.is('first')" variant="p" />
          <el-skeleton-item
            v-for="item of rows"
            :key="item"
            :class="[
              ns.e('paragraph'),
              ns.is('last', item === rows && rows > 1),
            ]"
            variant="p"
          />
        </slot>
      </template>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs" />
  </template>
</template>
