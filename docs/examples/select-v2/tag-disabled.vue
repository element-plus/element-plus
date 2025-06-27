<template>
  <el-form :disabled="formDisabled">
    <el-form-item>
      <el-select-v2
        v-model="selectedIds"
        :options="options"
        multiple
        placeholder="Select options"
        style="width: 240px"
      >
        <template #tag="{ selectDisabled }">
          <el-tag
            v-for="option in selectedOptions"
            :key="option.value"
            :closable="!selectDisabled"
            type="info"
            @close="handleTagClose(option.value)"
          >
            {{ option.label }}
          </el-tag>
        </template>
      </el-select-v2>
    </el-form-item>
  </el-form>

  <el-button @click="formDisabled = !formDisabled">
    {{ formDisabled ? 'Enable' : 'Disable' }} Form
  </el-button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Option {
  value: number
  label: string
}

const options = ref<Option[]>([
  { value: 1, label: 'Option A' },
  { value: 2, label: 'Option B' },
  { value: 3, label: 'Option C' },
  { value: 4, label: 'Option A' },
])

const selectedIds = ref<number[]>([1, 2])
const formDisabled = ref(false)

const selectedOptions = computed(() =>
  options.value.filter((opt) => selectedIds.value.includes(opt.value))
)

const handleTagClose = (id: number) => {
  selectedIds.value = selectedIds.value.filter((v) => v !== id)
}
</script>
