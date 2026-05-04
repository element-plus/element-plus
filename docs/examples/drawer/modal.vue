<template>
  <el-button plain @click="drawerVisible = true">
    Open the modal Drawer
  </el-button>

  <el-drawer v-model="drawerVisible" :modal="false" modal-penetrable>
    <span>It's a modal Drawer</span>
    <template #footer>
      <div class="drawer-footer">
        <el-button @click="drawerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="drawerVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawerVisible = ref(false)
</script>
