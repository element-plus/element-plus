<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? elFormItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, watch } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { debugWarn } from '@element-plus/utils'
import {
  useFormItem,
  useFormItemInputId,
  useNamespace,
} from '@element-plus/hooks'
import { checkboxGroupContextKey } from '@element-plus/tokens'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'

import type { CheckboxValueType } from './checkbox'

defineOptions({
  name: 'ElCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const { formItem: elFormItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: elFormItem,
})

const changeEvent = (value: CheckboxValueType[]) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => {
    emit('change', value)
  })
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxValueType[]) {
    changeEvent(val)
  },
})

provide(checkboxGroupContextKey, {
  props: reactiveOmit(props, ['modelValue', 'label', 'tag']),
  modelValue,
  changeEvent,
})

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      elFormItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
