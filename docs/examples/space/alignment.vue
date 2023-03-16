<template>
  <el-row
    style="border: 1px solid var(--el-border-color)"
    class="p-8px w-240px"
  >
    <el-space>
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </el-space>
  </el-row>
  <el-row
    style="border: 1px solid var(--el-border-color)"
    class="p-8px w-240px"
  >
    <el-space alignment="flex-start">
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </el-space>
  </el-row>
  <el-row
    style="border: 1px solid var(--el-border-color)"
    class="p-8px w-240px"
  >
    <el-space alignment="flex-end">
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </el-space>
  </el-row>
</template>
