import { ref, computed, inject, getCurrentInstance, SetupContext } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { ICheckboxGroupInstance, ICheckboxProps } from './checkbox'

export const useCheckboxGroup = () => {
  //todo: ELEMENT
  const ELEMENT = null
  const elForm = inject('elForm', {})
  const elFormItem = inject('elFormItem', {}) as any
  const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
  const focus = ref(false)
  const isGroup = computed(() => checkboxGroup && checkboxGroup.name === 'ElCheckboxGroup')
  const elFormItemSize = computed(() => {
    return (elFormItem || {} as any).elFormItemSize
  })
  return {
    isGroup,
    focus,
    checkboxGroup,
    elForm,
    ELEMENT,
    elFormItemSize,
    elFormItem,
  }
}

export const useCheckbox = (props: ICheckboxProps, { emit }: SetupContext) => {
  let selfModel = false
  const { elForm, isGroup, checkboxGroup, elFormItemSize, elFormItem, ELEMENT } = useCheckboxGroup()
  const instance = getCurrentInstance()
  const focus = ref(false)
  const isLimitExceeded = ref(false)
  const store = computed(() => checkboxGroup ? checkboxGroup.modelValue.value : props.modelValue)
  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue !== undefined ? props.modelValue : selfModel
    },

    set(val: any) {
      if (isGroup.value) {
        isLimitExceeded.value = false

        if (checkboxGroup.min !== undefined && val.length < checkboxGroup.min) {
          isLimitExceeded.value = true
        }
        if (checkboxGroup.max !== undefined && val.length > checkboxGroup.max) {
          isLimitExceeded.value = true
        }

        isLimitExceeded.value === false && checkboxGroup.changeEvent?.(val)
      } else {
        emit('update:modelValue', val)
        selfModel = val
      }
    },
  })
  return {
    instance,
  }
}
