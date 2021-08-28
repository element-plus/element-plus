<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { ElButtonGroupKey } from './context'
import { isValidComponentSize } from '@element-plus/utils/validators'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElButtonGroup',
  props: {
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props){
    provide(ElButtonGroupKey, {
      size: props.size,
    })
  },
})
</script>
