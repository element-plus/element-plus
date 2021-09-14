<template>
  <div>
    <el-switch v-model="value"> </el-switch>
    <el-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(false),
    }
  },
})
</script>
