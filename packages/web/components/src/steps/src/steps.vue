<template>
  <div :class="[ns.b(), ns.m(simple ? 'simple' : direction)]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, watch } from 'vue'
import { CHANGE_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { stepsEmits, stepsProps } from './steps'

import type { Ref } from 'vue'
import type { StepItemState } from './item.vue'

defineOptions({
  name: 'ElSteps',
})

const props = defineProps(stepsProps)
const emit = defineEmits(stepsEmits)

const ns = useNamespace('steps')

const steps: Ref<StepItemState[]> = ref([])

watch(steps, () => {
  steps.value.forEach((instance: StepItemState, index: number) => {
    instance.setIndex(index)
  })
})

provide('ElSteps', { props, steps })

watch(
  () => props.active,
  (newVal: number, oldVal: number) => {
    emit(CHANGE_EVENT, newVal, oldVal)
  }
)
</script>
