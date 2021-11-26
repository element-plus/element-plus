<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@element-plus/tokens'
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
  },
})
</script>
