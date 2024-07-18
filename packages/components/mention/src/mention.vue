<template>
  <div :class="ns.b()">
    <el-input
      v-bind="mergeProps(passInputProps, $attrs)"
      ref="elInputRef"
      :model-value="modelValue"
      @input="handleInputChange"
      @keydown="handleInputKeyDown"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      @mousedown="handleInputMouseDown"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </el-input>
    <el-tooltip
      ref="tooltipRef"
      :visible="visible && (!!filteredOptions.length || loading)"
      :popper-class="[ns.e('popper'), popperClass]"
      :popper-options="popperOptions"
      :placement="`${placement}-start`"
      :fallback-placements="['bottom-start', 'top-start']"
      effect="light"
      pure
      :offset="0"
      :show-arrow="false"
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
          @select="handleSelect"
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
import { useNamespace } from '@element-plus/hooks'
import ElInput, { inputProps } from '@element-plus/components/input'
import ElTooltip from '@element-plus/components/tooltip'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { mentionEmits, mentionProps } from './mention'
import { getCursorPosition, getMentionCtx } from './helper'
import ElMentionDropdown from './mention-dropdown.vue'

import type { CSSProperties } from 'vue'
import type { InputInstance } from '@element-plus/components/input'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { MentionCtx, MentionOption } from './types'

defineOptions({
  name: 'ElMention',
})

const props = defineProps(mentionProps)
const emit = defineEmits(mentionEmits)

const passInputProps = computed(() => pick(props, Object.keys(inputProps)))

const ns = useNamespace('mention')

const elInputRef = ref<InputInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const dropdownRef = ref<InstanceType<typeof ElMentionDropdown> | null>(null)

const visible = ref(false)
const cursorStyle = ref<CSSProperties>()
const mentionCtx = ref<MentionCtx>()

const filteredOptions = computed(() => {
  const { filterOption, options } = props
  if (!mentionCtx.value) return options
  const list = options.filter((option) => {
    // Return all result if `filterOption` is false.
    if (!!filterOption === false) {
      return true
    }
    return filterOption(mentionCtx.value!.pattern, option)
  })
  return list
})

const handleInputChange = (value: string) => {
  emit('update:modelValue', value)
  syncAfterCursorMove()
}

const handleInputKeyDown = (e: KeyboardEvent | Event) => {
  if (!('key' in e)) return
  if (elInputRef.value?.isComposing) return
  if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
    syncAfterCursorMove()
  } else if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
    if (!visible.value) return
    e.preventDefault()
    const direction = e.key === 'ArrowUp' ? 'prev' : 'next'
    dropdownRef.value?.navigateOptions(direction)
  } else if (['Enter'].includes(e.key)) {
    if (!visible.value) return
    e.preventDefault()
    if (dropdownRef.value?.hoverOption) {
      dropdownRef.value?.selectHoverOption()
    } else {
      visible.value = false
    }
  } else if (['Backspace'].includes(e.key)) {
    if (props.whole && mentionCtx.value) {
      const { splitIndex, selectionEnd, pattern, prefixIndex } =
        mentionCtx.value
      const inputEl = getInputEl()
      if (!inputEl) return
      const inputValue = inputEl.value
      const matchOption = props.options.find((item) => item.value === pattern)
      if (matchOption && splitIndex !== -1 && splitIndex + 1 === selectionEnd) {
        e.preventDefault()
        const newValue =
          inputValue.slice(0, prefixIndex) + inputValue.slice(splitIndex + 1)
        emit(UPDATE_MODEL_EVENT, newValue)

        const newSelectionEnd = prefixIndex
        nextTick(() => {
          // input value is updated
          inputEl.selectionStart = newSelectionEnd
          inputEl.selectionEnd = newSelectionEnd
          syncDropdownVisible()
        })
      }
    }
  }
}

let blurTimer: ReturnType<typeof setTimeout>

const handleInputFocus = (e: FocusEvent) => {
  clearTimeout(blurTimer)
  emit('focus', e)
  syncAfterCursorMove()
}

const handleInputBlur = (e: FocusEvent) => {
  emit('blur', e)
  // the blur event fires faster than the click event, so a delay is needed here
  blurTimer = setTimeout(() => {
    visible.value = false
  }, 200)
}

const handleInputMouseDown = () => {
  syncAfterCursorMove()
}

const handleSelect = (item: MentionOption) => {
  if (!mentionCtx.value) return
  const inputEl = getInputEl()
  if (!inputEl) return
  const inputValue = inputEl.value
  const { split } = props

  const newEndPart = inputValue.slice(mentionCtx.value.end)
  const alreadySeparated = newEndPart.startsWith(split)
  const newMiddlePart = `${item.value}${alreadySeparated ? '' : split}`

  const newValue =
    inputValue.slice(0, mentionCtx.value.start) + newMiddlePart + newEndPart

  emit(UPDATE_MODEL_EVENT, newValue)
  emit('select', item, mentionCtx.value.prefix)

  const newSelectionEnd =
    mentionCtx.value.start + newMiddlePart.length + (alreadySeparated ? 1 : 0)

  nextTick(() => {
    // input value is updated
    inputEl.selectionStart = newSelectionEnd
    inputEl.selectionEnd = newSelectionEnd
    syncDropdownVisible()
  })
}

const getInputEl = () => elInputRef.value?.ref

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
  cursorStyle.value = {
    position: 'absolute',
    width: 0,
    height: 0,
    left: `${caretPosition.left + inputEl.offsetLeft}px`,
    top: `${caretPosition.top + caretPosition.height}px`,
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
})
</script>
