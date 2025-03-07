<template>
  <el-tooltip
    ref="popperRef"
    :visible="suggestionVisible"
    :placement="placement"
    :fallback-placements="['bottom-start', 'top-start']"
    :popper-class="[ns.e('popper'), popperClass]"
    :teleported="teleported"
    :gpu-acceleration="false"
    pure
    manual-mode
    effect="light"
    trigger="click"
    :transition="`${ns.namespace.value}-zoom-in-top`"
    persistent
    role="listbox"
    @before-show="onSuggestionShow"
    @hide="onHide"
  >
    <div
      ref="listboxRef"
      :class="[ns.b(), $attrs.class]"
      :style="styles"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="suggestionVisible"
      :aria-owns="listboxId"
    >
      <el-input
        ref="inputRef"
        v-bind="attrs"
        :clearable="clearable"
        :disabled="disabled"
        :name="name"
        :model-value="modelValue"
        :aria-label="ariaLabel"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @clear="handleClear"
        @keydown.up.prevent="highlight(highlightedIndex - 1)"
        @keydown.down.prevent="highlight(highlightedIndex + 1)"
        @keydown.enter="handleKeyEnter"
        @keydown.tab="close"
        @keydown.esc="handleKeyEscape"
        @mousedown="handleMouseDown"
      >
        <template v-if="$slots.prepend" #prepend>
          <slot name="prepend" />
        </template>
        <template v-if="$slots.append" #append>
          <slot name="append" />
        </template>
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template v-if="$slots.suffix" #suffix>
          <slot name="suffix" />
        </template>
      </el-input>
    </div>
    <template #content>
      <div
        ref="regionRef"
        :class="[ns.b('suggestion'), ns.is('loading', suggestionLoading)]"
        :style="{
          [fitInputWidth ? 'width' : 'minWidth']: dropdownWidth,
          outline: 'none',
        }"
        role="region"
      >
        <el-scrollbar
          :id="listboxId"
          tag="ul"
          :wrap-class="ns.be('suggestion', 'wrap')"
          :view-class="ns.be('suggestion', 'list')"
          role="listbox"
        >
          <li v-if="suggestionLoading">
            <slot name="loading">
              <el-icon :class="ns.is('loading')">
                <Loading />
              </el-icon>
            </slot>
          </li>
          <template v-else>
            <li
              v-for="(item, index) in suggestions"
              :id="`${listboxId}-item-${index}`"
              :key="index"
              :class="{ highlighted: highlightedIndex === index }"
              role="option"
              :aria-selected="highlightedIndex === index"
              @click="handleSelect(item)"
            >
              <slot :item="item">{{ item[valueKey] }}</slot>
            </li>
          </template>
        </el-scrollbar>
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs as useRawAttrs,
} from 'vue'
import { debounce } from 'lodash-unified'
import { onClickOutside } from '@vueuse/core'
import { Loading } from '@element-plus/icons-vue'
import { useAttrs, useId, useNamespace } from '@element-plus/hooks'
import { isArray, throwError } from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import ElInput from '@element-plus/components/input'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTooltip from '@element-plus/components/tooltip'
import ElIcon from '@element-plus/components/icon'
import { useFormDisabled } from '@element-plus/components/form'
import { autocompleteEmits, autocompleteProps } from './autocomplete'
import type { AutocompleteData } from './autocomplete'

import type { Ref, StyleValue } from 'vue'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { InputInstance } from '@element-plus/components/input'

const COMPONENT_NAME = 'ElAutocomplete'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = defineProps(autocompleteProps)
const emit = defineEmits(autocompleteEmits)

const attrs = useAttrs()
const rawAttrs = useRawAttrs()
const disabled = useFormDisabled()
const ns = useNamespace('autocomplete')

const inputRef = ref<InputInstance>()
const regionRef = ref<HTMLElement>()
const popperRef = ref<TooltipInstance>()
const listboxRef = ref<HTMLElement>()

let readonly = false
let ignoreFocusEvent = false
const suggestions = ref<AutocompleteData>([])
const highlightedIndex = ref(-1)
const dropdownWidth = ref('')
const activated = ref(false)
const suggestionDisabled = ref(false)
const loading = ref(false)

const listboxId = useId()
const styles = computed(() => rawAttrs.style as StyleValue)

const suggestionVisible = computed(() => {
  const isValidData = suggestions.value.length > 0
  return (isValidData || loading.value) && activated.value
})

const suggestionLoading = computed(() => !props.hideLoading && loading.value)

const refInput = computed<HTMLInputElement[]>(() => {
  if (inputRef.value) {
    return Array.from<HTMLInputElement>(
      inputRef.value.$el.querySelectorAll('input')
    )
  }
  return []
})

const onSuggestionShow = () => {
  if (suggestionVisible.value) {
    dropdownWidth.value = `${inputRef.value!.$el.offsetWidth}px`
  }
}

const onHide = () => {
  highlightedIndex.value = -1
}

const getData = async (queryString: string) => {
  if (suggestionDisabled.value) return

  const cb = (suggestionList: AutocompleteData) => {
    loading.value = false
    if (suggestionDisabled.value) return

    if (isArray(suggestionList)) {
      suggestions.value = suggestionList
      highlightedIndex.value = props.highlightFirstItem ? 0 : -1
    } else {
      throwError(COMPONENT_NAME, 'autocomplete suggestions must be an array')
    }
  }

  loading.value = true
  if (isArray(props.fetchSuggestions)) {
    cb(props.fetchSuggestions)
  } else {
    const result = await props.fetchSuggestions(queryString, cb)
    if (isArray(result)) cb(result)
  }
}
const debouncedGetData = debounce(getData, props.debounce)

const handleInput = (value: string) => {
  const valuePresented = !!value

  emit(INPUT_EVENT, value)
  emit(UPDATE_MODEL_EVENT, value)

  suggestionDisabled.value = false
  activated.value ||= valuePresented

  if (!props.triggerOnFocus && !value) {
    suggestionDisabled.value = true
    suggestions.value = []
    return
  }

  debouncedGetData(value)
}

const handleMouseDown = (event: MouseEvent) => {
  if (disabled.value) return
  if (
    (event.target as HTMLElement)?.tagName !== 'INPUT' ||
    refInput.value.includes(document.activeElement as HTMLInputElement)
  ) {
    activated.value = true
  }
}

const handleChange = (value: string) => {
  emit(CHANGE_EVENT, value)
}

const handleFocus = (evt: FocusEvent) => {
  if (!ignoreFocusEvent) {
    activated.value = true
    emit('focus', evt)

    if (props.triggerOnFocus && !readonly) {
      debouncedGetData(String(props.modelValue))
    }
  } else {
    ignoreFocusEvent = false
  }
}

const handleBlur = (evt: FocusEvent) => {
  setTimeout(() => {
    // validate current focus event is inside el-tooltip-content
    // if so, ignore the blur event and the next focus event
    if (popperRef.value?.isFocusInsideContent()) {
      ignoreFocusEvent = true
      return
    }
    activated.value && close()
    emit('blur', evt)
  })
}

const handleClear = () => {
  activated.value = false
  emit(UPDATE_MODEL_EVENT, '')
  emit('clear')
}

const handleKeyEnter = async () => {
  if (
    suggestionVisible.value &&
    highlightedIndex.value >= 0 &&
    highlightedIndex.value < suggestions.value.length
  ) {
    handleSelect(suggestions.value[highlightedIndex.value])
  } else if (props.selectWhenUnmatched) {
    emit('select', { value: props.modelValue })
    suggestions.value = []
    highlightedIndex.value = -1
  }
}

const handleKeyEscape = (evt: Event) => {
  if (suggestionVisible.value) {
    evt.preventDefault()
    evt.stopPropagation()
    close()
  }
}

const close = () => {
  activated.value = false
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

const handleSelect = async (item: any) => {
  emit(INPUT_EVENT, item[props.valueKey])
  emit(UPDATE_MODEL_EVENT, item[props.valueKey])
  emit('select', item)
  suggestions.value = []
  highlightedIndex.value = -1
}

const highlight = (index: number) => {
  if (!suggestionVisible.value || loading.value) return

  if (index < 0) {
    highlightedIndex.value = -1
    return
  }

  if (index >= suggestions.value.length) {
    index = suggestions.value.length - 1
  }
  const suggestion = regionRef.value!.querySelector(
    `.${ns.be('suggestion', 'wrap')}`
  )!
  const suggestionList = suggestion.querySelectorAll<HTMLElement>(
    `.${ns.be('suggestion', 'list')} li`
  )!
  const highlightItem = suggestionList[index]
  const scrollTop = suggestion.scrollTop
  const { offsetTop, scrollHeight } = highlightItem

  if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
    suggestion.scrollTop += scrollHeight
  }
  if (offsetTop < scrollTop) {
    suggestion.scrollTop -= scrollHeight
  }
  highlightedIndex.value = index
  // TODO: use Volar generate dts to fix it.
  ;(inputRef.value as any).ref!.setAttribute(
    'aria-activedescendant',
    `${listboxId.value}-item-${highlightedIndex.value}`
  )
}

const stopHandle = onClickOutside(listboxRef, () => {
  // Prevent closing if focus is inside popper content
  if (popperRef.value?.isFocusInsideContent()) return
  suggestionVisible.value && close()
})

onBeforeUnmount(() => {
  stopHandle?.()
})

onMounted(() => {
  // TODO: use Volar generate dts to fix it.
  ;(inputRef.value as any).ref!.setAttribute('role', 'textbox')
  ;(inputRef.value as any).ref!.setAttribute('aria-autocomplete', 'list')
  ;(inputRef.value as any).ref!.setAttribute('aria-controls', 'id')
  ;(inputRef.value as any).ref!.setAttribute(
    'aria-activedescendant',
    `${listboxId.value}-item-${highlightedIndex.value}`
  )
  // get readonly attr
  readonly = (inputRef.value as any).ref!.hasAttribute('readonly')
})

defineExpose<{
  highlightedIndex: Ref<number>
  activated: Ref<boolean>
  loading: Ref<boolean>
  inputRef: Ref<InputInstance | undefined>
  popperRef: Ref<TooltipInstance | undefined>
  suggestions: Ref<AutocompleteData>
  handleSelect: (item: any) => void
  handleKeyEnter: () => void
  focus: () => void
  blur: () => void
  close: () => void
  highlight: (index: number) => void
  getData: (queryString: string) => void
}>({
  /** @description the index of the currently highlighted item */
  highlightedIndex,
  /** @description autocomplete whether activated */
  activated,
  /** @description remote search loading status */
  loading,
  /** @description el-input component instance */
  inputRef,
  /** @description el-tooltip component instance */
  popperRef,
  /** @description fetch suggestions result */
  suggestions,
  /** @description triggers when a suggestion is clicked */
  handleSelect,
  /** @description handle keyboard enter event */
  handleKeyEnter,
  /** @description focus the input element */
  focus,
  /** @description blur the input element */
  blur,
  /** @description close suggestion */
  close,
  /** @description highlight an item in a suggestion */
  highlight,
  /** @description loading suggestion list */
  getData,
})
</script>
