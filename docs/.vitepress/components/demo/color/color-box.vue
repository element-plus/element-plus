<template>
  <el-row :gutter="12">
    <el-col
      v-for="(type, i) in colorsType"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="demo-color-box" :style="{ background: getColorValue(type) }">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        <div class="value">{{ getColorValue(type).toUpperCase() }}</div>
        <div class="bg-color-sub">
          <div
            v-for="(item, key) in Array(2)"
            :key="key"
            class="bg-success-sub-item"
            :style="{
              background: tintColor(getColorValue(type), (key + 8) / 10),
            }"
          ></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
const colorsType = ['success', 'warning', 'danger', 'info']
import { tintColor } from '../../../color.js'

export default {
  data: function() {
    return {
      colorsType,
    }
  },
  methods: {
    getColorValue(type) {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--el-color-${type}`,
      )
    },
    tintColor,
  },
}
</script>
