import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ElMessageBox } from '@element-plus/components/message-box'
import ConfigProvider from '@element-plus/components/config-provider'
import Overlay from '../src/overlay'

const AXIOM = 'Rem is the best girl'

describe('Overlay.vue', () => {
  test('render test', async () => {
    const wrapper = mount(() => <Overlay>{AXIOM}</Overlay>)
    expect(wrapper.text()).toEqual(AXIOM)
    const testClass = 'test-class'
    await wrapper.setProps({
      overlayClass: testClass,
    })

    expect(wrapper.find(`.${testClass}`)).toBeTruthy()
  })

  test('should emit click event', async () => {
    const wrapper = mount(() => <Overlay>{AXIOM}</Overlay>)
    await wrapper.find('.el-overlay').trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })

  test('no mask', async () => {
    const mask = ref(true)
    const wrapper = mount(() => <Overlay mask={mask.value}>{AXIOM}</Overlay>)

    const selector = '.el-overlay'
    expect(wrapper.find(selector).exists()).toBe(true)

    mask.value = false

    await nextTick()

    expect(wrapper.find(selector).exists()).toBe(false)

    mask.value = true

    await nextTick()

    expect(wrapper.find(selector).exists()).toBe(true)
  })

  test('global', async () => {
    const testNamespace = 'test'
    const callout = () => {
      ElMessageBox.prompt('Title', 'Description')
    }
    const wrapper = mount(() => {
      return (
        <ConfigProvider namespace={testNamespace}>
          <button onClick={callout}>{AXIOM}</button>
        </ConfigProvider>
      )
    })

    expect(document.body.querySelector(`.${testNamespace}-overlay`)).toBeNull()
    await wrapper.find('button').trigger('click')
    await nextTick()

    expect(
      document.body.querySelector(`.${testNamespace}-overlay`)
    ).toBeDefined()
  })
})
