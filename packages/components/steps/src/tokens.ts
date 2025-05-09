import type { InjectionKey } from 'vue'
import type { IStepsInject } from './item.vue'

export const STEPS_INJECTION_KEY: InjectionKey<IStepsInject> = Symbol()
