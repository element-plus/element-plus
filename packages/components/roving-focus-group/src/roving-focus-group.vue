<template>
  <el-focus-group-collection>
    <el-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </el-roving-focus-group-impl>
  </el-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ElRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { ElCollection as ElFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'ElRovingFocusGroup',
  components: {
    ElFocusGroupCollection,
    ElRovingFocusGroupImpl,
  },
})
</script>
