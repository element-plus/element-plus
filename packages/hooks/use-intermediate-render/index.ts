import { nextTick, watch, unref } from 'vue'

import type { Ref } from 'vue'

export type UseDelayedRenderProps = {
  indicator: Ref<boolean>
  intermediateIndicator: Ref<boolean>
  beforeShow?: () => void
  beforeHide?: () => void
  afterShow?: () => void
  afterHide?: () => void
}

export const useDelayedRender = ({
  indicator,
  intermediateIndicator,
  beforeShow,
  afterShow,
  afterHide,
  beforeHide,
}: UseDelayedRenderProps) => {
  watch(
    () => unref(indicator),
    (val) => {
      if (val) {
        beforeShow?.()
        nextTick(() => {
          if (!unref(indicator)) return
          intermediateIndicator.value = true
          nextTick(() => {
            afterShow?.()
          })
        })
      } else {
        beforeHide?.()
        nextTick(() => {
          if (!unref(indicator)) return
          intermediateIndicator.value = false
          nextTick(() => {
            afterHide?.()
          })
        })
      }
    }
  )
}
