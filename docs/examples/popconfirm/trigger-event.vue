<template>
  <el-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    :icon="InfoFilled"
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
import { InfoFilled } from '@element-plus/icons'

export default {
  data() {
    return {
      InfoFilled,
    }
  },
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
