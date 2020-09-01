<template>
  <div class="box">
    <div class="top">
      <el-tooltip
        v-model="model"
        class="item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
        :manual="true"
      >
        <el-button>top-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Center prompts info"
        :append-to-body="false"
        placement="top"
        :trigger="['click', 'focus', 'hover']"
      >
        <el-button>top</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
        :trigger="['click']"
      >
        <el-button>top-end</el-button>
      </el-tooltip>
    </div>
    <div class="left">
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
        content="Left Center prompts info"
        placement="left"
      >
        <el-button>left</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <el-button>left-end</el-button>
      </el-tooltip>
    </div>

    <div class="right">
      <el-tooltip
        class="item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <el-button>right-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <el-button>right</el-button>
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
    <div class="bottom">
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
<script>
import ClickOutside from '@element-plus/directives/click-outside'

export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      model: true,
    }
  },
  methods: {
  },
}
</script>
<style>
.box {
  width: 400px;
  padding-left: 25%;
  padding-top: 200px;
}
.box .top {
  text-align: center;
}

.box .left {
  float: left;
  width: 110px;
}

.box .right {
  float: right;
  width: 110px;
}
.box .bottom {
  clear: both;
  text-align: center;
}
.box .item {
  margin: 4px;
}
.box .left .el-tooltip__popper,
.box .right .el-tooltip__popper {
  padding: 8px 10px;
}
.box .el-button {
  width: 110px;
}
</style>
