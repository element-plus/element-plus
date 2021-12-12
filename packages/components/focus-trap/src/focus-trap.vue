<template>
  <slot />
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  provide,
  unref,
  watch,
} from 'vue'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { on, off } from '@element-plus/utils/dom'
import {
  focusableStack,
  focusFirstDescendant,
  getEdges,
  tryFocus,
  obtainAllFocusableElements,
} from './utils'
import {
  FOCUS_TRAP_INJECTION_KEY,
  FOCUS_ON_MOUNT,
  FOCUS_ON_MOUNT_OPTS,
  ON_MOUNT_FOCUS_EVT,
  ON_UNMOUNT_FOCUS_EVT,
  FOCUS_ON_UNMOUNT,
} from './tokens'

import type { FocusLayer } from './utils'

export default defineComponent({
  name: 'ElFocusTrap',
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
  },
  emits: [ON_MOUNT_FOCUS_EVT, ON_UNMOUNT_FOCUS_EVT],
  setup(props, { emit }) {
    const focusTrapRef = ref<HTMLElement | null>()
    const forwardRef = ref<HTMLElement | null>(null)
    let lastFocusBeforeMounted: HTMLElement | null
    let lastFocusAfterMounted: HTMLElement | null

    const focusLayer: FocusLayer = {
      paused: false,
      pause() {
        this.paused = true
      },
      resume() {
        this.paused = false
      },
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (!props.loop && !props.trapped) return
      if (focusLayer.paused) return

      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e
      const { loop } = props
      const isTabbing =
        key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey

      const currentFocusingEl = document.activeElement
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget as HTMLElement
        const [first, last] = getEdges(container)
        const isTabbable = first && last

        if (!isTabbable) {
          if (currentFocusingEl === container) e.preventDefault()
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault()
            if (loop) tryFocus(first, true)
          } else if (shiftKey && currentFocusingEl === first) {
            e.preventDefault()
            if (loop) tryFocus(last, true)
          }
        }
      }
    }

    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown,
    })

    const focusOnMount = (e: Event) => {
      emit(ON_MOUNT_FOCUS_EVT, e)
    }
    const focusOnUnmount = (e: Event) => emit(ON_UNMOUNT_FOCUS_EVT, e)
    const onFocusIn = (e: Event) => {
      const trapContainer = unref(forwardRef)
      if (focusLayer.paused || !trapContainer) return
      const target = e.target as HTMLElement | null
      if (target && trapContainer.contains(target)) {
        lastFocusAfterMounted = target
      } else {
        tryFocus(lastFocusAfterMounted, true)
      }
    }

    const onFocusOut = (e: Event) => {
      const trapContainer = unref(forwardRef)
      if (focusLayer.paused || !trapContainer) return

      if (
        !trapContainer.contains(
          (e as FocusEvent).relatedTarget as HTMLElement | null
        )
      ) {
        tryFocus(lastFocusAfterMounted, true)
      }
    }

    onMounted(() => {
      const trapContainer = unref(forwardRef)
      if (trapContainer) {
        focusableStack.push(focusLayer)
        const prevFocusedElement = document.activeElement
        lastFocusBeforeMounted = prevFocusedElement as HTMLElement | null
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement)
        if (!isPrevFocusContained) {
          const mountEvent = new Event(FOCUS_ON_MOUNT, FOCUS_ON_MOUNT_OPTS)
          on(trapContainer, FOCUS_ON_MOUNT, focusOnMount)
          trapContainer.dispatchEvent(mountEvent)
          if (!mountEvent.defaultPrevented) {
            focusFirstDescendant(
              obtainAllFocusableElements(trapContainer),
              true
            )
            if (document.activeElement === prevFocusedElement) {
              tryFocus(trapContainer)
            }
          }
        }
      }

      watch(
        () => props.trapped,
        (trapped) => {
          if (trapped) {
            on(document, 'focusin', onFocusIn)
            on(document, 'focusout', onFocusOut)
          } else {
            off(document, 'focusin', onFocusIn)
            off(document, 'focusout', onFocusOut)
          }
        },
        { immediate: true }
      )
    })

    onBeforeUnmount(() => {
      const trapContainer = unref(forwardRef)

      if (trapContainer) {
        off(trapContainer, FOCUS_ON_MOUNT, focusOnMount)
        const unmountEvent = new Event(FOCUS_ON_UNMOUNT, FOCUS_ON_MOUNT_OPTS)

        on(trapContainer, FOCUS_ON_UNMOUNT, focusOnUnmount)
        trapContainer.dispatchEvent(unmountEvent)

        if (unmountEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeMounted ?? document.body, true)
        }

        off(trapContainer, FOCUS_ON_UNMOUNT, focusOnUnmount)

        focusableStack.remove(focusLayer)
      }
    })

    return {
      focusTrapRef,
      forwardRef,
      onKeydown,
    }
  },
})
</script>
