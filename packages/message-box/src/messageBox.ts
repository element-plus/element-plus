import { createVNode, nextTick, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import { isVNode } from '../../utils/util'
import { ElMessageBoxOptions } from './message-box'

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

const initInstance = () => {
  const container = document.createElement('div')
  instance = createVNode(MessageBoxConstructor)
  render(instance, container)
}

const showNextMsg = async () => {
  if (!instance) {
    initInstance()
  }
  if (instance.component && instance.component.proxy.visible) { return }
  if (msgQueue.length > 0) {
    const props = {}
    const state = {}
    currentMsg = msgQueue.shift()
    const options = currentMsg.options
    Object.keys(options).forEach(key => {
      if (PROP_KEYS.includes(key)) {
        props[key] = options[key]
      } else {
        state[key] = options[key]
      }
    })
    // TODO update props to instance/**/
    // instance.props = Object.assign({}, props)
    // instance.children = isVNode(options.message) ? { default: () => options.message } : null
    // render(instance, container)
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

MessageBox.alert = (message, title, options) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(Object.assign({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false,
  }, options))
}

MessageBox.confirm = (message, title, options) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(Object.assign({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true,
  }, options))
}

MessageBox.prompt = (message, title, options) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(Object.assign({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt',
  }, options))
}

MessageBox.close = () => {
  instance.doClose()
  instance.visible = false
  msgQueue = []
  currentMsg = null
}

export default MessageBox
export { MessageBox }
