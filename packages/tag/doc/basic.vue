<template>
  <el-tag closable>默认标签</el-tag>
  <el-tag size="medium" closable>中等标签</el-tag>
  <el-tag size="small" closable>小型标签</el-tag>
  <el-tag size="mini" closable>超小标签</el-tag>
  <div class="tag-group">
    <span class="tag-group__title">Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark">
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<style scoped>
.el-tag {
  margin: 6px;
}
</style>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script>