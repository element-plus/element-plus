<template>
  <el-tooltip
    ref="tooltipRef"
    :visible="popperVisible"
    :teleported="teleported"
    :popper-class="[nsCascader.e('dropdown'), popperClass]"
    :popper-options="popperOptions"
    :fallback-placements="[
      'bottom-start',
      'bottom',
      'top-start',
      'top',
      'right',
      'left',
    ]"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    placement="bottom-start"
    :transition="`${nsCascader.namespace.value}-zoom-in-top`"
    effect="light"
    pure
    persistent
    @hide="hideSuggestionPanel"
  >
    <template #default>
      <div
        v-clickoutside:[popperPaneRef]="() => togglePopperVisible(false)"
        :class="[
          nsCascader.b(),
          nsCascader.m(realSize),
          nsCascader.is('disabled', isDisabled),
          $attrs.class,
        ]"
        :style="$attrs.style"
        @click="() => togglePopperVisible(readonly ? undefined : true)"
        @keydown="handleKeyDown"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <el-input
          ref="input"
          v-model="inputValue"
          :placeholder="currentPlaceholder"
          :readonly="readonly"
          :disabled="isDisabled"
          :validate-event="false"
          :size="realSize"
          :class="nsCascader.is('focus', popperVisible)"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @focus="(e) => $emit('focus', e)"
          @blur="(e) => $emit('blur', e)"
          @input="handleInput"
        >
          <template #suffix>
            <el-icon
              v-if="clearBtnVisible"
              key="clear"
              :class="[nsInput.e('icon'), 'icon-circle-close']"
              @click.stop="handleClear"
            >
              <circle-close />
            </el-icon>
            <el-icon
              v-else
              key="arrow-down"
              :class="[
                nsInput.e('icon'),
                'icon-arrow-down',
                nsCascader.is('reverse', popperVisible),
              ]"
              @click.stop="togglePopperVisible()"
            >
              <arrow-down />
            </el-icon>
          </template>
        </el-input>

        <div v-if="multiple" ref="tagWrapper" :class="nsCascader.e('tags')">
          <el-tag
            v-for="tag in presentTags"
            :key="tag.key"
            :type="tagType"
            :size="tagSize"
            :hit="tag.hitState"
            :closable="tag.closable"
            disable-transitions
            @close="deleteTag(tag)"
          >
            <template v-if="tag.isCollapseTag === false">
              <span>{{ tag.text }}</span>
            </template>
            <template v-else>
              <el-tooltip
                :teleported="false"
                :disabled="popperVisible || !collapseTagsTooltip"
                :fallback-placements="['bottom', 'top', 'right', 'left']"
                placement="bottom"
                effect="light"
              >
                <template #default>
                  <span>{{ tag.text }}</span>
                </template>
                <template #content>
                  <div :class="nsCascader.e('collapse-tags')">
                    <div
                      v-for="(tag2, idx) in allPresentTags.slice(1)"
                      :key="idx"
                      :class="nsCascader.e('collapse-tag')"
                    >
                      <el-tag
                        :key="tag2.key"
                        class="in-tooltip"
                        :type="tagType"
                        :size="tagSize"
                        :hit="tag2.hitState"
                        :closable="tag2.closable"
                        disable-transitions
                        @close="deleteTag(tag2)"
                      >
                        <span>{{ tag2.text }}</span>
                      </el-tag>
                    </div>
                  </div>
                </template>
              </el-tooltip>
            </template>
          </el-tag>
          <input
            v-if="filterable && !isDisabled"
            v-model="searchInputValue"
            type="text"
            :class="nsCascader.e('search-input')"
            :placeholder="presentText ? '' : inputPlaceholder"
            @input="(e) => handleInput(searchInputValue, e)"
            @click.stop="togglePopperVisible(true)"
            @keydown.delete="handleDelete"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
          />
        </div>
      </div>
    </template>

    <template #content>
      <el-cascader-panel
        v-show="!filtering"
        ref="panel"
        v-model="checkedValue"
        :options="options"
        :props="props"
        :border="false"
        :render-label="$slots.default"
        @expand-change="handleExpandChange"
        @close="$nextTick(() => togglePopperVisible(false))"
      />
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
            <span>{{ item.text }}</span>
            <el-icon v-if="item.checked">
              <check />
            </el-icon>
          </li>
        </template>
        <slot v-else name="empty">
          <li :class="nsCascader.e('empty-text')">
            {{ t('el.cascader.noMatch') }}
          </li>
        </slot>
      </el-scrollbar>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { isPromise } from '@vue/shared'
import { cloneDeep, debounce } from 'lodash-unified'

import { isClient, useCssVar, useResizeObserver } from '@vueuse/core'
import ElCascaderPanel, {
  CommonProps,
} from '@element-plus/components/cascader-panel'
import ElInput from '@element-plus/components/input'
import ElTooltip, {
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag, { tagProps } from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'

import { ClickOutside as Clickoutside } from '@element-plus/directives'
import {
  useFormItem,
  useLocale,
  useNamespace,
  useSize,
} from '@element-plus/hooks'

import {
  debugWarn,
  focusNode,
  getSibling,
  isKorean,
  isValidComponentSize,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { ArrowDown, Check, CircleClose } from '@element-plus/icons-vue'

import type { Options } from '@element-plus/components/popper'
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  CascaderNode,
  CascaderValue,
  Tag,
} from '@element-plus/components/cascader-panel'
import type { ComponentSize } from '@element-plus/constants'

type cascaderPanelType = InstanceType<typeof ElCascaderPanel>
type tooltipType = InstanceType<typeof ElTooltip>
type inputType = InstanceType<typeof ElInput>
type suggestionPanelType = InstanceType<typeof ElScrollbar>

const popperOptions: Partial<Options> = {
  modifiers: [
    {
      name: 'arrowPosition',
      enabled: true,
      phase: 'main',
      fn: ({ state }) => {
        const { modifiersData, placement } = state as any
        if (['right', 'left', 'bottom', 'top'].includes(placement)) return
        modifiersData.arrow.x = 35
      },
      requires: ['arrow'],
    },
  ],
}
const COMPONENT_NAME = 'ElCascader'
export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    ElCascaderPanel,
    ElInput,
    ElTooltip,
    ElScrollbar,
    ElTag,
    ElIcon,
    CircleClose,
    Check,
    ArrowDown,
  },

  directives: {
    Clickoutside,
  },

  props: {
    ...CommonProps,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    placeholder: {
      type: String,
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: {
      type: Function as PropType<
        (node: CascaderNode, keyword: string) => boolean
      >,
      default: (node: CascaderNode, keyword: string) =>
        node.text.includes(keyword),
    },
    separator: {
      type: String,
      default: ' / ',
    },
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    beforeFilter: {
      type: Function as PropType<(value: string) => boolean | Promise<any>>,
      default: () => true,
    },
    popperClass: {
      type: String,
      default: '',
    },
    teleported: useTooltipContentProps.teleported,
    // eslint-disable-next-line vue/require-prop-types
    tagType: { ...tagProps.type, default: 'info' },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },

  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'focus',
    'blur',
    'visible-change',
    'expand-change',
    'remove-tag',
  ],

  setup(props, { emit }) {
    let inputInitialHeight = 0
    let pressDeleteCount = 0

    const nsCascader = useNamespace('cascader')
    const nsInput = useNamespace('input')

    const { t } = useLocale()
    const { form, formItem } = useFormItem()

    const tooltipRef: Ref<tooltipType | null> = ref(null)
    const input: Ref<inputType | null> = ref(null)
    const tagWrapper = ref(null)
    const panel: Ref<cascaderPanelType | null> = ref(null)
    const suggestionPanel: Ref<suggestionPanelType | null> = ref(null)
    const popperVisible = ref(false)
    const inputHover = ref(false)
    const filtering = ref(false)
    const inputValue = ref('')
    const searchInputValue = ref('')
    const presentTags: Ref<Tag[]> = ref([])
    const allPresentTags: Ref<Tag[]> = ref([])
    const suggestions: Ref<CascaderNode[]> = ref([])
    const isOnComposition = ref(false)

    const isDisabled = computed(() => props.disabled || form?.disabled)
    const inputPlaceholder = computed(
      () => props.placeholder || t('el.cascader.placeholder')
    )
    const currentPlaceholder = computed(() =>
      searchInputValue.value || presentTags.value.length > 0
        ? ''
        : inputPlaceholder.value
    )
    const realSize = useSize()
    const tagSize = computed(() =>
      ['small'].includes(realSize.value) ? 'small' : 'default'
    )
    const multiple = computed(() => !!props.props.multiple)
    const readonly = computed(() => !props.filterable || multiple.value)
    const searchKeyword = computed(() =>
      multiple.value ? searchInputValue.value : inputValue.value
    )
    const checkedNodes: ComputedRef<CascaderNode[]> = computed(
      () => panel.value?.checkedNodes || []
    )
    const clearBtnVisible = computed(() => {
      if (
        !props.clearable ||
        isDisabled.value ||
        filtering.value ||
        !inputHover.value
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

    const checkedValue = computed<CascaderValue>({
      get() {
        return cloneDeep(props.modelValue) as CascaderValue
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val)
        emit(CHANGE_EVENT, val)
        if (props.validateEvent) {
          formItem?.validate('change').catch((err) => debugWarn(err))
        }
      },
    })

    const popperPaneRef = computed(() => {
      return tooltipRef.value?.popperRef?.contentRef
    })

    const togglePopperVisible = (visible?: boolean) => {
      if (isDisabled.value) return

      visible = visible ?? !popperVisible.value

      if (visible !== popperVisible.value) {
        popperVisible.value = visible
        input.value?.input?.setAttribute('aria-expanded', `${visible}`)

        if (visible) {
          updatePopperPosition()
          nextTick(panel.value?.scrollToExpandingNode)
        } else if (props.filterable) {
          syncPresentTextValue()
        }

        emit('visible-change', visible)
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
        isCollapseTag: false,
      }
    }

    const deleteTag = (tag: Tag) => {
      const node = tag.node as CascaderNode
      node.doCheck(false)
      panel.value?.calculateCheckedValue()
      emit('remove-tag', node.valueByOption)
    }

    const calculatePresentTags = () => {
      if (!multiple.value) return

      const nodes = checkedNodes.value
      const tags: Tag[] = []

      const allTags: Tag[] = []
      nodes.forEach((node) => allTags.push(genTag(node)))
      allPresentTags.value = allTags

      if (nodes.length) {
        const [first, ...rest] = nodes
        const restCount = rest.length

        tags.push(genTag(first))

        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true,
            })
          } else {
            rest.forEach((node) => tags.push(genTag(node)))
          }
        }
      }

      presentTags.value = tags
    }

    const calculateSuggestions = () => {
      const { filterMethod, showAllLevels, separator } = props
      const res = panel.value
        ?.getFlattedNodes(!props.props.checkStrictly)
        ?.filter((node) => {
          if (node.isDisabled) return false
          node.calcText(showAllLevels, separator)
          return filterMethod(node, searchKeyword.value)
        })

      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false
        })
        allPresentTags.value.forEach((tag) => {
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
        firstNode = panel.value?.$el.querySelector(
          `.${nsCascader.b('node')}[tabindex="-1"]`
        )
      }

      if (firstNode) {
        firstNode.focus()
        !filtering.value && firstNode.click()
      }
    }

    const updateStyle = () => {
      const inputInner = input.value?.input
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
        const height =
          presentTags.value.length > 0
            ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px`
            : `${inputInitialHeight}px`
        inputInner.style.height = height
        updatePopperPosition()
      }
    }

    const getCheckedNodes = (leafOnly: boolean) => {
      return panel.value?.getCheckedNodes(leafOnly)
    }

    const handleExpandChange = (value: CascaderValue) => {
      updatePopperPosition()
      emit('expand-change', value)
    }

    const handleComposition = (event: CompositionEvent) => {
      const text = (event.target as HTMLInputElement)?.value
      if (event.type === 'compositionend') {
        isOnComposition.value = false
        nextTick(() => handleInput(text))
      } else {
        const lastCharacter = text[text.length - 1] || ''
        isOnComposition.value = !isKorean(lastCharacter)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOnComposition.value) return

      switch (e.code) {
        case EVENT_CODE.enter:
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
      panel.value?.clearCheckedNodes()
      if (!popperVisible.value && props.filterable) {
        syncPresentTextValue()
      }
      togglePopperVisible(false)
    }

    const syncPresentTextValue = () => {
      const { value } = presentText
      inputValue.value = value
      searchInputValue.value = value
    }

    const handleSuggestionClick = (node: CascaderNode) => {
      const { checked } = node

      if (multiple.value) {
        panel.value?.handleCheckChange(node, !checked, false)
      } else {
        !checked && panel.value?.handleCheckChange(node, true, false)
        togglePopperVisible(false)
      }
    }

    const handleSuggestionKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const { code } = e

      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1
          focusNode(
            getSibling(
              target,
              distance,
              `.${nsCascader.e('suggestion-item')}[tabindex="-1"]`
            )
          )
          break
        }
        case EVENT_CODE.enter:
          target.click()
          break
      }
    }

    const handleDelete = () => {
      const tags = presentTags.value
      const lastTag = tags[tags.length - 1]
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1

      if (
        !lastTag ||
        !pressDeleteCount ||
        (props.collapseTags && tags.length > 1)
      )
        return

      if (lastTag.hitState) {
        deleteTag(lastTag)
      } else {
        lastTag.hitState = true
      }
    }

    const handleFilter = debounce(() => {
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
    }, props.debounce)

    const handleInput = (val: string, e?: KeyboardEvent) => {
      !popperVisible.value && togglePopperVisible(true)

      if (e?.isComposing) return

      val ? handleFilter() : hideSuggestionPanel()
    }

    watch(filtering, updatePopperPosition)

    watch([checkedNodes, isDisabled], calculatePresentTags)

    watch(presentTags, () => {
      nextTick(() => updateStyle())
    })

    watch(presentText, syncPresentTextValue, { immediate: true })

    onMounted(() => {
      const inputInner = input.value!.input!

      const inputInnerHeight =
        Number.parseFloat(
          useCssVar(nsInput.cssVarName('input-height'), inputInner).value
        ) - 2

      inputInitialHeight = inputInner.offsetHeight || inputInnerHeight
      useResizeObserver(inputInner, updateStyle)
    })

    return {
      popperOptions,
      tooltipRef,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      suggestionPanel,
      popperVisible,
      inputHover,
      inputPlaceholder,
      currentPlaceholder,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      allPresentTags,
      suggestions,
      isDisabled,
      isOnComposition,
      realSize,
      tagSize,
      multiple,
      readonly,
      clearBtnVisible,

      nsCascader,
      nsInput,
      t,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      handleExpandChange,
      handleKeyDown,
      handleComposition,
      handleClear,
      handleSuggestionClick,
      handleSuggestionKeyDown,
      handleDelete,
      handleInput,
    }
  },
})
</script>
