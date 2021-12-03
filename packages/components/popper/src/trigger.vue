<template>
  <el-slot v-if="!virtualRef" ref="triggerRef" tag="div" v-bind="$attrs">
    <slot />
  </el-slot>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from 'vue'
import { ElSlot } from '@element-plus/components/slot'

import { definePropType, buildProps } from '@element-plus/utils/props'
import { POPPER_INJECTION_KEY } from './tokens'
import type { Measurable } from './tokens'

export default defineComponent({
  name: 'ElPopperTrigger',
  components: {
    ElSlot,
  },
  props: buildProps({
    virtualRef: { type: definePropType<Measurable>(Object) },
  }),

  setup(props) {
    const triggerRef = ref()
    const popperInjection = inject(POPPER_INJECTION_KEY, undefined)!

    onMounted(() => {
      popperInjection.triggerRef.value =
        props.virtualRef || triggerRef.value.$el
    })

    return {
      triggerRef,
    }
  },
})
</script>
