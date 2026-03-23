<template>
  <component
    :is="!hasOwnLabel && isLabeledByFormItem ? 'span' : 'label'"
    :for="!hasOwnLabel && isLabeledByFormItem ? null : inputId"
    :class="compKls"
    :aria-controls="indeterminate ? ariaControls : null"
    :aria-checked="indeterminate ? 'mixed' : undefined"
    :aria-label="ariaLabel"
    @click="onClickRoot"
  >
    <span :class="spanKls">
      <input
        :id="inputId"
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :indeterminate="indeterminate"
        :name="name"
        :tabindex="tabindex"
        :disabled="isDisabled"
        v-bind="inputBindings"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @click.stop
      />
      <span :class="[ns.e('inner'), ns.is('customized', showCheckedIcon)]">
        <span v-if="showCheckedIcon" :class="ns.e('icon')">
          <slot name="checked-icon" />
        </span>
      </span>
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { checkboxEmits, checkboxPropsDefaults } from './checkbox'
import { useCheckbox } from './composables'

import type { CheckboxProps } from './checkbox'

defineOptions({
  name: 'ElCheckbox',
})

const props = withDefaults(defineProps<CheckboxProps>(), checkboxPropsDefaults)
defineEmits(checkboxEmits)
const slots = useSlots()

const {
  inputId,
  isLabeledByFormItem,
  isChecked,
  isDisabled,
  isFocused,
  checkboxSize,
  hasOwnLabel,
  model,
  actualValue,
  handleChange,
  onClickRoot,
} = useCheckbox(props, slots)

const inputBindings = computed(() => {
  if (
    props.trueValue ||
    props.falseValue ||
    props.trueLabel ||
    props.falseLabel
  ) {
    return {
      'true-value': props.trueValue ?? props.trueLabel ?? true,
      'false-value': props.falseValue ?? props.falseLabel ?? false,
    }
  }
  return {
    value: actualValue.value,
  }
})

const ns = useNamespace('checkbox')

const showCheckedIcon = computed(
  () => isChecked.value && !!slots['checked-icon']
)

const compKls = computed(() => {
  return [
    ns.b(),
    ns.m(checkboxSize.value),
    ns.is('disabled', isDisabled.value),
    ns.is('bordered', props.border),
    ns.is('checked', isChecked.value),
  ]
})

const spanKls = computed(() => {
  return [
    ns.e('input'),
    ns.is('disabled', isDisabled.value),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('focus', isFocused.value),
  ]
})
</script>
