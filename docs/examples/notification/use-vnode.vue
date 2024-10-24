<template>
  <el-button plain @click="open">Common VNode</el-button>
  <el-button plain @click="open1">Dynamic props</el-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElNotification, ElSwitch } from 'element-plus'

const open = () => {
  ElNotification({
    title: 'Use Vnode',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  ElNotification({
    title: 'Use Vnode',
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
