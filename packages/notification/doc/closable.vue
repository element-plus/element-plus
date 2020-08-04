<template>
  <div>
    <el-button class="item" @click="onClick">With timer</el-button>
    <el-button class="item" @click="onClickNoTimer">Without timer</el-button>
  </div>
</template>

<script lang="ts">

export default {
  methods: {
    onClick(): void {
      this.$notify({
        title: 'With Timer',
        message: 'I\'ll go away within 4500ms ',
      })
    },
    onClickNoTimer(): void {
      this.$notify({
        duration: 0,
        message: 'I will not disappear unless you click close or press esc',
        title: 'No Timer',
      })
    },
  },
}
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
