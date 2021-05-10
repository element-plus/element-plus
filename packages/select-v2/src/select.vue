<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="() => expanded = false"
    :class="[selectSize ? 'el-select-v2--' + selectSize : '']"
    class="el-select-v2"
    @click.stop="toggleMenu"
  >
    <el-popper
      ref="popper"
      v-model:visible="expanded"
      placement="bottom-start"
      :append-to-body="popperAppendToBody"
      :popper-class="`el-select-v2__popper ${popperClass}`"
      manual-mode
      effect="light"
      pure
      trigger="click"
      transition="el-zoom-in-top"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
    >
      <template #trigger>
        <div class="el-select-v2__wrapper" ref="selectionRef">
          <div v-if="$slots.prefix">
            <slot name="prefix" />
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
              <div v-for="selected in modelValue" class="el-select__selected-item">
                <el-tag
                  :closable="!selectDisabled && !selected.disabled"
                  :key="getValueKey(selected)"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, selected)"
                >{{ getLabel(selected) }}</el-tag>
              </div>
            </template>
            <div
              class="el-select-v2__selected-item el-select-v2__input-wrapper"
              :style="inputWrapperStyle"
            >
              <input
                class="el-select-v2__combobox-input"
                ref="inputRef"
                v-model="states.inputValue"
                :autocomplete="autocomplete"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                :disabled="disabled"
                :id="id"
                :readonly="filterable"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                role="combobox"
                spellcheck="false"
                type="text"
                @blur="handleBlur"
                @focus="handleFocus"
                @input="onInput"
              >
              <span
                aria-hidden="true"
                class="el-select-v2__input-calculator"
                ref="calculatorRef"
                v-text="states.inputValue"
              >
              </span>
            </div>
          </div>
          <template v-else>
            <span>
              <input
                class="el-select-v2__combobox-input"
                v-model="states.inputValue"
                ref="inputRef"
                :autocomplete="autocomplete"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                :disabled="disabled"
                :id="id"
                :readonly="filterable"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                role="combobox"
                spellcheck="false"
                type="text"
                @blur="handleBlur"
                @focus="handleFocus"
                @input="onInput"
              >
            </span>
            <span class="el-select-v2__selected-item" :title="modelValue">
              {{ modelValue }}
            </span>
          </template>
          <span v-if="shouldShowPlaceholder" class="el-select-v2__placeholder">
            {{ placeholder }}
          </span>
          <div v-if="$slots.suffix">
            <slot name="suffix" />
          </div>
          <!-- <div ref="controlRef" :aria-expanded="expanded">
            <el-input
              ref="inputRef"
              :id="id"
              v-model="states.selectedLabel"
              type="text"
              :placeholder="states.currentPlaceholder"
              :name="name"
              :autocomplete="autocomplete"
              :size="selectSize"
              :disabled="selectDisabled"
              :readonly="readonly"
              :validate-event="false"
              :class="{ 'is-focus': expanded }"
              :tabindex="(multiple && filterable) ? '-1' : null"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="debouncedOnInputChange"
              @paste="debouncedOnInputChange"
              @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
              @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
              @keydown.enter.stop.prevent="expanded = !expanded"
              @keydown.esc.stop.prevent="expanded = false"
              @keydown.tab="expanded = false"
              @mouseenter="states.inputHovering = true"
              @mouseleave="states.inputHovering = false"
            />
          </div> -->
        </div>

        <!-- <div class="select-trigger">
          <div
            v-if="multiple"
            ref="tags"
            class="el-select__tags"
            :style="{ maxWidth: inputWidth - 32 + 'px', width: '100%' }"
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
                <span
                  class="el-select__tags-text"
                  :style="{ maxWidth: inputWidth - 123 + 'px' }"
                >{{ selected[0].currentLabel }}</span>
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
            <transition v-if="!collapseTags" @after-leave="resetInputHeight">
              <span
                :style="{ marginLeft: prefixWidth && selected.length ? `${prefixWidth}px` : null }"
              >
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
                  <span
                    class="el-select__tags-text"
                    :style="{ maxWidth: inputWidth - 75 + 'px' }"
                  >{{ item.currentLabel }}</span>
                </el-tag>
              </span>
            </transition>
            <input
              v-if="filterable"
              ref="input"
              v-model="query"
              type="text"
              class="el-select__input"
              :class="[selectSize ? `is-${selectSize}` : '']"
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
              <i
                v-show="!showClose"
                :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"
              ></i>
              <i
                v-if="showClose"
                :class="`el-select__caret el-input__icon ${clearIcon}`"
                @click="handleClearClick"
              ></i>
            </template>
          </el-input>
        </div>-->
      </template>
      <template #default>
        <el-select-menu
          ref="menuRef"
          :data="filteredOptions"
          :width="200"
          :hovering-index="states.hoveringIndex"
        >
          <template #default="scope">
            <slot v-bind="scope"></slot>
          </template>
          <template #empty>
            <slot name="empty">
              <p class="el-select-v2-dropdown__empty">{{ emptyText }}</p>
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
    ElInput,
    ElSelectMenu,
    // ElTag,
    ElPopper,
  },
  directives: { ClickOutside },
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
