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
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      effect="light"
      manual-mode
      placement="bottom-start"
      pure
      transition="el-zoom-in-top"
      trigger="click"
      @before-enter="handleMenuEnter"
      @after-leave="states.inputValue = states.displayInputValue"
    >
      <template #trigger>
        <div
          ref="selectionRef"
          class="el-select-v2__wrapper"
          :class="{
            'is-focused': states.isComposing,
            'is-hovering': states.comboBoxHovering,
            'is-filterable': filterable,
            'is-disabled': disabled,
          }"
        >
          <div v-if="$slots.prefix">
            <slot name="prefix"></slot>
          </div>
          <div v-if="multiple" class="el-select-v2__selection">
            <template v-if="collapseTags && modelValue.length > 0">
              <div class="el-select-v2__selected-item">
                <el-tag
                  :closable="!selectDisabled && !states.cachedOptions[0].disable"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, states.cachedOptions[0])"
                >
                  <span
                    class="el-select-v2__tags-text"
                    :style="{ maxWidth: states.inputWidth - 123 + 'px' }"
                  >{{ states.cachedOptions[0].label }}</span>
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
                v-for="(selected, idx) in states.cachedOptions"
                :key="idx"
                class="el-select-v2__selected-item"
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
              class="el-select-v2__selected-item el-select-v2__input-wrapper"
              :style="inputWrapperStyle"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                :autocomplete="autocomplete"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                class="el-select-v2__combobox-input"
                :disabled="disabled"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                @update:modelValue="onUpdateInputValue"
                @click.stop.prevent="handleInputBoxClick"
                @focus="handleFocus"
                @input="onInput"
                @compositionupdate="onCompositionUpdate"
                @compositionend="onInput"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.delete.stop="handleDel"
              >
              <span
                v-if="filterable"
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
              class="el-select-v2__selected-item el-select-v2__input-wrapper"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                :aria-labelledby="label"
                :aria-expanded="expanded"
                autocapitalize="off"
                :autocomplete="autocomplete"
                class="el-select-v2__combobox-input"
                :disabled="disabled"
                :name="name"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :unselectable="expanded ? 'on' : undefined"
                @click.stop.prevent="handleInputBoxClick"
                @compositionend="onInput"
                @compositionupdate="onCompositionUpdate"
                @focus="handleFocus"
                @input="onInput"
                @keydown.esc.stop.prevent="handleEsc"
                @update:modelValue="onUpdateInputValue"
              >
            </div>
            <span
              v-if="filterable"
              ref="calculatorRef"
              aria-hidden="true"
              class="el-select-v2__selected-item el-select-v2__input-calculator"
              v-text="states.displayInputValue"
            >
            </span>
          </template>
          <span
            v-if="shouldShowPlaceholder"
            :class="{
              'el-select-v2__placeholder': true,
              'is-transparent': states.isComposing
                || (
                  placeholder && multiple
                    ? modelValue.length === 0
                    : !modelValue
                ),
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
        </el-select-menu>
      </template>
    </el-popper>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  toRefs,
  reactive,
  vModelText,
} from 'vue'
import ElTag from '@element-plus/tag'
import ElPopper from '@element-plus/popper'
import ElSelectMenu from './select-dropdown.vue'
import { ClickOutside } from '@element-plus/directives'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import useSelect from './useSelect'
import { selectKey } from './token'
import { SelectProps } from './defaults'

export default defineComponent({
  name: 'ElSelectV2',
  components: {
    ElSelectMenu,
    ElTag,
    ElPopper,
  },
  directives: { ClickOutside, ModelText: vModelText },
  props: SelectProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],

  setup(props, { emit }) {
    const API = useSelect(props, emit)
    provide(selectKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
      }),
      onSelect: API.onSelect,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect,
    })

    return API
  },
})
</script>
