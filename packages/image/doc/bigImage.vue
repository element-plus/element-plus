<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      ],
    }
  },
}
</script>

<style scoped>
  .demo-image__lazy {
      height: 400px;
      overflow: auto;
  }
  .demo-image__lazy .el-image {
    display: block;
    min-height: 250px;
    margin-bottom: 10px;
    width: 50%;
  }
  .demo-image__lazy .el-image:last-child {
      margin-bottom: 0;
  }
</style>
