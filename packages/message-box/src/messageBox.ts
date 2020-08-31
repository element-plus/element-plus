import { createVNode, nextTick, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import { isVNode } from '../../utils/util'
import { ElMessageBoxOptions } from './message-box'
import fa from '../../locale/lang/fa'
import ca from '../../locale/lang/ca'

let currentMsg, instance

// component default props
const PROP_KEYS = [
  'modal',
  'lockScroll',
  'showClose',
  'closeOnClickModal',
  'closeOnPressEscape',
  'closeOnHashChange',
  'center',
  'roundButton',
]

// component default merge props & data
const defaults = {
  title: null,
  message: '',
  type: '',
  iconClass: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false,
  distinguishCancelAndClose: false,
}

let msgQueue = []

const defaultCallback = action => {
  if (currentMsg) {
    const callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.showInput) {
          currentMsg.resolve({ value: instance.inputValue, action })
        } else {
          currentMsg.resolve(action)
        }
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action)
      }
    }
  }
}

const showNextMsg = async () => {
  if (msgQueue.length > 0) {
    if (!!instance && instance.component.proxy.visible) { return }
    let options
    const props = {}
    const state = {}
    if (!instance) {
      currentMsg = msgQueue.shift()
      options = currentMsg.options
      Object.keys(options).forEach(key => {
        if (PROP_KEYS.includes(key)) {
          props[key] = options[key]
        } else {
          state[key] = options[key]
        }
      })
      instance = createVNode(
        MessageBoxConstructor,
        props,
        isVNode(options.message)
          ? {
            default: () => options.message,
          }
          : null,
      )
      console.log(instance)
    }
    const container = document.createElement('div')
    render(instance, container)
    const vmProxy = instance.component.proxy
    vmProxy.action = ''
    if (options.callback === undefined) {
      options.callback = defaultCallback
    }
    for (const prop in state) {
      if (state.hasOwnProperty(prop)) {
        vmProxy[prop] = state[prop]
      }
    }
    const oldCb = options.callback
    vmProxy.callback = (action, inst) => {
      oldCb(action, inst)
      showNextMsg()
    }
    document.body.appendChild(instance.component.ctx.$el)
    await nextTick(() => {
      vmProxy.visible = true
    })
  }
}

const MessageBox = function(options: ElMessageBoxOptions, callback?): void | Promise<any> {
  if (isServer) return
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options,
    }
    if (typeof callback === 'string') {
      options.title = callback
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: Object.assign({}, defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject,
      })

      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: Object.assign({}, defaults, options),
      callback: callback,
    })

    showNextMsg()
  }
}

MessageBox.alert = () => {
  // TODO
}

MessageBox.confirm = () => {
  // TODO
}

MessageBox.prompt = () => {
  // TODO
}

MessageBox.close = () => {
  instance.doClose()
  instance.visible = false
  msgQueue = []
  currentMsg = null
}

export default MessageBox
export { MessageBox }
