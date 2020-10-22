import { withDirectives, renderSlot, createVNode } from 'vue'
import { ClickOutside } from '@element-plus/directives'

interface IRenderMaskProps {
  hide: () => void
  manualMode: boolean
}

const _hoist1 = {
  key: 0,
  class: 'el-popper__mask',
}

const _hoist2 = {
  key: 1,
  class: 'el-popper__mask',
}

// export default function renderMask(popper: VNode, { hide, manualMode }: IRenderMaskProps): VNode {
//   return manualMode ? withDirectives(
//     renderBlock('div', _hoist1, [popper]),
//     // marking excludes as any due to the current version of Vue's definition file
//     // DOES NOT support types other than string as arguments
//     [[ClickOutside, hide]],
//   ) : renderBlock('div', _hoist2, [popper])
// }

export default ({
  hide,
  manualMode,
}: IRenderMaskProps, { slots }) => {
  const children = renderSlot(slots, 'default')
  return manualMode
    ? withDirectives(
      createVNode('div', _hoist1, [ children ]), [[ClickOutside, hide]],
    )
    : createVNode('div', _hoist2, [ children ])
}


// defineComponent({
//   template: `
//     <div v-if="!manualMode" v-click-outside="hide">
//       <slot />
//     </div>
//     <div v-else>
//       <slot />
//     </div>
//   `,
//   directives: {
//     ClickOutside,
//   },
//   props: {
//     hide: {
//       type: Function as PropType<() => void>,
//     },
//     manualMode: {
//       type: Boolean,
//     },
//   },
// })
