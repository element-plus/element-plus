import { buildProps, iconPropType } from '@element-plus/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export const linkProps = buildProps({
  /**
   * @description type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default',
  },
  /**
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  },
} as const)
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits

export type LinkInstance = InstanceType<typeof Link>
