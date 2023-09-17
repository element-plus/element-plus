<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    :class="wrapperKls"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click.stop="toggleMenu"
  >
    <el-tooltip
      ref="tooltipRef"
      :visible="dropMenuVisible"
      :placement="placement"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="effect"
      pure
      trigger="click"
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :persistent="persistent"
      @show="handleMenuEnter"
    >
      <template #default>
        <div
          class="select-trigger"
          @mouseenter="inputHovering = true"
          @mouseleave="inputHovering = false"
        >
          <div
            v-if="multiple"
            ref="tags"
            tabindex="-1"
            :class="tagsKls"
            :style="selectTagsStyle"
            @click="focus"
          >
            <transition
              v-if="collapseTags && selected.length"
              @after-leave="resetInputHeight"
            >
              <span :class="tagWrapperKls">
                <el-tag
                  v-for="item in showTagList"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  :type="tagType"
                  disable-transitions
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')" :style="tagTextStyle">
                    {{ item.currentLabel }}
                  </span>
                </el-tag>
                <el-tag
                  v-if="selected.length > maxCollapseTags"
                  :closable="false"
                  :size="collapseTagSize"
                  :type="tagType"
                  disable-transitions
                >
                  <el-tooltip
                    v-if="collapseTagsTooltip"
                    ref="tagTooltipRef"
                    :disabled="dropMenuVisible"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    :effect="effect"
                    placement="bottom"
                    :teleported="teleported"
                  >
                    <template #default>
                      <span :class="nsSelect.e('tags-text')"
                        >+ {{ selected.length - maxCollapseTags }}</span
                      >
                    </template>
                    <template #content>
                      <div :class="nsSelect.e('collapse-tags')">
                        <div
                          v-for="item in collapseTagList"
                          :key="getValueKey(item)"
                          :class="nsSelect.e('collapse-tag')"
                        >
                          <el-tag
                            class="in-tooltip"
                            :closable="!selectDisabled && !item.isDisabled"
                            :size="collapseTagSize"
                            :hit="item.hitState"
                            :type="tagType"
                            disable-transitions
                            :style="{ margin: '2px' }"
                            @close="handleDeleteTooltipTag($event, item)"
                          >
                            <span
                              :class="nsSelect.e('tags-text')"
                              :style="{
                                maxWidth: inputWidth - 75 + 'px',
                              }"
                              >{{ item.currentLabel }}</span
                            >
                          </el-tag>
                        </div>
                      </div>
                    </template>
                  </el-tooltip>
                  <span v-else :class="nsSelect.e('tags-text')"
                    >+ {{ selected.length - maxCollapseTags }}</span
                  >
                </el-tag>
              </span>
            </transition>
            <transition v-if="!collapseTags" @after-leave="resetInputHeight">
              <span
                :class="tagWrapperKls"
                :style="
                  prefixWidth && selected.length
                    ? { marginLeft: `${prefixWidth}px` }
                    : ''
                "
              >
                <el-tag
                  v-for="item in selected"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  :type="tagType"
                  disable-transitions
                  @close="deleteTag($event, item)"
                >
                  <span
                    :class="nsSelect.e('tags-text')"
                    :style="{ maxWidth: inputWidth - 75 + 'px' }"
                    >{{ item.currentLabel }}</span
                  >
                </el-tag>
              </span>
            </transition>
            <input
              v-if="filterable && !selectDisabled"
              ref="input"
              v-model="query"
              type="text"
              :class="inputKls"
              :disabled="selectDisabled"
              :autocomplete="autocomplete"
              :style="inputStyle"
              :aria-label="ariaLabel"
              @focus="handleFocus"
              @blur="handleBlur"
              @keyup="managePlaceholder"
              @keydown="resetInputState"
              @keydown.down.prevent="navigateOptions('next')"
              @keydown.up.prevent="navigateOptions('prev')"
              @keydown.esc="handleKeydownEscape"
              @keydown.enter.stop.prevent="selectOption"
              @keydown.delete="deletePrevTag"
              @keydown.tab="visible = false"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
              @input="debouncedQueryChange"
            />
          </div>
          <!-- fix: https://github.com/element-plus/element-plus/issues/11415 -->
          <input
            v-if="isIOS && !multiple && filterable && readonly"
            ref="iOSInput"
            :class="iOSInputKls"
            :disabled="selectDisabled"
            type="text"
          />
          <el-input
            :id="id"
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="
              typeof currentPlaceholder === 'function'
                ? currentPlaceholder()
                : currentPlaceholder
            "
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="[nsSelect.is('focus', visible)]"
            :tabindex="multiple && filterable ? -1 : undefined"
            :label="ariaLabel"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.up.stop.prevent="navigateOptions('prev')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc="handleKeydownEscape"
            @keydown.tab="visible = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <slot name="prefix" />
              </div>
            </template>
            <template #suffix>
              <el-icon
                v-if="iconComponent && !showClose"
                :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]"
              >
                <component :is="iconComponent" />
              </el-icon>
              <el-icon
                v-if="showClose && clearIcon"
                :class="[nsSelect.e('caret'), nsSelect.e('icon')]"
                @click="handleClearClick"
              >
                <component :is="clearIcon" />
              </el-icon>
            </template>
          </el-input>
        </div>
      </template>
      <template #content>
        <el-select-menu>
          <el-scrollbar
            v-show="options.size > 0 && !loading"
            ref="scrollbar"
            tag="ul"
            :wrap-class="nsSelect.be('dropdown', 'wrap')"
            :view-class="nsSelect.be('dropdown', 'list')"
            :class="scrollbarKls"
          >
            <el-option v-if="showNewOption" :value="query" :created="true" />
            <el-options @update-options="onOptionsRendered">
              <slot />
            </el-options>
          </el-scrollbar>
          <template
            v-if="
              emptyText &&
              (!allowCreate || loading || (allowCreate && options.size === 0))
            "
          >
            <slot v-if="$slots.empty" name="empty" />
            <p v-else :class="nsSelect.be('dropdown', 'empty')">
              {{ emptyText }}
            </p>
          </template>
        </el-select-menu>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  toRefs,
  unref,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { placements } from '@popperjs/core'
import { ClickOutside } from '@element-plus/directives'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import ElTooltip, {
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag, { tagProps } from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { iconPropType, isIOS, isValidComponentSize } from '@element-plus/utils'
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import { useSelect, useSelectStates } from './useSelect'
import { selectKey } from './token'
import ElOptions from './options'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { SelectContext } from './token'

const COMPONENT_NAME = 'ElSelect'
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon,
  },
  directives: { ClickOutside },
  props: {
    /**
     * @description the name attribute of select input
     */
    name: String,
    /**
     * @description native input id
     */
    id: String,
    /**
     * @description binding value
     */
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    /**
     * @description the autocomplete attribute of select input
     */
    autocomplete: {
      type: String,
      default: 'off',
    },
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: Boolean,
    /**
     * @description size of Input
     */
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
      type: String as PropType<'light' | 'dark' | string>,
      default: 'light',
    },
    /**
     * @description whether Select is disabled
     */
    disabled: Boolean,
    /**
     * @description whether select can be cleared
     */
    clearable: Boolean,
    /**
     * @description whether Select is filterable
     */
    filterable: Boolean,
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: Boolean,
    /**
     * @description whether Select is loading data from server
     */
    loading: Boolean,
    /**
     * @description custom class name for Select's dropdown
     */
    popperClass: {
      type: String,
      default: '',
    },
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
      type: Object as PropType<Partial<Options>>,
      default: () => ({} as Partial<Options>),
    },
    /**
     * @description whether options are loaded from server
     */
    remote: Boolean,
    /**
     * @description displayed text while loading data from server, default is 'Loading'
     */
    loadingText: String,
    /**
     * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
     */
    noMatchText: String,
    /**
     * @description displayed text when there is no options, you can also use slot `empty`, default is 'No data'
     */
    noDataText: String,
    /**
     * @description custom remote search method
     */
    remoteMethod: Function,
    /**
     * @description custom filter method
     */
    filterMethod: Function,
    /**
     * @description whether multiple-select is activated
     */
    multiple: Boolean,
    /**
     * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
     */
    multipleLimit: {
      type: Number,
      default: 0,
    },
    /**
     * @description placeholder, default is 'Select'
     */
    placeholder: {
      type: String,
    },
    /**
     * @description select first matching option on enter key. Use with `filterable` or `remote`
     */
    defaultFirstOption: Boolean,
    /**
     * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
     */
    reserveKeyword: {
      type: Boolean,
      default: true,
    },
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
      type: String,
      default: 'value',
    },
    /**
     * @description whether to collapse tags to a text when multiple selecting
     */
    collapseTags: Boolean,
    /**
     * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
     */
    collapseTagsTooltip: Boolean,
    /**
     * @description the max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
      type: Number,
      default: 1,
    },
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: useTooltipContentProps.teleported,
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
      type: Boolean,
      default: true,
    },
    /**
     * @description custom clear icon component
     */
    clearIcon: {
      type: iconPropType,
      default: CircleClose,
    },
    /**
     * @description whether the width of the dropdown is the same as the input
     */
    fitInputWidth: Boolean,
    /**
     * @description custom suffix icon component
     */
    suffixIcon: {
      type: iconPropType,
      default: ArrowDown,
    },
    /**
     * @description tag type
     */
    // eslint-disable-next-line vue/require-prop-types
    tagType: { ...tagProps.type, default: 'info' },
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
    /**
     * @description in remote search method show suffix icon
     */
    remoteShowSuffix: Boolean,
    /**
     * @deprecated will be removed in version 2.4.0, please use override style scheme
     */
    suffixTransition: {
      type: Boolean,
      default: true,
    },
    /**
     * @description position of dropdown
     */
    placement: {
      type: String,
      values: placements,
      default: 'bottom-start',
    },
    /**
     * @description native input aria-label
     */
    ariaLabel: {
      type: String,
      default: undefined,
    },
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
  ],

  setup(props, ctx) {
    const nsSelect = useNamespace('select')
    const nsInput = useNamespace('input')
    const { t } = useLocale()
    const states = useSelectStates(props)
    const {
      optionList,
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      focus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      handleDeleteTooltipTag,
      dropMenuVisible,

      reference,
      input,
      iOSInput,
      tooltipRef,
      tagTooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList,
      // computed style
      selectTagsStyle,
    } = useSelect(props, states, ctx)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
    } = toRefs(states)

    const wrapperKls = computed(() => {
      const classList = [nsSelect.b()]
      const _selectSize = unref(selectSize)
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize))
      }
      if (props.disabled) {
        classList.push(nsSelect.m('disabled'))
      }
      return classList
    })

    const tagsKls = computed(() => [
      nsSelect.e('tags'),
      nsSelect.is('disabled', unref(selectDisabled)),
    ])

    const tagWrapperKls = computed(() => [
      nsSelect.b('tags-wrapper'),
      { 'has-prefix': unref(prefixWidth) && unref(selected).length },
    ])

    const inputKls = computed(() => [
      nsSelect.e('input'),
      nsSelect.is(unref(selectSize)),
      nsSelect.is('disabled', unref(selectDisabled)),
    ])

    const iOSInputKls = computed(() => [
      nsSelect.e('input'),
      nsSelect.is(unref(selectSize)),
      nsSelect.em('input', 'iOS'),
    ])

    const scrollbarKls = computed(() => [
      nsSelect.is(
        'empty',
        !props.allowCreate &&
          Boolean(unref(query)) &&
          unref(filteredOptionsCount) === 0
      ),
    ])

    const tagTextStyle = computed(() => {
      const maxWidth =
        unref(inputWidth) > 123
          ? unref(inputWidth) - 123
          : unref(inputWidth) - 75
      return { maxWidth: `${maxWidth}px` }
    })

    const inputStyle = computed(() => ({
      marginLeft: `${unref(prefixWidth)}px`,
      flexGrow: 1,
      width: `${unref(inputLength) / (unref(inputWidth) - 32)}%`,
      maxWidth: `${unref(inputWidth) - 42}px`,
    }))

    provide(
      selectKey,
      reactive({
        props,
        options,
        optionsArray,
        cachedOptions,
        optionsCount,
        filteredOptionsCount,
        hoverIndex,
        handleOptionSelect,
        onOptionCreate,
        onOptionDestroy,
        selectWrapper,
        selected,
        setSelected,
        queryChange,
        groupQueryChange,
      }) as unknown as SelectContext
    )

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value =
        props.placeholder || (() => t('el.select.placeholder'))
      if (
        props.multiple &&
        Array.isArray(props.modelValue) &&
        props.modelValue.length > 0
      ) {
        currentPlaceholder.value = ''
      }
      useResizeObserver(selectWrapper, handleResize)
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        const refEl = reference.value && reference.value.$el
        if (!refEl) return
        inputWidth.value = refEl.getBoundingClientRect().width

        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e('prefix')}`)
          prefixWidth.value = Math.max(
            prefix.getBoundingClientRect().width + 11,
            30
          )
        }
      })
      setSelected()
    })

    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, '')
    }

    const popperPaneRef = computed(() => {
      return tooltipRef.value?.popperRef?.contentRef
    })

    const onOptionsRendered = (v) => {
      optionList.value = v
    }

    return {
      isIOS,
      onOptionsRendered,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      handleDeleteTooltipTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      focus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,

      reference,
      input,
      iOSInput,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,

      wrapperKls,
      tagsKls,
      tagWrapperKls,
      inputKls,
      iOSInputKls,
      scrollbarKls,
      selectTagsStyle,
      nsSelect,
      tagTextStyle,
      inputStyle,
      handleMouseEnter,
      handleMouseLeave,
      showTagList,
      collapseTagList,
      tagTooltipRef,
    }
  },
})
</script>
