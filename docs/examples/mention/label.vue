<template>
  <el-mention
    v-model="value"
    :options="options"
    style="width: 320px"
    placeholder="Please input"
  >
    <template #label="{ item }">
      <div style="display: flex; align-items: center">
        <el-avatar :size="32" :icon="UserFilled" />
        <span style="margin-left: 6px">{{ item.value }}</span>
      </div>
    </template>
  </el-mention>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
const value = ref('')

const options = ref([
  {
    value: 'Fuphoenixes',
  },
  {
    value: 'kooriookami',
  },
  {
    value: 'Jeremy',
  },
  {
    value: 'btea',
  },
])
</script>
