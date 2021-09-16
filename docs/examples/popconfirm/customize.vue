<template>
  <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    icon="el-icon-info"
    icon-color="red"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>
