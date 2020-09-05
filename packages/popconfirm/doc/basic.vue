<template>
  <el-popconfirm
    confirm-button-text="好的"
    cancel-button-text="不用了"
    icon="el-icon-info"
    icon-color="red"
    title="这是一段内容确定删除吗？"
    confirm-button-type="success"
    cancel-button-type="info"
    @confirm="onConfirm"
    @cancel="onConfirm"
  >
    <template #reference>
      <el-button>删除</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: 'Basic',
  setup(){
    const onConfirm = () => {
      console.log(1)
    }
    return {
      onConfirm,
    }
  },
}
</script>

<style scoped>

</style>
