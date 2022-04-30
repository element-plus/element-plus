import { inject } from 'vue'
import {
  POPPER_CONTENT_INJECTION_KEY,
  POPPER_INJECTION_KEY,
} from '@element-plus/tokens'

export const usePopper = () => {
  const popper = inject(POPPER_INJECTION_KEY, undefined)
  const popperContent = inject(POPPER_CONTENT_INJECTION_KEY, undefined)
  return {
    popper,
    popperContent,
  }
}
