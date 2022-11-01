<script setup lang="ts">
import { Warning } from '@element-plus/icons-vue'

defineProps({
  type: String,
  details: String,
})
</script>

<template>
  <span class="flex items-center">
    <span class="api-typing">
      {{ type }}
    </span>
    <el-tooltip effect="light" trigger="click">
      <el-button text :icon="Warning" class="p-2 text-5" />
      <template #content>
        <div class="m-1">
          <code>
            {{ details }}
          </code>
        </div>
      </template>
    </el-tooltip>
  </span>
</template>
