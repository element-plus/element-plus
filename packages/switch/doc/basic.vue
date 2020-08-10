<template>
  <div>
    <div>
      use v-model
      <el-switch v-model="v" />
    </div>
    <div>
      use :value
      <el-switch :value="value" @change="value = $event" />
    </div>
    <div>
      use :model-value
      <el-switch :model-value="modelValue" @update:modelValue="modelValue = $event" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      v: true,
      value: true,
      modelValue: true,
    }
  },
})
</script>

