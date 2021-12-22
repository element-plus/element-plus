import { computed, ref, watch, nextTick, onMounted } from 'vue'
import { useTimeoutFn, isClient, useEventListener } from '@vueuse/core'

import { useLockscreen, useRestoreActive, useModal } from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import PopupManager from '@element-plus/utils/popup-manager'
import { isNumber, rafThrottle } from '@element-plus/utils/util'

import type { CSSProperties, Ref, SetupContext } from 'vue'
import type { DialogEmits, DialogProps } from './dialog'

export const useDialog = (
  props: DialogProps,
  { emit }: SetupContext<DialogEmits>,
  targetRef: Ref<HTMLElement | undefined>,
  wrapper: Ref<HTMLDivElement | undefined>
) => {
  const visible = ref(false)
  const closed = ref(false)
  const rendered = ref(false) // when desctroyOnClose is true, we initialize it as false vise versa
  const zIndex = ref(props.zIndex || PopupManager.nextZIndex())

  let openTimer: (() => void) | undefined = undefined
  let closeTimer: (() => void) | undefined = undefined

  const normalizeWidth = computed(() =>
    isNumber(props.width) ? `${props.width}px` : props.width
  )
  const transform = ref({
    offsetX: 0,
    offsetY: 0,
  })
  function handleMouseDown(e: MouseEvent) {
    if (
      !e.target.classList.contains('el-dialog__header') &&
      !e.target.classList.contains('el-dialog__body') &&
      !e.target.classList.contains('el-dialog__footer')
    ) {
      return
    }
    if (props.fullscreen || !props.draggable) return
    if (e.button !== 0 || !wrapper.value) return
    const { offsetX, offsetY } = transform.value
    const startX = e.clientX
    const startY = e.clientY

    const divLeft = wrapper.value.clientLeft
    const divRight = wrapper.value.clientLeft + wrapper.value.clientWidth
    const divTop = wrapper.value.clientTop
    const divBottom = wrapper.value.clientTop + wrapper.value.clientHeight

    const dragHandler = rafThrottle((ev: MouseEvent) => {
      transform.value = {
        offsetX: offsetX + ev.clientX - startX,
        offsetY: offsetY + ev.clientY - startY,
      }
    })
    const removeMousemove = useEventListener(document, 'mousemove', dragHandler)
    useEventListener(document, 'mouseup', (evt) => {
      if (props.resettable) {
        const mouseX = evt.clientX
        const mouseY = evt.clientY
        if (
          mouseX < divLeft ||
          mouseX > divRight ||
          mouseY < divTop ||
          mouseY > divBottom
        ) {
          reset()
        }
      }
      removeMousemove()
    })

    e.preventDefault()
  }

  function reset() {
    transform.value = {
      offsetX: 0,
      offsetY: 0,
    }
  }

  const style = computed<CSSProperties>(() => {
    let style: CSSProperties = {}
    if (wrapper && props.draggable) {
      style = {
        left: `${transform.value.offsetX}px`,
        top: `${transform.value.offsetY}px`,
      }
    }
    const varPrefix = `--el-dialog`
    if (!props.fullscreen) {
      if (props.top) {
        style[`${varPrefix}-margin-top`] = props.top
      }
      if (props.width) {
        style[`${varPrefix}-width`] = normalizeWidth.value
      }
    }
    return style
  })

  function afterEnter() {
    emit('opened')
  }

  function afterLeave() {
    emit('closed')
    emit(UPDATE_MODEL_EVENT, false)
    if (props.destroyOnClose) {
      rendered.value = false
    }
  }

  function beforeLeave() {
    emit('close')
  }

  function open() {
    closeTimer?.()
    openTimer?.()

    if (props.openDelay && props.openDelay > 0) {
      ;({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay))
    } else {
      doOpen()
    }
  }

  function close() {
    // if (this.willClose && !this.willClose()) return;
    openTimer?.()
    closeTimer?.()

    if (props.closeDelay && props.closeDelay > 0) {
      ;({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay))
    } else {
      doClose()
    }
  }

  function hide(shouldCancel: boolean) {
    if (shouldCancel) return
    closed.value = true
    visible.value = false
  }

  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      close()
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose()
    }
  }

  function doOpen() {
    if (!isClient) {
      return
    }

    // if (props.willOpen?.()) {
    //  return
    // }
    visible.value = true
  }

  function doClose() {
    visible.value = false
  }

  if (props.lockScroll) {
    useLockscreen(visible)
  }

  if (props.closeOnPressEscape) {
    useModal(
      {
        handleClose,
      },
      visible
    )
  }

  useRestoreActive(visible)

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false
        open()
        rendered.value = true // enables lazy rendering
        emit('open')
        zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex()
        // this.$el.addEventListener('scroll', this.updatePopper)
        nextTick(() => {
          if (targetRef.value) {
            targetRef.value.scrollTop = 0
          }
          if (wrapper) {
            transform.value = {
              offsetX: 0,
              offsetY: 0,
            }
          }
        })
      } else {
        // this.$el.removeEventListener('scroll', this.updatePopper
        if (visible.value) {
          close()
        }
      }
    }
  )

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      rendered.value = true // enables lazy rendering
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    handleMouseDown,
    closed,
    style,
    rendered,
    visible,
    zIndex,
  }
}
