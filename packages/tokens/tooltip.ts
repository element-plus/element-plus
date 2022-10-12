import type { Arrayable } from '../utils/typescript'
import type { InjectionKey, Ref } from 'vue'
import type { TooltipTriggerType } from '@element-plus/components/tooltip'

export type ElTooltipInjectionContext = {
  controlled: Ref<boolean>
  id: Ref<string>
  open: Ref<boolean>
  trigger: Ref<Arrayable<TooltipTriggerType>>
  onOpen: (e?: Event) => void
  onClose: (e?: Event) => void
  onToggle: (e: Event) => void
  onShow: () => void
  onHide: () => void
  onBeforeShow: () => void
  onBeforeHide: () => void
  updatePopper: () => void
}

export const TOOLTIP_INJECTION_KEY: InjectionKey<ElTooltipInjectionContext> =
  Symbol('elTooltip')
