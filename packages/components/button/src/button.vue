<template>
  <button
    :class="[
      'el-button',
      buttonType ? 'el-button--' + buttonType : '',
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
    <span v-if="buttonContent">{{ buttonContent }}</span>
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

  setup(props, { emit, slots }) {
    const elBtnGroup = inject(elButtonGroupKey, undefined)
    // add space between two characters in Chinese
    const buttonContent = computed(() => {
      let slot = slots.default?.()?.[0]?.children
      if (
        typeof slot === 'string' &&
        /^\p{Unified_Ideograph}{2}$/u.test(slot)
      ) {
        slot = `${slot[0]} ${slot[1]}`
      }
      return slot
    })
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size),
    })
    const buttonType = computed(
      () => props.type || elBtnGroup?.type || 'default'
    )

    const elForm = inject(elFormKey, undefined)

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        elForm?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonSize,
      buttonType,
      buttonDisabled,
      buttonContent,

      handleClick,
    }
  },
})
</script>
