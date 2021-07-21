import {
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { batchAddEvts, clearEvts, addClass, removeClass } from '@element-plus/utils/dom'
import { isNull, isString, isUndefined } from '@element-plus/utils/util'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { warn } from '@element-plus/utils/error'

import type { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue'
import type { Events } from '@element-plus/utils/dom'

export const useAnchorProps = {
  contextMenu: Boolean,
  noParentEvent: Boolean,
  target: {
    type: [Boolean, String],
    default: true,
  },
}

type IUseAnchorProps = {
  indicator: Ref<boolean>
  mountAnchor?: (val?: boolean) => void
  noEmit?: boolean
}

const token = 'anchor'

export const useAnchor = ({
  mountAnchor,
  noEmit,
}: IUseAnchorProps) => {
  const vm = getCurrentInstance()

  const props = vm.props as ExtractPropTypes<typeof useAnchorProps & { modelValue: boolean; }>
  const proxy = vm.proxy as ComponentPublicInstance<{
    triggerRef: Ref<HTMLElement | ComponentPublicInstance>
    hide: (evt: Event) => void
    toggle: (evt: Event) => void
    show: (evt: Event) => void
  }>

  const anchorEl = ref<HTMLElement>(null)
  const anchorEvents = {}

  const canShow = ($e?: TouchEvent) => {
    return isNull(anchorEl.value)
      ? false
      : isUndefined($e) || isUndefined($e.touches) || $e.touches.length <= 1
  }

  let touchTimer: ReturnType<typeof window.setTimeout>
  if (isUndefined(mountAnchor)) {
    Object.assign(anchorEvents, {
      hide(evt: Event) {
        proxy.hide(evt)
      },
      toggle(evt: Event) {
        proxy.toggle(evt)
      },
      onContextMenu(evt: Event) {
        proxy.hide(evt)
        nextTick()
      },
      mobilePrevent: (e: Event) => e.preventDefault(),

      mobileTouch(e: Event) {
        (anchorEvents as { mobileCleanup: (e: Event) => void; }).mobileCleanup(
          e,
        )

        if (canShow(e as TouchEvent) !== true) {
          return
        }

        proxy.hide(e)
        addClass(anchorEl.value, 'non-selectable')

        const target = e.target as HTMLElement
        batchAddEvts(anchorEvents, 'anchor', [
          [target, 'touchmove', 'mobileCleanup', 'passive'],
          [target, 'touchend', 'mobileCleanup', 'passive'],
          [target, 'touchcancel', 'mobileCleanup', 'passive'],
          [anchorEl.value, 'contextmenu', 'mobilePrevent', 'non-passive'],
        ])

        touchTimer = setTimeout(() => {
          proxy.show(e)
        }, 300)
      },

      mobileCleanup() {
        removeClass(anchorEl.value, 'non-selectable')
        clearTimeout(touchTimer)
      },
    })

    mountAnchor = (contextMenu = props.contextMenu) => {
      if (props.noParentEvent && isNull(anchorEl)) return
      let evts: Events

      if (contextMenu) {
        evts = [
          [anchorEl.value, 'click', 'hide', 'passive'],
          [anchorEl.value, 'contextmenu', 'onContextMenu', 'non-passive'],
        ]
      } else {
        evts = [
          [anchorEl.value, 'click', 'toggle', 'passive'],
          [anchorEl.value, 'keyup', 'toggleKey', 'passive'],
        ]
      }

      batchAddEvts(anchorEvents, token, evts)
    }
  }

  function setAnchor(el: HTMLElement) {
    anchorEl.value = el
    mountAnchor()
  }

  function pickAnchor() {
    if (props.target === '' || props.target === false) {
      anchorEl.value = null
    } else if (props.target === true) {
      const trigger = proxy.triggerRef.value
      setAnchor((trigger as ComponentPublicInstance).$el || trigger)
    } else {
      let el: HTMLElement
      if (isString(props.target)) {
        try {
          el = document.querySelector(props.target)
        } catch (e) {
          // do nothing, we will report the error later.
        }
      }

      if (isUndefined(el)) {
        anchorEl.value = null
        if (process.env.NODE_ENV !== 'production') {
          warn(
            '[use-anchor]',
            `
            You need to provide a valid target, the desired value is a css
            selector or boolean, your current target is ${props.target}
          `,
          )
        }
      } else {
        anchorEl.value = el
        mountAnchor()
      }
    }
  }

  function unmountAnchor() {
    clearEvts(anchorEvents, 'anchor')
  }

  onMounted(() => {
    if (noEmit !== true && props.modelValue && isNull(anchorEl.value)) {
      vm.emit(UPDATE_MODEL_EVENT, false)
    }
    pickAnchor()
  })

  onBeforeUnmount(unmountAnchor)

  watch(
    () => props.target,
    () => {
      if (!isNull(anchorEl.value)) {
        unmountAnchor()
      }
      pickAnchor()
    },
  )

  watch(
    () => props.contextMenu,
    val => {
      if (!isNull(anchorEl.value)) {
        unmountAnchor()
        mountAnchor(val)
      }
    },
  )

  return {
    anchorEl,
    anchorEvents,
    canShow,
  }
}
