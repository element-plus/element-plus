<template>
  <div class="demo-color-box-group">
    <div
      v-for="(border, i) in borderColors"
      :key="i"
      class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: `var(--el-border-color-${border.type})` }"
    >
      {{ border.name || formatType(border.type) + ' Border' }}
      <div class="value">{{ getColorValue(border.type).toUpperCase() }}</div>
    </div>
  </div>
</template>

<script>
import { formatType } from '../../../util'

export default {
  props: {
    borderColors: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    formatType,
    getColorValue(type) {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--el-border-color-${type}`,
      )
    },
  },
}
</script>
