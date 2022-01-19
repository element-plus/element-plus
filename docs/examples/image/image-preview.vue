<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList"
      :initial-index="1"
    >
    </el-image>
  </div>
</template>

<script lang="ts" setup>
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
]
</script>
