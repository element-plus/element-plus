<template>
  <el-popconfirm
    width="220"
    :icon="InfoFilled"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    :disabled="deleted"
    @confirm="onConfirm"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
    <template #actions="{ confirm, cancel }">
      <el-button size="small" @click="confirm">No!</el-button>
      <el-button type="danger" size="small" disabled @click="cancel">
        Yes?
      </el-button>
    </template>
  </el-popconfirm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

const deleted = ref(false)
function onConfirm() {
  deleted.value = true
}
</script>
