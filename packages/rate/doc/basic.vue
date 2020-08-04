<template>
  <div class="block">
    <span class="demonstration">默认不区分颜色</span>
    <el-rate v-model="value1" /> {{ value1 }}✨
  </div>
  <div class="block">
    <span class="demonstration">区分颜色</span>
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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  },
})
export default basic
</script>
