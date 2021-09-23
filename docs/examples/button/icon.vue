<template>
  <el-button type="primary" :icon="Edit"></el-button>
  <el-button type="primary" :icon="Share"></el-button>
  <el-button type="primary" :icon="Delete"></el-button>
  <el-button type="primary" :icon="Search">Search</el-button>
  <el-button type="primary">
    Upload<el-icon><upload /></el-icon>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Share, Search, Edit, Delete, Upload } from '@element-plus/icons'
export default defineComponent({
  components: { Upload },
  setup() {
    return {
      Share,
      Search,
      Edit,
      Delete,
    }
  },
})
</script>
