<template>
  <div>
    <h1>确认消息</h1>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <h1>区分取消与关闭</h1>
    <el-button type="text" @click="open2">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Confirm',
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        alert('删除成功')
      }).catch(() => {
        alert('已取消删除')
      })
    },
    open2() {
      this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '放弃修改',
      })
        .then(() => {
          alert('保存修改')
        })
        .catch(action => {
          alert(action === 'cancel'
            ? '放弃保存并离开页面'
            : '停留在当前页面')
        })
    },
  },
}
</script>

<style scoped>

</style>
