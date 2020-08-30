import { createApp } from 'vue'
import MessageBoxConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import { isVNode } from '../../utils/util'
import { ElMessageBoxOptions } from './message-box'

let currentVm, vm

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
const msgQueue = []

const defaultCallback = () => {
  //
}

const initInstance = options => {
  vm = createApp(MessageBoxConstructor, options)
  vm.callback = defaultCallback
}

const showNextMsg = async () => {
  if (msgQueue.length > 0) {
    currentVm = msgQueue.shift()
    const options = currentVm.options
    if (!vm) {
      initInstance(options)
    }
    vm.action = ''
    for (const prop in options) {
      if (options.hasOwnProperty(prop)) {
        vm[prop] = options[prop]
      }
    }
    if (options.callback === undefined) {
      vm.callback = defaultCallback
    }
    const oldCb = vm.callback
    vm.callback = (action, vm) => {
      oldCb(action, vm)
      showNextMsg()
    }
    if (isVNode(vm.message)) {
      // vm.$slots.default = [vm.message]
      vm.message = null
    } else {
      // delete vm.$slots.default
    }
    ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(prop => {
      if (vm[prop] === undefined) {
        vm[prop] = true
      }
    })
    const container = document.createElement('div')
    vm.mount(container)
    document.body.appendChild(container)
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
        options: Object.assign({}, defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject,
      })

      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: Object.assign({}, defaults, MessageBox.defaults, options),
      callback: callback,
    })

    showNextMsg()
  }
}

MessageBox.setDefaults = defaults => {
  MessageBox.defaults = defaults
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
  // TODO
}

export default MessageBox
