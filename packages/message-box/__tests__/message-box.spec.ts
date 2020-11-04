import MessageBox from '../src/messageBox'
import { sleep } from '@element-plus/test-utils'
import { nextTick } from 'vue'

const selector = '.el-message-box__wrapper'

describe('MessageBox', () => {

  afterEach(() => {
    const el = document.querySelector('.el-message-box__wrapper')
    if (!el) return
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
    MessageBox.close()
  })

  test('create and close', async () => {
    MessageBox({
      type: 'success',
      title: '消息',
      message: '这是一段内容',
    })
    const msgbox: HTMLElement = document.querySelector(selector)
    expect(msgbox).toBeDefined()
    await sleep()
    expect(msgbox.querySelector('.el-message-box__title span').textContent).toEqual('消息')
    expect(msgbox.querySelector('.el-message-box__message').querySelector('p').textContent).toEqual('这是一段内容')
    MessageBox.close()
    await sleep(250)
    expect(msgbox.style.display).toEqual('none')
  })

  test('invoke with strings', () => {
    MessageBox('消息', '这是一段内容')
    const msgbox = document.querySelector(selector)
    expect(msgbox).toBeDefined()
  })

  test('custom icon', async () => {
    MessageBox({
      type: 'warning',
      iconClass: 'el-icon-question',
      message: '这是一段内容',
    })
    await sleep()
    const icon = document.querySelector('.el-message-box__status')
    expect(icon.classList.contains('el-icon-question')).toBe(true)
  })

  test('html string', async () => {
    MessageBox({
      title: 'html string',
      dangerouslyUseHTMLString: true,
      message: '<strong>html string</strong>',
    })
    await sleep()
    const message = document.querySelector('.el-message-box__message strong')
    expect(message.textContent).toEqual('html string')
  })

  test('distinguish cancel and close', async () => {
    let msgAction = ''
    MessageBox({
      title: '消息',
      message: '这是一段内容',
      distinguishCancelAndClose: true,
      callback:  action => {
        msgAction = action
      },
    })
    await sleep()
    const btn = document.querySelector('.el-message-box__close') as HTMLButtonElement
    btn.click()
    await sleep()
    expect(msgAction).toEqual('close')
  })

  test('alert', async () => {
    MessageBox.alert('这是一段内容', {
      title: '标题名称',
      type: 'warning',
    })
    await sleep()
    const vModal: HTMLElement = document.querySelector('.v-modal')
    vModal.click()
    await sleep(250)
    const msgbox: HTMLElement = document.querySelector(selector)
    expect(msgbox.style.display).toEqual('')
    expect(msgbox.querySelector('.el-icon-warning')).toBeDefined()
  })

  test('confirm',  async () => {
    MessageBox.confirm('这是一段内容', {
      title: '标题名称',
      type: 'warning',
    })
    await sleep()
    const btn = document.querySelector(selector).querySelector('.el-button--primary') as HTMLButtonElement
    btn.click()
    await sleep(250)
    const msgbox: HTMLElement = document.querySelector(selector)
    expect(msgbox.style.display).toEqual('none')
  })

  test('prompt', async () => {
    MessageBox.prompt('这是一段内容', {
      title: '标题名称',
      inputPattern: /test/,
      inputErrorMessage: 'validation failed',
    })
    await sleep(0)
    const inputElm = document.querySelector(selector).querySelector('.el-message-box__input')
    const haveFocus = inputElm.querySelector('input').isSameNode(document.activeElement)
    expect(inputElm).toBeDefined()
    expect(haveFocus).toBe(true)
  })

  test('prompt: focus on textarea', async () => {
    MessageBox.prompt('这是一段内容', {
      inputType: 'textarea',
      title: '标题名称',
    })
    await sleep()
    const textareaElm = document.querySelector(selector).querySelector('textarea')
    const haveFocus = textareaElm.isSameNode(document.activeElement)
    expect(haveFocus).toBe(true)
  })

  test('callback', async () => {
    let msgAction = ''
    MessageBox({
      title: '消息',
      message: '这是一段内容',
      callback: action => {
        msgAction = action
      },
    })
    await sleep()
    const closeBtn = document.querySelector('.el-message-box__close') as HTMLButtonElement
    closeBtn.click()
    await sleep()
    expect(msgAction).toEqual('cancel')
  })

  test('beforeClose', async() => {
    let msgAction = ''
    MessageBox({
      title: '消息',
      message: '这是一段内容',
      beforeClose: (action, instance) => {
        instance.close()
      },
    }, action => {
      msgAction = action
    })
    await sleep();
    (document.querySelector('.el-message-box__wrapper .el-button--primary') as HTMLButtonElement).click()
    await nextTick()
    await sleep()
    expect(msgAction).toEqual('confirm')
  })

  describe('promise', () => {
    test('resolve',async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示')
        .then(action => {
          msgAction = action
        })
      await sleep()
      const btn = document.querySelector('.el-message-box__btns .el-button--primary') as HTMLButtonElement
      btn.click()
      await sleep()
      expect(msgAction).toEqual('confirm')
    })

    test('reject', async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示')
        .catch(action => {
          msgAction = action
        })
      await sleep()
      const btn = document.querySelectorAll('.el-message-box__btns .el-button') as NodeListOf<HTMLButtonElement>
      btn[0].click()
      await sleep()
      expect(msgAction).toEqual('cancel')
    })
  })
})
