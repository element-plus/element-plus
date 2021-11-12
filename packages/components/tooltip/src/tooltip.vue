<template>
  <el-popper
    ref="popperRef"
    v-model:visible="modelValue"
    v-bind="$attrs"
    :show-after="compatShowAfter"
    :show-arrow="compatShowArrow"
    @update:visible="$emit('update:modelValue')"
  >
    <template #default>
      <slot name="content" />
    </template>

    <template v-if="$slots.default" #trigger>
      <slot />
    </template>
  </el-popper>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import ElPopper from '@element-plus/components/popper'
import { useModelToggleProps, useModelToggleEmits } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'
import { isBool, isUndefined } from '@element-plus/utils/util'

export default defineComponent({
  components: {
    ElPopper,
  },
  props: {
    ...useModelToggleProps,
    openDelay: {
      type: Number,
    },
    visibleArrow: {
      type: Boolean,
      default: undefined,
    },
  },
  emits: useModelToggleEmits,
  setup(props, { attrs }) {
    return {
      compatShowAfter: computed(() => {
        if (!isUndefined(props.openDelay)) {
          debugWarn(
            'ElTooltip',
            'open-delay is about to be deprecated in the next major version, please use `show-after` instead'
          )
        }
        return props.openDelay || (attrs.showAfter as number)
      }),
      compatShowArrow: computed(() => {
        if (!isUndefined(props.visibleArrow)) {
          debugWarn(
            'ElTooltip',
            '`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead'
          )
        }
        return isBool(props.visibleArrow)
          ? props.visibleArrow
          : (attrs.showArrow as boolean)
      }),
      popperRef: ref(),
    }
  },
})
</script>
