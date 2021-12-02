<template>
  <el-collection>
    <el-roving-focus-group-impl>
      <slot />
    </el-roving-focus-group-impl>
  </el-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCollection } from '@element-plus/components/collection'
import ElRovingFocusGroupImpl from './roving-focus-group-impl.vue'

export default defineComponent({
  components: {
    ElCollection,
    ElRovingFocusGroupImpl,
  },
})
</script>
