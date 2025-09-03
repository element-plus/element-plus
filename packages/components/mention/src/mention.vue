<template>
  <div ref="wrapperRef" :class="ns.b()">
    <el-input
      v-bind="mergeProps(passInputProps, $attrs)"
      ref="elInputRef"
      :model-value="modelValue"
      :disabled="disabled"
      :role="dropdownVisible ? 'combobox' : undefined"
      :aria-activedescendant="dropdownVisible ? hoveringId || '' : undefined"
      :aria-controls="dropdownVisible ? contentId : undefined"
      :aria-expanded="dropdownVisible || undefined"
      :aria-label="ariaLabel"
      :aria-autocomplete="dropdownVisible ? 'none' : undefined"
      :aria-haspopup="dropdownVisible ? 'listbox' : undefined"
      @input="handleInputChange"
      @keydown="handleInputKeyDown"
      @mousedown="handleInputMouseDown"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </el-input>
    <el-tooltip
      ref="tooltipRef"
      :visible="dropdownVisible"
      :popper-class="[ns.e('popper'), popperClass]"
      :popper-options="popperOptions"
      :placement="computedPlacement"
      :fallback-placements="computedFallbackPlacements"
      effect="light"
      pure
      :offset="offset"
      :show-arrow="showArrow"
    >
      <template #default>
        <div :style="cursorStyle" />
      </template>
      <template #content>
        <el-mention-dropdown
          ref="dropdownRef"
          :options="filteredOptions"
          :disabled="disabled"
          :loading="loading"
          :content-id="contentId"
          :aria-label="ariaLabel"
          @select="handleSelect"
          @click.stop="elInputRef?.focus"
        >
          <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </el-mention-dropdown>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, mergeProps, nextTick, ref } from 'vue'
import { pick } from 'lodash-unified'
import { useFocusController, useId, useNamespace } from '@element-plus/hooks'
import ElInput, { inputProps } from '@element-plus/components/input'
import ElTooltip from '@element-plus/components/tooltip'
import {
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { useFormDisabled } from '@element-plus/components/form'
import { isFunction } from '@element-plus/utils'
import { mentionEmits, mentionProps } from './mention'
import { getCursorPosition, getMentionCtx } from './helper'
import ElMentionDropdown from './mention-dropdown.vue'

import type { Placement } from '@popperjs/core'
import type { CSSProperties } from 'vue'
import type { InputInstance } from '@element-plus/components/input'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { MentionCtx, MentionOption } from './types'

defineOptions({
  name: 'ElMention',
  inheritAttrs: false,
})

const props = defineProps(mentionProps)
const emit = defineEmits(mentionEmits)

const passInputProps = computed(() => pick(props, Object.keys(inputProps)))

const ns = useNamespace('mention')
const disabled = useFormDisabled()
const contentId = useId()

const elInputRef = ref<InputInstance>()
const tooltipRef = ref<TooltipInstance>()
const dropdownRef = ref<InstanceType<typeof ElMentionDropdown>>()

const visible = ref(false)
const cursorStyle = ref<CSSProperties>()
const mentionCtx = ref<MentionCtx>()

const computedPlacement = computed<Placement>(() =>
  props.showArrow ? props.placement : `${props.placement}-start`
)

const computedFallbackPlacements = computed<Placement[]>(() =>
  props.showArrow ? ['bottom', 'top'] : ['bottom-start', 'top-start']
)

const filteredOptions = computed(() => {
  const { filterOption, options } = props
  if (!mentionCtx.value || !filterOption) return options
  return options.filter((option) =>
    filterOption(mentionCtx.value!.pattern, option)
  )
})

const dropdownVisible = computed(() => {
  return visible.value && (!!filteredOptions.value.length || props.loading)
})

const hoveringId = computed(() => {
  return `${contentId.value}-${dropdownRef.value?.hoveringIndex}`
})

const handleInputChange = (value: string) => {
  emit(UPDATE_MODEL_EVENT, value)
  emit(INPUT_EVENT, value)
  syncAfterCursorMove()
}

const handleInputKeyDown = (event: KeyboardEvent | Event) => {
  if (!('code' in event) || elInputRef.value?.isComposing) return

  switch (event.code) {
    case EVENT_CODE.left:
    case EVENT_CODE.right:
      syncAfterCursorMove()
      break
    case EVENT_CODE.up:
    case EVENT_CODE.down:
      if (!visible.value) return
      event.preventDefault()
      dropdownRef.value?.navigateOptions(
        event.code === EVENT_CODE.up ? 'prev' : 'next'
      )
      break
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
      if (!visible.value) return
      event.preventDefault()
      if (dropdownRef.value?.hoverOption) {
        dropdownRef.value?.selectHoverOption()
      } else {
        visible.value = false
      }
      break
    case EVENT_CODE.esc:
      if (!visible.value) return
      event.preventDefault()
      visible.value = false
      break
    case EVENT_CODE.backspace: {
      if (!props.whole) break

      const inputEl = getInputEl()
      if (!inputEl) break

      if (props.showPrefix && mentionCtx.value) {
        handleWholePrefixDeletion(event, inputEl, mentionCtx.value)
        break
      }

      if (!props.showPrefix) {
        handleWholePrefixlessDeletion(event, inputEl)
        break
      }

      break
    }
  }
}

const handleWholePrefixDeletion = (
  event: KeyboardEvent,
  inputEl: HTMLInputElement | HTMLTextAreaElement,
  ctx: MentionCtx
) => {
  const { splitIndex, selectionEnd, pattern, prefixIndex, prefix } = ctx
  const isWhole = checkIsWhole(pattern, prefix)
  if (!isWhole || splitIndex + 1 !== selectionEnd) return

  event.preventDefault()
  const newValue = removeRange(inputEl.value, prefixIndex, splitIndex + 1)
  syncAfterWholeDeletion(newValue, inputEl, prefixIndex)
}

const handleWholePrefixlessDeletion = (
  event: KeyboardEvent,
  inputEl: HTMLInputElement | HTMLTextAreaElement
) => {
  const { selectionEnd } = inputEl
  if (!selectionEnd || inputEl.value[selectionEnd - 1] !== props.split) return

  const idxs = [
    inputEl.value.lastIndexOf(' ', selectionEnd - 2),
    inputEl.value.lastIndexOf('\n', selectionEnd - 2),
    inputEl.value.lastIndexOf(props.split, selectionEnd - 2),
  ]
  const splitIndex = Math.max(...idxs)

  const pattern = inputEl.value.slice(splitIndex + 1, selectionEnd - 1)
  if (!pattern || !checkIsWhole(pattern, '')) return

  event.preventDefault()
  const newValue = removeRange(inputEl.value, splitIndex + 1, selectionEnd)
  syncAfterWholeDeletion(newValue, inputEl, splitIndex + 1)
}

const checkIsWhole = (pattern: string, prefix: string) => {
  const matchOption = props.options.find((o) => o.value === pattern)
  return isFunction(props.checkIsWhole)
    ? props.checkIsWhole(pattern, prefix)
    : !!matchOption
}

const removeRange = (str: string, start: number, end: number) => {
  return str.slice(0, start) + str.slice(end)
}

const syncAfterWholeDeletion = (
  newVal: string,
  inputEl: HTMLInputElement | HTMLTextAreaElement,
  pos: number
) => {
  emit(UPDATE_MODEL_EVENT, newVal)
  emit(INPUT_EVENT, newVal)

  nextTick(() => {
    inputEl.selectionStart = pos
    inputEl.selectionEnd = pos
    syncDropdownVisible()
  })
}

const { wrapperRef } = useFocusController(elInputRef, {
  disabled,
  afterFocus() {
    syncAfterCursorMove()
  },
  beforeBlur(event) {
    return tooltipRef.value?.isFocusInsideContent(event)
  },
  afterBlur() {
    visible.value = false
  },
})

const handleInputMouseDown = () => {
  syncAfterCursorMove()
}

const handleSelect = (item: MentionOption) => {
  if (!mentionCtx.value) return
  const inputEl = getInputEl()
  if (!inputEl) return
  const inputValue = inputEl.value
  const { split } = props

  const newStartPart = props.showPrefix
    ? inputValue.slice(0, mentionCtx.value.start)
    : inputValue.slice(0, mentionCtx.value.start - 1)
  const newEndPart = inputValue.slice(mentionCtx.value.end)
  const alreadySeparated = newEndPart.startsWith(split)
  const newMiddlePart = `${item.value}${alreadySeparated ? '' : split}`

  const newValue = newStartPart + newMiddlePart + newEndPart

  emit(UPDATE_MODEL_EVENT, newValue)
  emit(INPUT_EVENT, newValue)
  emit('select', item, mentionCtx.value.prefix)

  const newSelectionEnd =
    mentionCtx.value.start + newMiddlePart.length + (alreadySeparated ? 1 : 0)

  nextTick(() => {
    // input value is updated
    inputEl.selectionStart = newSelectionEnd
    inputEl.selectionEnd = newSelectionEnd
    inputEl.focus()
    syncDropdownVisible()
  })
}

const getInputEl = () =>
  props.type === 'textarea'
    ? elInputRef.value?.textarea
    : elInputRef.value?.input

const syncAfterCursorMove = () => {
  // can't use nextTick(), get cursor position will be wrong
  setTimeout(() => {
    syncCursor()
    syncDropdownVisible()
    nextTick(() => tooltipRef.value?.updatePopper())
  }, 0)
}

const syncCursor = () => {
  const inputEl = getInputEl()
  if (!inputEl) return

  const caretPosition = getCursorPosition(inputEl)
  const inputRect = inputEl.getBoundingClientRect()
  const elInputRect = elInputRef.value!.$el.getBoundingClientRect()

  cursorStyle.value = {
    position: 'absolute',
    width: 0,
    height: `${caretPosition.height}px`,
    left: `${caretPosition.left + inputRect.left - elInputRect.left}px`,
    top: `${caretPosition.top + inputRect.top - elInputRect.top}px`,
  }
}

const syncDropdownVisible = () => {
  const inputEl = getInputEl()
  if (document.activeElement !== inputEl) {
    visible.value = false
    return
  }
  const { prefix, split } = props
  mentionCtx.value = getMentionCtx(inputEl, prefix, split)
  if (mentionCtx.value && mentionCtx.value.splitIndex === -1) {
    visible.value = true
    emit('search', mentionCtx.value.pattern, mentionCtx.value.prefix)
    return
  }
  visible.value = false
}

defineExpose({
  input: elInputRef,
  tooltip: tooltipRef,
  dropdownVisible,
})
</script>
