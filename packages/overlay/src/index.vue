<script lang="ts">
import { createVNode, defineComponent, renderSlot, h } from 'vue'
import { PatchFlags } from '@element-plus/utils/vnode'

export default defineComponent({
  name: 'ElOverlay',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: [String, Array, Object],
    },
    zIndex: {
      type: Number,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    let mousedownTarget = false
    let mouseupTarget = false
    // refer to this https://javascript.info/mouse-events-basics
    // events fired in the order: mousedown -> mouseup -> click
    // we need to set the mousedown handle to false after click
    // fired.
    const onMaskClick = (e: MouseEvent) => {
      // due to these two value were set only when props.mask is true
      // so there is no need to do any extra judgment here.
      // if and only if
      if (mousedownTarget && mouseupTarget) {
        emit('click', e)
      }
      mousedownTarget = mouseupTarget = false
    }

    // init here
    return () => {
      // when the vnode meets the same structure but with different change trigger
      // it will not automatically update, thus we simply use h function to manage updating
      return props.mask
        ? createVNode(
          'div',
          {
            class: ['el-overlay', props.overlayClass],
            style: {
              zIndex: props.zIndex,
            },
            onClick: onMaskClick,
            onMousedown: (e: MouseEvent) => {
              // marking current mousedown target.
              if (props.mask) {
                mousedownTarget = e.target === e.currentTarget
              }
            },
            onMouseup: (e: MouseEvent) => {
              if (props.mask) {
                mouseupTarget = e.target === e.currentTarget
              }
            },
          },
          [renderSlot(slots, 'default')],
          PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
          ['onClick', 'onMouseup', 'onMousedown'],
        )
        : h(
          'div',
          {
            class: props.overlayClass,
            style: {
              zIndex: props.zIndex,
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
          },
          [renderSlot(slots, 'default')],
        )
    }
  },
})
</script>
