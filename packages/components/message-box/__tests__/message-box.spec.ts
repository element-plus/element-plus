import { mount } from '@vue/test-utils'
import MessageBox from '../src/messageBox'
import { rAF } from '@element-plus/test-utils/tick'
import { triggerNativeCompositeClick } from '@element-plus/test-utils/composite-click'

const selector = '.el-overlay'

const _mount = (invoker: () => void) => {
  return mount(
    {
      template: '<div></div>',
      mounted() {
        invoker()
      },
    },
    {
      attachTo: 'body',
    },
  )
}

describe('MessageBox', () => {
  afterEach(async () => {
    MessageBox.close()
    await rAF()
  })

  test('create and close', async () => {
    MessageBox({
      type: 'success',
      title: '消息',
      message: '这是一段内容',
    })
    const msgbox: HTMLElement = document.querySelector(selector)

    expect(msgbox).toBeDefined()
    await rAF()
    expect(
      msgbox.querySelector('.el-message-box__title span').textContent,
    ).toEqual('消息')
    expect(
      msgbox.querySelector('.el-message-box__message').querySelector('p')
        .textContent,
    ).toEqual('这是一段内容')
    MessageBox.close()
    await rAF()
    expect(msgbox.style.display).toEqual('none')
  })

  test('invoke with strings', () => {
    MessageBox({ title: '消息', message: '这是一段内容' })
    const msgbox = document.querySelector(selector)
    expect(msgbox).toBeDefined()
  })

  test('custom icon', async () => {
    MessageBox({
      type: 'warning',
      iconClass: 'el-icon-question',
      message: '这是一段内容',
    })
    await rAF()
    const icon = document.querySelector('.el-message-box__status')
    expect(icon.classList.contains('el-icon-question')).toBe(true)
  })

  test('html string', async () => {
    MessageBox({
      title: 'html string',
      dangerouslyUseHTMLString: true,
      message: '<strong>html string</strong>',
    })
    await rAF()
    const message = document.querySelector('.el-message-box__message strong')
    expect(message.textContent).toEqual('html string')
  })

  test('distinguish cancel and close', async () => {
    let msgAction = ''
    const invoker = () => {
      MessageBox({
        title: '消息',
        message: '这是一段内容',
        distinguishCancelAndClose: true,
        callback: action => {
          msgAction = action
        },
      })
    }

    _mount(invoker)
    await rAF()

    const btn = document.querySelector(
      '.el-message-box__close',
    ) as HTMLButtonElement
    btn.click()
    await rAF()
    expect(msgAction).toEqual('close')
  })

  test('alert', async () => {
    MessageBox.alert('这是一段内容', {
      title: '标题名称',
      type: 'warning',
    })
    await rAF()
    await triggerNativeCompositeClick(document.querySelector(selector))
    await rAF()
    const msgbox: HTMLElement = document.querySelector(selector)
    expect(msgbox.style.display).toEqual('')
    expect(msgbox.querySelector('.el-icon-warning')).toBeDefined()
  })

  test('confirm', async () => {
    MessageBox.confirm('这是一段内容', {
      title: '标题名称',
      type: 'warning',
    })
    await rAF()
    const btn = document
      .querySelector(selector)
      .querySelector('.el-button--primary') as HTMLButtonElement
    btn.click()
    await rAF()
    const msgbox: HTMLElement = document.querySelector(selector)
    expect(msgbox).toBe(null)
  })

  test('prompt', async () => {
    MessageBox.prompt('这是一段内容', {
      title: '标题名称',
      inputPattern: /test/,
      inputErrorMessage: 'validation failed',
    })
    await rAF()
    const inputElm = document
      .querySelector(selector)
      .querySelector('.el-message-box__input')
    const haveFocus = inputElm
      .querySelector('input')
      .isSameNode(document.activeElement)
    expect(inputElm).toBeDefined()
    expect(haveFocus).toBe(true)
  })

  test('prompt: focus on textarea', async () => {
    MessageBox.prompt('这是一段内容', {
      inputType: 'textarea',
      title: '标题名称',
    })
    await rAF()
    const textareaElm = document
      .querySelector(selector)
      .querySelector('textarea')
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
    await rAF()
    const closeBtn = document.querySelector(
      '.el-message-box__close',
    ) as HTMLButtonElement
    closeBtn.click()
    await rAF()
    expect(msgAction).toEqual('cancel')
  })

  test('beforeClose', async () => {
    let msgAction = ''
    MessageBox({
      callback: action => {
        msgAction = action
      },
      title: '消息',
      message: '这是一段内容',
      beforeClose: (_, __, done) => {
        done()
      },
    })
    await rAF()
    ;(document.querySelector(
      '.el-message-box__btns .el-button--primary',
    ) as HTMLButtonElement).click()
    await rAF()
    expect(msgAction).toEqual('confirm')
  })

  describe('promise', () => {
    test('resolve', async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示').then(
        action => {
          msgAction = action
        },
      )
      await rAF()
      const btn = document.querySelector(
        '.el-message-box__btns .el-button--primary',
      ) as HTMLButtonElement
      btn.click()
      await rAF()
      expect(msgAction).toEqual('confirm')
    })

    test('reject', async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示').catch(
        action => {
          msgAction = action
        },
      )
      await rAF()
      const btn = document.querySelector(
        '.el-message-box__btns .el-button',
      )
      ;(btn as HTMLButtonElement).click()
      await rAF()
      expect(msgAction).toEqual('cancel')
    })
  })
})
