<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[nsSelect.b(), nsSelect.m(selectSize)]"
    @[mouseEnterEventName]="states.inputHovering = true"
    @mouseleave="states.inputHovering = false"
  >
    <el-tooltip
      ref="tooltipRef"
      :visible="dropdownMenuVisible"
      :placement="placement"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :popper-options="popperOptions"
      :fallback-placements="fallbackPlacements"
      :effect="effect"
      pure
      trigger="click"
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :persistent="persistent"
      :append-to="appendTo"
      :show-arrow="showArrow"
      :offset="offset"
      @before-show="handleMenuEnter"
      @hide="states.isBeforeHide = false"
    >
      <template #default>
        <div
          ref="wrapperRef"
          :class="[
            nsSelect.e('wrapper'),
            nsSelect.is('focused', isFocused),
            nsSelect.is('hovering', states.inputHovering),
            nsSelect.is('filterable', filterable),
            nsSelect.is('disabled', selectDisabled),
          ]"
          @click.prevent="toggleMenu"
        >
          <div
            v-if="$slots.prefix"
            ref="prefixRef"
            :class="nsSelect.e('prefix')"
          >
            <slot name="prefix" />
          </div>
          <div
            ref="selectionRef"
            :class="[
              nsSelect.e('selection'),
              nsSelect.is(
                'near',
                multiple && !$slots.prefix && !!states.selected.length
              ),
            ]"
          >
            <slot v-if="multiple" name="tag">
              <div
                v-for="item in showTagList"
                :key="getValueKey(item)"
                :class="nsSelect.e('selected-item')"
              >
                <el-tag
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :type="tagType"
                  :effect="tagEffect"
                  disable-transitions
                  :style="tagStyle"
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')">
                    <slot
                      name="label"
                      :label="item.currentLabel"
                      :value="item.value"
                    >
                      {{ item.currentLabel }}
                    </slot>
                  </span>
                </el-tag>
              </div>

              <el-tooltip
                v-if="collapseTags && states.selected.length > maxCollapseTags"
                ref="tagTooltipRef"
                :disabled="dropdownMenuVisible || !collapseTagsTooltip"
                :fallback-placements="['bottom', 'top', 'right', 'left']"
                :effect="effect"
                placement="bottom"
                :teleported="teleported"
              >
                <template #default>
                  <div
                    ref="collapseItemRef"
                    :class="nsSelect.e('selected-item')"
                  >
                    <el-tag
                      :closable="false"
                      :size="collapseTagSize"
                      :type="tagType"
                      :effect="tagEffect"
                      disable-transitions
                      :style="collapseTagStyle"
                    >
                      <span :class="nsSelect.e('tags-text')">
                        + {{ states.selected.length - maxCollapseTags }}
                      </span>
                    </el-tag>
                  </div>
                </template>
                <template #content>
                  <div ref="tagMenuRef" :class="nsSelect.e('selection')">
                    <div
                      v-for="item in collapseTagList"
                      :key="getValueKey(item)"
                      :class="nsSelect.e('selected-item')"
                    >
                      <el-tag
                        class="in-tooltip"
                        :closable="!selectDisabled && !item.isDisabled"
                        :size="collapseTagSize"
                        :type="tagType"
                        :effect="tagEffect"
                        disable-transitions
                        @close="deleteTag($event, item)"
                      >
                        <span :class="nsSelect.e('tags-text')">
                          <slot
                            name="label"
                            :label="item.currentLabel"
                            :value="item.value"
                          >
                            {{ item.currentLabel }}
                          </slot>
                        </span>
                      </el-tag>
                    </div>
                  </div>
                </template>
              </el-tooltip>
            </slot>
            <div
              :class="[
                nsSelect.e('selected-item'),
                nsSelect.e('input-wrapper'),
                nsSelect.is('hidden', !filterable),
              ]"
            >
              <input
                :id="inputId"
                ref="inputRef"
                v-model="states.inputValue"
                type="text"
                :name="name"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                :autocomplete="autocomplete"
                :style="inputStyle"
                :tabindex="tabindex"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                :aria-activedescendant="hoverOption?.id || ''"
                :aria-controls="contentId"
                :aria-expanded="dropdownMenuVisible"
                :aria-label="ariaLabel"
                aria-autocomplete="none"
                aria-haspopup="listbox"
                @keydown.down.stop.prevent="navigateOptions('next')"
                @keydown.up.stop.prevent="navigateOptions('prev')"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.enter.stop.prevent="selectOption"
                @keydown.delete.stop="deletePrevTag"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @input="onInput"
                @click.stop="toggleMenu"
              />
              <span
                v-if="filterable"
                ref="calculatorRef"
                aria-hidden="true"
                :class="nsSelect.e('input-calculator')"
                v-text="states.inputValue"
              />
            </div>
            <div
              v-if="shouldShowPlaceholder"
              :class="[
                nsSelect.e('selected-item'),
                nsSelect.e('placeholder'),
                nsSelect.is(
                  'transparent',
                  !hasModelValue || (expanded && !states.inputValue)
                ),
              ]"
            >
              <slot
                v-if="hasModelValue"
                name="label"
                :label="currentPlaceholder"
                :value="modelValue"
              >
                <span>{{ currentPlaceholder }}</span>
              </slot>
              <span v-else>{{ currentPlaceholder }}</span>
            </div>
          </div>
          <div ref="suffixRef" :class="nsSelect.e('suffix')">
            <el-icon
              v-if="iconComponent && !showClose"
              :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]"
            >
              <component :is="iconComponent" />
            </el-icon>
            <el-icon
              v-if="showClose && clearIcon"
              :class="[
                nsSelect.e('caret'),
                nsSelect.e('icon'),
                nsSelect.e('clear'),
              ]"
              @click="handleClearClick"
            >
              <component :is="clearIcon" />
            </el-icon>
            <el-icon
              v-if="validateState && validateIcon && needStatusIcon"
              :class="[
                nsInput.e('icon'),
                nsInput.e('validateIcon'),
                nsInput.is('loading', validateState === 'validating'),
              ]"
            >
              <component :is="validateIcon" />
            </el-icon>
          </div>
        </div>
      </template>
      <template #content>
        <el-select-menu ref="menuRef">
          <div
            v-if="$slots.header"
            :class="nsSelect.be('dropdown', 'header')"
            @click.stop
          >
            <slot name="header" />
          </div>
          <el-scrollbar
            v-show="states.options.size > 0 && !loading"
            :id="contentId"
            ref="scrollbarRef"
            tag="ul"
            :wrap-class="nsSelect.be('dropdown', 'wrap')"
            :view-class="nsSelect.be('dropdown', 'list')"
            :class="[nsSelect.is('empty', filteredOptionsCount === 0)]"
            role="listbox"
            :aria-label="ariaLabel"
            aria-orientation="vertical"
            @scroll="popupScroll"
          >
            <el-option
              v-if="showNewOption"
              :value="states.inputValue"
              :created="true"
            />
            <el-options>
              <slot />
            </el-options>
          </el-scrollbar>
          <div
            v-if="$slots.loading && loading"
            :class="nsSelect.be('dropdown', 'loading')"
          >
            <slot name="loading" />
          </div>
          <div
            v-else-if="loading || filteredOptionsCount === 0"
            :class="nsSelect.be('dropdown', 'empty')"
          >
            <slot name="empty">
              <span>{{ emptyText }}</span>
            </slot>
          </div>
          <div
            v-if="$slots.footer"
            :class="nsSelect.be('dropdown', 'footer')"
            @click.stop
          >
            <slot name="footer" />
          </div>
        </el-select-menu>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElTooltip from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isArray } from '@element-plus/utils'
import { useCalcInputWidth } from '@element-plus/hooks'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import { useSelect } from './useSelect'
import { selectKey } from './token'
import ElOptions from './options'

import { SelectProps } from './select'
import type { SelectContext } from './token'

const COMPONENT_NAME = 'ElSelect'
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElSelectMenu,
    ElOption,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon,
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
    'popup-scroll',
  ],

  setup(props, { emit }) {
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props
      const fallback = multiple ? [] : undefined
      // When it is array, we check if this is multi-select.
      // Based on the result we get
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback
      }

      return multiple ? fallback : rawModelValue
    })

    const _props = reactive({
      ...toRefs(props),
      modelValue,
    })

    const API = useSelect(_props, emit)
    const { calculatorRef, inputStyle } = useCalcInputWidth()

    provide(
      selectKey,
      reactive({
        props: _props,
        states: API.states,
        optionsArray: API.optionsArray,
        handleOptionSelect: API.handleOptionSelect,
        onOptionCreate: API.onOptionCreate,
        onOptionDestroy: API.onOptionDestroy,
        selectRef: API.selectRef,
        setSelected: API.setSelected,
      }) as unknown as SelectContext
    )

    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel
      }
      return API.states.selected.map((i: any) => i.currentLabel as string)
    })

    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle,
    }
  },
})
</script>
