<template>
  <component
    :is="!hasOwnLabel && isLabeledByFormItem ? 'span' : 'label'"
    :class="[
      ns.b(),
      ns.m(checkboxSize),
      ns.is('disabled', isDisabled),
      ns.is('bordered', border),
      ns.is('checked', isChecked),
    ]"
    :aria-controls="indeterminate ? controls : null"
    @click="onClickRoot"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', isDisabled),
        ns.is('checked', isChecked),
        ns.is('indeterminate', indeterminate),
        ns.is('focus', focus),
      ]"
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
        @focus="focus = true"
        @blur="focus = false"
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
        @focus="focus = true"
        @blur="focus = false"
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
import { useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { checkboxEmits, checkboxProps, useCheckbox } from './checkbox'

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
  checkboxSize,
  hasOwnLabel,
  model,
  handleChange,
  onClickRoot,
  focus,
} = useCheckbox(props, slots)

const ns = useNamespace('checkbox')
</script>
