<template>
  <div class="demo">
    <div>
      <p>Custom header content</p>
      <el-cascader
        v-model="value"
        popper-class="custom-header"
        :options="options"
        :props="props"
        clearable
      >
        <template #header>
          <el-checkbox
            v-model="checkAll"
            :indeterminate="indeterminate"
            @change="handleCheckAll"
          >
            All
          </el-checkbox>
        </template>
      </el-cascader>
    </div>
    <div>
      <p>Custom footer content</p>
      <el-cascader v-model="value" :options="options" :props="props" clearable>
        <template #footer>
          <el-button link size="small" @click="handleClear"> Clear </el-button>
        </template>
      </el-cascader>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

import type { CascaderOption, CheckboxValueType } from 'element-plus'

const props = { multiple: true }
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref<string[][]>([])
const options = ref([
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          { value: 'consistency', label: 'Consistency' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'efficiency', label: 'Efficiency' },
          { value: 'controllability', label: 'Controllability' },
        ],
      },
    ],
  },
])

const getAllValuePaths = computed(() => {
  const result: string[][] = []
  const queue: { node: CascaderOption; path: string[] }[] = options.value.map(
    (node) => ({ node, path: [node.value] })
  )

  while (queue.length > 0) {
    const { node, path } = queue.shift()!
    if (node.children?.length) {
      node.children.forEach((child) => {
        queue.push({ node: child, path: [...path, child.value as string] })
      })
    } else {
      result.push(path)
    }
  }
  return result
})

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false
    indeterminate.value = false
  } else if (val.length === getAllValuePaths.value.length) {
    checkAll.value = true
    indeterminate.value = false
  } else {
    indeterminate.value = true
  }
})

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false
  value.value = val ? getAllValuePaths.value : []
}

const handleClear = () => {
  value.value = []
}
</script>

<style>
.demo {
  display: flex;
}

.demo > div {
  flex: 1;
  text-align: center;
}

.demo > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.custom-header {
  .el-checkbox {
    display: flex;
    height: unset;
  }
}
</style>
