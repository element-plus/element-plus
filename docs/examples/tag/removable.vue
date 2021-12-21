<template>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    class="mx-1"
    closable
    :type="tag.type"
  >
    {{ tag.name }}
  </el-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
])
</script>
