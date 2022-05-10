<template>
  <el-tooltip
    ref="popperRef"
    v-model:visible="suggestionVisible"
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
    @before-show="onSuggestionShow"
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
        :model-value="modelValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @clear="handleClear"
        @keydown.up.prevent="highlight(highlightedIndex - 1)"
        @keydown.down.prevent="highlight(highlightedIndex + 1)"
        @keydown.enter="handleKeyEnter"
        @keydown.tab="close"
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
        :style="{ minWidth: dropdownWidth, outline: 'none' }"
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
            <el-icon :class="ns.is('loading')"><Loading /></el-icon>
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
  nextTick,
  onMounted,
  ref,
  useAttrs as useCompAttrs,
} from 'vue'
import { debounce } from 'lodash-unified'
import { onClickOutside } from '@vueuse/core'
import { useAttrs, useNamespace } from '@element-plus/hooks'
import { generateId, isArray, throwError } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElInput from '@element-plus/components/input'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTooltip from '@element-plus/components/tooltip'
import ElIcon from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'
import { autocompleteEmits, autocompleteProps } from './autocomplete'
import type { StyleValue } from 'vue'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { InputInstance } from '@element-plus/components/input'

defineOptions({
  name: 'ElAutocomplete',
  inheritAttrs: false,
})

const COMPONENT_NAME = 'ElAutocomplete'

const props = defineProps(autocompleteProps)
const emit = defineEmits(autocompleteEmits)

const ns = useNamespace('autocomplete')
let isClear = false
const attrs = useAttrs()
const compAttrs = useCompAttrs()
const suggestions = ref<any[]>([])
const highlightedIndex = ref(-1)
const dropdownWidth = ref('')
const activated = ref(false)
const suggestionDisabled = ref(false)
const loading = ref(false)
const inputRef = ref<InputInstance>()
const regionRef = ref<HTMLElement>()
const popperRef = ref<TooltipInstance>()
const listboxRef = ref<HTMLElement>()

const listboxId = computed(() => {
  return ns.b(String(generateId()))
})
const styles = computed(() => compAttrs.style as StyleValue)
const suggestionVisible = computed(() => {
  const isValidData = isArray(suggestions.value) && suggestions.value.length > 0
  return (isValidData || loading.value) && activated.value
})
const suggestionLoading = computed(() => {
  return !props.hideLoading && loading.value
})

const onSuggestionShow = () => {
  nextTick(() => {
    if (suggestionVisible.value) {
      dropdownWidth.value = `${inputRef.value!.$el.offsetWidth}px`
    }
  })
}

const getData = async (queryString: string) => {
  if (suggestionDisabled.value) {
    return
  }
  loading.value = true
  const cb = (suggestionsArg: any[]) => {
    loading.value = false
    if (suggestionDisabled.value) {
      return
    }
    if (isArray(suggestionsArg)) {
      suggestions.value = suggestionsArg
      highlightedIndex.value = props.highlightFirstItem ? 0 : -1
    } else {
      throwError(COMPONENT_NAME, 'autocomplete suggestions must be an array')
    }
  }
  if (isArray(props.fetchSuggestions)) {
    cb(props.fetchSuggestions)
  } else {
    const result = await props.fetchSuggestions(queryString, cb)
    if (isArray(result)) {
      cb(result)
    }
  }
}
const debouncedGetData = debounce(getData, props.debounce)
const handleInput = (value: string) => {
  const valuePresented = Boolean(value)

  emit('input', value)
  emit(UPDATE_MODEL_EVENT, value)
  suggestionDisabled.value = false
  activated.value ||= isClear && valuePresented

  if (!props.triggerOnFocus && !value) {
    suggestionDisabled.value = true
    suggestions.value = []
    return
  }
  if (isClear && valuePresented) {
    isClear = false
  }
  debouncedGetData(value)
}
const handleChange = (value: string) => {
  emit('change', value)
}
const handleFocus = (evt: FocusEvent) => {
  activated.value = true
  emit('focus', evt)
  if (props.triggerOnFocus) {
    debouncedGetData(String(props.modelValue))
  }
}
const handleBlur = (evt: FocusEvent) => {
  emit('blur', evt)
}
const handleClear = () => {
  activated.value = false
  isClear = true
  emit(UPDATE_MODEL_EVENT, '')
  emit('clear')
}
const handleKeyEnter = () => {
  if (
    suggestionVisible.value &&
    highlightedIndex.value >= 0 &&
    highlightedIndex.value < suggestions.value.length
  ) {
    handleSelect(suggestions.value[highlightedIndex.value])
  } else if (props.selectWhenUnmatched) {
    emit('select', { value: props.modelValue })
    nextTick(() => {
      suggestions.value = []
      highlightedIndex.value = -1
    })
  }
}
const close = () => {
  activated.value = false
}

const focus = () => {
  inputRef.value?.focus()
}

const handleSelect = (item: any) => {
  emit('input', item[props.valueKey])
  emit(UPDATE_MODEL_EVENT, item[props.valueKey])
  emit('select', item)
  nextTick(() => {
    suggestions.value = []
    highlightedIndex.value = -1
  })
}
const highlight = (index: number) => {
  if (!suggestionVisible.value || loading.value) {
    return
  }
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

onClickOutside(listboxRef, close)

onMounted(() => {
  // TODO: use Volar generate dts to fix it.
  ;(inputRef.value as any).ref!.setAttribute('role', 'textbox')
  ;(inputRef.value as any).ref!.setAttribute('aria-autocomplete', 'list')
  ;(inputRef.value as any).ref!.setAttribute('aria-controls', 'id')
  ;(inputRef.value as any).ref!.setAttribute(
    'aria-activedescendant',
    `${listboxId.value}-item-${highlightedIndex.value}`
  )
})

defineExpose({
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
  /** @description close suggestion */
  close,
  /** @description highlight an item in a suggestion */
  highlight,
})
</script>
