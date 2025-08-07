<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="
      !isLabeledByFormItem ? ariaLabel || 'checkbox-group' : undefined
    "
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot>
      <el-checkbox
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :value="item.value"
        :label="item.label"
        :disabled="item.disabled"
      />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { isEqual, pick } from 'lodash-unified'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { debugWarn } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useFormItem, useFormItemInputId } from '@element-plus/components/form'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
import { checkboxGroupContextKey } from './constants'
import ElCheckbox from './checkbox.vue'

import type { CheckboxGroupValueType } from './checkbox-group'

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

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit(CHANGE_EVENT, value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  },
})

const checkboxOptions = computed(() => {
  const valueKey = props.props?.value ?? 'value'
  const labelKey = props.props?.label ?? 'label'
  const disabledKey = props.props?.disabled ?? 'disabled'
  return (props.options || []).map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
    disabled: item[disabledKey],
  }))
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
  (newVal, oldValue) => {
    if (props.validateEvent && !isEqual(newVal, oldValue)) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
