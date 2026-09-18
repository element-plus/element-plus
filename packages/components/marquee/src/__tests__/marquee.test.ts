import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Marquee from '../marquee.vue'

describe('Marquee', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should render without crashing', () => {
    const wrapper = mount(Marquee, {
      slots: {
        default: 'Test content',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('should generate correct number of copies', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: 'Test content',
      },
    })

    await nextTick()

    // 检查副本数量
    const copies = wrapper.findAll('.el-marquee__copy')
    expect(copies.length).toBeGreaterThanOrEqual(3) // 至少3个副本
  })

  it('should handle horizontal scrolling correctly', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: 'Test content',
      },
    })

    await nextTick()

    const marquee = wrapper.vm
    const initialPosition = marquee.scrollPosition

    // 模拟滚动
    marquee.startScroll(true)

    // 等待一段时间让滚动发生
    vi.advanceTimersByTime(100)
    await nextTick()

    expect(marquee.scrollPosition).toBeGreaterThan(initialPosition)
  })

  it('should handle vertical scrolling correctly', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'vertical',
        speed: 50,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: 'Test content',
      },
    })

    await nextTick()

    const marquee = wrapper.vm
    const initialPosition = marquee.scrollPosition

    // 模拟滚动
    marquee.startScroll(true)

    // 等待一段时间让滚动发生
    vi.advanceTimersByTime(100)
    await nextTick()

    expect(marquee.scrollPosition).toBeGreaterThan(initialPosition)
  })

  it('should pause and resume scrolling', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        loop: true,
        autoStart: false,
        pauseOnHover: true,
      },
      slots: {
        default: 'Test content',
      },
    })

    await nextTick()

    const marquee = wrapper.vm

    // 开始滚动
    marquee.startScroll(true)
    expect(marquee.isPaused).toBe(false)

    // 暂停滚动
    marquee.pauseScroll()
    expect(marquee.isPaused).toBe(true)

    // 恢复滚动
    marquee.resumeScroll()
    expect(marquee.isPaused).toBe(false)
  })

  it('should calculate required copies correctly', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: 'Test content',
      },
    })

    await nextTick()

    const marquee = wrapper.vm

    // 检查所需副本数量计算
    expect(marquee.requiredCopies).toBeGreaterThanOrEqual(3)
  })
})
