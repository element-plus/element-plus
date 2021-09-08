<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using attributes</span>
    <el-row :gutter="20">
      <el-input
        v-model="input1"
        placeholder="Pick a date"
        suffix-icon="el-icon-date"
      />
    </el-row>
    <el-row :gutter="20">
      <el-input
        v-model="input2"
        placeholder="Type something"
        prefix-icon="el-icon-search"
      />
    </el-row>
  </div>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using slots</span>
    <el-row :gutter="20">
      <el-input v-model="input3" placeholder="Pick a date">
        <template #suffix>
          <i class="el-input__icon el-icon-date"></i>
        </template>
      </el-input>
    </el-row>

    <el-row :gutter="20">
      <el-input v-model="input4" placeholder="Type something">
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
})
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}
</style>
