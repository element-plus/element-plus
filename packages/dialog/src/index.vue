<script lang='ts'>
import { defineComponent, Transition, Teleport, h } from 'vue'

import { NOOP } from '@vue/shared'
import ElOverlay from '@element-plus/overlay'

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
      default: NOOP,
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
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '50%',
      validator: (val: string) => ['px', 'rem', 'em', 'vw', '%'].some(unit => val.endsWith(unit)),
    },
  },
  emits: [],
  setup(props) {
    // init here
  },

  render() {

    const { $slots } = this
    const closeBtn = this.showClose
      ? h(
        'button',
        {
          type: 'button',
          class: 'el-dialog__headerbtn',
          ariaLabel: 'close',
          onClose: this.handleClose,
        },
        h('i', { class: 'el-dialog__close el-icon el-icon-close' })
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

    const dialog = this.rendered
      ? h(
        'div',
        {
          ariaModal: true,
          ariaLabel: this.title || 'dialog',
          class: ['el-dialog', { 'is-fullscreen': this.fullscreen, 'el-dialog--center': this.center }, this.customClass],
          ref: 'dialog',
          role: 'dialog',
          style: this.style,
        },
        [
          header,
          body,
          footer,
        ],
      )
      : null
    const overlay = () => h(
      ElOverlay,
      {
        mask: this.modal,
        onClick: this.onModalClicked,
      },
      {
        default: () => dialog,
      },
    )

    const renderer = h(
      Transition,
      {
        name: 'dialog-fade',
        onAfterEnter: this.afterEnter,
        onAfterLeave: this.afterLeave,
      },
      {
        default: () => h(
          ElOverlay,
          {

          },
          {
            default: () => dialog,
          },
        ),
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
<style scoped>
</style>
