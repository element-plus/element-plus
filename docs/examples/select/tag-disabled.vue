<template>
  <el-form :disabled="formDisabled">
    <el-form-item>
      <el-select
        v-model="selectedIds"
        multiple
        placeholder="Select options"
        style="width: 240px"
      >
        <template #tag="{ selectDisabled }">
          <el-tag
            v-for="option in selectedOptions"
            :key="option.id"
            :closable="!selectDisabled"
            type="info"
            @close="handleTagClose(option.id)"
          >
            {{ option.label }}
          </el-tag>
        </template>

        <el-option
          v-for="option in options"
          :key="option.id"
          :label="option.label"
          :value="option.id"
        />
      </el-select>
    </el-form-item>
  </el-form>

  <el-button @click="formDisabled = !formDisabled">
    {{ formDisabled ? 'Enable' : 'Disable' }} Form
  </el-button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Option {
  id: number
  label: string
}

const options = ref<Option[]>([
  { id: 1, label: 'Option A' },
  { id: 2, label: 'Option B' },
  { id: 3, label: 'Option C' },
  { id: 4, label: 'Option A' },
])

const selectedIds = ref<number[]>([1, 2])
const formDisabled = ref(false)

const selectedOptions = computed(() =>
  options.value.filter((opt) => selectedIds.value.includes(opt.id))
)

const handleTagClose = (id: number) => {
  selectedIds.value = selectedIds.value.filter((v) => v !== id)
}
</script>
