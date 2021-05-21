<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[selectSize ? 'el-select-v2--' + selectSize : '']"
    class="el-select-v2"
    @click.stop="toggleMenu"
    @mouseenter="states.comboBoxHovering = true"
    @mouseleave="states.comboBoxHovering = false"
  >
    <el-popper
      ref="popper"
      v-model:visible="expanded"
      :append-to-body="popperAppendToBody"
      :popper-class="`el-select-v2__popper ${popperClass}`"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      effect="light"
      manual-mode
      placement="bottom-start"
      pure
      transition="el-zoom-in-top"
      trigger="click"
      @before-enter="states.inputValue = states.displayInputValue"
      @after-leave="states.inputValue = states.displayInputValue"
    >
      <template #trigger>
        <div
          ref="selectionRef"
          class="el-select-v2__wrapper"
          :class="{
            'is-focused': states.isComposing,
            'is-hovering': states.comboBoxHovering
          }"
        >
          <div v-if="$slots.prefix">
            <slot name="prefix"></slot>
          </div>
          <div v-if="multiple" class="el-select-v2__selection">
            <template v-if="collapseTags && modelValue.length > 0">
              <div class="el-select-v2__selected-item">
                <el-tag
                  :closable="!selectDisabled && !modelValue[0].disable"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, modelValue[0])"
                >
                  <span
                    class="el-select-v2__tags-text"
                    :style="{ maxWidth: inputWidth - 123 + 'px' }"
                  >{{ modelValue[0].currentLabel }}</span>
                </el-tag>
                <el-tag
                  v-if="modelValue.length > 1"
                  :closable="false"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                >
                  <span class="el-select-v2__tags-text">+ {{ modelValue.length - 1 }}</span>
                </el-tag>
              </div>
            </template>

            <template v-else>
              <div
                v-for="(selected, idx) in modelValue"
                :key="idx"
                class="el-select__selected-item"
              >
                <el-tag
                  :key="getValueKey(selected)"
                  :closable="!selectDisabled && !selected.disabled"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, selected)"
                >
                  {{ getLabel(selected) }}
                </el-tag>
              </div>
            </template>
            <div
              v-if="filterable"
              class="el-select-v2__selected-item el-select-v2__input-wrapper"
              :style="inputWrapperStyle"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                @update:modelValue="onUpdateInputValue"
                class="el-select-v2__combobox-input"
                :autocomplete="autocomplete"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                :disabled="disabled"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                role="combobox"
                spellcheck="false"
                type="text"
                @click.stop.prevent="handleInputBoxClick"
                @focus="handleFocus"
                @input="onInput"
                @compositionupdate="onCompositionUpdate"
                @compositionend="onInput"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.delete.stop="handleDel"
              >
              <span
                ref="calculatorRef"
                aria-hidden="true"
                class="el-select-v2__input-calculator"
                v-text="states.displayInputValue"
              >
              </span>
            </div>
          </div>
          <template v-else>
            <div
              v-if="filterable"
              class="el-select-v2__selected-item el-select-v2__input-wrapper"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                @update:modelValue="onUpdateInputValue"
                class="el-select-v2__combobox-input"
                :autocomplete="autocomplete"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                :disabled="disabled"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                role="combobox"
                spellcheck="false"
                type="text"
                @click.stop.prevent="handleInputBoxClick"
                @focus="handleFocus"
                @input="onInput"
                @compositionupdate="onCompositionUpdate"
                @compositionend="onInput"
                @keydown.esc.stop.prevent="handleEsc"
              >
            </div>
            <span
              aria-hidden="true"
              ref="calculatorRef"
              class="el-select-v2__selected-item el-select-v2__input-calculator"
              v-text="states.displayInputValue"
            >
            </span>
          </template>
          <span
            v-if="shouldShowPlaceholder"
            :class="{
              'el-select-v2__placeholder': true,
              'is-transparent': states.isComposing || (placeholder && !modelValue),
            }"
          >
            {{ currentPlaceholder }}
          </span>
          <span class="el-select-v2__suffix">
            <i v-show="!showClearBtn" :class="['el-select-v2__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
            <i
              v-if="showClearBtn"
              :class="`el-select-v2__caret el-input__icon ${clearIcon}`"
              @click.prevent.stop="handleClear"
            ></i>
          </span>
        </div>
      </template>
      <template #default>
        <el-select-menu
          ref="menuRef"
          :data="filteredOptions"
          :width="popperSize"
          :hovering-index="states.hoveringIndex"
        >
          <template #default="scope">
            <slot v-bind="scope"></slot>
          </template>
          <template #empty>
            <slot name="empty">
              <p class="el-select-v2__empty">{{ emptyText }}</p>
            </slot>
          </template>
          <!-- <template
            v-if="emptyText && (!allowCreate || loading || (allowCreate && options.size === 0))"
          >
            <slot name="empty">
            </slot>
          </template>-->
        </el-select-menu>
      </template>
    </el-popper>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  provide,
  vModelText,
} from 'vue'
import ElTag from '@element-plus/tag'
import ElPopper from '@element-plus/popper'

import ElSelectMenu from './select-dropdown.vue'
import { ClickOutside } from '@element-plus/directives'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { t } from '@element-plus/locale'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import { useSelectStates } from '@element-plus/select/src/useSelect'
import useSelect from './useSelect'
import { selectKey } from './token'
import { useFocus } from '@element-plus/hooks'
import { SelectProps } from './defaults'

export default defineComponent({
  name: 'ElSelect',
  components: {
    ElSelectMenu,
    // ElTag,
    ElPopper,
  },
  directives: { ClickOutside, ModelText: vModelText },
  props: SelectProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],

  setup(props, { emit }) {
    // const states = useSelectStates(props)
    const API = useSelect(props, emit)

    // const { focus } = useFocus(reference)

    // const {
    //   inputWidth,
    //   selected,
    //   inputLength,
    //   filteredOptionsCount,
    //   visible,
    //   softFocus,
    //   selectedLabel,
    //   hoverIndex,
    //   query,
    //   inputHovering,
    //   currentPlaceholder,
    //   menuVisibleOnFocus,
    //   isOnComposition,
    //   isSilentBlur,
    //   options,
    //   cachedOptions,
    //   optionsCount,
    //   prefixWidth,
    //   tagInMultiLine,
    // } = toRefs(states)
    provide(selectKey, {
      props,
      ...API,
    })

    // provide(selectKey, reactive({
    //   props,
    //   options,
    //   optionsArray,
    //   cachedOptions,
    //   optionsCount,
    //   filteredOptionsCount,
    //   hoverIndex,
    //   handleOptionSelect,
    //   selectEmitter: states.selectEmitter,
    //   onOptionCreate,
    //   onOptionDestroy,
    //   selectWrapper,
    //   selected,
    //   setSelected,
    // }))

    onMounted(() => {

      // states.cachedPlaceHolder = currentPlaceholder.value = (props.placeholder || t('el.select.placeholder'))
      // if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
      //   currentPlaceholder.value = ''
      // }
      // addResizeListener(selectWrapper.value as any, handleResize)
      // if (reference.value && reference.value.$el) {
      //   const sizeMap = {
      //     medium: 36,
      //     small: 32,
      //     mini: 28,
      //   }
      //   const input = reference.value.input
      //   states.initialInputHeight = input.getBoundingClientRect().height || sizeMap[selectSize.value]
      // }
      // if (props.remote && props.multiple) {
      //   resetInputHeight()
      // }
      // nextTick(() => {
      //   if (reference.value.$el) {
      //     inputWidth.value = reference.value.$el.getBoundingClientRect().width
      //   }
      //   if (ctx.slots.prefix) {
      //     const inputChildNodes = reference.value.$el.childNodes
      //     const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
      //     const prefix = reference.value.$el.querySelector('.el-input__prefix')
      //     prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30)
      //     if (states.prefixWidth) {
      //       input.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`
      //     }
      //   }
      // })
      // setSelected()
    })



    // onBeforeUnmount(() => {
    //   removeResizeListener(selectWrapper.value as any, handleResize)
    // })

    // if (props.multiple && !Array.isArray(props.modelValue)) {
    //   ctx.emit(UPDATE_MODEL_EVENT, [])
    // }
    // if (!props.multiple && Array.isArray(props.modelValue)) {
    //   ctx.emit(UPDATE_MODEL_EVENT, '')
    // }

    // const popperPaneRef = computed(() => {
    //   return popper.value?.popperRef
    // })

    // return {
    //   tagInMultiLine,
    //   prefixWidth,
    //   selectSize,
    //   readonly,
    //   handleResize,
    //   collapseTagSize,
    //   debouncedOnInputChange,
    //   debouncedQueryChange,
    //   deletePrevTag,
    //   deleteTag,
    //   deleteSelected,
    //   handleOptionSelect,
    //   scrollToOption,
    //   inputWidth,
    //   selected,
    //   inputLength,
    //   filteredOptionsCount,
    //   visible,
    //   softFocus,
    //   selectedLabel,
    //   hoverIndex,
    //   query,
    //   inputHovering,
    //   currentPlaceholder,
    //   menuVisibleOnFocus,
    //   isOnComposition,
    //   isSilentBlur,
    //   options,
    //   resetInputHeight,
    //   managePlaceholder,
    //   showClose,
    //   selectDisabled,
    //   iconClass,
    //   showNewOption,
    //   emptyText,
    //   toggleLastOptionHitState,
    //   resetInputState,
    //   handleComposition,
    //   handleMenuEnter,
    //   handleFocus,
    //   blur,
    //   handleBlur,
    //   handleClearClick,
    //   handleClose,
    //   toggleMenu,
    //   selectOption,
    //   getValueKey,
    //   navigateOptions,
    //   dropMenuVisible,
    //   focus,

    //   reference,
    //   input,
    //   popper,
    //   popperPaneRef,
    //   tags,
    //   selectWrapper,
    //   scrollbar,
    // }

    return API
  },
})
</script>
