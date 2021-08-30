<template>
  <div class="demo-color-box-group">
    <div
      v-for="(text, i) in textColors"
      :key="i"
      class="demo-color-box demo-color-box-other"
      :style="{ background: getCssVarName('text-color', text.type) }"
    >
      {{ text.name || formatType(text.type) + ' Text' }}
      <div class="value">{{ getCssVarValue('text-color', text.type).toUpperCase() }}</div>
    </div>
  </div>
</template>

<script>
import { formatType, getCssVarValue, getCssVarName } from '../../../util'

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
    getCssVarValue,
    getCssVarName,
  },
}
</script>
