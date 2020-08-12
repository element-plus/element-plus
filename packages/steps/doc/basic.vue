<template>
  <el-steps :active="active" direction="vertical" :space="100">
    <el-step title="Step 1" description="This is a long long long description" />
    <el-step title="Step 2" description="This is a long long long description" />
    <el-step title="Step 3" description="This is a long long long description" />
  </el-steps>
  <el-steps :active="active">
    <el-step title="Step 1" icon="el-icon-edit" />
    <el-step title="Step 2" icon="el-icon-upload" />
    <el-step title="Step 3" icon="el-icon-picture" />
  </el-steps>
  <el-steps :active="active" simple>
    <el-step title="Step 1" icon="el-icon-edit" />
    <el-step title="Step 2" icon="el-icon-upload" />
    <el-step title="Step 3" icon="el-icon-picture" />
  </el-steps>
  <el-button type="primary" @click="handleClick">move</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const active = ref(0)

    const handleClick = () => {
      if (active.value++ > 2) active.value = 0
    }

    return {
      active,
      handleClick,
    }
  },
})
</script>

<style scoped>
  .el-steps {
    margin-bottom: 50px;
  }
</style>
