<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image></el-image>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <el-image>
        <template #error>
          <div class="image-slot">
            <el-icon><Picture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Picture } from '@element-plus/icons'

export default defineComponent({
  components: {
    Picture,
  },
})
</script>
