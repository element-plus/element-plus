import { computed, getCurrentInstance, watch, onMounted } from 'vue'
import { isFunction } from '@vue/shared'
import { isClient } from '@vueuse/core'
import { isBool } from '@element-plus/utils/util'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

import type { Ref, ComponentPublicInstance, ExtractPropTypes } from 'vue'

export const useModelToggleProps = buildProps({
  modelValue: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  'onUpdate:modelValue': Function,
})
export type UseModelToggleProps = ExtractPropTypes<typeof useModelToggleProps>

export const useModelToggleEmits = [UPDATE_MODEL_EVENT]

export type ModelToggleParams = {
  indicator: Ref<boolean>
  shouldHideWhenRouteChanges?: Ref<boolean>
  shouldProceed?: () => boolean
  onShow?: () => void
  onHide?: () => void
  modelKey?: string
}

export const useModelToggle = ({
  indicator,
  shouldHideWhenRouteChanges,
  shouldProceed,
  onShow,
  onHide,
  modelKey = 'modelValue',
}: ModelToggleParams) => {
  const instance = getCurrentInstance()!
  const props = instance.props as UseModelToggleProps & { disabled: boolean }
  const { emit } = instance

  const updateEventKey = `update:${modelKey}`

  const hasUpdateHandler = computed(() =>
    isFunction(props[`onUpdate:${modelKey}`])
  )
  // when it matches the default value we say this is absent
  // though this could be mistakenly passed from the user but we need to rule out that
  // condition
  const isModelBindingAbsent = computed(() => props[modelKey] === null)

  const doShow = () => {
    if (indicator.value === true) {
      return
    }

    indicator.value = true
    if (isFunction(onShow)) {
      onShow()
    }
  }

  const doHide = () => {
    if (indicator.value === false) {
      return
    }

    indicator.value = false

    if (isFunction(onHide)) {
      onHide()
    }
  }

  const show = () => {
    if (
      props.disabled === true ||
      (isFunction(shouldProceed) && !shouldProceed())
    )
      return

    const shouldEmit = hasUpdateHandler.value && isClient

    if (shouldEmit) {
      emit(updateEventKey, true)
    }

    if (isModelBindingAbsent.value || !shouldEmit) {
      doShow()
    }
  }

  const hide = () => {
    if (props.disabled === true || !isClient) return

    const shouldEmit = hasUpdateHandler.value && isClient

    if (shouldEmit) {
      emit(updateEventKey, false)
    }

    if (isModelBindingAbsent.value || !shouldEmit) {
      doHide()
    }
  }

  const onChange = (val: boolean) => {
    if (!isBool(val)) return
    if (props.disabled && val) {
      if (hasUpdateHandler.value) {
        emit(updateEventKey, false)
      }
    } else if (indicator.value !== val) {
      if (val) {
        doShow()
      } else {
        doHide()
      }
    }
  }

  const toggle = () => {
    if (indicator.value) {
      hide()
    } else {
      show()
    }
  }

  watch(() => props[modelKey], onChange as any)

  if (
    shouldHideWhenRouteChanges &&
    instance.appContext.config.globalProperties.$route !== undefined
  ) {
    watch(
      () => ({
        ...(
          instance.proxy as ComponentPublicInstance<{
            $route: RouteLocationNormalizedLoaded
          }>
        ).$route,
      }),
      () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide()
        }
      }
    )
  }

  onMounted(() => {
    onChange(props[modelKey] as boolean)
  })

  return {
    hide,
    show,
    toggle,
  }
}
