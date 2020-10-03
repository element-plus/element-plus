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
import { computed, inject, defineComponent, PropType } from 'vue'

type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type IButtonSize = PropType<'medium' | 'small' | 'mini'>
type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>
const ELEMENT: {
  size?: number
} = {}
// TODOS: replace these interface definition with actual ElForm interface
interface ElForm {
  disabled: boolean
}
interface ElFormItem {
  elFormItemSize: number
}

interface IButtonProps {
  type: string
  size: string
  icon: string
  nativeType: string
  loading: boolean
  disabled: boolean
  plain: boolean
  autofocus: boolean
  round: boolean
  circle: boolean
}

type EmitFn = (evt: Event) => void

interface IButtonSetups {
  elFormItemSize_: number
  buttonSize: string
  buttonDisabled: boolean
  handleClick: EmitFn
}
export default defineComponent({
  name: 'ElButton',

  props: {
    type: {
      type: String as IButtonType,
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
      type: String as IButtonType,
      validator: (val: string) => {
        return ['medium', 'small', 'mini'].includes(val)
      },
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String as IButtonNativeType,
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

  setup(props, ctx) {
    // inject
    const elForm = inject<ElForm>('elForm', {} as any)
    const elFormItem = inject<ElFormItem>('elFormItem', {} as any)

    // computed
    const elFormItemSize_ = computed(() => {
      return (elFormItem || {}).elFormItemSize
    })
    const buttonSize = computed(() => {
      // todo ELEMENT
      return props.size || elFormItemSize_.value || (ELEMENT || {}).size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled
    })

    //methods
    const handleClick = evt => {
      ctx.emit('click', evt)
    }

    return {
      elFormItemSize_,
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
