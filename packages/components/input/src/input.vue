<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="containerAttrs"
    :class="containerKls"
    :style="containerStyle"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- input -->
    <template v-if="!isTextarea">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" :class="ns.be('group', 'prepend')">
        <slot name="prepend" />
      </div>

      <div :class="wrapperKls">
        <!-- prefix slot -->
        <span v-if="$slots.prefix || prefixIcon" :class="ns.e('prefix')">
          <span :class="ns.e('prefix-inner')" @click="focus">
            <slot name="prefix" />
            <el-icon v-if="prefixIcon" :class="ns.e('icon')">
              <component :is="prefixIcon" />
            </el-icon>
          </span>
        </span>

        <input :ref="refSetter" v-bind="inputElProps" />

        <!-- suffix slot -->
        <span v-if="suffixVisible" :class="ns.e('suffix')">
          <span :class="ns.e('suffix-inner')" @click="focus">
            <template
              v-if="!showClear || !showPwdVisible || !isWordLimitVisible"
            >
              <slot name="suffix" />
              <el-icon v-if="suffixIcon" :class="ns.e('icon')">
                <component :is="suffixIcon" />
              </el-icon>
            </template>
            <el-icon
              v-if="showClear"
              :class="[ns.e('icon'), ns.e('clear')]"
              @mousedown.prevent="NOOP"
              @click="clear"
            >
              <circle-close />
            </el-icon>
            <el-icon
              v-if="showPwdVisible"
              :class="[ns.e('icon'), ns.e('password')]"
              @click="onTogglePasswordVisible"
            >
              <component :is="passwordIcon" />
            </el-icon>
            <word-limit
              v-if="isWordLimitVisible"
              :class="ns.e('count')"
              :text-length="textLength"
              :maxlength="$attrs.maxlength"
            >
              <template #default="{ text }">
                <span :class="ns.e('count-inner')">
                  {{ text }}
                </span>
              </template>
            </word-limit>
            <state-icon
              v-if="validateState && needStatusIcon"
              :validate-state="validateState"
              :class="[
                ns.e('icon'),
                ns.e('validateIcon'),
                ns.is('loading', validateState === 'validating'),
              ]"
            />
          </span>
        </span>
      </div>

      <!-- append slot -->
      <div v-if="$slots.append" :class="ns.be('group', 'append')">
        <slot name="append" />
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea :ref="refSetter" v-bind="textareaProps" />
      <word-limit
        v-if="isWordLimitVisible"
        :class="ns.e('count')"
        :style="wordLimitStyle"
        :text-length="textLength"
        :maxlength="$attrs.maxlength"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  shallowRef,
  toRef,
  unref,
  useAttrs,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { ElIcon } from '@element-plus/components/icon'
import {
  CircleClose,
  Hide as IconHide,
  View as IconView,
} from '@element-plus/icons-vue'
import { NOOP, debugWarn } from '@element-plus/utils'
import { useCursor } from '@element-plus/hooks'
import { useInputDOM, useInputEvents, useInputStates } from './hooks'
import WordLimit from './word-limit.vue'
import StateIcon from './state-icon.vue'
import { inputEmits, inputProps } from './input'

defineOptions({
  name: 'ElInput',
  inheritAttrs: false,
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const attrs = useAttrs()

const inputElRef = shallowRef<HTMLInputElement | HTMLTextAreaElement>()
const input = computed(() =>
  !unref(isTextarea) ? (inputElRef.value as HTMLInputElement) : undefined
)
const textarea = computed(() =>
  unref(isTextarea) ? (inputElRef.value as HTMLTextAreaElement) : undefined
)
const [recordCursor, setCursor] = useCursor(input)
const {
  containerAttrs,
  inputDisabled,
  formItem,
  isComposing,
  hovering,
  focusing,
  nativeInputValue,
  isWordLimitVisible,
  inputId,
  textLength,
  showPwdVisible,
  showClear,
  validateState,
  needStatusIcon,
  inputType,
  suffixVisible,
  isTextarea,
  passwordVisible,
  inputExceeded,
} = useInputStates(props, attrs)
const {
  setNativeInputValue,
  resizeTextarea,
  onTogglePasswordVisible,
  blur,
  focus,
  select,
  refSetter,
  containerKls,
  containerStyle,
  wordLimitStyle,
  textareaStyle,
  ns,
  nsTextarea,
  wrapperKls,
} = useInputDOM(props, attrs, {
  focusing,
  inputDisabled,
  inputExceeded,
  showClear,
  showPwdVisible,
  passwordVisible,
  nativeInputValue,
  inputElRef,
})

const {
  clear,
  handleChange,
  handleFocus,
  handleBlur,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
  handleInput,
  handleMouseEnter,
  handleMouseLeave,
  handleKeydown,
} = useInputEvents(props, emit, {
  hovering,
  isComposing,
  focusing,
  nativeInputValue,
  setCursor,
  setNativeInputValue,
  recordCursor,
})

const commonProps = computed(() => {
  const {
    tabindex,
    readonly,
    autocomplete,
    label: ariaLabel,
    form,
    placeholder,
  } = props
  return {
    ...attrs,
    autocomplete,
    ariaLabel,
    disabled: unref(inputDisabled),
    form,
    id: unref(inputId),
    placeholder,
    tabindex,
    readonly,
    onCompositionstart: handleCompositionStart,
    onCompositionupdate: handleCompositionUpdate,
    onCompositionend: handleCompositionEnd,
    onChange: handleChange,
    onInput: handleInput,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeydown: handleKeydown,
  }
})

const textareaProps = computed(() => ({
  ...unref(commonProps),
  class: nsTextarea.e('inner'),
  style: unref(textareaStyle),
}))

const inputElProps = computed(() => {
  const { parser, formatter, inputStyle: style } = props

  return {
    ...unref(commonProps),
    type: unref(inputType),
    style,
    class: ns.e('inner'),
    parser,
    formatter,
  }
})

const passwordIcon = computed(() =>
  passwordVisible.value ? IconView : IconHide
)

onMounted(() => {
  watch(
    () => [props.formatter, props.parser],
    ([formatter, parser]) => {
      if (!formatter && parser) {
        debugWarn(
          'ElInput',
          'If you set the parser, you also need to set the formatter.'
        )
      }
    },
    {
      deep: true,
      immediate: true,
    }
  )

  watch(
    () => props.type,
    () => {
      if (unref(isTextarea)) {
        useResizeObserver(inputElRef, (entries) => {
          if (!unref(isWordLimitVisible) || props.resize !== 'both') return
          const entry = entries[0]
          const { width } = entry.contentRect
          wordLimitStyle.value = {
            /** right: 100% - width + padding(15) + right(6) */
            right: `calc(100% - ${width + 15 + 6}px)`,
          }
        })
      }

      nextTick(() => {
        // when change between <input> and <textarea>,
        // update DOM dependent value and styles
        // https://github.com/ElemeFE/element/issues/14857
        setNativeInputValue()
        resizeTextarea()
      })
    },
    {
      immediate: true,
    }
  )

  watch(
    () => props.modelValue,
    () => {
      nextTick(() => resizeTextarea())
      if (props.validateEvent) {
        formItem?.validate?.('change').catch((err) => debugWarn(err))
      }
    },
    {
      immediate: true,
    }
  )
  // native input value is set explicitly
  // do not use v-model / :value in template
  // see: https://github.com/ElemeFE/element/issues/14521
  watch(nativeInputValue, () => setNativeInputValue(), {
    immediate: true,
  })
})

defineExpose({
  /** @description HTML input element */
  input,
  /** @description HTML textarea element */
  textarea,
  /** @description HTML element, input or textarea */
  ref: inputElRef,
  /** @description style of textarea. */
  textareaStyle,

  /** @description from props (used on unit test) */
  autosize: toRef(props, 'autosize'),

  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  select,
  /** @description clear input value */
  clear,
  /** @description resize textarea. */
  resizeTextarea,
})
</script>
