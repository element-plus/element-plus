import { computed, ref, unref, useSlots } from 'vue'
import { isNil } from 'lodash-unified'
import { useAttrs } from '@element-plus/hooks'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
} from '@element-plus/components/form'

import type { InputProps } from '../input'

/**
 * @description Initializing input related states for the UI.
 */
export const useInputStates = (
  props: InputProps,
  rawAttrs: Record<string, unknown>
) => {
  const inputDisabled = useFormDisabled()
  const { form, formItem } = useFormItem()
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem,
  })

  const attrs = useAttrs({
    excludeKeys: computed<string[]>(() => {
      return Object.keys(unref(containerAttrs))
    }),
  })
  const slots = useSlots()

  const focusing = ref(false)
  const hovering = ref(false)
  const isComposing = ref(false)
  const passwordVisible = ref(false)
  const containerAttrs = computed(() => {
    const comboBoxAttrs: Record<string, unknown> = {}
    if (props.containerRole === 'combobox') {
      comboBoxAttrs['aria-haspopup'] = rawAttrs['aria-haspopup']
      comboBoxAttrs['aria-owns'] = rawAttrs['aria-owns']
      comboBoxAttrs['aria-expanded'] = rawAttrs['aria-expanded']
    }
    return comboBoxAttrs
  })
  const nativeInputValue = computed(() =>
    isNil(props.modelValue) ? '' : String(props.modelValue)
  )
  // using maxLength instead of maxlength to avoid conflict with native attr
  const maxLength = computed(() => Number(unref(attrs).maxlength))
  const isPlainText = computed(() => ['text', 'textarea'].includes(props.type))
  const showClear = computed(
    () =>
      props.clearable &&
      !unref(inputDisabled) &&
      !props.readonly &&
      !!unref(nativeInputValue) &&
      (unref(focusing) || unref(hovering))
  )
  const showPwdVisible = computed(
    () =>
      props.showPassword &&
      !unref(inputDisabled) &&
      !props.readonly &&
      !!unref(nativeInputValue) &&
      (!!unref(nativeInputValue) || unref(focusing))
  )
  const isWordLimitVisible = computed(
    () =>
      props.showWordLimit &&
      unref(maxLength) > 0 &&
      unref(isPlainText) &&
      !unref(inputDisabled) &&
      !props.readonly &&
      !props.showPassword
  )

  const textLength = computed(() => unref(nativeInputValue).length)
  const needStatusIcon = computed(() => form?.statusIcon ?? false)
  const validateState = computed(() => formItem?.validateState || '')

  // NOTE: while porting this it was changed from `inputExceed` to `inputExceeded`
  const inputExceeded = computed(
    () =>
      // show exceed style if length of initial value greater then maxlength
      !!unref(isWordLimitVisible) && textLength.value > unref(maxLength)
  )
  const suffixVisible = computed(
    () =>
      !!slots.suffix ||
      !!props.suffixIcon ||
      unref(showClear) ||
      props.showPassword ||
      unref(isWordLimitVisible) ||
      (!!unref(validateState) && unref(needStatusIcon))
  )
  const inputType = computed(() => {
    if (!props.showPassword) return props.type
    return unref(passwordVisible) ? 'text' : 'password'
  })
  const isTextarea = computed(() => props.type === 'textarea')
  const isText = computed(() => props.type === 'text')

  return {
    form,
    formItem,
    inputId,
    inputDisabled,
    containerAttrs,
    focusing,
    hovering,
    isComposing,
    passwordVisible,
    showClear,
    showPwdVisible,
    isWordLimitVisible,
    isPlainText,
    isTextarea,
    isText,
    inputExceeded,
    inputType,
    suffixVisible,
    nativeInputValue,
    textLength,
    validateState,
    needStatusIcon,
  }
}

export type UseInputStateReturn = ReturnType<typeof useInputStates>
