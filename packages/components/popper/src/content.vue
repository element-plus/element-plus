<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    role="tooltip"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  inject,
  provide,
  unref,
  onMounted,
  watch,
  getCurrentInstance,
  nextTick,
} from 'vue'
import { createPopper } from '@popperjs/core'
import { useZIndex, useNamespace } from '@element-plus/hooks'
import { POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY } from './tokens'
import { usePopperContentProps } from './popper'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'
import type { ComponentInternalInstance } from 'vue'

let raiseEl: HTMLDivElement

export default defineComponent({
  name: 'ElPopperContent',
  props: usePopperContentProps,
  emits: ['mouseenter', 'mouseleave'],
  setup(props) {
    const { triggerRef, popperInstanceRef, contentRef } = inject(
      POPPER_INJECTION_KEY,
      undefined
    )!
    const currentInstance = getCurrentInstance()
    const { nextZIndex } = useZIndex()
    const ns = useNamespace('popper')
    const popperContentRef = ref<HTMLElement | null>(null)
    const arrowRef = ref<HTMLElement | null>(null)
    const dialogRef = ref<HTMLDivElement>()
    const arrowOffset = ref<number>()

    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset,
    })
    const contentZIndex = ref(props.zIndex || nextZIndex())

    const contentStyle = computed(
      () => [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
    )

    const contentClass = computed(() => [
      ns.b(),
      ns.is('pure', props.pure),
      ns.is(props.effect),
      props.popperClass,
    ])

    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl,
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset),
      })

      return createPopper(referenceEl, popperContentEl, options)
    }

    const getDialogRef = (parent?: ComponentInternalInstance['parent']) => {
      if (parent?.type?.name === 'ElDialog') {
        return parent.proxy?.$refs?.['dialogRef']
      }
      if (parent?.parent) {
        return getDialogRef(parent.parent)
      }
    }

    const updatePopper = () => {
      unref(popperInstanceRef)?.update()
      contentZIndex.value = props.zIndex || nextZIndex()
      if (!dialogRef.value) return
      nextTick(() => {
        const popperOverflowHeight =
          unref(popperContentRef)!.offsetHeight - window.innerHeight
        const dialogEl = dialogRef.value
        if (popperOverflowHeight > 0 && dialogEl) {
          raiseEl ??= document.createElement('div')
          raiseEl.style.height = `${popperOverflowHeight + 80}px`
          dialogEl.parentNode?.appendChild(raiseEl)
        }
      })
    }

    const togglePopoerAlive = () => {
      const monitorable = { name: 'eventListeners', enabled: props.visible }
      unref(popperInstanceRef)?.setOptions((options) => ({
        ...options,
        modifiers: [...options.modifiers, monitorable],
      }))
    }

    onMounted(() => {
      let updateHandle: ReturnType<typeof watch>
      dialogRef.value = getDialogRef(currentInstance?.parent)

      watch(
        () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef),
        (val) => {
          updateHandle?.()
          if (val) {
            popperInstanceRef.value?.destroy()
            const popperContentEl = unref(popperContentRef)!
            contentRef.value = popperContentEl
            const arrowEl = unref(arrowRef)

            const newInstance = createPopperInstance({
              referenceEl: val,
              popperContentEl: unref(popperContentRef)!,
              arrowEl,
            })
            popperInstanceRef.value = newInstance

            updateHandle = watch(
              () => val!.getBoundingClientRect(),
              () => {
                updatePopper()
              },
              {
                immediate: true,
              }
            )
          } else {
            popperInstanceRef.value = null
          }
        },
        {
          immediate: true,
        }
      )

      watch(() => props.visible, togglePopoerAlive, { immediate: true })

      watch(
        () =>
          buildPopperOptions(props, {
            arrowEl: unref(arrowRef),
            arrowOffset: unref(arrowOffset),
          }),
        (option) => popperInstanceRef.value?.setOptions(option)
      )

      watch(
        () => props.open,
        (open) => {
          !open && raiseEl?.remove()
        }
      )
    })

    return {
      ns,
      popperContentRef,
      popperInstanceRef,
      contentStyle,
      contentClass,
      updatePopper,
    }
  },
})
</script>
