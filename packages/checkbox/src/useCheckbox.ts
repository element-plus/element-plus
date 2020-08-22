import { ref, computed, inject } from 'vue'

export const useCheckbox = () => {
  //todo: ELEMENT
  const ELEMENT = null
  const elForm = inject('elForm', {})
  const elFormItem = inject('elFormItem', {}) as any
  const _checkboxGroup = inject('CheckboxGroup', {}) as any
  const focus = ref(false)
  const isGroup = computed(() => _checkboxGroup && _checkboxGroup.name === 'ElCheckboxGroup')
  const _elFormItemSize = computed(() => {
    return (elFormItem || {} as any).elFormItemSize
  })
  return {
    isGroup,
    focus,
    _checkboxGroup,
    elForm,
    ELEMENT,
    _elFormItemSize,
    elFormItem,
  }
}
