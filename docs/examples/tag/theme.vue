<template>
  <div class="tag-group">
    <span class="tag-group__title">Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
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

<style lang="scss">
.tag-group {
  margin-bottom: 8px;

  &__title {
    margin-right: 8px;
  }
}
</style>
