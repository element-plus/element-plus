<template>
  <div class="flex flex-col items-start gap-2">
    <el-button @click="visible = !visible">Trigger expand</el-button>
    <el-select v-model="value" :visible="visible" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      <template #footer>
        <el-button plain size="small" @click="visible = false"> Ok </el-button>
      </template>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const visible = ref(false)

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style>
.el-select-dropdown__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
