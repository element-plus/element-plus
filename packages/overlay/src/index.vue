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
      type: String,
    },
    zIndex: {
      type: Number,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const onMaskClick = () => {
      emit('click')
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
          },
          [renderSlot(slots, 'default')],
          PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
          ['onClick'],
        )
        : h('div', {
          style: {
            zIndex: props.zIndex,
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        }, [renderSlot(slots, 'default')])
    }
  },
})
</script>
