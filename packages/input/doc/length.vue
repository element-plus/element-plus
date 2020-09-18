<template>
  <el-input
    v-model="text"
    type="text"
    placeholder="请输入内容"
    maxlength="10"
    show-word-limit
  />
  <div style="margin: 20px 0;"></div>
  <el-input
    v-model="textarea"
    type="textarea"
    placeholder="请输入内容"
    maxlength="30"
    show-word-limit
  />
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: '',
    }
  },
}
</script>
