<template>
  Scroll down to see the bottom-right button.
  <el-backtop :bottom="100">
    <el-button
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </el-button>
  </el-backtop>
</template>
