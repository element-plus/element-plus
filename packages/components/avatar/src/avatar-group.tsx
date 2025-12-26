import { defineComponent, provide, reactive, toRef } from 'vue'
import { flattedChildren } from '@element-plus/utils'
import ElTooltip from '@element-plus/components/tooltip'
import { useNamespace } from '@element-plus/hooks'
import ElAvatar from './avatar.vue'
import { avatarGroupContextKey } from './constants'
import { avatarGroupProps } from './avatar-group-props'

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

      const showCollapseAvatar =
        props.collapseAvatars && avatars.length > props.maxCollapseAvatars

      if (showCollapseAvatar) {
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
