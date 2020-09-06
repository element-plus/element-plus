<template>
  <div :class="['el-steps', simple ? 'el-steps--simple' : `el-steps--${direction}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from 'vue'

const CHANGE_EVENT = 'change'

export default defineComponent({
  name: 'ElSteps',
  props: {
    space: {
      type: [Number, String],
      default: '',
    },
    active: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val: string): boolean => ['horizontal', 'vertical'].indexOf(val) > -1,
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    finishStatus: {
      type: String,
      default: 'finish',
      validator: (val: string): boolean => ['wait', 'process', 'finish', 'error', 'success'].indexOf(val) > -1,
    },
    processStatus: {
      type: String,
      default: 'process',
      validator: (val: string): boolean => ['wait', 'process', 'finish', 'error', 'success'].indexOf(val) > -1,
    },
  },
  emits: [CHANGE_EVENT],
  setup(props, { emit }) {
    const steps = ref([])

    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setupState.setIndex(index)
      })
    })

    provide('ElSteps', { props, steps })

    watch(() => props.active, (newVal, oldVal) => {
      emit(CHANGE_EVENT, newVal, oldVal)
    })

    return {
      steps,
    }
  },
})
</script>
