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
    <!-- {{ props }} -->
    <template v-if="contextShow">
      <kbd v-if="props.keyboard"> {{ content }}</kbd>
      <code v-else-if="props.code"> {{ content }}</code>

      <template v-else> {{ content }}</template>
    </template>

    <slot v-if="editableShow" name="editable">
      <el-input
        ref="editInputRef"
        v-model="editValue"
        resize="none"
        class="inputBox"
        autosize
        type="textarea"
        placeholder="请输入"
        :input-style="inputStyle"
        @blur="inputComplete"
        @keydown.enter="inputComplete"
      />
      <!-- :maxlength="props.editable.maxLength" -->
      <!-- {{ props.editable.triggerType }} -->
    </slot>
    <span @click="triggerClick">
      <slot v-if="editTriggerShow" name="trigger">
        <el-icon size="16px"><Edit /></el-icon>
      </slot>
    </span>
    <!-- copy -->
    <span @click="copyText">
      <slot v-if="copyTriggerShow" name="copy">
        <el-icon><CopyDocument /></el-icon>
      </slot>
    </span>
  </el-text>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  nextTick,
  reactive,
  ref,
  shallowReactive,
  useSlots,
} from 'vue'
import clipboardCopy from 'clipboard-copy'
import {
  ElButton,
  ElIcon,
  ElInput,
  ElMessage,
  ElText,
} from '@element-plus/components'
import { CopyDocument, Edit } from '@element-plus/icons-vue'
import type { EditConfig } from './base'
import { baseProps } from './base'
import '@element-plus/theme-chalk/src/index.scss'
import { ns } from './util'
const emit = defineEmits(['onEnd', 'onStart', 'onChange'])

const props = defineProps(baseProps())
const textRef = ref<HTMLElement | null>(null)
const editInputRef = ref<HTMLInputElement | null>(null)
const editValue = ref('')
const slots = useSlots()
const content = computed(() => {
  return (
    editValue.value ||
    props.content ||
    (slots.default?.()[0].children as string)
  )
})

const inputStyle = shallowReactive({
  // overflow: 'hidden',
  // padding: '0px',
  // border: 'none',
})
// const state = reactive({
//   editable: {},
// })
// // const editable = reactive({})
// if (typeof props.editable === 'object') {
//   state.editable = props.editable
//   // inputStyle.value.cursor = 'pointer'
//   // reactive
// }

const iseditableGetOut = computed(() => {
  if (typeof props.editable === 'object') {
    return true
  }
  return false
})

const editableShow = ref<boolean>(false)
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

const triggerClick = async () => {
  editableShow.value = (
    iseditableGetOut.value ? (props.editable as EditConfig)!.editing : true
  ) as boolean
  // (typeof props.editable === 'object' ? props.editable.editing : true) || true
  editTriggerShow.value = false
  contextShow.value = false
  editValue.value = content.value.trim()
  await nextTick()
  editInputRef.value?.focus()
}
const inputComplete = () => {
  if (!iseditableGetOut.value) {
    editableShow.value = false
  }
  // editableShow.value = false

  editTriggerShow.value = true
  contextShow.value = true
}
</script>

<style lang="scss" scoped>
.text {
  position: relative;
  display: inline-block;
  // height: 80px;
  font-size: inherit;
  line-height: 1.5;
  font-family: inherit;
  // color: var(--el-input-text-color, var(--el-text-color-regular));
}
.inputBox {
  //position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  bottom: 0px;
  right: 0;
}
</style>
