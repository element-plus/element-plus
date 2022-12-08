import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import dayjs from 'dayjs'
import Countdown from '../src/countdown.vue'

const TITLE_CLASS = '.el-statistic__head'
const CONTENT_CLASS = '.el-statistic__content'

describe('Countdown.vue', () => {
  it('render test', async () => {
    const wrapper = mount(() => (
      <Countdown title="test" value={Date.now() + 1000 * 60} />
    ))

    expect(wrapper.find(TITLE_CLASS).text()).toBe('test')
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('00:00:59')
  })

  describe('format', () => {
    const value = dayjs()
      .add(2, 'd')
      .add(2, 'h')
      .add(2, 'm')
      .add(2, 's')
      .add(2, 'ms')

    it.each([
      ['DD HH:mm:ss', '02 02:02:01'],
      ['HH:mm:ss', '50:02:01'],
      ['H:m:s', '50:2:1'],
    ])('should work with %s', async (format, expected) => {
      const wrapper = mount(() => <Countdown value={value} format={format} />)

      expect(wrapper.find(CONTENT_CLASS).text()).toBe(expected)
    })
  })

  it('change event', async () => {
    vi.useFakeTimers()
    const onChange = vi.fn()
    mount(() => (
      <Countdown onChange={onChange} value={Date.now() + 1000 * 60} />
    ))

    vi.advanceTimersByTime((1000 / 30) * 2)
    expect(onChange).toHaveBeenCalledTimes(2)
    vi.useRealTimers()
  })

  it('finish event', async () => {
    vi.useFakeTimers()
    const onFinish = vi.fn()
    mount(() => (
      <Countdown onFinish={onFinish} value={Date.now() + 1000 * 60} />
    ))

    vi.advanceTimersByTime(1000 * 30)
    expect(onFinish).not.toHaveBeenCalled()
    vi.runAllTimers()
    expect(onFinish).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
