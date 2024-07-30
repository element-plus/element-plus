<template>
  <div v-for="(item, index) in list" :key="index">
    <el-icon>
      <component :is="item.icon" />
    </el-icon>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { Delete, Edit, Loading, Search, Share } from '@element-plus/icons-vue'
const list = reactive([
  {
    icon: Edit,
  },
  {
    icon: Share,
  },
  {
    icon: Delete,
  },
  {
    icon: Search,
  },
  {
    icon: Loading,
  },
])
</script>
