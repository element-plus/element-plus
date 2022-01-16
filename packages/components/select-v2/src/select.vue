<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[
      selectSize ? `${selectV2prefixClass}--` + selectSize : '',
      selectV2prefixClass,
    ]"
    @click.stop="toggleMenu"
    @mouseenter="states.comboBoxHovering = true"
    @mouseleave="states.comboBoxHovering = false"
  >
    <el-tooltip
      ref="popper"
      v-model:visible="dropdownMenuVisible"
      :append-to-body="popperAppendToBody"
      :popper-class="`${selectV2prefixClass}__popper ${popperClass}`"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      effect="light"
      placement="bottom-start"
      pure
      :transition="zoomInTopPrefixClass"
      trigger="click"
      persistent
      @show="handleMenuEnter"
      @hide="states.inputValue = states.displayInputValue"
    >
      <template #default>
        <div
          ref="selectionRef"
          :class="{
            [`${selectV2prefixClass}__wrapper`]: true,
            'is-focused': states.isComposing,
            'is-hovering': states.comboBoxHovering,
            'is-filterable': filterable,
            'is-disabled': disabled,
          }"
        >
          <div v-if="$slots.prefix">
            <slot name="prefix"></slot>
          </div>
          <div v-if="multiple" :class="`${selectV2prefixClass}__selection`">
            <template v-if="collapseTags && modelValue.length > 0">
              <div :class="`${selectV2prefixClass}__selected-item`">
                <el-tag
                  :closable="
                    !selectDisabled && !states.cachedOptions[0]?.disable
                  "
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, states.cachedOptions[0])"
                >
                  <span
                    :class="`${selectV2prefixClass}__tags-text`"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >{{ states.cachedOptions[0]?.label }}</span
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
                    :class="`${selectV2prefixClass}__tags-text`"
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
                :class="`${selectV2prefixClass}__selected-item`"
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
                    :class="`${selectV2prefixClass}__tags-text`"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >{{ getLabel(selected) }}</span
                  >
                </el-tag>
              </div>
            </template>
            <div
              :class="`${selectV2prefixClass}__selected-item ${selectV2prefixClass}__input-wrapper`"
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
                :class="[
                  selectSize ? `is-${selectSize}` : '',
                  `${selectV2prefixClass}__combobox-input`,
                ]"
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
                :class="`${selectV2prefixClass}__input-calculator`"
                v-text="states.displayInputValue"
              >
              </span>
            </div>
          </div>
          <template v-else>
            <div
              :class="`${selectV2prefixClass}__selected-item ${selectV2prefixClass}__input-wrapper`"
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
                :class="`${selectV2prefixClass}__combobox-input`"
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
              :class="`${selectV2prefixClass}__selected-item ${selectV2prefixClass}__input-calculator`"
              v-text="states.displayInputValue"
            >
            </span>
          </template>
          <span
            v-if="shouldShowPlaceholder"
            :class="{
              [`${selectV2prefixClass}__placeholder`]: true,
              'is-transparent':
                states.isComposing ||
                (placeholder && multiple
                  ? modelValue.length === 0
                  : !hasModelValue),
            }"
          >
            {{ currentPlaceholder }}
          </span>
          <span :class="`${selectV2prefixClass}__suffix`">
            <el-icon
              v-if="iconComponent"
              v-show="!showClearBtn"
              :class="[
                `${selectV2prefixClass}__caret`,
                `${inputPrefixClass}__icon`,
                iconReverse,
              ]"
            >
              <component :is="iconComponent" />
            </el-icon>
            <el-icon
              v-if="showClearBtn && clearIcon"
              :class="`${selectV2prefixClass}__caret ${inputPrefixClass}__icon`"
              @click.prevent.stop="handleClear"
            >
              <component :is="clearIcon" />
            </el-icon>
            <el-icon
              v-if="validateState && validateIcon"
              :class="`${inputPrefixClass}__icon ${inputPrefixClass}__validateIcon`"
            >
              <component :is="validateIcon" />
            </el-icon>
          </span>
        </div>
      </template>
      <template #content>
        <el-select-menu
          ref="menuRef"
          :data="filteredOptions"
          :width="popperSize"
          :hovering-index="states.hoveringIndex"
          :scrollbar-always-on="scrollbarAlwaysOn"
        >
          <template #default="scope">
            <slot v-bind="scope"></slot>
          </template>
          <template #empty>
            <slot name="empty">
              <p :class="`${selectV2prefixClass}__empty`">
                {{ emptyText ? emptyText : '' }}
              </p>
            </slot>
          </template>
        </el-select-menu>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, toRefs, reactive, vModelText } from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElTooltip from '@element-plus/components/tooltip'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import { usePrefixClass } from '@element-plus/hooks'
import ElSelectMenu from './select-dropdown.vue'
import useSelect from './useSelect'
import { selectV2InjectionKey } from './token'
import { SelectProps } from './defaults'

export default defineComponent({
  name: 'ElSelectV2',
  components: {
    ElSelectMenu,
    ElTag,
    ElTooltip,
    ElIcon,
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
    const selectV2prefixClass = usePrefixClass('select-v2')
    const zoomInTopPrefixClass = usePrefixClass('zoom-in-top')
    const inputPrefixClass = usePrefixClass('input')
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

    return {
      ...API,
      selectV2prefixClass,
      zoomInTopPrefixClass,
      inputPrefixClass,
    }
  },
})
</script>
