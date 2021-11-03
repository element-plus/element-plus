<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using attributes</span>
    <el-row :gutter="20">
      <el-input
        v-model="input1"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
    </el-row>
    <el-row :gutter="20">
      <el-input
        v-model="input2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </el-row>
  </div>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using slots</span>
    <el-row :gutter="20">
      <el-input v-model="input3" placeholder="Pick a date">
        <template #suffix>
          <el-icon class="el-input__icon"><calendar /></el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row :gutter="20">
      <el-input v-model="input4" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue'
import { Calendar, Search } from '@element-plus/icons'

export default defineComponent({
  components: {
    Calendar,
    Search,
  },
  setup() {
    return {
      Calendar: shallowRef(Calendar),
      Search: shallowRef(Search),
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
