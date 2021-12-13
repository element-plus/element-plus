<template>
  <div class="tag-group my-2">
    <span class="tag-group__title m-1">Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group my-2">
    <span class="tag-group__title m-1">Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { type: '', label: 'Tag 1' },
        { type: 'success', label: 'Tag 2' },
        { type: 'info', label: 'Tag 3' },
        { type: 'danger', label: 'Tag 4' },
        { type: 'warning', label: 'Tag 5' },
      ],
    }
  },
}
</script>
