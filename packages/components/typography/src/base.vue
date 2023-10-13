<template>
  <p
    ref="_ref"
    :style="{
      margin: `0 0 0 ${props.left} `,
    }"
    :class="{
      [ns.e('base')]: true,
      [ns.m('keyboard')]: props.keyboard,
      [ns.m('code')]: props.code,
    }"
  >
    <kbd v-if="props.keyboard"> {{ content }}</kbd>
    <code v-else-if="props.code"> {{ content }}</code>
    <template v-else>
      <el-text
        :style="{ color: `${props.color || paragraphContext?.color}` }"
        v-bind.prop="props"
      >
        {{ content }}

        <template #suffix>
          <template v-if="editable.editing">
            <el-tooltip
              :disabled="!!props.editable?.tooltip"
              :content="props.editable?.tooltipContent ?? 'edit'"
            >
              <!-- {{ editable }} -->
              <editCom
                :value="content"
                v-bind="editable"
                @onEnd="end"
                @onChange="editChange"
                @onTextChange="editText"
              />
            </el-tooltip>
          </template>

          <template v-if="!!props.copyable || !!typographyContext.copyable">
            <slot name="copy">
              <el-tooltip
                :disabled="!!props.copyable?.tooltip"
                :content="props.copyable?.tooltipContent ?? 'copy'"
              >
                <el-button text @click="copyText">
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                </el-button>
              </el-tooltip>
            </slot>
          </template>
        </template>
      </el-text>
    </template>
  </p>
</template>

<script setup lang="ts">
import { computed, defineExpose, defineProps, inject, ref, useSlots } from 'vue'
import clipboardCopy from 'clipboard-copy'
import {
  ElButton,
  ElIcon,
  ElMessage,
  ElText,
  ElTooltip,
} from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
import { CopyDocument } from '@element-plus/icons-vue'
import editCom from './editCom.vue'
import { baseProps } from './base'
import { ns } from './util'
import { paragraphContextKey, typographyContextKey } from './typography'

defineOptions({
  name: 'ElBase',
})
const typographyContext = inject(typographyContextKey, undefined)
const paragraphContext = inject(paragraphContextKey, undefined)

const emit = defineEmits(['onChange', 'onCopy', 'onEnd'])
const props = defineProps(baseProps())
const _ref = ref<HTMLElement | null>(null)
const editValue = ref('')
const slots = useSlots()
const content = computed(() => {
  return (
    editValue.value ||
    props.content ||
    (slots.default?.()[0].children as string)
  )
})

const end = () => {
  emit('onEnd')
}

const editChange = (value: boolean) => emit('onChange', value)

const editText = (value) => {
  editValue.value = value
}
const editable = computed(() => {
  const editable = props.editable || typographyContext.editable
  if (!editable) return { editing: false }

  return {
    ...(typeof editable === 'object' ? editable : null),
    editing: true,
  }
})

const copyText = async () => {
  try {
    const text = props.copyable.text
    const value = (text ? text() : text) || content.value
    await clipboardCopy(value)
    emit('onCopy', value)
    ElMessage({
      showClose: true,
      message: 'Copy success',
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: 'Copy error',
      type: 'error',
    })
  }
}
defineExpose({
  ref: _ref,
})
</script>

<style lang="scss" scoped>
.inputBox {
  width: 100%;
}
</style>
