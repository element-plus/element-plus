<template>
  <slot :handle-keydown="onKeydown" />
</template>
<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { isNil } from 'lodash-unified'
import { EVENT_CODE } from '@element-plus/constants'
import { useEscapeKeydown } from '@element-plus/hooks'
import { isString } from '@element-plus/utils'
import {
  createFocusOutPreventedEvent,
  focusFirstDescendant,
  focusableStack,
  getEdges,
  isFocusCausedByUserEvent,
  obtainAllFocusableElements,
  tryFocus,
  useFocusReason,
} from './utils'
import {
  FOCUS_AFTER_RELEASED,
  FOCUS_AFTER_TRAPPED,
  FOCUS_AFTER_TRAPPED_OPTS,
  FOCUS_TRAP_INJECTION_KEY,
  ON_RELEASE_FOCUS_EVT,
  ON_TRAP_FOCUS_EVT,
} from './tokens'

import type { PropType } from 'vue'
import type { FocusLayer } from './utils'

export default defineComponent({
  name: 'ElFocusTrap',
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object as PropType<HTMLElement>,
    focusStartEl: {
      type: [Object, String] as PropType<'container' | 'first' | HTMLElement>,
      default: 'first',
    },
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    'focusin',
    'focusout',
    'focusout-prevented',
    'release-requested',
  ],
  setup(props, { emit }) {
    const forwardRef = ref<HTMLElement | undefined>()
    let lastFocusBeforeTrapped: HTMLElement | null
    let lastFocusAfterTrapped: HTMLElement | null

    const { focusReason } = useFocusReason()

    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit('release-requested', event)
      }
    })

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

      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e
      const { loop } = props
      const isTabbing =
        code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey

      const currentFocusingEl = document.activeElement
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget as HTMLElement
        const [first, last] = getEdges(container)
        const isTabbable = first && last
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value,
            })
            emit('focusout-prevented', focusoutPreventedEvent)
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault()
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value,
            })
            emit('focusout-prevented', focusoutPreventedEvent)
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault()
              if (loop) tryFocus(first, true)
            }
          } else if (
            shiftKey &&
            [first, container].includes(currentFocusingEl as HTMLElement)
          ) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value,
            })
            emit('focusout-prevented', focusoutPreventedEvent)
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault()
              if (loop) tryFocus(last, true)
            }
          }
        }
      }
    }

    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown,
    })

    watch(
      () => props.focusTrapEl,
      (focusTrapEl) => {
        if (focusTrapEl) {
          forwardRef.value = focusTrapEl
        }
      },
      { immediate: true }
    )

    watch([forwardRef], ([forwardRef], [oldForwardRef]) => {
      if (forwardRef) {
        forwardRef.addEventListener('keydown', onKeydown)
        forwardRef.addEventListener('focusin', onFocusIn)
        forwardRef.addEventListener('focusout', onFocusOut)
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener('keydown', onKeydown)
        oldForwardRef.removeEventListener('focusin', onFocusIn)
        oldForwardRef.removeEventListener('focusout', onFocusOut)
      }
    })

    const trapOnFocus = (e: Event) => {
      emit(ON_TRAP_FOCUS_EVT, e)
    }
    const releaseOnFocus = (e: Event) => emit(ON_RELEASE_FOCUS_EVT, e)

    const onFocusIn = (e: FocusEvent) => {
      const trapContainer = unref(forwardRef)
      if (!trapContainer) return

      const target = e.target as HTMLElement | null
      const relatedTarget = e.relatedTarget as HTMLElement | null
      const isFocusedInTrap = target && trapContainer.contains(target)

      if (!props.trapped) {
        const isPrevFocusedInTrap =
          relatedTarget && trapContainer.contains(relatedTarget)
        if (!isPrevFocusedInTrap) {
          lastFocusBeforeTrapped = relatedTarget
        }
      }

      if (isFocusedInTrap) emit('focusin', e)

      if (focusLayer.paused) return

      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target
        } else {
          tryFocus(lastFocusAfterTrapped, true)
        }
      }
    }

    const onFocusOut = (e: Event) => {
      const trapContainer = unref(forwardRef)
      if (focusLayer.paused || !trapContainer) return

      if (props.trapped) {
        const relatedTarget = (e as FocusEvent)
          .relatedTarget as HTMLElement | null
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          // Give embedded focus layer time to pause this layer before reclaiming focus
          // And only reclaim focus if it should currently be trapping
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason.value,
              })
              emit('focusout-prevented', focusoutPreventedEvent)
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true)
              }
            }
          }, 0)
        }
      } else {
        const target = e.target as HTMLElement | null
        const isFocusedInTrap = target && trapContainer.contains(target)
        if (!isFocusedInTrap) emit('focusout', e)
      }
    }

    async function startTrap() {
      // Wait for forwardRef to resolve
      await nextTick()
      const trapContainer = unref(forwardRef)
      if (trapContainer) {
        focusableStack.push(focusLayer)
        const prevFocusedElement = trapContainer.contains(
          document.activeElement
        )
          ? lastFocusBeforeTrapped
          : document.activeElement
        lastFocusBeforeTrapped = prevFocusedElement as HTMLElement | null
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement)
        if (!isPrevFocusContained) {
          const focusEvent = new Event(
            FOCUS_AFTER_TRAPPED,
            FOCUS_AFTER_TRAPPED_OPTS
          )
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus)
          trapContainer.dispatchEvent(focusEvent)
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl
              if (!isString(focusStartEl)) {
                tryFocus(focusStartEl)
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = 'first'
                }
              }
              if (focusStartEl === 'first') {
                focusFirstDescendant(
                  obtainAllFocusableElements(trapContainer),
                  true
                )
              }
              if (
                document.activeElement === prevFocusedElement ||
                focusStartEl === 'container'
              ) {
                tryFocus(trapContainer)
              }
            })
          }
        }
      }
    }

    function stopTrap() {
      const trapContainer = unref(forwardRef)

      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus)

        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason.value,
          },
        })
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus)
        trapContainer.dispatchEvent(releasedEvent)
        if (
          !releasedEvent.defaultPrevented &&
          (focusReason.value == 'keyboard' ||
            !isFocusCausedByUserEvent() ||
            trapContainer.contains(document.activeElement))
        ) {
          tryFocus(lastFocusBeforeTrapped ?? document.body)
        }

        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus)
        focusableStack.remove(focusLayer)
      }
    }

    onMounted(() => {
      if (props.trapped) {
        startTrap()
      }

      watch(
        () => props.trapped,
        (trapped) => {
          if (trapped) {
            startTrap()
          } else {
            stopTrap()
          }
        }
      )
    })

    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap()
      }

      if (forwardRef.value) {
        forwardRef.value.removeEventListener('keydown', onKeydown)
        forwardRef.value.removeEventListener('focusin', onFocusIn)
        forwardRef.value.removeEventListener('focusout', onFocusOut)
        forwardRef.value = undefined
      }
    })

    return {
      onKeydown,
    }
  },
})
</script>
