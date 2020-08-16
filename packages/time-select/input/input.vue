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
      },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @inputSelect="select"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div v-if="$slots.prepend" class="el-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="refInput"
        :tabindex="tabindex"
        class="el-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
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
        <i v-if="prefixIcon" class="el-input__icon" :class="prefixIcon"></i>
      </span>
      <!-- 后置内容 -->
      <span v-if="getSuffixVisible()" class="el-input__suffix">
        <span class="el-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i v-if="suffixIcon" class="el-input__icon" :class="suffixIcon"></i>
          </template>
          <i
            v-if="showClear"
            class="el-input__icon el-icon-circle-close el-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i
            v-if="showPwdVisible"
            class="el-input__icon el-icon-view el-input__clear"
            @click="handlePasswordVisible"
          ></i>
          <span v-if="isWordLimitVisible" class="el-input__count">
            <span
              class="el-input__count-inner"
            >{{ textLength }}/{{ upperLimit }}</span>
          </span>
        </span>
        <i
          v-if="validateState"
          class="el-input__icon"
          :class="['el-input__validateIcon', validateIcon]"
        ></i>
      </span>
      <!-- 后置元素 -->
      <div v-if="$slots.append" class="el-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      ref="refTextarea"
      :tabindex="tabindex"
      class="el-textarea__inner"
      v-bind="$attrs"
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
    ></textarea>
    <span
      v-if="isWordLimitVisible && type === 'textarea'"
      class="el-input__count"
    >{{ textLength }}/{{ upperLimit }}</span>
  </div>
</template>
<script lang="ts">
import {
  ref,
  computed,
  nextTick,
  reactive,
  toRefs,
  onUpdated,
  defineComponent,
  PropType,
  Ref,
  watch,
  onMounted,
  getCurrentInstance,
} from 'vue'
import calcTextareaHeight from './calcTextareaHeight.ts'
const isNumber = () => false
const isKorean = () => false
export default defineComponent({
  name: 'ElInput',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number],
    },
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
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
    tabindex: String,
  },

  //See: https://github.com/vuejs/rfcs/pull/154#discussion_r403063875
  emits: ['update:modelValue', 'change', 'clear', 'input'],

  setup(props, ctx) {
    const { validateState, size, needStatusIcon, disabled } = {}
    const textareaCalcStyle = ref({})
    const focused: Ref<boolean> = ref(false)
    const isComposing: Ref<boolean> = ref(false)
    // ref template
    const refInput: Ref<HTMLInputElement> = ref(null)
    const refTextarea: Ref<HTMLTextAreaElement> = ref(null)

    const nativeInputValue = computed(() => {
      return props.modelValue === null || props.modelValue === undefined
        ? ''
        : String(props.modelValue as number)
    })

    const nativeInputType = computed(() => props.type)

    const state = reactive({
      validateState,
      inputSize: size,
      inputDisabled: disabled,
      needStatusIcon,
      hovering: false,
      passwordVisible: false,
      autocomplete: props.autocomplete,
      modelValue: props.modelValue,
      suffixIcon: props.suffixIcon,
      showPassword: props.showPassword,
      validateEvent: props.validateEvent,
      autosize: props.autosize,
      type: nativeInputType,

      validateIcon: computed(() => {
        return {
          validating: 'el-icon-loading',
          success: 'el-icon-circle-check',
          error: 'el-icon-circle-close',
        }[state.validateState]
      }),
      textareaStyle: computed(() => {
        return { ...textareaCalcStyle.value, ...{ resize: props.resize } }
      }),
      showClear: computed(() => {
        return (
          props.clearable &&
          !state.inputDisabled &&
          !props.readonly &&
          !!nativeInputValue.value &&
          (focused.value || state.hovering)
        )
      }),
      showPwdVisible: computed(() => {
        return (
          props.showPassword &&
          !state.inputDisabled &&
          !props.readonly &&
          (!!nativeInputValue.value || focused.value)
        )
      }),
      isWordLimitVisible: computed(() => {
        return (
          props.showWordLimit &&
          ctx.attrs.maxlength &&
          (props.type === 'text' || props.type === 'textarea') &&
          !state.inputDisabled &&
          !props.readonly &&
          !props.showPassword
        )
      }),
      upperLimit: computed(() => ctx.attrs.maxlength),
      textLength: computed(() => {
        if (isNumber(props.modelValue)) {
          return String(props.modelValue).length
        }
        return ((props.modelValue as string) || '').length
      }),
      inputExceed: computed(() => {
        return state.isWordLimitVisible && state.textLength > state.upperLimit
      }),
    })

    // methods
    const handleCompositionStart = () => {
      isComposing.value = true
    }
    const getInput = () => {
      return refInput.value || refTextarea.value
    }

    const focus = () => {
      getInput().focus()
    }

    const blur = () => {
      getInput().blur()
    }

    const select = () => {
      getInput().select()
    }

    function handleBlur(event) {
      focused.value = false

    }

    function resizeTextarea() {
      // TODO: ssr
      // if (this.$isServer) return;

      if (nativeInputType.value !== 'textarea') return
      if (!state.autosize) {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(refTextarea.value).minHeight,
        }
        return
      }

      const { minRows, maxRows } = state.autosize
      textareaCalcStyle.value = calcTextareaHeight(
        refTextarea.value,
        minRows,
        maxRows,
      )
    }
    const setNativeInputValue = () => {
      const input = getInput()
      if (!input) return
      if (input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }

    const handleFocus = (event) => {
      focused.value = true
    }

    const handleCompositionUpdate = (event) => {
      const text = event.target.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !isKorean(lastCharacter)
    }
    const handleCompositionEnd = (event) => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    const handleInput = (event) => {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === nativeInputValue.value) return

      ctx.emit('update:modelValue', event.target.value)
      ctx.emit('input', event.target.value)
      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      nextTick(setNativeInputValue)
    }

    const handleChange = (event: Event) => {
      ctx.emit('change', (event.target as HTMLInputElement).value)
    }

    const updateIconOffset = () => {
      calcIconOffset('prefix')
      calcIconOffset('suffix')
    }

    const clear = () => {
      ctx.emit('update:modelValue', '')
      ctx.emit('input', '')
      ctx.emit('change', '')
      ctx.emit('clear')
    }

    const handlePasswordVisible = () => {
      state.passwordVisible = !state.passwordVisible
      focus()
    }

    function getSuffixVisible() {
      return (
        ctx.slots.suffix ||
        state.suffixIcon ||
        state.showClear ||
        state.showPassword ||
        state.isWordLimitVisible ||
        (state.validateState && state.needStatusIcon)
      )
    }

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    watch(nativeInputValue, (val) => {
      setNativeInputValue()

      // when change between <input> and <textarea>,
      // update DOM dependent value and styles
      // https://github.com/ElemeFE/element/issues/14857
      nextTick(resizeTextarea)
    })

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    watch(nativeInputType, () => {
      nextTick(() => {
        setNativeInputValue()
        resizeTextarea()
        updateIconOffset()
      })
    })

    onMounted(() => {
      setNativeInputValue()
      resizeTextarea()
      updateIconOffset()
    })

    onUpdated(() => {
      nextTick(updateIconOffset)
    })

    return {
      ...toRefs(state),
      refInput,
      refTextarea,
      getSuffixVisible,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleFocus,
      handleBlur,
      handleChange,
      handlePasswordVisible,
      focus,
      blur,
      select,
      clear,
    }
  },
})

function calcIconOffset(place) {
  const instance = getCurrentInstance()
  if (!instance) return
  let instanceEl = instance!.vnode.el

  let elList = [].slice.call(
    instanceEl.querySelectorAll(`.el-input__${place}`) || [],
  )
  if (!elList.length) return

  let el = null
  for (let i = 0; i < elList.length; i++) {
    if (elList[i].parentNode === instanceEl) {
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
  if (instance.slots[pendant]) {
    el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${
      instanceEl.querySelector(`.el-input-group__${pendant}`).offsetWidth
    }px)`
  } else {
    el.removeAttribute('style')
  }
}
</script>
