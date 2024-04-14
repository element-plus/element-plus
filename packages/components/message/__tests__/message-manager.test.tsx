import { h, nextTick, ref } from 'vue'
import { describe, expect, it, test, vi } from 'vitest'
import { getStyle } from '@element-plus/utils'
import { rAF } from '@element-plus/test-utils/tick'
import { ElMessage } from '..'
import Message from '../src/method'

const selector = '.el-message'
// TODO: testing the original transition with `nextTick`'

describe('Message on command', () => {
  test('it should get component handle', async () => {
    const handle = Message()
    await rAF()
    expect(document.querySelector(selector)).toBeTruthy()
    handle.close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeFalsy()
  })

  test('it should be able to manually close a message', async () => {
    const { close } = Message()
    await rAF()
    const element = document.querySelector(selector)
    expect(element).toBeTruthy()
    close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeNull()
  })

  test('it should close all messages', async () => {
    const onClose = vi.fn()
    const instances = []
    for (let i = 0; i < 4; i++) {
      const instance = Message({
        duration: 0,
        onClose,
      })
      instances.push(instance)
    }

    await rAF()
    const elements = document.querySelectorAll(selector)
    expect(elements.length).toBe(4)
    Message.closeAll()
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(4)
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

  test('it should close all messages of the specified type', async () => {
    const onClose = vi.fn()
    const instances = []
    const success = 'success'
    for (let i = 0; i < 4; i++) {
      const instance = Message({
        type: success,
        duration: 0,
        onClose,
      })
      instances.push(instance)
    }

    for (let i = 0; i < 2; i++) {
      const instance = Message({
        duration: 0,
        onClose,
      })
      instances.push(instance)
    }

    await rAF()
    const elements = document.querySelectorAll(selector)
    const successElements = document.querySelectorAll(`${selector}--${success}`)
    expect(elements.length).toBe(6)
    expect(successElements.length).toBe(4)
    Message.closeAll(success)
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(4)
    expect(document.querySelectorAll(selector).length).toBe(2)
    Message.closeAll()
  })

  test('it should stack messages', async () => {
    const messages = [Message(), Message(), Message()]
    await rAF()
    const elements = document.querySelectorAll(selector)
    expect(elements.length).toBe(3)

    const getTopValue = (elm: Element): number =>
      Number.parseInt(getStyle(elm as HTMLElement, 'top'), 10)

    const topValues: number[] = []
    elements.forEach((e) => {
      topValues.push(getTopValue(e))
    })

    for (let i = 1; i < topValues.length; i++) {
      expect(topValues[i - 1]).toBeLessThan(topValues[i])
    }

    messages.forEach((m) => m.close())
  })

  test('correct space when set offset', async () => {
    const offset = 100
    const space = 16
    const messages = [Message({ offset }), Message({ offset })]

    await rAF()
    const elements = document.querySelectorAll(selector)
    expect(elements.length).toBe(2)

    const getTopValue = (elm: Element): number =>
      Number.parseFloat(getStyle(elm as HTMLElement, 'top'))

    const firstElementTop = getTopValue(elements[0])
    const secondElementTop = getTopValue(elements[1])

    expect(firstElementTop).toBe(offset)
    expect(secondElementTop).toBe(offset + space)

    messages.forEach((m) => m.close())
  })

  test('it should have 4 other types of message', () => {
    expect(Message.success).toBeInstanceOf(Function)
    expect(Message.warning).toBeInstanceOf(Function)
    expect(Message.info).toBeInstanceOf(Function)
    expect(Message.error).toBeInstanceOf(Function)
  })

  test('it should appendTo specified HTMLElement', async () => {
    const htmlElement = document.createElement('div')
    const handle = Message({
      appendTo: htmlElement,
    })
    await rAF()
    expect(htmlElement.querySelector(selector)).toBeTruthy()
    handle.close()
    await rAF()
    await nextTick()
    expect(htmlElement.querySelector(selector)).toBeFalsy()
  })

  test('it should appendTo specified selector', async () => {
    const htmlElement = document.createElement('div')
    htmlElement.classList.add('message-manager')
    document.body.appendChild(htmlElement)
    const handle = Message({
      appendTo: '.message-manager',
    })
    await rAF()
    expect(htmlElement.querySelector(selector)).toBeTruthy()
    handle.close()
    await rAF()
    await nextTick()
    expect(htmlElement.querySelector(selector)).toBeFalsy()
  })

  test('it should render vnode function', async () => {
    const i = ref(0)

    Message({
      message: () => h('div', i.value),
    })

    await rAF()
    expect(document.querySelector(selector)?.textContent).toMatchInlineSnapshot(
      `"0"`
    )

    i.value++

    await rAF()
    expect(document.querySelector(selector)?.textContent).toMatchInlineSnapshot(
      `"1"`
    )
  })

  describe('context inheritance', () => {
    it('should globally inherit context correctly', () => {
      expect(ElMessage._context).toBe(null)
      const testContext = {
        config: {
          globalProperties: {},
        },
        _context: {},
      }
      ElMessage.install?.(testContext as any)
      expect(ElMessage._context).not.toBe(null)
      expect(ElMessage._context).toBe(testContext._context)
      // clean up
      ElMessage._context = null
    })
  })
})
