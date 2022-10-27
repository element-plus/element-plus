<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <el-focus-trap
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="popperContentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot />
    </el-focus-trap>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import { isNil } from 'lodash-unified'
import { createPopper } from '@popperjs/core'
import ElFocusTrap from '@element-plus/components/focus-trap'
import { useNamespace, useZIndex } from '@element-plus/hooks'
import {
  POPPER_CONTENT_INJECTION_KEY,
  POPPER_INJECTION_KEY,
  formItemContextKey,
} from '@element-plus/tokens'
import { isElement } from '@element-plus/utils'
import { popperContentEmits, popperContentProps } from './content'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'

import type { WatchStopHandle } from 'vue'
import type { CreatePopperInstanceParams } from './content'

defineOptions({
  name: 'ElPopperContent',
})

const emit = defineEmits(popperContentEmits)

const props = defineProps(popperContentProps)

const { popperInstanceRef, contentRef, triggerRef, role } = inject(
  POPPER_INJECTION_KEY,
  undefined
)!
const formItemContext = inject(formItemContextKey, undefined)
const { nextZIndex } = useZIndex()
const ns = useNamespace('popper')
const popperContentRef = ref<HTMLElement>()
const focusStartRef = ref<'container' | 'first' | HTMLElement>('first')
const arrowRef = ref<HTMLElement>()
const arrowOffset = ref<number>()
provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowRef,
  arrowOffset,
})

if (
  formItemContext &&
  (formItemContext.addInputId || formItemContext.removeInputId)
) {
  // disallow auto-id from inside popper content
  provide(formItemContextKey, {
    ...formItemContext,
    addInputId: NOOP,
    removeInputId: NOOP,
  })
}

const contentZIndex = ref<number>(props.zIndex || nextZIndex())
const trapped = ref<boolean>(false)

let triggerTargetAriaStopWatch: WatchStopHandle | undefined = undefined

const computedReference = computed(
  () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef)
)

const contentStyle = computed(
  () => [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
)

const contentClass = computed(() => [
  ns.b(),
  ns.is('pure', props.pure),
  ns.is(props.effect),
  props.popperClass,
])

const ariaModal = computed<string | undefined>(() => {
  return role && role.value === 'dialog' ? 'false' : undefined
})

const createPopperInstance = ({
  referenceEl,
  popperContentEl,
  arrowEl,
}: CreatePopperInstanceParams) => {
  const options = buildPopperOptions(props, {
    arrowEl,
    arrowOffset: unref(arrowOffset),
  })

  return createPopper(referenceEl, popperContentEl, options)
}

const updatePopper = (shouldUpdateZIndex = true) => {
  unref(popperInstanceRef)?.update()
  shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex())
}

const togglePopperAlive = () => {
  const monitorable = { name: 'eventListeners', enabled: props.visible }
  unref(popperInstanceRef)?.setOptions?.((options) => ({
    ...options,
    modifiers: [...(options.modifiers || []), monitorable],
  }))
  updatePopper(false)
  if (props.visible && props.focusOnShow) {
    trapped.value = true
  } else if (props.visible === false) {
    trapped.value = false
  }
}

const onFocusAfterTrapped = () => {
  emit('focus')
}

const onFocusAfterReleased = (event: CustomEvent) => {
  if (event.detail?.focusReason !== 'pointer') {
    focusStartRef.value = 'first'
    emit('blur')
  }
}

const onFocusInTrap = (event: FocusEvent) => {
  if (props.visible && !trapped.value) {
    if (event.target) {
      focusStartRef.value = event.target as typeof focusStartRef.value
    }
    trapped.value = true
  }
}

const onFocusoutPrevented = (event: CustomEvent) => {
  if (!props.trapping) {
    if (event.detail.focusReason === 'pointer') {
      event.preventDefault()
    }
    trapped.value = false
  }
}

const onReleaseRequested = () => {
  trapped.value = false
  emit('close')
}

onMounted(() => {
  let updateHandle: WatchStopHandle
  watch(
    computedReference,
    (referenceEl) => {
      updateHandle?.()
      const popperInstance = unref(popperInstanceRef)
      popperInstance?.destroy?.()
      if (referenceEl) {
        const popperContentEl = unref(popperContentRef)!
        contentRef.value = popperContentEl

        popperInstanceRef.value = createPopperInstance({
          referenceEl,
          popperContentEl,
          arrowEl: unref(arrowRef),
        })

        updateHandle = watch(
          () => referenceEl.getBoundingClientRect(),
          () => updatePopper(),
          {
            immediate: true,
          }
        )
      } else {
        popperInstanceRef.value = undefined
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    () => props.triggerTargetEl,
    (triggerTargetEl, prevTriggerTargetEl) => {
      triggerTargetAriaStopWatch?.()
      triggerTargetAriaStopWatch = undefined

      const el = unref(triggerTargetEl || popperContentRef.value)
      const prevEl = unref(prevTriggerTargetEl || popperContentRef.value)

      if (isElement(el)) {
        triggerTargetAriaStopWatch = watch(
          [role, () => props.ariaLabel, ariaModal, () => props.id],
          (watches) => {
            ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!)
            })
          },
          { immediate: true }
        )
      }
      if (prevEl !== el && isElement(prevEl)) {
        ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key) => {
          prevEl.removeAttribute(key)
        })
      }
    },
    { immediate: true }
  )

  watch(() => props.visible, togglePopperAlive, { immediate: true })

  watch(
    () =>
      buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset),
      }),
    (option) => popperInstanceRef.value?.setOptions(option)
  )
})

onBeforeUnmount(() => {
  triggerTargetAriaStopWatch?.()
  triggerTargetAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description popper content element
   */
  popperContentRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description method for updating popper
   */
  updatePopper,

  /**
   * @description content style
   */
  contentStyle,
})
</script>
