<template>
  <i class="el-icon" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isNumber, isString } from '@element-plus/utils/util'
import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElIcon',
  inheritAttrs: false,

  props: iconProps,

  setup(props) {
    return {
      style: computed<CSSProperties>(() => {
        if (!props.size && !props.color) {
          return {}
        }
        let size = props.size
        if (isNumber(size) || (isString(size) && !size.endsWith('px'))) {
          size = `${size}px`
        }
        return {
          ...(props.size ? { fontSize: size } : {}),
          ...(props.color ? { '--color': props.color } : {}),
        } as CSSProperties
      }),
    }
  },
})
</script>
