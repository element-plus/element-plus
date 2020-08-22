<template>
  <div class="block">
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  // setup(props, context) {},
})
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  word-break: keep-all;
}
.el-dropdown-menu__item.is-disabled {
  pointer-events: inherit;
}
</style>
