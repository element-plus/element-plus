<template>
  <div class="demo-input-size">
    <el-input v-model="input1" placeholder="Please Input" />
    <el-input v-model="input2" size="medium" placeholder="Please Input" />
    <el-input v-model="input3" size="small" placeholder="Please Input" />
    <el-input v-model="input4" size="mini" placeholder="Please Input" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
})
</script>

<style scoped>
.el-input {
  margin-bottom: 16px;
}
</style>
