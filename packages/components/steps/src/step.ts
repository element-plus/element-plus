import { buildProps, definePropType } from '@element-plus/utils/props'
import type Step from './step.vue'
import type { StepsProps } from './steps'
import type { Component, ExtractPropTypes, Ref } from 'vue'

export interface StepItemState {
  uid: number
  currentStatus: string
  setIndex: (val: number) => void
  calcProgress: (status: string) => void
}

export const stepProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
    values: ['', 'wait', 'process', 'finish', 'error', 'success'],
  },
} as const)

export type StepProps = ExtractPropTypes<typeof stepProps>

export type StepInstance = InstanceType<typeof Step>
