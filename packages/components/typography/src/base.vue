<template>
  <span ref="textRef" class="text">
    <span v-show="contextShow">
      {{ content }}
    </span>
    <slot v-if="editableShow" name="editable">
      <el-input
        ref="editInputRef"
        v-model="editValue"
        :input-style="{ width: '200px' }"
        clearable
        placeholder="请输入"
        @blur="inputComplete"
        @keyup.enter="inputComplete"
      />
      <!-- @blur="inputComplete" -->
      {{ props.editable.triggerType }}
    </slot>
    <!-- Edit -->
    <span @click="triggerClick">
      <slot v-if="editTriggerShow" name="trigger">
        <el-button icon="EditPen">编辑</el-button>
      </slot>
    </span>
    <!-- copy -->
    <span>
      <slot v-if="copyTriggerShow" name="copy">
        <el-button icon="Copy" @click="copyText">复制</el-button>
      </slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, defineProps, nextTick, ref, useSlots } from 'vue'
import clipboardCopy from 'clipboard-copy'
import { ElButton, ElInput, ElMessage } from 'element-plus'
// import { useLang } from '../../composables/lang'
// import localeData from '../../../i18n/component/icons.json'
import { baseProps } from './base'
// import { ElButton, ElIcon, ElInput } from '@element-plus/components'
import 'element-plus/dist/index.css'
const textRef = ref(null)
const editInputRef = ref(null)
const editValue = ref('')
const slots = useSlots()
const content = computed(() => {
  return (
    editValue.value ||
    props.content ||
    (slots.default?.()[0].children as string)
  )
})
const props = defineProps(baseProps())
const editableShow = ref(false)
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
      message: "locale.value['copy-success']",
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: "locale.value['copy-error']",
      type: 'error',
    })
  }
}

const triggerClick = async () => {
  editableShow.value = true
  editTriggerShow.value = false

  editValue.value = content.value
  contextShow.value = false
  await nextTick()
  console.log('editInputRef', editInputRef.value)
  editInputRef.value.focus()
}
const inputComplete = () => {
  editableShow.value = false
  editTriggerShow.value = true
  contextShow.value = true
}
</script>

<style lang="scss" scoped>
.text {
  //border: solid red 1px;
}
</style>
