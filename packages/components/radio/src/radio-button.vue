<template>
  <label
    :class="[
      ns.b('button'),
      ns.is('active', modelValue === actualValue),
      ns.is('disabled', disabled),
      ns.is('focus', focus),
      ns.bm('button', size),
    ]"
  >
    <input
      ref="radioRef"
      v-model="modelValue"
      :class="ns.be('button', 'original-radio')"
      :value="actualValue"
      type="radio"
      :name="name || radioGroup?.name"
      :disabled="disabled"
      @focus="focus = true"
      @blur="focus = false"
      @click.stop
    />
    <span
      :class="ns.be('button', 'inner')"
      :style="modelValue === actualValue ? activeStyle : {}"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useRadio } from './use-radio'
import { radioButtonProps } from './radio-button'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElRadioButton',
})

const props = defineProps(radioButtonProps)

const ns = useNamespace('radio')
const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } =
  useRadio(props)

const activeStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: radioGroup?.fill || '',
    borderColor: radioGroup?.fill || '',
    boxShadow: radioGroup?.fill ? `-1px 0 0 0 ${radioGroup.fill}` : '',
    color: radioGroup?.textColor || '',
  }
})
</script>
