import { computed, useAttrs, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { MINIMUM_INPUT_WIDTH } from '@element-plus/constants'

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
  wrapperRef: Ref<HTMLElement | undefined>
  collapseItemRef: Ref<HTMLElement | undefined>
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
  wrapperRef,
  collapseItemRef,
}: UseInputTagDomOptions) {
  const attrs = useAttrs()
  const slots = useSlots()
  const ns = useNamespace('input-tag')
  const nsInput = useNamespace('input')

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
    ns.is('collapse-tags', props.collapseTags),
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

  const getGapWidth = () => {
    if (!wrapperRef.value) return 0
    const innerElement = wrapperRef.value.querySelector(`.${ns.e('inner')}`)
    if (!innerElement) return 0
    const style = window.getComputedStyle(innerElement)
    return Number.parseFloat(style.gap || '6px')
  }

  const getInnerWidth = () => {
    if (!wrapperRef.value) return 0
    const innerElement = wrapperRef.value.querySelector(`.${ns.e('inner')}`)
    if (!innerElement) return 0
    return innerElement.clientWidth
  }

  const tagStyle = computed(() => {
    if (!props.collapseTags) return {}
    const gapWidth = getGapWidth()
    const inputSlotWidth = gapWidth + MINIMUM_INPUT_WIDTH
    const innerWidth = getInnerWidth()
    const collapseItemWidth = collapseItemRef.value?.offsetWidth || 40

    const maxWidth =
      collapseItemRef.value && props.maxCollapseTags === 1
        ? innerWidth - collapseItemWidth - gapWidth - inputSlotWidth
        : innerWidth - inputSlotWidth

    return { maxWidth: `${Math.max(maxWidth, 0)}px` }
  })

  return {
    ns,
    nsInput,
    containerKls,
    containerStyle,
    innerKls,
    showClear,
    showSuffix,
    tagStyle,
  }
}
