<template>
  <label
    :class="[
      ns.b('button'),
      ns.is('active', modelValue === label),
      ns.is('disabled', disabled),
      ns.is('focus', focus),
      ns.bm('button', size),
    ]"
  >
    <input
      ref="radioRef"
      v-model="modelValue"
      :class="ns.be('button', 'original-radio')"
      :value="label"
      type="radio"
      :name="name || radioGroup?.name"
      :disabled="disabled"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span
      :class="ns.be('button', 'inner')"
      :style="modelValue === label ? activeStyle : {}"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useRadio } from './radio'
import { radioButtonProps } from './radio-button'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElRadioButton',
  props: radioButtonProps,

  setup(props, { emit }) {
    const ns = useNamespace('radio')
    const {
      radioRef,
      isGroup,
      focus,
      size,
      disabled,
      tabIndex,
      modelValue,
      radioGroup,
    } = useRadio(props, emit)

    const activeStyle = computed<CSSProperties>(() => {
      return {
        backgroundColor: radioGroup?.fill || '',
        borderColor: radioGroup?.fill || '',
        boxShadow: radioGroup?.fill ? `-1px 0 0 0 ${radioGroup.fill}` : '',
        color: radioGroup?.textColor || '',
      }
    })

    return {
      ns,
      isGroup,
      size,
      disabled,
      tabIndex,
      modelValue,
      focus,
      activeStyle,
      radioRef,
      radioGroup,
    }
  },
})
</script>
