<template>
  <!-- class="text" -->
  <el-text
    ref="textRef"
    v-bind="$attrs"
    :style="{
      margin: `0 0 0 ${props.left} `,
    }"
    :class="{
      [ns.e('base')]: true,
      [ns.m('keyboard')]: props.keyboard,
      [ns.m('code')]: props.code,
    }"
  >
    <template v-if="contextShow">
      <kbd v-if="props.keyboard"> {{ content }}</kbd>
      <code v-else-if="props.code"> {{ content }}</code>

      <template v-else> {{ content }}</template>
    </template>

    <template v-if="editableShow || editable.editing">
      <editCom
        :value="content"
        v-bind="editable"
        @onEnd="End"
        @onChange="editChange"
      />
    </template>

    <!-- copy -->
    <template v-if="copyTriggerShow">
      <slot name="copy">
        <el-button text :icon="CopyDocument" />
      </slot>
    </template>
  </el-text>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, useSlots } from 'vue'
import clipboardCopy from 'clipboard-copy'
import { ElButton, ElIcon, ElMessage, ElText } from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
import { CopyDocument } from '@element-plus/icons-vue'
import editCom from './editCom.vue'
import { baseProps } from './base'
import { ns } from './util'
const emit = defineEmits(['onEnd', 'onStart', 'onChange'])
const props = defineProps(baseProps())
const textRef = ref<HTMLElement | null>(null)
// const editInputRef = ref<HTMLInputElement | null>(null)
const editValue = ref('')
const slots = useSlots()
const content = computed(() => {
  return (
    editValue.value ||
    props.content ||
    (slots.default?.()[0].children as string)
  )
})

const End = function (value: string) {
  editValue.value = value
  emit('onEnd', value)
}
const editable = computed(() => {
  const editable = props.editable
  if (!editable) return { editing: false }
  return {
    ...(typeof editable === 'object' ? editable : null),
  }
})
// const editAttrConfig = computed(() => {
//   return {
//     maxlength: editable.value.maxLength,
//     placeholder: editable.value.placeholder,
//   }
// })
const editableShow = ref(false)
editableShow.value = !!props.editable

const editChange = function (value: boolean) {
  contextShow.value = value
}
const contextShow = ref(true)
const editTriggerShow = ref(false)
const copyTriggerShow = ref(false)
copyTriggerShow.value = !!props.copyable
editTriggerShow.value = !!props.editable

const copyText = async () => {
  try {
    await clipboardCopy(content.value)
    clipboardCopy(content.value)
    ElMessage({
      showClose: true,
      message: '复制 成功',
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: '复制 失败',
      type: 'error',
    })
  }
}
</script>

<style lang="scss" scoped>
.inputBox {
  // border: solid red 1px;
  width: 100%;
}
</style>
