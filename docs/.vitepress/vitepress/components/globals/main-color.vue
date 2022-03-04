<template>
  <el-row :gutter="12">
    <el-col :span="10" :xs="{ span: 12 }">
      <div class="demo-color-box" :style="{ background: primary }">
        Brand Color
        <div class="value">{{ primary.toUpperCase() }}</div>
        <div class="bg-color-sub" :style="{ background: primary }">
          <div
            v-for="level in colorLevel"
            :key="level"
            class="bg-blue-sub-item hover:(cursor-pointer shadow)"
            :style="{
              width: `${100 / 10}%`,
              background: getColorValue('primary-' + level),
            }"
            @click="copyColor('primary-' + level)"
          ></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useCssVar } from '@vueuse/core'
import { getColorValue, useCopyColor } from '../../utils'

const primary = useCssVar('--el-color-primary')
const colorLevel = [...Array(10).keys()].map((i) => `light-${i + 1}`)
colorLevel.unshift('dark-2')

const { copyColor } = useCopyColor()
</script>
