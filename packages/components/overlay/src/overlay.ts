import { createVNode, defineComponent, h, renderSlot } from 'vue'
import { PatchFlags, buildProps, definePropType } from '@element-plus/utils'
import { useNamespace, useSameTarget } from '@element-plus/hooks'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { ZIndexProperty } from 'csstype'

export const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true,
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType<string | string[] | Record<string, boolean>>([
      String,
      Array,
      Object,
    ]),
  },
  zIndex: {
    type: definePropType<ZIndexProperty>([String, Number]),
  },
} as const)
export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export const overlayEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type OverlayEmits = typeof overlayEmits

const BLOCK = 'overlay'

export default defineComponent({
  name: 'ElOverlay',

  props: overlayProps,
  emits: overlayEmits,

  setup(props, { slots, emit }) {
    // No reactivity on this prop because when its rendering with a global
    // component, this will be a constant flag.
    const ns = useNamespace(BLOCK)

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
              class: [ns.b(), props.overlayClass],
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
