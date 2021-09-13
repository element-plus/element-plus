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
import { elButtonGroupKey } from '@element-plus/tokens'

import type { ComponentSize } from '@element-plus/utils/types'
import { buttonEmits, buttonProps } from './button'

export default defineComponent({
  name: 'ElButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(_, { emit }) {
    const elBtnGroup = inject(elButtonGroupKey, undefined)
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size as ComponentSize),
    })

    const handleClick = (evt: MouseEvent) => emit('click', evt)

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
