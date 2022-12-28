<template>
  <component
    :is="!hasOwnLabel && isLabeledByFormItem ? 'span' : 'label'"
    :class="compKls"
    :aria-controls="indeterminate ? controls : null"
    @click="onClickRoot"
  >
    <span
      :class="spanKls"
      :tabindex="indeterminate ? 0 : undefined"
      :role="indeterminate ? 'checkbox' : undefined"
      :aria-checked="indeterminate ? 'mixed' : undefined"
    >
      <input
        v-if="trueLabel || falseLabel"
        :id="inputId"
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
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
        :id="inputId"
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        :tabindex="tabindex"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
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
  handleChange,
  onClickRoot,
} = useCheckbox(props, slots)

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
