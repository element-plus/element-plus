<template>
  <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
    {{ tag.name }}
  </el-tag>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tags: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' },
      ],
    }
  },
}
</script>
