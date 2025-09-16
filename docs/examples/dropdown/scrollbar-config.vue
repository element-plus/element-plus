<template>
  <div class="scrollbar-demo-box">
    <div class="demo-row">
      <div class="dropdown-demo">
        <h4>Fixed Height</h4>
        <el-dropdown :scrollbar-props="{ height: '150px', always: true }">
          <el-button type="primary">
            Fixed Height
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
        <h4>Native Scrollbar</h4>
        <el-dropdown :scrollbar-props="{ native: true, height: '40vh' }">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.scrollbar-demo-box {
  display: flex;
  flex-direction: column;
}

.demo-row {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

h4 {
  margin: 0 0 10px;
  font-weight: normal;
  color: var(--el-text-color-secondary);
}

.dropdown-demo {
  margin-bottom: 20px;
  flex: 1;
  text-align: center;
}
</style>
