<template>
  <div
    v-show="type !== 'hidden'"
    :class="[
      type === 'textarea' ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize),
      nsInput.is('disabled', inputDisabled),
      nsInput.is('exceed', inputExceed),
      {
        [nsInput.b('group')]: $slots.prepend || $slots.append,
        [nsInput.bm('group', 'append')]: $slots.append,
        [nsInput.bm('group', 'prepend')]: $slots.prepend,
        [nsInput.m('prefix')]: $slots.prefix || prefixIcon,
        [nsInput.m('suffix')]:
          $slots.suffix || suffixIcon || clearable || showPassword,
        [nsInput.m('suffix--password-clear')]: showClear && showPwdVisible,
      },
      $attrs.class,
    ]"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" :class="nsInput.be('group', 'prepend')">
        <slot name="prepend" />
      </div>

      <input
        ref="input"
        :class="nsInput.e('inner')"
        v-bind="attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        :placeholder="placeholder"
        :style="inputStyleInner"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />

      <!-- prefix slot -->
      <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
        <span ref="innerPrefixRef" :class="nsInput.e('prefix-inner')">
          <slot name="prefix" />
          <el-icon v-if="prefixIcon" :class="nsInput.e('icon')">
            <component :is="prefixIcon" />
          </el-icon>
        </span>
      </span>

      <!-- suffix slot -->
      <span v-if="suffixVisible" :class="nsInput.e('suffix')">
        <span ref="innerSuffixRef" :class="nsInput.e('suffix-inner')">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix" />
            <el-icon v-if="suffixIcon" :class="nsInput.e('icon')">
              <component :is="suffixIcon" />
            </el-icon>
          </template>
          <el-icon
            v-if="showClear"
            :class="[nsInput.e('icon'), nsInput.e('clear')]"
            @mousedown.prevent
            @click="clear"
          >
            <circle-close />
          </el-icon>
          <el-icon
            v-if="showPwdVisible"
            :class="[nsInput.e('icon'), nsInput.e('clear')]"
            @click="handlePasswordVisible"
          >
            <component :is="passwordIcon" />
          </el-icon>
          <span v-if="isWordLimitVisible" :class="nsInput.e('count')">
            <span :class="nsInput.e('count-inner')">
              {{ textLength }} / {{ attrs.maxlength }}
            </span>
          </span>
        </span>
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
      </span>

      <!-- append slot -->
      <div v-if="$slots.append" :class="nsInput.be('group', 'append')">
        <slot name="append" />
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        ref="textarea"
        :class="nsTextarea.e('inner')"
        v-bind="attrs"
        :tabindex="tabindex"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :style="textareaStyle"
        :aria-label="label"
        :placeholder="placeholder"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />
      <span v-if="isWordLimitVisible" :class="nsInput.e('count')">
        {{ textLength }} / {{ attrs.maxlength }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  shallowRef,
  toRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch,
} from 'vue'
import { isClient } from '@vueuse/core'
import { isNil } from 'lodash-unified'
import { ElIcon } from '@element-plus/components/icon'
import {
  CircleClose,
  Hide as IconHide,
  View as IconView,
} from '@element-plus/icons-vue'
import {
  ValidateComponentsMap,
  debugWarn,
  isKorean,
  isObject,
} from '@element-plus/utils'
import {
  useAttrs,
  useDisabled,
  useFormItem,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { calcTextareaHeight } from './utils'
import { inputEmits, inputProps } from './input'
import type { CSSProperties, Ref, StyleValue } from 'vue'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const PENDANT_MAP = {
  suffix: 'append',
  prefix: 'prepend',
} as const

defineOptions({
  name: 'ElInput',
  inheritAttrs: false,
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const instance = getCurrentInstance()!
const rawAttrs = useRawAttrs()
const slots = useSlots()

const attrs = useAttrs()
const { form, formItem } = useFormItem()
const inputSize = useSize()
const inputDisabled = useDisabled()
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')

const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()

const focused = ref(false)
const hovering = ref(false)
const isComposing = ref(false)
const passwordVisible = ref(false)
const textareaCalcStyle = shallowRef(props.inputStyle)

const _ref = computed(() => input.value || textarea.value)

const needStatusIcon = computed(() => form?.statusIcon ?? false)
const validateState = computed(() => formItem?.validateState || '')
const validateIcon = computed(() => ValidateComponentsMap[validateState.value])
const passwordIcon = computed(() =>
  passwordVisible.value ? IconView : IconHide
)
const containerStyle = computed<StyleValue>(() => [
  rawAttrs.style as StyleValue,
  props.inputStyle,
])
const textareaStyle = computed<StyleValue>(() => [
  props.inputStyle,
  textareaCalcStyle.value,
  { resize: props.resize },
])
const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue)
)
const showClear = computed(
  () =>
    props.clearable &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (focused.value || hovering.value)
)
const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !inputDisabled.value &&
    !props.readonly &&
    (!!nativeInputValue.value || focused.value)
)
const isWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!attrs.value.maxlength &&
    (props.type === 'text' || props.type === 'textarea') &&
    !inputDisabled.value &&
    !props.readonly &&
    !props.showPassword
)
const textLength = computed(() => Array.from(nativeInputValue.value).length)
const inputExceed = computed(
  () =>
    // show exceed style if length of initial value greater then maxlength
    !!isWordLimitVisible.value &&
    textLength.value > Number(attrs.value.maxlength)
)
const suffixVisible = computed(
  () =>
    !!slots.suffix ||
    !!props.suffixIcon ||
    showClear.value ||
    props.showPassword ||
    isWordLimitVisible.value ||
    (!!validateState.value && needStatusIcon.value)
)

const resizeTextarea = () => {
  const { type, autosize } = props

  if (!isClient || type !== 'textarea') return

  if (autosize) {
    const minRows = isObject(autosize) ? autosize.minRows : undefined
    const maxRows = isObject(autosize) ? autosize.maxRows : undefined
    textareaCalcStyle.value = {
      ...calcTextareaHeight(textarea.value!, minRows, maxRows),
    }
  } else {
    textareaCalcStyle.value = {
      minHeight: calcTextareaHeight(textarea.value!).minHeight,
    }
  }
}

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const calcIconOffset = (place: 'prefix' | 'suffix') => {
  const { el } = instance.vnode
  if (!el) return
  const elList = Array.from(
    (el as Element).querySelectorAll<HTMLSpanElement>(`.${nsInput.e(place)}`)
  )
  const target = elList.find((item) => item.parentNode === el)
  if (!target) return

  const pendant = PENDANT_MAP[place]

  if (slots[pendant]) {
    target.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${
      el.querySelector(`.${nsInput.be('group', pendant)}`).offsetWidth
    }px)`
  } else {
    target.removeAttribute('style')
  }
}

const updateIconOffset = () => {
  calcIconOffset('prefix')
  calcIconOffset('suffix')
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement

  // should not emit input during composition
  // see: https://github.com/ElemeFE/element/issues/10516
  if (isComposing.value) return

  // hack for https://github.com/ElemeFE/element/issues/8548
  // should remove the following line when we don't support IE
  if (value === nativeInputValue.value) return

  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)

  // ensure native input value is controlled
  // see: https://github.com/ElemeFE/element/issues/12850
  await nextTick()
  setNativeInputValue()
}

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
  const text = (event.target as HTMLInputElement)?.value
  const lastCharacter = text[text.length - 1] || ''
  isComposing.value = !isKorean(lastCharacter)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const focus = async () => {
  // see: https://github.com/ElemeFE/element/issues/18573
  await nextTick()
  _ref.value?.focus()
}

const blur = () => _ref.value?.blur()

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
  if (props.validateEvent) {
    formItem?.validate?.('blur').catch((err) => debugWarn(err))
  }
}

const handleMouseLeave = (evt: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', evt)
}

const handleMouseEnter = (evt: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', evt)
}

const handleKeydown = (evt: KeyboardEvent) => {
  emit('keydown', evt)
}

const select = () => {
  _ref.value?.select()
}

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

watch(
  () => props.modelValue,
  () => {
    nextTick(() => resizeTextarea())
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

// native input value is set explicitly
// do not use v-model / :value in template
// see: https://github.com/ElemeFE/element/issues/14521
watch(nativeInputValue, () => setNativeInputValue())

// when change between <input> and <textarea>,
// update DOM dependent value and styles
// https://github.com/ElemeFE/element/issues/14857
watch(
  () => props.type,
  async () => {
    await nextTick()
    setNativeInputValue()
    resizeTextarea()
    updateIconOffset()
  }
)

// Get the widths of 'suffix' and 'prefix' to set the padding property of the input
// https://github.com/element-plus/element-plus/issues/6464
const innerSuffixRef = ref<HTMLElement>()
const innerPrefixRef = ref<HTMLElement>()
const inputStyleInner = ref<CSSProperties>({})
const getSuffixOrPrefixWidth = (
  slotElm: Ref<HTMLElement>,
  defaultVal: number
): number => {
  if (slotElm.value) {
    const slotElmWidth = (slotElm.value as HTMLElement).offsetWidth
    return slotElmWidth > 0 ? slotElmWidth + 16 : defaultVal
  }
  return defaultVal
}
const setInputPadding = (): void => {
  if (innerSuffixRef.value && !innerPrefixRef.value) {
    inputStyleInner.value = {
      paddingRight: `${getSuffixOrPrefixWidth(innerSuffixRef, 0)}px`,
      ...props.inputStyle,
    }
    return
  }
  if (!innerSuffixRef.value && innerPrefixRef.value) {
    inputStyleInner.value = {
      paddingLeft: `${getSuffixOrPrefixWidth(innerPrefixRef, 11)}px`,
      ...props.inputStyle,
    }
    return
  }
  if (innerSuffixRef.value && innerPrefixRef.value) {
    inputStyleInner.value = {
      paddingRight: `${getSuffixOrPrefixWidth(innerSuffixRef, 0)}px`,
      paddingLeft: `${getSuffixOrPrefixWidth(innerPrefixRef, 11)}px`,
      ...props.inputStyle,
    }
    return
  }
  // If the user sets 'padding', use the 'padding' set by the user
  inputStyleInner.value = {
    ...props.inputStyle,
  }
}
watch(showClear, () => {
  nextTick(() => {
    setInputPadding()
  })
})

onMounted(async () => {
  setInputPadding()
  setNativeInputValue()
  updateIconOffset()
  await nextTick()
  resizeTextarea()
  setInputPadding()
})

onUpdated(async () => {
  await nextTick()
  updateIconOffset()
})

defineExpose({
  /** @description HTML input element */
  input,
  /** @description HTML textarea element */
  textarea,
  /** @description HTML element, input or textarea */
  ref: _ref,
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
