<template>
  <slot name="reference"></slot>
  <transition
    :name="transition"
    @after-enter="handleAfterEnter"
    @after-leave="handleAfterLeave"
  >
    <div
      v-show="visible"
      :id="popperId"
      ref="popperRef"
      role="tooltip"
      class="el-popper el-popover is-light"
      :class="[popperClass, content && 'el-popover--plain']"
      :style="{ minWidth: width + 'px' }"
    >
      <div v-if="title" class="el-popover__title" v-text="title"></div>
      <slot>
        <div>{{ content }}</div>
      </slot>
      <div
        v-if="visibleArrow"
        ref="arrowRef"
        class="popper__arrow"
        data-popper-arrow
      ></div>
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  defineComponent,
  PropType,
  computed,
  ref,
  getCurrentInstance,
  onMounted,
  watchEffect,
  onUnmounted,
} from 'vue'
import { Placement, Options } from '@popperjs/core'
import { generateId } from '@element-plus/utils/util'
import { usePopper } from './usePopper'
import throwError from '@element-plus/utils/error'
import { on, addClass, removeClass } from '../../utils/dom'
import { eventKeys } from '@element-plus/utils/aria'
import { off } from '@element-plus/utils/dom'
import { isArray } from 'lodash'

type Trigger = 'click' | 'focus' | 'hover' | 'manual';

export interface PopoverProps {
  trigger: Trigger
  title: string
  content: string
  width: number
  placement: Placement
  disabled: boolean
  value: boolean
  offset: number | [number, number]
  transition: string
  visibleArrow: boolean
  arrowOffset: number
  popperOptions: Options
  popperClass: string
  openDelay: number
  closeDelay: number
  tabindex: string
}

const getReference = () => {
  const {
    subTree: { dynamicChildren },
  } = getCurrentInstance()

  return dynamicChildren[0].children
}

const COMPONENT_NAME = 'ElPopover'

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    trigger: {
      type: String as PropType<Trigger>,
      default: 'click',
      validator: (value: string) =>
        ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 15,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: [Number, Array] as PropType<[number, number] | number>,
      default: [0, 12] as [number, number],
      validator: (val: [number, number] | number): boolean => {
        return (isArray(val) && val.length === 2) || typeof val === 'number'
      },
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
    popperOptions: {
      type: Object as PropType<Options>,
      default: {
        boundariesElement: 'body',
        gpuAcceleration: false,
      },
    },
    popperClass: {
      type: String,
      default: '',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 200,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  /** @ts-ignore */
  setup(props: PopoverProps, { slots, emit }) {
    if (!slots.reference) {
      throwError(COMPONENT_NAME, 'Reference must be provided')
    }

    const popperId = `el-popover-${generateId()}`

    const reference = ref<HTMLElement>(null)

    const arrowRef = ref<HTMLElement>(null)

    const { popperRef, instance } = usePopper(reference, {
      offset: props.offset,
      placement: props.placement,
      arrow: {
        element: arrowRef.value,
        offset: props.arrowOffset,
      },
    })

    const showPopper = ref(false)

    const visible = computed(() => !props.disabled && showPopper.value)

    let timeout: NodeJS.Timeout = null

    const FOCUSING_CLASS = 'focusing'

    const show = () => (showPopper.value = true)

    const hide = () => (showPopper.value = false)

    const handleFocus = () => {
      addClass(reference.value, FOCUSING_CLASS)

      if (props.trigger === 'click' || props.trigger === 'focus') show()
    }

    const handleBlur = () => {
      removeClass(reference.value, FOCUSING_CLASS)

      if (props.trigger === 'click' || props.trigger === 'focus') hide()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === eventKeys.esc && props.trigger !== 'manual') hide()
    }

    const handleClick = () => removeClass(reference.value, FOCUSING_CLASS)

    const handleToggle = () => {
      (showPopper.value = !showPopper.value)
    }

    const handleClickSpace = (e: MouseEvent) => {
      if (!reference.value) return
      if (!popperRef.value) return
      if (reference.value.contains(e.target as Node) || popperRef.value.contains(e.target as Node)) return

      hide()
    }

    const handleMouseEnter = () => {
      clearTimeout(timeout)

      if (props.openDelay) {
        timeout = setTimeout(() => {
          show()
        }, props.openDelay)
      } else {
        show()
      }
    }

    const handleMouseLeave = () => {
      clearTimeout(timeout)

      if (props.closeDelay) {
        timeout = setTimeout(() => {
          hide()
        }, props.closeDelay)
      } else {
        hide()
      }
    }

    const bindEvents = () => {
      if (props.trigger !== 'click') {
        on(reference.value, 'focusin', handleFocus)
        on(reference.value, 'focusout', handleBlur)
      }

      on(reference.value, 'keydown', handleKeydown)
      on(reference.value, 'click', handleClick)

      if (props.trigger === 'click') {
        on(reference.value, 'click', handleToggle)
        on(document, 'click', handleClickSpace)
      }

      if (props.trigger === 'hover') {
        on(reference.value, 'mouseenter', handleMouseEnter)
        on(reference.value, 'mouseleave', handleMouseLeave)
      }

      if (props.trigger === 'focus') {
        if (reference.value.querySelector('input, textarea')) {
          on(reference.value, 'focusin', show)
          on(reference.value, 'focusout', hide)
        } else {
          on(reference.value, 'mousedown', show)
          on(reference.value, 'mouseup', hide)
        }
      }
    }

    const unbindEvents = () => {
      off(reference.value, 'focusin', handleFocus)
      off(reference.value, 'focusout', handleBlur)
      off(reference.value, 'focusin', show)
      off(reference.value, 'focusout', hide)
      off(reference.value, 'keydown', handleKeydown)
      off(reference.value, 'click', handleClick)
      off(reference.value, 'mouseenter', handleMouseEnter)
      off(reference.value, 'mouseleave', handleMouseLeave)
      off(reference.value, 'mousedown', show)
      off(reference.value, 'mouseup', hide)
      off(document, 'click', handleClickSpace)
    }

    const init = () => {
      reference.value = getReference()[0].el
      reference.value.setAttribute('aria-describedby', popperId)
      reference.value.setAttribute('tabindex', props.tabindex)
      popperRef.value.setAttribute('tabindex', '0')

      bindEvents()
    }

    const handleAfterEnter = () => emit('after-enter')

    const handleAfterLeave = () => emit('after-leave')

    onMounted(() => {
      init()
    })

    onUnmounted(() => {
      unbindEvents()
    })

    return {
      popperId,
      popperRef,
      visible,
      arrowRef,
      handleAfterEnter,
      handleAfterLeave,
    }
  },
})
</script>

<style scoped>
.el-popper[data-popper-placement^="top"] {
  margin-bottom: 12px;
}

.el-popper[data-popper-placement^="top"] .popper__arrow {
  bottom: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-color: #ebeef5;
  border-bottom-width: 0;
}

.el-popper[data-popper-placement^="top"] .popper__arrow::after {
  bottom: 1px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}

.el-popper[data-popper-placement^="bottom"] {
  margin-top: 12px;
}

.el-popper[data-popper-placement^="bottom"] .popper__arrow {
  top: -6px;
  /* left: 50%; */
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #ebeef5;
}

.el-popper[data-popper-placement^="bottom"] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #fff;
}

.el-popper[data-popper-placement^="right"] {
  margin-left: 12px;
}

.el-popper[data-popper-placement^="right"] .popper__arrow {
  top: 50%;
  left: -6px;
  margin-bottom: 3px;
  border-right-color: #ebeef5;
  border-left-width: 0;
}

.el-popper[data-popper-placement^="right"] .popper__arrow::after {
  bottom: -6px;
  left: 1px;
  border-right-color: #fff;
  border-left-width: 0;
}

.el-popper[data-popper-placement^="left"] {
  margin-right: 12px;
}

.el-popper[data-popper-placement^="left"] .popper__arrow {
  top: 50%;
  right: -6px;
  margin-bottom: 3px;
  border-right-width: 0;
  border-left-color: #ebeef5;
}

.el-popper[data-popper-placement^="left"] .popper__arrow::after {
  right: 1px;
  bottom: -6px;
  margin-left: -6px;
  border-right-width: 0;
  border-left-color: #fff;
}
</style>
