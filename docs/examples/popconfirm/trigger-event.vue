<template>
  <el-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    icon="el-icon-info"
    icon-color="red"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script lang="ts">
export default {
  methods: {
    confirmEvent() {
      console.log('confirm!')
    },
    cancelEvent() {
      console.log('cancel!')
    },
  },
}
</script>
