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
        'el-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
      },
      $attrs.class
    ]"
    :style="$attrs.style"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div v-if="$slots.prepend" class="el-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="input"
        class="el-input__inner"
        v-bind="attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
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
      >
      <!-- 前置内容 -->
      <span v-if="$slots.prefix || prefixIcon" class="el-input__prefix">
        <slot name="prefix"></slot>
        <i
          v-if="prefixIcon"
          :class="['el-input__icon', prefixIcon]"
        ></i>
      </span>
      <!-- 后置内容 -->
      <span v-if="getSuffixVisible()" class="el-input__suffix">
        <span class="el-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i v-if="suffixIcon" :class="['el-input__icon', suffixIcon]"></i>
          </template>
          <i
            v-if="showClear"
            class="el-input__icon el-icon-circle-close el-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i v-if="showPwdVisible" class="el-input__icon el-icon-view el-input__clear" @click="handlePasswordVisible"></i>
          <span v-if="isWordLimitVisible" class="el-input__count">
            <span class="el-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
        <i v-if="validateState" :class="['el-input__icon', 'el-input__validateIcon', validateIcon]"></i>
      </span>
      <!-- 后置元素 -->
      <div v-if="$slots.append" class="el-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
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
    >
    </textarea>
    <span v-if="isWordLimitVisible && type === 'textarea'" class="el-input__count">{{ textLength }}/{{ upperLimit }}</span>
  </div>
</template>

<script lang='ts'>
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
import { useAttrs } from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT, VALIDATE_STATE_MAP } from '@element-plus/utils/constants'
import { isObject, useGlobalConfig } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'
import { isKorean } from '@element-plus/utils/isDef'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { elFormKey, elFormItemKey } from '@element-plus/form'
import calcTextareaHeight from './calcTextareaHeight'

import type { PropType } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/form'

type AutosizeProp = {
  minRows?: number
  maxRows?: number
} | boolean

const PENDANT_MAP = {
  suffix: 'append',
  prefix: 'prepend',
}

export default defineComponent({
  name: 'ElInput',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    resize: {
      type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
      validator: (val: string) => ['none', 'both', 'horizontal', 'vertical'].includes(val),
    },
    autosize: {
      type: [Boolean, Object] as PropType<AutosizeProp>,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string) => ['on', 'off'].includes(val),
    },
    placeholder: {
      type: String,
    },
    form: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
    },
    tabindex: {
      type: [Number, String],
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    inputStyle: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: [UPDATE_MODEL_EVENT, 'input', 'change', 'focus', 'blur', 'clear',
    'mouseleave', 'mouseenter', 'keydown'],

  setup(props, ctx) {
    const instance = getCurrentInstance()
    const attrs = useAttrs()
    const $ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const input = ref(null)
    const textarea = ref (null)
    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const passwordVisible = ref(false)
    const _textareaCalcStyle = shallowRef(props.inputStyle)

    const inputOrTextarea = computed(() => input.value || textarea.value)
    const inputSize = computed(() => props.size || elFormItem.size || $ELEMENT.size)
    const needStatusIcon = computed(() => elForm.statusIcon)
    const validateState = computed(() => elFormItem.validateState || '')
    const validateIcon = computed(() => VALIDATE_STATE_MAP[validateState.value])
    const computedTextareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
      resize: props.resize,
    }))
    const inputDisabled = computed(() => props.disabled || elForm.disabled)
    const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue))
    const upperLimit = computed(() => ctx.attrs.maxlength)
    const showClear = computed(() => {
      return props.clearable &&
        !inputDisabled.value &&
        !props.readonly &&
        nativeInputValue.value &&
        (focused.value || hovering.value)
    })
    const showPwdVisible = computed(() => {
      return props.showPassword &&
        !inputDisabled.value &&
        !props.readonly &&
        (!!nativeInputValue.value || focused.value)
    })
    const isWordLimitVisible = computed(() => {
      return props.showWordLimit &&
        ctx.attrs.maxlength &&
        (props.type === 'text' || props.type === 'textarea') &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword
    })
    const textLength = computed(() => {
      return typeof props.modelValue === 'number' ? String(props.modelValue).length : (props.modelValue || '').length
    })
    const inputExceed = computed(() => {
      // show exceed style if length of initial value greater then maxlength
      return isWordLimitVisible.value && (textLength.value > upperLimit.value)
    })

    const resizeTextarea = () => {
      const { type, autosize } = props

      if (isServer || type !== 'textarea') return

      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0
        _textareaCalcStyle.value = {
          ...props.inputStyle,
          ...calcTextareaHeight(textarea.value, minRows, maxRows),
        }
      } else {
        _textareaCalcStyle.value = {
          ...props.inputStyle,
          minHeight: calcTextareaHeight(textarea.value).minHeight,
        }
      }
    }

    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }

    const calcIconOffset = place => {
      const { el } = instance.vnode
      const elList: HTMLSpanElement[] = Array.from(el.querySelectorAll(`.el-input__${place}`))
      const target = elList.find(item => item.parentNode === el)

      if (!target) return

      const pendant = PENDANT_MAP[place]

      if (ctx.slots[pendant]) {
        target.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)`
      } else {
        target.removeAttribute('style')
      }
    }

    const updateIconOffset = () => {
      calcIconOffset('prefix')
      calcIconOffset('suffix')
    }

    const handleInput = event => {
      const { value } = event.target

      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (value === nativeInputValue.value) return

      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('input', value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      nextTick(setNativeInputValue)
    }

    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }

    const focus = () => {
      // see: https://github.com/ElemeFE/element/issues/18573
      nextTick(() => {
        inputOrTextarea.value.focus()
      })
    }

    const blur = () => {
      inputOrTextarea.value.blur()
    }

    const handleFocus = event => {
      focused.value = true
      ctx.emit('focus', event)
    }

    const handleBlur = event => {
      focused.value = false
      ctx.emit('blur', event)
      if (props.validateEvent) {
        elFormItem.formItemMitt?.emit('el.form.blur', [props.modelValue])
      }
    }

    const select = () => {
      inputOrTextarea.value.select()
    }

    const handleCompositionStart = () => {
      isComposing.value = true
    }

    const handleCompositionUpdate = event => {
      const text = event.target.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !isKorean(lastCharacter)
    }

    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    const clear = () => {
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit('change', '')
      ctx.emit('clear')
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const getSuffixVisible = () => {
      return ctx.slots.suffix ||
        props.suffixIcon ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value ||
        (validateState.value && needStatusIcon.value)
    }

    watch(() => props.modelValue, val => {
      nextTick(resizeTextarea)
      if (props.validateEvent) {
        elFormItem.formItemMitt?.emit('el.form.change', [val])
      }
    })

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    watch(nativeInputValue, () => {
      setNativeInputValue()
    })

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    watch(() => props.type, () => {
      nextTick(() => {
        setNativeInputValue()
        resizeTextarea()
        updateIconOffset()
      })
    })

    onMounted(() => {
      setNativeInputValue()
      updateIconOffset()
      nextTick(resizeTextarea)
    })

    onUpdated(() => {
      nextTick(updateIconOffset)
    })

    const onMouseLeave = e => {
      hovering.value = false
      ctx.emit('mouseleave', e)
    }

    const onMouseEnter = e => {
      hovering.value = true
      ctx.emit('mouseenter', e)
    }

    const handleKeydown = e => {
      ctx.emit('keydown', e)
    }

    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      computedTextareaStyle,
      resizeTextarea,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      upperLimit,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
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
      getSuffixVisible,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
    }
  },
})

</script>
