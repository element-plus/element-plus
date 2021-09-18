<script lang="ts">
import { createVNode, defineComponent, renderSlot, h } from 'vue'
import { PatchFlags } from '@element-plus/utils/vnode'
import { useSameTarget } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElOverlay',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    customMaskEvent: {
      type: Boolean,
      default: false,
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
    const onMaskClick = (e: MouseEvent) => {
      emit('click', e)
    }

    const { onClick, onMousedown, onMouseup } = useSameTarget(
      props.customMaskEvent ? undefined : onMaskClick
    )

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
              onClick,
              onMousedown,
              onMouseup,
            },
            [renderSlot(slots, 'default')],
            PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
            ['onClick', 'onMouseup', 'onMousedown']
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
            [renderSlot(slots, 'default')]
          )
    }
  },
})
</script>
