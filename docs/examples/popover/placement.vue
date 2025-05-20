<template>
  <div class="popover-base-box">
    <div class="row center">
      <el-popover
        class="box-item"
        title="Title"
        content="Top Left prompts info"
        placement="top-start"
      >
        <template #reference>
          <el-button>top-start</el-button>
        </template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Top Center prompts info"
        placement="top"
      >
        <template #reference>
          <el-button>top</el-button>
        </template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Top Right prompts info"
        placement="top-end"
      >
        <template #reference>
          <el-button>top-end</el-button>
        </template>
      </el-popover>
    </div>
    <div class="row">
      <el-popover
        class="box-item"
        title="Title"
        content="Left Top prompts info"
        placement="left-start"
      >
        <template #reference>
          <el-button>left-start</el-button>
        </template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Right Top prompts info"
        placement="right-start"
      >
        <template #reference>
          <el-button>right-start</el-button>
        </template>
      </el-popover>
    </div>
    <div class="row">
      <el-popover
        class="box-item"
        title="Title"
        content="Left Center prompts info"
        placement="left"
      >
        <template #reference>
          <el-button class="mt-3 mb-3">left</el-button>
        </template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Right Center prompts info"
        placement="right"
      >
        <template #reference>
          <el-button>right</el-button>
        </template>
      </el-popover>
    </div>
    <div class="row">
      <el-popover
        class="box-item"
        title="Title"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <template #reference>
          <el-button>left-end</el-button>
        </template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <template #reference>
          <el-button>right-end</el-button>
        </template>
      </el-popover>
    </div>
    <div class="row center">
      <el-popover
        class="box-item"
        title="Title"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <template #reference> <el-button>bottom-start</el-button></template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <template #reference> <el-button>bottom</el-button></template>
      </el-popover>
      <el-popover
        class="box-item"
        title="Title"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <template #reference>
          <el-button>bottom-end</el-button>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<style>
.popover-base-box {
  width: 600px;
}

.popover-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popover-base-box .center {
  justify-content: center;
}

.popover-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
