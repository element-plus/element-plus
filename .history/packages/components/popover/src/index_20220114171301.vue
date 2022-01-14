<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    :aria-label="title"
    :effect="effect"
    :enterable="enterable"
    :popper-class="kls"
    :popper-style="style"
    persistent
  >
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>

    <template #content>
      <div v-if="title" :class="`${popoverPrefixClass}__title`" role="title">
        {{ title }}
      </div>
      <slot>
        {{ content }}
      </slot>
    </template>
  </el-tooltip>
</template>
<script lang="ts">
import { defineComponent, computed, ref, unref } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { isString } from '@element-plus/utils/util'
import { usePopoverProps } from './popover'
import { usePrefixClass } from '@element-plus/hooks'

import type { StyleValue } from 'vue'

const emits = ['update:visible', 'after-enter', 'after-leave']

const NAME = 'ElPopover'

export default defineComponent({
  name: NAME,
  components: {
    ElTooltip,
  },
  props: usePopoverProps,
  emits,
  setup(props) {
    const popoverPrefixClass = usePrefixClass('popover')
    const tooltipRef = ref<InstanceType<typeof ElTooltip> | null>(null)
    const popperRef = computed(() => {
      return unref(tooltipRef)?.popperRef
    })
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
        { '${popoverPrefixClass}--plain': !!props.content },
        'el-popover',
        props.popperClass,
      ]
    })

    return {
      popoverPrefixClass,
      kls,
      style,
      tooltipRef,
      popperRef,
    }
  },
})
</script>
