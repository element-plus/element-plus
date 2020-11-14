<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="el-drawer-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="modelValue"
        ref="root"
        class="el-drawer__wrapper"
        tabindex="-1"
      >
        <div
          class="el-drawer__container"
          :class="modelValue && 'el-drawer__open'"
          tabindex="-1"
          role="document"
          @click.self="handleWrapperClick"
        >
          <div
            ref="drawer"
            aria-modal="true"
            aria-labelledby="el-drawer__title"
            :aria-label="title"
            class="el-drawer"
            :class="[direction, customClass]"
            :style="isHorizontal ? 'width: ' + size : 'height: ' + size"
            role="dialog"
            tabindex="-1"
          >
            <header
              v-if="withHeader"
              id="el-drawer__title"
              class="el-drawer__header"
            >
              <slot name="title">
                <span role="heading" tabindex="-1" :title="title">
                  {{ title }}
                </span>
              </slot>
              <button
                v-if="showClose"
                :aria-label="'close ' + (title || 'drawer')"
                class="el-drawer__close-btn"
                type="button"
                @click="closeDrawer"
              >
                <i class="el-drawer__close el-icon el-icon-close"></i>
              </button>
            </header>
            <section v-if="state.rendered" class="el-drawer__body">
              <slot></slot>
            </section>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang='ts'>
import {
  defineComponent, ref, computed,
  watch, nextTick,
  onMounted,
} from 'vue'
import usePopup from '@element-plus/utils/popup/usePopup'
import Utils from '@element-plus/utils/aria'

import type { PropType } from 'vue'

type Hide = (cancel: boolean) => void
type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export default defineComponent({
  name: 'ElDrawer',
  props: {
    modelValue: Boolean,
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: Function as PropType<(hide: Hide) => void>,
    customClass: {
      type: String,
      default: '',
    },
    direction: {
      type: String as PropType<DrawerDirection>,
      default: 'rtl',
      validator: (val: DrawerDirection) => {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      },
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: '30%',
    },
    title: {
      type: String,
      default: '',
    },
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    zIndex: Number,
    modal: {
      type: Boolean,
      default: true,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
    modalClass: String,
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['open', 'opened', 'close', 'closed', 'update:modelValue'],

  setup(props, ctx) {
    const {
      state,
      doAfterClose,
      updateClosingFlag,
      restoreBodyStyle,
    } = usePopup(props, doClose)

    const drawer = ref<HTMLElement>(null)
    const root = ref<HTMLElement>(null)
    const prevActiveElement = ref<HTMLElement>(null)
    const closed = ref(false)
    const isHorizontal = computed(() => props.direction === 'rtl' || props.direction === 'ltr')

    function afterEnter() {
      ctx.emit('opened')
    }

    function doClose() {
      updateClosingFlag(true)
      props.lockScroll && setTimeout(restoreBodyStyle, 200)
      state.opened = false
      doAfterClose()
    }

    function afterLeave() {
      ctx.emit('closed')
    }

    function hide(cancel = true) {
      if (cancel !== false) {
        ctx.emit('update:modelValue', false)
        ctx.emit('close')
        if (props.destroyOnClose === true) {
          state.rendered = false
        }
        closed.value = true
      }
    }

    function handleWrapperClick() {
      if (props.wrapperClosable) {
        closeDrawer()
      }
    }

    function closeDrawer() {
      if (typeof props.beforeClose === 'function') {
        props.beforeClose(hide)
      } else {
        hide()
      }
    }

    function handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the drawer.
      // This method also calls `beforeClose` if there was one.
      closeDrawer()
    }

    watch(
      () => props.modelValue,
      val => {
        state.visible = val

        if (val) {
          closed.value = false
          ctx.emit('open')
          prevActiveElement.value = document.activeElement as HTMLElement
          nextTick(() => {
            Utils.focusFirstDescendant(drawer.value)
          })
        } else {
          if (!closed.value) ctx.emit('close')
          nextTick(() => {
            prevActiveElement.value?.focus()
          })
        }
      },
    )

    onMounted(() => {
      if (props.modelValue) {
        state.rendered = true
        state.visible = true
      }
    })

    return {
      state,
      root,
      drawer,
      closed,
      afterEnter,
      afterLeave,
      handleWrapperClick,
      isHorizontal,
      closeDrawer,
      handleClose,
    }
  },
})
</script>
