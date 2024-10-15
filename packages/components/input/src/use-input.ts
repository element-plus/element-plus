import { computed, nextTick, ref, shallowRef, useSlots, watch } from 'vue'
import { isNil } from 'lodash-unified'

import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
} from '@element-plus/components/form'

import {
  useComposition,
  useCursor,
  useFocusController,
} from '@element-plus/hooks'

import { ValidateComponentsMap, debugWarn } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useInputDOM } from './use-input-dom'

import type { SetupContext } from 'vue'
import type { InputEmits, InputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

type EmitFn<T> = SetupContext<T>['emit']

export const useInput = (props: InputProps, emit: EmitFn<InputEmits>) => {
  const { form: elForm, formItem: elFormItem } = useFormItem()
  const { inputId } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })
  const inputDisabled = useFormDisabled()

  const input = shallowRef<HTMLInputElement>()
  const textarea = shallowRef<HTMLTextAreaElement>()

  const hovering = ref(false)
  const passwordVisible = ref(false)
  const slots = useSlots()

  const _ref = computed(() => input.value || textarea.value)

  // wrapperRef for type="text", handleFocus and handleBlur for type="textarea"
  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
    _ref,
    {
      beforeFocus() {
        return inputDisabled.value
      },
      afterBlur() {
        if (props.validateEvent) {
          elFormItem?.validate?.('blur').catch((err) => debugWarn(err))
        }
      },
    }
  )

  const needStatusIcon = computed(() => elForm?.statusIcon ?? false)
  const validateState = computed(() => elFormItem?.validateState || '')
  const validateIcon = computed(
    () => validateState.value && ValidateComponentsMap[validateState.value]
  )

  const nativeInputValue = computed(() =>
    isNil(props.modelValue) ? '' : String(props.modelValue)
  )
  const showClear = computed(
    () =>
      props.clearable &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value &&
      (isFocused.value || hovering.value)
  )
  const showPwdVisible = computed(
    () =>
      props.showPassword &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value &&
      (!!nativeInputValue.value || isFocused.value)
  )
  const isWordLimitVisible = computed(
    () =>
      props.showWordLimit &&
      !!props.maxlength &&
      (props.type === 'text' || props.type === 'textarea') &&
      !inputDisabled.value &&
      !props.readonly &&
      !props.showPassword
  )
  const textLength = computed(() => nativeInputValue.value.length)
  const inputExceed = computed(
    () =>
      // show exceed style if length of initial value greater then maxlength
      !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
  )
  const suffixVisible = computed(
    () =>
      !!slots.suffix ||
      !!props.suffixIcon ||
      showClear.value ||
      props.showPassword ||
      isWordLimitVisible.value ||
      (!!validateState.value && needStatusIcon.value)
  )

  const [recordCursor, setCursor] = useCursor(input)

  const setNativeInputValue = () => {
    const input = _ref.value
    const formatterValue = props.formatter
      ? props.formatter(nativeInputValue.value)
      : nativeInputValue.value
    if (!input || input.value === formatterValue) return
    input.value = formatterValue
  }

  const handleInput = async (event: Event) => {
    recordCursor()

    let { value } = event.target as TargetElement

    if (props.formatter) {
      value = props.parser ? props.parser(value) : value
    }

    // should not emit input during composition
    // see: https://github.com/ElemeFE/element/issues/10516
    if (isComposing.value) return

    // hack for https://github.com/ElemeFE/element/issues/8548
    // should remove the following line when we don't support IE
    if (value === nativeInputValue.value) {
      setNativeInputValue()
      return
    }

    emit(UPDATE_MODEL_EVENT, value)
    emit('input', value)

    // ensure native input value is controlled
    // see: https://github.com/ElemeFE/element/issues/12850
    await nextTick()
    setNativeInputValue()
    setCursor()
  }

  const handleChange = (event: Event) => {
    emit('change', (event.target as TargetElement).value)
  }

  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  } = useComposition({ emit, afterComposition: handleInput })

  const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
    focus()
  }

  const focus = async () => {
    // see: https://github.com/ElemeFE/element/issues/18573
    await nextTick()
    _ref.value?.focus()
  }

  const blur = () => _ref.value?.blur()

  const handleMouseLeave = (evt: MouseEvent) => {
    hovering.value = false
    emit('mouseleave', evt)
  }

  const handleMouseEnter = (evt: MouseEvent) => {
    hovering.value = true
    emit('mouseenter', evt)
  }

  const handleKeydown = (evt: KeyboardEvent) => {
    emit('keydown', evt)
  }

  const select = () => {
    _ref.value?.select()
  }

  const clear = () => {
    emit(UPDATE_MODEL_EVENT, '')
    emit('change', '')
    emit('clear')
    emit('input', '')
  }

  watch(
    () => props.modelValue,
    () => {
      if (props.validateEvent) {
        elFormItem?.validate?.('change').catch((err) => debugWarn(err))
      }
    }
  )

  // native input value is set explicitly
  // do not use v-model / :value in template
  // see: https://github.com/ElemeFE/element/issues/14521
  watch(nativeInputValue, () => setNativeInputValue())

  return {
    inputId,
    inputDisabled,
    showClear,
    showPwdVisible,
    isFocused,
    isComposing,
    isWordLimitVisible,

    passwordVisible,
    validateIcon,
    textLength,
    suffixVisible,
    validateState,
    needStatusIcon,

    // event handlers and methods
    handleCompositionUpdate,
    handleCompositionStart,
    handleMouseEnter,
    handleChange,
    handleInput,
    clear,
    blur,
    select,
    handleBlur,
    handleFocus,
    handleKeydown,
    handleMouseLeave,
    handleCompositionEnd,
    handlePasswordVisible,

    input,
    _ref,
    textarea,
    wrapperRef,

    ...useInputDOM(props, {
      isWordLimitVisible,
      textarea,
      setNativeInputValue,
      isFocused,
      showClear,
      showPwdVisible,
      inputDisabled,
      inputExceed,
    }),
  }
}
