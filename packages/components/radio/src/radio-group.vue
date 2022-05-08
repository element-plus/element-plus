<template>
  <div
    :id="groupId"
    ref="radioGroupRef"
    :class="ns.b('group')"
    role="radiogroup"
    :aria-label="!isLabeledByFormItem ? label || 'radio-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem.labelId : undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { radioGroupKey } from '@element-plus/tokens'
import {
  useFormItem,
  useFormItemInputId,
  useNamespace,
} from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils'
import { radioGroupEmits, radioGroupProps } from './radio-group'
import type { RadioGroupProps } from '..'

let id = 1
export default defineComponent({
  name: 'ElRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,

  setup(props, ctx) {
    const ns = useNamespace('radio')
    const radioGroupRef = ref<HTMLDivElement>()
    const { formItem } = useFormItem()
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(
      props,
      {
        formItemContext: formItem,
      }
    )

    const changeEvent = (value: RadioGroupProps['modelValue']) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => ctx.emit('change', value))
    }

    onMounted(() => {
      const radios =
        radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]')
      const firstLabel = radios[0]
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    })

    const randomName = `el-radio-group-${id++}`

    const name = computed(() => {
      return props.name || randomName
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
      () => formItem?.validate('change').catch((err) => debugWarn(err))
    )

    return {
      ns,
      radioGroupRef,
      formItem,
      groupId,
      isLabeledByFormItem,
    }
  },
})
</script>
