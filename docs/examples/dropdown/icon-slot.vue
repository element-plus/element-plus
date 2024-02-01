<template>
  <div>
    <el-dropdown>
      <el-button type="primary">
        Dropdown List <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <template #icon>
              <el-icon>
                <plus />
              </el-icon>
            </template>
            Action 1
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, Plus } from '@element-plus/icons-vue'
</script>
