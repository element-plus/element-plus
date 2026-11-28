<template>
  <el-tooltip
    ref="popperRef"
    :visible="suggestionVisible"
    :placement="placement"
    :fallback-placements="['bottom-start', 'top-start']"
    :popper-class="[ns.e('popper'), popperClass!]"
    :popper-style="popperStyle"
    :popper-options="popperOptions"
    :show-arrow="showArrow"
    :teleported="teleported"
    :append-to="appendTo"
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
        v-bind="mergeProps(passInputProps, $attrs)"
        :model-value="modelValue"
        :disabled="disabled"
        container-role="textbox"
        aria-autocomplete="list"
        :aria-controls="listboxId"
        :aria-activedescendant="
          highlightedIndex === -1
            ? undefined
            : `${listboxId}-item-${highlightedIndex}`
        "
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @clear="handleClear"
        @keydown="handleKeydown"
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
        :class="[ns.b('suggestion'), ns.is('loading', suggestionLoading)]"
        :style="{
          [fitInputWidth === false ? 'minWidth' : 'width']: isNumber(
            fitInputWidth
          )
            ? `${fitInputWidth}px`
            : dropdownWidth,
          outline: 'none',
        }"
        role="region"
      >
        <div
          v-if="$slots.header"
          :class="ns.be('suggestion', 'header')"
          @click.stop
        >
          <slot name="header" />
        </div>
        <div
          v-if="suggestionLoading"
          :id="listboxId"
          :class="ns.be('suggestion', 'loading')"
          role="listbox"
        >
          <slot name="loading">
            <el-icon :class="ns.is('loading')">
              <Loading />
            </el-icon>
          </slot>
        </div>
        <div
          v-else-if="virtualScroll"
          :class="ns.be('suggestion', 'virtual-wrap')"
        >
          <el-fixed-size-list
            ref="virtualListRef"
            :data="suggestions"
            :total="suggestions.length"
            :height="virtualListHeight"
            :item-size="itemSize"
            :inner-width="virtualListWidth"
            :class-name="ns.be('suggestion', 'virtual-list')"
            inner-element="ul"
            :inner-props="{
              id: listboxId,
              role: 'listbox',
              class: ns.be('suggestion', 'list'),
            }"
          >
            <template #default="{ data, index, style }">
              <li
                :id="`${listboxId}-item-${index}`"
                :style="style"
                :class="{ highlighted: highlightedIndex === index }"
                role="option"
                :aria-selected="highlightedIndex === index"
                :aria-posinset="index + 1"
                :aria-setsize="suggestions.length"
                @[mouseMoveEventName]="handleSuggestionMouseMove(index)"
                @click="handleSelect(data[index])"
              >
                <div :class="ns.be('suggestion', 'item-content')">
                  <slot :item="data[index]">{{ data[index][valueKey] }}</slot>
                </div>
              </li>
            </template>
          </el-fixed-size-list>
        </div>
        <el-scrollbar
          v-else
          :id="listboxId"
          ref="scrollbarRef"
          tag="ul"
          :wrap-class="ns.be('suggestion', 'wrap')"
          :view-class="ns.be('suggestion', 'list')"
          role="listbox"
        >
          <li
            v-for="(item, index) in suggestions"
            :id="`${listboxId}-item-${index}`"
            :ref="(el) => (suggestionRefs[index] = el as HTMLLIElement | null)"
            :key="index"
            :class="{ highlighted: highlightedIndex === index }"
            role="option"
            :aria-selected="highlightedIndex === index"
            @[mouseMoveEventName]="handleSuggestionMouseMove(index)"
            @click="handleSelect(item)"
          >
            <div :class="ns.be('suggestion', 'item-content')">
              <slot :item="item">{{ item[valueKey] }}</slot>
            </div>
          </li>
        </el-scrollbar>
        <div
          v-if="$slots.footer"
          :class="ns.be('suggestion', 'footer')"
          @click.stop
        >
          <slot name="footer" />
        </div>
      </div>
    </template>
  </el-tooltip>
</template>

<script
  lang="ts"
  setup
  generic="T extends AutocompleteDataItem = AutocompleteDataItem"
>
import {
  computed,
  mergeProps,
  nextTick,
  onBeforeUnmount,
  ref,
  useAttrs as useRawAttrs,
  watch,
} from 'vue'
import { pick } from 'lodash-unified'
import { onClickOutside, useDebounceFn } from '@vueuse/core'
import { Loading } from '@element-plus/icons-vue'
import { useId, useNamespace } from '@element-plus/hooks'
import {
  NOOP,
  getEventCode,
  isArray,
  isIOS,
  isNumber,
  throwError,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import ElInput, { inputPropsDefaults } from '@element-plus/components/input'
import ElScrollbar from '@element-plus/components/scrollbar'
import { FixedSizeList as ElFixedSizeList } from '@element-plus/components/virtual-list'
import ElTooltip from '@element-plus/components/tooltip'
import ElIcon from '@element-plus/components/icon'
import { useFormDisabled } from '@element-plus/components/form'
import { autocompleteEmits } from './autocomplete'

import type {
  AutocompleteData,
  AutocompleteDataItem,
  AutocompleteProps,
} from './autocomplete'
import type { Ref, StyleValue } from 'vue'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { InputInstance } from '@element-plus/components/input'
import type { FixedSizeListInstance } from '@element-plus/components/virtual-list'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'

const COMPONENT_NAME = 'ElAutocomplete'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AutocompleteProps<T>>(), {
  ...inputPropsDefaults,
  valueKey: 'value',
  modelValue: '',
  debounce: 300,
  placement: 'bottom-start',
  fetchSuggestions: NOOP,
  triggerOnFocus: true,
  loopNavigation: true,
  fitInputWidth: false,
  virtualScroll: false,
  itemSize: 34,
  height: 280,
  teleported: true,
  showArrow: true,
  popperClass: undefined,
  popperStyle: undefined,
  popperOptions: () => ({}),
})
const emit = defineEmits(autocompleteEmits)
const passInputProps = computed(() => {
  const inputProps = ElInput.props ?? []
  const keys = isArray(inputProps) ? inputProps : Object.keys(inputProps)
  return pick(props, keys)
})

const rawAttrs = useRawAttrs()
const disabled = useFormDisabled()
const ns = useNamespace('autocomplete')
const mouseMoveEventName = isIOS ? null : 'mousemove'

const inputRef = ref<InputInstance>()
const scrollbarRef = ref<ScrollbarInstance>()
const suggestionRefs = ref<(HTMLLIElement | null)[]>([])
const popperRef = ref<TooltipInstance>()
const listboxRef = ref<HTMLElement>()
const virtualListRef = ref<FixedSizeListInstance>()

let ignoreFocusEvent = false
const suggestions = ref([]) as Ref<AutocompleteData<T>>
const highlightedIndex = ref(-1)
const dropdownWidth = ref('')
const virtualListWidth = ref<string | number>('100%')
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
const virtualListHeight = computed(() =>
  Math.min(
    suggestions.value.length * props.itemSize,
    Math.max(1, props.height - 20)
  )
)

const suggestionLabels = computed(() =>
  props.virtualScroll && props.fitInputWidth === false
    ? suggestions.value.map((item) => String(item[props.valueKey] ?? ''))
    : []
)

const measureTextWidth = (labels: string[]) => {
  const item = virtualListRef.value?.innerRef?.querySelector('li')
  const content = item?.querySelector(`.${ns.be('suggestion', 'item-content')}`)
  if (!item || !content) return 0

  const contentStyle = getComputedStyle(content)
  if (!contentStyle.font) return 0
  const ctx = document.createElement('canvas').getContext('2d')
  if (!ctx) return 0

  ctx.font = contentStyle.font
  let maxWidth = 0
  for (const label of labels) {
    maxWidth = Math.max(maxWidth, ctx.measureText(label).width)
  }

  const itemStyle = getComputedStyle(item)
  const padding =
    Number.parseFloat(itemStyle.paddingLeft) +
    Number.parseFloat(itemStyle.paddingRight)
  return maxWidth + padding
}

const updateVirtualListWidth = () => {
  if (!props.virtualScroll) return
  if (props.fitInputWidth !== false || !suggestions.value.length) {
    virtualListWidth.value = '100%'
    return
  }
  if (
    !suggestionVisible.value ||
    !virtualListRef.value?.windowRef?.getClientRects().length
  )
    return

  virtualListWidth.value = Math.ceil(
    Math.max(
      Number.parseFloat(dropdownWidth.value) || 0,
      measureTextWidth(suggestionLabels.value)
    )
  )
}

let widthUpdatePending = false
const scheduleVirtualListWidthUpdate = () => {
  if (widthUpdatePending) return
  widthUpdatePending = true
  nextTick(() => {
    widthUpdatePending = false
    updateVirtualListWidth()
  })
}

watch(
  [
    () => props.virtualScroll,
    () => props.fitInputWidth,
    suggestionLabels,
    dropdownWidth,
    virtualListRef,
  ],
  scheduleVirtualListWidthUpdate,
  { flush: 'post' }
)

watch(
  [virtualListHeight, virtualListWidth, suggestionLoading, virtualListRef],
  () => {
    if (props.virtualScroll && suggestionVisible.value) {
      popperRef.value?.updatePopper?.()
    }
  },
  { flush: 'post' }
)

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
    scheduleVirtualListWidthUpdate()
  }
}

const onHide = () => {
  highlightedIndex.value = -1
}

const getData = async (queryString: string) => {
  if (suggestionDisabled.value) return

  const cb = (suggestionList: AutocompleteData<T>) => {
    loading.value = false
    if (suggestionDisabled.value) return

    if (isArray(suggestionList)) {
      suggestions.value = suggestionList
      highlightedIndex.value = props.highlightFirstItem ? 0 : -1
      if (props.virtualScroll) {
        virtualListRef.value?.scrollTo(0)
      }
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

const debouncedGetData = useDebounceFn(getData, () => props.debounce)

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

const handleChange = (value: string | number) => {
  emit(CHANGE_EVENT, value)
}

const handleFocus = (evt: FocusEvent) => {
  if (!ignoreFocusEvent) {
    activated.value = true
    emit('focus', evt)
    const queryString = props.modelValue ?? ''
    if (props.triggerOnFocus && !props.readonly) {
      suggestions.value = []
      highlightedIndex.value = -1
      debouncedGetData(String(queryString))
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
  if (inputRef.value?.isComposing) {
    return
  }

  if (
    suggestionVisible.value &&
    highlightedIndex.value >= 0 &&
    highlightedIndex.value < suggestions.value.length
  ) {
    handleSelect(suggestions.value[highlightedIndex.value])
  } else {
    if (props.selectWhenUnmatched) {
      emit('select', { value: props.modelValue })
      suggestions.value = []
      highlightedIndex.value = -1
    }
    activated.value = true
    debouncedGetData(String(props.modelValue))
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

const handleSelect = async (item: T) => {
  emit(INPUT_EVENT, item[props.valueKey])
  emit(UPDATE_MODEL_EVENT, item[props.valueKey])
  emit('select', item)
  suggestions.value = []
  highlightedIndex.value = -1
}

const handleSuggestionMouseMove = (index: number) => {
  if (!suggestionVisible.value || loading.value) return
  highlightedIndex.value = index
}

const highlight = (index: number) => {
  if (!suggestionVisible.value || loading.value) return

  if (index < 0) {
    if (!props.loopNavigation) {
      highlightedIndex.value = -1
      return
    }
    index = suggestions.value.length - 1
  }

  if (index >= suggestions.value.length) {
    index = props.loopNavigation ? 0 : suggestions.value.length - 1
  }
  if (props.virtualScroll) {
    highlightedIndex.value = index
    virtualListRef.value?.scrollToItem(index)
    return
  }
  const suggestion = scrollbarRef.value!.wrapRef!
  const highlightItem = suggestionRefs.value[index]!
  const scrollTop = suggestion.scrollTop
  const { offsetTop, scrollHeight } = highlightItem

  if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
    suggestion.scrollTop = offsetTop + scrollHeight - suggestion.clientHeight
  }
  if (offsetTop < scrollTop) {
    suggestion.scrollTop = offsetTop
  }
  highlightedIndex.value = index
}

const stopHandle = onClickOutside(listboxRef, (event: FocusEvent) => {
  // Prevent closing if focus is inside popper content
  if (popperRef.value?.isFocusInsideContent()) return
  const hadIgnoredFocus = ignoreFocusEvent
  ignoreFocusEvent = false
  if (!suggestionVisible.value) return
  if (hadIgnoredFocus) {
    handleBlur(new FocusEvent('blur', event))
  } else {
    close()
  }
})

const handleKeydown = (e: KeyboardEvent | Event) => {
  const code = getEventCode(e as KeyboardEvent)
  switch (code) {
    case EVENT_CODE.up:
      e.preventDefault()
      highlight(highlightedIndex.value - 1)
      break
    case EVENT_CODE.down:
      e.preventDefault()
      highlight(highlightedIndex.value + 1)
      break
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
      e.preventDefault()
      handleKeyEnter()
      break
    case EVENT_CODE.tab:
      close()
      break
    case EVENT_CODE.esc:
      handleKeyEscape(e)
      break
    case EVENT_CODE.home:
      e.preventDefault()
      highlight(0)
      break
    case EVENT_CODE.end:
      e.preventDefault()
      highlight(suggestions.value.length - 1)
      break
    case EVENT_CODE.pageUp:
      e.preventDefault()
      highlight(Math.max(0, highlightedIndex.value - 10))
      break
    case EVENT_CODE.pageDown:
      e.preventDefault()
      highlight(
        Math.min(suggestions.value.length - 1, highlightedIndex.value + 10)
      )
      break
  }
}

onBeforeUnmount(() => {
  stopHandle?.()
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
