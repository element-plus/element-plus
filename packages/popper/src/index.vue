<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  ref,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  watch,
  Fragment,
  Teleport,
  Transition,
  withDirectives,
  vShow,
} from 'vue'
import { isArray } from '@vue/shared'
import { debounce } from 'lodash'
import { createPopper } from '@popperjs/core'

import { generateId } from '@element-plus/utils/util'
import { on, off } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'

import useModifier from './useModifier'

import type { PropType, Ref } from 'vue'

import type { Effect, Offset, Placement, PopperInstance, PositioningStrategy, RefElement, Options } from './popper'

const stop = (e: Event) => e.stopPropagation()

const getTrigger = () => {
  const { subTree: { children } } = getCurrentInstance()
  // SubTree is formed by <slot name="trigger"/><popper />
  // So that the trigger element is within the slot, we need to take it out of the slot in order to attach
  // events on top of it
  const targetSlot = children[0]
  if (targetSlot.length > 1) {
    console.warn('Popper will only be attached to the first child')
  }

  // This indicates if the slot is rendered with directives (e.g. v-if) or templates (e.g. <template />)
  // if it's true, then the children needs to be taken by accessing targetSlots.children to get it

  const trigger: HTMLElement = targetSlot.type === Fragment
    ? targetSlot.children[0].el
    : targetSlot.el
  if (!trigger) {
    throwError(compName, 'Cannot find referrer to attach popper to')
  }
  return trigger
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
      type: [Number, Array] as PropType<Offset>,
      default: [0, 12] as Offset,
      validator: (val: Offset): boolean => {
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
    pure: {
      type: Boolean,
      default: false,
    },
    // Once this option were given, the entire popper is under the users' control, top priority
    popperOptions: {
      type: Object as PropType<Options>,
      default: () => null,
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
      default: false,
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

    function initializePopper() {
      const _trigger = getTrigger()


      trigger.value = _trigger

      popperInstance.value = createPopper(_trigger, popperRef.value,
        props.popperOptions !== null
          ? props.popperOptions
          : {
            placement: popperOptions.value.placement,
            onFirstUpdate: () => {
              popperInstance.value.forceUpdate()
            },
            strategy: popperOptions.value.strategy,
            modifiers: useModifier(popperOptions.value.modifierOptions),
          })
      _trigger.setAttribute('aria-describedby', popperId.value)
      _trigger.setAttribute('tabindex', props.tabIndex)
      on(_trigger, 'mouseenter', _show)
      on(_trigger, 'mouseleave', _hide)
      on(_trigger, 'focus', handleFocus)
      on(_trigger, 'blur', handleBlur)
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
      if (!popperInstance.value) return
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
      const _trigger = getTrigger()
      if (_trigger !== trigger.value && popperInstance.value) {
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
  render() {
    const arrow = this.showArrow
      ? h(
        'div',
        {
          ref: 'arrowRef',
          class: 'el-popper__arrow',
          'data-popper-arrow': '',
        },
      )
      : null

    const popper = h(
      Transition,
      {
        name: this.transition,
      },
      {
        default: () =>
          withDirectives(
            h(
              'div',
              {
                ariaHidden: this.visible ? 'false' : 'true',
                class: [
                  'el-popper',
                  'is-' + this.effect,
                  this.popperClass,
                  this.pure
                    ? 'el-popper__pure'
                    : '',
                ],
                id: this.popperId,
                ref: 'popperRef',
                role: 'tooltip',
                onMouseEnter: this._show,
                onMouseLeave: this._hide,
                onClick: stop,
              },
              [
                this.$slots.default ? this.$slots.default() : this.content,
                arrow,
              ],
            ),
            [
              [vShow, this.visible],
            ],
          ),
      },
    )
    return h(
      Fragment,
      null,
      [
        this.$slots.trigger?.(),
        this.appendToBody
          ? h(
            Teleport,
            {
              to: 'body',
            },
            popper,
          )
          : popper,
      ],
    )
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
  width: 10px;
  height: 10px;
  z-index: -1;
}

.el-popper__arrow::before {
  content: " ";
  transform: rotate(45deg);
  background: #303133;
  box-sizing: border-box;
}

.el-popper[data-popper-placement^="top"] > .el-popper__arrow {
  bottom: -5px;
}

.el-popper[data-popper-placement^="bottom"] > .el-popper__arrow {
  top: -5px;
}

.el-popper[data-popper-placement^="left"] > .el-popper__arrow {
  right: -5px;
}

.el-popper[data-popper-placement^="right"] > .el-popper__arrow {
  left: -5px;
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
  border-top-color: transparent;
  border-left-color: transparent;
}

.el-popper.is-light[data-popper-placement^="bottom"] .el-popper__arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.el-popper.is-light[data-popper-placement^="left"] .el-popper__arrow::before {
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.el-popper.is-light[data-popper-placement^="right"] .el-popper__arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}

.el-popper.el-popper__pure {
  padding: 0;
  border: none;
}

.el-popper.el-popper__pure .el-popper__arrow::before {
  border: none;
}
</style>
