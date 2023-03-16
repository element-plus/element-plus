<template>
  <el-page-header @back="goBack">
    <template #content>
      <el-text class="text-large font-600 mr-3"> Title </el-text>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
</script>
