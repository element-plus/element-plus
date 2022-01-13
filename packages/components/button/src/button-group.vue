<template>
  <div :class="prefixClass">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@element-plus/tokens'
import { usePrefixClass } from '@element-plus/hooks'
import { buttonGroupProps } from './button-group'

export default defineComponent({
  name: 'ElButtonGroup',
  props: buttonGroupProps,

  setup(props) {
    const prefixClass = usePrefixClass('button-group')

    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
      })
    )
    return {
      prefixClass,
    }
  },
})
</script>
