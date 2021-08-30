<template>
  <div>
    <template v-for="(shadow, i) in shadowGroup" :key="i">
      <div
        class="demo-shadow"
        :style="{ boxShadow: `var(--el-box-shadow-${shadow.type})` }"
      ></div>
      <span class="demo-shadow-text">{{ shadow.name }} <code>box-shadow: {{ getValue(shadow.type) }}</code></span>
    </template>
  </div>
</template>

<script>
import { getCssVarValue } from '../../../util'
export default {
  props: {
    shadowGroup: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    getValue(type) {
      return getCssVarValue('box-shadow', type)
    },
  },
}
</script>
