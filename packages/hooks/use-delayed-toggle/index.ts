import { unref } from 'vue'
import { buildProps } from '@element-plus/utils/props'
import { useTimeout } from '../use-timeout'

import type { ToRefs, ExtractPropTypes, Ref } from 'vue'

export const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
})

export type UseDelayedToggleProps = {
  indicator: Ref<boolean>
  open: () => void
  close: () => void
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>

export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  indicator,
  open,
  close,
}: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout()

  const onOpen = () => {
    registerTimeout(() => {
      open()
    }, unref(showAfter))
  }

  const onClose = () => {
    registerTimeout(() => {
      close()
    }, unref(hideAfter))
  }

  return {
    onOpen,
    onClose,
  }
}
