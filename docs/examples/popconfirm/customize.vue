<template>
  <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    :icon="InfoFilled"
    icon-color="red"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InfoFilled } from '@element-plus/icons'

export default defineComponent({
  setup() {
    return { InfoFilled }
  },
})
</script>
