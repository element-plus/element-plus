<template>
  <div>
    <el-popover
      v-model:visible="visible"
      placement="bottom"
      :width="600"
      trigger="click"
    >
      <template #reference>
        <el-input v-model="value" clearable />
      </template>
      <el-select-icon
        v-model="value"
        :pagination="pagination"
        :scrollbar="scrollbar"
        @update:model-value="onChange"
      />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const pagination = reactive({
  currentPage: 1,
  pageSize: 88,
  pagerCount: 5,
  small: true,
  background: true,
})
const scrollbar = reactive({ height: '300px' })
const value = ref('')
const visible = ref(false)
const onChange = () => {
  visible.value = false
}
</script>
