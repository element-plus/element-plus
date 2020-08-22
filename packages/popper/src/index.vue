<template>
  <slot name="trigger"></slot>
  <transition :name="transition">
    <div
      v-show="visible"
      :id="popperId"
      ref="popperRef"
      role="tooltip"
      :aria-hidden="visible ? 'false' : 'true'"
      :class="['el-popper', 'is-' + effect, popperClass]"
      @mouseenter="_show"
      @mouseleave="_hide"
    >
      <!-- mark this parent container un-indexable to disable it from being indexed -->
      <slot>
        <div>{{ content }}</div>
      </slot>
      <div
        v-if="showArrow"
        ref="arrowRef"
        class="el-popper__arrow"
        data-popper-arrow
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  watch,
  Fragment,
} from 'vue'
import { isArray } from '@vue/shared'
import { debounce } from 'lodash'
import { createPopper } from '@popperjs/core'

import { generateId } from '@element-plus/utils/util'
import { on, off } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'

import useModifer from './useModifier'

import type { PropType, Ref } from 'vue'
import type {
  Placement,
  Instance as PopperInstance,
  PositioningStrategy,
} from '@popperjs/core'
import useModifier from './useModifier'

type Effect = 'dark' | 'light';
type RefElement = Nullable<HTMLElement>

const stop = (e: Event) => e.stopPropagation()

const getTrigger = () => {
  const {
    subTree: { dynamicChildren },
  } = getCurrentInstance()
  return dynamicChildren[0].children
}

const compName = 'ElPopper'
export default defineComponent({
  name: compName,
  props: {
    arrowOffset: {
      type: Number,
      default: 15,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    boundariesPadding: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: '',
    },
    closeDelay: {
      type: Number,
      default: 200,
    },
    cutoff: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      defualt: false,
    },
    effect: {
      type: String as PropType<Effect>,
      default: 'dark' as Effect,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    flip: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
    manualMode: {
      type: Boolean,
      default: false,
    },
    showAfter: {
      type: Number,
      default: 0,
    },
    offset: {
      type: [Number, Array] as PropType<[number, number] | number>,
      default: [0, 12] as [number, number],
      validator: (val: [number, number] | number): boolean => {
        return (isArray(val) && val.length === 2) || typeof val === 'number'
      },
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom' as Placement,
    },
    popperClass: {
      type: String,
      default: '',
    },
    referrer: {
      type: HTMLElement as PropType<Nullable<HTMLElement>>,
      default: null as Nullable<HTMLElement>,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    strategy: {
      type: String as PropType<PositioningStrategy>,
      default: 'fixed' as PositioningStrategy,
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    tabIndex: {
      type: String,
      default: '0',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const popperRef = ref<RefElement>(null)
    const arrowRef = ref<RefElement>(null)
    const trigger = ref<RefElement>(null)

    const exceptionState = ref(false)
    const show = ref(false)
    const popperId = ref(`el-tooltip-${generateId()}`)

    const popperInstance = ref<Nullable<PopperInstance>>(null)
    const timeout = ref<NodeJS.Timeout>(null)
    const timeoutPending = ref<NodeJS.Timeout>(null)

    const visible = computed(() => {
      return props.manualMode ? props.value : !props.disabled && show.value
    })

    const popperOptions = computed(() => {
      return {
        modifierOptions: {
          arrowOffset: props.arrowOffset,
          arrowRef: arrowRef.value,
          boundariesPadding: props.boundariesPadding,
          cutoff: props.cutoff,
          offset: props.offset,
          showArrow: props.showArrow,
          fallbackOptions: props.flip ? {} : { fallbackPlacements: [] },
        },
        placement: props.placement,
        strategy: props.strategy,
      }
    })

    const clearTimer = (timer: Ref<Nullable<NodeJS.Timeout>>) => {
      clearTimeout(timer.value)
      timer.value = null
    }
    if (!slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance
    function doDestroy(forceDestroy: boolean) {
      /* istanbul ignore if */
      if (!popperInstance.value || (visible.value && !forceDestroy)) return
      detach()
      if (popperRef.value && props.appendToBody) {
        off(popperRef.value, 'click', stop)
        document.body.removeChild(popperRef.value)
      }
    }

    function detach() {
      popperInstance.value.destroy()
      popperInstance.value = null
      const _trigger = trigger.value
      off(_trigger, 'mouseenter', _show)
      off(_trigger, 'mouseleave', _hide)
      off(_trigger, 'focus', handleFocus)
      off(_trigger, 'blur', handleBlur)
      trigger.value = null
    }

    const showPopper = () => {
      if (!exceptionState.value || props.manualMode || props.disabled) return
      clearTimer(timeout)
      const handleHideAfter = () => {
        if (props.hideAfter > 0) {
          timeoutPending.value = setTimeout(() => {
            show.value = false
          }, props.hideAfter)
        }
      }
      if (props.showAfter === 0) {
        show.value = true
        handleHideAfter()
      } else {
        timeout.value = setTimeout(() => {
          show.value = true
          handleHideAfter()
        }, props.showAfter)
      }
    }

    const debouncedClose = debounce(() => {
      if (props.enterable && exceptionState.value) return
      clearTimer(timeout)
      if (timeoutPending.value !== null) {
        clearTimer(timeoutPending)
      }
      show.value = false
      if (props.disabled) {
        doDestroy(true)
      }
    }, props.closeDelay)

    function setExpectionState(state: boolean) {
      if (!state) {
        clearTimer(timeoutPending)
      }
      exceptionState.value = state
    }
    function _show() {
      setExpectionState(true)
      showPopper()
    }

    function _hide() {
      setExpectionState(false)
      debouncedClose()
    }

    function handleBlur() {
      _hide()
    }

    function handleFocus() {
      _show()
    }

    let cachedPopperOptions = null

    function initializePopper() {
      const subTree = getTrigger()

      if (subTree.length > 1) {
        console.warn('Popper will only be attached to the first child')
      }
      let referenceElement: HTMLElement
      if (subTree[0].type === Fragment) {
        referenceElement = subTree[0].children[0].el
      } else {
        referenceElement = subTree[0].el
      }
      if (!referenceElement) {
        throwError(compName, 'Cannot find referrer to attach popper to')
      }
      trigger.value = referenceElement
      const modifiers = useModifer(popperOptions.value.modifierOptions)

      popperInstance.value = createPopper(referenceElement, popperRef.value, cachedPopperOptions !== null ? cachedPopperOptions : {
        placement: popperOptions.value.placement,
        onFirstUpdate: () => {
          popperInstance.value.forceUpdate()
        },
        strategy: popperOptions.value.strategy,
        modifiers,
      })
      cachedPopperOptions = null
      referenceElement.setAttribute('aria-describedby', popperId.value)
      referenceElement.setAttribute('tabindex', props.tabIndex)
      on(referenceElement, 'mouseenter', _show)
      on(referenceElement, 'mouseleave', _hide)
      on(referenceElement, 'focus', handleFocus)
      on(referenceElement, 'blur', handleBlur)
      on(popperRef.value, 'click', stop)
      if (props.appendToBody && popperRef.value) {
        document.body.appendChild(popperRef.value)
      }
    }

    watch(
      () => visible.value,
      () => {
        if (popperInstance.value) {
          popperInstance.value.update()
        } else {
          initializePopper()
        }
      },
    )

    watch(() => popperOptions.value, val => {
      if(!popperInstance.value){
        cachedPopperOptions = {
          placement: val.placement,
          strategy: val.strategy,
          modifiers: useModifier(val.modifierOptions),
        }
        return
      }
      popperInstance.value.setOptions({
        placement: val.placement,
        strategy: val.strategy,
        modifiers: useModifier(val.modifierOptions),
      })
      popperInstance.value.update()
    })

    onMounted(() => {
      initializePopper()
    })

    onBeforeUnmount(() => {
      doDestroy(true)
    })

    onUpdated(() => {
      const subTree = getTrigger()
      if (subTree[0].el !== trigger.value && popperInstance.value) {
        detach()
      }
      if (popperInstance.value) {
        popperInstance.value.update()
      } else {
        initializePopper()
      }
    })

    return {
      arrowRef,
      popperId,
      doDestroy,
      _show,
      _hide,
      popperRef,
      popperInstance,
      visible,
    }
  },
  deactivated() {
    this.doDestroy()
  },
  activated() {
    this.initializePopper()
  },
})
</script>

<style>
.el-popper {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  z-index: 2000;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
}

.el-popper__arrow,
.el-popper__arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}

.el-popper__arrow::before {
  content: " ";
  transform: rotate(45deg);
  background: #303133;
  box-sizing: border-box;
}

.el-popper[data-popper-placement^="top"] > .el-popper__arrow {
  bottom: -4px;
}

.el-popper[data-popper-placement^="bottom"] > .el-popper__arrow {
  top: -4px;
}

.el-popper[data-popper-placement^="left"] > .el-popper__arrow {
  right: -4px;
}

.el-popper[data-popper-placement^="right"] > .el-popper__arrow {
  left: -4px;
}

.el-popper.is-dark {
  background: #303133;
  color: #fff;
}
.el-popper.is-light {
  background: #fff;
  border: 1px solid #303133;
}

.el-popper.is-dark .el-popper__arrow::before {
  background: #303133;
}

.el-popper.is-light .el-popper__arrow::before {
  background: #fff;
  border: 1px solid #303133;
}

.el-popper.is-light[data-popper-placement^="top"] .el-popper__arrow::before {
  border-top: none;
  border-left: none;
}

.el-popper.is-light[data-popper-placement^="bottom"] .el-popper__arrow::before {
  border-top: none;
  border-left: none;
}

.el-popper.is-light[data-popper-placement^="left"] .el-popper__arrow::before {
  border-left: none;
  border-bottom: none;
}

.el-popper.is-light[data-popper-placement^="right"] .el-popper__arrow::before {
  border-top: none;
  border-right: none;
}
</style>
