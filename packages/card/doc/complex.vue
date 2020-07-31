<template>
  <el-card class="box-card">
    <template #header class="clearfix">
      <span>Card name</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="alert">Click Me</el-button>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List Content ' + o }}</div>
  </el-card>
</template>

<script lang="ts">
export default {
  methods: {
    alert(): void {
      alert('Why do you click me?')
    },
  },
}
</script>
