<template>
  <div class="flex gap-2">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TagProps } from 'element-plus'

interface TagsItem {
  name: string
  type: TagProps['type']
}

const tags = ref<TagsItem[]>([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
])
</script>
