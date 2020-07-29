<template>
  <el-card class="box-card">
    <template #header class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="alert">点我</el-button>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ '列表内容 ' + o }}</div>
  </el-card>
</template>

<script lang="ts">
export default {
  methods: {
    alert(): void {
      alert('点我干嘛')
    },
  },
}
</script>
