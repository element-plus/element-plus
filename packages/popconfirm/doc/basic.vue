<template>
  <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="NO"
    icon="el-icon-info"
    icon-color="red"
    title="Are you sure to delete this?？"
    confirm-button-type="success"
    cancel-button-type="info"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <template #reference>
      <el-button>delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: 'Basic',
  setup(){
    const onConfirm = () => {
      console.log('Confirm button clicked')
    }
    const onCancel = () => {
      console.log('Cancel button clicked')
    }
    return {
      onConfirm,
      onCancel,
    }
  },
}
</script>

<style scoped>

</style>
