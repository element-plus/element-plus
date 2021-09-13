<template>
  <el-badge :value="12" class="item">
    <el-button size="small">comments</el-button>
  </el-badge>
  <el-badge :value="3" class="item">
    <el-button size="small">replies</el-button>
  </el-badge>
  <el-badge :value="1" class="item" type="primary">
    <el-button size="small">comments</el-button>
  </el-badge>
  <el-badge :value="2" class="item" type="warning">
    <el-button size="small">replies</el-button>
  </el-badge>

  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item class="clearfix">
          comments
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          replies
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
