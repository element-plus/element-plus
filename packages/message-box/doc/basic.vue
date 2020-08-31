<template>
  <div>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    open(): void {
      this.$msgbox({
        title: '消息',
        message: '1231232',
      }).then(()=> {
        //
      })
    },
  },
}

</script>

<style scoped>
.el-alert {
  margin: 6px;
}
</style>

