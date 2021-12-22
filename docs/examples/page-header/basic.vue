<template>
  <el-page-header content="detail" @back="goBack" />
</template>
<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
</script>
