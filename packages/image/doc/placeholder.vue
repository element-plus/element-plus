<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-image :src="src" />
    </div>
    <div class="block">
      <span class="demonstration">自定义</span>
      <el-image :src="src">
        <template #placeholder>
          <div class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
    .demo-image__placeholder .block {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
        vertical-align: top;
        margin: 0;
    }
    .demo-image__placeholder .image-slot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: #909399;
        font-size: 14px;
        margin: 0;
    }
    .demo-image__placeholder .el-image {
        width: 300px;
        height: 200px;
    }
    .demo-image__placeholder .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>
