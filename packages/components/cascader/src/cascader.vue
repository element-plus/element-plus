<template>
  <el-tooltip
    ref="tooltipRef"
    :visible="popperVisible"
    :teleported="teleported"
    :popper-class="[nsCascader.e('dropdown'), popperClass!]"
    :popper-style="popperStyle"
    :popper-options="popperOptions"
    :fallback-placements="fallbackPlacements"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    :placement="placement"
    :transition="`${nsCascader.namespace.value}-zoom-in-top`"
    :effect="effect"
    pure
    :persistent="persistent"
    @hide="hideSuggestionPanel"
  >
    <template #default>
      <div
        ref="wrapperRef"
        v-clickoutside:[contentRef]="handleClickOutside"
        :class="cascaderKls"
        :style="cascaderStyle"
        @click="() => togglePopperVisible(readonly ? undefined : true)"
        @keydown="handleKeyDown"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <el-input
          ref="inputRef"
          v-model="inputValue"
          :placeholder="currentPlaceholder"
          :readonly="readonly"
          :disabled="isDisabled"
          :validate-event="false"
          :size="realSize"
          :class="inputClass"
          :tabindex="multiple && filterable && !isDisabled ? -1 : undefined"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @input="handleInput"
        >
          <template v-if="$slots.prefix" #prefix>
            <slot name="prefix" />
          </template>
          <template #suffix>
            <el-icon
              v-if="clearBtnVisible"
              key="clear"
              :class="[nsInput.e('icon'), 'icon-circle-close']"
              @click.stop="handleClear"
            >
              <component :is="clearIcon" />
            </el-icon>
            <el-icon
              v-else
              key="arrow-down"
              :class="cascaderIconKls"
              @click.stop="togglePopperVisible()"
            >
              <arrow-down />
            </el-icon>
          </template>
        </el-input>

        <div
          v-if="multiple"
          ref="tagWrapper"
          :class="[
            nsCascader.e('tags'),
            nsCascader.is('validate', Boolean(validateState)),
          ]"
        >
          <slot name="tag" :data="tags" :delete-tag="deleteTag">
            <el-tag
              v-for="tag in showTagList"
              :key="tag.key"
              :type="tagType"
              :size="tagSize"
              :effect="tagEffect"
              :hit="tag.hitState"
              :closable="tag.closable"
              :style="tagStyle"
              disable-transitions
              @close="deleteTag(tag)"
            >
              <span>{{ tag.text }}</span>
            </el-tag>
          </slot>
          <el-tooltip
            v-if="collapseTags && tags.length > maxCollapseTags"
            ref="tagTooltipRef"
            :disabled="popperVisible || !collapseTagsTooltip"
            :fallback-placements="['bottom', 'top', 'right', 'left']"
            placement="bottom"
            :popper-class="popperClass"
            :popper-style="popperStyle"
            :effect="effect"
            :persistent="persistent"
          >
            <template #default>
              <el-tag
                ref="collapseItemRef"
                :closable="false"
                :size="tagSize"
                :type="tagType"
                :effect="tagEffect"
                disable-transitions
              >
                <span :class="nsCascader.e('tags-text')">
                  + {{ tags.length - maxCollapseTags }}
                </span>
              </el-tag>
            </template>
            <template #content>
              <el-scrollbar :max-height="maxCollapseTagsTooltipHeight">
                <div :class="nsCascader.e('collapse-tags')">
                  <div
                    v-for="(tag, idx) in collapseTagList"
                    :key="idx"
                    :class="nsCascader.e('collapse-tag')"
                  >
                    <el-tag
                      :key="tag.key"
                      class="in-tooltip"
                      :type="tagType"
                      :size="tagSize"
                      :effect="tagEffect"
                      :hit="tag.hitState"
                      :closable="tag.closable"
                      disable-transitions
                      @close="deleteTag(tag)"
                    >
                      <span>{{ tag.text }}</span>
                    </el-tag>
                  </div>
                </div>
              </el-scrollbar>
            </template>
          </el-tooltip>
          <input
            v-if="filterable && !isDisabled"
            ref="searchInputRef"
            v-model="searchInputValue"
            type="text"
            :class="nsCascader.e('search-input')"
            :placeholder="presentText ? '' : inputPlaceholder"
            :style="inputStyle"
            @input="(e) => handleInput(searchInputValue, e as InputEvent)"
            @click.stop="togglePopperVisible(true)"
            @keydown.delete="handleDelete"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
          />
          <span
            v-if="filterable"
            ref="calculatorRef"
            aria-hidden="true"
            :class="nsCascader.e('search-input-calculator')"
            v-text="searchInputValue"
          />
        </div>
      </div>
    </template>

    <template #content>
      <div v-if="$slots.header" :class="nsCascader.e('header')" @click.stop>
        <slot name="header" />
      </div>
      <el-cascader-panel
        v-show="!filtering"
        ref="cascaderPanelRef"
        v-model="checkedValue"
        :options="options"
        :props="props.props"
        :border="false"
        :render-label="$slots.default"
        @expand-change="handleExpandChange"
        @close="$nextTick(() => togglePopperVisible(false))"
      >
        <template #empty>
          <slot name="empty" />
        </template>
      </el-cascader-panel>
      <el-scrollbar
        v-if="filterable"
        v-show="filtering"
        ref="suggestionPanel"
        tag="ul"
        :class="nsCascader.e('suggestion-panel')"
        :view-class="nsCascader.e('suggestion-list')"
        @keydown="handleSuggestionKeyDown"
      >
        <template v-if="suggestions.length">
          <li
            v-for="item in suggestions"
            :key="item.uid"
            :class="[
              nsCascader.e('suggestion-item'),
              nsCascader.is('checked', item.checked),
            ]"
            :tabindex="-1"
            @click="handleSuggestionClick(item)"
          >
            <slot name="suggestion-item" :item="item">
              <span>{{ item.text }}</span>
              <el-icon v-if="item.checked">
                <check />
              </el-icon>
            </slot>
          </li>
        </template>
        <slot v-else name="empty">
          <li :class="nsCascader.e('empty-text')">
            {{ t('el.cascader.noMatch') }}
          </li>
        </slot>
      </el-scrollbar>
      <div v-if="$slots.footer" :class="nsCascader.e('footer')" @click.stop>
        <slot name="footer" />
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import {
  computed,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  useAttrs,
  watch,
} from 'vue'
import { cloneDeep } from 'lodash-unified'
import { useCssVar, useDebounceFn, useResizeObserver } from '@vueuse/core'
import {
  debugWarn,
  focusNode,
  getEventCode,
  getSibling,
  isClient,
  isPromise,
} from '@element-plus/utils'
import ElCascaderPanel from '@element-plus/components/cascader-panel'
import ElInput from '@element-plus/components/input'
import ElTooltip from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import {
  useFormDisabled,
  useFormItem,
  useFormSize,
} from '@element-plus/components/form'
import { ClickOutside as vClickoutside } from '@element-plus/directives'
import {
  useCalcInputWidth,
  useComposition,
  useEmptyValues,
  useFocusController,
  useLocale,
  useNamespace,
} from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  MINIMUM_INPUT_WIDTH,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { ArrowDown, Check, CircleClose } from '@element-plus/icons-vue'
import { cascaderEmits } from './cascader'

import type { Options } from '@element-plus/components/popper'
import type { ComponentPublicInstance, ComputedRef, StyleValue } from 'vue'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { InputInstance } from '@element-plus/components/input'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'
import type {
  CascaderNode,
  CascaderPanelInstance,
  CascaderValue,
  Tag,
} from '@element-plus/components/cascader-panel'
import type { CascaderComponentProps } from './cascader'

const popperOptions: Partial<Options> = {
  modifiers: [
    {
      name: 'arrowPosition',
      enabled: true,
      phase: 'main',
      fn: ({ state }) => {
        const { modifiersData, placement } = state
        if (['right', 'left', 'bottom', 'top'].includes(placement)) return
        if (modifiersData.arrow) {
          modifiersData.arrow.x = 35
        }
      },
      requires: ['arrow'],
    },
  ],
}

defineOptions({
  name: 'ElCascader',
})

const props = withDefaults(defineProps<CascaderComponentProps>(), {
  options: () => [],
  props: () => ({}),
  disabled: undefined,
  clearIcon: markRaw(CircleClose),
  filterMethod: (node, keyword) => node.text.includes(keyword),
  separator: ' / ',
  showAllLevels: true,
  maxCollapseTags: 1,
  debounce: 300,
  beforeFilter: () => true,
  placement: 'bottom-start',
  fallbackPlacements: () => [
    'bottom-start',
    'bottom',
    'top-start',
    'top',
    'right',
    'left',
  ],
  teleported: true,
  effect: 'light',
  tagType: 'info',
  tagEffect: 'light',
  validateEvent: true,
  persistent: true,
  showCheckedStrategy: 'child',
  showPrefix: true,
  popperStyle: undefined,
  valueOnClear: undefined,
})
const emit = defineEmits(cascaderEmits)
const attrs = useAttrs()
const slots = defineSlots()

let inputInitialHeight = 0
let pressDeleteCount = 0

const nsCascader = useNamespace('cascader')
const nsInput = useNamespace('input')
const sizeMapPadding = {
  small: 7,
  default: 11,
  large: 15,
}

const { t } = useLocale()
const { formItem } = useFormItem()
const isDisabled = useFormDisabled()
const { valueOnClear } = useEmptyValues(props)
const { isComposing, handleComposition } = useComposition({
  afterComposition(event) {
    const text = (event.target as HTMLInputElement)?.value
    handleInput(text)
  },
})

const tooltipRef = ref<TooltipInstance>()
const tagTooltipRef = ref<TooltipInstance>()
const inputRef = ref<InputInstance>()
const searchInputRef = ref<HTMLInputElement>()
const tagWrapper = ref<HTMLDivElement>()
// Note: Unlike Select component which uses a wrapper div with 'selected-item' class,
// Cascader directly uses ref on el-tag component, so we need ComponentPublicInstance
// to access the DOM element via $el property
const collapseItemRef = ref<ComponentPublicInstance>()
const cascaderPanelRef = ref<CascaderPanelInstance>()
const suggestionPanel = ref<ScrollbarInstance>()
const popperVisible = ref(false)
const inputHover = ref(false)
const filtering = ref(false)
const inputValue = ref('')
const searchInputValue = ref('')
const tags = ref<Tag[]>([])
const suggestions = ref<CascaderNode[]>([])
const tagWrapperWidth = ref(0)
const collapseItemWidth = ref(0)

const { calculatorRef, inputStyle } = useCalcInputWidth()

const showTagList = computed(() => {
  if (!props.props.multiple) {
    return []
  }
  return props.collapseTags
    ? tags.value.slice(0, props.maxCollapseTags)
    : tags.value
})

const collapseTagList = computed(() => {
  if (!props.props.multiple) {
    return []
  }
  return props.collapseTags ? tags.value.slice(props.maxCollapseTags) : []
})

const cascaderStyle = computed(() => {
  return attrs.style as StyleValue
})

const inputPlaceholder = computed(
  () => props.placeholder ?? t('el.cascader.placeholder')
)
const currentPlaceholder = computed(() =>
  searchInputValue.value || tags.value.length > 0 || isComposing.value
    ? ''
    : inputPlaceholder.value
)
const realSize = useFormSize()
const tagSize = computed(() =>
  realSize.value === 'small' ? 'small' : 'default'
)
const multiple = computed(() => !!props.props.multiple)
const readonly = computed(() => !props.filterable || multiple.value)
const searchKeyword = computed(() =>
  multiple.value ? searchInputValue.value : inputValue.value
)
const checkedNodes: ComputedRef<CascaderNode[]> = computed(
  () => cascaderPanelRef.value?.checkedNodes || []
)

const getTargetInput = (): InputInstance | HTMLInputElement | undefined => {
  if (
    props.filterable &&
    multiple.value &&
    !isDisabled.value &&
    searchInputRef.value
  ) {
    return searchInputRef.value
  }
  return inputRef.value
}

// Create a focus target that routes to the correct input based on mode
const focusTargetRef = shallowRef<{ focus: () => void }>({
  focus() {
    getTargetInput()?.focus()
  },
})

const { wrapperRef, isFocused, handleBlur } = useFocusController(
  focusTargetRef,
  {
    disabled: isDisabled,
    beforeBlur(event) {
      return (
        tooltipRef.value?.isFocusInsideContent(event) ||
        tagTooltipRef.value?.isFocusInsideContent(event)
      )
    },
    afterBlur() {
      if (props.validateEvent) {
        formItem?.validate?.('blur').catch((err) => debugWarn(err))
      }
    },
  }
)

const clearBtnVisible = computed(() => {
  if (
    !props.clearable ||
    isDisabled.value ||
    filtering.value ||
    (!inputHover.value && !isFocused.value)
  )
    return false

  return !!checkedNodes.value.length
})
const presentText = computed(() => {
  const { showAllLevels, separator } = props
  const nodes = checkedNodes.value
  return nodes.length
    ? multiple.value
      ? ''
      : nodes[0].calcText(showAllLevels, separator)
    : ''
})

const validateState = computed(() => formItem?.validateState || '')

const checkedValue = computed<CascaderValue>({
  get() {
    return cloneDeep(props.modelValue) as CascaderValue
  },
  set(val) {
    // https://github.com/element-plus/element-plus/issues/17647
    const value = val ?? valueOnClear.value
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  },
})

const cascaderKls = computed(() => {
  return [
    nsCascader.b(),
    nsCascader.m(realSize.value),
    nsCascader.is('disabled', isDisabled.value),
    attrs.class,
  ]
})

const cascaderIconKls = computed(() => {
  return [
    nsInput.e('icon'),
    'icon-arrow-down',
    nsCascader.is('reverse', popperVisible.value),
  ]
})

const inputClass = computed(() => nsCascader.is('focus', isFocused.value))

const contentRef = computed(() => {
  return tooltipRef.value?.popperRef?.contentRef
})

const handleClickOutside = (event: Event) => {
  if (isFocused.value) {
    const _event = new FocusEvent('blur', event)
    handleBlur(_event)
  }
  togglePopperVisible(false)
}

const togglePopperVisible = (visible?: boolean) => {
  if (isDisabled.value) return

  visible = visible ?? !popperVisible.value

  if (visible !== popperVisible.value) {
    popperVisible.value = visible
    inputRef.value?.input?.setAttribute('aria-expanded', `${visible}`)

    if (visible) {
      updatePopperPosition()
      cascaderPanelRef.value &&
        nextTick(cascaderPanelRef.value.scrollToExpandingNode)
    } else if (props.filterable) {
      syncPresentTextValue()
    }

    emit('visibleChange', visible)
  }
}

const updatePopperPosition = () => {
  nextTick(() => {
    tooltipRef.value?.updatePopper()
  })
}
const hideSuggestionPanel = () => {
  filtering.value = false
}

const genTag = (node: CascaderNode): Tag => {
  const { showAllLevels, separator } = props
  return {
    node,
    key: node.uid,
    text: node.calcText(showAllLevels, separator),
    hitState: false,
    closable: !isDisabled.value && !node.isDisabled,
  }
}

const deleteTag = (tag: Tag) => {
  const node = tag.node as CascaderNode
  node.doCheck(false)
  cascaderPanelRef.value?.calculateCheckedValue()
  emit('removeTag', node.valueByOption)
}

const getStrategyCheckedNodes = (): CascaderNode[] => {
  switch (props.showCheckedStrategy) {
    case 'child':
      return checkedNodes.value
    case 'parent': {
      const clickedNodes = getCheckedNodes(false)
      const clickedNodesValue = clickedNodes!.map((o) => o.value)
      const parentNodes = clickedNodes!.filter(
        (o) => !o.parent || !clickedNodesValue.includes(o.parent.value)
      )
      return parentNodes
    }
    default:
      return []
  }
}

const calculatePresentTags = () => {
  if (!multiple.value) return

  const nodes = getStrategyCheckedNodes()

  const allTags: Tag[] = []
  nodes.forEach((node) => allTags.push(genTag(node)))
  tags.value = allTags
}

const calculateSuggestions = () => {
  const { filterMethod, showAllLevels, separator } = props
  const res = cascaderPanelRef.value
    ?.getFlattedNodes(!props.props.checkStrictly)
    ?.filter((node) => {
      if (node.isDisabled) return false
      node.calcText(showAllLevels, separator)
      return filterMethod(node, searchKeyword.value)
    })

  if (multiple.value) {
    tags.value.forEach((tag) => {
      tag.hitState = false
    })
  }

  filtering.value = true
  suggestions.value = res!
  updatePopperPosition()
}

const focusFirstNode = () => {
  let firstNode!: HTMLElement

  if (filtering.value && suggestionPanel.value) {
    firstNode = suggestionPanel.value.$el.querySelector(
      `.${nsCascader.e('suggestion-item')}`
    )
  } else {
    firstNode = cascaderPanelRef.value?.$el.querySelector(
      `.${nsCascader.b('node')}[tabindex="-1"]`
    )
  }

  if (firstNode) {
    firstNode.focus()
    !filtering.value && firstNode.click()
  }
}

const updateStyle = () => {
  const inputInner = inputRef.value?.input
  const tagWrapperEl = tagWrapper.value
  const suggestionPanelEl = suggestionPanel.value?.$el

  if (!isClient || !inputInner) return

  if (suggestionPanelEl) {
    const suggestionList = suggestionPanelEl.querySelector(
      `.${nsCascader.e('suggestion-list')}`
    )
    suggestionList.style.minWidth = `${inputInner.offsetWidth}px`
  }

  if (tagWrapperEl) {
    const { offsetHeight } = tagWrapperEl
    // 2 is el-input__wrapper padding
    const height =
      tags.value.length > 0
        ? `${Math.max(offsetHeight, inputInitialHeight) - 2}px`
        : `${inputInitialHeight}px`
    inputInner.style.height = height
    // if prefix slot exists, update tagWrapperEl left position
    if (slots.prefix) {
      const prefix = inputRef.value?.$el.querySelector(
        `.${nsInput.e('prefix')}`
      ) as HTMLElement
      let left = 0
      if (prefix) {
        left = prefix.offsetWidth
        if (left > 0) {
          left += sizeMapPadding[realSize.value || 'default'] // this is the default padding of el-input__wrapper
        }
      }
      tagWrapperEl.style.left = `${left}px`
    } else {
      tagWrapperEl.style.left = `0`
    }
    // Measure tag wrapper width for tagStyle calculation
    tagWrapperWidth.value = tagWrapperEl.getBoundingClientRect().width
    // Measure collapse item width when maxCollapseTags === 1
    // Note: We use $el to access DOM element because collapseItemRef is on el-tag component,
    // unlike Select component where ref is on a wrapper div element
    if (
      props.collapseTags &&
      props.maxCollapseTags === 1 &&
      collapseItemRef.value?.$el
    ) {
      collapseItemWidth.value =
        collapseItemRef.value.$el.getBoundingClientRect().width
    } else {
      collapseItemWidth.value = 0
    }
    updatePopperPosition()
  }
}

let updateStyleRafId = 0
const scheduleUpdateStyle = () => {
  if (!isClient) return
  if (updateStyleRafId) return
  updateStyleRafId = window.requestAnimationFrame(() => {
    updateStyleRafId = 0
    updateStyle()
  })
}

onBeforeUnmount(() => {
  if (updateStyleRafId) {
    window.cancelAnimationFrame(updateStyleRafId)
  }
})

const getCheckedNodes = (leafOnly: boolean) => {
  return cascaderPanelRef.value?.getCheckedNodes(leafOnly)
}

const handleExpandChange = (value: CascaderValue) => {
  updatePopperPosition()
  emit('expandChange', value)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (isComposing.value) return
  const code = getEventCode(e)

  switch (code) {
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
      togglePopperVisible()
      break
    case EVENT_CODE.down:
      togglePopperVisible(true)
      nextTick(focusFirstNode)
      e.preventDefault()
      break
    case EVENT_CODE.esc:
      if (popperVisible.value === true) {
        e.preventDefault()
        e.stopPropagation()
        togglePopperVisible(false)
      }
      break
    case EVENT_CODE.tab:
      togglePopperVisible(false)
      break
  }
}

const handleClear = () => {
  cascaderPanelRef.value?.clearCheckedNodes()
  if (!popperVisible.value && props.filterable) {
    syncPresentTextValue()
  }
  togglePopperVisible(false)
  emit('clear')
}

const syncPresentTextValue = () => {
  const { value } = presentText
  inputValue.value = value
  searchInputValue.value = value
}

const handleSuggestionClick = (node: CascaderNode) => {
  const { checked } = node

  if (multiple.value) {
    cascaderPanelRef.value?.handleCheckChange(node, !checked, false)
  } else {
    !checked && cascaderPanelRef.value?.handleCheckChange(node, true, false)
    togglePopperVisible(false)
  }
}

const handleSuggestionKeyDown = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement
  const code = getEventCode(e)

  switch (code) {
    case EVENT_CODE.up:
    case EVENT_CODE.down: {
      e.preventDefault()
      const distance = code === EVENT_CODE.up ? -1 : 1
      focusNode(
        getSibling(
          target,
          distance,
          `.${nsCascader.e('suggestion-item')}[tabindex="-1"]`
        ) as HTMLElement
      )
      break
    }
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
      target.click()
      break
  }
}

const handleDelete = () => {
  const lastTag = tags.value[tags.value.length - 1]
  pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1

  if (
    !lastTag ||
    !pressDeleteCount ||
    (props.collapseTags && tags.value.length > 1)
  )
    return

  if (lastTag.hitState) {
    deleteTag(lastTag)
  } else {
    lastTag.hitState = true
  }
}

const debounce = computed(() => props.debounce)
const handleFilter = useDebounceFn(() => {
  const { value } = searchKeyword

  if (!value) return

  const passed = props.beforeFilter(value)

  if (isPromise(passed)) {
    passed.then(calculateSuggestions).catch(() => {
      /* prevent log error */
    })
  } else if (passed !== false) {
    calculateSuggestions()
  } else {
    hideSuggestionPanel()
  }
}, debounce)

const handleInput = (val: string, e?: InputEvent) => {
  !popperVisible.value && togglePopperVisible(true)

  if (e?.isComposing) return

  val ? handleFilter() : hideSuggestionPanel()
}

const getInputInnerHeight = (inputInner: HTMLElement): number =>
  Number.parseFloat(
    useCssVar(nsInput.cssVarName('input-height'), inputInner).value
  ) - 2

const getGapWidth = () => {
  if (!tagWrapper.value) return 0
  const style = window.getComputedStyle(tagWrapper.value)
  return Number.parseFloat(style.gap || '6px')
}

const getHorizontalBoxExtraWidth = () => {
  if (!tagWrapper.value) return 0
  const style = window.getComputedStyle(tagWrapper.value)
  const paddingLeft = Number.parseFloat(style.paddingLeft || '0')
  const paddingRight = Number.parseFloat(style.paddingRight || '0')
  const borderLeftWidth = Number.parseFloat(style.borderLeftWidth || '0')
  const borderRightWidth = Number.parseFloat(style.borderRightWidth || '0')
  return paddingLeft + paddingRight + borderLeftWidth + borderRightWidth
}

const focus = () => {
  getTargetInput()?.focus()
}

const blur = () => {
  getTargetInput()?.blur()
}

const tagStyle = computed(() => {
  if (!multiple.value || !tagWrapperWidth.value) {
    return {}
  }
  const gapWidth = getGapWidth()
  const horizontalPaddingWidth = getHorizontalBoxExtraWidth()
  const inputSlotWidth =
    props.filterable && !isDisabled.value ? gapWidth + MINIMUM_INPUT_WIDTH : 0
  const maxWidth =
    collapseItemRef.value && props.maxCollapseTags === 1
      ? tagWrapperWidth.value -
        collapseItemWidth.value -
        gapWidth -
        inputSlotWidth
      : tagWrapperWidth.value - inputSlotWidth

  return { maxWidth: `${Math.max(maxWidth - horizontalPaddingWidth, 0)}px` }
})

watch(filtering, updatePopperPosition)

watch(
  [
    checkedNodes,
    isDisabled,
    () => props.collapseTags,
    () => props.maxCollapseTags,
  ],
  calculatePresentTags
)

watch(tags, () => {
  nextTick(() => updateStyle())
})

watch(realSize, async () => {
  await nextTick()
  const inputInner = inputRef.value!.input!
  inputInitialHeight = getInputInnerHeight(inputInner) || inputInitialHeight
  updateStyle()
})

watch(presentText, syncPresentTextValue, { immediate: true })

watch(
  () => popperVisible.value,
  (val) => {
    if (val && props.props.lazy && props.props.lazyLoad) {
      cascaderPanelRef.value?.loadLazyRootNodes()
    }
  }
)

onMounted(() => {
  const inputInner = inputRef.value!.input!

  const inputInnerHeight = getInputInnerHeight(inputInner)

  inputInitialHeight = inputInner.offsetHeight || inputInnerHeight
  useResizeObserver(inputInner, updateStyle)
  useResizeObserver(tagWrapper, scheduleUpdateStyle)
})

defineExpose({
  /**
   * @description get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false`
   */
  getCheckedNodes,
  /**
   * @description cascader panel ref
   */
  cascaderPanelRef,
  /**
   * @description toggle the visible of popper
   */
  togglePopperVisible,
  /**
   * @description cascader content ref
   */
  contentRef,
  /**
   * @description selected content text
   */
  presentText,
  /** @description focus the input element */
  focus,
  /** @description blur the input element */
  blur,
})
</script>
