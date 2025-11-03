// @ts-nocheck
import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import { triggerNativeCompositeClick } from '@element-plus/test-utils/composite-click'
import { QuestionFilled as QuestionFilledIcon } from '@element-plus/icons-vue'
import MessageBox from '../src/messageBox'
import { ElMessageBox } from '..'

const selector = '.el-overlay'
const QuestionFilled = markRaw(QuestionFilledIcon)

vi.mock('@element-plus/utils/error', () => ({
  debugWarn: vi.fn(),
}))

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
    }
  )
}

describe('MessageBox', () => {
  afterEach(async () => {
    MessageBox.close()
    document.body.innerHTML = ''
    await rAF()
  })

  test('create and close', async () => {
    MessageBox({
      type: 'success',
      title: '消息',
      message: '这是一段内容',
      customStyle: {
        width: '100px',
      },
    })
    const msgbox: HTMLElement = document.querySelector(selector)

    expect(msgbox).toBeDefined()
    await rAF()
    expect(
      msgbox.querySelector('.el-message-box__title span').textContent
    ).toEqual('消息')
    expect(
      msgbox.querySelector('.el-message-box__message').querySelector('p')
        .textContent
    ).toEqual('这是一段内容')
    /** custom inline style */
    expect(
      (msgbox.querySelector('.el-message-box') as HTMLElement).style.width
    ).toEqual('100px')
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
      icon: QuestionFilled,
      message: '这是一段内容',
    })
    await rAF()
    const icon = document.querySelector('.el-message-box__status')

    expect(icon.classList.contains('el-icon')).toBe(true)

    const svg = mount(QuestionFilled).find('svg').element
    expect(icon.querySelector('svg').innerHTML).toBe(svg.innerHTML)
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
        callback: (action) => {
          msgAction = action
        },
      })
    }

    _mount(invoker)
    await rAF()

    const btn = document.querySelector(
      '.el-message-box__close'
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

  test('autofocus', async () => {
    MessageBox.alert('这是一段内容', {
      autofocus: false,
      title: '标题名称',
    })
    await rAF()
    const btnElm = document.querySelector(
      '.el-message-box__btns .el-button--primary'
    )
    const haveFocus = btnElm.isSameNode(document.activeElement)
    expect(haveFocus).toBe(false)
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
      callback: (action) => {
        msgAction = action
      },
    })
    await rAF()
    const closeBtn = document.querySelector(
      '.el-message-box__close'
    ) as HTMLButtonElement
    closeBtn.click()
    await rAF()
    expect(msgAction).toEqual('cancel')
  })

  test('beforeClose', async () => {
    let msgAction = ''
    MessageBox({
      callback: (action) => {
        msgAction = action
      },
      title: '消息',
      message: '这是一段内容',
      beforeClose: (_, __, done) => {
        done()
      },
    })
    await rAF()
    ;(
      document.querySelector(
        '.el-message-box__btns .el-button--primary'
      ) as HTMLButtonElement
    ).click()
    await rAF()
    expect(msgAction).toEqual('confirm')
  })

  describe('promise', () => {
    test('resolve', async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示').then(
        (action) => {
          msgAction = action
        }
      )
      await rAF()
      const btn = document.querySelector(
        '.el-message-box__btns .el-button--primary'
      ) as HTMLButtonElement
      btn.click()
      await rAF()
      expect(msgAction).toEqual('confirm')
    })

    test('reject', async () => {
      let msgAction = ''
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示').catch(
        (action) => {
          msgAction = action
        }
      )
      await rAF()
      const btn = document.querySelector('.el-message-box__btns .el-button')
      ;(btn as HTMLButtonElement).click()
      await rAF()
      expect(msgAction).toEqual('cancel')
    })
  })
  describe('context inheritance', () => {
    it('should globally inherit context correctly', () => {
      expect(ElMessageBox._context).toBe(null)
      const testContext = {
        config: {
          globalProperties: {},
        },
        _context: {},
      }
      ElMessageBox.install?.(testContext as any)
      expect(ElMessageBox._context).not.toBe(null)
      expect(ElMessageBox._context).toBe(testContext._context)
      // clean up
      ElMessageBox._context = null
    })
  })

  describe('append to', () => {
    it('should append to body if parameter is not provided', () => {
      MessageBox({
        title: 'append to test',
        message: 'append to test',
      })
      const msgbox: HTMLElement = document.querySelector(`body > ${selector}`)
      expect(msgbox).toBeDefined()
    })

    it('should append to body if element does not exist', () => {
      MessageBox({
        title: 'append to test',
        message: 'append to test',
        appendTo: '.not-existing-selector',
      })
      const msgbox: HTMLElement = document.querySelector(`body > ${selector}`)
      expect(msgbox).toBeDefined()
    })

    it('should append to HtmlElement provided', () => {
      const htmlElement = document.createElement('div')
      document.body.appendChild(htmlElement)
      MessageBox({
        title: 'append to test',
        message: 'append to test',
        appendTo: htmlElement,
      })
      const msgbox: HTMLElement = htmlElement.querySelector(selector)
      expect(msgbox).toBeDefined()
    })

    it('should append to selector provided', () => {
      const htmlElement = document.createElement('div')
      htmlElement.className = 'custom-html-element'
      document.body.appendChild(htmlElement)
      MessageBox({
        title: 'append to test',
        message: 'append to test',
        appendTo: '.custom-html-element',
      })
      const msgbox: HTMLElement = htmlElement.querySelector(selector)
      expect(msgbox).toBeDefined()
    })
  })

  describe('accessibility', () => {
    test('title attribute should set aria-label', async () => {
      const title = 'Hello World'
      MessageBox({
        type: 'success',
        title,
        message: '这是一段内容',
      })
      await rAF()
      const msgbox: HTMLElement = document.querySelector(selector)!
      const msgboxDialog = msgbox?.querySelector('[role="dialog"]')!
      expect(msgboxDialog.getAttribute('aria-label')).toBe(title)
      expect(msgboxDialog.getAttribute('aria-labelledby')).toBeFalsy()
    })

    test('aria-describedby should point to modal body when not prompt', async () => {
      MessageBox({
        type: 'success',
        message: '这是一段内容',
      })
      await rAF()
      const msgbox: HTMLElement = document.querySelector(selector)!
      const msgboxDialog = msgbox.querySelector('[role="dialog"]')!
      const msgboxContent = msgboxDialog.querySelector(
        '.el-message-box__content'
      )!
      expect(msgboxDialog.getAttribute('aria-describedby')).toBe(
        msgboxContent.getAttribute('id')
      )
    })

    test('aria-describedby should not be used when prompt; label attached to input', async () => {
      const message = '这是一段内容'
      MessageBox.prompt(message, {
        type: 'success',
      })
      await rAF()
      const msgbox: HTMLElement = document.querySelector(selector)!
      const msgboxDialog = msgbox.querySelector('[role="dialog"]')!
      const label = msgboxDialog.querySelector('label')!
      const input = msgboxDialog.querySelector('input')!

      expect(msgboxDialog.getAttribute('aria-describedby')).toBeFalsy()
      expect(label.getAttribute('for')).toBe(input.getAttribute('id'))
      expect(label.textContent).toBe(message)
    })

    test('prompt inputValidator error message', async () => {
      const message = '这是一段内容'

      const inputValidator = vi.fn(() => {
        return 'error message'
      })

      MessageBox.prompt(message, {
        type: 'success',
        inputValidator,
      })
      await rAF()
      const msgbox: HTMLElement = document.querySelector(selector)!
      const confirmBtn = msgbox.querySelector('.el-button--primary')!
      const error = msgbox.querySelector('.el-message-box__errormsg')!

      expect(inputValidator).toHaveBeenCalledTimes(0)
      expect(error.textContent).toBe('')
      confirmBtn.click()
      await rAF()

      expect(inputValidator).toHaveBeenCalledTimes(1)
      expect(error.textContent).toBe('error message')
    })
  })
})
