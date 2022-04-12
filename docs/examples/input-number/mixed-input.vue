<template>
  <div>
    <el-input-number v-model="input1" class="w-full">
      <template #prepend>Http://</template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number v-model="input2" class="w-full" :controls="false">
      <template #append>.com</template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number
      v-model="input3"
      class="input-with-select w-full"
      controls-position="right"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 110px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number v-model="input3" class="input-with-select w-full">
      <template #prepend>
        <el-button :icon="Search" />
      </template>
      <template #append>
        <el-select v-model="select" placeholder="Select" style="width: 110px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </el-input-number>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref(1)
const input2 = ref(1)
const input3 = ref(1)
const select = ref(1)
</script>

<style>
.input-with-select .el-input-number-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
