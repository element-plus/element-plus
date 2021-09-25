<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image></el-image>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
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
