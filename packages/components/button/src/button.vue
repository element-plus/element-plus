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
        'is-circle': circle,
      },
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

<script lang="ts">
import { computed, inject, defineComponent } from 'vue'
import { useFormItem } from '@element-plus/hooks'
import { elButtonGroupKey, elFormKey } from '@element-plus/tokens'

import { buttonEmits, buttonProps } from './button'
export default defineComponent({
  name: 'ElButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit }) {
    const elBtnGroup = inject(elButtonGroupKey, undefined)
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size),
    })

    const elForm = inject(elFormKey, undefined)

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        elForm?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
