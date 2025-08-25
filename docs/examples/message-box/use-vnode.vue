<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" plain @click="open">Common VNode</el-button>
    <el-button class="!ml-0" plain @click="open1">Dynamic props</el-button>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElMessageBox, ElSwitch } from 'element-plus'

const open = () => {
  ElMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  ElMessageBox({
    title: 'Message',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(ElSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: boolean | string | number) => {
          checked.value = val
        },
      }),
  })
}
</script>
