import { computed, nextTick, ref, shallowRef, unref, useSlots } from 'vue'
import { isClient } from '@vueuse/core'
import { isObject } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { calcTextareaHeight } from '../utils'

import type { Ref, StyleValue } from 'vue'
import type { UseInputStateReturn } from './use-input-state'
import type { InputProps } from '../input'

export const useInputDOM = (
  props: InputProps,
  rawAttrs: Record<string, unknown>,
  {
    focusing,
    inputDisabled,
    inputExceeded,
    showClear,
    showPwdVisible,
    passwordVisible,
    nativeInputValue,
    inputElRef,
  }: Pick<
    UseInputStateReturn,
    | 'focusing'
    | 'inputDisabled'
    | 'inputExceeded'
    | 'showClear'
    | 'showPwdVisible'
    | 'passwordVisible'
    | 'nativeInputValue'
  > & {
    inputElRef: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>
  }
) => {
  const slots = useSlots()
  const ns = useNamespace('input')
  const nsTextarea = useNamespace('textarea')
  const inputSize = useFormSize()

  const textareaCalcStyle = shallowRef<StyleValue>(props.inputStyle)
  const wordLimitStyle = ref<StyleValue>() // alias wordLimitStyle=countStyle

  const containerKls = computed(() => [
    props.type === 'textarea' ? nsTextarea.b() : ns.b(),
    ns.m(unref(inputSize)),
    ns.is('disabled', unref(inputDisabled)),
    ns.is('exceed', unref(inputExceeded)),
    {
      [ns.b('group')]: slots.prepend || slots.append,
      [ns.bm('group', 'append')]: slots.append,
      [ns.bm('group', 'prepend')]: slots.prepend,
      [ns.m('prefix')]: slots.prefix || props.prefixIcon,
      [ns.m('suffix')]:
        slots.suffix ||
        props.suffixIcon ||
        props.clearable ||
        props.showPassword,
      [ns.bm('suffix', 'password-clear')]:
        showClear.value && showPwdVisible.value,
    },
    rawAttrs.class,
  ])

  const wrapperKls = computed(() => [
    ns.e('wrapper'),
    ns.is('focus', focusing.value),
  ])

  const containerStyle = computed<StyleValue>(() => [
    rawAttrs.style as StyleValue,
    props.inputStyle,
  ])
  const textareaStyle = computed<StyleValue>(() => [
    props.inputStyle,
    unref(textareaCalcStyle),
    { resize: props.resize },
  ])

  const refSetter = (el: any) => (inputElRef.value = el)
  const resizeTextarea = () => {
    const { type, autosize } = props
    const inputEl = unref(inputElRef) as HTMLTextAreaElement

    if (!isClient || type !== 'textarea' || !inputEl) return

    if (autosize) {
      const minRows = isObject(autosize) ? autosize.minRows : undefined
      const maxRows = isObject(autosize) ? autosize.maxRows : undefined

      const textareaStyle = calcTextareaHeight(inputEl, minRows, maxRows)

      // If the scrollbar is displayed, the height of the textarea needs more space than the calculated height.
      // If set textarea height in this case, the scrollbar will not hide.
      // So we need to hide scrollbar first, and reset it in next tick.
      // see https://github.com/element-plus/element-plus/issues/8825
      textareaCalcStyle.value = {
        overflowY: 'hidden',
        ...textareaStyle,
      }

      nextTick(() => {
        // NOTE: Force repaint to make sure the style set above is applied.
        inputEl!.offsetHeight
        textareaCalcStyle.value = textareaStyle
      })
    } else {
      textareaCalcStyle.value = {
        minHeight: calcTextareaHeight(inputEl).minHeight,
      }
    }
  }
  const focus = () => {
    // see: https://github.com/ElemeFE/element/issues/18573
    nextTick(() => {
      unref(inputElRef)?.focus?.()
    })
  }

  const blur = () => {
    unref(inputElRef)?.blur?.()
  }

  const onTogglePasswordVisible = () => {
    passwordVisible.value = !unref(passwordVisible)
    focus()
  }

  const select = () => {
    inputElRef.value?.select?.()
  }

  const setNativeInputValue = () => {
    const inputEl = unref(inputElRef)
    const value = unref(nativeInputValue)
    if (!inputEl || inputEl.value === value) return
    inputEl.value = value
  }

  return {
    containerKls,
    wrapperKls,
    containerStyle,
    textareaStyle,
    inputElRef,
    wordLimitStyle,
    ns,
    nsTextarea,

    resizeTextarea,
    refSetter,
    focus,
    blur,
    select,
    setNativeInputValue,
    onTogglePasswordVisible,
  }
}

export type UseInputDOMReturn = ReturnType<typeof useInputDOM>
