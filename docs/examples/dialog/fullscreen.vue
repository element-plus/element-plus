<template>
  <el-button plain @click="dialogVisible = true">
    Open the fullscreen Dialog
  </el-button>

  <el-dialog v-model="dialogVisible" fullscreen>
    <span>It's a fullscreen Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
