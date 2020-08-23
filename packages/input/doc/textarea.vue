<template>
  <div class="demo-input">
    <h3>文本域</h3>
    <el-input
      v-model="textarea1"
      :rows="2"
      type="textarea"
      placeholder="请输入内容"
    />
  </div>
  <div class="demo-input">
    <h3>可自适应文本高度的文本域</h3>
    <el-input
      v-model="textarea1"
      type="textarea"
      autosize
      placeholder="请输入内容"
    />
    <div style="margin: 20px 0;"></div>
    <el-input
      v-model="textarea2"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const basic = defineComponent({
  data() {
    return {
      textarea1: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd',
      textarea2: '',
    }
  },
})

export default basic
</script>

<style>
.demo-input .el-textarea {
  width: 414px;
}
</style>
