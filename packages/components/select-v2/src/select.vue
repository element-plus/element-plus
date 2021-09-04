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
      v-model:visible="dropdownMenuVisible"
      :append-to-body="popperAppendToBody"
      :popper-class="`el-select-v2__popper ${popperClass}`"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="Effect.LIGHT"
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
                  :closable="
                    !selectDisabled && !states.cachedOptions[0].disable
                  "
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, states.cachedOptions[0])"
                >
                  <span
                    class="el-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >{{ states.cachedOptions[0].label }}</span
                  >
                </el-tag>
                <el-tag
                  v-if="modelValue.length > 1"
                  :closable="false"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                >
                  <span
                    class="el-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >+ {{ modelValue.length - 1 }}</span
                  >
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
                  <span
                    class="el-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >{{ getLabel(selected) }}</span
                  >
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
                :class="[selectSize ? `is-${selectSize}` : '']"
                :disabled="disabled"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                @update:modelValue="onUpdateInputValue"
                @focus="handleFocus"
                @input="onInput"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                @keydown.enter.stop.prevent="onKeyboardSelect"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.delete.stop="handleDel"
              />
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
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @focus="handleFocus"
                @input="onInput"
                @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                @keydown.enter.stop.prevent="onKeyboardSelect"
                @keydown.esc.stop.prevent="handleEsc"
                @update:modelValue="onUpdateInputValue"
              />
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
              'is-transparent':
                states.isComposing ||
                (placeholder && multiple
                  ? modelValue.length === 0
                  : !modelValue),
            }"
          >
            {{ currentPlaceholder }}
          </span>
          <span class="el-select-v2__suffix">
            <i
              v-show="!showClearBtn"
              :class="[
                'el-select-v2__caret',
                'el-input__icon',
                'el-icon-' + iconClass,
              ]"
            ></i>
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
              <p class="el-select-v2__empty">
                {{ emptyText ? emptyText : '' }}
              </p>
            </slot>
          </template>
        </el-select-menu>
      </template>
    </el-popper>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, toRefs, reactive, vModelText } from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElPopper from '@element-plus/components/popper'
import ElTag from '@element-plus/components/tag'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import ElSelectMenu from './select-dropdown.vue'
import useSelect from './useSelect'
import { selectV2InjectionKey } from './token'
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
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
  ],

  setup(props, { emit }) {
    const API = useSelect(props, emit)
    // TODO, remove the any cast to align the actual API.
    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
      }),
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect,
    } as any)

    return API
  },
})
</script>
