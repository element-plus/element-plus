<template>
  <el-row :gutter="12">
    <el-col :span="10" :xs="{ span: 12 }">
      <div class="demo-color-box" :style="{ background: primary }">
        Brand Color
        <div class="value">#409EFF</div>
        <div
          class="bg-color-sub"
          :style="{ background: tintColor(primary, 0.9) }"
        >
          <div
            v-for="item in 9"
            :key="item"
            class="bg-blue-sub-item"
            :style="{ background: tintColor(primary, (item + 1) / 10) }"
          ></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const primary = ref('#409EFF')
    const tintColor = (c: string, tint: number) => {
      const color = c.replace('#', '')
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

    return {
      tintColor,
      primary,
    }
  },
})
</script>
