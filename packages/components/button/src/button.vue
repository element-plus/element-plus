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
    <span v-else-if="$slots.default"><slot></slot></span>
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
      if (slots.default?.()?.length === 1) {
        const slot = slots.default?.()?.[0]
        if (
          typeof slot?.type === 'symbol' &&
          slot.type.description === 'Text'
        ) {
          const text = slot.children
          if (/^\p{Unified_Ideograph}{2}$/u.test(text))
            return `${text[0]} ${text[1]}`
          else return text
        }
      }
      return ''
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
