<template>
  <div class="demo-color-box-group">
    <div
      v-for="(text, i) in textColors"
      :key="i"
      class="demo-color-box demo-color-box-other"
      :style="{ background: `var(--el-color-text-${text.type})` }"
    >
      {{ text.name || formatType(text.type) + ' Text' }}
      <div class="value">{{ getColorValue(text.type).toUpperCase() }}</div>
    </div>
  </div>
</template>

<script>
import { formatType } from '../../../util'

export default {
  props: {
    textColors: {
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
        `--el-color-text-${type}`,
      )
    },
  },
}
</script>
