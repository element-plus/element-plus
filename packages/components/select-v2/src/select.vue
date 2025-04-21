<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[nsSelect.b(), nsSelect.m(selectSize)]"
    @mouseenter="states.inputHovering = true"
    @mouseleave="states.inputHovering = false"
  >
    <el-tooltip
      ref="tooltipRef"
      :visible="dropdownMenuVisible"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="fallbackPlacements"
      :effect="effect"
      :placement="placement"
      pure
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      trigger="click"
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
                multiple && !$slots.prefix && !!modelValue.length
              ),
            ]"
          >
            <slot v-if="multiple" name="tag">
              <div
                v-for="item in showTagList"
                :key="getValueKey(getValue(item))"
                :class="nsSelect.e('selected-item')"
              >
                <el-tag
                  :closable="!selectDisabled && !getDisabled(item)"
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
                      :label="getLabel(item)"
                      :value="getValue(item)"
                    >
                      {{ getLabel(item) }}
                    </slot>
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
                  <div
                    ref="collapseItemRef"
                    :class="nsSelect.e('selected-item')"
                  >
                    <el-tag
                      :closable="false"
                      :size="collapseTagSize"
                      :type="tagType"
                      :effect="tagEffect"
                      :style="collapseTagStyle"
                      disable-transitions
                    >
                      <span :class="nsSelect.e('tags-text')">
                        + {{ modelValue.length - maxCollapseTags }}
                      </span>
                    </el-tag>
                  </div>
                </template>
                <template #content>
                  <div ref="tagMenuRef" :class="nsSelect.e('selection')">
                    <div
                      v-for="selected in collapseTagList"
                      :key="getValueKey(getValue(selected))"
                      :class="nsSelect.e('selected-item')"
                    >
                      <el-tag
                        class="in-tooltip"
                        :closable="!selectDisabled && !getDisabled(selected)"
                        :size="collapseTagSize"
                        :type="tagType"
                        :effect="tagEffect"
                        disable-transitions
                        @close="deleteTag($event, selected)"
                      >
                        <span :class="nsSelect.e('tags-text')">
                          <slot
                            name="label"
                            :label="getLabel(selected)"
                            :value="getValue(selected)"
                          >
                            {{ getLabel(selected) }}
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
                :style="inputStyle"
                :autocomplete="autocomplete"
                :tabindex="tabindex"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                :aria-expanded="expanded"
                :aria-label="ariaLabel"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :name="name"
                @input="onInput"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                @keydown.enter.stop.prevent="onKeyboardSelect"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.delete.stop="handleDel"
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
              v-if="iconComponent"
              v-show="!showClearBtn"
              :class="[nsSelect.e('caret'), nsInput.e('icon'), iconReverse]"
            >
              <component :is="iconComponent" />
            </el-icon>
            <el-icon
              v-if="showClearBtn && clearIcon"
              :class="[
                nsSelect.e('caret'),
                nsInput.e('icon'),
                nsSelect.e('clear'),
              ]"
              @click.prevent.stop="handleClear"
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
        <el-select-menu
          ref="menuRef"
          :data="filteredOptions"
          :width="popperSize"
          :hovering-index="states.hoveringIndex"
          :scrollbar-always-on="scrollbarAlwaysOn"
        >
          <template v-if="$slots.header" #header>
            <div :class="nsSelect.be('dropdown', 'header')">
              <slot name="header" />
            </div>
          </template>
          <template #default="scope">
            <slot v-bind="scope" />
          </template>
          <template v-if="$slots.loading && loading" #loading>
            <div :class="nsSelect.be('dropdown', 'loading')">
              <slot name="loading" />
            </div>
          </template>
          <template v-else-if="loading || filteredOptions.length === 0" #empty>
            <div :class="nsSelect.be('dropdown', 'empty')">
              <slot name="empty">
                <span>{{ emptyText }}</span>
              </slot>
            </div>
          </template>
          <template v-if="$slots.footer" #footer>
            <div :class="nsSelect.be('dropdown', 'footer')">
              <slot name="footer" />
            </div>
          </template>
        </el-select-menu>
      </template>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'
import { isArray } from '@element-plus/utils'
import { ClickOutside } from '@element-plus/directives'
import ElTooltip from '@element-plus/components/tooltip'
import ElTag from '@element-plus/components/tag'
import ElIcon from '@element-plus/components/icon'
import { useCalcInputWidth } from '@element-plus/hooks'
import ElSelectMenu from './select-dropdown'
import useSelect from './useSelect'
import { SelectProps, selectEmits } from './defaults'
import { selectV2InjectionKey } from './token'

export default defineComponent({
  name: 'ElSelectV2',
  components: {
    ElSelectMenu,
    ElTag,
    ElTooltip,
    ElIcon,
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: selectEmits,
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
    const { calculatorRef, inputStyle } = useCalcInputWidth()

    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
        modelValue,
      }),
      expanded: API.expanded,
      tooltipRef: API.tooltipRef,
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect,
    })

    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel
      }
      return API.states.cachedOptions.map((i) => i.label as string)
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
