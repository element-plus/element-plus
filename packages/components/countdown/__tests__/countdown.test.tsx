import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import dayjs from 'dayjs'
import Countdown from '../src/countdown.vue'

import type { VueWrapper } from '@vue/test-utils'

const TITLE_CLASS = '.el-statistic__head'
const CONTENT_CLASS = '.el-statistic__content'

describe('Countdown.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    wrapper.unmount()
  })

  it('render test', async () => {
    wrapper = await mount(() => (
      <Countdown title="test" value={Date.now() + 1000 * 60} />
    ))

    expect(wrapper.find(TITLE_CLASS).text()).toBe('test')
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('00:01:00')
  })

  describe('format', () => {
    it.each([
      ['DD HH:mm:ss', '02 02:02:02'],
      ['DD [days] HH [hours] mm:ss', '02 days 02 hours 02:02'],
      ['HH:mm:ss', '50:02:02'],
      ['HH:mm:ss:SSS', '50:02:02:002'],
    ])('should work with %s', async (format, expected) => {
      const value = dayjs()
        .add(2, 'd')
        .add(2, 'h')
        .add(2, 'm')
        .add(2, 's')
        .add(2, 'ms')

      wrapper = await mount(() => <Countdown value={value} format={format} />)

      expect(wrapper.find(CONTENT_CLASS).text()).toBe(expected)
    })
  })

  it('change event', () => {
    const onChange = vi.fn()
    wrapper = mount(() => (
      <Countdown onChange={onChange} value={Date.now() + 1000 * 60} />
    ))

    vi.advanceTimersByTime(16)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('finish event', () => {
    const onFinish = vi.fn()
    wrapper = mount(() => (
      <Countdown onFinish={onFinish} value={Date.now() + 1000 * 60} />
    ))

    vi.advanceTimersByTime(1000 * 30)
    expect(onFinish).not.toHaveBeenCalled()
    vi.runAllTimers()
    expect(onFinish).toHaveBeenCalled()
  })
})
