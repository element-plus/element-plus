import { unref } from 'vue'
import { buildProps, isNumber } from '@element-plus/utils'
import { useTimeout } from '../use-timeout'

import type { ToRefs } from 'vue'

export interface UseDelayedToggleProps {
  /**
   * @description delay of appearance, in millisecond, not valid in controlled mode
   */
  showAfter?: number
  /**
   * @description delay of disappear, in millisecond, not valid in controlled mode
   */
  hideAfter?: number
  /**
   * @description disappear automatically, in millisecond, not valid in controlled mode
   */
  autoClose?: number
}

/**
 * @deprecated Removed after 3.0.0, Use `UseDelayedToggleProps` instead.
 */
export const useDelayedToggleProps = buildProps({
  /**
   * @description delay of appearance, in millisecond, not valid in controlled mode
   */
  showAfter: {
    type: Number,
    default: 0,
  },
  /**
   * @description delay of disappear, in millisecond, not valid in controlled mode
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description disappear automatically, in millisecond, not valid in controlled mode
   */
  autoClose: {
    type: Number,
    default: 0,
  },
} as const)

export type DelayedToggle = {
  open: (event?: Event) => void
  close: (event?: Event) => void
} & ToRefs<Required<UseDelayedToggleProps>>

export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close,
}: DelayedToggle) => {
  const { registerTimeout } = useTimeout()
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose,
  } = useTimeout()

  const onOpen = (event?: Event, delay = unref(showAfter)) => {
    registerTimeout(() => {
      open(event)

      const _autoClose = unref(autoClose)
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event)
        }, _autoClose)
      }
    }, delay)
  }

  const onClose = (event?: Event, delay = unref(hideAfter)) => {
    cancelTimeoutForAutoClose()
    registerTimeout(() => {
      close(event)
    }, delay)
  }

  return {
    onOpen,
    onClose,
  }
}
