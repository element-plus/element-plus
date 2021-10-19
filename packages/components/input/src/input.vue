<template>
  <div
    :class="[
      type === 'textarea' ? 'el-textarea' : 'el-input',
      inputSize ? 'el-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'is-exceed': inputExceed,
        'el-input-group': $slots.prepend || $slots.append,
        'el-input-group--append': $slots.append,
        'el-input-group--prepend': $slots.prepend,
        'el-input--prefix': $slots.prefix || prefixIcon,
        'el-input--suffix':
          $slots.suffix || suffixIcon || clearable || showPassword,
        'el-input--suffix--password-clear': clearable && showPassword,
      },
      $attrs.class,
    ]"
    :style="containerStyle"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="el-input-group__prepend">
        <slot name="prepend" />
      </div>

      <input
        ref="input"
        class="el-input__inner"
        v-bind="attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        :placeholder="placeholder"
        :style="inputStyle"
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
      <span v-if="$slots.prefix || prefixIcon" class="el-input__prefix">
        <slot name="prefix" />
        <i v-if="prefixIcon" :class="['el-input__icon', prefixIcon]"></i>
      </span>

      <!-- suffix slot -->
      <span v-if="suffixVisible" class="el-input__suffix">
        <span class="el-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix" />
            <i v-if="suffixIcon" :class="['el-input__icon', suffixIcon]"></i>
          </template>

          <i
            v-if="showClear"
            class="el-input__icon el-icon-circle-close el-input__clear"
            @mousedown.prevent
            @click="clear"
          />

          <i
            v-if="showPwdVisible"
            class="el-input__icon el-icon-view el-input__clear"
            @click="handlePasswordVisible"
          />

          <span v-if="isWordLimitVisible" class="el-input__count">
            <span class="el-input__count-inner">
              {{ textLength }} / {{ maxlength }}
            </span>
          </span>
        </span>
        <i
          v-if="validateState"
          :class="['el-input__icon', 'el-input__validateIcon', validateIcon]"
        />
      </span>

      <!-- append slot -->
      <div v-if="$slots.append" class="el-input-group__append">
        <slot name="append" />
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        ref="textarea"
        class="el-textarea__inner"
        v-bind="attrs"
        :tabindex="tabindex"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :style="computedTextareaStyle"
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
      <span v-if="isWordLimitVisible" class="el-input__count">
        {{ textLength }} / {{ maxlength }}
      </span>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  computed,
  watch,
  nextTick,
  getCurrentInstance,
  ref,
  shallowRef,
  onMounted,
  onUpdated,
} from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { useAttrs, useFormItem } from '@element-plus/hooks'
import {
  UPDATE_MODEL_EVENT,
  VALIDATE_STATE_MAP,
} from '@element-plus/utils/constants'
import { isObject } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'
import { isKorean } from '@element-plus/utils/isDef'
import { calcTextareaHeight } from './calc-textarea-height'
import { inputProps, inputEmits } from './input'

import type { StyleValue } from '@element-plus/utils/types'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const PENDANT_MAP = {
  suffix: 'append',
  prefix: 'prepend',
} as const

export default defineComponent({
  name: 'ElInput',
  inheritAttrs: false,

  props: inputProps,
  emits: inputEmits,

  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance = getCurrentInstance()!
    const attrs = useAttrs()

    const elForm = inject(elFormKey, undefined)
    const elFormItem = inject(elFormItemKey, undefined)

    const { size: inputSize, disabled: inputDisabled } = useFormItem({})

    const input = ref<HTMLInputElement>()
    const textarea = ref<HTMLTextAreaElement>()
    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const passwordVisible = ref(false)
    const _textareaCalcStyle = shallowRef(props.inputStyle)

    const inputOrTextarea = computed(() => input.value || textarea.value)
    const needStatusIcon = computed(() => elForm?.statusIcon ?? false)
    const validateState = computed(() => elFormItem?.validateState || '')
    const validateIcon = computed(() => VALIDATE_STATE_MAP[validateState.value])
    const containerStyle = computed(() => rawAttrs.style as StyleValue)
    const computedTextareaStyle = computed<StyleValue>(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize },
    ])
    const nativeInputValue = computed(() =>
      props.modelValue === null || props.modelValue === undefined
        ? ''
        : String(props.modelValue)
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
        !!props.maxlength &&
        (props.type === 'text' || props.type === 'textarea') &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword
    )
    const textLength = computed(() => Array.from(nativeInputValue.value).length)
    const inputExceed = computed(
      () =>
        // show exceed style if length of initial value greater then maxlength
        !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
    )

    const resizeTextarea = () => {
      const { type, autosize } = props

      if (isServer || type !== 'textarea') return

      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : undefined
        const maxRows = isObject(autosize) ? autosize.maxRows : undefined
        _textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value!, minRows, maxRows),
        }
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value!).minHeight,
        }
      }
    }

    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }

    const calcIconOffset = (place: 'prefix' | 'suffix') => {
      const { el } = instance.vnode
      if (!el) return
      const elList: HTMLSpanElement[] = Array.from(
        el.querySelectorAll(`.el-input__${place}`)
      )
      const target = elList.find((item) => item.parentNode === el)

      if (!target) return

      const pendant = PENDANT_MAP[place]

      if (slots[pendant]) {
        target.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${
          el.querySelector(`.el-input-group__${pendant}`).offsetWidth
        }px)`
      } else {
        target.removeAttribute('style')
      }
    }

    const updateIconOffset = () => {
      calcIconOffset('prefix')
      calcIconOffset('suffix')
    }

    const handleInput = (event: Event) => {
      let { value } = event.target as TargetElement

      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (value === nativeInputValue.value) return

      // if set maxlength
      if (props.maxlength) {
        const sliceIndex = inputExceed.value
          ? textLength.value
          : props.maxlength
        //  Convert value to an array for get a right lenght
        value = Array.from(value).slice(0, Number(sliceIndex)).join('')
      }

      emit(UPDATE_MODEL_EVENT, value)
      emit('input', value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      nextTick(setNativeInputValue)
    }

    const handleChange = (event: Event) => {
      emit('change', (event.target as TargetElement).value)
    }

    const focus = () => {
      // see: https://github.com/ElemeFE/element/issues/18573
      nextTick(() => {
        inputOrTextarea.value?.focus()
      })
    }

    const blur = () => {
      inputOrTextarea.value?.blur()
    }

    const handleFocus = (event: FocusEvent) => {
      focused.value = true
      emit('focus', event)
    }

    const handleBlur = (event: FocusEvent) => {
      focused.value = false
      emit('blur', event)
      if (props.validateEvent) {
        elFormItem?.validate?.('blur')
      }
    }

    const select = () => {
      inputOrTextarea.value?.select()
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

    const clear = () => {
      emit(UPDATE_MODEL_EVENT, '')
      emit('change', '')
      emit('clear')
      emit('input', '')
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const suffixVisible = computed(
      () =>
        !!slots.suffix ||
        !!props.suffixIcon ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value ||
        (!!validateState.value && needStatusIcon.value)
    )

    watch(
      () => props.modelValue,
      () => {
        nextTick(resizeTextarea)
        if (props.validateEvent) {
          elFormItem?.validate?.('change')
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
      () => {
        nextTick(() => {
          setNativeInputValue()
          resizeTextarea()
          updateIconOffset()
        })
      }
    )

    onMounted(() => {
      setNativeInputValue()
      updateIconOffset()
      nextTick(resizeTextarea)
    })

    onUpdated(() => {
      nextTick(updateIconOffset)
    })

    const onMouseLeave = (evt: MouseEvent) => {
      hovering.value = false
      emit('mouseleave', evt)
    }

    const onMouseEnter = (evt: MouseEvent) => {
      hovering.value = true
      emit('mouseenter', evt)
    }

    const handleKeydown = (evt: KeyboardEvent) => {
      emit('keydown', evt)
    }

    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      containerStyle,
      computedTextareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
      suffixVisible,

      resizeTextarea,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      select,
      focus,
      blur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
    }
  },
})
</script>
