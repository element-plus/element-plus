<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClose"
    :class="[nsSelect.b(), nsSelect.m(selectSize)]"
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
          ref="wrapperRef"
          :class="[
            nsSelect.e('wrapper'),
            nsSelect.is('focused', states.isComposing || states.visible),
            nsSelect.is('hovering', states.inputHovering),
            nsSelect.is('filterable', filterable),
            nsSelect.is('disabled', selectDisabled),
          ]"
          @mouseenter="states.inputHovering = true"
          @mouseleave="states.inputHovering = false"
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
            tabindex="-1"
            :class="[
              nsSelect.e('selection'),
              nsSelect.is(
                'near',
                multiple && !$slots.prefix && !!states.selected.length
              ),
            ]"
          >
            <template v-if="multiple">
              <div
                v-for="item in showTagList"
                :key="getValueKey(item)"
                :class="nsSelect.e('selected-item')"
              >
                <el-tag
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :hit="item.hitState"
                  :type="tagType"
                  disable-transitions
                  :style="tagStyle"
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')">
                    {{ item.currentLabel }}
                  </span>
                </el-tag>
              </div>

              <el-tooltip
                v-if="collapseTags && states.selected.length > maxCollapseTags"
                ref="tagTooltipRef"
                :disabled="dropMenuVisible || !collapseTagsTooltip"
                :fallback-placements="['bottom', 'top', 'right', 'left']"
                :effect="effect"
                placement="bottom"
                :teleported="teleported"
              >
                <template #default>
                  <div :class="nsSelect.e('selected-item')">
                    <el-tag
                      :closable="false"
                      :size="collapseTagSize"
                      :type="tagType"
                      disable-transitions
                      :style="tagStyle"
                    >
                      <span :class="nsSelect.e('tags-text')">
                        + {{ states.selected.length - maxCollapseTags }}
                      </span>
                    </el-tag>
                  </div>
                </template>
                <template #content>
                  <div :class="nsSelect.e('selection')">
                    <div
                      v-for="item in collapseTagList"
                      :key="getValueKey(item)"
                      :class="nsSelect.e('selected-item')"
                    >
                      <el-tag
                        class="in-tooltip"
                        :closable="!selectDisabled && !item.isDisabled"
                        :size="collapseTagSize"
                        :hit="item.hitState"
                        :type="tagType"
                        disable-transitions
                        @close="handleDeleteTooltipTag($event, item)"
                      >
                        <span :class="nsSelect.e('tags-text')">
                          {{ item.currentLabel }}
                        </span>
                      </el-tag>
                    </div>
                  </div>
                </template>
              </el-tooltip>
            </template>
            <div
              v-if="!selectDisabled"
              :class="[
                nsSelect.e('selected-item'),
                nsSelect.e('input-wrapper'),
              ]"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model="states.query"
                type="text"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                :autocomplete="autocomplete"
                :style="inputStyle"
                role="combobox"
                :aria-activedescendant="hoverOption?.id || ''"
                :aria-controls="contentId"
                :aria-expanded="dropMenuVisible"
                :aria-label="ariaLabel"
                aria-autocomplete="none"
                aria-haspopup="listbox"
                @focus="handleFocus"
                @blur="handleBlur"
                @keydown="resetInputState"
                @keydown.down.prevent="navigateOptions('next')"
                @keydown.up.prevent="navigateOptions('prev')"
                @keydown.esc="handleKeydownEscape"
                @keydown.enter.stop.prevent="selectOption"
                @keydown.delete="deletePrevTag"
                @keydown.tab="states.visible = false"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="debouncedQueryChange"
              />
              <span
                v-if="filterable"
                ref="calculatorRef"
                aria-hidden="true"
                :class="nsSelect.e('input-calculator')"
                v-text="states.query"
              />
            </div>
          </div>
          <div
            v-if="shouldShowPlaceholder"
            :style="placeholderStyle"
            :class="[
              nsSelect.e('placeholder'),
              nsSelect.is('transparent', !hasModelValue),
            ]"
          >
            <span>{{ currentPlaceholder }}</span>
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
              :class="[nsSelect.e('caret'), nsSelect.e('icon')]"
              @click="handleClearClick"
            >
              <component :is="clearIcon" />
            </el-icon>
            <el-icon
              v-if="validateState && validateIcon"
              :class="[nsInput.e('icon'), nsInput.e('validateIcon')]"
            >
              <component :is="validateIcon" />
            </el-icon>
          </div>
        </div>
      </template>
      <template #content>
        <el-select-menu>
          <template v-if="$slots.header" #header>
            <slot name="header" />
          </template>
          <el-scrollbar
            v-show="states.options.size > 0 && !loading"
            :id="contentId"
            ref="scrollbar"
            tag="ul"
            :wrap-class="nsSelect.be('dropdown', 'wrap')"
            :view-class="nsSelect.be('dropdown', 'list')"
            :class="[
              nsSelect.is(
                'empty',
                !allowCreate &&
                  Boolean(states.query) &&
                  states.filteredOptionsCount === 0
              ),
            ]"
            role="listbox"
            :aria-label="ariaLabel"
            aria-orientation="vertical"
          >
            <el-option
              v-if="showNewOption"
              :value="states.query"
              :created="true"
            />
            <el-options @update-options="onOptionsRendered">
              <slot />
            </el-options>
          </el-scrollbar>
          <template
            v-if="
              emptyText &&
              (!allowCreate ||
                loading ||
                (allowCreate && states.options.size === 0))
            "
          >
            <slot v-if="$slots.empty" name="empty" />
            <p v-else :class="nsSelect.be('dropdown', 'empty')">
              {{ emptyText }}
            </p>
          </template>
          <template v-if="$slots.footer" #footer>
            <slot name="footer" />
          </template>
        </el-select-menu>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent, provide, reactive } from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElInput from '@element-plus/components/input'
import ElTooltip from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
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

  setup(props, ctx) {
    const API = useSelect(props, ctx)

    provide(
      selectKey,
      reactive({
        props,
        options: API.states.options,
        optionsArray: API.optionsArray,
        cachedOptions: API.states.cachedOptions,
        optionsCount: API.states.optionsCount,
        filteredOptionsCount: API.states.filteredOptionsCount,
        hoverIndex: API.states.hoverIndex,
        handleOptionSelect: API.handleOptionSelect,
        onOptionCreate: API.onOptionCreate,
        onOptionDestroy: API.onOptionDestroy,
        selectRef: API.selectRef,
        selected: API.states.selected,
        setSelected: API.setSelected,
        queryChange: API.queryChange,
        groupQueryChange: API.groupQueryChange,
      }) as unknown as SelectContext
    )

    return {
      ...API,
    }
  },
})
</script>
