<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[nsSelectV2.b(), nsSelectV2.m(selectSize)]"
    @click.stop="toggleMenu"
    @mouseenter="states.comboBoxHovering = true"
    @mouseleave="states.comboBoxHovering = false"
  >
    <el-tooltip
      ref="popper"
      v-model:visible="dropdownMenuVisible"
      :teleported="teleported"
      :popper-class="[nsSelectV2.e('popper'), popperClass]"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="effect"
      placement="bottom-start"
      pure
      :transition="`${nsSelectV2.namespace.value}-zoom-in-top`"
      trigger="click"
      :persistent="persistent"
      @before-show="handleMenuEnter"
      @hide="states.inputValue = states.displayInputValue"
    >
      <template #default>
        <div
          ref="selectionRef"
          :class="[
            nsSelectV2.e('wrapper'),
            nsSelectV2.is('focused', states.isComposing),
            nsSelectV2.is('hovering', states.comboBoxHovering),
            nsSelectV2.is('filterable', filterable),
            nsSelectV2.is('disabled', selectDisabled),
          ]"
        >
          <div v-if="$slots.prefix">
            <slot name="prefix" />
          </div>
          <div v-if="multiple" :class="nsSelectV2.e('selection')">
            <template v-if="collapseTags && modelValue.length > 0">
              <div :class="nsSelectV2.e('selected-item')">
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
                    :class="nsSelectV2.e('tags-text')"
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
                  <el-tooltip
                    v-if="collapseTagsTooltip"
                    :disabled="dropdownMenuVisible"
                    :fallback-placements="['bottom', 'top', 'right', 'left']"
                    :effect="effect"
                    placement="bottom"
                    :teleported="false"
                  >
                    <template #default>
                      <span
                        :class="nsSelectV2.e('tags-text')"
                        :style="{
                          maxWidth: `${tagMaxWidth}px`,
                        }"
                        >+ {{ modelValue.length - 1 }}</span
                      >
                    </template>
                    <template #content>
                      <div :class="nsSelectV2.e('selection')">
                        <div
                          v-for="(selected, idx) in states.cachedOptions.slice(
                            1
                          )"
                          :key="idx"
                          :class="nsSelectV2.e('selected-item')"
                        >
                          <el-tag
                            :key="getValueKey(selected)"
                            :closable="!selectDisabled && !selected.disabled"
                            :size="collapseTagSize"
                            class="in-tooltip"
                            type="info"
                            disable-transitions
                            @close="deleteTag($event, selected)"
                          >
                            <span
                              :class="nsSelectV2.e('tags-text')"
                              :style="{
                                maxWidth: `${tagMaxWidth}px`,
                              }"
                              >{{ getLabel(selected) }}</span
                            >
                          </el-tag>
                        </div>
                      </div>
                    </template>
                  </el-tooltip>
                  <span
                    v-else
                    :class="nsSelectV2.e('tags-text')"
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
                :class="nsSelectV2.e('selected-item')"
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
                    :class="nsSelectV2.e('tags-text')"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`,
                    }"
                    >{{ getLabel(selected) }}</span
                  >
                </el-tag>
              </div>
            </template>
            <div
              :class="[
                nsSelectV2.e('selected-item'),
                nsSelectV2.e('input-wrapper'),
              ]"
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
                  nsSelectV2.is(selectSize),
                  nsSelectV2.e('combobox-input'),
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
                :class="nsSelectV2.e('input-calculator')"
                v-text="states.displayInputValue"
              />
            </div>
          </div>
          <template v-else>
            <div
              :class="[
                nsSelectV2.e('selected-item'),
                nsSelectV2.e('input-wrapper'),
              ]"
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
                :class="nsSelectV2.e('combobox-input')"
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
              :class="[
                nsSelectV2.e('selected-item'),
                nsSelectV2.e('input-calculator'),
              ]"
              v-text="states.displayInputValue"
            />
          </template>
          <span
            v-if="shouldShowPlaceholder"
            :class="[
              nsSelectV2.e('placeholder'),
              nsSelectV2.is(
                'transparent',
                states.isComposing ||
                  (placeholder && multiple
                    ? modelValue.length === 0
                    : !hasModelValue)
              ),
            ]"
          >
            {{ currentPlaceholder }}
          </span>
          <span :class="nsSelectV2.e('suffix')">
            <el-icon
              v-if="iconComponent"
              v-show="!showClearBtn"
              :class="[nsSelectV2.e('caret'), nsInput.e('icon'), iconReverse]"
            >
              <component :is="iconComponent" />
            </el-icon>
            <el-icon
              v-if="showClearBtn && clearIcon"
              :class="[nsSelectV2.e('caret'), nsInput.e('icon')]"
              @click.prevent.stop="handleClear"
            >
              <component :is="clearIcon" />
            </el-icon>
            <el-icon
              v-if="validateState && validateIcon"
              :class="[nsInput.e('icon'), nsInput.e('validateIcon')]"
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
            <slot v-bind="scope" />
          </template>
          <template #empty>
            <slot name="empty">
              <p :class="nsSelectV2.e('empty')">
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
import { defineComponent, provide, reactive, toRefs, vModelText } from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElTooltip from '@element-plus/components/tooltip'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElSelectMenu from './select-dropdown'
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
