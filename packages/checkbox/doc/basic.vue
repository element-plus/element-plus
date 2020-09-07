<template>
  <div class="block">
    <el-checkbox v-model="checked" @change="onChange">{{ checked }}</el-checkbox>
    <el-checkbox v-model="checked1" disabled>{{ checked1 }}</el-checkbox>
    <el-checkbox v-model="checked2" disabled>{{ checked2 }}</el-checkbox>
    <el-checkbox v-model="checked1" label="A" border />
    <el-checkbox v-model="checked2" border />
    <el-checkbox v-model="checked4" true-label="a" :false-label="3" />
    {{ checked4 }}
    <el-checkbox-button v-model="checkbox" label="a" />
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="A" />
      <el-checkbox label="B" />
      <el-checkbox label="C" />
      <el-checkbox label="D" disabled />
      <el-checkbox label="Ha" disabled />
    </el-checkbox-group>
    {{ checkList }}
  </div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: true,
      checkList: ['Ha','A'],
      checked4: 3,
      checkbox: false,
    }
  },
  methods: {
    onChange(val) {
      console.log(val)
    },
  },
})
</script>
