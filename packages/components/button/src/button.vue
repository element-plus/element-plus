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
import { computed, inject, defineComponent } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { useGlobalConfig } from '@element-plus/utils/util'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { elButtonGroupKey } from '@element-plus/tokens'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'
import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'
import type { ButtonNativeType, ButtonType } from './types'

export default defineComponent({
  name: 'ElButton',

  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  emits: ['click'],

  setup(props, { emit }) {
    const $ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
    const elBtnGroup = inject(elButtonGroupKey, {})

    const buttonSize = computed(() => {
      return props.size || elBtnGroup.size || elFormItem.size || $ELEMENT.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    //methods
    const handleClick = (evt: MouseEvent) => {
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
