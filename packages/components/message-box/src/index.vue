<template>
  <transition name="fade-in-linear" @after-leave="$emit('vanish')">
    <el-overlay
      v-show="visible"
      :z-index="zIndex"
      :overlay-class="[ns.is('message-box'), modalClass]"
      :mask="modal"
    >
      <div
        role="dialog"
        :aria-label="title"
        aria-modal="true"
        :aria-describedby="!showInput ? contentId : undefined"
        :class="`${ns.namespace.value}-overlay-message-box`"
        @click="overlayEvent.onClick"
        @mousedown="overlayEvent.onMousedown"
        @mouseup="overlayEvent.onMouseup"
      >
        <el-focus-trap
          loop
          :trapped="visible"
          :focus-trap-el="rootRef"
          :focus-start-el="focusStartRef"
          @release-requested="onCloseRequested"
        >
          <div
            ref="rootRef"
            :class="[
              ns.b(),
              customClass,
              ns.is('draggable', draggable),
              { [ns.m('center')]: center },
            ]"
            :style="customStyle"
            tabindex="-1"
            @click.stop=""
          >
            <div
              v-if="title !== null && title !== undefined"
              ref="headerRef"
              :class="[ns.e('header'), { 'show-close': showClose }]"
            >
              <div :class="ns.e('title')">
                <el-icon
                  v-if="iconComponent && center"
                  :class="[ns.e('status'), typeClass]"
                >
                  <component :is="iconComponent" />
                </el-icon>
                <span>{{ title }}</span>
              </div>
              <button
                v-if="showClose"
                type="button"
                :class="ns.e('headerbtn')"
                :aria-label="t('el.messagebox.close')"
                @click="
                  handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
                "
                @keydown.prevent.enter="
                  handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
                "
              >
                <el-icon :class="ns.e('close')">
                  <component :is="closeIcon || 'close'" />
                </el-icon>
              </button>
            </div>
            <div :id="contentId" :class="ns.e('content')">
              <div :class="ns.e('container')">
                <el-icon
                  v-if="iconComponent && !center && hasMessage"
                  :class="[ns.e('status'), typeClass]"
                >
                  <component :is="iconComponent" />
                </el-icon>
                <div v-if="hasMessage" :class="ns.e('message')">
                  <slot>
                    <component
                      :is="showInput ? 'label' : 'p'"
                      v-if="!dangerouslyUseHTMLString"
                      :for="showInput ? inputId : undefined"
                    >
                      {{ !dangerouslyUseHTMLString ? message : '' }}
                    </component>
                    <component
                      :is="showInput ? 'label' : 'p'"
                      v-else
                      :for="showInput ? inputId : undefined"
                      v-html="message"
                    />
                  </slot>
                </div>
              </div>
              <div v-show="showInput" :class="ns.e('input')">
                <el-input
                  :id="inputId"
                  ref="inputRef"
                  v-model="inputValue"
                  :type="inputType"
                  :placeholder="inputPlaceholder"
                  :aria-invalid="validateError"
                  :class="{ invalid: validateError }"
                  @keydown.enter="handleInputEnter"
                />
                <div
                  :class="ns.e('errormsg')"
                  :style="{
                    visibility: !!editorErrorMessage ? 'visible' : 'hidden',
                  }"
                >
                  {{ editorErrorMessage }}
                </div>
              </div>
            </div>
            <div :class="ns.e('btns')">
              <el-button
                v-if="showCancelButton"
                :loading="cancelButtonLoading"
                :loading-icon="cancelButtonLoadingIcon"
                :class="[cancelButtonClass]"
                :round="roundButton"
                :size="btnSize"
                @click="handleAction('cancel')"
                @keydown.prevent.enter="handleAction('cancel')"
              >
                {{ cancelButtonText || t('el.messagebox.cancel') }}
              </el-button>
              <el-button
                v-show="showConfirmButton"
                ref="confirmRef"
                type="primary"
                :loading="confirmButtonLoading"
                :loading-icon="confirmButtonLoadingIcon"
                :class="[confirmButtonClasses]"
                :round="roundButton"
                :disabled="confirmButtonDisabled"
                :size="btnSize"
                @click="handleAction('confirm')"
                @keydown.prevent.enter="handleAction('confirm')"
              >
                {{ confirmButtonText || t('el.messagebox.confirm') }}
              </el-button>
            </div>
          </div>
        </el-focus-trap>
      </div>
    </el-overlay>
  </transition>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import ElButton from '@element-plus/components/button'
import { TrapFocus } from '@element-plus/directives'
import {
  useDraggable,
  useId,
  useLockscreen,
  useSameTarget,
} from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { ElOverlay } from '@element-plus/components/overlay'
import {
  TypeComponents,
  TypeComponentsMap,
  isFunction,
  isString,
  isValidComponentSize,
} from '@element-plus/utils'
import { ElIcon } from '@element-plus/components/icon'
import { Loading } from '@element-plus/icons-vue'
import ElFocusTrap from '@element-plus/components/focus-trap'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'

import type { ComponentPublicInstance, PropType } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type {
  Action,
  MessageBoxState,
  MessageBoxType,
} from './message-box.type'

export default defineComponent({
  name: 'ElMessageBox',
  directives: {
    TrapFocus,
  },
  components: {
    ElButton,
    ElFocusTrap,
    ElInput,
    ElOverlay,
    ElIcon,
    ...TypeComponents,
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    center: Boolean,
    draggable: Boolean,
    overflow: Boolean,
    roundButton: {
      default: false,
      type: Boolean,
    },
    container: {
      type: String, // default append to body
      default: 'body',
    },
    boxType: {
      type: String as PropType<MessageBoxType>,
      default: '',
    },
  },
  emits: ['vanish', 'action'],
  setup(props, { emit }) {
    // const popup = usePopup(props, doClose)
    const {
      locale,
      zIndex,
      ns,
      size: btnSize,
    } = useGlobalComponentSettings(
      'message-box',
      computed(() => props.buttonSize)
    )

    const { t } = locale
    const { nextZIndex } = zIndex

    const visible = ref(false)
    // s represents state
    const state = reactive<MessageBoxState>({
      // autofocus element when open message-box
      autofocus: true,
      beforeClose: null,
      callback: null,
      cancelButtonText: '',
      cancelButtonClass: '',
      confirmButtonText: '',
      confirmButtonClass: '',
      customClass: '',
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: '',
      closeIcon: '',
      inputPattern: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputValue: '',
      inputValidator: undefined,
      inputErrorMessage: '',
      message: '',
      modalFade: true,
      modalClass: '',
      showCancelButton: false,
      showConfirmButton: true,
      type: '',
      title: undefined,
      showInput: false,
      action: '' as Action,
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonLoadingIcon: markRaw(Loading),
      cancelButtonLoadingIcon: markRaw(Loading),
      confirmButtonDisabled: false,
      editorErrorMessage: '',
      // refer to: https://github.com/ElemeFE/element/commit/2999279ae34ef10c373ca795c87b020ed6753eed
      // seemed ok for now without this state.
      // isOnComposition: false, // temporary remove
      validateError: false,
      zIndex: nextZIndex(),
    })

    const typeClass = computed(() => {
      const type = state.type
      return { [ns.bm('icon', type)]: type && TypeComponentsMap[type] }
    })

    const contentId = useId()
    const inputId = useId()

    const iconComponent = computed(() => {
      const type = state.type
      return state.icon || (type && TypeComponentsMap[type]) || ''
    })
    const hasMessage = computed(() => !!state.message)
    const rootRef = ref<HTMLElement>()
    const headerRef = ref<HTMLElement>()
    const focusStartRef = ref<HTMLElement>()
    const inputRef = ref<ComponentPublicInstance>()
    const confirmRef = ref<ComponentPublicInstance>()

    const confirmButtonClasses = computed(() => state.confirmButtonClass)

    watch(
      () => state.inputValue,
      async (val) => {
        await nextTick()
        if (props.boxType === 'prompt' && val) {
          validate()
        }
      },
      { immediate: true }
    )

    watch(
      () => visible.value,
      (val) => {
        if (val) {
          if (props.boxType !== 'prompt') {
            if (state.autofocus) {
              focusStartRef.value = confirmRef.value?.$el ?? rootRef.value
            } else {
              focusStartRef.value = rootRef.value
            }
          }
          state.zIndex = nextZIndex()
        }
        if (props.boxType !== 'prompt') return
        if (val) {
          nextTick().then(() => {
            if (inputRef.value && inputRef.value.$el) {
              if (state.autofocus) {
                focusStartRef.value = getInputElement() ?? rootRef.value
              } else {
                focusStartRef.value = rootRef.value
              }
            }
          })
        } else {
          state.editorErrorMessage = ''
          state.validateError = false
        }
      }
    )

    const draggable = computed(() => props.draggable)
    const overflow = computed(() => props.overflow)
    useDraggable(rootRef, headerRef, draggable, overflow)

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        window.addEventListener('hashchange', doClose)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        window.removeEventListener('hashchange', doClose)
      }
    })

    function doClose() {
      if (!visible.value) return
      visible.value = false
      nextTick(() => {
        if (state.action) emit('action', state.action)
      })
    }

    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    }

    const overlayEvent = useSameTarget(handleWrapperClick)

    const handleInputEnter = (e: KeyboardEvent | Event) => {
      if (state.inputType !== 'textarea') {
        e.preventDefault()
        return handleAction('confirm')
      }
    }

    const handleAction = (action: Action) => {
      if (props.boxType === 'prompt' && action === 'confirm' && !validate()) {
        return
      }

      state.action = action

      if (state.beforeClose) {
        state.beforeClose?.(action, state, doClose)
      } else {
        doClose()
      }
    }

    const validate = () => {
      if (props.boxType === 'prompt') {
        const inputPattern = state.inputPattern
        if (inputPattern && !inputPattern.test(state.inputValue || '')) {
          state.editorErrorMessage =
            state.inputErrorMessage || t('el.messagebox.error')
          state.validateError = true
          return false
        }
        const inputValidator = state.inputValidator
        if (isFunction(inputValidator)) {
          const validateResult = inputValidator(state.inputValue)
          if (validateResult === false) {
            state.editorErrorMessage =
              state.inputErrorMessage || t('el.messagebox.error')
            state.validateError = true
            return false
          }
          if (isString(validateResult)) {
            state.editorErrorMessage = validateResult
            state.validateError = true
            return false
          }
        }
      }
      state.editorErrorMessage = ''
      state.validateError = false
      return true
    }

    const getInputElement = () => {
      const inputRefs = inputRef.value?.$refs
      return (inputRefs?.input ?? inputRefs?.textarea) as HTMLElement
    }

    const handleClose = () => {
      handleAction('close')
    }

    // when close on press escape is disabled, pressing esc should not callout
    // any other message box and close any other dialog-ish elements
    // e.g. Dialog has a close on press esc feature, and when it closes, it calls
    // props.beforeClose method to make a intermediate state by callout a message box
    // for some verification or alerting. then if we allow global event liek this
    // to dispatch, it could callout another message box.
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) {
        handleClose()
      }
    }

    // locks the screen to prevent scroll
    if (props.lockScroll) {
      useLockscreen(visible)
    }

    return {
      ...toRefs(state),
      ns,
      overlayEvent,
      visible,
      hasMessage,
      typeClass,
      contentId,
      inputId,
      btnSize,
      iconComponent,
      confirmButtonClasses,
      rootRef,
      focusStartRef,
      headerRef,
      inputRef,
      confirmRef,
      doClose, // for outside usage
      handleClose, // for out side usage
      onCloseRequested,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t,
    }
  },
})
</script>
