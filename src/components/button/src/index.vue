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
<script>
import { computed, inject } from 'vue'
const ELEMENT = {}
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

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    },
    setup(props,ctx) {
      // inject
      const elForm = inject('elForm', '')
      const elFormItem = inject('elFormItem', '')

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