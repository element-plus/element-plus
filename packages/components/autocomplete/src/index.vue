<template>
  <el-tooltip
    ref="popper"
    v-model:visible="suggestionVisible"
    :placement="placement"
    :fallback-placements="['bottom-start', 'top-start']"
    :popper-class="`el-autocomplete__popper ${popperClass}`"
    :append-to-body="popperAppendToBody"
    :gpu-acceleration="false"
    pure
    manual-mode
    effect="light"
    trigger="click"
    transition="el-zoom-in-top"
    @show="onSuggestionShow"
  >
    <div
      v-clickoutside="close"
      :class="['el-autocomplete', $attrs.class]"
      :style="$attrs.style"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="suggestionVisible"
      :aria-owns="id"
    >
      <el-input
        ref="inputRef"
        v-bind="attrs"
        :model-value="modelValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @clear="handleClear"
        @keydown.up.prevent="highlight(highlightedIndex - 1)"
        @keydown.down.prevent="highlight(highlightedIndex + 1)"
        @keydown.enter="handleKeyEnter"
        @keydown.tab="close"
      >
        <template v-if="$slots.prepend" #prepend>
          <slot name="prepend"></slot>
        </template>
        <template v-if="$slots.append" #append>
          <slot name="append"></slot>
        </template>
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix"></slot>
        </template>
        <template v-if="$slots.suffix" #suffix>
          <slot name="suffix"></slot>
        </template>
      </el-input>
    </div>
    <template #content>
      <div
        ref="regionRef"
        :class="[
          'el-autocomplete-suggestion',
          suggestionLoading && 'is-loading',
        ]"
        :style="{ minWidth: dropdownWidth, outline: 'none' }"
        role="region"
      >
        <el-scrollbar
          tag="ul"
          wrap-class="el-autocomplete-suggestion__wrap"
          view-class="el-autocomplete-suggestion__list"
          role="listbox"
          :id="id"
        >
          <li v-if="suggestionLoading">
            <el-icon class="is-loading"><loading /></el-icon>
          </li>
          <template v-else>
            <li
              v-for="(item, index) in suggestions"
              :id="`${id}-item-${index}`"
              :key="index"
              :class="{ highlighted: highlightedIndex === index }"
              role="option"
              :aria-selected="highlightedIndex === index"
              @click="select(item)"
            >
              <slot :item="item">{{ item[valueKey] }}</slot>
            </li>
          </template>
        </el-scrollbar>
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onUpdated,
  nextTick,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import debounce from 'lodash/debounce'
import { useAttrs } from '@element-plus/hooks'
import { ClickOutside } from '@element-plus/directives'
import { generateId, isArray } from '@element-plus/utils/util'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { throwError } from '@element-plus/utils/error'
import ElInput from '@element-plus/components/input'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTooltip from '@element-plus/components/tooltip'
import ElIcon from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'

import type { Placement } from '@element-plus/components/popper'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElAutocomplete',
  components: {
    ElTooltip,
    ElInput,
    ElScrollbar,
    ElIcon,
    Loading,
  },
  directives: {
    clickoutside: ClickOutside,
  },
  inheritAttrs: false,
  props: {
    valueKey: {
      type: String,
      default: 'value',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
    placement: {
      type: String as PropType<Placement>,
      validator: (val: string): boolean => {
        return [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
        ].includes(val)
      },
      default: 'bottom-start',
    },
    fetchSuggestions: {
      type: Function as PropType<
        (queryString: string, cb: (data: any[]) => void) => void
      >,
      default: NOOP,
    },
    popperClass: {
      type: String,
      default: '',
    },
    triggerOnFocus: {
      type: Boolean,
      default: true,
    },
    selectWhenUnmatched: {
      type: Boolean,
      default: false,
    },
    hideLoading: {
      type: Boolean,
      default: false,
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    highlightFirstItem: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    UPDATE_MODEL_EVENT,
    'input',
    'change',
    'focus',
    'blur',
    'clear',
    'select',
  ],
  setup(props, ctx) {
    const attrs = useAttrs()
    const suggestions = ref<any[]>([])
    const highlightedIndex = ref(-1)
    const dropdownWidth = ref('')
    const activated = ref(false)
    const suggestionDisabled = ref(false)
    const loading = ref(false)
    const inputRef = ref<{
      inputOrTextarea: HTMLInputElement | HTMLTextAreaElement
      focus: () => void
      $el: HTMLElement
    } | null>(null)
    const regionRef = ref<HTMLElement | null>(null)
    const popper = ref(null)

    const id = computed(() => {
      return `el-autocomplete-${generateId()}`
    })
    const suggestionVisible = computed(() => {
      const isValidData =
        isArray(suggestions.value) && suggestions.value.length > 0
      return (isValidData || loading.value) && activated.value
    })
    const suggestionLoading = computed(() => {
      return !props.hideLoading && loading.value
    })

    const onSuggestionShow = () => {
      nextTick(() => {
        if (suggestionVisible.value) {
          dropdownWidth.value = `${inputRef.value!.$el.offsetWidth}px`
        }
      })
    }

    onMounted(() => {
      inputRef.value!.inputOrTextarea.setAttribute('role', 'textbox')
      inputRef.value!.inputOrTextarea.setAttribute('aria-autocomplete', 'list')
      inputRef.value!.inputOrTextarea.setAttribute('aria-controls', 'id')
      inputRef.value!.inputOrTextarea.setAttribute(
        'aria-activedescendant',
        `${id.value}-item-${highlightedIndex.value}`
      )
    })

    const getData = (queryString: string) => {
      if (suggestionDisabled.value) {
        return
      }
      loading.value = true
      props.fetchSuggestions(queryString, (suggestionsArg) => {
        loading.value = false
        if (suggestionDisabled.value) {
          return
        }
        if (isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1
        } else {
          throwError(
            'ElAutocomplete',
            'autocomplete suggestions must be an array'
          )
        }
      })
    }
    const debouncedGetData = debounce(getData, props.debounce)
    const handleInput = (value: string) => {
      ctx.emit('input', value)
      ctx.emit(UPDATE_MODEL_EVENT, value)
      suggestionDisabled.value = false
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true
        suggestions.value = []
        return
      }
      debouncedGetData(value)
    }
    const handleChange = (value) => {
      ctx.emit('change', value)
    }
    const handleFocus = (e) => {
      activated.value = true
      ctx.emit('focus', e)
      if (props.triggerOnFocus) {
        debouncedGetData(String(props.modelValue))
      }
    }
    const handleBlur = (e) => {
      ctx.emit('blur', e)
    }
    const handleClear = () => {
      activated.value = false
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit('clear')
    }
    const handleKeyEnter = () => {
      if (
        suggestionVisible.value &&
        highlightedIndex.value >= 0 &&
        highlightedIndex.value < suggestions.value.length
      ) {
        select(suggestions.value[highlightedIndex.value])
      } else if (props.selectWhenUnmatched) {
        ctx.emit('select', { value: props.modelValue })
        nextTick(() => {
          suggestions.value = []
          highlightedIndex.value = -1
        })
      }
    }
    const close = () => {
      activated.value = false
    }
    const focus = () => {
      inputRef.value?.focus()
    }
    const select = (item) => {
      ctx.emit('input', item[props.valueKey])
      ctx.emit(UPDATE_MODEL_EVENT, item[props.valueKey])
      ctx.emit('select', item)
      nextTick(() => {
        suggestions.value = []
        highlightedIndex.value = -1
      })
    }
    const highlight = (index: number) => {
      if (!suggestionVisible.value || loading.value) {
        return
      }
      if (index < 0) {
        highlightedIndex.value = -1
        return
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1
      }
      const suggestion = regionRef.value!.querySelector(
        '.el-autocomplete-suggestion__wrap'
      )!
      const suggestionList = suggestion.querySelectorAll(
        '.el-autocomplete-suggestion__list li'
      )!
      const highlightItem = suggestionList[index]
      const scrollTop = suggestion.scrollTop
      const { offsetTop, scrollHeight } = highlightItem as HTMLElement

      if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += scrollHeight
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight
      }
      highlightedIndex.value = index
      inputRef.value!.inputOrTextarea.setAttribute(
        'aria-activedescendant',
        `${id.value}-item-${highlightedIndex.value}`
      )
    }

    return {
      attrs,
      suggestions,
      highlightedIndex,
      dropdownWidth,
      activated,
      suggestionDisabled,
      loading,
      inputRef,
      regionRef,
      popper,

      id,
      suggestionVisible,
      suggestionLoading,

      getData,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      handleKeyEnter,
      close,
      focus,
      select,
      highlight,
      onSuggestionShow,
    }
  },
})
</script>
