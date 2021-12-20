<template>
  <div class="box">
    <div class="box-row">
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <el-button>top-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <el-button>top</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <el-button>top-end</el-button>
      </el-tooltip>
    </div>
    <div class="box-row">
      <el-tooltip
        class="item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <el-button>left-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <el-button>right-start</el-button>
      </el-tooltip>
    </div>
    <div class="box-row">
      <el-tooltip
        class="item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <el-button>left</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <el-button>right</el-button>
      </el-tooltip>
    </div>

    <div class="box-row">
      <el-tooltip
        class="item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <el-button>left-end</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <el-button>right-end</el-button>
      </el-tooltip>
    </div>
    <div class="box-row">
      <el-tooltip
        class="item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <el-button>bottom-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <el-button>bottom</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <el-button>bottom-end</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 400px;
  .box-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    .item {
      width: 122px;
    }
  }
}
</style>
