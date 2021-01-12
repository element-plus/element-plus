import { h, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import { isVNode, isString } from '@element-plus/utils/util'

import type { ComponentPublicInstance } from 'vue'
import type { ElMessageBoxOptions, Action } from './message-box.type'

let currentMsg

// component default merge props & data
const defaults = {
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
}
let msgQueue = []

const defaultCallback = (action: Action, ctx) => {
  if (currentMsg) {
    const callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (ctx.showInput) {
        callback(ctx.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (ctx.showInput) {
          currentMsg.resolve({ value: ctx.inputValue, action })
        } else {
          currentMsg.resolve(action)
        }
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action)
      }
    }
  }
}

const initInstance = (props: any, container: HTMLElement) => {
  
  const vnode = h(MessageBoxConstructor, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild)
  return vnode.component
}

const genContainer = () => {
  return document.createElement('div')
}

const showNextMsg = async () => {
  if (msgQueue.length > 0) {

    currentMsg = msgQueue.shift()
    const options = currentMsg.options

    const container = genContainer()
    // Adding destruct method.
    // when transition leaves emitting `vanish` evt. so that we can do the clean job.
    options.onVanish = () => {
      // not sure if this causes mem leak, need proof to verify that.
      // maybe calling out like 1000 msg-box then close them all.
      render(null, container)
      // here we were suppose to call document.body.removeChild(container.firstElementChild)
      // but render(null, container) did that job for us. so that we do not call that directly       
    }

    options.onAction = (action: Action) => {
      if (options.callback) {
        options.callback(action, instance.proxy)
      } else {
        if (action === 'cancel' || action === 'close') {
          currentMsg.reject()
        } else {

        }
        if (options.distinguishCloseAndCancel && action !== 'cancel') {

        }
      }
      showNextMsg()
    }
  
    const instance = initInstance(options, container)

    // This is how we use message box programmably.
    // Maybe consider releasing a template version?
    const vm = instance.proxy as ComponentPublicInstance<{ visible: boolean }>

    if (isVNode(options.message)) {
      // Override slots since message is vnode type.
      instance.slots.default = () => [options.message]
    }

    vm.visible = true
  }
}

const MessageBox = function(options: ElMessageBoxOptions | string, callback?: Function): Promise<any> {
  if (isServer) return
  if (isString(options) || isVNode(options)) {
    options = {
      message: options,
    }
    if (typeof callback === 'string') {
      options.title = callback
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  return new Promise((resolve, reject) => {
    msgQueue.push({
      options: Object.assign({}, defaults, options),
      callback: callback,
      resolve: resolve,
      reject: reject,
    })
    showNextMsg()
  })
}

MessageBox.alert = (message: string, title: string, options?: ElMessageBoxOptions) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }

  return MessageBox(Object.assign({
    title: title,
    message: message,
    type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false,
  }, options))
}

MessageBox.confirm = (message: string, title: string, options?: ElMessageBoxOptions) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(Object.assign({
    title: title,
    message: message,
    type: 'confirm',
    showCancelButton: true,
  }, options))
}

MessageBox.prompt = (message: string, title: string, options?: ElMessageBoxOptions) => {
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
    type: 'prompt',
  }, options))
}

MessageBox.close = () => {
  // instance.setupInstall.doClose()
  // instance.setupInstall.state.visible = false
  msgQueue = []
  currentMsg = null
}

export default MessageBox
