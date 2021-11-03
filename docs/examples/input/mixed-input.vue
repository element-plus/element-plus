<template>
  <div>
    <el-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </el-input>
  </div>
  <div style="margin-top: 15px">
    <el-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </el-input>
  </div>
  <div style="margin-top: 15px">
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 110px">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue'
import { Search } from '@element-plus/icons'
export default defineComponent({
  setup() {
    return {
      Search: shallowRef(Search),
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref(''),
    }
  },
})
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
