<template>
  <div
    :class="[
      'el-steps',
      simple ? 'el-steps--simple' : `el-steps--${direction}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from 'vue'
import { CHANGE_EVENT } from '@element-plus/utils/constants'
import { stepsContextKey } from '@element-plus/tokens/steps'
import { stepsProps, stepsEmits } from './steps'
import type { StepItemState } from './step'

export default defineComponent({
  name: 'ElSteps',
  props: stepsProps,
  emits: stepsEmits,
  setup(props, { emit }) {
    const steps = ref<StepItemState[]>([])

    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setIndex(index)
      })
    })

    provide(stepsContextKey, { props, steps })

    watch(
      () => props.active,
      (newVal, oldVal) => {
        emit(CHANGE_EVENT, newVal, oldVal)
      }
    )

    return {
      steps,
    }
  },
})
</script>
