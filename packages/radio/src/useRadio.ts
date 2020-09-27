import { ref, computed, inject } from 'vue'

export default () => {
  //todo: ELEMENT
  const ELEMENT = null
  const elForm = inject('elForm', {})
  const elFormItem = inject('elFormItem', {})
  const radioGroup_ = inject('RadioGroup', {}) as any
  const focus = ref(false)
  const isGroup = computed(() => radioGroup_ && radioGroup_.name === 'ElRadioGroup')
  const elFormItemSize_ = computed(() => {
    return (elFormItem || {} as any).elFormItemSize
  })
  return {
    isGroup,
    focus,
    radioGroup_,
    elForm,
    ELEMENT,
    elFormItemSize_,
  }
}
