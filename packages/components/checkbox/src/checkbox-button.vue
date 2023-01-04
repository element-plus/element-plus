<template>
  <label :class="labelKls">
    <input
      v-if="trueLabel || falseLabel"
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      @change="handleChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <input
      v-else
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :value="label"
      @change="handleChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
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
import { checkboxGroupContextKey } from '@element-plus/tokens'
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
