<script lang="ts" setup>
import { getColorValue, useCopyColor } from '../../utils'

const colorsType = ['success', 'warning', 'danger', 'info']

const colorLevel = [3, 5, 7, 8, 9].map((item) => `light-${item}`)
colorLevel.unshift('dark-2')

const { copyColor } = useCopyColor()
</script>

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
            v-for="(level, key) in colorLevel"
            :key="key"
            class="bg-secondary-sub-item transition hover:(cursor-pointer shadow)"
            :style="{
              width: `${100 / 6}%`,
              background: getColorValue(type + '-' + level),
            }"
            @click="copyColor(type + '-' + level)"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
