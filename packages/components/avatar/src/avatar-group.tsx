import { computed, defineComponent, provide, reactive, toRef } from 'vue'
import { placements } from '@popperjs/core'
import { useNamespace } from '@element-plus/hooks'
import ElTooltip, {
  useTooltipContentProps,
} from '@element-plus/components/tooltip'
import {
  buildProps,
  definePropType,
  flattedChildren,
} from '@element-plus/utils'
import ElAvatar from './avatar.vue'
import { avatarGroupContextKey } from './constants'
import { avatarProps } from './avatar'

import type { ExtractPropTypes, ExtractPublicPropTypes, StyleValue } from 'vue'
import type { Placement, PopperEffect } from '@element-plus/components/popper'

export const avatarGroupProps = buildProps({
  /**
   * @description control the size of avatars in this avatar-group
   */
  size: avatarProps.size,
  /**
   * @description control the shape of avatars in this avatar-group
   */
  shape: avatarProps.shape,
  /**
   * @description whether to collapse avatars
   */
  collapseAvatars: Boolean,
  /**
   * @description whether show all collapsed avatars when mouse hover text of the collapse-avatar. To use this, `collapse-avatars` must be true
   */
  collapseAvatarsTooltip: Boolean,
  /**
   * @description the max avatars number to be shown. To use this, `collapse-avatars` must be true
   */
  maxCollapseAvatars: {
    type: Number,
    default: 1,
  },
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  /**
   * @description placement of tooltip
   */
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'top',
  },
  /**
   * @description custom class name for tooltip
   */
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for tooltip
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description custom class name for the collapse avatar
   */
  collapseClass: String,
  /**
   * @description custom style for the collapse avatar
   */
  collapseStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
} as const)
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupPropsPublic = ExtractPublicPropTypes<
  typeof avatarGroupProps
>

export default defineComponent({
  name: 'ElAvatarGroup',
  props: avatarGroupProps,
  setup(props, { slots }) {
    const ns = useNamespace('avatar-group')

    provide(
      avatarGroupContextKey,
      reactive({
        size: toRef(props, 'size'),
        shape: toRef(props, 'shape'),
      })
    )

    return () => {
      const avatars = flattedChildren(slots.default?.() ?? [])
      let visibleAvatars = avatars

      const showCollapseAvatars = computed(
        () => props.collapseAvatars && avatars.length > props.maxCollapseAvatars
      )

      if (showCollapseAvatars.value) {
        visibleAvatars = avatars.slice(0, props.maxCollapseAvatars)
        const hiddenAvatars = avatars.slice(
          props.maxCollapseAvatars,
          avatars.length
        )

        visibleAvatars.push(
          <ElTooltip
            popperClass={props.popperClass}
            popperStyle={props.popperStyle}
            placement={props.placement}
            effect={props.effect}
            disabled={!props.collapseAvatarsTooltip}
          >
            {{
              default: () => (
                <ElAvatar
                  size={props.size}
                  shape={props.shape}
                  class={props.collapseClass}
                  style={props.collapseStyle}
                >
                  + {hiddenAvatars.length}
                </ElAvatar>
              ),
              content: () => (
                <div class={ns.e('collapse-avatars')}>{hiddenAvatars}</div>
              ),
            }}
          </ElTooltip>
        )
      }

      return <div class={ns.b()}>{visibleAvatars}</div>
    }
  },
})
