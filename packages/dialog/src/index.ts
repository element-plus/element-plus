import {
  defineComponent,
  Transition,
  Teleport,
  h,
  withDirectives,
  vShow,
} from 'vue'

import { TrapFocus } from '@element-plus/directives'
import { isValidWidthUnit } from '@element-plus/utils/validators'

import ElOverlay from '@element-plus/overlay'
import {
  default as useDialog,
  CLOSE_EVENT,
  CLOSED_EVENT,
  OPEN_EVENT,
  OPENED_EVENT,
  UPDATE_MODEL_EVENT,
} from './useDialog'

import type { PropType, SetupContext } from 'vue'

export default defineComponent({
  name: 'ElDialog',
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function as PropType<(...args: any[]) => unknown>,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
      default: '15vh',
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      default: '50%',
      validator: isValidWidthUnit,
    },
    zIndex: {
      type: Number,
    },
  },
  emits: [
    OPEN_EVENT,
    OPENED_EVENT,
    CLOSE_EVENT,
    CLOSED_EVENT,
    UPDATE_MODEL_EVENT,
  ],
  setup(props, ctx) {
    // init here
    return useDialog(props, ctx as SetupContext)
  },

  render() {
    if (this.destroyOnClose && !this.modelValue) {
      return null
    }
    const { $slots } = this
    const closeBtn = this.showClose
      ? h(
        'button',
        {
          type: 'button',
          class: 'el-dialog__headerbtn',
          ariaLabel: 'close',
          onClick: this.handleClose,
        },
        h('i', { class: 'el-dialog__close el-icon el-icon-close' }),
      )
      : null
    const header = h(
      'div',
      {
        class: 'el-dialog__header',
      },
      [
        $slots.header
          ? $slots.header()
          : h('span', { class: 'el-dialog__title' }, this.title),
        closeBtn,
      ],
    )

    const body = h(
      'div',
      {
        class: 'el-dialog__body',
      },
      $slots.default?.(),
    )

    const footer = $slots.footer
      ? h('div', { class: 'el-dialog__footer' }, $slots.footer())
      : null

    const dialog = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: this.title || 'dialog',
        class: [
          'el-dialog',
          {
            'is-fullscreen': this.fullscreen,
            'el-dialog--center': this.center,
          },
          this.customClass,
        ],
        ref: 'dialogRef',
        role: 'dialog',
        style: this.style,
        onClick: (e: MouseEvent) => e.stopPropagation(),
      },
      [header, body, footer],
    )

    const trappedDialog = withDirectives(dialog, [[TrapFocus]])
    const overlay = withDirectives(
      h(
        ElOverlay,
        {
          mask: this.modal,
          onClick: this.onModalClick,
          zIndex: this.zIndex,
        },
        {
          default: () => trappedDialog,
        },
      ),
      [[vShow, this.visible]],
    )

    const renderer = h(
      Transition,
      {
        name: 'dialog-fade',
        onAfterEnter: this.afterEnter,
        onAfterLeave: this.afterLeave,
      },
      {
        default: () => overlay,
      },
    )

    if (this.appendToBody) {
      return h(
        Teleport,
        {
          to: 'body',
        },
        renderer,
      )
    }
    return renderer
  },
})
