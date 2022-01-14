<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import { buttonGroupProps } from './button-group'

export default defineComponent({
  name: 'ElButtonGroup',
  props: buttonGroupProps,

  setup(props) {
    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
      })
    )
    const ns = useNamespace('button')
    return {
      className: `${ns.b('group')}`,
    }
  },
})
</script>
