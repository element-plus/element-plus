<template>
  <div>
    <div>
      use v-model
      <el-switch v-model="v" />
    </div>
    <div>
      use :value
      <el-switch :value="true" />
    </div>
    <div>
      use :model-value
      <el-switch :model-value="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      v: true,
    }
  },
})
</script>

