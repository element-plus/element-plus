import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useFormSize } from '@element-plus/components/form'
import { useAttrs, useNamespace } from '@element-plus/hooks'
import { debugWarn, isClient, isObject } from '@element-plus/utils'
import { calcTextareaHeight } from './utils'

import type { Ref, StyleValue } from 'vue'
import type { InputProps } from './input'

type UseInputDOMProps = {
  textarea: Ref<HTMLTextAreaElement | undefined>
  isWordLimitVisible: Ref<boolean>
  setNativeInputValue: () => void
  isFocused: Ref<boolean>
  showClear: Ref<boolean>
  showPwdVisible: Ref<boolean>
  inputDisabled: Ref<boolean>
  inputExceed: Ref<boolean>
}

const useInputAttrs = (props: InputProps) => {
  const rawAttrs = useRawAttrs()

  const containerAttrs = computed(() => {
    const comboBoxAttrs: Record<string, unknown> = {}
    if (props.containerRole === 'combobox') {
      comboBoxAttrs['aria-haspopup'] = rawAttrs['aria-haspopup']
      comboBoxAttrs['aria-owns'] = rawAttrs['aria-owns']
      comboBoxAttrs['aria-expanded'] = rawAttrs['aria-expanded']
    }
    return comboBoxAttrs
  })

  const attrs = useAttrs({
    excludeKeys: computed<string[]>(() => {
      return Object.keys(containerAttrs.value)
    }),
  })

  return {
    attrs,
    containerAttrs,
    rawAttrs,
  }
}

export const useInputDOM = (
  props: InputProps,
  {
    textarea,
    isWordLimitVisible,
    setNativeInputValue,
    isFocused,
    showClear,
    showPwdVisible,
    inputDisabled,
    inputExceed,
  }: UseInputDOMProps
) => {
  const slots = useSlots()
  const inputSize = useFormSize()
  const nsInput = useNamespace('input')
  const nsTextarea = useNamespace('textarea')
  const { attrs, containerAttrs, rawAttrs } = useInputAttrs(props)

  const countStyle = ref<StyleValue>()
  const textareaCalcStyle = shallowRef(props.inputStyle)

  const containerStyle = computed<StyleValue>(() => [
    rawAttrs.style as StyleValue,
  ])

  const containerKls = computed(() => [
    props.type === 'textarea' ? nsTextarea.b() : nsInput.b(),
    nsInput.m(inputSize.value),
    nsInput.is('disabled', inputDisabled.value),
    nsInput.is('exceed', inputExceed.value),
    {
      [nsInput.b('group')]: slots.prepend || slots.append,
      [nsInput.m('prefix')]: slots.prefix || props.prefixIcon,
      [nsInput.m('suffix')]:
        slots.suffix ||
        props.suffixIcon ||
        props.clearable ||
        props.showPassword,
      [nsInput.bm('suffix', 'password-clear')]:
        showClear.value && showPwdVisible.value,
      [nsInput.b('hidden')]: props.type === 'hidden',
    },
    {
      [nsInput.bm('group', 'append')]: Boolean(slots.append),
      [nsInput.bm('group', 'prepend')]: Boolean(slots.prepend),
    },
    rawAttrs.class,
  ])

  const wrapperKls = computed(() => [
    nsInput.e('wrapper'),
    nsInput.is('focus', isFocused.value),
  ])

  const textareaStyle = computed<StyleValue>(() => [
    props.inputStyle,
    textareaCalcStyle.value,
    { resize: props.resize },
  ])

  const resizeTextarea = () => {
    const { type, autosize } = props

    if (!isClient || type !== 'textarea' || !textarea.value) return

    if (autosize) {
      const minRows = isObject(autosize) ? autosize.minRows : undefined
      const maxRows = isObject(autosize) ? autosize.maxRows : undefined
      const textareaStyle = calcTextareaHeight(textarea.value, minRows, maxRows)

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
        textarea.value!.offsetHeight
        textareaCalcStyle.value = textareaStyle
      })
    } else {
      textareaCalcStyle.value = {
        minHeight: calcTextareaHeight(textarea.value).minHeight,
      }
    }
  }

  const createOnceInitResize = (resizeTextarea: () => void) => {
    let isInit = false
    return () => {
      if (isInit || !props.autosize) return
      const isElHidden = textarea.value?.offsetParent === null
      if (!isElHidden) {
        resizeTextarea()
        isInit = true
      }
    }
  }
  // fix: https://github.com/element-plus/element-plus/issues/12074
  const onceInitSizeTextarea = createOnceInitResize(resizeTextarea)

  useResizeObserver(textarea, (entries) => {
    onceInitSizeTextarea()
    if (!isWordLimitVisible.value || props.resize !== 'both') return
    const entry = entries[0]
    const { width } = entry.contentRect
    countStyle.value = {
      /** right: 100% - width + padding(15) + right(6) */
      right: `calc(100% - ${width + 15 + 6}px)`,
    }
  })

  // when change between <input> and <textarea>,
  // update DOM dependent value and styles
  // https://github.com/ElemeFE/element/issues/14857
  watch(
    () => props.type,
    async () => {
      await nextTick()
      setNativeInputValue()
      resizeTextarea()
    }
  )

  watch(
    () => props.modelValue,
    () => nextTick(resizeTextarea)
  )

  onMounted(() => {
    if (!props.formatter && props.parser) {
      debugWarn(
        'ElInput',
        'If you set the parser, you also need to set the formatter.'
      )
    }
    setNativeInputValue()
    nextTick(resizeTextarea)
  })

  return {
    containerKls,
    wrapperKls,

    containerStyle,
    countStyle,
    textareaStyle,
    textareaCalcStyle,

    // namespaces
    nsInput,
    nsTextarea,

    // attributes
    attrs,
    containerAttrs,
    rawAttrs,

    resizeTextarea,
  }
}
