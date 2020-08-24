import { ref, computed, inject } from 'vue'

export default () => {
  //todo: ELEMENT
  const ELEMENT = null
  const elForm = inject('elForm', {})
  const elFormItem = inject('elFormItem', {})
  const _radioGroup = inject('RadioGroup', {}) as any
  const focus = ref(false)
  const isGroup = computed(() => _radioGroup && _radioGroup.name === 'ElRadioGroup')
  const _elFormItemSize = computed(() => {
    return (elFormItem || {} as any).elFormItemSize
  })
  return {
    isGroup,
    focus,
    _radioGroup,
    elForm,
    ELEMENT,
    _elFormItemSize,
  }
}
