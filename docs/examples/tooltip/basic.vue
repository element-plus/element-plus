<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <el-button class="item">top-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <el-button class="item">top</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <el-button class="item">top-end</el-button>
      </el-tooltip>
    </div>
    <div class="row">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <el-button class="item">left-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <el-button>right-start</el-button>
      </el-tooltip>
    </div>
    <div class="row">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <el-button>left</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <el-button class="item">right</el-button>
      </el-tooltip>
    </div>
    <div class="row">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <el-button>left-end</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <el-button class="item">right-end</el-button>
      </el-tooltip>
    </div>
    <div class="row center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <el-button class="item">bottom-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <el-button class="item">bottom</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <el-button class="item">bottom-end</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
