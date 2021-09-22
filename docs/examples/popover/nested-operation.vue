<template>
  <el-popover v-model:visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false"
        >cancel</el-button
      >
      <el-button type="primary" size="mini" @click="visible = false"
        >confirm</el-button
      >
    </div>
    <template #reference>
      <el-button @click="visible = true">Delete</el-button>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    }
  },
})
</script>
