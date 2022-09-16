<template>
  <el-tabs
    tab-position="right"
    style="height: 200px"
    class="demo-tabs"
    :tab-affix-props="tabAffixProps"
    :tab-wrapper="ElAffix"
    :tab-wrapper-props="tabWrapperProps"
  >
    <el-tab-pane label="This">This</el-tab-pane>
    <el-tab-pane label="is">is</el-tab-pane>
    <el-tab-pane label="wrappable">wrappable</el-tab-pane>
    <el-tab-pane label="tabs">tabs</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ElAffix } from '@element-plus/components'

const tabWrapperProps = {
  offset: 300,
  position: 'bottom',
  style: {
    height: '100%',
    float: 'right',
  },
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
