import { unref } from 'vue'
import { buildProps } from '@element-plus/utils'
import { useTimeout } from '../use-timeout'

import type { ExtractPropTypes, ToRefs } from 'vue'

export const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
} as const)

export type UseDelayedToggleProps = {
  open: (event?: Event) => void
  close: (event?: Event) => void
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>

export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close,
}: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout()

  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event)
    }, unref(showAfter))
  }

  const onClose = (event?: Event) => {
    registerTimeout(() => {
      close(event)
    }, unref(hideAfter))
  }

  return {
    onOpen,
    onClose,
  }
}
