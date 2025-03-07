<template>
  <el-config-provider
    :value-on-clear="() => null"
    :empty-values="[undefined, null]"
  >
    <div class="flex flex-wrap gap-4 items-center">
      <el-select
        v-model="value1"
        clearable
        placeholder="Select"
        style="width: 240px"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select-v2
        v-model="value2"
        clearable
        placeholder="Select"
        style="width: 240px"
        :options="options"
        :value-on-clear="() => undefined"
        @change="handleChange"
      />
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value1 = ref('')
const value2 = ref('')
const options = [
  {
    value: '',
    label: 'All',
  },
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

const handleChange = (value) => {
  if ([undefined, null].includes(value)) {
    ElMessage.info(`The clear value is: ${value}`)
  }
}
</script>
