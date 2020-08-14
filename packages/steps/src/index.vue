<template>
  <div :class="['el-steps', simple ? 'el-steps--simple' : `el-steps--${direction}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from 'vue'

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
  setup(props) {
    const steps = ref([])

    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.ctx.setIndex(index)
      })
    })

    provide('ElSteps', { props, steps })

    return {
      steps,
    }
  },
})
</script>
