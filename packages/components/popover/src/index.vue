<template>
  <el-popper
    ref="popperRef"
    v-bind="$attrs"
    effect="light"
    :popper-class="kls"
    :popper-style="style"
    :stop-popper-mouse-event="false"
  >
    <template #default>
      <div v-if="title" class="el-popover__title" role="title">
        {{ title }}
      </div>
      <slot>
        {{ content }}
      </slot>
    </template>

    <template v-if="$slots.reference" #trigger>
      <slot name="reference" />
    </template>
  </el-popper>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import ElPopper, { usePopperProps } from '@element-plus/components/popper'
import { isString } from '@element-plus/utils/util'

import type { StyleValue } from 'vue'

const emits = ['update:visible', 'after-enter', 'after-leave']

const NAME = 'ElPopover'

export default defineComponent({
  name: NAME,
  components: {
    ElPopper,
  },
  props: {
    title: String,
    content: usePopperProps.content,
    popperClass: String,
    popperStyle: usePopperProps.popperStyle,
    width: {
      type: [String, Number],
      default: 150,
    },
  },
  emits,
  setup(props) {
    const popperRef = ref()
    const width = computed(() => {
      if (isString(props.width)) {
        return props.width as string
      }
      return `${props.width}px`
    })

    const style = computed(() => {
      return [
        {
          width: width.value,
        },
        props.popperStyle,
      ] as StyleValue
    })

    const kls = computed(() => {
      return [
        { 'el-popover--plain': !!props.content },
        'el-popover',
        props.popperClass,
      ]
    })

    return {
      kls,
      style,
      popperRef,
    }
  },
})
</script>
