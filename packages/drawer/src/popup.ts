import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'
import {
  reactive,
  watch,
  nextTick,
  ComponentPublicInstance,
  onBeforeUnmount,
  onBeforeMount,
  onMounted,
} from 'vue'
import {
  getStyle,
  addClass,
  removeClass,
  hasClass,
} from '@element-plus/utils/dom'
import { merge } from 'lodash'
import getScrollBarWidth from '@element-plus/utils/scrollbar-width'
import { IDrawerWithPopupOption, IDrawerPopupOption } from './drawer'

let idSeed = 1
let scrollBarWidth: number

// XXX this may be replaced with other usePopup as Dialog?
const usePopup = ({ props, $el, vVm }: IDrawerPopupOption) => {
  let _popupId: string
  let _opening = false
  let _closing = false
  // let _closeTimer = null // XXX These code will be removed ？
  // let _openTimer = null

  const drawerState = reactive({
    opened: false,
    bodyPaddingRight: null,
    computedBodyPaddingRight: 0,
    withoutHiddenClass: true,
    rendered: false,
  })

  function open(options: Partial<IDrawerWithPopupOption> = {}) {
    if (!drawerState.rendered) {
      drawerState.rendered = true
    }

    const propsNew = merge({}, props, options)
    // XXX These code will be removed ？
    // const props = merge({}, this.$props || this, options);

    // if (_closeTimer) {
    //   clearTimeout(_closeTimer);
    //   _closeTimer = null;
    // }
    // clearTimeout(_openTimer);

    // const openDelay = Number(propsNew.openDelay);
    // if (openDelay > 0) {
    //   _openTimer = setTimeout(() => {
    //     _openTimer = null;
    //     doOpen(propsNew);
    //   }, openDelay);
    // } else {
    doOpen(propsNew)
    // }
  }

  function doOpen(props: IDrawerWithPopupOption) {
    if (isServer) return
    // if (props.willOpen && !props.willOpen()) return
    if (drawerState.opened) return

    _opening = true
    const dom = $el.value
    const modal = props.modal
    const zIndex = props.zIndex
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
        props.modalClass || '',
        props.modalFade || false,
      )
      if (props.lockScroll) {
        drawerState.withoutHiddenClass = !hasClass(
          document.body,
          'el-popup-parent--hidden',
        )
        if (drawerState.withoutHiddenClass) {
          drawerState.bodyPaddingRight = document.body.style.paddingRight
          drawerState.computedBodyPaddingRight = parseInt(
            getStyle(document.body, 'paddingRight'),
            10,
          )
        }
        scrollBarWidth = getScrollBarWidth()
        const bodyHasOverflow =
          document.documentElement.clientHeight < document.body.scrollHeight
        const bodyOverflowY = getStyle(document.body, 'overflowY')
        if (
          scrollBarWidth > 0 &&
          (bodyHasOverflow || bodyOverflowY === 'scroll') &&
          drawerState.withoutHiddenClass
        ) {
          document.body.style.paddingRight =
          drawerState.computedBodyPaddingRight + scrollBarWidth + 'px'
        }
        addClass(document.body, 'el-popup-parent--hidden')
      }
    }

    if (getComputedStyle(dom).position === 'static') {
      dom.style.position = 'absolute'
    }

    dom.style.zIndex = String(PopupManager.nextZIndex())
    drawerState.opened = true

    // XXX These code will be removed ？
    // props.onOpen && onOpen();

    doAfterOpen()
  }

  function doAfterOpen() {
    _opening = false
  }

  function close() {
    // XXX These code will be removed ？
    // if (props.willClose && !props.willClose()) return;

    // if (_openTimer !== null) {
    //   clearTimeout(_openTimer);
    //   _openTimer = null;
    // }
    // clearTimeout(_closeTimer);

    // const closeDelay = Number(this.closeDelay);

    // if (closeDelay > 0) {
    //   _closeTimer = setTimeout(() => {
    //     _closeTimer = null;
    //     this.doClose();
    //   }, closeDelay);
    // } else {
    doClose()
    // }
  }

  function doClose() {
    _closing = true

    // XXX These code will be removed ？
    // this.onClose && this.onClose();

    if (props.lockScroll) {
      setTimeout(restoreBodyStyle, 200)
    }

    drawerState.opened = false

    doAfterClose()
  }

  function doAfterClose() {
    PopupManager.closeModal(_popupId)
    _closing = false
  }

  function restoreBodyStyle() {
    if (props.modal && drawerState.withoutHiddenClass) {
      document.body.style.paddingRight = drawerState.bodyPaddingRight
      removeClass(document.body, 'el-popup-parent--hidden')
    }
    drawerState.withoutHiddenClass = true
  }

  onMounted(() => {
    if (props.modelValue) {
      drawerState.rendered = true
      open()
    }
  })

  onBeforeMount(() => {
    _popupId = 'popup-' + idSeed++
    PopupManager.register(_popupId, {
      ...vVm,
      close,
    } as ComponentPublicInstance<any>)
  })

  onBeforeUnmount(() => {
    PopupManager.deregister(_popupId)
    PopupManager.closeModal(_popupId)
    restoreBodyStyle()
  })

  watch(
    () => props.modelValue,
    val => {
      if (val) {
        if (_opening) return
        if (!drawerState.rendered) {
          drawerState.rendered = true
          nextTick(() => {
            open()
          })
        } else {
          open()
        }
      } else {
        close()
      }
    },
  )
  return { popupData: drawerState, open }
}

export default usePopup
