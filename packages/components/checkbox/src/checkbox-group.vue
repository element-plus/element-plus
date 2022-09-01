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
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { debugWarn } from '@element-plus/utils'
import { useNamespace, useSize } from '@element-plus/hooks'
import {
  checkboxGroupEmits,
  useCheckboxGroup,
  useCheckboxGroupId,
  useCheckboxGroupProps,
} from './checkbox'
import type { CheckboxValueType } from './checkbox'

defineOptions({
  name: 'ElCheckboxGroup',
})

const props = defineProps(useCheckboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const { elFormItem } = useCheckboxGroup()
const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
  elFormItem,
})
const checkboxGroupSize = useSize()
const ns = useNamespace('checkbox')

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

provide('CheckboxGroup', {
  name: 'ElCheckboxGroup',
  ...toRefs(props),
  modelValue,
  checkboxGroupSize,
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
