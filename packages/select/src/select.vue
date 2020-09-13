<template>
  <!-- TODO: clickoutside -->
  <!-- v-clickoutside="handleClose" -->
  <div
    class="el-select"
    :class="[selectSize ? 'el-select--' + selectSize : '']"
    @click.stop="toggleMenu"
  >
    <div
      v-if="multiple"
      ref="tags"
      class="el-select__tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <el-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          disable-transitions
          @close="deleteTag($event, selected[0])"
        >
          <span class="el-select__tags-text">{{ selected[0].currentLabel }}</span>
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
      <transition-group v-if="!collapseTags" @after-leave="resetInputHeight">
        <el-tag
          v-for="item in selected"
          :key="getValueKey(item)"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="item.hitState"
          type="info"
          disable-transitions
          @close="deleteTag($event, item)"
        >
          <span class="el-select__tags-text">{{ item.currentLabel }}</span>
        </el-tag>
      </transition-group>

      <input
        v-if="filterable"
        v-model="query"
        type="text"
        class="el-select__input"
        ref="input"
        :class="[selectSize ? `is-${ selectSize }` : '']"
        :disabled="selectDisabled"
        :autocomplete="autoComplete || autocomplete"
        :style="{ 'flex-grow': '1', width: inputLength / (inputWidth - 32) + '%', 'max-width': inputWidth - 42 + 'px' }"
        @focus="handleFocus"
        @blur="softFocus = false"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
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
      :autocomplete="autoComplete || autocomplete"
      :size="selectSize"
      :disabled="selectDisabled"
      :readonly="readonly"
      :validate-event="false"
      :class="{ 'is-focus': visible }"
      :tabindex="(multiple && filterable) ? '-1' : null"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup="debouncedOnInputChange"
      @keydown.down.stop.prevent="navigateOptions('next')"
      @keydown.up.stop.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="selectOption"
      @keydown.esc.stop.prevent="visible = false"
      @keydown.tab="visible = false"
      @paste="debouncedOnInputChange"
      @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix"></slot>
      </template>
      <template #suffix>
        <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
        <i v-if="showClose" class="el-select__caret el-input__icon el-icon-circle-close" @click="handleClearClick"></i>
      </template>
    </el-input>
    <transition
      name="el-zoom-in-top"
      @before-enter="handleMenuEnter"
      @after-leave="doDestroy"
    >
      <el-select-menu
        v-show="visible && emptyText !== false"
        ref="popper"
        :append-to-body="popperAppendToBody"
      >
        <el-scrollbar
          v-show="options.length > 0 && !loading"
          ref="scrollbar"
          tag="ul"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
        >
          <el-option
            v-if="showNewOption"
            :value="query"
            :created="true"
          />
          <slot></slot>
        </el-scrollbar>
        <template v-if="emptyText && (!allowCreate || loading || (allowCreate && options.length === 0 ))">
          <slot v-if="$slots.empty" name="empty"></slot>
          <p v-else class="el-select-dropdown__empty">
            {{ emptyText }}
          </p>
        </template>
      </el-select-menu>
    </transition>
  </div>
</template>

<script type="ts">
// import Emitter from 'element-ui/src/mixins/emitter'
// import Focus from 'element-ui/src/mixins/focus'
// import Locale from 'element-ui/src/mixins/locale'
import ElInput from '@element-plus/input/src/index.vue'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import ElTag from '@element-plus/tag/src/index.vue'
import ElScrollbar from '@element-plus/scrollbar/src/index.ts'
import isServer from '@element-plus/utils/isServer'
import { debounce as lodashDebounce } from 'lodash'

import ClickOutside from '@element-plus/directives/click-outside'
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { t } from '@element-plus/locale'
import scrollIntoView from '@element-plus/utils/scroll-into-view'
import { getValueByPath, isEqual, isIE, isEdge } from '@element-plus/utils/util'
// import NavigationMixin from './navigation-mixin'
import { isKorean } from '@element-plus/utils/isDef'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import {
  computed,
  ref,
  watch,
  defineComponent,
  inject,
  onMounted,
  onBeforeMount,
  nextTick,
  provide,
  getCurrentInstance } from 'vue'

// TODO: ELEMENT
const ELEMENT = { size: 'medium' }

export default defineComponent({
  name: 'ElSelect',
  componentName: 'ElSelect',

  components: {
    ElInput,
    ElSelectMenu,
    ElOption,
    ElTag,
    ElScrollbar,
  },

  directives: { ClickOutside },

  // mixins: [Emitter, Locale, Focus('reference'), NavigationMixin],
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String],
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator(val) {
        process.env.NODE_ENV !== 'production' &&
          console.warn('[Element Warn][Select]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.')
        return true
      },
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default() {
        return t('el.select.placeholder')
      },
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['remove-tag', 'clear', 'change',UPDATE_MODEL_EVENT],

  setup(props, ctx) {
    // data
    const options = ref([])
    const cachedOptions = ref([])
    const createdLabel = ref(null)
    const createdSelected = ref(false)
    const selected = props.multiple ? [] : {}
    const inputLength = ref(inputLength)
    const inputWidth = ref(0)
    const initialInputHeight = ref(0)
    const cachedPlaceHolder = ref('')
    const optionsCount = ref(0)
    const filteredOptionsCount = ref(0)
    const visible = ref(false)
    const softFocus = ref(false)
    const selectedLabel = ref('')
    const hoverIndex = ref(-1)
    const query = ref('')
    const previousQuery = ref(null)
    const inputHovering = ref(false)
    const currentPlaceholder = ref('')
    const menuVisibleOnFocus = ref(false)
    const isOnComposition = ref(false)
    const isSilentBlur = ref(false)

    const elForm = inject('elForm', {})
    const elFormItem = inject('elFormItem', {})
    const instance = getCurrentInstance()

    const reference = ref(null)
    // provide
    provide('select', instance)
    // computed
    const _elFormItemSize = computed(() => (elFormItem || {}).elFormItemSize)
    const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !visible.value))
    const selectDisabled = computed(() => props.disabled || (elForm || {}).disabled)
    const showClose = computed(() => {
      const hasValue = props.multiple
        ? Array.isArray(props.modelValue) && props.modelValue.length > 0
        : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''
      const criteria = props.clearable &&
        !selectDisabled.value &&
        inputHovering.value &&
        hasValue
      return criteria
    })
    const iconClass = computed(() => props.remote && props.filterable ? '' : (visible.value ? 'arrow-up is-reverse' : 'arrow-up'))
    const debounce = computed(() => props.remote ? 300 : 0)
    const emptyText = computed(() => {
      if (props.loading) {
        return props.loadingText || t('el.select.loading')
      } else {
        if (props.remote && query.value === '' && options.value.length === 0) return false
        if (props.filterable && query.value && options.value.length > 0 && filteredOptionsCount.value === 0) {
          return props.noMatchText || t('el.select.noMatch')
        }
        if (options.value.length === 0) {
          return props.noDataText || t('el.select.noData')
        }
      }
      return null
    })
    const showNewOption = computed(() => {
      let hasExistingOption = options.value.filter(option => {
        return !option.created
      }).some(option => {
        return option.currentLabel === query.value
      })
      return props.filterable && props.allowCreate && query.value !== '' && !hasExistingOption
    })
    // TODO: ctx.$ELEMENT
    const selectSize = computed(() => props.size || _elFormItemSize.value || (ELEMENT || {}).size)
    console.log('selectSize: ', selectSize.value)
    const collapseTagSize = computed(() => ['small', 'mini'].indexOf(selectSize.value) > -1 ? 'mini' : 'small')
    // watch
    watch(() => selectDisabled, () => {
      nextTick(() => {
        resetInputHeight()
      })
    })
    watch(() => props.placeholder, val => {
      cachedPlaceHolder.value = currentPlaceholder.value = val
    })
    watch(() => props.modelValue, (val, oldVal) => {
      if (props.multiple) {
        resetInputHeight()
        if ((val && val.length > 0) || (instance.$refs.input && query.value !== '')) {
          currentPlaceholder.value = ''
        } else {
          currentPlaceholder.value = this.cachedPlaceHolder.value
        }
        if (props.filterable && !props.reserveKeyword) {
          query.value = ''
          handleQueryChange(query.value)
        }
      }
      setSelected()
      if (props.filterable && !props.multiple) {
        inputLength.value = 20
      }
      if (!isEqual(val, oldVal)) {
        // TODO:需要补充
        this.dispatch('ElFormItem', 'el.form.change', val)
      }
    })
    watch(() => visible.value, val => {
      if (!val) {
        // TODO:需要补充
        this.broadcast('ElSelectDropdown', 'destroyPopper')
        if (instance.$refs.input) {
          instance.$refs.input.blur()
        }
        query.value = ''
        previousQuery.value = null
        selectedLabel.value = ''
        inputLength.value = 20
        menuVisibleOnFocus.value = false
        resetHoverIndex()
        nextTick(() => {
          if (instance.$refs.input &&
            instance.$refs.input.value === '' &&
            selected.value.length === 0) {
            currentPlaceholder.value = cachedPlaceHolder.value
          }
        })
        if (!props.multiple) {
          if (selected.value) {
            if (props.filterable && props.allowCreate && createdSelected.value && createdLabel.value) {
              selectedLabel.value = createdLabel.value
            } else {
              selectedLabel.value = selected.value.currentLabel
            }
            if (props.filterable) query.value = selectedLabel.value
          }

          if (props.filterable) {
            currentPlaceholder.value = cachedPlaceHolder.value
          }
        }
      } else {
        // TODO: 需要补充
        this.broadcast('ElSelectDropdown', 'updatePopper')
        if (props.filterable) {
          query.value = props.remote ? '' : selectedLabel.value
          handleQueryChange(query.value)
          if (props.multiple) {
            instance.$refs.input.focus()
          } else {
            if (!props.remote) {
              // TODO: 需要补充
              this.broadcast('ElOption', 'queryChange', '')
              this.broadcast('ElOptionGroup', 'queryChange')
            }

            if (selectedLabel.value) {
              currentPlaceholder.value = selectedLabel.value
              selectedLabel.value = ''
            }
          }
        }
      }
      ctx.emit('visible-change', val)
    })

    watch(() => options.value, () => {
      if (isServer) return
      // TODO: 需要补充
      nextTick(() => {
        this.broadcast('ElSelectDropdown', 'updatePopper')
      })
      if (props.multiple) {
        resetInputHeight()
      }
      const inputs = instance.$el.querySelectorAll('input')
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        setSelected()
      }
      if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
        checkDefaultFirstOption()
      }
    })


    // methods
    function resetInputHeight() {
      if (props.collapseTags && !props.filterable) return
      nextTick(() => {
        if (!instance.$refs.reference) return
        let inputChildNodes = instance.$refs.reference.$el.childNodes
        let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
        const tags = instance.$refs.tags
        const sizeInMap = initialInputHeight.value || 40
        input.style.height = selected.value.length === 0
          ? sizeInMap + 'px'
          : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
            sizeInMap) + 'px'
        if (visible.value && this.emptyText !== false) {
          // TODO: 需要补充
          this.broadcast('ElSelectDropdown', 'updatePopper')
        }
      })
    }

    function handleQueryChange(val) {
      if (previousQuery.value === val || isOnComposition.value) return
      if (
        previousQuery.value === null &&
        (typeof props.filterMethod === 'function' || typeof props.remoteMethod === 'function')
      ) {
        previousQuery.value = val
        return
      }
      previousQuery.value = val
      nextTick(() => {
        // TODO: 需要补充
        if (visible.value) this.broadcast('ElSelectDropdown', 'updatePopper')
      })
      hoverIndex.value = -1
      if (props.multiple && props.filterable) {
        nextTick(() => {
          const length = instance.$refs.input.value.length * 15 + 20
          inputLength.value = props.collapseTags ? Math.min(50, length) : length
          managePlaceholder()
          resetInputHeight()
        })
      }
      if (props.remote && typeof props.remoteMethod === 'function') {
        hoverIndex.value = -1
        props.remoteMethod(val)
      } else if (typeof props.filterMethod === 'function') {
        props.filterMethod(val)
        // TODO: 需要补充
        this.broadcast('ElOptionGroup', 'queryChange')
      } else {
        filteredOptionsCount.value = optionsCount.value
        // TODO: 需要补充
        this.broadcast('ElOption', 'queryChange', val)
        this.broadcast('ElOptionGroup', 'queryChange')
      }
      if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
        checkDefaultFirstOption()
      }
    }

    function managePlaceholder() {
      if (currentPlaceholder.value !== '') {
        currentPlaceholder.value = instance.$refs.input.value ? '' : cachedPlaceHolder.value
      }
    }

    function checkDefaultFirstOption() {
      hoverIndex.value = -1
      // highlight the created option
      let hasCreated = false
      for (let i = options.value.length - 1; i >= 0; i--) {
        if (options.value[i].created) {
          hasCreated = true
          hoverIndex.value = i
          break
        }
      }
      if (hasCreated) return
      for (let i = 0; i !== options.value.length; ++i) {
        const option = options.value[i]
        if (query.value) {
          // highlight first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            hoverIndex.value = i
            break
          }
        } else {
          // highlight currently selected option
          if (option.itemSelected) {
            hoverIndex.value = i
            break
          }
        }
      }
    }

    function setSelected() {
      if (!props.multiple) {
        let option = getOption(props.modelValue)
        if (option.created) {
          createdLabel.value = option.currentLabel
          createdSelected.value = true
        } else {
          createdSelected.value = false
        }
        selectedLabel.value = option.currentLabel
        selected.value = option
        if (props.filterable) query.value = selectedLabel.value
        return
      }
      let result = []
      if (Array.isArray(props.modelValue)) {
        props.modelValue.forEach(value => {
          result.push(getOption(value))
        })
      }
      selected.value = result
      nextTick(() => {
        resetInputHeight()
      })
    }

    function getOption(value) {
      let option
      const isObject = Object.prototype.toString.call(props.modelValue).toLowerCase() === '[object object]'
      const isNull = Object.prototype.toString.call(props.modelValue).toLowerCase() === '[object null]'
      const isUndefined = Object.prototype.toString.call(props.modelValue).toLowerCase() === '[object undefined]'

      for (let i = cachedOptions.value.length - 1; i >= 0; i--) {
        const cachedOption = cachedOptions.value[i]
        // TODO: getValueByPath 是做什么的
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, props.valueKey) === getValueByPath(props.modelValue, props.valueKey)
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption.value
          break
        }
      }
      if (option) return option
      const label = (!isObject && !isNull && !isUndefined) ? value : ''
      let newOption = {
        value: value,
        currentLabel: label,
      }
      if (props.multiple) {
        newOption.hitState = false
      }
      return newOption
    }

    function resetHoverIndex() {
      setTimeout(() => {
        if (!props.multiple) {
          hoverIndex.value = options.value.indexOf(selected.value)
        } else {
          if (selected.value.length > 0) {
            hoverIndex.value = Math.min.apply(null, selected.value.map(item => options.value.indexOf(item)))
          } else {
            hoverIndex.value = -1
          }
        }
      }, 300)
    }

    function handleResize() {
      resetInputWidth()
      if (props.multiple) resetInputHeight()
    }

    function resetInputWidth() {
      inputWidth.value = instance.$refs.reference.$el.getBoundingClientRect().width
    }

    function onInputChange() {
      if (props.filterable && query.value !== selectedLabel.value) {
        query.value = selectedLabel.value
        handleQueryChange(query.value)
      }
    }

    function deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        const value = this.value.slice()
        value.pop()
        ctx.emit(UPDATE_MODEL_EVENT, value)
        emitChange(value)
      }
    }

    function emitChange(val) {
      if (!isEqual(props.modelValue, val)) {
        ctx.emit('change', val)
      }
    }

    function deleteTag(event, tag) {
      let index = selected.value.indexOf(tag)
      if (index > -1 && !selectDisabled.value) {
        const value = props.modelValue.slice()
        value.splice(index, 1)
        ctx.emit(UPDATE_MODEL_EVENT, value)
        emitChange(value)
        ctx.emit('remove-tag', tag.value)
      }
      event.stopPropagation()
    }

    function deleteSelected(event) {
      event.stopPropagation()
      const value = props.multiple ? [] : ''
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      visible.value = false
      ctx.emit('clear')
    }

    onMounted(() => {
      if (props.multiple && Array.isArray(this.value) && props.modelValue.length > 0) {
        currentPlaceholder.value = ''
      }
      // TODO:
      // addResizeListener(instance.$el, handleResize)
      // console.log('ctx.$refs:', ctx.$refs)
      // const reference = instance.$refs.reference
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          medium: 36,
          small: 32,
          mini: 28,
        }
        const input = reference.value.$el.querySelector('input')
        initialInputHeight.value = input.getBoundingClientRect().height || sizeMap[selectSize.value]
      }
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        if (reference.value && reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
      })
      setSelected()
    })

    onBeforeMount(() => {
      if (instance.$el && handleResize) removeResizeListener(instance.$el, handleResize)
    })

    // created
    // TODO: placeholder需要补充
    // cachedPlaceHolder.value = currentPlaceholder.value = props.placeholder
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, [])
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, '')
    }

    const debouncedOnInputChange = lodashDebounce(() => {
      onInputChange()
    }, debounce.value)

    const debouncedQueryChange = lodashDebounce(e => {
      handleQueryChange(e.target.value)
    }, debounce.value)
    // TODO: 需要补充
    // this.$on('handleOptionClick', this.handleOptionSelect)
    // this.$on('setSelected', this.setSelected)

    return {
      readonly,
      showClose,
      iconClass,
      emptyText,
      showNewOption,
      selectSize,
      collapseTagSize,
      managePlaceholder,
      isOnComposition,
      softFocus,
      visible,
      menuVisibleOnFocus,
      isSilentBlur,
      options,
      selected,
      resetInputHeight,
      inputLength,
      handleQueryChange,
      selectedLabel,
      inputWidth,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      emitChange,
      deleteTag,
      deleteSelected,

      reference,
    }
  },

  methods: {
    handleComposition(event) {
      const text = event.target.value
      if (event.type === 'compositionend') {
        this.isOnComposition = false
        nextTick(() => this.handleQueryChange(text))
      } else {
        const lastCharacter = text[text.length - 1] || ''
        this.isOnComposition = !isKorean(lastCharacter)
      }
    },

    scrollToOption(option) {
      const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap')
        scrollIntoView(menu, target)
      }
      // TODO:
      // this.$refs.scrollbar && this.$refs.scrollbar.handleScroll()
    },

    handleMenuEnter() {
      nextTick(() => this.scrollToOption(this.selected))
    },

    handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true
          if (this.filterable) {
            this.menuVisibleOnFocus = true
          }
        }
        this.$emit('focus', event)
      } else {
        this.softFocus = false
      }
    },

    blur() {
      this.visible = false
      reference.value.blur()
    },

    handleBlur(event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false
        } else {
          this.$emit('blur', event)
        }
      }, 50)
      this.softFocus = false
    },

    handleClearClick(event) {
      this.deleteSelected(event)
    },

    doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy()
    },

    handleClose() {
      this.visible = false
    },

    toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return
      const option = this.selected[this.selected.length - 1]
      if (!option) return

      if (hit === true || hit === false) {
        option.hitState = hit
        return hit
      }

      option.hitState = !option.hitState
      return option.hitState
    },

    resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false)
      this.inputLength = this.$refs.input.value.length * 15 + 20
      this.resetInputHeight()
    },

    handleOptionSelect(option, byClick) {
      if (this.multiple) {
        const value = (this.value || []).slice()
        const optionIndex = this.getValueIndex(value, option.value)
        if (optionIndex > -1) {
          value.splice(optionIndex, 1)
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value)
        }
        this.$emit(UPDATE_MODEL_EVENT, value)
        this.emitChange(value)
        if (option.created) {
          this.query = ''
          this.handleQueryChange('')
          this.inputLength = 20
        }
        if (this.filterable) this.$refs.input.focus()
      } else {
        this.$emit(UPDATE_MODEL_EVENT, option.value)
        this.emitChange(option.value)
        this.visible = false
      }
      this.isSilentBlur = byClick
      this.setSoftFocus()
      if (this.visible) return
      nextTick(() => {
        this.scrollToOption(option)
      })
    },

    setSoftFocus() {
      this.softFocus = true
      const input = this.$refs.input || this.$refs.reference
      if (input) {
        input.focus()
      }
    },

    getValueIndex(arr = [], value) {
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      if (!isObject) {
        return arr.indexOf(value)
      } else {
        const valueKey = this.valueKey
        let index = -1
        arr.some((item, i) => {
          if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
            index = i
            return true
          }
          return false
        })
        return index
      }
    },

    toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false
        } else {
          this.visible = !this.visible
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus()
        }
      }
    },

    selectOption() {
      if (!this.visible) {
        this.toggleMenu()
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex])
        }
      }
    },

    onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--
        this.filteredOptionsCount--
        this.options.splice(index, 1)
      }
    },

    getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value
      } else {
        return getValueByPath(item.value, this.valueKey)
      }
    },
  },
})
</script>
