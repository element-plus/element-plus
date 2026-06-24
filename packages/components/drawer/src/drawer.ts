import {
  buildProps,
  definePropType,
  isBoolean,
  isNumber,
} from '@element-plus/utils'
import { dialogEmits, dialogProps } from '@element-plus/components/dialog'

import type { ExtractPublicPropTypes } from 'vue'
import type Drawer from './drawer.vue'
import type { DialogProps } from '@element-plus/components/dialog'

export interface DrawerResizableOptions {
  minSize?: number
  maxSize?: number
}

export interface DrawerProps extends DialogProps {
  /**
   * @description Set the direction in which the Drawer opens
   */
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt'
  /**
   * @description Whether to enable the resizable function for the Drawer. Use an object to configure min and max size constraints in pixels.
   */
  resizable?: boolean | DrawerResizableOptions
  /**
   * @description The size of the Drawer form, when using the number type, is measured in pixels. When using the string type, please pass in 'x%'; otherwise, it will be interpreted as the number type
   */
  size?: string | number
  /**
   * @description You can remove the title from the drawer, so that your drawer will have more space on the screen. If you want to be visited, you must set the title attribute.
   */
  withHeader?: boolean
  /**
   * @description The fade-in and fade-out animation switch of the mask layer
   */
  modalFade?: boolean
  /**
   * @description Help assistive technologies such as screen readers identify content hierarchies
   */
  headerAriaLevel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `DrawerProps` instead.
 */
export const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: 'rtl',
    values: ['ltr', 'rtl', 'ttb', 'btt'],
  },
  resizable: {
    type: definePropType<boolean | DrawerResizableOptions>([Boolean, Object]),
    default: false,
    validator: (val: boolean | DrawerResizableOptions) => {
      if (isBoolean(val)) return true
      return (
        (val.minSize === undefined || isNumber(val.minSize)) &&
        (val.maxSize === undefined || isNumber(val.maxSize))
      )
    },
  },
  size: {
    type: [String, Number],
    default: '30%',
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  modalFade: {
    type: Boolean,
    default: true,
  },
  headerAriaLevel: {
    type: String,
    default: '2',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `DrawerProps` instead.
 */
export type DrawerPropsPublic = ExtractPublicPropTypes<typeof drawerProps>

export const drawerEmits = {
  ...dialogEmits,
  'resize-start': (evt: MouseEvent, size: number) =>
    evt instanceof MouseEvent && typeof size === 'number',
  resize: (evt: MouseEvent, size: number) =>
    evt instanceof MouseEvent && typeof size === 'number',
  'resize-end': (evt: MouseEvent, size: number) =>
    evt instanceof MouseEvent && typeof size === 'number',
}

export type DrawerEmits = typeof drawerEmits

export type DrawerInstance = InstanceType<typeof Drawer> & unknown
