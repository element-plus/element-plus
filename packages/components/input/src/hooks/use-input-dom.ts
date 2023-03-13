import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  unref,
  useSlots,
  watch,
} from 'vue'
import { isClient, useResizeObserver } from '@vueuse/core'
import { isObject } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { calcTextareaHeight } from '../utils'

import type { StyleValue } from 'vue'
import type { useInputStates } from './use-input-state'
import type { InputProps } from '../input'

export const useInputDOM = (
  props: InputProps,
  rawAttrs: Record<string, unknown>,
  {
    focused,
    isWordLimitVisible,
    inputDisabled,
    inputExceeded,
    showClear,
    showPwdVisible,
  }: ReturnType<typeof useInputStates>
) => {
  const slots = useSlots()
  const ns = useNamespace('input')
  const nsTextarea = useNamespace('textarea')
  const inputSize = useFormSize()

  const inputElRef = ref<HTMLInputElement | HTMLTextAreaElement>()
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
    ns.is('focus', focused.value),
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
      textareaCalcStyle.value = {
        ...calcTextareaHeight(inputEl, minRows, maxRows),
      }
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

  onMounted(() => {
    watch(
      () => props.type,
      (type) => {
        if (type === 'textarea') {
          useResizeObserver(inputElRef, (entries) => {
            if (!unref(isWordLimitVisible) || props.resize !== 'both') return
            const entry = entries[0]
            const { width } = entry.contentRect
            wordLimitStyle.value = {
              /** right: 100% - width + padding(15) + right(6) */
              right: `calc(100% - ${width + 15 + 6}px)`,
            }
          })
        }
      }
    )

    watch(
      () => props.modelValue,
      () => {
        nextTick(() => resizeTextarea())
      },
      {
        immediate: true,
      }
    )
  })

  return {
    containerKls,
    wrapperKls,
    containerStyle,
    textareaStyle,
    inputElRef,
    wordLimitStyle,

    refSetter,
    focus,
    blur,
  }
}
