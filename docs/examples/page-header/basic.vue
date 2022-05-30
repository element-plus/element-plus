<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
</script>
<template>
  <el-page-header content="detail" @back="goBack" />
</template>
