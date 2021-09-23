<template>
  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft"> Previous Page</el-button>
    <el-button type="primary">
      Next Page<el-icon><arrow-right /></el-icon>
    </el-button>
  </el-button-group>

  <el-button-group>
    <el-button type="primary" :icon="Edit"></el-button>
    <el-button type="primary" :icon="Share"></el-button>
    <el-button type="primary" :icon="Delete"></el-button>
  </el-button-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Share, Edit, Delete, ArrowLeft, ArrowRight } from '@element-plus/icons'
export default defineComponent({
  components: { ArrowRight },
  setup() {
    return {
      Share,
      Edit,
      Delete,
      ArrowLeft,
    }
  },
})
</script>
