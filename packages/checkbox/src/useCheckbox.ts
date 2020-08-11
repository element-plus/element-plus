import { ref, computed, inject } from 'vue'

export const useCheckbox = () => {
  //todo: ELEMENT
  const ELEMENT = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elForm = inject('elForm', {})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elFormItem = inject('elFormItem', {}) as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _checkboxGroup = inject('CheckboxGroup', {}) as any
  const focus = ref(false)
  const isGroup = computed(() => _checkboxGroup && _checkboxGroup.name === 'ElCheckboxGroup')
  const _elFormItemSize = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
