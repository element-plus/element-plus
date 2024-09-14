<template>
  <div
    :id="groupId"
    ref="radioGroupRef"
    :class="ns.b('group')"
    role="radiogroup"
    :aria-label="!isLabeledByFormItem ? ariaLabel || 'radio-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem!.labelId : undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { useFormItem, useFormItemInputId } from '@element-plus/components/form'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useId, useNamespace } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils'
import { radioGroupEmits, radioGroupProps } from './radio-group'
import { radioGroupKey } from './constants'

import type { RadioGroupProps } from './radio-group'

defineOptions({
  name: 'ElRadioGroup',
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const ns = useNamespace('radio')
const radioId = useId()
const radioGroupRef = ref<HTMLDivElement>()
const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit('change', value))
}

onMounted(() => {
  const radios =
    radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]')
  const firstLabel = radios[0]
  if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0
  }
})

const name = computed(() => {
  return props.name || radioId.value
})

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
    name,
  })
)

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
