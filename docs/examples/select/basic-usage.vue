<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'
import { ElButton, ElOption, ElSelect } from 'element-plus'

const options = ref([
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
])

const modelValue = ref('a')

function addOption() {
  options.value.push({
    label: `Option ${options.value.length + 1}`,
    value: `${options.value.length + 1}`,
  })
}
</script>

<template>
  <div style="padding: 20px">
    <el-button @click="addOption">add option</el-button>
    <component
      :is="
        h(
          ElSelect,
          {
            modelValue: modelValue,
            'onUpdate:modelValue': (value) => {
              modelValue = value
            },
          },
          () =>
            options.map((opt) =>
              h(ElOption, {
                key: opt.value,
                label: opt.label,
                value: opt.value,
              })
            )
        )
      "
    >
    </component>
  </div>
</template>
