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
    },
    processStatus: {
      type: String,
      default: 'process',
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
