<script lang="ts">
import {
  computed,
  defineComponent,
  Fragment,
  h,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  renderSlot,
  toDisplayString,
  toRef,
  watch,
  withDirectives,
} from 'vue'
import { createPopper } from '@popperjs/core'
import { ClickOutside } from '@element-plus/directives'
import {
  useTimeout,
  useTeleport,
  useModelToggle,
  useModelToggleEmits,
  useTransitionFallthrough,
  useTransitionFallthroughEmits,
} from '@element-plus/hooks'
import {
  generateId,
  isBool,
  isHTMLElement,
  isArray,
  isString,
  $,
} from '@element-plus/utils/util'
import PopupManager from '@element-plus/utils/popup-manager'
import throwError, { breaking } from '@element-plus/utils/error'
import { useModelToggleProps } from '@element-plus/hooks'

import defaultProps from './use-popper/defaults'
import usePopperOptions from './use-popper/popper-options'
import { renderArrow, renderPopper, renderTrigger } from './renderers'

import type { CSSProperties, ComponentPublicInstance, Ref } from 'vue'
import type { Instance as PopperInstance } from '@popperjs/core'
import type { RefElement } from '@element-plus/utils/types'
// Did this on purpose since the current resolution is quite annoying
import type { TriggerType } from '../../hooks/use-teleport/props'

const compName = 'ElPopper'

export interface PopperEvents {
  onClick?: (e: Event) => void
  onMouseenter?: (e: Event) => void
  onMouseleave?: (e: Event) => void
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
}

export type ElementType = ComponentPublicInstance | HTMLElement

export default defineComponent({
  name: compName,
  props: { ...defaultProps, ...useModelToggleProps },
  emits: [...useModelToggleEmits, ...useTransitionFallthroughEmits],
  setup(props, { slots, expose }) {
    if (!slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    // return usePopper(props as IPopperOptions, ctx as SetupContext)

    if (process.env.NODE_ENV !== 'production' && isBool(props.visible)) {
      breaking(compName, `
        \`v-model:visible\` has been deprecated due to maintainance issue,
        use \`v-model\` instead.
      `)
    }

    const arrowRef = ref<RefElement>(null)
    const triggerRef = ref(null) as Ref<ElementType>
    const popperRef = ref<RefElement>(null)

    const popperId = `el-popper-${generateId()}`
    let popperInstance: Nullable<PopperInstance> = null

    let triggerFocused = false

    const isManual = computed(() => props.manualMode || props.trigger === 'manual')

    const popperStyle = ref<CSSProperties>({ zIndex: PopupManager.nextZIndex() })

    const popperOptions = usePopperOptions(props, {
      arrow: arrowRef,
    })

    const visible = ref(false)

    const { registerTimeout, cancelTimeout } = useTimeout()

    const {
      renderTeleport,
      showTeleport,
      hideTeleport,
    } = useTeleport(contentRenderer, toRef(props, 'appendToBody'))

    // show and hide modifies the variable visibility's value
    const { show, hide } = useModelToggle({
      indicator: visible,
      onShow,
      onHide,
    })

    /**
     * The calling mechanism here is:
     * when the visibility gets changed, let's say we change it to true
     * the delayShow gets called which initializes a global root node for the popper content
     * to insert in, then it register a timer for calling the show method, which changes the flag to
     * true, then calls onShow method.
     * So the order of invocation is: delayedShow -> timer(show) -> set the indicator to true -> onShow
     */
    const delayShow = () => {
      if (isManual.value || props.disabled) return
      // renders out the teleport element root.
      showTeleport()
      registerTimeout(show, props.showAfter)
    }

    const delayHide = () => {
      if (isManual.value) return
      registerTimeout(hide, props.hideAfter)
    }

    function onShow() {
      popperStyle.value.zIndex = PopupManager.nextZIndex()
      nextTick(initializePopper)
    }

    function onHide() {
      hideTeleport()

      nextTick(detachPopper)
      if (props.disabled) {
        doDestroy(true)
      }
    }

    function onPopperMouseEnter() {
      // if trigger is click, user won't be able to close popper when
      // user tries to move the mouse over popper contents
      if (props.enterable && props.trigger !== 'click') {
        cancelTimeout()
      }
    }

    function onPopperMouseLeave() {
      const { trigger } = props
      const shouldPrevent =
        (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
        // we'd like to test array type trigger here, but the only case we need to cover is trigger === 'click' or
        // trigger === 'focus', because that when trigger is string
        // trigger.length === 1 and trigger[0] === 5 chars string is mutually exclusive.
        // so there will be no need to test if trigger is array type.
        (trigger.length === 1 &&
          (trigger[0] === 'click' || trigger[0] === 'focus'))

      if (shouldPrevent) return

      delayHide()
    }

    function initializePopper() {
      if (!$(visible) || popperInstance !== null) {
        return
      }

      const unwrappedTrigger = $(triggerRef)
      const _trigger = isHTMLElement(unwrappedTrigger)
        ? unwrappedTrigger
        : (unwrappedTrigger as ComponentPublicInstance).$el
      popperInstance = createPopper(_trigger, $(popperRef), $(popperOptions))

      popperInstance.update()
    }

    function doDestroy(forceDestroy?: boolean) {
      /* istanbul ignore if */
      if (!popperInstance || ($(visible) && !forceDestroy)) return
      detachPopper()
    }

    function detachPopper() {
      popperInstance?.destroy?.()
      popperInstance = null
    }

    const events = {} as PopperEvents

    function update() {
      if (!$(visible)) {
        return
      }
      if (popperInstance) {
        popperInstance.update()
      } else {
        initializePopper()
      }
    }

    if (!isManual.value) {
      const toggleState = () => {
        if ($(visible)) {
          delayHide()
        } else {
          delayShow()
        }
      }

      const popperEventsHandler = (e: Event) => {
        e.stopPropagation()
        switch (e.type) {
          case 'click': {
            if (triggerFocused) {
              // reset previous focus event
              triggerFocused = false
            } else {
              toggleState()
            }
            break
          }
          case 'mouseenter': {
            delayShow()
            break
          }
          case 'mouseleave': {
            delayHide()
            break
          }
          case 'focus': {
            triggerFocused = true
            delayShow()
            break
          }
          case 'blur': {
            triggerFocused = false
            delayHide()
            break
          }
        }
      }

      const triggerEventsMap: Partial<Record<TriggerType, (keyof PopperEvents)[]>> = {
        click: ['onClick'],
        hover: ['onMouseenter', 'onMouseleave'],
        focus: ['onFocus', 'onBlur'],
      }

      const mapEvents = (t: TriggerType) => {
        triggerEventsMap[t].forEach(event => {
          events[event] = popperEventsHandler
        })
      }

      if (isArray(props.trigger)) {
        Object.values(props.trigger).forEach(mapEvents)
      } else {
        mapEvents(props.trigger as TriggerType)
      }
    }


    const popperRefAttacher = (val: HTMLElement) => {
      popperRef.value = val
    }

    const {
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
    } = useTransitionFallthrough()

    const onAfterPopperLeave = () => {
      onAfterLeave()
    }

    function contentRenderer() {

      const arrow = renderArrow(props.showArrow)
      const popper = renderPopper(
        {
          effect: props.effect,
          name: props.transition,
          popperClass: props.popperClass,
          popperId,
          popperStyle: popperStyle.value,
          popperRef: popperRefAttacher,
          pure: props.pure,
          stopPopperMouseEvent: props.stopPopperMouseEvent,
          onMouseenter: onPopperMouseEnter,
          onMouseleave: onPopperMouseLeave,
          onAfterEnter,
          onAfterLeave: onAfterPopperLeave,
          onBeforeEnter,
          onBeforeLeave,
          visible: visible.value,
        },
        [
          renderSlot(slots, 'default', {}, () => {
            return [toDisplayString(props.content)]
          }),
          arrow,
        ],
      )

      return popper
    }

    const render = () => {
      const $triggerSlots = [renderSlot(slots, 'trigger', {}, () => [])]
      const triggerProps = {
        'aria-describedby': popperId,
        class: props.class,
        style: props.style,
        ref: (val: HTMLElement) => triggerRef.value = val,
        ...events,
      }

      const trigger = isManual.value
        ? renderTrigger($triggerSlots, triggerProps)
        : withDirectives(renderTrigger($triggerSlots, triggerProps), [[ClickOutside, delayHide]])

      return h(Fragment, null, [
        trigger,
        renderTeleport(),
      ])
    }

    watch(popperOptions, val => {
      if (!popperInstance) return
      popperInstance.setOptions(val)
      popperInstance.update()
    })

    const forceDestroy = () => doDestroy(true)

    onBeforeUnmount(forceDestroy)
    onDeactivated(forceDestroy)

    expose({
      update,
      doDestroy,
      show,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      initializePopper,
      isManual,
      arrowRef,
      events,
      popperId,
      popperInstance,
      popperRef,
      popperStyle,
      triggerRef,
      visible,
    })

    return render
  },
})
</script>
