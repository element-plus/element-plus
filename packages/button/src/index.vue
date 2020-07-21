<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
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
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang='ts'>
import { computed, inject } from 'vue'
const ELEMENT: {
  size?: number;
} = {}
// TODOS: replace these interface definition with actual ElForm interface
interface ElForm {
  disabled: boolean;  
}
interface ElFormItem {
  elFormItemSize: number;
}

export default {
  name: 'ElButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },
    setup(props,ctx) {
      // inject
      const elForm = inject<ElForm>('elForm')
      const elFormItem = inject<ElFormItem>('elFormItem')

      // computed
      const _elFormItemSize = computed(() => {
        return (elFormItem || {}).elFormItemSize
      })
      const buttonSize = computed(() => {
        // todo ELEMENT
        return props.size || _elFormItemSize.value || (ELEMENT || {}).size
      })
      const buttonDisabled = computed(() => {
        return props.disabled || (elForm || {}).disabled
      })

      //methods
      const handleClick = (evt) => {
        ctx.emit('click', evt)
      }

      return {
        _elFormItemSize,
        buttonSize,
        buttonDisabled,
        handleClick
      }
    }
  };
</script>