<template>
  <label :class="labelKls">
    <input
      v-if="trueValue || falseValue || trueLabel || falseLabel"
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :true-value="trueValue ?? trueLabel ?? true"
      :false-value="falseValue ?? falseLabel ?? false"
      @change="handleChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @click.stop
    />
    <input
      v-else
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :value="actualValue"
      @change="handleChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @click.stop
    />

    <span
      v-if="$slots.default || label"
      :class="ns.be('button', 'inner')"
      :style="isChecked ? activeStyle : undefined"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { checkboxGroupContextKey } from './constants'
import { useCheckbox } from './composables'
import { checkboxEmits, checkboxProps } from './checkbox'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElCheckboxButton',
})

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)
const slots = useSlots()

const {
  isFocused,
  isChecked,
  isDisabled,
  checkboxButtonSize,
  model,
  actualValue,
  handleChange,
} = useCheckbox(props, slots)
const checkboxGroup = inject(checkboxGroupContextKey, undefined)
const ns = useNamespace('checkbox')

const activeStyle = computed<CSSProperties>(() => {
  const fillValue = checkboxGroup?.fill?.value ?? ''
  return {
    backgroundColor: fillValue,
    borderColor: fillValue,
    color: checkboxGroup?.textColor?.value ?? '',
    boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : undefined,
  }
})

const labelKls = computed(() => {
  return [
    ns.b('button'),
    ns.bm('button', checkboxButtonSize.value),
    ns.is('disabled', isDisabled.value),
    ns.is('checked', isChecked.value),
    ns.is('focus', isFocused.value),
  ]
})
</script>
