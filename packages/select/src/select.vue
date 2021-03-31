<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="el-select"
    :class="[selectSize ? 'el-select--' + selectSize : '']"
    @click.stop="toggleMenu"
  >
    <el-popper
      ref="popper"
      v-model:visible="dropMenuVisible"
      placement="bottom-start"
      :append-to-body="popperAppendToBody"
      :popper-class="`el-select__popper ${popperClass}`"
      manual-mode
      effect="light"
      pure
      trigger="click"
      transition="el-zoom-in-top"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      @before-enter="handleMenuEnter"
    >
      <template #trigger>
        <div class="select-trigger">
          <div
            v-if="multiple"
            ref="tags"
            class="el-select__tags"
            :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
          >
            <span v-if="collapseTags && selected.length">
              <el-tag
                :closable="!selectDisabled && !selected[0].isDisabled"
                :size="collapseTagSize"
                :hit="selected[0].hitState"
                type="info"
                disable-transitions
                @close="deleteTag($event, selected[0])"
              >
                <span class="el-select__tags-text" :style="{ 'max-width': inputWidth - 123 + 'px' }">{{ selected[0].currentLabel }}</span>
              </el-tag>
              <el-tag
                v-if="selected.length > 1"
                :closable="false"
                :size="collapseTagSize"
                type="info"
                disable-transitions
              >
                <span class="el-select__tags-text">+ {{ selected.length - 1 }}</span>
              </el-tag>
            </span>
            <!-- <div> -->
            <transition v-if="!collapseTags" @after-leave="resetInputHeight">
              <span :style="{marginLeft: prefixWidth && selected.length ? `${prefixWidth}px` : null}">
                <el-tag
                  v-for="item in selected"
                  :key="getValueKey(item)"
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, item)"
                >
                  <span class="el-select__tags-text" :style="{ 'max-width': inputWidth - 75 + 'px' }">{{ item.currentLabel }}</span>
                </el-tag>
              </span>
            </transition>
            <!-- </div> -->
            <input
              v-if="filterable"
              ref="input"
              v-model="query"
              type="text"
              class="el-select__input"
              :class="[selectSize ? `is-${ selectSize }` : '']"
              :disabled="selectDisabled"
              :autocomplete="autocomplete"
              :style="{ marginLeft: prefixWidth && !selected.length || tagInMultiLine ? `${prefixWidth}px` : null, flexGrow: '1', width: `${inputLength / (inputWidth - 32)}%`, maxWidth: `${inputWidth - 42}px` }"
              @focus="handleFocus"
              @blur="handleBlur"
              @keyup="managePlaceholder"
              @keydown="resetInputState"
              @keydown.down.prevent="navigateOptions('next')"
              @keydown.up.prevent="navigateOptions('prev')"
              @keydown.esc.stop.prevent="visible = false"
              @keydown.enter.stop.prevent="selectOption"
              @keydown.delete="deletePrevTag"
              @keydown.tab="visible = false"
              @compositionstart="handleComposition"
              @compositionupdate="handleComposition"
              @compositionend="handleComposition"
              @input="debouncedQueryChange"
            >
          </div>
          <el-input
            :id="id"
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="currentPlaceholder"
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            :tabindex="(multiple && filterable) ? '-1' : null"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @keydown.down.stop.prevent="navigateOptions('next')"
            @keydown.up.stop.prevent="navigateOptions('prev')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc.stop.prevent="visible = false"
            @keydown.tab="visible = false"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template v-if="$slots.prefix" #prefix>
              <div style="height: 100%;display: flex;justify-content: center;align-items: center">
                <slot name="prefix"></slot>
              </div>
            </template>
            <template #suffix>
              <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
              <i
                v-if="showClose"
                :class="`el-select__caret el-input__icon ${clearIcon}`"
                @click="handleClearClick"
              ></i>
            </template>
          </el-input>
        </div>
      </template>
      <template #default>
        <el-select-menu>
          <el-scrollbar
            v-show="options.size > 0 && !loading"
            ref="scrollbar"
            tag="ul"
            wrap-class="el-select-dropdown__wrap"
            view-class="el-select-dropdown__list"
            :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
          >
            <el-option
              v-if="showNewOption"
              :value="query"
              :created="true"
            />
            <slot></slot>
          </el-scrollbar>
          <template v-if="emptyText && (!allowCreate || loading || (allowCreate && options.size === 0 ))">
            <slot v-if="$slots.empty" name="empty"></slot>
            <p v-else class="el-select-dropdown__empty">
              {{ emptyText }}
            </p>
          </template>
        </el-select-menu>
      </template>
    </el-popper>
  </div>
</template>

<script lang="ts">
import {
  toRefs,
  defineComponent,
  onMounted,
  onBeforeUnmount,
  nextTick,
  reactive,
  provide,
  computed,
} from 'vue'
import ElInput from '@element-plus/input'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import ElTag from '@element-plus/tag'
import ElPopper from '@element-plus/popper'
import ElScrollbar from '@element-plus/scrollbar'
import { ClickOutside } from '@element-plus/directives'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { t } from '@element-plus/locale'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { useSelect, useSelectStates } from './useSelect'
import { selectKey } from './token'
import { useFocus } from '@element-plus/hooks'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElSelect',
  componentName: 'ElSelect',
  components: {
    ElInput,
    ElSelectMenu,
    ElOption,
    ElTag,
    ElScrollbar,
    ElPopper,
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: [Array, String, Number, Boolean, Object],
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
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
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],

  setup(props, ctx) {
    const states = useSelectStates(props)
    const {
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
      iconClass,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,

      reference,
      input,
      popper,
      tags,
      selectWrapper,
      scrollbar,
    } = useSelect(props, states, ctx)

    const { focus } = useFocus(reference)

    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine,
    } = toRefs(states)

    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      selectEmitter: states.selectEmitter,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
    }))

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = (props.placeholder || t('el.select.placeholder'))
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = ''
      }
      addResizeListener(selectWrapper.value as any, handleResize)
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          medium: 36,
          small: 32,
          mini: 28,
        }
        const input = reference.value.input
        states.initialInputHeight = input.getBoundingClientRect().height || sizeMap[selectSize.value]
      }
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
        if (ctx.slots.prefix) {
          const inputChildNodes = reference.value.$el.childNodes
          const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
          const prefix = reference.value.$el.querySelector('.el-input__prefix')
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30)
          if (states.prefixWidth) {
            input.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`
          }
        }
      })
      setSelected()
    })



    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value as any, handleResize)
    })

    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, '')
    }

    const popperPaneRef = computed(() => {
      return popper.value?.popperRef
    })

    return {
      tagInMultiLine,
      prefixWidth,
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
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconClass,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,

      reference,
      input,
      popper,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
    }
  },
})
</script>
