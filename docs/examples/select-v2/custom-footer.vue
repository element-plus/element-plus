<template>
  <el-select-v2
    ref="select"
    v-model="value"
    :options="options"
    placeholder="Select"
    style="width: 240px"
  >
    <template #footer>
      <el-button v-if="!isAdding" text bg size="small" @click="onAddOption">
        Add an option
      </el-button>
      <div v-else class="select-footer">
        <el-input
          v-model="optionName"
          class="option-input"
          placeholder="input option name"
          size="small"
        />
        <div>
          <el-button type="primary" size="small" @click="onConfirm">
            confirm
          </el-button>
          <el-button size="small" @click="clear">cancel</el-button>
        </div>
      </div>
    </template>
  </el-select-v2>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElSelectV2 } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const select = ref<InstanceType<typeof ElSelectV2>>()
const isAdding = ref(false)
const value = ref<CheckboxValueType[]>([])
const optionName = ref('')
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
)

const onAddOption = () => {
  isAdding.value = true
}

const onConfirm = () => {
  if (optionName.value) {
    options.value.push({
      label: optionName.value,
      value: optionName.value,
    })
    clear()
    nextTick(() => {
      select.value?.scrollTo(options.value.length - 1)
    })
  }
}

const clear = () => {
  optionName.value = ''
  isAdding.value = false
}
</script>

<style>
.select-footer {
  display: flex;
  flex-direction: column;

  .option-input {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
