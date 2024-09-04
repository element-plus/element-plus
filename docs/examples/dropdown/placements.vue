<template>
  <div class="flex flex-wrap items-center gap-4">
    <el-dropdown placement="top-start">
      <el-button> topStart </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="top">
      <el-button> top </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="top-end">
      <el-button> topEnd </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="bottom-start">
      <el-button> bottomStart </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="bottom">
      <el-button> bottom </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="bottom-end">
      <el-button> bottomEnd </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
