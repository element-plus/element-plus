<template>
  <div class="flex gap-2">
    <span>Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="flex gap-2 mt-4">
    <span>Light</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="flex gap-2 mt-4">
    <span>Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'warning', label: 'Tag 4' },
  { type: 'danger', label: 'Tag 5' },
])
</script>
