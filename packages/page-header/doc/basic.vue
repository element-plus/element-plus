<template>
  <el-page-header content="Detail" @back="goBack" />
</template>

<script lang='ts'>
export default {
  methods: {
    goBack() {
      console.log('go back')
    },
  },
}
</script>
