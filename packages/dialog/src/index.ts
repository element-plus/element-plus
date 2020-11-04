import {
  createVNode,
  defineComponent,
  Fragment,
  Transition,
  Teleport,
  h,
  withDirectives,
  vShow,
  toDisplayString,
  renderSlot,
  withCtx,
} from 'vue'

import { TrapFocus } from '@element-plus/directives'
import { stop } from '@element-plus/utils/dom'
import { isValidWidthUnit } from '@element-plus/utils/validators'
import { PatchFlags, renderBlock, renderIf } from '@element-plus/utils/vnode'

import { Overlay } from '@element-plus/overlay'
import {
  default as useDialog,
  CLOSE_EVENT,
  CLOSED_EVENT,
  OPEN_EVENT,
  OPENED_EVENT,
  UPDATE_MODEL_EVENT,
} from './useDialog'

import type { PropType, SetupContext } from 'vue'

const closeIcon = createVNode('i', { class: 'el-dialog__close el-icon el-icon-close' }, null, PatchFlags.HOISTED)
const headerKls = { class: 'el-dialog__header' }
const bodyKls = { class: 'el-dialog__body' }
const titleKls = { class: 'el-dialog__title' }
const footerKls = { class: 'el-dialog__footer', key: 0 }


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
    const closeBtn = renderIf(this.showClose, 'button',
      {
        type: 'button',
        class: 'el-dialog__headerbtn',
        ariaLabel: 'close',
        onClick: this.handleClose,
      },
      [closeIcon],
      PatchFlags.PROPS,
      ['onClick'],
    )

    const header = createVNode(
      'div',
      headerKls,
      [
        renderSlot($slots, 'header', {}, () =>
          [createVNode('span', titleKls, toDisplayString(this.title), PatchFlags.TEXT)],
        ),
        closeBtn,
      ],
    )

    const body = createVNode(
      'div',
      bodyKls,
      [renderSlot($slots, 'default')],
    )

    const footer = renderIf(!!$slots.footer, 'div', footerKls, [renderSlot($slots, 'footer')])

    const dialog = createVNode(
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
        onClick: stop,
      },
      [header, body, footer],
      PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
      ['ariaLabel', 'onClick'],
    )

    const trappedDialog = withDirectives(dialog, [[TrapFocus]])
    const overlay = withDirectives(
      createVNode(
        Overlay,
        {
          mask: this.modal,
          onClick: this.onModalClick,
          zIndex: this.zIndex,
        },
        {
          default: withCtx(() => [trappedDialog]),
        },
        PatchFlags.PROPS,
        ['mask', 'onClick', 'zIndex'],
      ), [[vShow, this.visible]])


    const renderer = createVNode(
      Transition,
      {
        name: 'dialog-fade',
        'onAfter-enter': this.afterEnter,
        'onAfter-leave': this.afterLeave,
      },
      {
        default: () => [overlay],
      },
      PatchFlags.PROPS,
      ['onAfter-enter', 'onAfter-leave'],
    )

    return renderBlock(Fragment, null, [
      this.appendToBody
        ? h(Teleport, { key: 0, to: 'body' }, [renderer])
        : h(Fragment, { key: 1 }, [renderer]),
    ])
  },
})
