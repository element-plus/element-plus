<template>
  <el-tooltip
    v-bind="$attrs"
    :aria-label="title"
    :effect="effect"
    :enterable="enterable"
    :popper-class="kls"
    :popper-style="style"
  >
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>

    <template #content>
      <div v-if="title" class="el-popover__title" role="title">
        {{ title }}
      </div>
      <slot>
        {{ content }}
      </slot>
    </template>
  </el-tooltip>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { usePopperContentProps } from '@element-plus/components/popper'
import ElTooltip from '@element-plus/components/tooltip'
import { isString } from '@element-plus/utils/util'

import type { StyleValue } from 'vue'

const emits = ['update:visible', 'after-enter', 'after-leave']

const NAME = 'ElPopover'

export default defineComponent({
  name: NAME,
  components: {
    ElTooltip,
  },
  props: {
    title: String,
    content: usePopperContentProps.content,
    effect: {
      ...usePopperContentProps.effect,
      default: 'light',
    },
    hideAfter: {
      type: Number,
      default: 200,
    },
    popperClass: String,
    popperStyle: usePopperContentProps.popperStyle,
    enterable: {
      ...usePopperContentProps.enterable,
      default: true,
    },
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
