<template>
  <component
    :is="hasOwnLabel ? 'label' : 'span'"
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
      <span :class="ns.e('inner')" />
      <input
        v-if="trueLabel || falseLabel"
        :id="gid"
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
        :id="gid"
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
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, ref, toRef, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isValidComponentSize } from '@element-plus/utils'
import { useId, useNamespace } from '@element-plus/hooks'
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
  setup(props, { slots }) {
    const ns = useNamespace('checkbox')
    const gid = ref<string>()

    const checkboxProps = useCheckbox(props, slots)
    const { elFormItem } = checkboxProps

    // Generate id for form item if not provided
    watch(
      [toRef(props, 'id'), checkboxProps.hasOwnLabel],
      ([id, hasOwnLabel]) => {
        const newId = id ?? useId().value
        if (newId !== gid.value) {
          if (elFormItem?.removeInputId && !checkboxProps.isGroup.value) {
            gid.value ?? elFormItem.removeInputId(gid.value)
            if (!hasOwnLabel) {
              elFormItem.addInputId(newId)
            }
          }
          gid.value = newId
        }
      },
      { immediate: true }
    )

    onUnmounted(() => {
      if (elFormItem?.removeInputId) {
        gid.value ?? elFormItem.removeInputId(gid.value)
      }
    })

    return {
      ns,
      gid,
      ...checkboxProps,
    }
  },
})
</script>
