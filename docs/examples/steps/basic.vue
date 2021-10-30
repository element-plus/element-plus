<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>

  <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active: 0,
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    },
  },
}
</script>
