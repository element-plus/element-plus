<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="el-drawer-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <el-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <div
          ref="drawerRef"
          v-trap-focus
          aria-modal="true"
          aria-labelledby="el-drawer__title"
          :aria-label="title"
          :class="['el-drawer', direction, customClass]"
          :style="isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize"
          role="dialog"
          @click.stop
        >
          <header
            v-if="withHeader"
            id="el-drawer__title"
            class="el-drawer__header"
          >
            <slot name="title">
              <span role="heading" :title="title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              :aria-label="'close ' + (title || 'drawer')"
              class="el-drawer__close-btn"
              type="button"
              @click="handleClose"
            >
              <i class="el-drawer__close el-icon el-icon-close"></i>
            </button>
          </header>
          <template v-if="rendered">
            <section class="el-drawer__body">
              <slot></slot>
            </section>
          </template>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
} from 'vue'
import { Overlay } from '@element-plus/overlay'
import { useDialog } from '@element-plus/dialog'
import { TrapFocus } from '@element-plus/directives'

import type { PropType, SetupContext } from 'vue'

type Hide = (cancel: boolean) => void
type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export default defineComponent({
  name: 'ElDrawer',
  components: {
    [Overlay.name]: Overlay,
  },
  directives: {
    TrapFocus,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
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
      type: [String, Number],
      default: '30%',
    },
    title: {
      type: String,
      default: '',
    },
    closeOnClickModal: {
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
    lockScroll: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['open', 'opened', 'close', 'closed', 'update:modelValue'],

  setup(props, ctx) {
    const drawerRef = ref<HTMLElement>(null)
    return {
      ...useDialog(props, ctx as SetupContext, drawerRef),
      drawerRef,
      isHorizontal: computed(() => props.direction === 'rtl' || props.direction === 'ltr'),
      drawerSize: computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size),
    }

  },
})
</script>
