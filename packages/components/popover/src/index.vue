<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    :aria-label="title"
    :effect="effect"
    :enterable="enterable"
    :popper-class="kls"
    :popper-style="style"
    :teleported="compatTeleported"
    persistent
    @show="afterEnter"
    @hide="afterLeave"
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
import { defineComponent, computed, ref, unref } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { useDeprecateAppendToBody } from '@element-plus/components/popper'
import { isString } from '@element-plus/utils/util'
import { usePopoverProps } from './popover'

import type { StyleValue } from 'vue'

const emits = ['update:visible', 'after-enter', 'after-leave']

const COMPONENT_NAME = 'ElPopover'

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip,
  },
  props: usePopoverProps,
  emits,
  setup(props, { emit }) {
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
        { 'el-popover--plain': !!props.content },
        'el-popover',
        props.popperClass,
      ]
    })

    const { compatTeleported } = useDeprecateAppendToBody(
      COMPONENT_NAME,
      'appendToBody'
    )

    const hide = () => {
      tooltipRef.value?.hide()
    }

    const afterEnter = () => {
      emit('after-enter')
    }

    const afterLeave = () => {
      emit('after-leave')
    }

    return {
      compatTeleported,
      kls,
      style,
      tooltipRef,
      popperRef,
      hide,
      afterEnter,
      afterLeave,
    }
  },
})
</script>
