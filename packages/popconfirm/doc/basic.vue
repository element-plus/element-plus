<template>
  <el-popconfirm
    confirmButtonText='好的'
    cancelButtonText='不用了'
    icon="el-icon-info"
    iconColor="red"
    title="这是一段内容确定删除吗？"
    @onConfirm="onConfirm"
    @onCancel="onConfirm"
  >
    <template #reference>
      <el-button>删除</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
    export default {
        name: "basic",
        setup(){
          const onConfirm = () => {
            console.log(1)
          }
          return {
            onConfirm
          }
        },
    }
</script>

<style scoped>

</style>
