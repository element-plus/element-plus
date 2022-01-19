<template>
  <el-tooltip content="Top center" placement="top">
    <el-button>Dark</el-button>
  </el-tooltip>
  <el-tooltip content="Bottom center" placement="bottom" effect="light">
    <el-button>Light</el-button>
  </el-tooltip>

  <el-tooltip content="Bottom center" effect="customized">
    <el-button>Customized theme</el-button>
  </el-tooltip>
</template>

<style lang="scss">
.el-popper {
  &.is-customized,
  .el-popper__arrow::before {
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }
}
</style>
