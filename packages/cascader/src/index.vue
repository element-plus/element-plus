<template>
  <div
    ref="reference"
    v-clickoutside="() => toggleDropDownVisible(false)"
    :class="[
      'el-cascader',
      realSize && `el-cascader--${realSize}`,
      { 'is-disabled': isDisabled },
    ]"
    @mouseenter="inputHover = true"
    @mouseleave="inputHover = false"
    @click="() => toggleDropDownVisible(readonly ? undefined : true)"
    @keydown="handleKeyDown"
  >
    <el-input
      ref="input"
      :v-model="multiple ? presentText : inputValue"
      :size="realSize"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="isDisabled"
      :validate-event="false"
      :class="{ 'is-focus': dropDownVisible }"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    >
      <template #suffix>
        <i
          v-if="clearBtnVisible"
          key="clear"
          class="el-input__icon el-icon-circle-close"
          @click.stop="handleClear"
        ></i>
        <i
          v-else
          key="arrow-down"
          :class="[
            'el-input__icon',
            'el-icon-arrow-down',
            dropDownVisible && 'is-reverse',
          ]"
          @click.stop="toggleDropDownVisible()"
        ></i>
      </template>
    </el-input>

    <div v-if="multiple" class="el-cascader__tags">
      <el-tag
        v-for="(tag, index) in presentTags"
        :key="tag.key"
        type="info"
        :size="tagSize"
        :hit="tag.hitState"
        :closable="tag.closable"
        disable-transitions
        @close="deleteTag(index)"
      >
        <span>{{ tag.text }}</span>
      </el-tag>
      <input
        v-if="filterable && !isDisabled"
        v-model.trim="inputValue"
        type="text"
        class="el-cascader__search-input"
        :placeholder="presentTags.length ? '' : placeholder"
        @input="(e) => handleInput(inputValue, e)"
        @click.stop="toggleDropDownVisible(true)"
        @keydown.delete="handleDelete"
      >
    </div>

    <transition name="el-zoom-in-top" @after-leave="handleDropdownLeave">
      <div
        v-show="dropDownVisible"
        ref="popper"
        :class="['el-popper', 'el-cascader__dropdown', popperClass]"
      >
        <el-cascader-panel
          v-show="!filtering"
          ref="panel"
          v-model="checkedValue"
          :options="options"
          :props="config"
          :border="false"
          :render-label="$slots.default"
          @expand-change="handleExpandChange"
          @close="toggleDropDownVisible(false)"
        />
        <el-scrollbar
          v-if="filterable"
          v-show="filtering"
          ref="suggestionPanel"
          tag="ul"
          class="el-cascader__suggestion-panel"
          view-class="el-cascader__suggestion-list"
          @keydown="handleSuggestionKeyDown"
        >
          <template v-if="suggestions.length">
            <li
              v-for="(item, index) in suggestions"
              :key="item.uid"
              :class="[
                'el-cascader__suggestion-item',
                item.checked && 'is-checked',
              ]"
              :tabindex="-1"
              @click="handleSuggestionClick(index)"
            >
              <span>{{ item.text }}</span>
              <i v-if="item.checked" class="el-icon-check"></i>
            </li>
          </template>
          <slot v-else name="empty">
            <li class="el-cascader__empty-text">
              {{ t('el.cascader.noMatch') }}
            </li>
          </slot>
        </el-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Popper } from '@element-plus/popper'
import { ClickOutside } from '@element-plus/directives'
import { EVENT_CODE } from '@element-plus/utils/aria'
import ElInput from '@element-plus/input'
import ElTag from '@element-plus/tag'
import ElScrollbar from '@element-plus/scrollbar'
import ElCascaderPanel from '@element-plus/cascader-panel'
import { t } from '@element-plus/locale'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import isUndefined from 'lodash/isUndefined'
import isFunction from 'lodash/isFunction'
import { kebabCase } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'
import isDef from '@element-plus/utils/isDef'
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import debounce from 'lodash/debounce'
import {
  defineComponent,
  ref,
  inject,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { COMMENT } from 'highlight.js'

const MigratingProps = {
  expandTrigger: {
    newProp: 'expandTrigger',
    type: String,
  },
  changeOnSelect: {
    newProp: 'checkStrictly',
    type: Boolean,
  },
  hoverThreshold: {
    newProp: 'hoverThreshold',
    type: Number,
  },
}
const PopperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    appendToBody: Popper.props.appendToBody,
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: Popper.props.arrowOffset,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions,
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeDestroy: Popper.beforeDestroy,
}
const InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28,
}
export default defineComponent({
  name: 'ElCascader',
  directives: { ClickOutside },
  components: {
    ElInput,
    ElTag,
    ElScrollbar,
    ElCascaderPanel,
  },
  mixins: [PopperMixin],
  props: {
    value: {
      type: Object,
      default: () => { return {}},
    },
    options: Array,
    props: Object,
    size: String,
    placeholder: {
      type: String,
      default: () => t('el.cascader.placeholder'),
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    separator: {
      type: String,
      default: ' / ',
    },
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300,
    },
    beforeFilter: {
      type: Function,
      default: () => 1,
    },
    popperClass: String,
  },
  setup(props, { attrs, emit }) {
    // data
    const dropDownVisible = ref(false)
    const checkedValue = ref(props.value)
    const inputHover = ref(false)
    const inputValue = ref(null)
    const presentText = ref(null)
    const presentTags = ref([])
    const checkedNodes = ref([])
    const filtering = ref(false)
    const suggestions = ref([])
    const inputInitialHeight = ref(0)
    const pressDeleteCount = ref(0)
    const filterHandler = ref(() => 1)
    // refs
    const panel = ref(null)
    const input = ref(null)
    const reference = ref(null)
    const popper = ref(null)
    const suggestionPanel = ref(null)
    // inject
    const elForm = inject('elForm', '')
    const elFormItem = inject('elFormItem', '')
    // computed
    const realSize = computed(() => {
      const _elFormItemSize = (elFormItem || {}).elFormItemSize
      return props.size || _elFormItemSize || (this.$ELEMENT || {}).size
    })
    const tagSize = computed(() => {
      return ['small', 'mini'].indexOf(realSize.value) > -1 ? 'mini' : 'small'
    })
    const isDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled
    })
    const config = computed(() => {
      const config = props || {}
      Object.keys(MigratingProps).forEach(oldProp => {
        const { newProp, type } = MigratingProps[oldProp]
        let oldValue = attrs[oldProp] || attrs[kebabCase(oldProp)]
        if (isDef(oldProp) && !isDef(config[newProp])) {
          if (type === Boolean && oldValue === '') {
            oldValue = true
          }
          config[newProp] = oldValue
        }
      })
      return config
    })
    const multiple = computed(() => {
      return config.value.multiple
    })
    const leafOnly = computed(() => {
      return !config.value.checkStrictly
    })
    const readonly = computed(() => {
      return !props.filterable || multiple
    })
    const clearBtnVisible = computed(() => {
      if (
        !props.clearable ||
        isDisabled ||
        filtering.value ||
        !inputHover.value
      ) {
        return false
      }

      return multiple.value
        ? !!checkedNodes.value.filter(node => !node.isDisabled).length
        : !!presentText.value
    })
    // methods
    const getMigratingConfig = () => {
      return {
        props: {
          'expand-trigger':
            'expand-trigger is removed, use `props.expandTrigger` instead.',
          'change-on-select':
            'change-on-select is removed, use `props.checkStrictly` instead.',
          'hover-threshold':
            'hover-threshold is removed, use `props.hoverThreshold` instead',
        },
        events: {
          'active-item-change':
            'active-item-change is renamed to expand-change',
        },
      }
    }
    const toggleDropDownVisible = visible => {
      if (isDisabled.value) return

      visible = isDef(visible) ? visible : !dropDownVisible.value
      if (visible !== dropDownVisible.value) {
        dropDownVisible.value = visible
        if (visible) {
          nextTick(() => {
            updatePopper()
            panel.value.scrollIntoView()
          })
        }
        input.value.input.setAttribute('aria-expanded', visible)
        emit('visible-change', visible)
      }
    }
    const handleDropdownLeave = () => {
      filtering.value = false
      inputValue.value = presentText.value
    }
    const handleKeyDown = event => {
      switch (event.keyCode) {
        case EVENT_CODE.enter:
          toggleDropDownVisible(false)
          break
        case EVENT_CODE.down:
          toggleDropDownVisible(true)
          focusFirstNode()
          event.preventDefault()
          break
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          toggleDropDownVisible(false)
          break
      }
    }
    const handleFocus = e => {
      emit('focus', e)
    }
    const handleBlur = e => {
      emit('blur', e)
    }
    const handleInput = (val, event) => {
      !dropDownVisible.value && toggleDropDownVisible(true)

      if (event && event.isComposing) return
      if (val) {
        filterHandler.value()
      } else {
        filtering.value = false
      }
    }
    const handleClear = () => {
      presentText.value = ''
      panel.value.clearCheckedNodes()
    }
    const handleExpandChange = value => {
      nextTick(updatePopper.bind(this))
      emit('expand-change', value)
    }
    const focusFirstNode = () => {
      nextTick(() => {
        let firstNode = null

        if (filtering.value && suggestionPanel.value) {
          firstNode = suggestionPanel.value.$el.querySelector(
            '.el-cascader__suggestion-item',
          )
        } else {
          const firstMenu = popper.value.querySelector('.el-cascader-menu')
          firstNode = firstMenu.querySelector(
            '.el-cascader-node[tabindex="-1"]',
          )
        }

        if (firstNode) {
          firstNode.focus()
          !filtering.value && firstNode.click()
        }
      })
    }
    const computePresentContent = () => {
      // nextTick is required, because checked nodes may not change right now
      nextTick(() => {
        if (config.value.multiple) {
          computePresentTags()
          presentText.value = presentTags.value.length ? ' ' : null
        } else {
          computePresentText()
        }
      })
    }
    const computePresentText = () => {
      if (!isEmpty(checkedValue.value)) {
        const node = panel.value.getNodeByValue(checkedValue.value)
        if (node && (config.value.checkStrictly || node.isLeaf)) {
          presentText.value = node.getText(props.showAllLevels, props.separator)
          return
        }
      }
      presentText.value = null
    }
    const computePresentTags = () => {
      const checkedNodesInternal = getCheckedNodes(leafOnly)
      const tags = []

      const genTag = node => ({
        node,
        key: node.uid,
        text: node.getText(props.showAllLevels, props.separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
      })

      if (checkedNodesInternal.length) {
        const [first, ...rest] = checkedNodesInternal
        const restCount = rest.length
        tags.push(genTag(first))

        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
            })
          } else {
            rest.forEach(node => tags.push(genTag(node)))
          }
        }
      }

      checkedNodes.value = checkedNodesInternal
      presentTags.value = tags
    }
    let filterMethod = (node, keyword) => { return undefined}
    const getSuggestions = () => {
      if (!isFunction(props.filterMethod)) {
        filterMethod = (node, keyword) => node.text.includes(keyword)
      }

      const suggestionsInternal = panel.value
        .getFlattedNodes(leafOnly.value)
        .filter(node => {
          if (node.isDisabled) return false
          node.text = node.getText(props.showAllLevels, props.separator) || ''
          return filterMethod(node, inputValue.value)
        })

      if (multiple.value) {
        presentTags.value.forEach(tag => {
          tag.hitState = false
        })
      } else {
        suggestionsInternal.forEach(node => {
          node.checked = isEqual(checkedValue.value, node.getValueByOption())
        })
      }

      filtering.value = true
      suggestions.value = suggestionsInternal
      nextTick(updatePopper)
    }
    const handleSuggestionKeyDown = event => {
      const { keyCode, target } = event
      switch (keyCode) {
        case EVENT_CODE.enter:
          target.click()
          break
        case EVENT_CODE.up:
          const prev = target.previousElementSibling
          prev && prev.focus()
          break
        case EVENT_CODE.down:
          const next = target.nextElementSibling
          next && next.focus()
          break
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          toggleDropDownVisible(false)
          break
      }
    }
    const handleDelete = () => {
      const lastIndex = presentTags.value.length - 1
      const lastTag = presentTags.value[lastIndex]
      pressDeleteCount.value = inputValue.value ? 0 : pressDeleteCount.value + 1

      if (!lastTag) return

      if (pressDeleteCount.value) {
        if (lastTag.hitState) {
          deleteTag(lastIndex)
        } else {
          lastTag.hitState = true
        }
      }
    }
    const handleSuggestionClick = index => {
      const targetNode = suggestions.value[index]

      if (multiple.value) {
        const { checked } = targetNode
        targetNode.doCheck(!checked)
        panel.value.calculateMultiCheckedValue()
      } else {
        checkedValue.value = targetNode.getValueByOption()
        toggleDropDownVisible(false)
      }
    }
    const deleteTag = index => {
      const val = checkedValue[index]
      checkedValue.value = checkedValue.value.filter((n, i) => i !== index)
      emit('remove-tag', val)
    }
    const updateStyle = () => {
      if (isServer || reference.value) return

      const inputInner = reference.value.querySelector('.el-input__inner')

      if (!inputInner) return

      const tags = reference.value.querySelector('.el-cascader__tags')
      let suggestionPanelEl = null

      if (suggestionPanel.value && (suggestionPanelEl = suggestionPanel.value.$el)) {
        const suggestionList = suggestionPanelEl.querySelector(
          '.el-cascader__suggestion-list',
        )
        suggestionList.style.minWidth = inputInner.offsetWidth + 'px'
      }

      if (tags) {
        const { offsetHeight } = tags
        const height = Math.max(offsetHeight + 6, inputInitialHeight.value) + 'px'
        inputInner.style.height = height
        updatePopper()
      }
    }

    /**
     * public methods
     */
    const getCheckedNodes = leafOnly => {
      return panel.value.getCheckedNodes(leafOnly)
    }
    // watch
    watch(
      () => props.disabled,
      () => {
        computePresentContent()
      },
    )
    watch(
      () => props.value,
      val => {
        if (!isEqual(val, checkedValue.value)) {
          checkedValue.value = val
          computePresentContent()
        }
      },
    )
    watch(
      () => checkedValue,
      val => {
        const { value } = props
        const { checkStrictly, multiple } = config.value

        if (!isEqual(val, value) || isUndefined(value)) {
          computePresentContent()
          // hide dropdown when single mode
          if (!multiple && !checkStrictly && dropDownVisible.value) {
            toggleDropDownVisible(false)
          }

          emit('input', val)
          emit('change', val)
          dispatch('ElFormItem', 'el.form.change', [val])
        }
      },
    )
    watch(
      () => presentText,
      val => {
        inputValue.value = val
      },
    )
    watch(
      () => props.options,
      () => {
        nextTick(computePresentContent)
      },
      { deep: true },
    )
    watch(
      () => presentTags,
      (val, oldVal) => {
        if (multiple.value && (val.value.length || oldVal.value.length)) {
          nextTick(updateStyle)
        }
      },
    )
    watch(
      () => filtering,
      () => {
        nextTick(updatePopper)
      },
    )
    onMounted(() => {
      if (input.value && input.value.$el) {
        inputInitialHeight.value =
          input.value.$el.offsetHeight || InputSizeMap[realSize.value] || 40
      }

      if (!isEmpty(props.value)) {
        computePresentContent()
      }

      filterHandler.value = debounce(props.debounce, () => {
        if (!inputValue.value) {
          filtering.value = false
          return
        }

        const before = props.beforeFilter(inputValue.value)
        if (before && before.then) {
          before.then(getSuggestions)
        } else if (before !== false) {
          getSuggestions()
        } else {
          filtering.value = false
        }
      })

      addResizeListener(reference.value, updateStyle)
    })
    onBeforeUnmount(() => {
      removeResizeListener(reference.value, updateStyle)
    })
    return {
      dropDownVisible,
      checkedValue,
      inputHover,
      inputValue,
      presentText,
      presentTags,
      checkedNodes,
      filtering,
      suggestions,
      inputInitialHeight,
      pressDeleteCount,
      panel,
      input,
      reference,
      popper,
      suggestionPanel,
    }
  },
})
</script>
