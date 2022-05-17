<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? elFormItem.labelId : undefined"
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
  checkboxGroupProps,
  useCheckboxGroup,
  useCheckboxGroupId,
} from './checkbox-group'

defineOptions({
  name: 'ElCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const { elFormItem } = useCheckboxGroup()
const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
  elFormItem,
})
const checkboxGroupSize = useSize()
const ns = useNamespace('checkbox')

const changeEvent = (value) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => {
    emit('change', value)
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    changeEvent(val)
  },
})

provide('CheckboxGroup', {
  name: 'ElCheckboxGroup',
  ...toRefs(props),
  checkboxGroupSize,
  changeEvent,
})

watch(
  () => props.modelValue,
  () => {
    elFormItem.validate?.('change').catch((err) => debugWarn(err))
  }
)
</script>
