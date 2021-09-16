<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A" />
    <el-checkbox label="Option B" />
    <el-checkbox label="Option C" />
    <el-checkbox label="disabled" disabled />
    <el-checkbox label="selected and disabled" disabled />
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkList = ref(['selected and disabled', 'Option A'])
    return {
      checkList,
    }
  },
})
</script>
