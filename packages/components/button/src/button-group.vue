<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { ElButtonGruopKey } from './context'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElButtonGroup',
  props: {
    size: {
      type: String as PropType<ComponentSize>,
    },
  },
  setup(props){
    provide(ElButtonGruopKey, {
      size: props.size,
    })
  },
})
</script>
