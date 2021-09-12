<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { elButtonGroupKey } from '@element-plus/tokens'
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
  setup(props) {
    provide(
      elButtonGroupKey,
      reactive({
        size: toRef(props, 'size'),
      })
    )
  },
})
</script>
