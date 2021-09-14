<template>
  <div>
    <el-check-tag checked style="margin-right: 8px">Checked</el-check-tag>
    <el-check-tag :checked="checked" @change="onChange">Toggle me</el-check-tag>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    onChange(checked) {
      this.checked = checked
    },
  },
}
</script>
