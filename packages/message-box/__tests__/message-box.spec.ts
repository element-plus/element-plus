import MessageBox from '../src/messageBox'

const sleep = (time = 250) => new Promise(resolve => setTimeout(resolve, time))

const timeout = async (fn, time = 250) => {
  await sleep(time)
  fn()
}

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
    const msgbox = document.querySelector(selector)
    expect(msgbox).toBeDefined()
    await sleep()
    expect(msgbox.querySelector('.el-message-box__title span').textContent).toEqual('消息')
    expect(msgbox.querySelector('.el-message-box__message').querySelector('p').textContent).toEqual('这是一段内容')
    MessageBox.close()
    await sleep()
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
    // BUG TODO FIX
    let msgAction = ''
    MessageBox({
      title: '消息',
      message: '这是一段内容',
      distinguishCancelAndClose: true,
    }, action => {
      msgAction = action
    })
    MessageBox.close()
    document.querySelector('.el-message-box__close').click()
    await sleep()
    expect(msgAction).toEqual('')
  })
})
