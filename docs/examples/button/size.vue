<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button size="medium">Medium</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="mini">Mini</el-button>
  </el-row>
  <el-row>
    <el-button round>Default</el-button>
    <el-button size="medium" round>Medium</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="mini" round>Mini</el-button>
  </el-row>
  <el-row>
    <el-button :icon="Search" circle></el-button>
    <el-button :icon="Search" size="medium" circle></el-button>
    <el-button :icon="Search" size="small" circle></el-button>
    <el-button :icon="Search" size="mini" circle></el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons'
export default defineComponent({
  setup() {
    return {
      Search,
    }
  },
})
</script>
