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
      }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
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
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
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
      v-bind="$attrs"
      :tabindex="tabindex"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyle"
      :aria-label="label"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
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
  reactive,
  onMounted,
  onUpdated,
} from 'vue'
import isServer from '../../utils/isServer'
import calcTextareaHeight from './calcTextareaHeight'

const ELEMENT: {
  size?: number
} = {}
// TODOS: replace these interface definition with actual ElForm interface
interface ElForm {
  disabled: boolean
  statusIcon: string
}
interface ElFormItem {
  elFormItemSize: number
  validateState: string
}
type AutosizeProp = {
  minRows?: number
  maxRows?: number
} | boolean

export default defineComponent({
  name: 'ElInput',

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
      type: String,
      default: '',
      validator: (val: string): boolean => ['', 'large', 'medium', 'small', 'mini'].indexOf(val) > -1,
    },
    resize: {
      type: String,
      default: '',
      validator: (val: string): boolean => ['', 'none', 'both', 'horizontal', 'vertical'].indexOf(val) > -1,
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string): boolean => ['on', 'off'].indexOf(val) > -1,
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
      default: '',
    },
    tabindex: {
      type: String,
      default: '',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['update:modelValue', 'change', 'focus', 'blur', 'clear'],

  setup(props, ctx) {
    const instance = getCurrentInstance()
    const getInput = () => {
      return (instance.refs.input || instance.refs.textarea) as HTMLInputElement
    }

    const elForm = inject<ElForm>('elForm', {} as any)
    const elFormItem = inject<ElFormItem>('elFormItem', {} as any)

    let _textareaCalcStyle = reactive({ value: {} })
    let focused = ref(false)
    let hovering = ref(false)
    let isComposing = ref(false)
    let passwordVisible = ref(false)

    const _elFormItemSize = computed(() => {
      return (elFormItem || {}).elFormItemSize
    })
    const inputSize = computed(() => {
      return props.size || _elFormItemSize.value || (ELEMENT || {}).size
    })
    const needStatusIcon = computed(() => {
      return elForm ? elForm.statusIcon : false
    })
    const validateState = computed(() => {
      return elFormItem ? elFormItem.validateState : ''
    })
    const validateIcon = computed(() => {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close',
      }[validateState.value]
    })
    const textareaStyle = computed(() => {
      return Object.assign({}, _textareaCalcStyle.value, { resize: props.resize })
    })
    const inputDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled
    })
    const nativeInputValue = computed(() => {
      return String(props.modelValue)
    })
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
    const upperLimit = computed(() => {
      return ctx.attrs.maxlength
    })
    const textLength = computed(() => {
      return typeof props.modelValue === 'number' ? String(props.modelValue).length : (props.modelValue || '').length
    })
    const inputExceed = computed(() => {
      // show exceed style if length of initial value greater then maxlength
      return isWordLimitVisible.value && (textLength.value > upperLimit.value)
    })

    // methods
    const resizeTextarea = () => {
      if (isServer) return
      if (props.type !== 'textarea') return
      const autosize = props.autosize as AutosizeProp
      if (!autosize) {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(instance.refs.textarea).minHeight,
        }
        return
      }
      const minRows = typeof autosize === 'object' ? autosize.minRows : void 0
      const maxRows = typeof autosize === 'object' ? autosize.maxRows : void 0
      _textareaCalcStyle.value = calcTextareaHeight(instance.refs.textarea, minRows, maxRows)
    }
    const setNativeInputValue = () => {
      const input = getInput()
      if (!input) return
      if (input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }
    const calcIconOffset = place => {
      let elList = [].slice.call(instance.vnode.el.querySelectorAll(`.el-input__${place}`) || [])
      if (!elList.length) return
      let el = null
      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === instance.vnode.el) {
          el = elList[i]
          break
        }
      }
      if (!el) return
      const pendantMap = {
        suffix: 'append',
        prefix: 'prepend',
      }

      const pendant = pendantMap[place]
      if (ctx.slots[pendant]) {
        el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${instance.vnode.el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)`
      } else {
        el.removeAttribute('style')
      }
    }
    const updateIconOffset = () => {
      calcIconOffset('prefix')
      calcIconOffset('suffix')
    }
    const handleInput = event => {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === nativeInputValue.value) return

      ctx.emit('update:modelValue', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      nextTick(setNativeInputValue)
    }
    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }
    const focus = () => {
      getInput().focus()
    }
    // const blur = () => {
    //   getInput().blur()
    // }
    const handleFocus = event => {
      focused.value = true
      ctx.emit('focus', event)
    }
    const handleBlur = event => {
      focused.value = false
      ctx.emit('blur', event)
      // if (props.validateEvent) {
      //   this.dispatch('ElFormItem', 'el.form.blur', [props.modelValue])
      // }
    }
    // const select = () => {
    //   getInput().select()
    // }
    const handleCompositionStart = () => {
      isComposing.value = true
    }
    const handleCompositionUpdate = event => {
      // TODO: korean support?
      // const text = event.target.value
      // const lastCharacter = text[text.length - 1] || ''
      // isComposing.value = !isKorean(lastCharacter)
    }
    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }
    const clear = () => {
      ctx.emit('update:modelValue', '')
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

    // watch
    watch(() => props.modelValue, val => {
      nextTick(resizeTextarea)
      // TODO: should dispatch event to parent component <el-form-item>;
      // if (props.validateEvent) {
      //   dispatch('ElFormItem', 'el.form.change', [val])
      // }
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

    // created() {
    //   this.$on('inputSelect', this.select);
    // }

    onMounted(() => {
      setNativeInputValue()
      updateIconOffset()
      nextTick(resizeTextarea)
    })

    onUpdated(() => {
      nextTick(updateIconOffset)
    })

    return {
      inputSize,
      validateState,
      validateIcon,
      textareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      upperLimit,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      getSuffixVisible,
    }
  },
})
</script>
