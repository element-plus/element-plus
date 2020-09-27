<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button size="small" type="primary">select file</el-button>
    </template>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
    >
      upload to server
    </el-button>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
</template>
<script>
export default {
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
  },
}
</script>
