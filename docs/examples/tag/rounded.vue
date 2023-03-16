<template>
  <el-row class="mb-3">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      round
    >
      {{ item.label }}
    </el-tag>
  </el-row>
  <el-row class="mb-3">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="light"
      round
    >
      {{ item.label }}
    </el-tag>
  </el-row>
  <el-row class="mb-3">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="plain"
      round
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
