<template>
  <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  provide,
  nextTick,
  toRefs,
} from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { useCheckboxGroup } from './hook'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'

export default defineComponent({
  name: 'ElCheckboxGroup',
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(props, ctx) {
    const { elFormItem, elFormItemSize, ELEMENT } = useCheckboxGroup()
    const checkboxGroupSize = computed(
      () => props.size || elFormItemSize.value || ELEMENT.size
    )

    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit(CHANGE_EVENT, value)
      })
    }

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
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })

    watch(
      () => props.modelValue,
      () => {
        elFormItem.validate?.('change')
      }
    )
  },
})
</script>
