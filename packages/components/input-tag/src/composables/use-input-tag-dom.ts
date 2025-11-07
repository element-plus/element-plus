import { computed, reactive, ref, useAttrs, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { MINIMUM_INPUT_WIDTH } from '@element-plus/constants'
import { useResizeObserver } from '@vueuse/core'

import type { ComputedRef, Ref, StyleValue } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { InputTagProps } from '../input-tag'

interface UseInputTagDomOptions {
  props: InputTagProps
  isFocused: Ref<boolean>
  hovering: Ref<boolean>
  disabled: ComputedRef<boolean>
  inputValue: Ref<string | undefined>
  size: ComputedRef<ComponentSize>
  validateState: ComputedRef<string>
  validateIcon: ComputedRef<boolean>
  needStatusIcon: ComputedRef<boolean>
}

export interface InputTagStates {
  innerWidth: number
  collapseItemWidth: number
}

export function useInputTagDom({
  props,
  isFocused,
  hovering,
  disabled,
  inputValue,
  size,
  validateState,
  validateIcon,
  needStatusIcon,
}: UseInputTagDomOptions) {
  const attrs = useAttrs()
  const slots = useSlots()
  const ns = useNamespace('input-tag')
  const nsInput = useNamespace('input')

  const collapseItemRef = ref<HTMLElement>()
  const innerRef = ref<HTMLElement>()

  const containerKls = computed(() => [
    ns.b(),
    ns.is('focused', isFocused.value),
    ns.is('hovering', hovering.value),
    ns.is('disabled', disabled.value),
    ns.m(size.value),
    ns.e('wrapper'),
    attrs.class,
  ])
  const containerStyle = computed<StyleValue>(() => [attrs.style as StyleValue])
  const innerKls = computed(() => [
    ns.e('inner'),
    ns.is('draggable', props.draggable),
    ns.is('left-space', !props.modelValue?.length && !slots.prefix),
    ns.is('right-space', !props.modelValue?.length && !showSuffix.value),
  ])
  const showClear = computed(() => {
    return (
      props.clearable &&
      !disabled.value &&
      !props.readonly &&
      (props.modelValue?.length || inputValue.value) &&
      (isFocused.value || hovering.value)
    )
  })
  const showSuffix = computed(() => {
    return (
      slots.suffix ||
      showClear.value ||
      (validateState.value && validateIcon.value && needStatusIcon.value)
    )
  })

  const states = reactive(<InputTagStates>{
    innerWidth: 0,
    collapseItemWidth: 0,
  })

  const getGapWidth = () => {
    if (!innerRef.value) return 0
    const style = window.getComputedStyle(innerRef.value)
    return Number.parseFloat(style.gap || '6px')
  }

  const resetInnerWidth = () => {
    states.innerWidth = Number.parseFloat(
      window.getComputedStyle(innerRef.value!).width
    )
  }

  const resetCollapseItemWidth = () => {
    if (!collapseItemRef.value) return 0
    states.collapseItemWidth =
      collapseItemRef.value!.getBoundingClientRect().width
  }

  const tagStyle = computed(() => {
    if (!props.collapseTags) return {}
    const gapWidth = getGapWidth()

    const inputSlotWidth = gapWidth + MINIMUM_INPUT_WIDTH

    const maxWidth =
      collapseItemRef.value && props.maxCollapseTags === 1
        ? states.innerWidth -
          states.collapseItemWidth -
          gapWidth -
          inputSlotWidth
        : states.innerWidth - inputSlotWidth

    return { maxWidth: `${Math.max(maxWidth, 0)}px` }
  })

  useResizeObserver(innerRef, resetInnerWidth)
  useResizeObserver(collapseItemRef, resetCollapseItemWidth)

  return {
    ns,
    nsInput,
    containerKls,
    containerStyle,
    innerKls,
    showClear,
    showSuffix,
    tagStyle,
    collapseItemRef,
    innerRef,
  }
}
