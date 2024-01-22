<template>
  <el-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-lg font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
          Sub title
        </span>
        <el-tag>Default</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button>Print</el-button>
        <el-button type="primary" class="ml-2">Edit</el-button>
      </div>
    </template>
  </el-page-header>
</template>
<style scoped>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}

.mr-3 {
  margin-right: 0.75rem;
}
.mr-2 {
  margin-right: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem; /* 8px */
}

.font-600 {
  font-weight: 600;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>
