<template>
  <button
    ref="buttonRef"
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
    :style="buttonStyle"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, inject, defineComponent, ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import { useFormItem } from '@element-plus/hooks'
import { elButtonGroupKey, elFormKey } from '@element-plus/tokens'
import { lighten, darken } from '@element-plus/utils/color'

import { buttonEmits, buttonProps } from './button'
export default defineComponent({
  name: 'ElButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit }) {
    const buttonRef = ref(null)

    const elBtnGroup = inject(elButtonGroupKey, undefined)
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size),
    })

    // calculate hover & active color by color
    const buttonStyle = computed(() => {
      let styles = {}

      if (props.color) {
        const typeColor = useCssVar(`--el-color-${props.type}`)
        const buttonBgColor = useCssVar(`--el-button-bg-color`, buttonRef)
        const bgColor = props.color || buttonBgColor.value || typeColor.value
        if (props.plain) {
          styles = {
            '--el-button-bg-color': lighten(bgColor, 0.9),
            '--el-button-text-color': bgColor,
            '--el-button-hover-text-color': 'var(--el-color-white)',
            '--el-button-hover-bg-color': bgColor,
            '--el-button-hover-border-color': bgColor,
            '--el-button-active-bg-color': darken(bgColor, 0.1),
            '--el-button-active-text-color': 'var(--el-color-white)',
          }
        } else {
          styles = {
            '--el-button-bg-color': bgColor,
            '--el-button-hover-bg-color': lighten(bgColor),
            '--el-button-active-bg-color': darken(bgColor, 0.1),
          }
        }
      }

      return styles
    })

    const elForm = inject(elFormKey, undefined)

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        elForm?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonRef,
      buttonStyle,

      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
