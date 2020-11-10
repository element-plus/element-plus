import {
  nextTick,
  reactive,
  onBeforeMount,
  onBeforeUnmount,
  getCurrentInstance,
  watch,
  toRefs,
} from 'vue'
import PopupManager from '../popup-manager'
import getScrollBarWidth from '../scrollbar-width'
import { getStyle, addClass, removeClass, hasClass } from '../dom'
import isServer from '../isServer'

interface Props {
  openDelay: number
  closeDelay: number
  closeOnClickModal: boolean
  closeOnPressEscape: boolean
  lockScroll: boolean
  modal: boolean
  modalAppendToBody: boolean
  modalClass?: string
  modalFade: boolean
  zIndex?: number
}

let idSeed = 1

let scrollBarWidth

const usePopup = (props: Readonly<Props>, doClose: () => void, rootRef = 'root') => {
  let _popupId
  let _opening = false
  let _closing = false
  let _closeTimer = null
  let _openTimer = null
  const vm = getCurrentInstance()
  const state = reactive({
    opened: false,
    bodyPaddingRight: null,
    computedBodyPaddingRight: 0,
    withoutHiddenClass: true,
    rendered: false,
    visible: false,
  })

  onBeforeMount(() => {
    const { handleClose, handleAction } = vm.proxy as any
    _popupId = 'popup-' + idSeed++
    PopupManager.register(_popupId, {
      ...toRefs(props),
      close,
      handleClose,
      handleAction,
    })
  })

  onBeforeUnmount(() => {
    PopupManager.deregister(_popupId)
    PopupManager.closeModal(_popupId)
    restoreBodyStyle()
  })

  const doOpen = merProps => {
    if (isServer) return
    if (state.opened) return

    _opening = true

    // `vm.vnode.el` will be a comment node when using `Teleport`
    const dom = vm.refs[rootRef] as HTMLElement

    const modal = merProps.modal

    const zIndex = merProps.zIndex
    if (zIndex) {
      PopupManager.zIndex = zIndex
    }

    if (modal) {
      if (_closing) {
        PopupManager.closeModal(_popupId)
        _closing = false
      }
      PopupManager.openModal(
        _popupId,
        PopupManager.nextZIndex(),
        props.modalAppendToBody ? undefined : dom,
        merProps.modalClass,
        merProps.modalFade,
      )

      if (merProps.lockScroll) {
        state.withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden')
        if (state.withoutHiddenClass) {
          state.bodyPaddingRight = document.body.style.paddingRight
          state.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
        }
        scrollBarWidth = getScrollBarWidth()
        const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
        const bodyOverflowY = getStyle(document.body, 'overflowY')
        if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && state.withoutHiddenClass) {
          document.body.style.paddingRight = state.computedBodyPaddingRight + scrollBarWidth + 'px'
        }
        addClass(document.body, 'el-popup-parent--hidden')
      }
    }

    if (getComputedStyle(dom).position === 'static') {
      dom.style.position = 'absolute'
    }

    dom.style.zIndex = String(PopupManager.nextZIndex())
    state.opened = true

    doAfterOpen()
  }

  const open = function (options?) {
    if (!state.rendered) {
      state.rendered = true
    }
    const _props = Object.assign({}, props || vm.proxy, options)

    if (_closeTimer) {
      clearTimeout(_closeTimer)
      _closeTimer = null
    }
    clearTimeout(_openTimer)

    const openDelay = Number(_props.openDelay)
    if (openDelay > 0) {
      _openTimer = setTimeout(() => {
        _openTimer = null
        doOpen(_props)
      }, openDelay)
    } else {
      doOpen(_props)
    }
  }

  const close = () => {
    if (_openTimer !== null) {
      clearTimeout(_openTimer)
      _openTimer = null
    }
    clearTimeout(_closeTimer)

    const closeDelay = Number(props.closeDelay)

    if (closeDelay > 0) {
      _closeTimer = setTimeout(() => {
        _closeTimer = null
        doClose()
      }, closeDelay)
    } else {
      doClose()
    }
  }

  const doAfterOpen = () => {
    _opening = false
  }

  const restoreBodyStyle = () => {
    if (props.modal && state.withoutHiddenClass) {
      document.body.style.paddingRight = state.bodyPaddingRight
      removeClass(document.body, 'el-popup-parent--hidden')
    }
    state.withoutHiddenClass = true
  }

  const doAfterClose = () => {
    PopupManager.closeModal(_popupId)
    _closing = false
  }

  const updateClosingFlag = value => {
    _closing = value
  }

  watch(() => state.visible, async val => {
    if (val) {
      if (_opening) return
      if (!state.rendered) {
        state.rendered = true
        await nextTick()
        open()
      } else {
        open()
      }
    } else {
      close()
    }
  })

  return {
    state,
    open,
    close,
    doAfterClose,
    updateClosingFlag,
    restoreBodyStyle,
  }
}

export default usePopup
