<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-rate v-model="value1" /> {{ value1 }}✨
  </div>
  <div class="block">
    <span class="demonstration">Progressive discoloration</span>
    <el-rate
      v-model="value2"
      :colors="colors"
    />
  </div>
  <el-rate
    v-model="value"
    show-text
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const basic = defineComponent({
  data() {
    return {
      value: null,
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
    }
  },
})
export default basic
</script>
