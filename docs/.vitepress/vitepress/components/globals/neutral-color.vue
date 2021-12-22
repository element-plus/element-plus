<template>
  <el-row :gutter="12">
    <el-col :span="6" :xs="{ span: 12 }">
      <div class="demo-color-box-group">
        <div
          v-for="(text, i) in textColors"
          :key="i"
          class="demo-color-box demo-color-box-other"
          :style="{ background: getCssVarName('text-color', text.type) }"
        >
          {{ text.name || formatType(text.type) + ' Text' }}
          <div class="value">
            {{ getCssVarValue('text-color', text.type).toUpperCase() }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" :xs="{ span: 12 }">
      <div class="demo-color-box-group">
        <div
          v-for="(border, i) in borderColors"
          :key="i"
          class="demo-color-box demo-color-box-other demo-color-box-lite"
          :style="{ background: `var(--el-border-color-${border.type})` }"
        >
          {{ formatType(border.type) + ' Border' }}
          <div class="value">
            {{ getColorValue(border.type).toUpperCase() }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" :xs="{ span: 12 }">
      <div class="demo-color-box-group">
        <div
          class="demo-color-box demo-color-box-other"
          :style="{ background: black }"
        >
          Basic Black
          <div class="value">{{ black }}</div>
        </div>
        <div
          class="demo-color-box demo-color-box-other"
          :style="{
            background: white,
            color: '#303133',
            border: '1px solid #eee',
          }"
        >
          Basic White
          <div class="value">{{ white }}</div>
        </div>
        <div class="demo-color-box demo-color-box-other bg-transparent">
          Transparent
          <div class="value">Transparent</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue'

export default defineComponent({
  setup() {
    const getColorValue = (type: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--el-border-color-${type}`
      )
    }

    const formatType = (type: string) => {
      return type
        .split('-')
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')
    }

    const getCssVarName = (namespace: string, type: string) => {
      return `var(--el-${namespace}-${type})`
    }

    const getCssVarValue = (namespace, type) => {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--el-${namespace}-${type}`
      )
    }

    return {
      borderColors: markRaw([
        {
          type: 'base',
          color: '#DCDFE6',
        },
        {
          type: 'light',
          color: '#E4E7ED',
        },
        {
          type: 'lighter',
          color: '#EBEEF5',
        },
        {
          type: 'extra-light',
          color: '#F2F6FC',
        },
      ]),
      textColors: markRaw([
        {
          name: 'Primary Text',
          type: 'primary',
        },
        {
          name: 'Regular Text',
          type: 'regular',
        },
        {
          name: 'Secondary Text',
          type: 'secondary',
        },
        {
          name: 'Placeholder Text',
          type: 'placeholder',
        },
      ]),
      black: '#000000',
      white: '#FFFFFF',

      formatType,
      getColorValue,
      getCssVarName,
      getCssVarValue,
    }
  },
})
</script>
