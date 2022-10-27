<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
        append-to="body"
      >
        <el-button>top-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
        append-to="body"
      >
        <el-button>top</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
        append-to="body"
      >
        <el-button>top-end</el-button>
      </el-tooltip>
    </div>
    <div class="row">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
        append-to="body"
      >
        <el-button>left-start</el-button>
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
        <el-button class="mt-3 mb-3">left</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
        append-to="body"
      >
        <el-button>right</el-button>
      </el-tooltip>
    </div>
    <div class="row">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
        append-to="body"
      >
        <el-button>left-end</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
        append-to="body"
      >
        <el-button>right-end</el-button>
      </el-tooltip>
    </div>
    <div class="row center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
        append-to="body"
      >
        <el-button>bottom-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
        append-to="body"
      >
        <el-button>bottom</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
        append-to="body"
      >
        <el-button>bottom-end</el-button>
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
