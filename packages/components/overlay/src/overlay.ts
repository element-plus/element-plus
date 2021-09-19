import { createVNode, defineComponent, renderSlot, h } from 'vue'
import { PatchFlags } from '@element-plus/utils/vnode'
import { useSameTarget } from '@element-plus/hooks'
import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes, CSSProperties } from 'vue'

export const overlayProps = {
  mask: {
    type: Boolean,
    default: true,
  },
  customMaskEvent: {
    type: Boolean,
    default: false,
  },
  overlayClass: buildProp<string | string[] | Record<string, boolean>>({
    type: [String, Array, Object],
  }),
  zIndex: buildProp<CSSProperties['zIndex']>({
    type: [String, Number],
  }),
} as const
export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export const overlayEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type OverlayEmits = typeof overlayEmits

export default defineComponent({
  name: 'ElOverlay',

  props: overlayProps,
  emits: overlayEmits,

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
              } as CSSProperties,
            },
            [renderSlot(slots, 'default')]
          )
    }
  },
})
