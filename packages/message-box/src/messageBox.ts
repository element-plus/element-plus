import { h, render } from 'vue'
import MessageBoxConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import { isVNode, isString } from '@element-plus/utils/util'

import type { ComponentPublicInstance } from 'vue'
import type { ElMessageBoxOptions, Action, Callback } from './message-box.type'

// component default merge props & data

let messageInstance = new Map<
  ComponentPublicInstance<{ doClose: () => void }>, // marking doClose as function
  {
    options: any
    callback: Callback
    resolve: (res: any) => void
    reject: (reason?: any) => void
  }
>()


const initInstance = (props: any, container: HTMLElement) => {
  const vnode = h(MessageBoxConstructor, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild)
  return vnode.component
}

const genContainer = () => {
  return document.createElement('div')
}

const showMessage = (options: any) => {
  const container = genContainer()
  // Adding destruct method.
  // when transition leaves emitting `vanish` evt. so that we can do the clean job.
  options.onVanish = () => {
    // not sure if this causes mem leak, need proof to verify that.
    // maybe calling out like 1000 msg-box then close them all.
    render(null, container)
    messageInstance.delete(vm) // Remove vm to avoid mem leak.
    // here we were suppose to call document.body.removeChild(container.firstElementChild)
    // but render(null, container) did that job for us. so that we do not call that directly
  }

  options.onAction = (action: Action) => {
    
    const currentMsg = messageInstance.get(vm)
    let resolve: Action | { value: string; action: Action }
    if (options.showInput) {
      resolve = { value: vm.s.inputValue, action }
    } else {
      resolve = action
    }
    if (options.callback) {
      options.callback(resolve, instance.proxy)
    } else {
      if (action === 'cancel' || action === 'close') {
        if (options.distinguishCancelAndClose && action !== 'cancel') {
          currentMsg.reject('close')
        } else {
          currentMsg.reject('cancel')
        }
      } else {
        currentMsg.resolve(resolve)
      }
    }
  }

  const instance = initInstance(options, container)

  // This is how we use message box programmably.
  // Maybe consider releasing a template version?
  // get component instance like v2.
  const vm = instance.proxy as ComponentPublicInstance<{
    visible: boolean
    s: {
      inputValue: string
    },
    doClose: () => void,
  }>

  if (isVNode(options.message)) {
    // Override slots since message is vnode type.
    instance.slots.default = () => [options.message]
  }
  // change visibility after everything is settled
  vm.visible = true
  return vm
}

const MessageBox = async function(
  options: ElMessageBoxOptions | string,
  callback?: Callback,
): Promise<void> {
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
    const vm = showMessage(options)
    // collect this vm in order to handle upcoming events.
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject,
    })
  })
}

MessageBox.alert = (
  message: string,
  title: string,
  options?: ElMessageBoxOptions,
) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }

  return MessageBox(
    Object.assign(
      {
        title: title,
        message: message,
        type: 'alert',
        closeOnPressEscape: false,
        closeOnClickModal: false,
      },
      options,
    ),
  )
}

MessageBox.confirm = (
  message: string,
  title: string,
  options?: ElMessageBoxOptions,
) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(
    Object.assign(
      {
        title: title,
        message: message,
        type: 'confirm',
        showCancelButton: true,
      },
      options,
    ),
  )
}

MessageBox.prompt = (
  message: string,
  title: string,
  options?: ElMessageBoxOptions,
) => {
  if (typeof title === 'object') {
    options = title
    title = ''
  } else if (title === undefined) {
    title = ''
  }
  return MessageBox(
    Object.assign(
      {
        title: title,
        message: message,
        showCancelButton: true,
        showInput: true,
        type: 'prompt',
      },
      options,
    ),
  )
}

MessageBox.close = () => {
  // instance.setupInstall.doClose()
  // instance.setupInstall.state.visible = false
  messageInstance.forEach((_, vm) => {
    vm.doClose()
  })
}

export default MessageBox
