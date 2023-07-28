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
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    effect: {
      type: String as PropType<'light' | 'dark' | string>,
      default: 'light',
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: '',
    },
    popperOptions: {
      type: Object as PropType<Partial<Options>>,
      default: () => ({} as Partial<Options>),
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false,
    },
    maxCollapseTags: {
      type: Number,
      default: 1,
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: iconPropType,
      default: CircleClose,
    },
    fitInputWidth: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: iconPropType,
      default: ArrowDown,
    },
    // eslint-disable-next-line vue/require-prop-types
    tagType: { ...tagProps.type, default: 'info' },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false,
    },
    suffixTransition: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      values: placements,
      default: 'bottom-start',
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

    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: '100%',
    }))

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
