import { nextTick, unref, watch } from 'vue'

import type { Ref } from 'vue'

export type UseDelayedRenderProps = {
  indicator: Ref<boolean>
  intermediateIndicator: Ref<boolean>
  shouldSetIntermediate?: (step: 'show' | 'hide') => boolean
  beforeShow?: () => void
  beforeHide?: () => void
  afterShow?: () => void
  afterHide?: () => void
}

export const useDelayedRender = ({
  indicator,
  intermediateIndicator,
  shouldSetIntermediate = () => true,
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
          if (shouldSetIntermediate('show')) {
            intermediateIndicator.value = true
          }
        })
      } else {
        beforeHide?.()
        nextTick(() => {
          if (unref(indicator)) return

          if (shouldSetIntermediate('hide')) {
            intermediateIndicator.value = false
          }
        })
      }
    }
  )

  // because we don't always set the value ourselves, so that we
  // simply watch the value's state, then invoke the corresponding hook.
  watch(
    () => intermediateIndicator.value,
    (val) => {
      if (val) {
        afterShow?.()
      } else {
        afterHide?.()
      }
    }
  )
}
