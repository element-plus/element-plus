<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { pick } from 'lodash-unified'
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

const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const changeEvent = async (value: CheckboxValueType[]) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit('change', value)
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
  ...pick(toRefs(props), [
    'size',
    'min',
    'max',
    'disabled',
    'validateEvent',
    'fill',
    'textColor',
  ]),
  modelValue,
  changeEvent,
})

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
