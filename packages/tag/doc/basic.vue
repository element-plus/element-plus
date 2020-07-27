<template>
  <el-tag closable>Default Label</el-tag>
  <el-tag size="medium" closable>Medium Label</el-tag>
  <el-tag size="small" closable>Small Label</el-tag>
  <el-tag size="mini" closable>Mini Label</el-tag>
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

<script>
import Vue from 'vue'
const basic = Vue.defineComoponent({
  data() {
    return {
      items: [
        { type: '', label: 'Label 1' },
        { type: 'success', label: 'Label 2' },
        { type: 'info', label: 'Label 3' },
        { type: 'danger', label: 'Label 4' },
        { type: 'warning', label: 'Label 5' },
      ],
    }
  },
})
export default basic
</script>

<style scoped>
.el-tag {
  margin: 6px;
}
</style>

