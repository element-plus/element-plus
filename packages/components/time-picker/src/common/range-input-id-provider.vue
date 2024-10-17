<template>
  <slot
    :input-id-for-start="inputIdForStart"
    :input-id-for-end="inputIdForEnd"
  />
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { pick } from 'lodash-unified'
import { useFormItem, useFormItemInputId } from '@element-plus/components/form'
import { timePickerDefaultProps } from './props'

const props = defineProps(pick(timePickerDefaultProps, 'id'))
const propForStart = reactive<{ id?: string }>({})
const propForEnd = reactive<{ id?: string }>({})

watch(
  () => props.id,
  () => {
    const [startInputId, endInputId] = Array.isArray(props.id) ? props.id : []
    propForStart.id = startInputId
    propForEnd.id = endInputId
  },
  { immediate: true }
)

const { formItem } = useFormItem()
const { inputId: inputIdForStart } = useFormItemInputId(propForStart, {
  formItemContext: formItem,
})
const { inputId: inputIdForEnd } = useFormItemInputId(propForEnd, {
  formItemContext: formItem,
})
</script>
