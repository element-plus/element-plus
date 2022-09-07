/* istanbul ignore file */
import { getCurrentInstance } from 'vue'

const AFTER_APPEAR = 'afterAppear'
const AFTER_ENTER = 'afterEnter'
const AFTER_LEAVE = 'afterLeave'
const APPEAR = 'appear'
const APPEAR_CANCELLED = 'appearCancelled'
const BEFORE_ENTER = 'beforeEnter'
const BEFORE_LEAVE = 'beforeLeave'
const ENTER = 'enter'
const ENTER_CANCELLED = 'enterCancelled'
const LEAVE = 'leave'
const LEAVE_CANCELLED = 'leaveCancelled'

export const useTransitionFallthroughEmits = [
  AFTER_APPEAR,
  AFTER_ENTER,
  AFTER_LEAVE,
  APPEAR,
  APPEAR_CANCELLED,
  BEFORE_ENTER,
  BEFORE_LEAVE,
  ENTER,
  ENTER_CANCELLED,
  LEAVE,
  LEAVE_CANCELLED,
] as const

// Sometimes we want to delegate the transition emitted event
// we have to right the function locally, which is not a good
// approach to this, so we created this hook for the event
// fallthrough

/**
 * NOTE:
 * This is only a delegator for delegating transition callbacks.
 * Use this at your need.
 */

/**
 * Simple usage
 *
 * In your setups:
 *
 * setup() {
 *   const fallthroughMethods = useTransitionFallthrough()
 *   return fallthrough
 * }
 *
 * In your template:
 *
 * <template>
 *  <transition name="whatever" v-bind="fallthrough">
 *    <slot />
 *  </transition>
 * </template>
 *
 */

export const useTransitionFallthrough = () => {
  const { emit } = getCurrentInstance()!

  return {
    onAfterAppear: () => {
      emit(AFTER_APPEAR)
    },
    onAfterEnter: () => {
      emit(AFTER_ENTER)
    },
    onAfterLeave: () => {
      emit(AFTER_LEAVE)
    },
    onAppearCancelled: () => {
      emit(APPEAR_CANCELLED)
    },
    onBeforeEnter: () => {
      emit(BEFORE_ENTER)
    },
    onBeforeLeave: () => {
      emit(BEFORE_LEAVE)
    },
    onEnter: () => {
      emit(ENTER)
    },
    onEnterCancelled: () => {
      emit(ENTER_CANCELLED)
    },
    onLeave: () => {
      emit(LEAVE)
    },
    onLeaveCancelled: () => {
      emit(LEAVE_CANCELLED)
    },
  }
}
