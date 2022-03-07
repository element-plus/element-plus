<template>
  <label
    :id="id"
    :class="[
      ns.b(),
      ns.m(checkboxSize),
      ns.is('disabled', isDisabled),
      ns.is('bordered', border),
      ns.is('checked', isChecked),
    ]"
    :aria-controls="indeterminate ? controls : null"
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
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span :class="ns.e('inner')"></span>
      <input
        v-if="trueLabel || falseLabel"
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
    </span>
    <span v-if="$slots.default || label" :class="ns.e('label')">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isValidComponentSize } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useCheckbox } from './useCheckbox'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export default defineComponent({
  name: 'ElCheckbox',
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: () => undefined,
    },
    label: {
      type: [String, Boolean, Number, Object],
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: undefined,
    },
    trueLabel: {
      type: [String, Number],
      default: undefined,
    },
    falseLabel: {
      type: [String, Number],
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    controls: {
      type: String,
      default: undefined,
    },
    border: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    tabindex: [String, Number],
  },
  emits: [UPDATE_MODEL_EVENT, 'change'],
  setup(props) {
    const ns = useNamespace('checkbox')
    return {
      ns,
      ...useCheckbox(props),
    }
  },
})
</script>
