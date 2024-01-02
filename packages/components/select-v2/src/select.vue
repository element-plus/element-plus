<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[nsSelect.b(), nsSelect.m(selectSize)]"
    @click.stop="toggleMenu"
    @mouseenter="states.comboBoxHovering = true"
    @mouseleave="states.comboBoxHovering = false"
  >
    <el-tooltip
      ref="tooltipRef"
      :visible="dropdownMenuVisible"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="effect"
      :placement="placement"
      pure
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      trigger="click"
      :persistent="persistent"
      @before-show="handleMenuEnter"
    >
      <template #default>
        <div
          ref="wrapperRef"
          :class="[
            nsSelect.e('wrapper'),
            nsSelect.is('focused', isFocused),
            nsSelect.is('hovering', states.comboBoxHovering),
            nsSelect.is('filterable', filterable),
            nsSelect.is('disabled', selectDisabled),
          ]"
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
                multiple && !$slots.prefix && !!modelValue.length
              ),
            ]"
          >
            <template v-if="multiple">
              <div
                v-for="item in showTagList"
                :key="getValueKey(getValue(item))"
                :class="nsSelect.e('selected-item')"
              >
                <el-tag
                  :closable="!selectDisabled && !getDisabled(item)"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  :style="tagStyle"
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')">
                    {{ getLabel(item) }}
                  </span>
                </el-tag>
              </div>

              <el-tooltip
                v-if="collapseTags && modelValue.length > maxCollapseTags"
                ref="tagTooltipRef"
                :disabled="dropdownMenuVisible || !collapseTagsTooltip"
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
                      type="info"
                      :style="tagStyle"
                      disable-transitions
                    >
                      <span :class="nsSelect.e('tags-text')">
                        + {{ modelValue.length - maxCollapseTags }}
                      </span>
                    </el-tag>
                  </div>
                </template>
                <template #content>
                  <div :class="nsSelect.e('selection')">
                    <div
                      v-for="selected in collapseTagList"
                      :key="getValueKey(getValue(selected))"
                      :class="nsSelect.e('selected-item')"
                    >
                      <el-tag
                        :closable="!selectDisabled && !getDisabled(selected)"
                        :size="collapseTagSize"
                        class="in-tooltip"
                        type="info"
                        disable-transitions
                        @close="deleteTag($event, selected)"
                      >
                        <span :class="nsSelect.e('tags-text')">
                          {{ getLabel(selected) }}
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
                v-model-text="states.inputValue"
                :style="inputStyle"
                :autocomplete="autocomplete"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                @update:modelValue="onUpdateInputValue"
                @focus="handleFocus"
                @blur="handleBlur"
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
                :class="nsSelect.e('input-calculator')"
                v-text="states.inputValue"
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
              v-if="iconComponent"
              v-show="!showClearBtn"
              :class="[nsSelect.e('caret'), nsInput.e('icon'), iconReverse]"
            >
              <component :is="iconComponent" />
            </el-icon>
            <el-icon
              v-if="showClearBtn && clearIcon"
              :class="[nsSelect.e('caret'), nsInput.e('icon')]"
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
          </div>
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
              <p :class="nsSelect.be('dropdown', 'empty')">
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
import {
  computed,
  defineComponent,
  provide,
  reactive,
  toRefs,
  vModelText,
} from 'vue'
import { isArray } from '@element-plus/utils'
import { ClickOutside } from '@element-plus/directives'
import ElTooltip from '@element-plus/components/tooltip'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElSelectMenu from './select-dropdown'
import useSelect from './useSelect'
import { SelectProps } from './defaults'
import { selectV2InjectionKey } from './token'
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

    const API = useSelect(
      reactive({
        ...toRefs(props),
        modelValue,
      }),
      emit
    )
    // TODO, remove the any cast to align the actual API.
    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
        modelValue,
      }),
      tooltipRef: API.tooltipRef,
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect,
    } as any)

    return {
      ...API,
      modelValue,
    }
  },
})
</script>
