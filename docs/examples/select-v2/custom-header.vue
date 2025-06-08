<template>
  <el-select-v2
    v-model="value"
    :options="options"
    multiple
    clearable
    collapse-tags
    placeholder="Select"
    popper-class="custom-header"
    :max-collapse-tags="1"
    style="width: 240px"
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
  </el-select-v2>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { CheckboxValueType } from 'element-plus'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref<CheckboxValueType[]>([])
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
)

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false
    indeterminate.value = false
  } else if (val.length === options.value.length) {
    checkAll.value = true
    indeterminate.value = false
  } else {
    indeterminate.value = true
  }
})

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false
  if (val) {
    value.value = options.value.map((_) => _.value)
  } else {
    value.value = []
  }
}
</script>

<style>
.custom-header {
  .el-checkbox {
    display: flex;
    height: unset;
  }
}
</style>
