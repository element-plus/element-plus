<template>
  <div>
    <h1>消息提示</h1>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Alert',
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        // callback: action => {
        //   alert(`action: ${ action }`)
        // },
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

