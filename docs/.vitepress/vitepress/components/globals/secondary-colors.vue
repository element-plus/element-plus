<template>
  <el-row :gutter="12">
    <el-col v-for="type in colorsType" :key="type" :span="6" :xs="{ span: 12 }">
      <div class="demo-color-box" :style="{ background: getColorValue(type) }">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        <div class="value">{{ getColorValue(type).toUpperCase() }}</div>
        <div class="bg-color-sub">
          <div
            v-for="(_, key) in Array(2)"
            :key="key"
            class="bg-secondary-sub-item"
            :style="{
              background: tintColor(getColorValue(type), (key + 8) / 10),
            }"
          ></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue'

export default defineComponent({
  setup() {
    const tintColor = (c: string, tint: number) => {
      const color = c.trim().slice(1)
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)

      if (tint === 0) {
        // when primary color is in its rgb space
        return [red, green, blue].join(',')
      } else {
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
      }
    }

    const getColorValue = (type: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--el-color-${type}`
      )
    }

    return {
      colorsType: markRaw(['success', 'warning', 'danger', 'info']),
      getColorValue,
      tintColor,
    }
  },
})
</script>
