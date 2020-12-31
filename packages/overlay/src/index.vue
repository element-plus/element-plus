<script lang="ts">
import { createVNode, defineComponent, renderSlot } from 'vue'
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
        : createVNode('div', {
          style: {
            zIndex: props.zIndex,
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        }, [renderSlot(slots, 'default')], PatchFlags.STYLE)
    }
  },
})
</script>
