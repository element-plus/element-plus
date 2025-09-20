import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { TypeComponentsMap } from '@element-plus/utils'
import { rAF } from '@element-plus/test-utils/tick'
import Alert from '../src/alert.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(() => <Alert title={AXIOM} showIcon={true} />)
    expect(wrapper.find('.el-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--info')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <Alert title={'test'} showIcon={true} type={'success'} />
    ))
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--success')
    expect(wrapper.find('.el-alert__icon').classes()).toContain('el-icon')
    expect(wrapper.findComponent(TypeComponentsMap.success).exists()).toBe(true)
  })

  test('description', () => {
    const wrapper = mount(() => (
      <Alert title={'Dorne'} showIcon={true} description={AXIOM} />
    ))
    expect(wrapper.find('.el-alert__description').text()).toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(() => <Alert title={'test'} effect={'dark'} />)
    expect(wrapper.find('.el-alert').classes()).toContain('is-dark')
  })

  test('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.el-alert__title').text()).toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(() => <Alert closeText={'close'} />)
    const closeBtn = wrapper.find('.el-alert__close-btn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('should delay of appearance', () => {
    vi.useFakeTimers()
    const onOpen = vi.fn()
    mount(<Alert title={AXIOM} showAfter={100} onOpen={onOpen} />)

    expect(onOpen).toHaveBeenCalledTimes(0)
    vi.advanceTimersByTime(100)
    expect(onOpen).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  test('should delay of disappear', () => {
    vi.useFakeTimers()
    const onClose = vi.fn()
    const wrapper = mount(
      <Alert title={AXIOM} hideAfter={100} onClose={onClose} />
    )

    expect(onClose).toHaveBeenCalledTimes(0)
    // @ts-ignore
    wrapper.vm.onClose()
    vi.advanceTimersByTime(100)
    expect(onClose).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  test('should disappear automatically', () => {
    vi.useFakeTimers()
    const onClose = vi.fn()
    mount(<Alert title={AXIOM} autoClose={100} onClose={onClose} />)

    expect(onClose).toHaveBeenCalledTimes(0)
    vi.advanceTimersByTime(100)
    expect(onClose).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  test('should open immediately when not using show-after, issue #22012', async () => {
    const wrapper = mount(<Alert title={AXIOM} style={{ display: 'none' }} />)

    expect(wrapper.vm.visible).toBeTruthy()
    expect(wrapper.find('.el-alert').attributes('style')).toContain(
      'display: none'
    )
    await rAF()
    expect(wrapper.find('.el-alert').attributes('style')).toContain(
      'display: none'
    )
  })
})
