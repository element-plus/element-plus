<template>
  <el-page-header :icon="null">
    <template #content>
      <el-row class="items-center">
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <el-text class="text-large font-600 mr-3"> Title </el-text>
        <el-text
          class="text-sm mr-2"
          style="color: var(--el-text-color-regular)"
        >
          Sub title
        </el-text>
        <el-tag>Default</el-tag>
      </el-row>
    </template>
    <template #extra>
      <el-button>Print</el-button>
      <el-button type="primary" class="ml-2">Edit</el-button>
    </template>
  </el-page-header>
</template>
