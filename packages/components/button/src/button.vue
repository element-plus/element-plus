<template>
  <button
    :class="[
      'el-button',
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElButton',
})
</script>

<script lang='ts' setup>
import { computed, inject } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { useGlobalConfig } from '@element-plus/utils/util'
import type { ComponentSize } from '@element-plus/utils/types'
import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
export type ButtonNativeType = 'button' | 'submit' | 'reset'

const props = withDefaults(defineProps<{
  type?: ButtonType
  size?: ComponentSize
  icon?: string
  nativeType?: ButtonNativeType
  loading?: boolean
  disabled?: boolean
  plain?: boolean
  autofocus?: boolean
  round?: boolean
  circle?: boolean
}>(), {
  type: 'default',
  icon: '',
  nativeType: 'button'
});
const emit = defineEmits<{
  (e: 'click', evt: MouseEvent): void
}>();

const $ELEMENT = useGlobalConfig()

const elForm = inject(elFormKey, {} as ElFormContext)
const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

const buttonSize = computed(() => props.size || elFormItem.size || $ELEMENT.size)
const buttonDisabled = computed(() => props.disabled || elForm.disabled)
const handleClick = (evt: MouseEvent) => emit('click', evt)
</script>
