<template>
  <div class="scrollbar-demo-grid">
    <div class="dropdown-demo">
      <el-dropdown :max-height="150" :scrollbar-props="{ always: true }">
        <el-button type="primary">
          Always Visible
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i in 20" :key="i"
              >Option {{ i }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="dropdown-demo">
      <el-dropdown max-height="40vh" :scrollbar-props="{ native: true }">
        <el-button type="primary">
          Native Scrollbar
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i in 20" :key="i"
              >Option {{ i }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="dropdown-demo">
      <el-dropdown
        :max-height="150"
        :scrollbar-props="{
          wrapStyle: {
            backgroundColor: 'var(--el-color-primary-light-9)',
            padding: '5px',
          },
          viewClass: 'custom-dropdown-view',
        }"
      >
        <el-button type="primary">
          Custom Styles
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i in 20" :key="i"
              >Option {{ i }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.scrollbar-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.dropdown-demo {
  text-align: center;
  padding: 10px;
}

:global(.custom-dropdown-view) {
  font-weight: bold;
  width: 200px;
}
</style>
