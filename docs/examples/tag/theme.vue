<template>
  <el-row class="my-2 items-center">
    <el-text class="tag-group__title m-1 line-height-2">Dark</el-text>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      closable
    >
      {{ item.label }}
    </el-tag>
  </el-row>
  <el-row class="my-2 items-center">
    <el-text class="tag-group__title m-1">Light</el-text>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
      closable
    >
      {{ item.label }}
    </el-tag>
  </el-row>
  <el-row class="my-2 items-center">
    <el-text class="tag-group__title m-1">Plain</el-text>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
      closable
    >
      {{ item.label }}
    </el-tag>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>
