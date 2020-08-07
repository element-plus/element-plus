<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-image />
    </div>
    <div class="block">
      <span class="demonstration">自定义</span>
      <el-image>
        <template #error>
          <div class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>


<style scoped>
  .demo-image__error .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0;
  }
  .demo-image__error .image-slot {
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

    .demo-image__error .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .demo-image__error .el-image {
        width: 300px;
        height: 200px;
    }
</style>
