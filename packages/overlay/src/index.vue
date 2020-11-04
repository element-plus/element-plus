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
        : renderSlot(slots, 'default')
    }
  },
})
</script>
<style>
.el-overlay-root {
  height: 0;
}

.el-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
