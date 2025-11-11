<template>
  <component
    :is="!hasOwnLabel && isLabeledByFormItem ? 'span' : 'label'"
    :class="compKls"
    :aria-controls="indeterminate ? ariaControls : null"
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
      <span :class="ns.e('inner')" />
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
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './composables'

defineOptions({
  name: 'ElCheckbox',
})

const props = defineProps(checkboxProps)
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
