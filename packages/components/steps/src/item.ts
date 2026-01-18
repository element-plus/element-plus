import { buildProps, iconPropType } from '@element-plus/utils'

import type Step from './item.vue'
import type { Component, ExtractPublicPropTypes } from 'vue'

export interface StepProps {
  /**
   * @description step title
   */
  title?: string
  /**
   * @description step custom icon. Icons can be passed via named slot as well
   */
  icon?: string | Component
  /**
   * @description step description
   * @default ''
   */
  description: string
  /**
   * @description current status. It will be automatically set by Steps if not configured.
   * @default ''
   */
  status: '' | 'wait' | 'process' | 'finish' | 'error' | 'success'
}

/**
 * @deprecated Removed after 3.0.0, Use `stepsProps` instead.
 */
export const stepProps = buildProps({
  /**
   * @description step title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description step custom icon. Icons can be passed via named slot as well
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description step description
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * @description current status. It will be automatically set by Steps if not configured.
   */
  status: {
    type: String,
    values: ['', 'wait', 'process', 'finish', 'error', 'success'],
    default: '',
  },
} as const)

export type StepPropsPublic = ExtractPublicPropTypes<typeof stepProps>

export type StepInstance = InstanceType<typeof Step> & unknown
