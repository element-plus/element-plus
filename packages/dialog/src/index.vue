<script lang='ts'>
import { defineComponent, Transition, Teleport, h, withDirectives, vShow } from 'vue'

import ElOverlay from '@element-plus/overlay'
import { default as useDialog, CLOSE_EVENT, CLOSED_EVENT, OPEN_EVENT, OPENED_EVENT, UPDATE_MODEL_EVENT } from './useDialog'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElDialog',
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function as PropType<(...args: any[]) => unknown>,
      validator: val => {
        return typeof val === 'function'
      },
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
      validator: (val: string) => ['px', 'rem', 'em', 'vw', '%'].some(unit => val.endsWith(unit)),
    },
  },
  emits: [OPEN_EVENT, OPENED_EVENT, CLOSE_EVENT, CLOSED_EVENT, UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    // init here
    return useDialog(props, ctx)
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
        $slots.header ? $slots.header() : h('span', { class: 'el-dialog__title' }, this.title),
        closeBtn,
      ],
    )

    const body = h(
      'div',
      {
        class: 'el-dialog__body',
      },
      $slots?.default(),
    )

    const footer = $slots.footer
      ? h('div', { class: 'el-dialog__footer' }, $slots.footer())
      : null

    const dialog = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: this.title || 'dialog',
        class: ['el-dialog', { 'is-fullscreen': this.fullscreen, 'el-dialog--center': this.center }, this.customClass],
        ref: 'dialogRef',
        role: 'dialog',
        style: this.style,
      },
      [
        header,
        body,
        footer,
      ],
    )
    const overlay = withDirectives(
      h(
        ElOverlay,
        {
          mask: this.modal,
          onClick: this.onModalClick,
          zIndex: this.zIndex,
        },
        {
          default: () => dialog,
        },
      ), [[vShow, this.visible]])

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
</script>
<style>

.dialog-fade-enter-active {
  -webkit-animation: modal-fade-in 0.3s !important;
  animation: modal-fade-in 0.3s !important;
}
.dialog-fade-leave-active {
  -webkit-animation: modal-fade-out 0.3s !important;
  animation: modal-fade-out 0.3s !important;
}

.dialog-fade-enter-active .el-dialog {
  -webkit-animation: dialog-fade-in 0.3s;
  animation: dialog-fade-in 0.3s;
}
.dialog-fade-leave-active .el-dialog {
  -webkit-animation: dialog-fade-out 0.3s;
  animation: dialog-fade-out 0.3s;
}

@-webkit-keyframes modal-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes modal-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes modal-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes modal-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
